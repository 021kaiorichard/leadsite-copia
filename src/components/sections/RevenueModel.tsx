"use client";

const steps = [
  {
    number: "Step 1",
    title: "Publish instantly",
    description: "Deliver professional, responsive sites in seconds, ready to rank in search.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket" aria-hidden="true">
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
        <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
      </svg>
    ),
  },
  {
    number: "Step 2",
    title: "Charge your price",
    description: "Set your own rates, from €300 to €3,000 upfront. Your business, your profit, 100% yours.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign" aria-hidden="true">
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    number: "Step 3",
    title: "Recurring profit",
    description: "Get paid every month for maintenance and hosting. Income that stacks up with every client.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up" aria-hidden="true">
        <path d="M16 7h6v6" />
        <path d="m22 7-8.5 8.5-5-5L2 17" />
      </svg>
    ),
  },
];

export function RevenueModel() {
  return (
    <section className="relative max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="lp-glow" style={{ width: 360, height: 360, background: "rgba(0,113,227,0.1)", top: 40, left: -60 }} />
      <div className="lp-reveal text-center max-w-2xl mx-auto relative" style={{ transitionDelay: "0ms" }}>
        <span className="inline-flex items-center gap-2 text-[12px] font-semibold px-3 py-1.5 rounded-full border border-[--border] glass-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up" style={{ color: "#0071E3" }} aria-hidden="true">
            <path d="M16 7h6v6" />
            <path d="m22 7-8.5 8.5-5-5L2 17" />
          </svg>
          Revenue model
        </span>
        <h2 className="mt-4 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-[--text]">
          Turn a one-off sale into revenue every month
        </h2>
        <p className="mt-4 text-[16px] text-[--text-3] leading-relaxed">
          You're not just selling a website, you're selling peace of mind. Charge for hosting, updates and maintenance while LeadSite does the heavy lifting.
        </p>
      </div>
      <div className="relative grid md:grid-cols-3 gap-8 md:gap-4 mt-12 max-w-4xl mx-auto">
        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-[--border]" />
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="lp-reveal relative text-center flex flex-col items-center"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: "linear-gradient(135deg, #0071E3, #005EC2)", boxShadow: "0 8px 24px rgba(0,113,227,0.3)" }}>
              {step.icon}
            </div>
            <span className="mt-3 text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ color: "#0071E3", background: "rgba(0,113,227,0.1)" }}>
              {step.number}
            </span>
            <h3 className="mt-3 text-[16px] font-bold text-[--text]">{step.title}</h3>
            <p className="mt-1.5 text-[13px] text-[--text-3] leading-relaxed max-w-[260px]">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="lp-reveal text-center mt-16" style={{ transitionDelay: "0ms" }}>
        <h3 className="text-[clamp(1.4rem,3vw,2rem)] font-extrabold tracking-tight text-[--text]">
          How much you could earn
        </h3>
        <p className="mt-2 text-[14px] text-[--text-4]">Adjust the sliders and see your personalised revenue projection.</p>
      </div>
      <div className="lp-reveal mt-8 max-w-4xl mx-auto" style={{ transitionDelay: "80ms" }}>
        <div className="glass-card rounded-3xl p-6 sm:p-8">
          <div className="grid sm:grid-cols-3 gap-7">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[--text-4]">Sites sold / month</div>
              <div className="text-[clamp(1.4rem,2.6vw,1.9rem)] font-extrabold text-[--brand-2] mt-1 leading-none">
                <span>3</span>
              </div>
              <div className="relative h-5 flex items-center mt-3">
                <div className="absolute inset-x-0 h-1.5 rounded-full bg-[--bg-3]" />
                <div className="absolute left-0 h-1.5 rounded-full bg-[--brand]" style={{ width: "14.285714285714285%" }} />
                <div className="absolute w-4 h-4 rounded-full bg-[--brand] border-2 border-white shadow-md -translate-x-1/2 pointer-events-none" style={{ left: "14.285714285714285%" }} />
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  className="absolute inset-x-0 w-full opacity-0 h-5 cursor-pointer"
                  defaultValue="3"
                />
              </div>
              <div className="flex justify-between text-[11px] text-[--text-4] mt-1">
                <span>1</span>
                <span>15</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[--text-4]">Upfront price</div>
              <div className="text-[clamp(1.4rem,2.6vw,1.9rem)] font-extrabold text-[--brand-2] mt-1 leading-none">
                <span>€800</span>
              </div>
              <div className="relative h-5 flex items-center mt-3">
                <div className="absolute inset-x-0 h-1.5 rounded-full bg-[--bg-3]" />
                <div className="absolute left-0 h-1.5 rounded-full bg-[--brand]" style={{ width: "18.51851851851852%" }} />
                <div className="absolute w-4 h-4 rounded-full bg-[--brand] border-2 border-white shadow-md -translate-x-1/2 pointer-events-none" style={{ left: "18.51851851851852%" }} />
                <input
                  type="range"
                  min="300"
                  max="3000"
                  step="50"
                  className="absolute inset-x-0 w-full opacity-0 h-5 cursor-pointer"
                  defaultValue="800"
                />
              </div>
              <div className="flex justify-between text-[11px] text-[--text-4] mt-1">
                <span>€300</span>
                <span>€3,000</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[--text-4]">Monthly maintenance</div>
              <div className="text-[clamp(1.4rem,2.6vw,1.9rem)] font-extrabold text-[--brand-2] mt-1 leading-none">
                <span>€120</span>
              </div>
              <div className="relative h-5 flex items-center mt-3">
                <div className="absolute inset-x-0 h-1.5 rounded-full bg-[--bg-3]" />
                <div className="absolute left-0 h-1.5 rounded-full bg-[--brand]" style={{ width: "28%" }} />
                <div className="absolute w-4 h-4 rounded-full bg-[--brand] border-2 border-white shadow-md -translate-x-1/2 pointer-events-none" style={{ left: "28%" }} />
                <input
                  type="range"
                  min="50"
                  max="300"
                  step="10"
                  className="absolute inset-x-0 w-full opacity-0 h-5 cursor-pointer"
                  defaultValue="120"
                />
              </div>
              <div className="flex justify-between text-[11px] text-[--text-4] mt-1">
                <span>€50</span>
                <span>€300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
