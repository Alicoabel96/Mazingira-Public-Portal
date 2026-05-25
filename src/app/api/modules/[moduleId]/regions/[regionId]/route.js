import { getDashboardData } from "@/lib/db/data";

export async function GET(_req, { params }) {
  const { moduleId, regionId } = await params;
  const data = await getDashboardData(moduleId, regionId);

  if (!data) {
    return Response.json(
      { error: "Dashboard not found for that module / region" },
      { status: 404 },
    );
  }
  return Response.json({ data });
}
