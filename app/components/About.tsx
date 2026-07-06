"use client";

export default function About() {
  const info = [
    { label: "Location", value: "Yaoundé, Cameroon", link: null },
    { label: "Status", value: "Available Now", link: null, green: true },
    { label: "Email", value: "richcalchia@gmail.com", link: "mailto:richcalchia@gmail.com" },
    { label: "Phone", value: "+237 672 772 213", link: "tel:+237672772213" },
    { label: "GitHub", value: "github.com/tolztoy", link: "https://github.com/tolztoy", full: true },
  ];

  return (
    <section
      id="about"
      style={{ background: "#EAE4D8", borderTop: "1px solid rgba(0,0,0,0.12)", padding: "96px 48px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-inner">
        {/* Left */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 30, height: 30, background: "#E5470B", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </div>
            <span style={{ fontFamily: "var(--font-bebas)", fontSize: 22, letterSpacing: "0.06em" }}>ABOUT</span>
            <span style={{ fontSize: 12, color: "#E5470B", fontWeight: 600, letterSpacing: "0.08em" }}>// 04</span>
          </div>
          <h2
            style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(44px, 5vw, 68px)", color: "#1a1a1a", lineHeight: 1.0, margin: "12px 0 24px" }}
          >
            Hi, I&apos;m{" "}
            <em style={{ color: "#E5470B", fontStyle: "italic", fontFamily: "var(--font-playfair)" }}>Richcal.</em>
          </h2>
          <p style={{ fontSize: 16, color: "#6b6b6b", lineHeight: 1.75, marginBottom: 24 }}>
            I&apos;m a Software Engineer based in Yaoundé, Cameroon, building full-stack web and mobile applications from database design through production deployment. Skilled in React, Next.js, Node.js, and PostgreSQL, with working knowledge of Flutter, Docker, and WordPress.
          </p>
          <p style={{ fontSize: 16, color: "#6b6b6b", lineHeight: 1.75, marginBottom: 36 }}>
            I&apos;m known for shipping real, working software — not tutorials or clones. Whether it&apos;s a microservices platform, a mobile app, or a security CLI, I build things that solve actual problems.
          </p>
          <div style={{ display: "flex", gap: 14 }}>
            <a href="https://github.com/tolztoy" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#1a1a1a", textDecoration: "none" }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/richcalchia" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#1a1a1a", textDecoration: "none" }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right — Info grid */}
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, borderRadius: 20, overflow: "hidden", border: "1px solid rgba(0,0,0,0.12)" }}>
            {info.map((item) => (
              <div
                key={item.label}
                style={{ background: "#F4F0E8", padding: "28px 24px", gridColumn: (item as { full?: boolean }).full ? "1 / -1" : undefined }}
              >
                <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: 8 }}>{item.label}</div>
                {item.link ? (
                  <a href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ fontSize: 15, fontWeight: 700, color: "#E5470B", textDecoration: "none" }}>
                    {item.value}
                  </a>
                ) : (
                  <div style={{ fontSize: 15, fontWeight: 700, color: (item as { green?: boolean }).green ? "#2a8a3c" : "#1a1a1a" }}>{item.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
