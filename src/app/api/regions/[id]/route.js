/**
 * GET /api/regions/[id]/districts
 *
 * Returns the ordered list of districts for a Tanzania region.
 * Always includes "All Districts" as the first item.
 *
 * Response shape:
 *   { data: { regionId: string, districts: string[] } }
 *
 * This endpoint is the single source of truth for district lists.
 * Swap the import below for a DB/ORM call once the backend is ready.
 */

import { getDistrictsByRegion, getRegion } from "@/lib/db/data";

export const revalidate = 86400; // static — districts rarely change

export async function GET(_req, { params }) {
  const { id } = await params;

  const region = await getRegion(id);
  if (!region) {
    return Response.json({ error: `Region not found: ${id}` }, { status: 404 });
  }

  const districts = await getDistrictsByRegion(id);

  return Response.json(
    { data: { regionId: id, regionName: region.name, districts } },
    { headers: { "Cache-Control": "public, max-age=86400" } },
  );
}
