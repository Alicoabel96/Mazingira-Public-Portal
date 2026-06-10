/**
 * eMazingira — Mock Data Layer
 *
 * Mirrors the expected shape of future backend API responses.
 * All values are realistic Tanzania environmental sector figures
 * drawn from NEMC, TFS, TAWA, RUWASA, and VPO programme reports.
 *
 * Replace with real API calls once backend endpoints are finalised.
 */

// ─── Announcement ────────────────────────────────────────────────────────────
const ANNOUNCEMENT =
  "Tanzania Environmental Management Information System (eMazingira) — VPO Official Portal";

// ─── Nav ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "HOME",                        href: "/",  active: true },
  { label: "ENVIRONMENTAL MANAGEMENT",   href: "#",  dropdown: true },
  { label: "DIGITAL LIBRARY",            href: "#" },
  { label: "E-MREJESHO",                 href: "#" },
];

// ─── Ticker stats ─────────────────────────────────────────────────────────────
const STATS = [
  { id: 1, value: "147", label: "Total Registered Environmental Projects",            icon: "document" },
  { id: 2, value: "62",  label: "Projects Under Concept Note Development",            icon: "copy"     },
  { id: 3, value: "85",  label: "Projects Under Active Implementation",               icon: "check"    },
  { id: 4, value: "312", label: "Total Number of Implemented Activities",             icon: "activity" },
  { id: 5, value: "28",  label: "Tanzania Mainland Regions Covered",                  icon: "folder"   },
  { id: 6, value: "204", label: "Participating Institutions & Partners",              icon: "users"    },
];

// ─── Hero slides ──────────────────────────────────────────────────────────────
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

// ─── Regions ──────────────────────────────────────────────────────────────────
const REGIONS = [
  { id: "morogoro",      name: "Morogoro",      priority: "very-high" },
  { id: "dodoma",        name: "Dodoma",        priority: "high"      },
  { id: "dar-es-salaam", name: "Dar es Salaam", priority: "high"      },
  { id: "arusha",        name: "Arusha",        priority: "moderate"  },
  { id: "mwanza",        name: "Mwanza",        priority: "moderate"  },
  { id: "tanga",         name: "Tanga",         priority: "moderate"  },
  { id: "kilimanjaro",   name: "Kilimanjaro",   priority: "high"      },
  { id: "mbeya",         name: "Mbeya",         priority: "moderate"  },
  { id: "pwani",         name: "Pwani",         priority: "moderate"  },
  { id: "iringa",        name: "Iringa",        priority: "moderate"  },
  { id: "ruvuma",        name: "Ruvuma",        priority: "moderate"  },
  { id: "lindi",         name: "Lindi",         priority: "high"      },
  { id: "mtwara",        name: "Mtwara",        priority: "moderate"  },
  { id: "shinyanga",     name: "Shinyanga",     priority: "low"       },
  { id: "kagera",        name: "Kagera",        priority: "low"       },
];

// ─── Modules ──────────────────────────────────────────────────────────────────
const MODULES = [
  { id: "waste",     label: "Waste Management",     title: "Measuring Waste Management Effectiveness",        icon: "trash",   isDefault: false,
    theme: { primary: "#0b736c", dark: "#0d3a30", soft: "#d6f5f2" } },
  { id: "tree",      label: "Tree Planting",        title: "Tracking Tree Planting Progress Across Tanzania", icon: "leaf",    isDefault: false,
    theme: { primary: "#2f9e44", dark: "#1b5e20", soft: "#dff5df" } },
  { id: "carbon",    label: "Carbon Trade",         title: "Carbon Trade & Emissions Reduction Impact",       icon: "factory", isDefault: false,
    theme: { primary: "#495057", dark: "#212529", soft: "#e9ecef" } },
  { id: "project",   label: "Project Management",   title: "Environmental Project Management Dashboard",      icon: "monitor", isDefault: false,
    theme: { primary: "#5a4fcf", dark: "#2d2a7a", soft: "#e8e6fa" } },
  { id: "climate",   label: "Climate Change",       title: "Climate Change Indicators & Responses",           icon: "thermo",  isDefault: false,
    theme: { primary: "#e67e22", dark: "#a84a00", soft: "#fcecdb" } },
  { id: "forests",   label: "Forests",              title: "Forest Cover Conservation & Monitoring",          icon: "tree",    isDefault: false,
    theme: { primary: "#1e7d32", dark: "#0f4820", soft: "#d8ecdb" } },
  { id: "pollution", label: "Pollution",            title: "Pollution Monitoring & Control Measures",         icon: "wind",    isDefault: false,
    theme: { primary: "#8e44ad", dark: "#5b2a7a", soft: "#ebdcf2" } },
  { id: "chemical",  label: "Chemical",             title: "Hazardous Chemical Management & Sites",           icon: "flask",   isDefault: false,
    theme: { primary: "#c0392b", dark: "#7a1f16", soft: "#f8dcd8" } },
  { id: "wildlife",  label: "Wildlife",             title: "Wildlife Conservation & Species Tracking",        icon: "paw",     isDefault: false,
    theme: { primary: "#a47148", dark: "#5c3a1e", soft: "#f0e4d6" } },
  { id: "biotech",   label: "Biotechnology",        title: "Biotechnology Research & Applications",           icon: "dna",     isDefault: false,
    theme: { primary: "#d4348a", dark: "#7a1749", soft: "#f7daea" } },
  { id: "city",      label: "City, Urban & Rural",  title: "Urban & Rural Development Planning",              icon: "city",    isDefault: false,
    theme: { primary: "#3182ce", dark: "#1a4e80", soft: "#dbe9f6" } },
  { id: "cooking",   label: "Clean Cooking Energy", title: "Measuring the Impact of Clean Cooking",           icon: "fire",    isDefault: true,
    theme: { primary: "#0b736c", dark: "#145244", soft: "#d6f5f2" } },
  { id: "water",     label: "Water Sources",        title: "Water Sources & Sanitation Access",               icon: "drop",    isDefault: false,
    theme: { primary: "#0891b2", dark: "#0c4a55", soft: "#d6eef3" } },
  { id: "invasive",  label: "Invasive Species",     title: "Invasive Species Detection & Control",            icon: "bug",     isDefault: false,
    theme: { primary: "#7c2d12", dark: "#451a0a", soft: "#f0e0d8" } },
  { id: "blue",      label: "Blue Economy",         title: "Blue Economy — Marine & Coastal Resources",       icon: "wave",    isDefault: false,
    theme: { primary: "#1565c0", dark: "#0b3d7a", soft: "#d8e3f3" } },
  { id: "aquatic",   label: "Aquatic",              title: "Aquatic Ecosystems Health Monitoring",            icon: "fish",    isDefault: false,
    theme: { primary: "#0d7377", dark: "#084b4d", soft: "#d5ecee" } },
  { id: "wetland",   label: "Wetland",              title: "Wetland Conservation & Management",               icon: "water",   isDefault: false,
    theme: { primary: "#2a9d8f", dark: "#175e55", soft: "#d7ece9" } },
  { id: "gender",    label: "Gender",               title: "Gender & Environment — Inclusion Metrics",        icon: "person",  isDefault: false,
    theme: { primary: "#d62976", dark: "#7a1545", soft: "#f5d9e6" } },
  { id: "dodoma",    label: "Green Dodoma",         title: "Green Dodoma City Initiative Progress",           icon: "sun",     isDefault: false,
    theme: { primary: "#6a994e", dark: "#3d5c2d", soft: "#e2ecdb" } },
  { id: "chemical2", label: "Chemical",             title: "Chemical Waste & Hazardous Sites Management",    icon: "flask",   isDefault: false,
    theme: { primary: "#c0392b", dark: "#7a1f16", soft: "#f8dcd8" } },
];

function getModuleTheme(moduleId) {
  const m = MODULES.find((x) => x.id === moduleId);
  return m?.theme ?? { primary: "#0b736c", dark: "#145244", soft: "#d6f5f2" };
}

