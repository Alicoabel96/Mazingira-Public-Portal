/**
 * Proxies the geoBoundaries Tanzania ADM1 (regions) GeoJSON.
 *
 * Two-step upstream (by geoBoundaries convention):
 *   1. GET metadata JSON from their API
 *   2. GET the actual GeoJSON from the URL the metadata points at
 *
 * Response is cached for 24 hours (admin boundaries don't move).
 */

const META_URL =
  "https://www.geoboundaries.org/api/current/gbOpen/TZA/ADM1/";

export const revalidate = 86400; // 24h ISR

export async function GET() {
  try {
    const metaRes = await fetch(META_URL, { next: { revalidate: 86400 } });
    if (!metaRes.ok) throw new Error(`metadata ${metaRes.status}`);
    const meta = await metaRes.json();

    // Prefer the simplified version (smaller, renders faster)
    const geoUrl = meta.simplifiedGeometryGeoJSON || meta.gjDownloadURL;
    if (!geoUrl) throw new Error("no GeoJSON URL in metadata");

    const geoRes = await fetch(geoUrl, { next: { revalidate: 86400 } });
    if (!geoRes.ok) throw new Error(`geojson ${geoRes.status}`);
    const geojson = await geoRes.json();

    return Response.json(
      { data: geojson },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=86400, stale-while-revalidate=604800",
        },
      },
    );
  } catch (err) {
    return Response.json(
      { error: `Failed to load Tanzania regions: ${err.message}` },
      { status: 502 },
    );
  }
}
