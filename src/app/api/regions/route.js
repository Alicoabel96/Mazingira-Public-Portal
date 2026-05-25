import { listRegions } from "@/lib/db/data";

export async function GET() {
  const data = await listRegions();
  return Response.json({ data });
}