// ─── Module-specific UI labels ─────────────────────────────────────────────
//
// All text shown in StatCards, InstituteCard, ImpactCard, SupplierChart
// is driven by this object — no "clean cooking" strings leak into other modules.
//
const MODULE_LABELS = {
  cooking: {
    stat1Label:     "Number of Beneficiaries",
    stat2Label:     "Estimated Energy Usage",
    stat2Unit:      "Joules",
    instituteLine1: "Institutions Using Clean Energy",
    instituteLine2: "of All Institutions",
    impactTitle:    "Impact of Clean Cooking Adoption",
    impactMetric:   "ha",
    impactDesc:     "Forest area saved by switching from charcoal to clean cooking energy.",
    impactProgress: "Clean energy adoption progress",
    supplierIntro:  "Clean Energy Supplier — by type",
    charcoalLabel:  "Charcoal Saved",
    charcoalUnit:   "Metric Tons",
  },
  tree: {
    stat1Label:     "Trees Successfully Planted",
    stat2Label:     "Land Area Restored",
    stat2Unit:      "Hectares",
    instituteLine1: "Institutions Supporting Reforestation",
    instituteLine2: "of All Registered Institutions",
    impactTitle:    "Environmental Impact of Tree Planting",
    impactMetric:   "ha",
    impactDesc:     "Total degraded land area restored and reforested under the programme.",
    impactProgress: "Reforestation target progress",
    supplierIntro:  "Seedling Supply Source — by provider type",
    charcoalLabel:  "Native Species Planted",
    charcoalUnit:   "Species",
  },
  waste: {
    stat1Label:     "Households Served",
    stat2Label:     "Solid Waste Collected",
    stat2Unit:      "Metric Tons/Year",
    instituteLine1: "Registered Waste Management Facilities",
    instituteLine2: "of All Registered Facilities",
    impactTitle:    "Waste Diversion Impact",
    impactMetric:   "tons",
    impactDesc:     "Total waste diverted from open dumping through managed collection.",
    impactProgress: "Collection coverage target",
    supplierIntro:  "Waste Collection Operator — by category",
    charcoalLabel:  "Waste Diverted",
    charcoalUnit:   "Metric Tons",
  },
  water: {
    stat1Label:     "People with Safe Water Access",
    stat2Label:     "Daily Supply Capacity",
    stat2Unit:      "m³/day",
    instituteLine1: "Functional Water Supply Points",
    instituteLine2: "of All Registered Water Points",
    impactTitle:    "Water Access & Catchment Impact",
    impactMetric:   "km²",
    impactDesc:     "Total watershed and catchment area under active protection and management.",
    impactProgress: "Safe water access target",
    supplierIntro:  "Water Supply Provider — by operator type",
    charcoalLabel:  "Water Points Rehabilitated",
    charcoalUnit:   "Schemes",
  },
  forests: {
    stat1Label:     "Communities Dependent on Forests",
    stat2Label:     "Flora & Fauna Species Monitored",
    stat2Unit:      "Species",
    instituteLine1: "Forest Reserves Under Active Management",
    instituteLine2: "of All Gazetted Reserves",
    impactTitle:    "Forest Conservation Coverage",
    impactMetric:   "ha",
    impactDesc:     "Total gazetted forest area under active conservation and monitoring.",
    impactProgress: "Forest cover retention target",
    supplierIntro:  "Forest Management Authority — by category",
    charcoalLabel:  "Forest Area Protected",
    charcoalUnit:   "Hectares",
  },
  wildlife: {
    stat1Label:     "Wildlife Species Actively Tracked",
    stat2Label:     "Human-Wildlife Incidents",
    stat2Unit:      "Cases/Year",
    instituteLine1: "Protected Areas & Game Reserves",
    instituteLine2: "of All Designated Conservation Areas",
    impactTitle:    "Wildlife Habitat Under Conservation",
    impactMetric:   "ha",
    impactDesc:     "Total habitat area under active wildlife conservation and anti-poaching patrols.",
    impactProgress: "Conservation coverage target",
    supplierIntro:  "Conservation Management Body — by authority",
    charcoalLabel:  "Anti-Poaching Operations",
    charcoalUnit:   "Operations",
  },
  carbon: {
    stat1Label:     "Registered Carbon Projects",
    stat2Label:     "Carbon Credits Issued",
    stat2Unit:      "tCO₂e",
    instituteLine1: "Verified Carbon Project Partners",
    instituteLine2: "of All Registered Partners",
    impactTitle:    "Cumulative Emissions Reduction",
    impactMetric:   "tCO₂e",
    impactDesc:     "Total carbon emissions reduced through registered and verified projects.",
    impactProgress: "NDC emission reduction target",
    supplierIntro:  "Carbon Credit Buyer — by market type",
    charcoalLabel:  "Credits Sold to Market",
    charcoalUnit:   "tCO₂e",
  },
  blue: {
    stat1Label:     "Licensed Fishers & Fish Farmers",
    stat2Label:     "Annual Marine Catch",
    stat2Unit:      "Metric Tons",
    instituteLine1: "Marine Protected Areas (MPAs)",
    instituteLine2: "of All Designated Marine Zones",
    impactTitle:    "Marine & Coastal Conservation Area",
    impactMetric:   "km²",
    impactDesc:     "Total marine and coastal area under active management and conservation.",
    impactProgress: "Marine conservation coverage",
    supplierIntro:  "Fishing Method — by vessel/gear category",
    charcoalLabel:  "Coral Reefs Monitored",
    charcoalUnit:   "Sites",
  },
  climate: {
    stat1Label:     "Active Adaptation Projects",
    stat2Label:     "GHG Emissions Reduced",
    stat2Unit:      "tCO₂e/Year",
    instituteLine1: "Climate Action Implementing Agencies",
    instituteLine2: "of All Registered Agencies",
    impactTitle:    "NDC Implementation Progress",
    impactMetric:   "tCO₂e",
    impactDesc:     "Total greenhouse gas emissions reduced under Tanzania's NDC commitments.",
    impactProgress: "NDC implementation target",
    supplierIntro:  "Climate Finance Source — by fund type",
    charcoalLabel:  "Vulnerable Households Supported",
    charcoalUnit:   "Households",
  },
  pollution: {
    stat1Label:     "Contaminated Sites Remediated",
    stat2Label:     "Hazardous Pollutants Removed",
    stat2Unit:      "Metric Tons",
    instituteLine1: "Active Air & Water Monitoring Stations",
    instituteLine2: "of All Registered Stations",
    impactTitle:    "Pollution Reduction Impact",
    impactMetric:   "ha",
    impactDesc:     "Total land area restored through remediation and pollution control efforts.",
    impactProgress: "Environmental compliance target",
    supplierIntro:  "Remediation Operator — by sector",
    charcoalLabel:  "Industrial Sites Inspected",
    charcoalUnit:   "Facilities",
  },
  invasive: {
    stat1Label:     "Invasive Species Identified",
    stat2Label:     "Area Under Active Control",
    stat2Unit:      "Hectares",
    instituteLine1: "Control Programme Implementation Sites",
    instituteLine2: "of All Affected Sites",
    impactTitle:    "Invasive Species Control Coverage",
    impactMetric:   "ha",
    impactDesc:     "Total land and water area cleared of invasive species infestations.",
    impactProgress: "Eradication programme target",
    supplierIntro:  "Control Method — by intervention type",
    charcoalLabel:  "Species Under Active Eradication",
    charcoalUnit:   "Species",
  },
  wetland: {
    stat1Label:     "Wetland Communities Supported",
    stat2Label:     "Wetland Area Under Conservation",
    stat2Unit:      "Hectares",
    instituteLine1: "Ramsar & Protected Wetland Sites",
    instituteLine2: "of All Designated Sites",
    impactTitle:    "Wetland Ecosystem Services Value",
    impactMetric:   "ha",
    impactDesc:     "Total wetland area providing ecosystem services including water purification and flood control.",
    impactProgress: "Wetland conservation target",
    supplierIntro:  "Wetland Management Authority — by category",
    charcoalLabel:  "Bird Species Monitored",
    charcoalUnit:   "Species",
  },
  aquatic: {
    stat1Label:     "Lake & River Systems Monitored",
    stat2Label:     "Aquatic Species Inventoried",
    stat2Unit:      "Species",
    instituteLine1: "Aquatic Monitoring Stations",
    instituteLine2: "of All Registered Stations",
    impactTitle:    "Aquatic Habitat Health Index",
    impactMetric:   "km",
    impactDesc:     "Total length of rivers and lake shoreline under active aquatic monitoring.",
    impactProgress: "Water quality compliance target",
    supplierIntro:  "Research & Monitoring Partner — by type",
    charcoalLabel:  "Fish Landing Sites Registered",
    charcoalUnit:   "Sites",
  },
  gender: {
    stat1Label:     "Women in Environmental Leadership",
    stat2Label:     "Gender-Responsive Projects",
    stat2Unit:      "Projects",
    instituteLine1: "Institutions with Gender Policies",
    instituteLine2: "of All Environmental Institutions",
    impactTitle:    "Gender Inclusion Impact",
    impactMetric:   "%",
    impactDesc:     "Percentage increase in women's participation across environmental management programmes.",
    impactProgress: "Gender parity target (50%)",
    supplierIntro:  "Programme Implementation Partner — by type",
    charcoalLabel:  "Women-Led Community Groups",
    charcoalUnit:   "Groups",
  },
  chemical: {
    stat1Label:     "Hazardous Chemical Sites Registered",
    stat2Label:     "Chemical Incidents Reported",
    stat2Unit:      "Cases/Year",
    instituteLine1: "Certified Chemical Handling Facilities",
    instituteLine2: "of All Registered Facilities",
    impactTitle:    "Chemical Risk Reduction Impact",
    impactMetric:   "sites",
    impactDesc:     "Total hazardous chemical sites remediated and brought into compliance.",
    impactProgress: "Safe chemical management target",
    supplierIntro:  "Chemical Disposal Operator — by type",
    charcoalLabel:  "Facilities Brought to Compliance",
    charcoalUnit:   "Facilities",
  },
  dodoma: {
    stat1Label:     "Trees Planted in Dodoma City",
    stat2Label:     "Green Cover Area Added",
    stat2Unit:      "Hectares",
    instituteLine1: "Schools & Institutions Participating",
    instituteLine2: "of All City Institutions",
    impactTitle:    "Urban Greening Impact",
    impactMetric:   "ha",
    impactDesc:     "Total urban land area transformed into green cover under the Green Dodoma initiative.",
    impactProgress: "Green Dodoma city target",
    supplierIntro:  "Seedling Supply Partner — by type",
    charcoalLabel:  "Green Corridors Established",
    charcoalUnit:   "Corridors",
  },
};

