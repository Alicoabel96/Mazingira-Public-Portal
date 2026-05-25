/**
 * In-memory data store.
 *
 * This is a deliberately thin abstraction: every read goes through a function
 * so we can replace the backing store (Prisma, Supabase, Drizzle, REST upstream,
 * etc.) without touching a single route handler or component.
 *
 * All functions are async so consumers don't have to change when we move to a
 * real database.
 */

// ─── Announcement ────────────────────────────────────────────────────────────
const ANNOUNCEMENT =
  "Here Stays All Info You Want To Emphasise Including Adverts";

// ─── Nav ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "HOME", href: "/", active: true },
  { label: "ENVIRONMENTAL MANAGEMENT", href: "#", dropdown: true },
  { label: "DIGITAL LIBRARY", href: "#" },
  { label: "E-MREJESHO", href: "#" },
];

// ─── Ticker stats ────────────────────────────────────────────────────────────
const STATS = [
  { id: 1, value: "30",  label: "Total Number of Registered Carbon Project",      icon: "document" },
  { id: 2, value: "30",  label: "Project Under Concept Note Development",         icon: "copy"     },
  { id: 3, value: "60",  label: "Total Number Of Projects Under Implementation.", icon: "check"    },
  { id: 4, value: "123", label: "Total Number Of Implemented Activities",         icon: "activity" },
  { id: 5, value: "123", label: "Total Number of Activities",                     icon: "folder"   },
  { id: 6, value: "45",  label: "Total Number of Participating Institutions",     icon: "users"    },
];

// ─── Hero slides ─────────────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 1,
    image: "/images/hero1.jpg",
    tag: "Environmental Management Information System",
    title: "Platform for Accessing a Wide Range of Environmental Data",
    description:
      "Track the pulse of Tanzania's environment through dynamic, real-time data. From carbon trade and clean cooking to waste management and tree planting, our integrated analytics platform empowers citizens, policymakers, and partners with the insights needed to protect what matters most — our land, our air, our future.",
  },
  {
    id: 2,
    image: "/images/hero2.jpg",
    tag: "Environmental Management Information System",
    title: "Monitoring Tanzania's Natural Resources in Real Time",
    description:
      "From Kilimanjaro's forests to Zanzibar's coastlines, eMazingira brings you live environmental indicators, project tracking, and community impact data across all 26 regions.",
  },
  {
    id: 3,
    image: "/images/hero3.jpg",
    tag: "Environmental Management Information System",
    title: "Empowering Communities Through Clean Energy Access",
    description:
      "Follow the progress of Tanzania's clean cooking, solar, and renewable energy rollout — one village, one household, one institution at a time.",
  },
  {
    id: 4,
    image: "/images/hero4.jpg",
    tag: "Environmental Management Information System",
    title: "A Government Committed to Environmental Accountability",
    description:
      "Transparent, open, and accessible. eMazingira is Tanzania's commitment to data-driven environmental governance and citizen engagement.",
  },
];

// ─── Regions ─────────────────────────────────────────────────────────────────
const REGIONS = [
  { id: "morogoro",      name: "Morogoro",      priority: "very-high" },
  { id: "dodoma",        name: "Dodoma",        priority: "high"      },
  { id: "dar-es-salaam", name: "Dar es Salaam", priority: "high"      },
  { id: "arusha",        name: "Arusha",        priority: "moderate"  },
  { id: "mwanza",        name: "Mwanza",        priority: "moderate"  },
  { id: "tanga",         name: "Tanga",         priority: "low"       },
  { id: "kilimanjaro",   name: "Kilimanjaro",   priority: "low"       },
  { id: "mbeya",         name: "Mbeya",         priority: "moderate"  },
  { id: "shinyanga",     name: "Shinyanga",     priority: "low"       },
  { id: "kagera",        name: "Kagera",        priority: "low"       },
  { id: "iringa",        name: "Iringa",        priority: "moderate"  },
  { id: "mara",          name: "Mara",          priority: "low"       },
  { id: "ruvuma",        name: "Ruvuma",        priority: "moderate"  },
  { id: "lindi",         name: "Lindi",         priority: "high"      },
  { id: "mtwara",        name: "Mtwara",        priority: "moderate"  },
];

