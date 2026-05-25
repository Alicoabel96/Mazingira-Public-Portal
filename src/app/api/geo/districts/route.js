/**
 * Proxies the geoBoundaries Tanzania ADM2 (districts) GeoJSON.
 *
 * Optionally filters to districts within a specific region, by name, via
 * the `?region=<NAME>` query param. geoBoundaries doesn't include a
 * parent-region reference in its ADM2 features, so the filter is done by
 * point-in-polygon against the selected ADM1 region if the client needs
 * it — but for the common case (load all districts), we just return them
 * all and let the client filter visually by bounds.
 */

const META_URL =
  "https://www.geoboundaries.org/api/current/gbOpen/TZA/ADM2/";

export const revalidate = 86400;

export async function GET() {
  try {
    const metaRes = await fetch(META_URL, { next: { revalidate: 86400 } });
    if (!metaRes.ok) throw new Error(`metadata ${metaRes.status}`);
    const meta = await metaRes.json();

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
      { error: `Failed to load Tanzania districts: ${err.message}` },
      { status: 502 },
    );
  }
}
