import { listStats } from "@/lib/db/data";

export async function GET() {
  const data = await listStats();
  return Response.json({ data });
}
