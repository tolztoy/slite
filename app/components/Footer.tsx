"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#111010", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
          © 2026 Ankiambom Richcal Chia — All rights reserved.
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "GitHub", href: "https://github.com/tolztoy" },
            { label: "LinkedIn", href: "https://linkedin.com/in/richcalchia" },
            { label: "Email", href: "mailto:richcalchia@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color .2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#E5470B")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
