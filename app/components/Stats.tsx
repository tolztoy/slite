const stats = [
  { number: "4+", label: "Shipped Projects", sub: "From CLI tools to mobile apps, all production-ready" },
  { number: "50+", label: "REST Endpoints", sub: "Across InternBeacon's full-stack API" },
  { number: "6", label: "Microservices", sub: "BloodBridge — Docker & Kubernetes deployed" },
  { number: "3", label: "Platforms", sub: "Web, mobile & CLI — shipping on all three" },
];

export default function Stats() {
  return (
    <section className="border-y border-black/10 bg-cream-dark px-6 py-14 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-12">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="mb-1 font-display text-6xl leading-none text-ink md:text-7xl">
              {s.number.replace("+", "")}
              {s.number.includes("+") && <span className="text-accent">+</span>}
            </div>
            <div className="text-sm font-medium text-ink">{s.label}</div>
            <div className="mt-1 text-xs leading-normal text-muted">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
