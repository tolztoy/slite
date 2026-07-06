const links = [
  { label: "GitHub", href: "https://github.com/tolztoy" },
  { label: "LinkedIn", href: "https://linkedin.com/in/richcalchia" },
  { label: "Email", href: "mailto:richcalchia@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-dark px-6 py-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <div className="text-[13px] text-white/40">
          © 2026 Ankiambom Richcal Chia — All rights reserved.
        </div>
        <div className="flex gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-[13px] text-white/50 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
