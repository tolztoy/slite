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
    <section id="skills" className="bg-dark px-6 py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
        {/* Left */}
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-accent">
              <svg width="16" height="16" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </span>
            <span className="font-display text-[22px] tracking-[0.06em] text-white">SKILLS</span>
            <span className="text-xs font-semibold tracking-[0.08em] text-accent">{"// 02"}</span>
          </div>
          <h2 className="mb-5 mt-3 font-display text-[clamp(40px,4vw,58px)] leading-[1.05] text-white">
            Tech I
            <br />
            Build With.
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/60">
            From frontend to infra — full coverage across the modern web and mobile stack.
          </p>
        </div>

        {/* Right */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-5">
          {skills.map(({ Icon, name, color }) => (
            <div
              key={name}
              className="rounded-2xl border border-white/[0.08] bg-white/5 px-4 py-6 text-center transition-colors hover:border-accent hover:bg-accent/[0.08]"
            >
              <div className="mb-3 flex justify-center">
                <Icon size={32} color={color} />
              </div>
              <div className="text-xs font-semibold tracking-wide text-white/70">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
