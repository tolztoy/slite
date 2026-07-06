"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = ["Projects", "Skills", "Experience", "About", "Contact"];

const MailIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-cream/90 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[15px] font-bold tracking-wider text-ink no-underline"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-dark">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4F0E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </span>
          RC
        </Link>

        {/* Status */}
        <div className="hidden items-center gap-2 text-[13px] font-medium text-avail sm:flex">
          <span className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-avail" />
          Available for work
        </div>

        {/* Links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:richcalchia@gmail.com"
          className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light md:flex"
        >
          <MailIcon />
          Hire Me
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
        >
          {open ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-black/10 px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="border-b border-black/5 py-3.5 text-[15px] font-medium text-ink transition-colors hover:text-accent"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:richcalchia@gmail.com"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-[15px] font-semibold text-white"
          >
            <MailIcon />
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
