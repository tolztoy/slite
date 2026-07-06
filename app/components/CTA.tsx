export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-dark px-6 py-24 text-center lg:px-12 lg:py-30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(229,71,11,0.15)_0%,transparent_65%)]" />
      <div className="relative mx-auto max-w-[700px]">
        <div className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
          Let&apos;s work together
        </div>
        <h2 className="mb-6 font-display text-[clamp(52px,7vw,96px)] leading-none text-white">
          BUILD SOMETHING
          <br />
          <span className="text-accent">GREAT</span>
        </h2>
        <p className="mb-11 text-base leading-[1.65] text-white/60">
          Open to full-time roles, contract work, and interesting collaborations. Based in Yaoundé —
          available remotely.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:richcalchia@gmail.com"
            className="flex items-center gap-2 rounded-full bg-accent px-9 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-light"
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
            className="rounded-full border-[1.5px] border-white/20 px-9 py-4 text-base font-medium text-white transition-colors hover:border-accent"
          >
            LinkedIn
          </a>
        </div>
        <a
          href="mailto:richcalchia@gmail.com"
          className="mt-6 block font-display text-[22px] tracking-[0.05em] text-white/30 transition-colors hover:text-accent"
        >
          richcalchia@gmail.com
        </a>
      </div>
    </section>
  );
}
