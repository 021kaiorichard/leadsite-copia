"use client";

const steps = [
  {
    number: "1",
    title: "Find businesses without a website",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search" aria-hidden="true">
        <path d="m21 21-4.34-4.34" />
        <circle cx="11" cy="11" r="8" />
      </svg>
    ),
    description:
      "Open the <strong>Leads</strong> menu. In <strong>Search Leads</strong>, choose the <strong>Region</strong>, <strong>City</strong> and <strong>Category</strong> (the niche), set the quantity and click <strong>Search</strong>. LeadSite lists the businesses and flags who needs you: <em>No website</em>, <em>Site down</em>, <em>No SSL</em>, <em>No contact</em>.",
  },
  {
    number: "2",
    title: "Send the best ones to the CRM",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send" aria-hidden="true">
        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
        <path d="m21.854 2.147-10.94 10.939" />
      </svg>
    ),
    description:
      "Tick the leads worth pursuing (or use <strong>Select all</strong>) and click <strong>Send to CRM</strong>. They land in your funnel, ready to work. From the Starter plan you can also <strong>Export CSV</strong>.",
  },
  {
    number: "3",
    title: "Generate the site in one click",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles" aria-hidden="true">
        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
        <path d="M20 2v4" />
        <path d="M22 4h-4" />
        <circle cx="4" cy="20" r="2" />
      </svg>
    ),
    description:
      "On the lead's card, click <strong>Generate site</strong>. In seconds LeadSite builds a professional, responsive website with the business's colours, photos and details. Already have a saved site? The button becomes <strong>Regenerate</strong>.",
  },
  {
    number: "4",
    title: "Edit by chatting, no code",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer-click" aria-hidden="true">
        <path d="M14 4.1 12 6" />
        <path d="m5.1 8-2.9-.8" />
        <path d="m6 12-1.9 2" />
        <path d="M7.2 2.2 8 5.1" />
        <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
      </svg>
    ),
    description:
      "The site opens in the editor. <strong>Click any text to edit it</strong> or <strong>any image to swap it</strong> and describe the change in the chat. Every tweak becomes a version in <strong>Version history</strong>, and you can roll back whenever you like.",
  },
  {
    number: "5",
    title: "Publish and show the client",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link-2" aria-hidden="true">
        <path d="M9 17H7A5 5 0 0 1 7 7h2" />
        <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
        <line x1="8" x2="16" y1="12" y2="12" />
      </svg>
    ),
    description:
      "Set the site's address, click <strong>Copy URL</strong> and send the link for the client to see straight away. The public link comes with every plan, even the Free one.",
  },
  {
    number: "6",
    title: "Reach out and close in the CRM",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text" aria-hidden="true">
        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
        <path d="M7 11h10" />
        <path d="M7 15h6" />
        <path d="M7 7h8" />
      </svg>
    ),
    description:
      "Open the lead in the <strong>CRM</strong> and instantly generate a <strong>WhatsApp message</strong>, <strong>Call script</strong>, <strong>Meeting script</strong> and <strong>Handle closing objections</strong>. Book a <strong>New appointment</strong> and track everything in <strong>Appointments</strong>.",
  },
];

export function StepByStep() {
  return (
    <section id="passo-a-passo" className="relative max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="lp-glow" style={{ width: 360, height: 360, background: "rgba(0,122,255,0.12)", bottom: 0, right: -60 }} />
      <div className="lp-reveal text-center max-w-2xl mx-auto relative" style={{ transitionDelay: "0ms" }}>
        <span className="text-[13px] font-bold uppercase tracking-wider" style={{ color: "#0071E3" }}>
          Step by step
        </span>
        <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-[--text]">
          How to use LeadSite, from first search to closed deal.
        </h2>
        <p className="mt-4 text-[16px] text-[--text-3] leading-relaxed">
          Six steps, in the exact order you follow in the dashboard. Work through each one and close your first client today.
        </p>
      </div>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="lp-reveal"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="h-full glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,113,227,0.1)" }}>
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-white text-[12px] font-bold flex items-center justify-center" style={{ background: "#0071E3" }}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-[16px] font-bold text-[--text] leading-tight">{step.title}</h3>
              </div>
              <p className="text-[14px] text-[--text-3] leading-relaxed" dangerouslySetInnerHTML={{ __html: step.description }} />
            </div>
          </div>
        ))}
      </div>
      <div className="lp-reveal text-center mt-12" style={{ transitionDelay: "120ms" }}>
        <Link
          href="/sign-up"
          className="inline-flex items-center gap-2 text-[15px] font-bold px-7 py-3.5 rounded-full text-white transition-all hover:opacity-90"
          style={{ background: "#0071E3", boxShadow: "0 8px 28px rgba(0,113,227,0.3)" }}
        >
          Start for free <ArrowRight width="17" height="17" />
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
