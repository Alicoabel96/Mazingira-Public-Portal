/**
 * API client — the single entry point for the browser to talk to our backend.
 *
 * Every function here hits a route handler in `src/app/api/`. When we swap the
 * in-memory `src/lib/db/data.js` for a real DB, no client code changes.
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

// ─── Reads ───────────────────────────────────────────────────────────────────
export const api = {
  regions: () => request("/api/regions"),
  region:  (id) => request(`/api/regions/${encodeURIComponent(id)}`),

  modules: () => request("/api/modules"),

  dashboard: (moduleId, regionId) =>
    request(
      `/api/modules/${encodeURIComponent(moduleId)}/regions/${encodeURIComponent(regionId)}`,
    ),

  stats:  () => request("/api/stats"),
  slides: () => request("/api/slides"),

  // Geographic boundaries (proxied from geoBoundaries.org)
  geoRegions:   () => request("/api/geo/regions"),
  geoDistricts: () => request("/api/geo/districts"),
};
