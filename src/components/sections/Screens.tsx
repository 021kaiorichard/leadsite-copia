"use client";

const screens = [
  {
    title: "Dashboard",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard" aria-hidden="true">
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    ),
    description: "Your overview. Track leads found, sites generated and how your funnel is moving, right when you log in.",
  },
  {
    title: "Leads",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search" aria-hidden="true">
        <path d="m21 21-4.34-4.34" />
        <circle cx="11" cy="11" r="8" />
      </svg>
    ),
    description: "Where it all starts. Search by Region, City and Category and see straight away who genuinely has no website.",
  },
  {
    title: "Site editor",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles" aria-hidden="true">
        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
        <path d="M20 2v4" />
        <path d="M22 4h-4" />
        <circle cx="4" cy="20" r="2" />
      </svg>
    ),
    description: "Generate and edit by chatting. Click any text or image, say what to change, and roll back in Version history.",
  },
  {
    title: "CRM",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-kanban" aria-hidden="true">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M8 7v7" />
        <path d="M12 7v4" />
        <path d="M16 7v9" />
      </svg>
    ),
    description: "Your visual funnel. Drag leads through the stages and generate a WhatsApp message and Call script for each one.",
  },
  {
    title: "Appointments",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days" aria-hidden="true">
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
        <path d="M16 18h.01" />
      </svg>
    ),
    description: "Never miss a follow-up. Every meeting booked in the CRM shows up here, organised by date.",
  },
  {
    title: "Built for local business",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    description: "Search by town and niche, real phone numbers and WhatsApp links, sites and scripts that convert.",
  },
];

export function Screens() {
  return (
    <section id="telas" className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="lp-reveal text-center max-w-2xl mx-auto" style={{ transitionDelay: "0ms" }}>
        <span className="text-[13px] font-bold uppercase tracking-wider" style={{ color: "#0071E3" }}>
          The screens
        </span>
        <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-[--text]">
          Every screen in the menu and what it does.
        </h2>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {screens.map((screen, i) => (
          <div
            key={screen.title}
            className="lp-reveal"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="h-full glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(0,113,227,0.1)" }}>
                {screen.icon}
              </div>
              <h3 className="text-[16px] font-bold text-[--text] mb-2">{screen.title}</h3>
              <p className="text-[14px] text-[--text-3] leading-relaxed">{screen.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