// ─── Modules ─────────────────────────────────────────────────────────────────
//
// Each module carries a `theme` object with three shades:
//   primary  — main accent (buttons, active tab, map fill for selected region)
//   dark     — darker shade (summary card background, headings)
//   soft     — very light tint (inactive tab background, map fill for regions)
//
// The theme flows down from here to ModuleTabs, SummaryPanel, SupplierChart,
// ImpactCard, and the Leaflet map — so switching modules recolors the UI.
const MODULES = [
  { id: "waste",     label: "Waste Management",       title: "Measuring Waste Management Effectiveness",        icon: "trash",
    theme: { primary: "#0b736c", dark: "#0d3a30", soft: "#d6f5f2" } },
  { id: "tree",      label: "Tree Planting",          title: "Tracking Tree Planting Progress Across Tanzania", icon: "leaf",
    theme: { primary: "#2f9e44", dark: "#1b5e20", soft: "#dff5df" } },
  { id: "carbon",    label: "Carbon Trade",           title: "Carbon Trade & Emissions Reduction Impact",       icon: "factory",
    theme: { primary: "#495057", dark: "#212529", soft: "#e9ecef" } },
  { id: "project",   label: "Project Management",     title: "Project Management Dashboard Overview",           icon: "monitor",
    theme: { primary: "#5a4fcf", dark: "#2d2a7a", soft: "#e8e6fa" } },
  { id: "climate",   label: "Climate Change",         title: "Climate Change Indicators & Responses",           icon: "thermo",
    theme: { primary: "#e67e22", dark: "#a84a00", soft: "#fcecdb" } },
  { id: "forests",   label: "Forests",                title: "Forest Cover Conservation & Monitoring",          icon: "tree",
    theme: { primary: "#1e7d32", dark: "#0f4820", soft: "#d8ecdb" } },
  { id: "pollution", label: "Pollution",              title: "Pollution Monitoring & Control Measures",         icon: "wind",
    theme: { primary: "#8e44ad", dark: "#5b2a7a", soft: "#ebdcf2" } },
  { id: "chemical",  label: "Chemical",               title: "Hazardous Chemical Management & Sites",           icon: "flask",
    theme: { primary: "#c0392b", dark: "#7a1f16", soft: "#f8dcd8" } },
  { id: "wildlife",  label: "Wildlife",               title: "Wildlife Conservation & Species Tracking",        icon: "paw",
    theme: { primary: "#a47148", dark: "#5c3a1e", soft: "#f0e4d6" } },
  { id: "biotech",   label: "Biotechnology",          title: "Biotechnology Research & Applications",           icon: "dna",
    theme: { primary: "#d4348a", dark: "#7a1749", soft: "#f7daea" } },
  { id: "city",      label: "City, Urban & Rural",    title: "Urban & Rural Development Planning",              icon: "city",
    theme: { primary: "#3182ce", dark: "#1a4e80", soft: "#dbe9f6" } },
  { id: "cooking",   label: "Clean Cooking Energy",   title: "Measuring the Impact of Clean Cooking",           icon: "fire", isDefault: true,
    theme: { primary: "#0b736c", dark: "#145244", soft: "#d6f5f2" } },
  { id: "water",     label: "Water Sources",          title: "Water Sources & Sanitation Access",               icon: "drop",
    theme: { primary: "#0891b2", dark: "#0c4a55", soft: "#d6eef3" } },
  { id: "invasive",  label: "Invasive species",       title: "Invasive Species Detection & Control",            icon: "bug",
    theme: { primary: "#7c2d12", dark: "#451a0a", soft: "#f0e0d8" } },
  { id: "blue",      label: "Blue Economy",           title: "Blue Economy — Marine & Coastal Resources",       icon: "wave",
    theme: { primary: "#1565c0", dark: "#0b3d7a", soft: "#d8e3f3" } },
  { id: "chemical2", label: "Chemical",               title: "Hazardous Chemical Management & Sites",           icon: "flask",
    theme: { primary: "#c0392b", dark: "#7a1f16", soft: "#f8dcd8" } },
  { id: "aquatic",   label: "Aquatic",                title: "Aquatic Ecosystems Health Monitoring",            icon: "fish",
    theme: { primary: "#0d7377", dark: "#084b4d", soft: "#d5ecee" } },
  { id: "dodoma",    label: "Green Dodoma",           title: "Green Dodoma Initiative Progress",                icon: "sun",
    theme: { primary: "#6a994e", dark: "#3d5c2d", soft: "#e2ecdb" } },
  { id: "wetland",   label: "Wetland",                title: "Wetland Conservation & Management",               icon: "water",
    theme: { primary: "#2a9d8f", dark: "#175e55", soft: "#d7ece9" } },
  { id: "gender",    label: "Gender",                 title: "Gender & Environment — Inclusion Metrics",        icon: "person",
    theme: { primary: "#d62976", dark: "#7a1545", soft: "#f5d9e6" } },
];

