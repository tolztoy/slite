"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 48px",
        background: "rgba(244,240,232,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.12)",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "#1a1a1a", fontWeight: 700, fontSize: 15, letterSpacing: "0.04em" }}>
        <div style={{ width: 36, height: 36, background: "#111010", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="18" height="18" fill="#F4F0E8" viewBox="0 0 24 24">
            <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#F4F0E8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        RC
      </Link>

      {/* Status */}
      <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "#2a8a3c", fontWeight: 500 }}>
        <span className="animate-pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#2a8a3c", display: "inline-block" }} />
        Available for work
      </div>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="hidden md:flex">
        {["Projects", "Skills", "Experience", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{ fontSize: 14, color: "#1a1a1a", textDecoration: "none", fontWeight: 500, transition: "color .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#E5470B")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1a1a1a")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="mailto:richcalchia@gmail.com"
        style={{
          background: "#E5470B",
          color: "#fff",
          borderRadius: 100,
          padding: "10px 22px",
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 8,
          transition: "background .2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#f0612c")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#E5470B")}
      >
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 7L2 7" />
        </svg>
        Hire Me
      </a>
    </nav>
  );
}
