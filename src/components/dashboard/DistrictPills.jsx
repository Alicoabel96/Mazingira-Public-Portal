"use client";

import { useRef, useEffect } from "react";

/**
 * DistrictPills — horizontally-scrollable filter strip.
 *
 * Shows "All Districts" plus each district as a pill button.
 * The active pill is always scrolled into view automatically.
 * On mobile the strip scrolls without showing a scrollbar.
 */
export default function DistrictPills({ districts, active, onChange, theme }) {
  const primary      = theme?.primary || "#145244";
  const trackRef     = useRef(null);
  const activePillRef = useRef(null);

  // Normalise legacy "All District" label from seeded data
  const normalise = (d) => (d === "All District" ? "All Districts" : d);
  const normActive = normalise(active || "All Districts");

  // Scroll the active pill into view whenever it changes
  useEffect(() => {
    activePillRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [normActive]);

  if (!districts || districts.length === 0) return null;

  return (
    <div className="flex-1 min-w-0 overflow-hidden">
      <div
        ref={trackRef}
        role="group"
        aria-label="District filter"
        className="flex gap-1.5 overflow-x-auto pb-0.5"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {districts.map((raw) => {
          const d        = normalise(raw);
          const isActive = d === normActive;

          return (
            <button
              key={d}
              ref={isActive ? activePillRef : null}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(d)}
              className={[
                "flex-none whitespace-nowrap px-2.5 py-1 text-[12px] font-semibold rounded",
                "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
                isActive
                  ? ""
                  : "bg-white text-gray-600 border border-gray-300 hover:border-gray-500 hover:text-gray-900",
              ].join(" ")}
              style={
                isActive
                  ? { backgroundColor: primary, color: "#fff", borderColor: primary }
                  : undefined
              }
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}
