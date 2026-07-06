const certs = [
  "Google Project Management Professional Certificate",
  "Version Control",
  "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
  "Learning Linux for LFCA Certification (Specialization)",
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "96px 48px", maxWidth: 1280, margin: "0 auto" }}>
      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 48 }}>
        <div style={{ width: 30, height: 30, background: "#E5470B", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="16" height="16" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
          </svg>
        </div>
        <span style={{ fontFamily: "var(--font-bebas)", fontSize: 22, letterSpacing: "0.06em" }}>EXPERIENCE & EDUCATION</span>
        <span style={{ fontSize: 12, color: "#E5470B", fontWeight: 600, letterSpacing: "0.08em" }}>// 03</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }} className="exp-grid">
        {/* Left */}
        <div>
          <div style={{ fontFamily: "var(--font-bebas)", fontSize: 28, color: "#1a1a1a", marginBottom: 28, paddingBottom: 12, borderBottom: "1.5px solid rgba(0,0,0,0.12)" }}>
            Work Experience
          </div>
          <div style={{ padding: "28px 0", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#1a1a1a" }}>Software Development Intern</div>
              <div style={{ fontSize: 12, color: "#E5470B", fontWeight: 600, letterSpacing: "0.05em", whiteSpace: "nowrap" }}>Oct 2025 – Feb 2026</div>
            </div>
            <div style={{ fontSize: 14, color: "#6b6b6b", fontWeight: 500, marginBottom: 12 }}>Effulgence Tech · Yaoundé, Cameroon</div>
            <ul style={{ listStyle: "none" }}>
              {[
                "Built and maintained responsive client websites using WordPress and Elementor",
                "Managed e-commerce product listings and inventory using WooCommerce",
                "Conducted UI/UX audits across multiple live client sites, fixing layout and responsiveness issues",
                "Applied on-page SEO (keyword optimization, meta tags, alt text) for a digital content client",
              ].map((b) => (
                <li key={b} style={{ fontSize: 13.5, color: "#6b6b6b", lineHeight: 1.65, paddingLeft: 18, position: "relative", marginBottom: 6 }}>
                  <span style={{ position: "absolute", left: 0, color: "#E5470B" }}>•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ fontFamily: "var(--font-bebas)", fontSize: 28, color: "#1a1a1a", marginBottom: 28, paddingBottom: 12, borderBottom: "1.5px solid rgba(0,0,0,0.12)", marginTop: 40 }}>
            Education
          </div>
          <div style={{ padding: "28px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#1a1a1a" }}>B.Sc. Software Engineering</div>
              <div style={{ fontSize: 12, color: "#E5470B", fontWeight: 600, letterSpacing: "0.05em", whiteSpace: "nowrap" }}>Oct 2023 – Jul 2026</div>
            </div>
            <div style={{ fontSize: 14, color: "#6b6b6b", fontWeight: 500 }}>The ICT University · Yaoundé, Cameroon</div>
          </div>
        </div>

        {/* Right */}
        <div>
          <div style={{ fontFamily: "var(--font-bebas)", fontSize: 28, color: "#1a1a1a", marginBottom: 28, paddingBottom: 12, borderBottom: "1.5px solid rgba(0,0,0,0.12)" }}>
            Certificates
          </div>
          {certs.map((c) => (
            <div key={c} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 0", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E5470B", flexShrink: 0 }} />
              <div style={{ fontSize: 14, color: "#1a1a1a", fontWeight: 500 }}>{c}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
