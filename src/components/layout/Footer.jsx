"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Footer.
 *
 * Alignment matches the rest of the site: edge-to-edge with `px-4 md:px-8
 * lg:px-10` instead of being clamped to `max-w-7xl mx-auto` (which on wide
 * screens left the left column looking pushed inward).
 *
 * Layout:
 *   Mobile: single column, stacked.
 *   md+:    2 columns.
 *   lg+:    5 columns with the logo/description taking the same width as
 *           the link lists — no more narrow outer column.
 */
export default function Footer({ links }) {
  const [email, setEmail] = useState("");
  const [sent,  setSent]  = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: POST /api/newsletter when backend is wired up
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <footer className="bg-neutral-700 text-neutral-300">
      {/* Main body — edge-to-edge padding matches the rest of the site */}
      <div className="w-full px-4 md:px-8 lg:px-10 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">

          {/* Logo + description — flush-left, no extra inset */}
          <div className="md:col-span-2 lg:col-span-1">
            <Image
              src="/images/coat-of-arms.png"
              alt="Tanzania Coat of Arms"
              width={80}
              height={80}
              className="h-20 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
              Digital platform dedicated to transforming how young people in
              Tanzania access employment, training, and career development
              opportunities.
            </p>
          </div>

          <FooterColumn title="Explore"     items={links.explore} />
          <FooterColumn title="Modules"     items={links.modules} />
          <FooterColumn title="Quick Links" items={links.quickLinks} />

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-bold text-white mb-4">
              Get the latest information
            </h4>
            {sent ? (
              <div
                role="status"
                className="flex items-center gap-2 px-4 py-3 rounded text-sm font-medium bg-teal-700/20 text-teal-300 border border-teal-500"
              >
                ✓ You&apos;re subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-stretch max-w-sm">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="flex-1 min-w-0 px-4 py-2.5 text-sm rounded-l text-white placeholder-neutral-400 outline-none bg-neutral-600 border border-neutral-500 focus:ring-1 focus:ring-teal-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-4 py-2.5 rounded-r flex items-center justify-center bg-neutral-600 border border-neutral-500 border-l-0 hover:bg-neutral-500 transition-colors"
                >
                  <svg
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="white" strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Attribution — required by geoBoundaries CC-BY 4.0 license */}
        <p className="mt-10 text-xs text-neutral-500">
          Administrative boundaries data by{" "}
          <a
            href="https://www.geoboundaries.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-neutral-300 transition-colors"
          >
            geoBoundaries
          </a>{" "}
          (CC-BY 4.0)
        </p>
      </div>

      <div className="border-t border-neutral-600" />

      {/* Bottom bar — edge-to-edge to match top */}
      <div className="w-full px-4 md:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-neutral-400">
          <strong className="text-white">VPO</strong> © 2025, All rights reserved
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
            User Terms and Conditions
          </a>
          <span className="text-neutral-600">|</span>
          <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {items.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
