"use client";

import { useEffect, useState } from "react";

/**
 * Animated horizontal progress bar.
 *
 * @param {number}  value     Percentage 0–100.
 * @param {string}  color     Tailwind bg class (legacy path), used when
 *                            `colorHex` is not set.
 * @param {string}  colorHex  Explicit hex color — takes precedence over
 *                            `color`. Used for module-themed bars.
 * @param {string}  track     Tailwind bg class for the track.
 * @param {string}  height    Tailwind height class (default h-1.5).
 * @param {boolean} animate   Delay the animation until first render.
 */
export function ProgressBar({
  value,
  color = "bg-teal-500",
  colorHex,
  track = "bg-gray-200",
  height = "h-1.5",
  animate = true,
  ariaLabel,
}) {
  const [w, setW] = useState(animate ? 0 : value);

  useEffect(() => {
    if (!animate) { setW(value); return; }
    const id = requestAnimationFrame(() => setW(value));
    return () => cancelAnimationFrame(id);
  }, [value, animate]);

  const clamped = Math.max(0, Math.min(100, value));

  const barClasses = colorHex
    ? "h-full rounded transition-[width] duration-[1400ms] ease-out"
    : `h-full ${color} rounded transition-[width] duration-[1400ms] ease-out`;

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      aria-label={ariaLabel}
      className={`w-full ${track} ${height} rounded overflow-hidden`}
    >
      <div
        className={barClasses}
        style={{
          width: `${w}%`,
          ...(colorHex ? { backgroundColor: colorHex } : {}),
        }}
      />
    </div>
  );
}
