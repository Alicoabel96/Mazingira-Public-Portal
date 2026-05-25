import { listSlides } from "@/lib/db/data";

export async function GET() {
  const data = await listSlides();
  return Response.json({ data });
}
