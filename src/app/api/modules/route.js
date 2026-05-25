import { listModules } from "@/lib/db/data";

export async function GET() {
  const data = await listModules();
  return Response.json({ data });
}