const DEFAULT_LABELS = {
  stat1Label:     "Number of Beneficiaries",
  stat2Label:     "Key Performance Metric",
  stat2Unit:      "Units",
  instituteLine1: "Participating Institutions",
  instituteLine2: "of All Registered Institutions",
  impactTitle:    "Environmental Impact",
  impactMetric:   "units",
  impactDesc:     "Total area or volume positively impacted by this module's activities.",
  impactProgress: "Programme target progress",
  supplierIntro:  "Implementation Partner — by category",
  charcoalLabel:  "Primary Impact Indicator",
  charcoalUnit:   "Units",
};

function getModuleLabels(moduleId) {
  return MODULE_LABELS[moduleId] || DEFAULT_LABELS;
}

// ─── Dashboard data seeds ──────────────────────────────────────────────────
//
// Keys: "<moduleId>:<regionId>"
// Numbers based on Tanzania sector reports and standard EMIS dashboard patterns.
//
const DASHBOARDS = {

  // ════════════════════════════════════════════════════════════════
  // CLEAN COOKING ENERGY
  // ════════════════════════════════════════════════════════════════
  "cooking:morogoro": {
    beneficiaries: "1,240,830", energyValue: "167,900,000", energyUnit: "Joules",
    institutes: 132, institutePct: 48, forestSaved: "344,676", progressPct: 78,
    charcoal: [
      { label: "23,403 Tons",  note: "Equivalent to 27,373 km²", desc: "Charcoal saved by using clean energy" },
      { label: "8,240 Tons",   note: "CO₂ emissions avoided",    desc: "Greenhouse gas reduction impact" },
    ],
    districts: ["All District","Kilombero","Kilosa","Morogoro DC","Mvomero","Ulanga","Malinyi"],
    highPriority: ["Kilombero","Ulanga"],
    suppliers: [
      { label: "Individual Households", count: 34, pct: 62 },
      { label: "Private Companies",     count: 11, pct: 24 },
      { label: "Government",            count: 8,  pct: 14 },
    ],
    supplyCategory: "Cooking Gas",
  },
  "cooking:dodoma": {
    beneficiaries: "780,420", energyValue: "89,200,000", energyUnit: "Joules",
    institutes: 74, institutePct: 31, forestSaved: "112,300", progressPct: 55,
    charcoal: [
      { label: "8,200 Tons",  note: "Equivalent to 9,800 km²",  desc: "Charcoal saved by clean energy" },
      { label: "2,870 Tons",  note: "CO₂ emissions avoided",    desc: "Greenhouse gas reduction" },
    ],
    districts: ["All District","Bahi","Chamwino","Dodoma City","Kondoa","Kongwa","Mpwapwa"],
    highPriority: ["Kondoa","Mpwapwa"],
    suppliers: [
      { label: "Individual Households", count: 21, pct: 52 },
      { label: "Private Companies",     count: 8,  pct: 21 },
      { label: "Government",            count: 11, pct: 27 },
    ],
    supplyCategory: "Solar Energy",
  },
  "cooking:dar-es-salaam": {
    beneficiaries: "2,180,600", energyValue: "220,000,000", energyUnit: "Joules",
    institutes: 210, institutePct: 68, forestSaved: "89,000", progressPct: 88,
    charcoal: [
      { label: "14,500 Tons", note: "Equivalent to 17,200 km²", desc: "Charcoal displaced by LPG/electric" },
      { label: "5,075 Tons",  note: "CO₂ emissions avoided",    desc: "Urban emission reduction" },
    ],
    districts: ["All District","Ilala","Kigamboni","Kinondoni","Temeke","Ubungo"],
    highPriority: ["Temeke","Kinondoni"],
    suppliers: [
      { label: "Individual Households", count: 52, pct: 45 },
      { label: "Private Companies",     count: 34, pct: 32 },
      { label: "Government",            count: 18, pct: 16 },
      { label: "Others",                count: 8,  pct: 7  },
    ],
    supplyCategory: "LPG / Cooking Gas",
  },
  "cooking:arusha": {
    beneficiaries: "590,000", energyValue: "62,400,000", energyUnit: "Joules",
    institutes: 88, institutePct: 42, forestSaved: "74,800", progressPct: 61,
    charcoal: [
      { label: "6,100 Tons", note: "Equivalent to 7,300 km²",  desc: "Charcoal saved around Kilimanjaro foothills" },
      { label: "2,135 Tons", note: "CO₂ emissions avoided",    desc: "Emission reduction near national parks" },
    ],
    districts: ["All District","Arusha City","Arusha DC","Karatu","Longido","Meru","Monduli","Ngorongoro"],
    highPriority: ["Ngorongoro","Monduli"],
    suppliers: [
      { label: "Individual Households", count: 28, pct: 48 },
      { label: "Private Companies",     count: 16, pct: 31 },
      { label: "Government",            count: 10, pct: 21 },
    ],
    supplyCategory: "Biogas / LPG",
  },

  // ════════════════════════════════════════════════════════════════
  // TREE PLANTING
  // ════════════════════════════════════════════════════════════════
  "tree:morogoro": {
    beneficiaries: "4,820,000", energyValue: "98,400", energyUnit: "Hectares",
    institutes: 87, institutePct: 62, forestSaved: "98,400", progressPct: 64,
    charcoal: [
      { label: "4,820,000 Trees", note: "Planted since 2020",           desc: "Native species across 8 districts" },
      { label: "186 Species",     note: "Indigenous tree species used",  desc: "Biodiversity-focused planting" },
    ],
    districts: ["All District","Kilombero","Kilosa","Malinyi","Morogoro DC","Morogoro Urban","Mvomero","Ulanga","Gairo"],
    highPriority: ["Kilombero","Ulanga"],
    suppliers: [
      { label: "Community Groups",  count: 41, pct: 55 },
      { label: "Government TFS",    count: 22, pct: 28 },
      { label: "NGOs / CBOs",       count: 14, pct: 12 },
      { label: "Private Sector",    count: 4,  pct: 5  },
    ],
    supplyCategory: "Seedling Source",
  },
  "tree:kilimanjaro": {
    beneficiaries: "3,640,000", energyValue: "73,800", energyUnit: "Hectares",
    institutes: 69, institutePct: 71, forestSaved: "73,800", progressPct: 82,
    charcoal: [
      { label: "3,640,000 Trees", note: "Afro-montane species",         desc: "Planted on Kilimanjaro slopes" },
      { label: "142 Species",     note: "Indigenous species recorded",  desc: "Upper catchment restoration" },
    ],
    districts: ["All District","Hai","Moshi DC","Moshi Urban","Mwanga","Rombo","Same","Siha"],
    highPriority: ["Moshi DC","Hai"],
    suppliers: [
      { label: "Community Groups",  count: 35, pct: 48 },
      { label: "Government TFS",    count: 26, pct: 36 },
      { label: "NGOs / CBOs",       count: 9,  pct: 12 },
      { label: "Private Sector",    count: 3,  pct: 4  },
    ],
    supplyCategory: "Seedling Source",
  },
  "tree:dodoma": {
    beneficiaries: "2,100,000", energyValue: "41,200", energyUnit: "Hectares",
    institutes: 54, institutePct: 44, forestSaved: "41,200", progressPct: 48,
    charcoal: [
      { label: "2,100,000 Trees", note: "Drought-resistant species",    desc: "Semi-arid land restoration" },
      { label: "94 Species",      note: "Indigenous species used",      desc: "Adapted to semi-arid climate" },
    ],
    districts: ["All District","Bahi","Chamwino","Dodoma City","Kondoa","Kongwa","Mpwapwa"],
    highPriority: ["Bahi","Kondoa"],
    suppliers: [
      { label: "Community Groups",  count: 28, pct: 50 },
      { label: "Government TFS",    count: 18, pct: 32 },
      { label: "NGOs / CBOs",       count: 8,  pct: 14 },
      { label: "Private Sector",    count: 2,  pct: 4  },
    ],
    supplyCategory: "Seedling Source",
  },
  "tree:iringa": {
    beneficiaries: "1,820,000", energyValue: "56,400", energyUnit: "Hectares",
    institutes: 48, institutePct: 67, forestSaved: "56,400", progressPct: 73,
    charcoal: [
      { label: "1,820,000 Trees", note: "Highland miombo restoration",  desc: "Southern Highland species" },
      { label: "118 Species",     note: "Indigenous species planted",   desc: "Biodiversity-rich planting" },
    ],
    districts: ["All District","Iringa DC","Iringa Urban","Kilolo","Mafinga","Mufindi"],
    highPriority: ["Mufindi","Kilolo"],
    suppliers: [
      { label: "Community Groups",  count: 22, pct: 46 },
      { label: "Government TFS",    count: 18, pct: 38 },
      { label: "NGOs / CBOs",       count: 7,  pct: 14 },
      { label: "Private Sector",    count: 1,  pct: 2  },
    ],
    supplyCategory: "Seedling Source",
  },

  // ════════════════════════════════════════════════════════════════
  // WASTE MANAGEMENT
  // ════════════════════════════════════════════════════════════════
  "waste:dar-es-salaam": {
    beneficiaries: "5,200,000", energyValue: "312,000", energyUnit: "Metric Tons/Year",
    institutes: 156, institutePct: 72, forestSaved: "312,000", progressPct: 76,
    charcoal: [
      { label: "312,000 Tons",    note: "Solid waste collected 2024",  desc: "Total municipal solid waste managed" },
      { label: "89,400 Tons",     note: "Recycled or composted",       desc: "Waste diverted from Pugu landfill" },
    ],
    districts: ["All District","Ilala","Kigamboni","Kinondoni","Temeke","Ubungo"],
    highPriority: ["Temeke","Kinondoni"],
    suppliers: [
      { label: "Private Operators", count: 48, pct: 58 },
      { label: "DCC / Municipality",count: 32, pct: 29 },
      { label: "CBOs",              count: 15, pct: 9  },
      { label: "Others",            count: 4,  pct: 4  },
    ],
    supplyCategory: "Collection Type",
  },
  "waste:morogoro": {
    beneficiaries: "1,800,000", energyValue: "94,000", energyUnit: "Metric Tons/Year",
    institutes: 44, institutePct: 38, forestSaved: "94,000", progressPct: 51,
    charcoal: [
      { label: "94,000 Tons",  note: "Municipal solid waste 2024",  desc: "Collected from Morogoro urban area" },
      { label: "22,000 Tons",  note: "Recycled or composted",       desc: "Waste diverted from open dumping" },
    ],
    districts: ["All District","Gairo","Kilombero","Kilosa","Malinyi","Morogoro DC","Morogoro Urban","Mvomero","Ulanga"],
    highPriority: ["Morogoro Urban","Kilosa"],
    suppliers: [
      { label: "Private Operators",  count: 21, pct: 52 },
      { label: "Municipality",       count: 14, pct: 31 },
      { label: "CBOs",               count: 7,  pct: 14 },
      { label: "Others",             count: 1,  pct: 3  },
    ],
    supplyCategory: "Collection Type",
  },
  "waste:mwanza": {
    beneficiaries: "1,340,000", energyValue: "68,500", energyUnit: "Metric Tons/Year",
    institutes: 38, institutePct: 44, forestSaved: "68,500", progressPct: 58,
    charcoal: [
      { label: "68,500 Tons",  note: "Collected near Lake Victoria shores", desc: "Lakeside city waste management" },
      { label: "18,200 Tons",  note: "Diverted from water bodies",          desc: "Preventing lake pollution" },
    ],
    districts: ["All District","Buchosa","Ilemela","Kwimba","Magu","Misungwi","Nyamagana","Sengerema","Ukerewe"],
    highPriority: ["Ilemela","Nyamagana"],
    suppliers: [
      { label: "Private Operators",  count: 18, pct: 48 },
      { label: "MCC / Municipality", count: 12, pct: 34 },
      { label: "CBOs",               count: 6,  pct: 14 },
      { label: "Others",             count: 2,  pct: 4  },
    ],
    supplyCategory: "Collection Type",
  },

  // ════════════════════════════════════════════════════════════════
  // WATER SOURCES
  // ════════════════════════════════════════════════════════════════
  "water:morogoro": {
    beneficiaries: "2,340,000", energyValue: "48,600", energyUnit: "m³/day",
    institutes: 318, institutePct: 54, forestSaved: "124,500", progressPct: 67,
    charcoal: [
      { label: "318 Water Points",  note: "Boreholes, springs & piped schemes", desc: "Functional as of 2024" },
      { label: "22 Major Schemes",  note: "Gravity-fed piped water systems",     desc: "Serving rural communities" },
    ],
    districts: ["All District","Gairo","Kilombero","Kilosa","Malinyi","Morogoro DC","Morogoro Urban","Mvomero","Ulanga"],
    highPriority: ["Ulanga","Kilombero"],
    suppliers: [
      { label: "RUWASA",             count: 124, pct: 44 },
      { label: "Community Schemes",  count: 108, pct: 38 },
      { label: "NGO-Supported",      count: 54,  pct: 14 },
      { label: "Private Kiosks",     count: 12,  pct: 4  },
    ],
    supplyCategory: "Provider Type",
  },
  "water:dodoma": {
    beneficiaries: "1,620,000", energyValue: "31,200", energyUnit: "m³/day",
    institutes: 214, institutePct: 41, forestSaved: "78,300", progressPct: 52,
    charcoal: [
      { label: "214 Water Points",  note: "Boreholes and piped schemes",       desc: "In semi-arid Dodoma region" },
      { label: "8 Major Schemes",   note: "Bulk water supply systems",          desc: "Serving Dodoma City and towns" },
    ],
    districts: ["All District","Bahi","Chamwino","Dodoma City","Kondoa","Kongwa","Mpwapwa"],
    highPriority: ["Bahi","Kondoa"],
    suppliers: [
      { label: "RUWASA / DUWASA",    count: 88,  pct: 46 },
      { label: "Community Schemes",  count: 72,  pct: 36 },
      { label: "NGO-Supported",      count: 38,  pct: 14 },
      { label: "Private Kiosks",     count: 8,   pct: 4  },
    ],
    supplyCategory: "Provider Type",
  },
  "water:kilimanjaro": {
    beneficiaries: "1,890,000", energyValue: "42,800", energyUnit: "m³/day",
    institutes: 276, institutePct: 63, forestSaved: "98,600", progressPct: 74,
    charcoal: [
      { label: "276 Water Points",  note: "Springs and gravity schemes",       desc: "Fed by Kilimanjaro glaciers" },
      { label: "34 Major Schemes",  note: "Gravity-fed piped systems",         desc: "Mt Kilimanjaro meltwater sources" },
    ],
    districts: ["All District","Hai","Moshi DC","Moshi Urban","Mwanga","Rombo","Same","Siha"],
    highPriority: ["Same","Mwanga"],
    suppliers: [
      { label: "RUWASA / KIWASA",    count: 112, pct: 48 },
      { label: "Community Schemes",  count: 96,  pct: 38 },
      { label: "NGO-Supported",      count: 46,  pct: 10 },
      { label: "Private Kiosks",     count: 9,   pct: 4  },
    ],
    supplyCategory: "Provider Type",
  },

  // ════════════════════════════════════════════════════════════════
  // FORESTS
  // ════════════════════════════════════════════════════════════════
  "forests:morogoro": {
    beneficiaries: "1,240,000", energyValue: "847", energyUnit: "Species",
    institutes: 23, institutePct: 58, forestSaved: "2,104,000", progressPct: 71,
    charcoal: [
      { label: "2,104,000 ha",  note: "Gazetted forest area",         desc: "Including Selous GR & Udzungwa NP" },
      { label: "847 Species",   note: "Flora & fauna inventoried",    desc: "Udzungwa Mountains biodiversity" },
    ],
    districts: ["All District","Kilombero","Kilosa","Malinyi","Morogoro DC","Mvomero","Ulanga"],
    highPriority: ["Ulanga","Mvomero"],
    suppliers: [
      { label: "TANAPA",             count: 8,  pct: 48 },
      { label: "TAWA",               count: 6,  pct: 28 },
      { label: "District Councils",  count: 5,  pct: 16 },
      { label: "NGOs / CBOs",        count: 4,  pct: 8  },
    ],
    supplyCategory: "Management Authority",
  },
  "forests:kilimanjaro": {
    beneficiaries: "890,000", energyValue: "621", energyUnit: "Species",
    institutes: 18, institutePct: 67, forestSaved: "1,668,000", progressPct: 84,
    charcoal: [
      { label: "1,668,000 ha",  note: "Kilimanjaro Forest Reserve",  desc: "Montane & sub-montane forests" },
      { label: "621 Species",   note: "Species catalogued",           desc: "Including critically endangered birds" },
    ],
    districts: ["All District","Hai","Moshi DC","Moshi Urban","Mwanga","Rombo","Same","Siha"],
    highPriority: ["Moshi DC","Hai"],
    suppliers: [
      { label: "TANAPA / KINAPA",    count: 9,  pct: 54 },
      { label: "TFS",                count: 5,  pct: 28 },
      { label: "District Councils",  count: 3,  pct: 12 },
      { label: "NGOs",               count: 1,  pct: 6  },
    ],
    supplyCategory: "Management Authority",
  },
  "forests:ruvuma": {
    beneficiaries: "740,000", energyValue: "512", energyUnit: "Species",
    institutes: 14, institutePct: 52, forestSaved: "1,420,000", progressPct: 68,
    charcoal: [
      { label: "1,420,000 ha",  note: "Nyassa-Kilwa miombo woodland",  desc: "Bordering Mozambique frontier" },
      { label: "512 Species",   note: "Miombo woodland species",        desc: "Including large mammals" },
    ],
    districts: ["All District","Mbinga DC","Mbinga Urban","Namtumbo","Nyasa","Songea DC","Songea Urban","Tunduru"],
    highPriority: ["Tunduru","Namtumbo"],
    suppliers: [
      { label: "TAWA",               count: 7,  pct: 44 },
      { label: "TANAPA",             count: 4,  pct: 28 },
      { label: "District Councils",  count: 5,  pct: 20 },
      { label: "NGOs",               count: 2,  pct: 8  },
    ],
    supplyCategory: "Management Authority",
  },

  // ════════════════════════════════════════════════════════════════
  // WILDLIFE
  // ════════════════════════════════════════════════════════════════
  "wildlife:morogoro": {
    beneficiaries: "312", energyValue: "48", energyUnit: "Cases/Year",
    institutes: 14, institutePct: 63, forestSaved: "1,340,000", progressPct: 74,
    charcoal: [
      { label: "312 Species",   note: "Under active monitoring",      desc: "Including Big 5 and endangered species" },
      { label: "94 Operations", note: "Anti-poaching ops 2024",       desc: "Joint TAWA-TPS operations" },
    ],
    districts: ["All District","Kilombero","Kilosa","Malinyi","Morogoro DC","Mvomero","Ulanga"],
    highPriority: ["Kilombero","Ulanga"],
    suppliers: [
      { label: "TANAPA",            count: 6,  pct: 52 },
      { label: "TAWA",              count: 4,  pct: 29 },
      { label: "District Councils", count: 3,  pct: 14 },
      { label: "Private Reserves",  count: 1,  pct: 5  },
    ],
    supplyCategory: "Management Authority",
  },
  "wildlife:arusha": {
    beneficiaries: "428", energyValue: "72", energyUnit: "Cases/Year",
    institutes: 19, institutePct: 74, forestSaved: "1,820,000", progressPct: 81,
    charcoal: [
      { label: "428 Species",   note: "Serengeti-Mara ecosystem",     desc: "Including wildebeest migration" },
      { label: "128 Operations",note: "Anti-poaching ops 2024",       desc: "Protecting Ngorongoro & Serengeti" },
    ],
    districts: ["All District","Arusha City","Arusha DC","Karatu","Longido","Meru","Monduli","Ngorongoro"],
    highPriority: ["Ngorongoro","Monduli"],
    suppliers: [
      { label: "TANAPA / NCAA",     count: 8,  pct: 58 },
      { label: "TAWA",              count: 4,  pct: 24 },
      { label: "District Councils", count: 4,  pct: 14 },
      { label: "Private Conservancies", count: 1, pct: 4 },
    ],
    supplyCategory: "Management Authority",
  },

  // ════════════════════════════════════════════════════════════════
  // CARBON TRADE
  // ════════════════════════════════════════════════════════════════
  "carbon:morogoro": {
    beneficiaries: "28", energyValue: "1,240,000", energyUnit: "tCO₂e",
    institutes: 18, institutePct: 34, forestSaved: "1,240,000", progressPct: 58,
    charcoal: [
      { label: "28 Projects",      note: "VCS & Gold Standard verified", desc: "REDD+ and afforestation projects" },
      { label: "1,240,000 tCO₂e", note: "Credits issued 2024",          desc: "Revenue to communities: $4.2M" },
    ],
    districts: ["All District","Kilombero","Kilosa","Malinyi","Morogoro DC","Mvomero","Ulanga"],
    highPriority: ["Kilombero","Kilosa"],
    suppliers: [
      { label: "International Buyers",  count: 9,  pct: 48 },
      { label: "Government Offtake",    count: 6,  pct: 28 },
      { label: "Local Market",          count: 4,  pct: 16 },
      { label: "Voluntary Offset",      count: 2,  pct: 8  },
    ],
    supplyCategory: "Carbon Buyer Type",
  },
  "carbon:ruvuma": {
    beneficiaries: "16", energyValue: "780,000", energyUnit: "tCO₂e",
    institutes: 11, institutePct: 28, forestSaved: "780,000", progressPct: 44,
    charcoal: [
      { label: "16 Projects",     note: "REDD+ focused projects",      desc: "Miombo woodland carbon projects" },
      { label: "780,000 tCO₂e",  note: "Credits issued 2024",         desc: "Community benefit: $2.6M" },
    ],
    districts: ["All District","Mbinga DC","Mbinga Urban","Namtumbo","Nyasa","Songea DC","Songea Urban","Tunduru"],
    highPriority: ["Tunduru","Namtumbo"],
    suppliers: [
      { label: "International Buyers",  count: 6,  pct: 44 },
      { label: "Government Offtake",    count: 4,  pct: 30 },
      { label: "Local Market",          count: 3,  pct: 18 },
      { label: "Voluntary Offset",      count: 1,  pct: 8  },
    ],
    supplyCategory: "Carbon Buyer Type",
  },

  // ════════════════════════════════════════════════════════════════
  // BLUE ECONOMY
  // ════════════════════════════════════════════════════════════════
  "blue:mwanza": {
    beneficiaries: "84,200", energyValue: "112,000", energyUnit: "Metric Tons",
    institutes: 34, institutePct: 41, forestSaved: "890", progressPct: 62,
    charcoal: [
      { label: "84,200 Fishers",  note: "Licensed artisanal & commercial", desc: "Lake Victoria fishing communities" },
      { label: "42 Reefs",        note: "Aquatic habitats monitored",      desc: "Nearshore monitoring stations" },
    ],
    districts: ["All District","Buchosa","Ilemela","Kwimba","Magu","Misungwi","Nyamagana","Sengerema","Ukerewe"],
    highPriority: ["Ilemela","Ukerewe"],
    suppliers: [
      { label: "Artisanal Fishers",   count: 52, pct: 58 },
      { label: "Commercial Boats",    count: 18, pct: 24 },
      { label: "Cooperatives / BMUs", count: 12, pct: 13 },
      { label: "Fish Farms",          count: 4,  pct: 5  },
    ],
    supplyCategory: "Fishing / Aquaculture Method",
  },
  "blue:tanga": {
    beneficiaries: "42,800", energyValue: "56,400", energyUnit: "Metric Tons",
    institutes: 21, institutePct: 38, forestSaved: "1,240", progressPct: 54,
    charcoal: [
      { label: "42,800 Fishers",  note: "Coastal & deep-sea licensed",  desc: "Indian Ocean fishing zone" },
      { label: "18 MPAs",         note: "Marine protected areas",        desc: "Including Mnemba atoll" },
    ],
    districts: ["All District","Handeni DC","Handeni Urban","Kilindi","Korogwe DC","Korogwe Urban","Lushoto","Mkinga","Muheza","Pangani","Tanga City"],
    highPriority: ["Pangani","Mkinga"],
    suppliers: [
      { label: "Artisanal Fishers",   count: 28, pct: 54 },
      { label: "Commercial Boats",    count: 10, pct: 26 },
      { label: "Cooperatives / BMUs", count: 8,  pct: 15 },
      { label: "Fish Farms",          count: 2,  pct: 5  },
    ],
    supplyCategory: "Fishing / Aquaculture Method",
  },
  "blue:lindi": {
    beneficiaries: "18,400", energyValue: "22,600", energyUnit: "Metric Tons",
    institutes: 12, institutePct: 32, forestSaved: "680", progressPct: 41,
    charcoal: [
      { label: "18,400 Fishers",  note: "Southern coast artisanal",     desc: "Coral reef-dependent fisheries" },
      { label: "6 MPAs",          note: "Marine protected areas",        desc: "Mafia Island & surroundings" },
    ],
    districts: ["All District","Kilwa","Lindi DC","Lindi Urban","Liwale","Nachingwea","Ruangwa"],
    highPriority: ["Kilwa","Ruangwa"],
    suppliers: [
      { label: "Artisanal Fishers",   count: 14, pct: 58 },
      { label: "Commercial Boats",    count: 4,  pct: 24 },
      { label: "Cooperatives / BMUs", count: 3,  pct: 14 },
      { label: "Fish Farms",          count: 1,  pct: 4  },
    ],
    supplyCategory: "Fishing / Aquaculture Method",
  },

  // ════════════════════════════════════════════════════════════════
  // CLIMATE CHANGE
  // ════════════════════════════════════════════════════════════════
  "climate:morogoro": {
    beneficiaries: "64", energyValue: "340,000", energyUnit: "tCO₂e/Year",
    institutes: 22, institutePct: 44, forestSaved: "340,000", progressPct: 59,
    charcoal: [
      { label: "64 Projects",       note: "NDC adaptation & mitigation",  desc: "Under VPO climate coordination" },
      { label: "89,400 Households", note: "Climate-vulnerable HHs supported", desc: "Early warning & adaptation" },
    ],
    districts: ["All District","Kilombero","Kilosa","Malinyi","Morogoro DC","Morogoro Urban","Mvomero","Ulanga"],
    highPriority: ["Ulanga","Kilombero"],
    suppliers: [
      { label: "Green Climate Fund",  count: 24, pct: 46 },
      { label: "Government Budget",   count: 18, pct: 32 },
      { label: "NGO / Development",   count: 12, pct: 16 },
      { label: "Private Sector",      count: 4,  pct: 6  },
    ],
    supplyCategory: "Climate Finance Source",
  },
  "climate:dodoma": {
    beneficiaries: "42", energyValue: "198,000", energyUnit: "tCO₂e/Year",
    institutes: 16, institutePct: 38, forestSaved: "198,000", progressPct: 47,
    charcoal: [
      { label: "42 Projects",       note: "Drought-response focused",     desc: "Semi-arid adaptation measures" },
      { label: "62,000 Households", note: "Supported with adaptation",    desc: "Smallholder farmer support" },
    ],
    districts: ["All District","Bahi","Chamwino","Dodoma City","Kondoa","Kongwa","Mpwapwa"],
    highPriority: ["Bahi","Kondoa"],
    suppliers: [
      { label: "Green Climate Fund",  count: 14, pct: 42 },
      { label: "Government Budget",   count: 12, pct: 34 },
      { label: "NGO / Development",   count: 8,  pct: 18 },
      { label: "Private Sector",      count: 2,  pct: 6  },
    ],
    supplyCategory: "Climate Finance Source",
  },

  // ════════════════════════════════════════════════════════════════
  // POLLUTION
  // ════════════════════════════════════════════════════════════════
  "pollution:dar-es-salaam": {
    beneficiaries: "142", energyValue: "28,400", energyUnit: "Metric Tons",
    institutes: 38, institutePct: 67, forestSaved: "142", progressPct: 71,
    charcoal: [
      { label: "142 Sites",     note: "Remediated by 2024",         desc: "Industrial & dumpsite cleanups" },
      { label: "38 Stations",   note: "Air & water quality monitors", desc: "NEMC real-time monitoring network" },
    ],
    districts: ["All District","Ilala","Kigamboni","Kinondoni","Temeke","Ubungo"],
    highPriority: ["Temeke","Ubungo"],
    suppliers: [
      { label: "Licensed Private",   count: 18, pct: 52 },
      { label: "NEMC / Government",  count: 10, pct: 28 },
      { label: "NGOs",               count: 6,  pct: 14 },
      { label: "CBOs",               count: 2,  pct: 6  },
    ],
    supplyCategory: "Remediation Operator",
  },
  "pollution:mwanza": {
    beneficiaries: "68", energyValue: "14,200", energyUnit: "Metric Tons",
    institutes: 24, institutePct: 54, forestSaved: "68", progressPct: 58,
    charcoal: [
      { label: "68 Sites",      note: "Lake Victoria shore remediation", desc: "Industrial effluent & plastic cleanup" },
      { label: "18 Stations",   note: "Lake water quality monitors",     desc: "Monitoring algal blooms & pH" },
    ],
    districts: ["All District","Buchosa","Ilemela","Kwimba","Magu","Misungwi","Nyamagana","Sengerema","Ukerewe"],
    highPriority: ["Nyamagana","Sengerema"],
    suppliers: [
      { label: "Licensed Private",   count: 12, pct: 48 },
      { label: "NEMC / Government",  count: 7,  pct: 28 },
      { label: "NGOs",               count: 4,  pct: 16 },
      { label: "CBOs",               count: 2,  pct: 8  },
    ],
    supplyCategory: "Remediation Operator",
  },

  // ════════════════════════════════════════════════════════════════
  // INVASIVE SPECIES
  // ════════════════════════════════════════════════════════════════
  "invasive:morogoro": {
    beneficiaries: "24", energyValue: "128,400", energyUnit: "Hectares",
    institutes: 16, institutePct: 46, forestSaved: "128,400", progressPct: 52,
    charcoal: [
      { label: "24 Species",      note: "Invasive species identified",  desc: "Water hyacinth, Siam weed, Lantana" },
      { label: "6 Species",       note: "Under active eradication",     desc: "Priority control programme" },
    ],
    districts: ["All District","Kilombero","Kilosa","Malinyi","Morogoro DC","Mvomero","Ulanga"],
    highPriority: ["Kilombero","Ulanga"],
    suppliers: [
      { label: "Mechanical Control",   count: 8,  pct: 44 },
      { label: "Biological Control",   count: 4,  pct: 24 },
      { label: "Chemical Control",     count: 5,  pct: 22 },
      { label: "Community Removal",    count: 2,  pct: 10 },
    ],
    supplyCategory: "Control Method",
  },
  "invasive:mwanza": {
    beneficiaries: "18", energyValue: "88,600", energyUnit: "Hectares",
    institutes: 12, institutePct: 38, forestSaved: "88,600", progressPct: 44,
    charcoal: [
      { label: "18 Species",      note: "Lake Victoria invasives",      desc: "Water hyacinth dominant threat" },
      { label: "4 Species",       note: "Under active eradication",     desc: "Lake surface recovery efforts" },
    ],
    districts: ["All District","Buchosa","Ilemela","Kwimba","Magu","Misungwi","Nyamagana","Sengerema","Ukerewe"],
    highPriority: ["Ukerewe","Sengerema"],
    suppliers: [
      { label: "Mechanical Harvesters", count: 6,  pct: 48 },
      { label: "Biological Control",    count: 3,  pct: 28 },
      { label: "Chemical Control",      count: 2,  pct: 14 },
      { label: "Community Removal",     count: 1,  pct: 10 },
    ],
    supplyCategory: "Control Method",
  },

  // ════════════════════════════════════════════════════════════════
  // WETLANDS
  // ════════════════════════════════════════════════════════════════
  "wetland:morogoro": {
    beneficiaries: "186,000", energyValue: "342,000", energyUnit: "Hectares",
    institutes: 14, institutePct: 52, forestSaved: "342,000", progressPct: 61,
    charcoal: [
      { label: "342,000 ha",     note: "Wetland area conserved",      desc: "Kilombero Valley Ramsar site" },
      { label: "128 Bird Species", note: "Wetland birds monitored",   desc: "Including migratory species" },
    ],
    districts: ["All District","Kilombero","Kilosa","Malinyi","Morogoro DC","Mvomero","Ulanga"],
    highPriority: ["Kilombero","Ulanga"],
    suppliers: [
      { label: "TAWA / Wildlife",    count: 5,  pct: 42 },
      { label: "TANAPA",             count: 3,  pct: 28 },
      { label: "District Councils",  count: 4,  pct: 20 },
      { label: "NGOs",               count: 2,  pct: 10 },
    ],
    supplyCategory: "Conservation Authority",
  },

  // ════════════════════════════════════════════════════════════════
  // AQUATIC ECOSYSTEMS
  // ════════════════════════════════════════════════════════════════
  "aquatic:mwanza": {
    beneficiaries: "18", energyValue: "482", energyUnit: "Species",
    institutes: 24, institutePct: 48, forestSaved: "3,680", progressPct: 62,
    charcoal: [
      { label: "18 Systems",     note: "Lakes, rivers & wetlands",     desc: "Lake Victoria basin monitoring" },
      { label: "482 Species",    note: "Aquatic species inventoried",  desc: "Fish, invertebrates & plants" },
    ],
    districts: ["All District","Buchosa","Ilemela","Kwimba","Magu","Misungwi","Nyamagana","Sengerema","Ukerewe"],
    highPriority: ["Ilemela","Ukerewe"],
    suppliers: [
      { label: "TAFIRI Research",    count: 8,  pct: 44 },
      { label: "NEMC Monitoring",    count: 6,  pct: 28 },
      { label: "UDSM / Universities",count: 5,  pct: 20 },
      { label: "NGOs",               count: 2,  pct: 8  },
    ],
    supplyCategory: "Research & Monitoring Partner",
  },

  // ════════════════════════════════════════════════════════════════
  // GENDER & ENVIRONMENT
  // ════════════════════════════════════════════════════════════════
  "gender:morogoro": {
    beneficiaries: "8,420", energyValue: "36", energyUnit: "Projects",
    institutes: 28, institutePct: 54, forestSaved: "38", progressPct: 44,
    charcoal: [
      { label: "8,420 Women",    note: "In env. leadership roles",     desc: "Forest committees, water boards" },
      { label: "182 Groups",     note: "Women-led community groups",   desc: "Environmental management groups" },
    ],
    districts: ["All District","Kilombero","Kilosa","Malinyi","Morogoro DC","Morogoro Urban","Mvomero","Ulanga"],
    highPriority: ["Ulanga","Kilombero"],
    suppliers: [
      { label: "Government / VPO",   count: 12, pct: 46 },
      { label: "NGOs / CSOs",        count: 8,  pct: 32 },
      { label: "UN Agencies",        count: 5,  pct: 16 },
      { label: "Private Sector",     count: 2,  pct: 6  },
    ],
    supplyCategory: "Programme Implementing Partner",
  },

  // ════════════════════════════════════════════════════════════════
  // GREEN DODOMA
  // ════════════════════════════════════════════════════════════════
  "dodoma:dodoma": {
    beneficiaries: "1,240,000", energyValue: "2,840", energyUnit: "Hectares",
    institutes: 186, institutePct: 72, forestSaved: "2,840", progressPct: 68,
    charcoal: [
      { label: "2,840,000 Trees", note: "Planted in Dodoma City",      desc: "Roadside, parks & institutions" },
      { label: "12 Corridors",    note: "Green corridors established",  desc: "Connecting urban green spaces" },
    ],
    districts: ["All District","Bahi","Chamwino","Dodoma City","Kondoa","Kongwa","Mpwapwa"],
    highPriority: ["Dodoma City","Chamwino"],
    suppliers: [
      { label: "DCC / Municipality",  count: 68, pct: 52 },
      { label: "Schools & Colleges",  count: 42, pct: 28 },
      { label: "Community Groups",    count: 22, pct: 14 },
      { label: "Private Sector",      count: 8,  pct: 6  },
    ],
    supplyCategory: "Planting Partner",
  },
};

