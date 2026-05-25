import StatCard        from "./StatCard";
import InstituteCard   from "./InstituteCard";
import ImpactCard      from "./ImpactCard";
import SupplierChart   from "./SupplierChart";
import { IconPeople, IconCup, IconPlus } from "@/components/icons/StatIcons";

export default function SummaryPanel({ data, theme }) {
  const t = theme || { primary: "#0b736c", dark: "#145244", soft: "#d6f5f2" };

  return (
    <div className="border-b lg:border-b-0 lg:border-r border-gray-200 p-4 lg:p-[18px] flex flex-col gap-3.5">
      {/* Header */}
      <div>
        <p
          className="text-[10.5px] font-bold uppercase tracking-wider mb-1"
          style={{ color: t.primary }}
        >
          Summary for {data.region.name} Region
        </p>
        <h2 className="text-[21px] font-extrabold text-gray-900 leading-[1.22] m-0">
          {data.module.title}
        </h2>
      </div>

      {/* Two stat cards */}
      <div className="grid grid-cols-2 gap-2">
        <StatCard
          bg={t.dark}
          label="Number of Beneficiaries"
          value={data.beneficiaries}
          icon={<IconPeople />}
        />
        <StatCard
          bg={t.primary}
          label="Estimated Usage Energy"
          value={data.energyValue}
          subtitle={data.energyUnit}
          icon={<IconCup />}
        />
      </div>

      <InstituteCard count={data.institutes} percent={data.institutePct} theme={t} />

      <ImpactCard
        forestSaved={data.forestSaved}
        progressPct={data.progressPct}
        charcoal={data.charcoal}
        theme={t}
      />

      <SupplierChart
        category={data.supplyCategory}
        suppliers={data.suppliers}
        theme={t}
      />

      {/* View more */}
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
