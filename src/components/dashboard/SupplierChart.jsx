"use client";

import { ProgressBar } from "@/components/ui/ProgressBar";
import { IconChevronDown } from "@/components/icons/StatIcons";

/**
 * Turns a hex color into rgba with a given alpha.
 * Used to derive a 4-shade palette from the module's primary color,
 * so supplier bars stay on-brand regardless of which module is active.
 */
function withAlpha(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function SupplierChart({ category, suppliers, theme }) {
  const primary = theme?.primary || "#0b736c";
  const dark    = theme?.dark    || "#145244";

  // 4 decreasing shades derived from the module theme
  const rowColors = [dark, primary, withAlpha(primary, 0.65), withAlpha(primary, 0.4)];

  return (
    <div className="border border-gray-200 rounded-[7px] p-3.5">
      <p className="text-[12.5px] text-gray-500 mb-1">
        Supplier of Clean Energy based on
      </p>

      <button
        type="button"
        className="flex items-center gap-1.5 text-[13.5px] font-bold text-gray-900 bg-transparent border-0 border-b border-gray-200 pb-1.5 mb-3 hover:opacity-80 transition-colors"
      >
        {category}
        <IconChevronDown />
      </button>

      <ul aria-label="Supplier distribution" className="space-y-2.5">
        {suppliers.map((s, i) => (
          <li key={s.label} className="flex items-center gap-2.5">
            <div className="w-[148px] flex items-baseline gap-1.5 shrink-0">
              <span className="text-lg font-extrabold text-gray-900 leading-none">
                {s.count}
              </span>
              <span className="text-xs text-gray-500 italic">{s.label}</span>
            </div>
            <div className="flex-1">
              <ProgressBar
                value={s.pct}
                colorHex={rowColors[i] || primary}
                track="bg-gray-200"
                height="h-[5px]"
                ariaLabel={`${s.label}: ${s.pct} percent`}
              />
            </div>
            <span
              className="text-[12.5px] font-bold w-9 text-right shrink-0"
              style={{ color: primary }}
            >
              {s.pct}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
