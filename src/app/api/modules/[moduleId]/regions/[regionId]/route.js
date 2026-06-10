/**
 * GET /api/modules/[moduleId]/regions/[regionId]?district=[districtId]
 *
 * regionId "national" → returns whole-Tanzania aggregate data (self-contained).
 * All other regionIds → calls getDashboardData from data.js.
 */
import { getDashboardData } from "@/lib/db/data";

// ── National data (self-contained — no import from data.js needed) ────────────
const NATIONAL = {
  cooking: {
    beneficiaries: "18,420,000", energyValue: "2,140,000,000", energyUnit: "Joules",
    institutes: 1840, institutePct: 44, forestSaved: "3,240,000", progressPct: 62,
    charcoal: [
      { label: "284,000 Tons", note: "Equivalent to 342,000 km²", desc: "Charcoal saved nationally" },
      { label: "99,400 Tons",  note: "CO₂ emissions avoided",     desc: "Annual greenhouse gas reduction" },
    ],
    highPriority: [],
    suppliers: [
      { label: "Individual Households", count: 620, pct: 58 },
      { label: "Private Companies",     count: 280, pct: 26 },
      { label: "Government",            count: 160, pct: 12 },
      { label: "Others",                count: 42,  pct: 4  },
    ],
    supplyCategory: "Cooking Gas / Solar",
  },
  tree: {
    beneficiaries: "42,600,000", energyValue: "840,000", energyUnit: "Hectares",
    institutes: 620, institutePct: 58, forestSaved: "840,000", progressPct: 61,
    charcoal: [
      { label: "42,600,000 Trees", note: "Planted 2020–2024",       desc: "Native species across all 31 regions" },
      { label: "1,240 Species",    note: "Indigenous species used",  desc: "Biodiversity-focused national programme" },
    ],
    highPriority: [],
    suppliers: [
      { label: "Community Groups", count: 284, pct: 52 },
      { label: "Government TFS",   count: 168, pct: 30 },
      { label: "NGOs / CBOs",      count: 98,  pct: 14 },
      { label: "Private Sector",   count: 28,  pct: 4  },
    ],
    supplyCategory: "Seedling Source",
  },
  waste: {
    beneficiaries: "18,400,000", energyValue: "1,840,000", energyUnit: "Metric Tons/Year",
    institutes: 842, institutePct: 54, forestSaved: "1,840,000", progressPct: 58,
    charcoal: [
      { label: "1,840,000 Tons", note: "Collected nationally 2024", desc: "Municipal solid waste managed" },
      { label: "486,000 Tons",   note: "Recycled or composted",     desc: "Waste diverted from dumpsites" },
    ],
    highPriority: [],
    suppliers: [
      { label: "Private Operators", count: 348, pct: 54 },
      { label: "Municipalities",    count: 246, pct: 32 },
      { label: "CBOs",              count: 98,  pct: 11 },
      { label: "Others",            count: 18,  pct: 3  },
    ],
    supplyCategory: "Collection Type",
  },
  water: {
    beneficiaries: "28,400,000", energyValue: "486,000", energyUnit: "m³/day",
    institutes: 3840, institutePct: 62, forestSaved: "1,240,000", progressPct: 68,
    charcoal: [
      { label: "3,840 Water Points", note: "Functional as of 2024",    desc: "Boreholes, springs & piped schemes" },
      { label: "284 Major Schemes",  note: "Gravity-fed piped systems", desc: "Serving rural communities" },
    ],
    highPriority: [],
    suppliers: [
      { label: "RUWASA / DWSAs",    count: 1640, pct: 46 },
      { label: "Community Schemes", count: 1240, pct: 36 },
      { label: "NGO-Supported",     count: 620,  pct: 14 },
      { label: "Private Kiosks",    count: 128,  pct: 4  },
    ],
    supplyCategory: "Provider Type",
  },
  forests: {
    beneficiaries: "12,400,000", energyValue: "6,842", energyUnit: "Species",
    institutes: 184, institutePct: 62, forestSaved: "28,400,000", progressPct: 74,
    charcoal: [
      { label: "28.4M hectares", note: "Gazetted forest area",      desc: "Total gazetted forests nationwide" },
      { label: "6,842 Species",  note: "Flora & fauna inventoried", desc: "National biodiversity database" },
    ],
    highPriority: [],
    suppliers: [
      { label: "TANAPA",            count: 68, pct: 46 },
      { label: "TAWA",              count: 42, pct: 28 },
      { label: "District Councils", count: 46, pct: 18 },
      { label: "NGOs / CBOs",       count: 24, pct: 8  },
    ],
    supplyCategory: "Management Authority",
  },
  wildlife: {
    beneficiaries: "2,840", energyValue: "384", energyUnit: "Cases/Year",
    institutes: 124, institutePct: 68, forestSaved: "14,200,000", progressPct: 78,
    charcoal: [
      { label: "2,840 Species",  note: "Under national monitoring", desc: "Fauna tracked across all parks" },
      { label: "842 Operations", note: "Anti-poaching ops 2024",    desc: "Joint TAWA-TANAPA operations" },
    ],
    highPriority: [],
    suppliers: [
      { label: "TANAPA",                count: 48, pct: 52 },
      { label: "TAWA",                  count: 32, pct: 30 },
      { label: "District Councils",     count: 18, pct: 14 },
      { label: "Private Conservancies", count: 4,  pct: 4  },
    ],
    supplyCategory: "Management Authority",
  },
  carbon: {
    beneficiaries: "147", energyValue: "12,400,000", energyUnit: "tCO₂e",
    institutes: 124, institutePct: 38, forestSaved: "12,400,000", progressPct: 52,
    charcoal: [
      { label: "147 Projects",      note: "VCS & Gold Standard verified", desc: "REDD+ and afforestation projects" },
      { label: "12,400,000 tCO₂e", note: "Credits issued 2024",         desc: "Community revenue: $42M" },
    ],
    highPriority: [],
    suppliers: [
      { label: "International Buyers", count: 68, pct: 48 },
      { label: "Government Offtake",   count: 42, pct: 28 },
      { label: "Local Market",         count: 28, pct: 16 },
      { label: "Voluntary Offset",     count: 12, pct: 8  },
    ],
    supplyCategory: "Carbon Buyer Type",
  },
  blue: {
    beneficiaries: "284,000", energyValue: "842,000", energyUnit: "Metric Tons",
    institutes: 184, institutePct: 44, forestSaved: "14,200", progressPct: 58,
    charcoal: [
      { label: "284,000 Fishers", note: "Licensed nationally 2024", desc: "Artisanal, commercial & aquaculture" },
      { label: "124 MPAs",        note: "Marine protected areas",   desc: "Indian Ocean & Lake Victoria zones" },
    ],
    highPriority: [],
    suppliers: [
      { label: "Artisanal Fishers",   count: 168, pct: 56 },
      { label: "Commercial Boats",    count: 68,  pct: 24 },
      { label: "Cooperatives / BMUs", count: 42,  pct: 14 },
      { label: "Aquaculture Farms",   count: 18,  pct: 6  },
    ],
    supplyCategory: "Fishing / Aquaculture Method",
  },
  climate: {
    beneficiaries: "284", energyValue: "3,400,000", energyUnit: "tCO₂e/Year",
    institutes: 142, institutePct: 48, forestSaved: "3,400,000", progressPct: 54,
    charcoal: [
      { label: "284 Projects",       note: "NDC adaptation & mitigation",    desc: "National climate action" },
      { label: "840,000 Households", note: "Climate-vulnerable HHs supported", desc: "Resilience programmes" },
    ],
    highPriority: [],
    suppliers: [
      { label: "Green Climate Fund", count: 112, pct: 46 },
      { label: "Government Budget",  count: 84,  pct: 32 },
      { label: "NGO / Development",  count: 46,  pct: 16 },
      { label: "Private Sector",     count: 14,  pct: 6  },
    ],
    supplyCategory: "Climate Finance Source",
  },
  pollution: {
    beneficiaries: "842", energyValue: "184,000", energyUnit: "Metric Tons",
    institutes: 284, institutePct: 62, forestSaved: "842", progressPct: 66,
    charcoal: [
      { label: "842 Sites",    note: "Remediated nationally 2024",  desc: "Industrial & urban site cleanups" },
      { label: "284 Stations", note: "Air & water quality monitors", desc: "NEMC national monitoring network" },
    ],
    highPriority: [],
    suppliers: [
      { label: "Licensed Private",   count: 128, pct: 52 },
      { label: "NEMC / Government",  count: 84,  pct: 28 },
      { label: "NGOs",               count: 46,  pct: 14 },
      { label: "CBOs",               count: 18,  pct: 6  },
    ],
    supplyCategory: "Remediation Operator",
  },
};

