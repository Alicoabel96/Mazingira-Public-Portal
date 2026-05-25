"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Sticky banner wrapper.
 *
 * - Header + nav stay fixed at top of viewport on scroll.
 * - Announcement bar slides up when scrolling down past ~80px.
 * - Announcement reappears immediately when user scrolls up.
 * - Pinned with z-index above Leaflet (which uses z up to ~1000).
 */
export default function StickyBanner({ announcement, children }) {
  const [hideAnnouncement, setHideAnnouncement] = useState(false);
  const bannerRef = useRef(null);
  const lastY = useRef(0);
  const [spacerH, setSpacerH] = useState(0);

  // Measure banner height (so spacer below matches)
  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;

    const measure = () => setSpacerH(el.offsetHeight);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [hideAnnouncement]);

  // Scroll listener
  useEffect(() => {
    const HIDE_AFTER = 80;
    const DELTA = 6;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;

      if (Math.abs(y - lastY.current) < DELTA) return;

      if (goingDown && y > HIDE_AFTER) {
        setHideAnnouncement(true);
      } else if (!goingDown) {
        setHideAnnouncement(false);
      }

      lastY.current = y <= 0 ? 0 : y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        ref={bannerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2000,  // above Leaflet (z-index up to ~1000)
          backgroundColor: "#ffffff",
          boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
        }}
      >
        {/* Announcement — slides up when hidden */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: hideAnnouncement ? 0 : 60,
            opacity: hideAnnouncement ? 0 : 1,
            transition: "max-height 300ms ease-out, opacity 300ms ease-out",
          }}
          aria-hidden={hideAnnouncement}
        >
          {announcement}
        </div>

        {/* Header + nav always visible */}
        {children}
      </div>

      {/* Spacer pushes the rest of the page down */}
      <div style={{ height: spacerH }} aria-hidden="true" />
    </>
  );
}
