const stats = [
  { number: "4+", label: "Shipped Projects", sub: "From CLI tools to mobile apps, all production-ready" },
  { number: "50+", label: "REST Endpoints", sub: "Across InternBeacon's full-stack API" },
  { number: "6", label: "Microservices", sub: "BloodBridge — Docker & Kubernetes deployed" },
  { number: "3+", label: "Years Study", sub: "B.Sc. Software Engineering, ICT University" },
];

export default function Stats() {
  return (
    <section
      style={{
        background: "#EAE4D8",
        borderTop: "1px solid rgba(0,0,0,0.12)",
        borderBottom: "1px solid rgba(0,0,0,0.12)",
        padding: "64px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 48,
        }}
        className="stats-grid"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div style={{ fontFamily: "var(--font-bebas)", fontSize: 72, lineHeight: 1, color: "#1a1a1a", marginBottom: 4 }}>
              {s.number.replace("+", "")}
              {s.number.includes("+") && <span style={{ color: "#E5470B" }}>+</span>}
            </div>
            <div style={{ fontSize: 14, color: "#1a1a1a", fontWeight: 500 }}>{s.label}</div>
            <div style={{ fontSize: 12, color: "#6b6b6b", marginTop: 4, lineHeight: 1.5 }}>{s.sub}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
