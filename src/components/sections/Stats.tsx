"use client";

const stats = [
  { value: "12,000+", label: "businesses analysed" },
  { value: "3,400+", label: "sites published" },
  { value: "4.9/5", label: "user rating" },
  { value: "< 30s", label: "to generate a site" },
];

export function Stats() {
  return (
    <section className="border-y border-[--border-dim] bg-[--bg-2]/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="lp-reveal text-center"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold text-[--text]">
              {stat.value}
            </div>
            <div className="text-[12px] text-[--text-4] mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
