import { IconBuilding } from "@/components/icons/StatIcons";

export default function InstituteCard({ count, percent, theme }) {
  const bg = theme?.primary || "#2a9d87";

  return (
    <div
      className="rounded-[7px] px-3.5 py-2.5 flex items-center gap-3"
      style={{ backgroundColor: bg, opacity: 0.95 }}
    >
      <div className="text-white/60 shrink-0" aria-hidden="true">
        <IconBuilding />
      </div>
      <span className="text-3xl font-extrabold text-white shrink-0">
        {count}
      </span>
      <div>
        <p className="text-[10.5px] text-white/90 uppercase tracking-wider font-bold m-0">
          Institute Using Clean Energy
        </p>
        <p className="text-[10.5px] text-white/60 mt-0.5">
          ({percent}% of all Institutes)
        </p>
      </div>
    </div>
  );
}