/**
 * Returns a theme for a module id. Falls back to the cooking theme.
 */
function getModuleTheme(moduleId) {
  const found = MODULES.find((m) => m.id === moduleId);
  return found?.theme ?? { primary: "#0b736c", dark: "#145244", soft: "#d6f5f2" };
}

// ─── Dashboard data per (moduleId, regionId) ─────────────────────────────────
// In a real DB this would be a single table keyed on (module_id, region_id).
// For now the seed data is only populated for the `cooking` module across a
// handful of regions — anything else falls back to DEFAULT_DASHBOARD.
const DASHBOARDS = {
  "cooking:morogoro": {
    beneficiaries: "12,000,543",
    energyValue:   "167,900,000",
    energyUnit:    "Joules",
    institutes:    132,
    institutePct:  48,
    forestSaved:   "344,676",
    progressPct:   78,
    charcoal: [
      { label: "23,403 Tones", note: "Equivalent to 27,373 km²", desc: "Charcoal saved by using clean energy" },
      { label: "23,403 Tones", note: "Equivalent to 27,373 km²", desc: "Charcoal saved by using clean energy" },
    ],
    districts:    ["All District", "Mbeya", "Chunya", "Mbarali", "Kyela", "Rungwa"],
    highPriority: ["Chunya", "Kyela"],
    suppliers: [
      { label: "Individual",        count: 34, pct: 62 },
      { label: "Private Companies", count: 11, pct: 24 },
      { label: "Government",        count: 18, pct: 14 },
      { label: "Others",            count: 18, pct: 14 },
    ],
    supplyCategory: "Cooking Gas",
  },
  "cooking:dodoma": {
    beneficiaries: "3,450,000",
    energyValue:   "89,200,000",
    energyUnit:    "Joules",
    institutes:    74,
    institutePct:  31,
    forestSaved:   "112,300",
    progressPct:   55,
    charcoal: [
      { label: "8,200 Tones", note: "Equivalent to 9,800 km²", desc: "Charcoal saved by using clean energy" },
      { label: "8,200 Tones", note: "Equivalent to 9,800 km²", desc: "Charcoal saved by using clean energy" },
    ],
    districts:    ["All District", "Dodoma Urban", "Bahi", "Chamwino", "Kondoa", "Mpwapwa"],
    highPriority: ["Kondoa", "Mpwapwa"],
    suppliers: [
      { label: "Individual",        count: 21, pct: 52 },
      { label: "Private Companies", count: 8,  pct: 21 },
      { label: "Government",        count: 11, pct: 27 },
      { label: "Others",            count: 0,  pct: 0  },
    ],
    supplyCategory: "Solar Energy",
  },
  "cooking:dar-es-salaam": {
    beneficiaries: "8,900,000",
    energyValue:   "220,000,000",
    energyUnit:    "Joules",
    institutes:    210,
    institutePct:  68,
    forestSaved:   "89,000",
    progressPct:   88,
    charcoal: [
      { label: "14,500 Tones", note: "Equivalent to 17,200 km²", desc: "Charcoal saved by using clean energy" },
      { label: "14,500 Tones", note: "Equivalent to 17,200 km²", desc: "Charcoal saved by using clean energy" },
    ],
    districts:    ["All District", "Ilala", "Kinondoni", "Temeke", "Ubungo", "Kigamboni"],
    highPriority: ["Ilala", "Temeke"],
    suppliers: [
      { label: "Individual",        count: 52, pct: 45 },
      { label: "Private Companies", count: 34, pct: 32 },
      { label: "Government",        count: 18, pct: 16 },
      { label: "Others",            count: 8,  pct: 7  },
    ],
    supplyCategory: "Cooking Gas",
  },
};

