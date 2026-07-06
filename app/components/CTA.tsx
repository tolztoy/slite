"use client";

export default function CTA() {
  return (
    <section id="contact" style={{ background: "#111010", padding: "120px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 50%, rgba(229,71,11,0.15) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
        <div style={{ fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#E5470B", fontWeight: 600, marginBottom: 20 }}>
          Let&apos;s work together
        </div>
        <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(52px, 7vw, 96px)", color: "#fff", lineHeight: 1.0, marginBottom: 24 }}>
          BUILD SOMETHING<br />
          <span style={{ color: "#E5470B" }}>GREAT</span>
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", marginBottom: 44, lineHeight: 1.65 }}>
          Open to full-time roles, contract work, and interesting collaborations. Based in Yaoundé — available remotely.
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <a
            href="mailto:richcalchia@gmail.com"
            style={{
              background: "#E5470B",
              color: "#fff",
              borderRadius: 100,
              padding: "16px 36px",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "background .2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#f0612c")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#E5470B")}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 7L2 7" />
            </svg>
            Send a Message
          </a>
          <a
            href="https://linkedin.com/in/richcalchia"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1.5px solid rgba(255,255,255,0.2)",
              borderRadius: 100,
              padding: "16px 36px",
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              color: "#fff",
              transition: "border-color .2s",
            }}
          >
            LinkedIn
          </a>
        </div>
        <a
          href="mailto:richcalchia@gmail.com"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: 22,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.05em",
            textDecoration: "none",
            marginTop: 24,
            display: "block",
            transition: "color .2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#E5470B")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)")}
        >
          richcalchia@gmail.com
        </a>
      </div>
    </section>
  );
}
