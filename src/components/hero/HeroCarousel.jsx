"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useFetch } from "@/lib/hooks/useFetch";
import { api } from "@/lib/api-client";

const INTERVAL_MS = 6000;       // time each slide is visible
const TRANSITION_MS = 900;      // slide transition duration

/**
 * Full-width hero carousel with smooth horizontal slide transition.
 *
 * All slides sit in a horizontal flex track. Changing `current` translates
 * the whole track by -100% per slide, so images glide left-to-right instead
 * of popping between frames.
 *
 * - Title / description also fade + slide up on each transition.
 * - Dark overlay on the left for text legibility.
 * - Pauses on hover / focus.
 */
export default function HeroCarousel({ initialSlides }) {
  const fetcher = useCallback(() => api.slides(), []);
  const { data } = useFetch(fetcher);
  const slides = data ?? initialSlides ?? [];

  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [paused, slides.length]);

  useEffect(() => {
    if (current >= slides.length) setCurrent(0);
  }, [slides.length, current]);

  if (slides.length === 0) {
    return <div className="w-full h-[400px] md:h-[480px] bg-gray-100" />;
  }

  return (
    <section
      className="relative w-full h-[400px] md:h-[480px] overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured content"
    >
      {/* Sliding track with all images side by side */}
      <div
        className="flex h-full"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translate3d(-${current * (100 / slides.length)}%, 0, 0)`,
          transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`,
          willChange: "transform",
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-full shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Dark overlay, left side only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,16,16,0.88) 0%, rgba(3,16,16,0.78) 20%, rgba(3,16,16,0.55) 42%, rgba(3,16,16,0.15) 60%, rgba(3,16,16,0) 72%)",
        }}
        aria-hidden="true"
      />

      {/* Text content — fades and slides in on slide change */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="w-full px-6 md:px-10 lg:px-14">
          <div
            key={current}
            className="max-w-[640px] animate-[heroFadeSlide_900ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
          >
            <p className="text-white/85 uppercase tracking-[0.14em] text-[11px] md:text-[13px] font-medium mb-4">
              {slides[current].tag}
            </p>

            <h1 className="text-white font-extrabold leading-[1.15] text-[32px] md:text-[44px] lg:text-[52px] mb-5">
              {slides[current].title}
            </h1>

            <p className="text-white/80 text-[14px] md:text-[15px] leading-[1.65] max-w-[580px]">
              {slides[current].description}
            </p>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div
        role="tablist"
        aria-label="Slides"
        className="absolute left-6 md:left-10 lg:left-14 bottom-6 flex items-center gap-2.5 z-10"
      >
        {slides.map((item, index) => {
          const active = index === current;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`rounded-full border-2 border-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                active ? "bg-white w-3.5 h-3.5" : "bg-transparent w-2.5 h-2.5 hover:bg-white/40"
              }`}
            />
          );
        })}
      </div>

      {/* Text fade-slide animation — inlined so there is no external dep */}
      <style>{`
        @keyframes heroFadeSlide {
          0%   { opacity: 0; transform: translate3d(-24px, 0, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </section>
  );
}