const DEFAULT_DASHBOARD = {
  beneficiaries: "1,250,000",
  energyValue:   "45,000,000",
  energyUnit:    "Joules",
  institutes:    48,
  institutePct:  22,
  forestSaved:   "62,400",
  progressPct:   42,
  charcoal: [
    { label: "4,100 Tones", note: "Equivalent to 4,900 km²", desc: "Charcoal saved by using clean energy" },
    { label: "4,100 Tones", note: "Equivalent to 4,900 km²", desc: "Charcoal saved by using clean energy" },
  ],
  districts:    ["All District", "District A", "District B", "District C"],
  highPriority: ["District A"],
  suppliers: [
    { label: "Individual",        count: 18, pct: 55 },
    { label: "Private Companies", count: 7,  pct: 22 },
    { label: "Government",        count: 5,  pct: 15 },
    { label: "Others",            count: 2,  pct: 8  },
  ],
  supplyCategory: "Cooking Gas",
};

// ─── Footer links ────────────────────────────────────────────────────────────
const FOOTER = {
  explore:    ["Home", "Modules", "Login"],
  modules:    ["Clean cooking", "Carbon Trade", "Tree Planting", "Waste Management"],
  quickLinks: ["VPO website", "Ikulu", "NEMC", "NCMC"],
};

// ═══ PUBLIC READ API ═════════════════════════════════════════════════════════
// Replace the bodies below to switch to a real database. Keep the shapes.

export async function getAnnouncement() {
  return ANNOUNCEMENT;
}

export async function listNavLinks() {
  return NAV_LINKS;
}

export async function listStats() {
  return STATS;
}

export async function listSlides() {
  return SLIDES;
}

export async function listRegions() {
  return REGIONS;
}

export async function getRegion(id) {
  return REGIONS.find((r) => r.id === id) || null;
}

export async function listModules() {
  return MODULES;
}

export async function getModule(id) {
  return MODULES.find((m) => m.id === id) || null;
}

/**
 * Returns dashboard data for a given (moduleId, regionId) pair.
 *
 * Falls back to DEFAULT_DASHBOARD when no seed exists so the UI always has
 * something to render — a real backend would return 404.
 */
export async function getDashboardData(moduleId, regionId) {
  const module = await getModule(moduleId);
  const region = await getRegion(regionId);
  if (!module || !region) return null;

  const key = `${moduleId}:${regionId}`;
  const data = DASHBOARDS[key] || DEFAULT_DASHBOARD;

  return {
    module: {
      id: module.id,
      label: module.label,
      title: module.title,
      theme: module.theme || getModuleTheme(module.id),
    },
    region: { id: region.id, name: region.name, priority: region.priority },
    ...data,
  };
}

/**
 * Public helper — returns just the theme for a module id.
 * Used by client components (ModuleTabs, etc.) that don't need the full
 * dashboard payload.
 */
export async function getModuleThemeById(id) {
  return getModuleTheme(id);
}

export async function getFooterLinks() {
  return FOOTER;
}
