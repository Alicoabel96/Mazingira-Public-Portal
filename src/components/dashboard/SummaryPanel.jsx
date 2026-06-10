import StatCard      from "./StatCard";
import InstituteCard from "./InstituteCard";
import ImpactCard    from "./ImpactCard";
import SupplierChart from "./SupplierChart";
import { IconPeople, IconCup, IconPlus } from "@/components/icons/StatIcons";

export default function SummaryPanel({ data, theme, isRefetching = false }) {
  const t = theme || { primary: "#0b736c", dark: "#145244", soft: "#d6f5f2" };
  const L = data.labels || {};

  const locationLabel = data.district
    ? `${data.region.name} — ${data.district.name} District`
    : `${data.region.name} Region`;

  return (
    <div className="border-b lg:border-b-0 lg:border-r border-gray-200 p-4 lg:p-[18px] flex flex-col gap-3.5">

      {/* Header */}
      <div>
        <p
          className="text-[10.5px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5"
          style={{ color: t.primary }}
        >
          {/* Small pulsing dot when re-fetching — no layout shift, no opacity change */}
          {isRefetching && (
            <span
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse shrink-0"
              style={{ backgroundColor: t.primary }}
              aria-label="Updating"
            />
          )}
          Summary for {locationLabel}
        </p>
        <h2 className="text-[21px] font-extrabold text-gray-900 leading-[1.22] m-0">
          {data.module.title}
        </h2>
      </div>

      {/* Two stat cards */}
      <div className="grid grid-cols-2 gap-2">
        <StatCard
          bg={t.dark}
          label={L.stat1Label || "Number of Beneficiaries"}
          value={data.beneficiaries}
          icon={<IconPeople />}
        />
        <StatCard
          bg={t.primary}
          label={L.stat2Label || "Key Metric"}
          value={data.energyValue}
          subtitle={L.stat2Unit || data.energyUnit}
          icon={<IconCup />}
        />
      </div>

      <InstituteCard
        count={data.institutes}
        percent={data.institutePct}
        theme={t}
        line1={L.instituteLine1}
        line2={L.instituteLine2}
      />

      <ImpactCard
        forestSaved={data.forestSaved}
        progressPct={data.progressPct}
        charcoal={data.charcoal}
        theme={t}
        title={L.impactTitle}
        metric={L.impactMetric}
        desc={L.impactDesc}
        progressLabel={L.impactProgress}
      />

      <SupplierChart
        category={data.supplyCategory}
        suppliers={data.suppliers}
        theme={t}
        intro={L.supplierIntro}
      />

      <button
        type="button"
        className="flex items-center gap-1.5 text-[12.5px] font-semibold border-t border-gray-100 pt-2.5 mt-auto transition-colors hover:opacity-80"
        style={{ color: t.primary }}
      >
        <IconPlus />
        Click here to view more data
      </button>
    </div>
  );
}
