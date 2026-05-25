import { getRegion } from "@/lib/db/data";

export async function GET(_req, { params }) {
  const { id } = await params;
  const data = await getRegion(id);

  if (!data) {
    return Response.json({ error: "Region not found" }, { status: 404 });
  }
  return Response.json({ data });
}