const DEFAULT_NATIONAL = {
  beneficiaries: "12,400,000", energyValue: "420,000", energyUnit: "Units",
  institutes: 480, institutePct: 42, forestSaved: "624,000", progressPct: 48,
  charcoal: [
    { label: "624,000 Units", note: "National programme 2024", desc: "Primary national impact indicator" },
    { label: "420,000 Units", note: "Annual trend",            desc: "Secondary national indicator" },
  ],
  highPriority: [],
  suppliers: [
    { label: "Government",     count: 184, pct: 44 },
    { label: "Private Sector", count: 142, pct: 32 },
    { label: "NGOs / CBOs",    count: 98,  pct: 18 },
    { label: "Others",         count: 28,  pct: 6  },
  ],
  supplyCategory: "Implementation Partner",
};

export async function GET(req, { params }) {
  try {
    const { moduleId, regionId } = await params;

    // ── National view ──────────────────────────────────────────────────────
    if (regionId === "national") {
      const raw = NATIONAL[moduleId] || DEFAULT_NATIONAL;
      return Response.json({
        data: {
          module:    { id: moduleId, label: moduleId, title: `${moduleId} — National Overview`, theme: null },
          region:    { id: "national", name: "Tanzania (National)", priority: "very-high" },
          district:  null,
          districts: ["All Districts"],
          ...raw,
        },
      });
    }

    // ── Regional view ──────────────────────────────────────────────────────
    let districtId = null;
    try {
      districtId = new URL(req.url).searchParams.get("district") || null;
    } catch {}

    const data = await getDashboardData(moduleId, regionId, districtId);
    if (!data) {
      return Response.json(
        { error: `No data for module "${moduleId}" in region "${regionId}"` },
        { status: 404 }
      );
    }
    return Response.json({ data });

  } catch (err) {
    console.error("[dashboard route error]", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}