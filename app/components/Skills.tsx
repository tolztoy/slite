"use client";

import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiFlutter,
  SiWordpress,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

const skills: { Icon: IconType; name: string; color: string }[] = [
  { Icon: SiReact,      name: "React.js",    color: "#61DAFB" },
  { Icon: SiTypescript, name: "TypeScript",  color: "#3178C6" },
  { Icon: SiNodedotjs,  name: "Node.js",     color: "#339933" },
  { Icon: SiNextdotjs,  name: "Next.js",     color: "#ffffff" },
  { Icon: SiPostgresql, name: "PostgreSQL",  color: "#4169E1" },
  { Icon: SiDocker,     name: "Docker",      color: "#2496ED" },
  { Icon: SiKubernetes, name: "Kubernetes",  color: "#326CE5" },
  { Icon: SiFlutter,    name: "Flutter",     color: "#54C5F8" },
  { Icon: SiWordpress,  name: "WordPress",   color: "#21759B" },
  { Icon: SiGit,        name: "Git",         color: "#F05032" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "#111010", padding: "96px 48px" }}>
      <div
        style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}
        className="skills-inner"
      >
        {/* Left */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 30, height: 30, background: "#E5470B", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <span style={{ fontFamily: "var(--font-bebas)", fontSize: 22, letterSpacing: "0.06em", color: "#fff" }}>SKILLS</span>
            <span style={{ fontSize: 12, color: "#E5470B", fontWeight: 600, letterSpacing: "0.08em" }}>// 02</span>
          </div>
          <div style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(40px, 4vw, 58px)", color: "#fff", lineHeight: 1.05, margin: "12px 0 20px" }}>
            Tech I<br />Build With.
          </div>
          <div style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
            From frontend to infra — full coverage across the modern web and mobile stack.
          </div>
        </div>

        {/* Right */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }} className="skills-grid">
          {skills.map(({ Icon, name, color }) => (
            <div
              key={name}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "24px 16px",
                textAlign: "center",
                transition: "border-color .2s, background .2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#E5470B";
                (e.currentTarget as HTMLElement).style.background = "rgba(229,71,11,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
                <Icon size={32} color={color} />
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", fontWeight: 600, letterSpacing: "0.04em" }}>{name}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
          .skills-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
