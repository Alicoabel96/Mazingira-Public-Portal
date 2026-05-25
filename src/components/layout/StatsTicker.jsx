"use client";

import { useCallback } from "react";
import { useFetch } from "@/lib/hooks/useFetch";
import { api } from "@/lib/api-client";
import { TickerIcon } from "@/components/icons/StatIcons";

/**
 * Horizontal, infinite-scrolling stats ticker.
 *
 * Uses the `.stats-ticker-track` class defined in globals.css — plain CSS
 * keyframes, works in any Tailwind version.
 *
 * - Dark teal cards (#0B736C) per design
 * - List doubled so translateX(-50%) loops seamlessly
 * - Pauses on hover / focus (via CSS `:hover` / `:focus-within`)
 */
export default function StatsTicker({ initialStats }) {
  const fetcher = useCallback(() => api.stats(), []);
  const { data } = useFetch(fetcher);

  const stats = data ?? initialStats ?? [];
  if (stats.length === 0) return null;

  // Double the list so the marquee loops smoothly
  const doubled = [...stats, ...stats];

  return (
    <div className="w-full bg-white py-3 overflow-hidden">
      <ul
        className="stats-ticker-track flex flex-row items-center gap-4 w-max whitespace-nowrap select-none"
        aria-label="Key environmental statistics"
      >
        {doubled.map((stat, index) => (
          <li
            key={`${stat.id}-${index}`}
            aria-hidden={index >= stats.length ? true : undefined}
            className="flex min-h-20 w-80 min-w-80 max-w-80 shrink-0 items-center justify-between rounded-md bg-[#0B736C] px-4 py-4 shadow-sm"
          >
            <div className="flex items-start gap-3 pr-3 max-w-[80%] overflow-hidden">
              <span className="text-[32px] md:text-[38px] font-extrabold leading-none text-white">
                {stat.value}
              </span>
              <span className="pt-1 text-[13px] leading-snug text-white break-words line-clamp-2">
                {stat.label}
              </span>
            </div>
            <div className="h-11 w-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <TickerIcon name={stat.icon} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
