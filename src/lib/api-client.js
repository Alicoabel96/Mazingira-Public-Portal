/**
 * API client — single entry point for the browser to talk to the backend.
 *
 * Every function hits a Next.js route handler in `src/app/api/`.
 * When we swap in-memory mock data for a real database or external API,
 * only the route handlers change — this client stays the same.
 */

export class ApiError extends Error {
  constructor(message, status, body) {
    super(message);
    this.name   = "ApiError";
    this.status = status;
    this.body   = body;
  }
}

async function request(path, init) {
  const res = await fetch(path, {
    headers: { "content-type": "application/json" },
    ...init,
  });

  if (!res.ok) {
    let body = null;
    try { body = await res.json(); } catch {}
    throw new ApiError(
      body?.error || `Request failed: ${res.status}`,
      res.status,
      body,
    );
  }

  const json = await res.json();
  return json.data;
}

export const api = {
  // ── Regions ──────────────────────────────────────────────────────────────
  regions: () =>
    request("/api/regions"),

  region: (id) =>
    request(`/api/regions/${encodeURIComponent(id)}`),

  /**
   * Returns ["All Districts", ...district names] for a region.
   * Calls GET /api/regions/[id]/districts
   */
  districts: (regionId) =>
    request(`/api/regions/${encodeURIComponent(regionId)}/districts`),

  // ── Modules ───────────────────────────────────────────────────────────────
  modules: () =>
    request("/api/modules"),

  /**
   * Fetch dashboard data.
   *
   * @param {string}      moduleId
   * @param {string}      regionId
   * @param {string|null} districtId  — pass null or omit for region-level data
   */
  dashboard: (moduleId, regionId, districtId = null) => {
    const base = `/api/modules/${encodeURIComponent(moduleId)}/regions/${encodeURIComponent(regionId)}`;
    const url  = districtId && districtId !== "All Districts"
      ? `${base}?district=${encodeURIComponent(districtId)}`
      : base;
    return request(url);
  },

  // ── Other ─────────────────────────────────────────────────────────────────
  stats:  () => request("/api/stats"),
  slides: () => request("/api/slides"),

  // Geographic boundaries (GeoJSON for the Leaflet map)
  geoRegions:   () => request("/api/geo/regions"),
  geoDistricts: () => request("/api/geo/districts"),
};
