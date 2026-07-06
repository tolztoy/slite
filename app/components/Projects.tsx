import Image from "next/image";

const GitHubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

type Project = {
  num: string;
  type: string;
  title: string;
  stack: string;
  desc: string;
  bullets: string[];
  tags: string[];
  github: string;
  live: string | null;
  image?: { src: string; alt: string };
  featured?: boolean;
  bg: string;
  glow: string;
};

const projects: Project[] = [
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
    image: {
      src: "/projects/internbeacon.png",
      alt: "InternBeacon landing page — internship platform for Cameroon",
    },
    featured: true,
    bg: "bg-[#0f1a14]",
    glow: "bg-[radial-gradient(circle,rgba(42,138,60,0.25)_0%,transparent_70%)]",
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
    bg: "bg-dark",
    glow: "bg-[radial-gradient(circle,rgba(229,71,11,0.2)_0%,transparent_70%)]",
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
    bg: "bg-[#150f0f]",
    glow: "bg-[radial-gradient(circle,rgba(229,71,11,0.22)_0%,transparent_70%)]",
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
    bg: "bg-[#0d1220]",
    glow: "bg-[radial-gradient(circle,rgba(80,120,255,0.18)_0%,transparent_70%)]",
  },
];

const CardLabel = ({ p }: { p: Project }) => (
  <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
    {"// "}{p.num} &nbsp; {p.type}
  </div>
);

const Bullets = ({ p, className = "" }: { p: Project; className?: string }) => (
  <ul className={`list-none ${className}`}>
    {p.bullets.map((b) => (
      <li key={b} className="relative mb-1.5 pl-4 text-[13px] leading-[1.6] text-white/60">
        <span className="absolute left-0 top-0.5 text-[11px] text-accent">→</span>
        {b}
      </li>
    ))}
  </ul>
);

const Tags = ({ p }: { p: Project }) => (
  <div className="flex flex-wrap gap-2">
    {p.tags.map((t) => (
      <span
        key={t}
        className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-[11px] font-medium text-white/60"
      >
        {t}
      </span>
    ))}
  </div>
);

function FeaturedCard({ p }: { p: Project }) {
  return (
    <div className={`relative col-span-full overflow-hidden rounded-[20px] p-7 md:p-9 ${p.bg}`}>
      <div className={`pointer-events-none absolute -right-10 -top-10 h-[200px] w-[200px] rounded-full ${p.glow}`} />
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <CardLabel p={p} />
          <h3 className="mb-2 font-display text-[44px] leading-[1.1] text-white md:text-[52px]">{p.title}</h3>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.06em] text-accent">{p.stack}</div>
          <p className="mb-6 text-sm leading-[1.7] text-white/70">{p.desc}</p>
          <Bullets p={p} className="mb-6" />
          <div className="flex items-center gap-2.5">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition-colors hover:border-accent hover:text-white"
              title="GitHub"
              aria-label={`${p.title} on GitHub`}
            >
              <GitHubIcon />
            </a>
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition-colors hover:border-accent hover:text-white"
                title="Live Demo"
                aria-label={`${p.title} live demo`}
              >
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {p.image && p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="group block">
              <Image
                src={p.image.src}
                alt={p.image.alt}
                width={1440}
                height={900}
                className="w-full rounded-xl border border-white/10 transition-transform duration-300 group-hover:scale-[1.015]"
              />
            </a>
          )}
          <Tags p={p} />
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[10px] border border-avail/25 bg-avail/15 px-4.5 py-3.5 transition-colors hover:border-avail/50"
            >
              <div className="mb-1.5 text-[11px] uppercase tracking-[0.1em] text-white/40">Live at</div>
              <div className="text-sm font-semibold text-white/90">internbeacon.vercel.app</div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <a
      href={p.github}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex h-full flex-col overflow-hidden rounded-[20px] p-7 no-underline transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:p-9 ${p.bg}`}
    >
      <div className={`pointer-events-none absolute -right-10 -top-10 h-[200px] w-[200px] rounded-full ${p.glow}`} />
      <CardLabel p={p} />
      <h3 className="mb-2 font-display text-[34px] leading-[1.1] text-white">{p.title}</h3>
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.06em] text-accent">{p.stack}</div>
      <p className="mb-6 text-sm leading-[1.7] text-white/70">{p.desc}</p>
      <Bullets p={p} className="mb-7 flex-1" />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Tags p={p} />
        <span className="flex shrink-0 items-center gap-2 text-[13px] font-medium text-white/60 transition-colors group-hover:text-white">
          <GitHubIcon />
          View on GitHub →
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
      {/* Header */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-accent">
              <svg width="16" height="16" fill="#fff" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </span>
            <span className="font-display text-[22px] tracking-[0.06em]">PROJECTS</span>
            <span className="text-xs font-semibold tracking-[0.08em] text-accent">{"// 01"}</span>
          </div>
          <h2 className="font-display text-[clamp(36px,4vw,52px)] leading-[1.05] text-ink">
            Work That
            <br />
            Ships.
          </h2>
        </div>
        <p className="max-w-[320px] text-[15px] leading-[1.6] text-muted md:text-right">
          Open-source tools, platforms, and apps — each solving a real problem, all linked to their
          repos.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) =>
          p.featured ? <FeaturedCard key={p.title} p={p} /> : <ProjectCard key={p.title} p={p} />
        )}
      </div>
    </section>
  );
}
