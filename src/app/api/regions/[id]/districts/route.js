/**
 * GET /api/regions/[id]/districts
 * Returns the district list for a Tanzania region.
 * Self-contained — no imports from data.js needed.
 */

const REGION_DISTRICTS = {
  "morogoro":      ["Gairo","Kilombero","Kilosa","Malinyi","Morogoro DC","Morogoro Urban","Mvomero","Ulanga"],
  "dodoma":        ["Bahi","Chamwino","Chemba","Dodoma City","Kondoa","Kongwa","Mpwapwa"],
  "dar-es-salaam": ["Ilala","Kigamboni","Kinondoni","Temeke","Ubungo"],
  "arusha":        ["Arusha City","Arusha DC","Karatu","Longido","Meru","Monduli","Ngorongoro"],
  "mwanza":        ["Buchosa","Ilemela","Kwimba","Magu","Misungwi","Nyamagana","Sengerema","Ukerewe"],
  "tanga":         ["Handeni DC","Handeni Urban","Kilindi","Korogwe DC","Korogwe Urban","Lushoto","Mkinga","Muheza","Pangani","Tanga City"],
  "kilimanjaro":   ["Hai","Moshi DC","Moshi Urban","Mwanga","Rombo","Same","Siha"],
  "mbeya":         ["Busokelo","Chunya","Kyela","Mbarali","Mbeya City","Mbeya DC","Rungwe"],
  "pwani":         ["Bagamoyo","Kibaha DC","Kibaha Urban","Kisarawe","Mafia","Mkuranga","Rufiji"],
  "iringa":        ["Iringa DC","Iringa Urban","Kilolo","Mafinga","Mufindi"],
  "ruvuma":        ["Mbinga DC","Mbinga Urban","Namtumbo","Nyasa","Songea DC","Songea Urban","Tunduru"],
  "lindi":         ["Kilwa","Lindi DC","Lindi Urban","Liwale","Nachingwea","Ruangwa"],
  "mtwara":        ["Masasi DC","Masasi Urban","Mtwara DC","Mtwara Urban","Nanyumbu","Newala","Tandahimba"],
  "shinyanga":     ["Kahama DC","Kahama Urban","Kishapu","Shinyanga DC","Shinyanga Urban"],
  "kagera":        ["Biharamulo","Bukoba DC","Bukoba Urban","Karagwe","Kyerwa","Misenyi","Muleba","Ngara"],
};

export const revalidate = 86400;

export async function GET(_req, { params }) {
  const { id } = await params;
  const list = REGION_DISTRICTS[id];

  if (!list) {
    return Response.json(
      { error: `Region not found: ${id}` },
      { status: 404 }
    );
  }

  return Response.json({
    data: {
      regionId: id,
      districts: ["All Districts", ...list],
    },
  });
}