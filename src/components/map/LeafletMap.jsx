"use client";

import { useEffect, useRef, useState } from "react";
import { api } from "@/lib/api-client";

/**
 * Tanzania bounding box — map cannot be panned outside this area, and the
 * minZoom is sized so the whole country fits comfortably.
 */
const TZ_BOUNDS = [
  [-12.0, 29.0], // SW
  [  0.0, 41.5], // NE
];
const TZ_CENTER  = [-6.5, 34.8];
const MIN_ZOOM   = 5;
const MAX_ZOOM   = 10;
const DEFAULT_ZOOM = 6;

/**
 * geoBoundaries puts the region/district name in `shapeName`. We normalize
 * it to a slug so we can match it against our local `regions` list.
 */
function slugify(name) {
  return String(name || "")
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * Priority → fill-opacity modifier. A darker/bolder color means higher
 * priority; we express that by adjusting the fill opacity of the theme
 * primary color on top of a soft background.
 */
const PRIORITY_ALPHA = {
  "very-high": 0.92,
  high:        0.70,
  moderate:    0.48,
  low:         0.26,
};

export default function LeafletMap({
  selectedRegion,
  regions,          // our local region list with priority data
  onSelectRegion,
  showDistricts,
  theme,            // { primary, dark, soft }
}) {
  const containerRef = useRef(null);
  const mapRef       = useRef(null);
  const layersRef    = useRef({ region: null, district: null });
  const selRef       = useRef(selectedRegion);
  const themeRef     = useRef(theme);
  const regionsByIdRef = useRef({});

  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);
  const [tooltip, setTooltip] = useState("");

  // Keep refs in sync so event handlers see latest values
  selRef.current   = selectedRegion;
  themeRef.current = theme;
  regionsByIdRef.current = Object.fromEntries(
    (regions || []).map((r) => [r.id, r]),
  );

  // ── Bootstrap Leaflet once ────────────────────────────────────────────
  useEffect(() => {
    if (mapRef.current) return;
    let cancelled = false;

    const css = document.createElement("link");
    css.rel  = "stylesheet";
    css.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
    document.head.appendChild(css);

    const js = document.createElement("script");
    js.src   = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
    js.async = true;
    js.onload = () => { if (!cancelled) initMap(); };
    document.head.appendChild(js);

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function initMap() {
    if (!containerRef.current || mapRef.current) return;
    const L = window.L;
    if (!L) return;

    const bounds = L.latLngBounds(TZ_BOUNDS);

    const map = L.map(containerRef.current, {
      center: TZ_CENTER,
      zoom:       DEFAULT_ZOOM,
      minZoom:    MIN_ZOOM,
      maxZoom:    MAX_ZOOM,
      maxBounds:  bounds,
      maxBoundsViscosity: 1.0,   // hard clamp — can't drag outside
      zoomControl: false,
      attributionControl: false,
    });
    mapRef.current = map;

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: "© OpenStreetMap, © CartoDB",
        subdomains: "abcd",
        maxZoom: MAX_ZOOM,
        bounds: bounds,
      },
    ).addTo(map);

    L.control.zoom({ position: "topright" }).addTo(map);

    loadRegions(L, map);
  }

  /** Feature props from geoBoundaries: shapeName, shapeID, shapeISO */
  function featureId(feature) {
    return slugify(feature?.properties?.shapeName);
  }
  function featureName(feature) {
    return feature?.properties?.shapeName || "Region";
  }

  function regionStyle(feature) {
    const id       = featureId(feature);
    const sel      = id === selRef.current;
    const theme    = themeRef.current || {};
    const primary  = theme.primary || "#0b736c";
    const dark     = theme.dark    || "#0d3a30";
    const soft     = theme.soft    || "#d6f5f2";

    const localRegion = regionsByIdRef.current[id];
    const priority = localRegion?.priority || "low";
    const alpha    = PRIORITY_ALPHA[priority] ?? 0.3;

    return {
      fillColor:   sel ? dark : primary,
      fillOpacity: sel ? 0.92 : alpha,
      color:       sel ? dark : "#ffffff",
      weight:      sel ? 2.5 : 0.8,
    };
  }

  async function loadRegions(L, map) {
    try {
      setError(null);
      const geojson = await api.geoRegions();

      const layer = L.geoJSON(geojson, {
        style: (f) => regionStyle(f),
        onEachFeature: (feature, fl) => {
          const id   = featureId(feature);
          const name = featureName(feature);

          fl.on("mouseover", function () {
            setTooltip(name);
            if (id !== selRef.current)
              this.setStyle({ fillOpacity: 0.88, weight: 1.5 });
          });
          fl.on("mouseout", function () {
            setTooltip("");
            if (id !== selRef.current) this.setStyle(regionStyle(feature));
          });
          fl.on("click", () => {
            // Only dispatch if the region exists in our local data
            if (regionsByIdRef.current[id]) onSelectRegion?.(id);
          });

          fl.bindTooltip(`<strong>${name}</strong>`, {
            permanent: false,
            direction: "center",
            sticky: true,
            className: "tz-tip",
          });
        },
      }).addTo(map);

      layersRef.current.region = layer;
      setLoading(false);
      zoomToRegion(map, layer, selRef.current);
    } catch (e) {
      console.warn("Region GeoJSON failed:", e.message);
      setError(e.message || "Failed to load map data");
      setLoading(false);
    }
  }

  async function loadDistricts(L, map) {
    if (layersRef.current.district) {
      map.removeLayer(layersRef.current.district);
      layersRef.current.district = null;
    }
    try {
      const geojson = await api.geoDistricts();
      const theme   = themeRef.current || {};

      const layer = L.geoJSON(geojson, {
        style: () => ({
          fillColor: theme.primary || "#0b736c",
          fillOpacity: 0.35,
          color: "white",
          weight: 1.0,
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
      console.warn("District GeoJSON failed:", e.message);
    }
  }

  function zoomToRegion(map, regionLayer, regionId) {
    let found = false;
    regionLayer.eachLayer((fl) => {
      if (featureId(fl.feature) === regionId) {
        const b = fl.getBounds();
        if (b.isValid()) {
          map.fitBounds(b, { padding: [40, 40], maxZoom: MAX_ZOOM });
          found = true;
        }
      }
    });
    if (!found) {
      // Fall back to full country view
      map.fitBounds(regionLayer.getBounds(), { padding: [20, 20] });
    }
  }

  // ── React to prop changes ─────────────────────────────────────────────
  useEffect(() => {
    if (!mapRef.current || !layersRef.current.region) return;
    const map = mapRef.current;
    const regionLayer = layersRef.current.region;
    const L = window.L;

    // Re-style every region to pick up new selection/theme colors
    regionLayer.eachLayer((fl) => fl.setStyle(regionStyle(fl.feature)));

    if (showDistricts) {
      loadDistricts(L, map);
    } else {
      if (layersRef.current.district) {
        map.removeLayer(layersRef.current.district);
        layersRef.current.district = null;
      }
      zoomToRegion(map, regionLayer, selectedRegion);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRegion, showDistricts, theme?.primary, theme?.dark]);

  const themeSoft = theme?.soft || "#d6f5f2";

  return (
    <div className="relative h-full min-h-[460px]">
      {loading && (
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3"
          style={{ backgroundColor: themeSoft }}
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

      {error && !loading && (
        <div className="absolute inset-0 z-20 bg-red-50 flex flex-col items-center justify-center gap-2 p-6 text-center">
          <span className="text-sm font-bold text-red-700">Map data unavailable</span>
          <span className="text-xs text-red-600">{error}</span>
        </div>
      )}

      <div ref={containerRef} className="w-full h-full" />

      {tooltip && (
        <div className="absolute bottom-[52px] left-2.5 z-[1000] bg-white rounded px-2.5 py-1 text-[12.5px] font-bold shadow-tooltip border border-gray-200 pointer-events-none"
             style={{ color: theme?.dark || "#0d3a30" }}>
          {tooltip}
        </div>
      )}

      {/* Legend — 4 shades of the module's primary color */}
      <div className="absolute bottom-2.5 left-2.5 z-[1000] bg-white rounded px-2.5 py-2 shadow-tooltip border border-gray-200">
        {[
          { label: "VERY HIGH", alpha: 0.92 },
          { label: "HIGH",      alpha: 0.70 },
          { label: "MODERATE",  alpha: 0.48 },
          { label: "LOW",       alpha: 0.26 },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5 mb-1 last:mb-0">
            <span
              className="w-4 h-3.5 border border-black/10"
              style={{
                backgroundColor: theme?.primary || "#0b736c",
                opacity: l.alpha,
              }}
              aria-hidden="true"
            />
            <span className="text-[10px] font-semibold text-gray-600 tracking-wider">
              {l.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
