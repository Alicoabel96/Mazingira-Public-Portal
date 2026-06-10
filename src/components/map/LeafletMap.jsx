"use client";

import { useEffect, useRef, useState } from "react";
import { api } from "@/lib/api-client";

// ── Tanzania bounds & zoom ────────────────────────────────────────────────────
// Tight bounds so the user cannot pan or zoom outside Tanzania.
const TZ_BOUNDS    = [[-12.0, 29.0], [0.0, 41.5]];   // SW / NE corners
const TZ_CENTER    = [-6.5, 34.8];
const MIN_ZOOM     = 6;   // zoomed all the way out shows full Tanzania
const MAX_ZOOM     = 10;
const DEFAULT_ZOOM = 6;

// ── Colors ───────────────────────────────────────────────────────────────────
// Neutral fill for every unselected region — same for all of them.
// Unselected regions use the theme primary at moderate opacity (old MODERATE = 0.48)
const NEUTRAL_STROKE  = "#ffffff";
const NEUTRAL_WEIGHT  = 0.8;
const NEUTRAL_OPACITY = 0.48; // old MODERATE alpha

const SELECTED_STROKE_W = 2.5;

function slugify(name) {
  return String(name || "")
    .toLowerCase().trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export default function LeafletMap({
  viewMode,
  selectedRegion,
  regions,
  onSelectRegion,
  showDistricts,
  theme,
}) {
  const containerRef   = useRef(null);
  const mapRef         = useRef(null);
  const layersRef      = useRef({ region: null, district: null });
  const selRef         = useRef(selectedRegion);
  const themeRef       = useRef(theme);
  const viewModeRef    = useRef(viewMode);
  const regionsByIdRef = useRef({});
  const destroyedRef   = useRef(false);

  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);
  const [tooltip, setTooltip] = useState("");

  // Keep refs up to date every render so Leaflet event callbacks see fresh values
  selRef.current      = selectedRegion;
  themeRef.current    = theme;
  viewModeRef.current = viewMode;
  regionsByIdRef.current = Object.fromEntries(
    (regions || []).map((r) => [r.id, r]),
  );

  // ── Helpers ──────────────────────────────────────────────────────────────

  function mapAlive() {
    return (
      mapRef.current &&
      !destroyedRef.current &&
      mapRef.current._leaflet_id !== undefined
    );
  }

  function safeRemoveLayer(map, layer) {
    if (!layer) return;
    try { map.removeLayer(layer); } catch {}
  }

  function safeRemoveMap() {
    const map = mapRef.current;
    mapRef.current = null;
    if (!map) return;
    try { map.remove(); } catch {}
  }

  // ── Style helpers ─────────────────────────────────────────────────────────

  /**
   * Returns the Leaflet path style for a feature.
   * Selected region  → primary theme colour, clearly highlighted.
   * Everything else  → same flat neutral colour (no heatmap categories).
   */
  function regionStyle(feature) {
    const id         = slugify(feature?.properties?.shapeName);
    const isNational = viewModeRef.current === "national";
    const isSelected = id === selRef.current;
    const t          = themeRef.current || {};
    const primary    = t.primary || "#0b736c";
    const dark       = t.dark    || "#0d3a30";

    // National view — every region gets uniform moderate highlight
    if (isNational) {
      return {
        fillColor:   primary,
        fillOpacity: NEUTRAL_OPACITY,
        color:       "#ffffff",
        weight:      0.8,
      };
    }

    // Regional view — selected highlighted, others neutral
    if (isSelected) {
      return {
        fillColor:   primary,
        fillOpacity: 0.82,
        color:       dark,
        weight:      SELECTED_STROKE_W,
      };
    }
    return {
      fillColor:   primary,
      fillOpacity: NEUTRAL_OPACITY,
      color:       NEUTRAL_STROKE,
      weight:      NEUTRAL_WEIGHT,
    };
  }

  function featureId(f)   { return slugify(f?.properties?.shapeName); }
  function featureName(f) { return f?.properties?.shapeName || "Region"; }

  // ── Bootstrap ─────────────────────────────────────────────────────────────

  useEffect(() => {
    if (mapRef.current) return;
    destroyedRef.current = false;

    const css = document.createElement("link");
    css.rel  = "stylesheet";
    css.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
    document.head.appendChild(css);

    const js = document.createElement("script");
    js.src   = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
    js.async = true;
    js.onload = () => { if (!destroyedRef.current) initMap(); };
    document.head.appendChild(js);

    return () => {
      destroyedRef.current = true;
      layersRef.current = { region: null, district: null };
      safeRemoveMap();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function initMap() {
    if (!containerRef.current || mapRef.current || destroyedRef.current) return;
    const L = window.L;
    if (!L) return;

    const bounds = L.latLngBounds(TZ_BOUNDS);

    const map = L.map(containerRef.current, {
      center:    TZ_CENTER,
      zoom:      DEFAULT_ZOOM,
      minZoom:   MIN_ZOOM,
      maxZoom:   MAX_ZOOM,
      maxBounds: bounds,
      maxBoundsViscosity: 1.0,
      zoomControl:        false,
      attributionControl: false,
      // Disable scroll-wheel zoom so the map doesn't fight page scrolling.
      // Users can still zoom with the +/- buttons or pinch on touch.
      scrollWheelZoom:    false,
      // Also disable touch zoom interference on mobile
      tap:                false,
    });
    mapRef.current = map;

    // Enforce minZoom by also fitting to the Tanzania bounds immediately,
    // and reset if the user somehow gets out of bounds.
    map.setMinZoom(MIN_ZOOM);
    map.setMaxZoom(MAX_ZOOM);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: "© OpenStreetMap contributors, © CARTO",
        subdomains:  "abcd",
        maxZoom:     MAX_ZOOM,
        // Tile layer also restricted to the same bounds
        bounds:      bounds,
      },
    ).addTo(map);

    L.control.zoom({ position: "topright" }).addTo(map);

    loadRegions(L, map);
  }

  // ── Data loading ──────────────────────────────────────────────────────────

  async function loadRegions(L, map) {
    try {
      setError(null);
      const geojson = await api.geoRegions();
      if (destroyedRef.current || !mapRef.current) return;

      const layer = L.geoJSON(geojson, {
        style: (f) => regionStyle(f),
        onEachFeature: (feature, fl) => {
          const id   = featureId(feature);
          const name = featureName(feature);

          fl.on("mouseover", function () {
            setTooltip(name);
            // Only highlight unselected regions on hover
            if (id !== selRef.current) {
              try {
                this.setStyle({
                  fillColor:   themeRef.current?.primary || "#0b736c",
                  fillOpacity: 0.45,
                  weight:      1.2,
                });
              } catch {}
            }
          });

          fl.on("mouseout", function () {
            setTooltip("");
            try { this.setStyle(regionStyle(feature)); } catch {}
          });

          fl.on("click", () => {
            // Only dispatch if the region is in our local data list
            if (regionsByIdRef.current[id]) onSelectRegion?.(id);
          });

          fl.bindTooltip(`<strong>${name}</strong>`, {
            permanent:  false,
            direction:  "center",
            sticky:     true,
            className:  "tz-tip",
          });
        },
      }).addTo(map);

      layersRef.current.region = layer;
      setLoading(false);
      zoomToRegion(map, layer, selRef.current);
    } catch (e) {
      if (destroyedRef.current) return;
      console.warn("Region GeoJSON failed:", e.message);
      setError(e.message || "Failed to load map data");
      setLoading(false);
    }
  }

  async function loadDistricts(L, map) {
    if (!mapAlive()) return;
    safeRemoveLayer(map, layersRef.current.district);
    layersRef.current.district = null;

    try {
      const geojson = await api.geoDistricts();
      if (!mapAlive()) return;

      const t = themeRef.current || {};
      const layer = L.geoJSON(geojson, {
        style: () => ({
          fillColor:   t.primary || "#0b736c",
          fillOpacity: 0.30,
          color:       "white",
          weight:      0.8,
        }),
        onEachFeature: (feature, fl) => {
          fl.bindTooltip(
            `<strong>${feature.properties.shapeName || "District"}</strong>`,
            { permanent: false, direction: "center", sticky: true, className: "tz-tip" },
          );
        },
      }).addTo(map);

      layersRef.current.district = layer;
    } catch (e) {
      if (!destroyedRef.current) console.warn("District GeoJSON failed:", e.message);
    }
  }

  function zoomToRegion(map, regionLayer, regionId) {
    if (!mapAlive() || !regionLayer) return;
    try {
      let found = false;
      regionLayer.eachLayer((fl) => {
        if (featureId(fl.feature) === regionId) {
          const b = fl.getBounds();
          if (b.isValid()) {
            map.fitBounds(b, { padding: [50, 50], maxZoom: MAX_ZOOM });
            found = true;
          }
        }
      });
      if (!found) {
        // Fall back to full Tanzania view
        map.fitBounds(L.latLngBounds(TZ_BOUNDS), { padding: [20, 20] });
      }
    } catch {}
  }

  // ── React to prop changes ─────────────────────────────────────────────────

  useEffect(() => {
    if (!mapAlive() || !layersRef.current.region) return;
    const map         = mapRef.current;
    const regionLayer = layersRef.current.region;
    const L           = window.L;

    // Re-style all regions (selected one gets highlight, others get neutral)
    try {
      regionLayer.eachLayer((fl) => fl.setStyle(regionStyle(fl.feature)));
    } catch {}

    if (showDistricts) {
      loadDistricts(L, map);
    } else {
      safeRemoveLayer(map, layersRef.current.district);
      layersRef.current.district = null;
      if (viewMode === "national") {
        // Zoom to full Tanzania
        try { map.fitBounds(L.latLngBounds(TZ_BOUNDS), { padding: [20, 20] }); } catch {}
      } else {
        zoomToRegion(map, regionLayer, selectedRegion);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewMode, selectedRegion, showDistricts, theme?.primary, theme?.dark]);

  // ── Render ────────────────────────────────────────────────────────────────

  const soft = theme?.soft || "#d6f5f2";

  return (
    <div className="relative h-full min-h-[460px]">
      {/* Initial loading overlay */}
      {loading && (
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3"
          style={{ backgroundColor: soft }}
        >
          <div
            className="w-[34px] h-[34px] rounded-full border-[3px] border-gray-200 animate-[spin_.75s_linear_infinite]"
            style={{ borderTopColor: theme?.primary || "#0b736c" }}
          />
          <span
            className="text-[12.5px] font-semibold"
            style={{ color: theme?.primary || "#0b736c" }}
          >
            Loading map…
          </span>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="absolute inset-0 z-20 bg-red-50 flex flex-col items-center justify-center gap-2 p-6 text-center">
          <span className="text-sm font-bold text-red-700">Map data unavailable</span>
          <span className="text-xs text-red-600">{error}</span>
        </div>
      )}

      {/* Map container */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Hover tooltip */}
      {tooltip && (
        <div
          className="absolute bottom-[14px] left-2.5 z-[1000] bg-white rounded px-2.5 py-1 text-[12.5px] font-bold shadow border border-gray-200 pointer-events-none"
          style={{ color: theme?.dark || "#0d3a30" }}
        >
          {tooltip}
        </div>
      )}

      {/* Selected region label — replaces the old legend */}
      {!loading && (
        <div
          className="absolute top-2.5 left-2.5 z-[1000] flex items-center gap-1.5 bg-white rounded-full px-3 py-1 shadow border border-gray-100 pointer-events-none"
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: theme?.primary || "#0b736c" }}
          />
          <span className="text-[11.5px] font-semibold text-gray-700">
            {viewMode === "national"
              ? "Tanzania — National View"
              : ((regions || []).find((r) => r.id === selectedRegion)?.name || selectedRegion)}
          </span>
        </div>
      )}
    </div>
  );
}
