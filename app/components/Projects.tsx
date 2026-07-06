"use client";

const GitHubIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

const projects = [
  {
    num: "01",
    type: "Full-Stack Platform",
    title: "InternBeacon",
    stack: "React · Node.js · PostgreSQL · Socket.IO",
    desc: "Internship matching platform for Cameroonian university students. Final-year thesis project at ICT University, now live in production.",
    bullets: [
      "50+ REST endpoints serving students, companies & admins",
      "Explainable 5-factor matching algorithm scoring fit 0–100",
      "Real-time chat & notifications with Socket.IO",
      "AI CV parsing with multi-provider fallback (Gemini, Groq, Grok)",
    ],
    tags: ["React 19", "Express", "Supabase", "Tailwind", "Vite", "Socket.IO"],
    github: "https://github.com/tolztoy/internbeacon",
    live: "https://internbeacon.vercel.app",
    featured: true,
    bg: "#0f1a14",
    glowColor: "rgba(42,138,60,0.25)",
  },
  {
    num: "02",
    type: "Open-Source CLI Tool",
    title: "skillci",
    stack: "TypeScript · Node.js · npm",
    desc: "Security & testing CLI for AI agent skills — published to npm, addressing the 2026 supply-chain attack wave.",
    bullets: [
      "Static analysis detecting prompt injection & credential theft",
      "Runs offline with zero external dependencies",
      "GitHub Actions integration that fails CI on findings",
      "YAML scenario-testing framework for AI skills",
    ],
    tags: ["TypeScript", "Node.js", "npm", "CI/CD"],
    github: "https://github.com/tolztoy/skillci",
    live: null,
    bg: "#111010",
    glowColor: "rgba(229,71,11,0.2)",
  },
  {
    num: "03",
    type: "Microservices Architecture",
    title: "BloodBridge",
    stack: "Node.js · React · Docker · Kubernetes",
    desc: "Emergency blood donor discovery — hospitals post requests, donors matched by blood type & proximity, alerted via SMS/email.",
    bullets: [
      "6 independent microservices with JWT security & Swagger docs",
      "Docker-containerized, deployed to Kubernetes",
      "Jest & Vitest automated test suites",
    ],
    tags: ["Node.js", "React", "Docker", "Kubernetes"],
    github: "https://github.com/tolztoy/bloodbridge-soa",
    live: null,
    bg: "#150f0f",
    glowColor: "rgba(229,71,11,0.22)",
  },
  {
    num: "04",
    type: "Cross-Platform Mobile App",
    title: "Pass It",
    stack: "Flutter · Dart · Supabase",
    desc: "Exam paper sharing app with gamified points, leaderboards, and tier progression — built for low-connectivity campuses.",
    bullets: [
      "ML Kit document scanning & QR access",
      "Offline caching with in-app PDF viewing",
      "Row Level Security & PKCE auth via Supabase",
      "Signed APKs shipped via GitHub Releases",
    ],
    tags: ["Flutter", "Dart", "Supabase", "ML Kit"],
    github: "https://github.com/tolztoy/pass_it",
    live: null,
    bg: "#0d1220",
    glowColor: "rgba(80,120,255,0.18)",
  },
];

function ProjectCard({ p }: { p: (typeof projects)[0] }) {
  const openGithub = () => p.github && window.open(p.github, "_blank", "noopener,noreferrer");

  const card = (
    <div
      onClick={!p.featured ? openGithub : undefined}
      style={{
        background: p.bg,
        borderRadius: 20,
        padding: 36,
        position: "relative",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: p.featured ? "default" : "pointer",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${p.glowColor} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {p.featured ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="featured-inner">
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#E5470B", fontWeight: 600, marginBottom: 20 }}>
              // {p.num} &nbsp; {p.type}
            </div>
            <div style={{ fontFamily: "var(--font-bebas)", fontSize: 52, lineHeight: 1.1, color: "#fff", marginBottom: 8 }}>{p.title}</div>
            <div style={{ fontSize: 12, color: "#E5470B", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>{p.stack}</div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 24 }}>{p.desc}</div>
            <ul style={{ listStyle: "none", marginBottom: 0 }}>
              {p.bullets.map((b) => (
                <li key={b} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, paddingLeft: 16, position: "relative", marginBottom: 6 }}>
                  <span style={{ position: "absolute", left: 0, color: "#E5470B", fontSize: 11, top: 2 }}>→</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {p.tags.map((t) => (
                <span key={t} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100, padding: "4px 12px", fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)", textDecoration: "none" }} title="GitHub">
                  <GitHubIcon />
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)", textDecoration: "none" }} title="Live Demo">
                  <ExternalIcon />
                </a>
              )}
            </div>
            {p.live && (
              <div style={{ background: "rgba(42,138,60,0.15)", border: "1px solid rgba(42,138,60,0.25)", borderRadius: 10, padding: "14px 18px" }}>
                <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 6 }}>Live at</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>internbeacon.vercel.app</div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#E5470B", fontWeight: 600, marginBottom: 20 }}>
            // {p.num} &nbsp; {p.type}
          </div>
          <div style={{ fontFamily: "var(--font-bebas)", fontSize: 34, lineHeight: 1.1, color: "#fff", marginBottom: 8 }}>{p.title}</div>
          <div style={{ fontSize: 12, color: "#E5470B", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>{p.stack}</div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 24 }}>{p.desc}</div>
          <ul style={{ listStyle: "none", marginBottom: 28, flex: 1 }}>
            {p.bullets.map((b) => (
              <li key={b} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, paddingLeft: 16, position: "relative", marginBottom: 6 }}>
                <span style={{ position: "absolute", left: 0, color: "#E5470B", fontSize: 11, top: 2 }}>→</span>
                {b}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
              {p.tags.map((t) => (
                <span key={t} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100, padding: "4px 12px", fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)", textDecoration: "none", flexShrink: 0 }} title="GitHub">
                  <GitHubIcon />
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );

  return <div style={{ gridColumn: p.featured ? "1 / -1" : undefined }}>{card}</div>;
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "96px 48px", maxWidth: 1280, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 30, height: 30, background: "#E5470B", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" fill="#fff" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span style={{ fontFamily: "var(--font-bebas)", fontSize: 22, letterSpacing: "0.06em" }}>PROJECTS</span>
            <span style={{ fontSize: 12, color: "#E5470B", fontWeight: 600, letterSpacing: "0.08em", marginLeft: "auto" }}>// 01</span>
          </div>
          <div style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(36px, 4vw, 52px)", color: "#1a1a1a", lineHeight: 1.05 }}>
            Work That<br />Ships.
          </div>
        </div>
        <div style={{ fontSize: 15, color: "#6b6b6b", maxWidth: 320, textAlign: "right", lineHeight: 1.6 }}>
          Open-source tools, platforms, and apps — each solving a real problem, all linked to their repos.
        </div>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .featured-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
