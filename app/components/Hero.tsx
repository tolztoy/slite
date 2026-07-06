import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        padding: "160px 48px 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "center",
        maxWidth: 1280,
        margin: "0 auto",
      }}
      className="hero-section"
    >
      {/* Left */}
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", color: "#E5470B", textTransform: "uppercase", marginBottom: 16 }}>
          Software Engineer · Yaoundé, Cameroon
        </div>
        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(72px, 8vw, 110px)",
            lineHeight: 0.95,
            color: "#1a1a1a",
            letterSpacing: "0.01em",
            marginBottom: 24,
          }}
        >
          <span style={{ color: "#E5470B" }}>RICHCAL</span>
          <br />
          CHIA
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#6b6b6b", maxWidth: 420, marginBottom: 36 }}>
          Building full-stack web and mobile applications from database design through production deployment. Known for shipping real, working software.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a
            href="#projects"
            style={{
              background: "#E5470B",
              color: "#fff",
              borderRadius: 100,
              padding: "14px 28px",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            View Work
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://github.com/tolztoy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1.5px solid rgba(0,0,0,0.12)",
              borderRadius: 100,
              padding: "14px 28px",
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
              color: "#1a1a1a",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>

        <div className="animate-bounce-scroll" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#6b6b6b", marginTop: 48 }}>
          <div style={{ width: 40, height: 1.5, background: "#6b6b6b" }} />
          Scroll to explore
        </div>
      </div>

      {/* Right — Hero card */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          style={{
            background: "#111010",
            borderRadius: 24,
            padding: 32,
            width: "100%",
            maxWidth: 440,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 70% 30%, rgba(229,71,11,0.18) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 20, position: "relative" }}>
            Latest Project
          </div>
          <div
            style={{ fontFamily: "var(--font-bebas)", fontSize: 38, color: "#fff", lineHeight: 1.1, marginBottom: 12, position: "relative" }}
          >
            InternBeacon
            <br />
            <span style={{ color: "#E5470B" }}>Platform</span>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 28, position: "relative", lineHeight: 1.6 }}>
            Full-stack internship matching for Cameroonian students — 50+ REST endpoints, real-time chat, AI CV parsing.
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, position: "relative" }}>
            {["React 19", "Node.js", "PostgreSQL", "Socket.IO", "Supabase"].map((t) => (
              <span
                key={t}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 100,
                  padding: "5px 14px",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 500,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            padding: 120px 24px 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