// Fallback for any module+region not seeded above
const DEFAULT_DASHBOARD = {
  beneficiaries: "1,250,000",
  energyValue:   "45,000",
  energyUnit:    "Units",
  institutes:    48,
  institutePct:  22,
  forestSaved:   "62,400",
  progressPct:   42,
  charcoal: [
    { label: "62,400 Units", note: "Primary indicator 2024",        desc: "Main impact metric for this module" },
    { label: "45,000 Units", note: "Year-on-year trend",            desc: "Secondary performance indicator" },
  ],
  districts:    ["All District","District A","District B","District C"],
  highPriority: ["District A"],
  suppliers: [
    { label: "Government",         count: 18, pct: 45 },
    { label: "Private Sector",     count: 14, pct: 32 },
    { label: "NGOs / CBOs",        count: 10, pct: 16 },
    { label: "Others",             count: 4,  pct: 7  },
  ],
  supplyCategory: "Implementation Partner",
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const FOOTER = {
  explore:    ["Home", "Modules", "Login"],
  modules:    ["Clean Cooking", "Carbon Trade", "Tree Planting", "Waste Management"],
  quickLinks: ["VPO Website", "Ikulu", "NEMC", "NCMC"],
};

// ═══ PUBLIC READ API ══════════════════════════════════════════════════════════

export async function getAnnouncement() { return ANNOUNCEMENT; }
export async function listNavLinks()    { return NAV_LINKS; }
export async function listStats()       { return STATS; }
export async function listSlides()      { return SLIDES; }
export async function listRegions()     { return REGIONS; }
export async function getRegion(id)     { return REGIONS.find((r) => r.id === id) || null; }
export async function listModules()     { return MODULES; }
export async function getModule(id)     { return MODULES.find((m) => m.id === id) || null; }
export async function getFooterLinks()  { return FOOTER; }

export async function getModuleThemeById(id) {
  return getModuleTheme(id);
}

/**
 * getDashboardData(moduleId, regionId)
 *
 * Returns dashboard payload with:
 *   - module  — id, label, title, theme
 *   - region  — id, name, priority
 *   - labels  — all UI text strings for this module (no hardcoded "cooking" strings)
 *   - data    — beneficiaries, energyValue, institutes, forestSaved, progressPct,
 *               charcoal[], districts[], highPriority[], suppliers[], supplyCategory
 *
 * Mirrors the expected future API response shape.
 */
export async function getDashboardData(moduleId, regionId, districtId) {
  const module = await getModule(moduleId);
  const region = await getRegion(regionId);
  if (!module || !region) return null;

  const exactKey = `${moduleId}:${regionId}`;
  const anyKey   = Object.keys(DASHBOARDS).find((k) => k.startsWith(`${moduleId}:`));
  const raw      = DASHBOARDS[exactKey] || DASHBOARDS[anyKey] || DEFAULT_DASHBOARD;

  const isDistrict = districtId && districtId !== "All Districts";
  const factor     = isDistrict ? districtScaleFactor(districtId) : 1;

  // Which fields to scale
  const scaled = isDistrict
    ? {
        ...raw,
        beneficiaries:  scaleValue(raw.beneficiaries,  factor),
        energyValue:    scaleValue(raw.energyValue,     factor),
        institutes:     scaleValue(raw.institutes,      factor),
        institutePct:   Math.min(100, Math.round((raw.institutePct  || 0) * (0.6 + factor))),
        forestSaved:    scaleValue(raw.forestSaved,     factor),
        progressPct:    Math.min(100, Math.round((raw.progressPct   || 0) * (0.7 + factor * 0.5))),
        highPriority:   (raw.highPriority || []).filter((d) => d === districtId),
        suppliers: (raw.suppliers || []).map((s) => ({
          ...s,
          count: Math.max(1, Math.round(s.count * factor)),
        })),
      }
    : raw;

  const districts = await getDistrictsByRegion(regionId);

  return {
    module: { id: module.id, label: module.label, title: module.title, theme: module.theme || getModuleTheme(module.id) },
    region: { id: region.id, name: region.name, priority: region.priority },
    district: isDistrict ? { id: districtId, name: districtId } : null,
    districts,
    labels: getModuleLabels(moduleId),
    ...scaled,
  };
}

// ─── National-level dashboard data (whole Tanzania) ──────────────────────────
//
// Used when viewMode = "national". Figures represent country-wide aggregates
// across all 31 regions. Approximately 15–20× typical single-region values.
//
const NATIONAL_DASHBOARDS = {
  cooking: {
    beneficiaries: "18,420,000", energyValue: "2,140,000,000", energyUnit: "Joules",
    institutes: 1840, institutePct: 44, forestSaved: "3,240,000", progressPct: 62,
    charcoal: [
      { label: "284,000 Tons",  note: "Equivalent to 342,000 km²", desc: "Charcoal saved nationally by clean energy" },
      { label: "99,400 Tons",   note: "CO₂ emissions avoided",     desc: "Annual greenhouse gas reduction" },
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
      { label: "42,600,000 Trees", note: "Planted 2020–2024",      desc: "Native species across all 31 regions" },
      { label: "1,240 Species",    note: "Indigenous species used", desc: "Biodiversity-focused national programme" },
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
      { label: "1,840,000 Tons", note: "Collected nationally 2024",  desc: "Municipal solid waste managed across Tanzania" },
      { label: "486,000 Tons",   note: "Recycled or composted",      desc: "Total waste diverted from dumpsites" },
    ],
    highPriority: [],
    suppliers: [
      { label: "Private Operators",  count: 348, pct: 54 },
      { label: "Municipalities",     count: 246, pct: 32 },
      { label: "CBOs",               count: 98,  pct: 11 },
      { label: "Others",             count: 18,  pct: 3  },
    ],
    supplyCategory: "Collection Type",
  },
  water: {
    beneficiaries: "28,400,000", energyValue: "486,000", energyUnit: "m³/day",
    institutes: 3840, institutePct: 62, forestSaved: "1,240,000", progressPct: 68,
    charcoal: [
      { label: "3,840 Water Points", note: "Functional as of 2024",     desc: "Boreholes, springs & piped schemes nationally" },
      { label: "284 Major Schemes",  note: "Gravity-fed piped systems",  desc: "Serving rural communities across all regions" },
    ],
    highPriority: [],
    suppliers: [
      { label: "RUWASA / DWSAs",     count: 1640, pct: 46 },
      { label: "Community Schemes",  count: 1240, pct: 36 },
      { label: "NGO-Supported",      count: 620,  pct: 14 },
      { label: "Private Kiosks",     count: 128,  pct: 4  },
    ],
    supplyCategory: "Provider Type",
  },
  forests: {
    beneficiaries: "12,400,000", energyValue: "6,842", energyUnit: "Species",
    institutes: 184, institutePct: 62, forestSaved: "28,400,000", progressPct: 74,
    charcoal: [
      { label: "28.4 M hectares",  note: "Gazetted forest area",       desc: "Total gazetted forests across all regions" },
      { label: "6,842 Species",    note: "Flora & fauna inventoried",  desc: "National biodiversity database" },
    ],
    highPriority: [],
    suppliers: [
      { label: "TANAPA",            count: 68,  pct: 46 },
      { label: "TAWA",              count: 42,  pct: 28 },
      { label: "District Councils", count: 46,  pct: 18 },
      { label: "NGOs / CBOs",       count: 24,  pct: 8  },
    ],
    supplyCategory: "Management Authority",
  },
  wildlife: {
    beneficiaries: "2,840", energyValue: "384", energyUnit: "Cases/Year",
    institutes: 124, institutePct: 68, forestSaved: "14,200,000", progressPct: 78,
    charcoal: [
      { label: "2,840 Species",   note: "Under national monitoring",    desc: "Fauna species tracked across all parks & reserves" },
      { label: "842 Operations",  note: "Anti-poaching ops 2024",       desc: "Joint TAWA-TANAPA-TPS operations nationally" },
    ],
    highPriority: [],
    suppliers: [
      { label: "TANAPA",             count: 48, pct: 52 },
      { label: "TAWA",               count: 32, pct: 30 },
      { label: "District Councils",  count: 18, pct: 14 },
      { label: "Private Conservancies", count: 4, pct: 4 },
    ],
    supplyCategory: "Management Authority",
  },
  carbon: {
    beneficiaries: "147", energyValue: "12,400,000", energyUnit: "tCO₂e",
    institutes: 124, institutePct: 38, forestSaved: "12,400,000", progressPct: 52,
    charcoal: [
      { label: "147 Projects",       note: "VCS & Gold Standard verified", desc: "REDD+ and afforestation projects nationally" },
      { label: "12,400,000 tCO₂e",  note: "Credits issued 2024",         desc: "Community & government revenue: $42M" },
    ],
    highPriority: [],
    suppliers: [
      { label: "International Buyers",  count: 68,  pct: 48 },
      { label: "Government Offtake",    count: 42,  pct: 28 },
      { label: "Local Market",          count: 28,  pct: 16 },
      { label: "Voluntary Offset",      count: 12,  pct: 8  },
    ],
    supplyCategory: "Carbon Buyer Type",
  },
  blue: {
    beneficiaries: "284,000", energyValue: "842,000", energyUnit: "Metric Tons",
    institutes: 184, institutePct: 44, forestSaved: "14,200", progressPct: 58,
    charcoal: [
      { label: "284,000 Fishers", note: "Licensed nationally 2024",    desc: "Artisanal, commercial & aquaculture operators" },
      { label: "124 MPAs",        note: "Marine protected areas",       desc: "Indian Ocean & Lake Victoria conservation zones" },
    ],
    highPriority: [],
    suppliers: [
      { label: "Artisanal Fishers",    count: 168, pct: 56 },
      { label: "Commercial Boats",     count: 68,  pct: 24 },
      { label: "Cooperatives / BMUs",  count: 42,  pct: 14 },
      { label: "Aquaculture Farms",    count: 18,  pct: 6  },
    ],
    supplyCategory: "Fishing / Aquaculture Method",
  },
  climate: {
    beneficiaries: "284", energyValue: "3,400,000", energyUnit: "tCO₂e/Year",
    institutes: 142, institutePct: 48, forestSaved: "3,400,000", progressPct: 54,
    charcoal: [
      { label: "284 Projects",       note: "NDC adaptation & mitigation",    desc: "National climate action programmes" },
      { label: "840,000 Households", note: "Climate-vulnerable HHs supported", desc: "Early warning, adaptation & resilience" },
    ],
    highPriority: [],
    suppliers: [
      { label: "Green Climate Fund",  count: 112, pct: 46 },
      { label: "Government Budget",   count: 84,  pct: 32 },
      { label: "NGO / Development",   count: 46,  pct: 16 },
      { label: "Private Sector",      count: 14,  pct: 6  },
    ],
    supplyCategory: "Climate Finance Source",
  },
  pollution: {
    beneficiaries: "842", energyValue: "184,000", energyUnit: "Metric Tons",
    institutes: 284, institutePct: 62, forestSaved: "842", progressPct: 66,
    charcoal: [
      { label: "842 Sites",     note: "Remediated nationally 2024",   desc: "Industrial, urban & dumpsite cleanups" },
      { label: "284 Stations",  note: "Air & water quality monitors",  desc: "NEMC national monitoring network" },
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

/**
 * Returns national dashboard data for a module (whole Tanzania aggregate).
 */
export async function getNationalDashboardData(moduleId) {
  const module = await getModule(moduleId);
  if (!module) return null;

  const raw = NATIONAL_DASHBOARDS[moduleId] || {
    beneficiaries: "12,400,000", energyValue: "420,000", energyUnit: "Units",
    institutes: 480, institutePct: 42, forestSaved: "624,000", progressPct: 48,
    charcoal: [
      { label: "624,000 Units", note: "National programme 2024", desc: "Primary national impact indicator" },
      { label: "420,000 Units", note: "Annual trend",             desc: "Secondary national indicator" },
    ],
    highPriority: [],
    suppliers: [
      { label: "Government",        count: 184, pct: 44 },
      { label: "Private Sector",    count: 142, pct: 32 },
      { label: "NGOs / CBOs",       count: 98,  pct: 18 },
      { label: "Others",            count: 28,  pct: 6  },
    ],
    supplyCategory: "Implementation Partner",
  };

  const districts = ["All Districts"];

  return {
    module: {
      id:    module.id,
      label: module.label,
      title: module.title,
      theme: module.theme || getModuleTheme(module.id),
    },
    region:   { id: "national", name: "Tanzania (National)", priority: "very-high" },
    district: null,
    districts,
    labels:   getModuleLabels(moduleId),
    ...raw,
  };
}

// ─── District lookup ──────────────────────────────────────────────────────────
const _REGION_DISTRICTS = {
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

export async function getDistrictsByRegion(regionId) {
  const list = _REGION_DISTRICTS[regionId];
  if (!list) return ["All Districts"];
  return ["All Districts", ...list];
}