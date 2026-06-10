import { ProgressBar } from "@/components/ui/ProgressBar";
import CharcoalGrid from "./CharcoalGrid";

export default function ImpactCard({
  forestSaved,
  progressPct,
  charcoal,
  theme,
  title         = "Impact Made From Using Clean Energy",
  metric        = "km²",
  desc          = "Size of forest saved by using clean cooking energy.",
  progressLabel = "Clean energy adoption progress",
}) {
  const primary = theme?.primary || "#1a6b5a";

  return (
    <div className="border border-gray-200 rounded-[7px] p-3.5">
      <p className="text-[13px] font-bold text-gray-900 mb-1">
        {title}
      </p>
      <p className="text-xl font-extrabold m-0" style={{ color: primary }}>
        {forestSaved} {metric}
      </p>
      <p className="text-[11.5px] text-gray-500 mt-0.5 mb-2.5">
        {desc}
      </p>

      <div className="mb-3">
        <ProgressBar
          value={progressPct}
          colorHex={primary}
          track="bg-gray-200"
          height="h-[5px]"
          ariaLabel={progressLabel}
        />
      </div>

      <CharcoalGrid items={charcoal} theme={theme} />
    </div>
  );
}
