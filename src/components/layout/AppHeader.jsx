"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnnouncementBar from "./AnnouncementBar";
import SiteHeader      from "./SiteHeader";
import NavBar          from "./NavBar";

const SCROLL_THRESHOLD = 72; // px before collapsing to compact bar
const DELTA            = 6;  // ignore micro-scrolls

/**
 * AppHeader — unified sticky header with scroll-aware collapse.
 *
 * At rest (top of page):
 *   AnnouncementBar → SiteHeader (logos + search + language) → NavBar (links)
 *
 * On scroll-down past threshold:
 *   Compact NavBar only:  [Coat of Arms + eMazingira] | [Nav links] | [Language]
 *
 * On scroll-up:
 *   Full header restored with smooth transition.
 */
export default function AppHeader({ announcement, navLinks }) {
  const [scrolled, setScrolled]   = useState(false);
  const [spacerH,  setSpacerH]    = useState(0);
  const wrapperRef = useRef(null);
  const lastY      = useRef(0);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y > SCROLL_THRESHOLD) setScrolled(true);
      else                       setScrolled(false); // only restore at the very top

      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep spacer in sync with wrapper height
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const measure = () => setSpacerH(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [scrolled]);

  return (
    <>
      <div
        ref={wrapperRef}
        style={{
          position:        "fixed",
          top:             0,
          left:            0,
          right:           0,
          zIndex:          2000,
          backgroundColor: "#ffffff",
          boxShadow:       scrolled
            ? "0 2px 12px rgba(0,0,0,0.10)"
            : "0 1px 0 rgba(0,0,0,0.06)",
        }}
      >
        {/* ── Announcement bar — slides out on scroll ─────────────────── */}
        <div
          style={{
            overflow:   "hidden",
            maxHeight:  scrolled ? 0 : 60,
            opacity:    scrolled ? 0 : 1,
            transition: "max-height 300ms ease-out, opacity 250ms ease-out",
          }}
          aria-hidden={scrolled}
        >
          <AnnouncementBar message={announcement} />
        </div>

        {/* ── Full site header (branding + search) — slides out on scroll ── */}
        <div
          style={{
            overflow:   "hidden",
            maxHeight:  scrolled ? 0 : 200,
            opacity:    scrolled ? 0 : 1,
            transition: "max-height 320ms ease-out, opacity 250ms ease-out",
          }}
          aria-hidden={scrolled}
        >
          <SiteHeader />
        </div>

        {/* ── NavBar — always visible, changes layout on scroll ─────────── */}
        <NavBar links={navLinks} compact={scrolled} />
      </div>

      {/* Spacer so page content doesn't hide behind fixed header */}
      <div style={{ height: spacerH }} aria-hidden="true" />
    </>
  );
}