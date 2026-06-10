"use client";

import Image          from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

/**
 * NavBar — main navigation.
 *
 * Normal mode  (compact=false):  grey bar with centered nav links.
 * Compact mode (compact=true):   white bar with branding left, links center,
 *                                 language switcher right.
 */
export default function NavBar({ links, compact = false }) {
  return (
    <div
      style={{
        backgroundColor: compact ? "#ffffff" : "#efefef",
        borderTop:    compact ? "none" : "1px solid #dddddd",
        borderBottom: compact ? "none" : "1px solid #dddddd",
        transition:   "background-color 250ms ease-out",
      }}
    >
      <div className="w-full px-4 md:px-8 lg:px-10 flex items-center">

        {/* ── LEFT: branding (compact only) ──────────────────────────── */}
        <div
          style={{
            overflow:   "hidden",
            maxWidth:   compact ? 260 : 0,
            opacity:    compact ? 1   : 0,
            transition: "max-width 300ms ease-out, opacity 250ms ease-out",
            flexShrink: 0,
            display:    "flex",
            alignItems: "center",
            gap:        "10px",
            marginRight: compact ? 24 : 0,
          }}
          aria-hidden={!compact}
        >
          <Image
            src="/images/coat-of-arms.png"
            alt="Tanzania Coat of Arms"
            width={36}
            height={36}
            className="object-contain shrink-0"
            style={{ height: 34, width: "auto" }}
          />
          <Image
            src="/images/emazingira-logo.svg"
            alt="eMazingira"
            width={130}
            height={28}
            style={{ height: 26, width: "auto" }}
            className="shrink-0"
          />
        </div>

        {/* ── CENTER: nav links ───────────────────────────────────────── */}
        <nav
          aria-label="Main"
          className="flex-1 flex items-center gap-5 md:gap-8 overflow-x-auto no-scrollbar"
          style={{ justifyContent: compact ? "center" : "flex-start" }}
        >
          {links.map((link) => {
            const isActive = link.active === true;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className="relative py-4 text-[14px] font-semibold whitespace-nowrap transition-colors shrink-0"
                style={{ color: isActive ? "#0b736c" : "#2f2f2f" }}
              >
                <span className="inline-flex items-center gap-1.5">
                  {link.label}
                  {link.dropdown && (
                    <svg
                      width="12" height="12" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.2"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <>
                    <span style={{
                      position: "absolute", left: 0, right: 0, top: 0,
                      height: "3px", backgroundColor: "#0b736c",
                      borderBottomLeftRadius: 2, borderBottomRightRadius: 2,
                    }} aria-hidden="true" />
                    <span style={{
                      position: "absolute", left: 0, right: 0, bottom: 0,
                      height: "3px", backgroundColor: "#0b736c",
                      borderTopLeftRadius: 2, borderTopRightRadius: 2,
                    }} aria-hidden="true" />
                  </>
                )}
              </a>
            );
          })}
        </nav>

        {/* ── RIGHT: language switcher (compact only) ─────────────────── */}
        <div
          style={{
            overflow:    "hidden",
            maxWidth:    compact ? 120 : 0,
            opacity:     compact ? 1   : 0,
            transition:  "max-width 300ms ease-out, opacity 250ms ease-out",
            flexShrink:  0,
            marginLeft:  compact ? 16 : 0,
            display:     "flex",
            alignItems:  "center",
          }}
          aria-hidden={!compact}
        >
          <LanguageSwitcher />
        </div>

      </div>
    </div>
  );
}
