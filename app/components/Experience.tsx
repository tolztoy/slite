const certs = [
  "Google Project Management Professional Certificate",
  "Version Control",
  "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
  "Learning Linux for LFCA Certification (Specialization)",
];

const internBullets = [
  "Built and maintained responsive client websites using WordPress and Elementor",
  "Managed e-commerce product listings and inventory using WooCommerce",
  "Conducted UI/UX audits across multiple live client sites, fixing layout and responsiveness issues",
  "Applied on-page SEO (keyword optimization, meta tags, alt text) for a digital content client",
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
      {/* Section label */}
      <div className="mb-12 flex items-center gap-2.5">
        <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-accent">
          <svg width="16" height="16" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
          </svg>
        </span>
        <h2 className="font-display text-[22px] tracking-[0.06em]">EXPERIENCE &amp; EDUCATION</h2>
        <span className="text-xs font-semibold tracking-[0.08em] text-accent">{"// 03"}</span>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {/* Left */}
        <div>
          <h3 className="mb-7 border-b-[1.5px] border-black/10 pb-3 font-display text-[28px] text-ink">
            Work Experience
          </h3>
          <div className="border-b border-black/10 py-7">
            <div className="mb-2 flex items-start justify-between gap-4">
              <div className="text-[17px] font-bold text-ink">Software Development Intern</div>
              <div className="whitespace-nowrap text-xs font-semibold tracking-[0.05em] text-accent">
                Oct 2025 – Feb 2026
              </div>
            </div>
            <div className="mb-3 text-sm font-medium text-muted">Effulgence Tech · Yaoundé, Cameroon</div>
            <ul className="list-none">
              {internBullets.map((b) => (
                <li key={b} className="relative mb-1.5 pl-4.5 text-[13.5px] leading-[1.65] text-muted">
                  <span className="absolute left-0 text-accent">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="mb-7 mt-10 border-b-[1.5px] border-black/10 pb-3 font-display text-[28px] text-ink">
            Education
          </h3>
          <div className="py-7">
            <div className="mb-2 flex items-start justify-between gap-4">
              <div className="text-[17px] font-bold text-ink">B.Sc. Software Engineering</div>
              <div className="whitespace-nowrap text-xs font-semibold tracking-[0.05em] text-accent">
                Oct 2023 – Jul 2026
              </div>
            </div>
            <div className="text-sm font-medium text-muted">The ICT University · Yaoundé, Cameroon</div>
          </div>
        </div>

        {/* Right */}
        <div>
          <h3 className="mb-7 border-b-[1.5px] border-black/10 pb-3 font-display text-[28px] text-ink">
            Certificates
          </h3>
          {certs.map((c) => (
            <div key={c} className="flex items-center gap-3.5 border-b border-black/10 py-4">
              <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
              <div className="text-sm font-medium text-ink">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
