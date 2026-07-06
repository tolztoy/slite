const GitHubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-32 md:grid-cols-2 lg:px-12 lg:pb-20 lg:pt-40">
      {/* Left */}
      <div>
        <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent">
          Software Engineer · Yaoundé, Cameroon
        </div>
        <h1 className="mb-6 font-display text-[clamp(64px,8vw,110px)] leading-[0.95] tracking-[0.01em] text-ink">
          <span className="text-accent">RICHCAL</span>
          <br />
          CHIA
        </h1>
        <p className="mb-9 max-w-[420px] text-lg leading-[1.65] text-muted">
          Building full-stack web and mobile applications from database design through production
          deployment. Known for shipping real, working software.
        </p>
        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-accent-light"
          >
            View Work
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/cv.pdf"
            download="Richcal-Chia-CV.pdf"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-black/15 px-7 py-3.5 text-[15px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download CV
          </a>
          <a
            href="https://github.com/tolztoy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-black/15 px-7 py-3.5 text-[15px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>

        <div className="animate-bounce-scroll mt-12 flex items-center gap-2.5 text-[13px] text-muted">
          <span className="h-px w-10 bg-muted" />
          Scroll to explore
        </div>
      </div>

      {/* Right — Hero card */}
      <div className="flex md:justify-end">
        <div className="relative w-full max-w-[440px] overflow-hidden rounded-3xl bg-dark p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(229,71,11,0.18)_0%,transparent_60%)]" />
          <div className="relative mb-5 text-[11px] uppercase tracking-[0.14em] text-white/40">
            Latest Project
          </div>
          <div className="relative mb-3 font-display text-[38px] leading-[1.1] text-white">
            InternBeacon
            <br />
            <span className="text-accent">Platform</span>
          </div>
          <div className="relative mb-7 text-[13px] leading-[1.6] text-white/60">
            Full-stack internship matching for Cameroonian students — 50+ REST endpoints, real-time
            chat, AI CV parsing.
          </div>
          <div className="relative flex flex-wrap gap-2">
            {["React 19", "Node.js", "PostgreSQL", "Socket.IO", "Supabase"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.08] px-3.5 py-1 text-xs font-medium text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
