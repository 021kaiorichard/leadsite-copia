"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" />
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-12">
        <div
          className="lp-glow"
          style={{
            width: 420,
            height: 420,
            background: "rgba(0,113,227,0.18)",
            top: -80,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <div className="relative text-center max-w-3xl mx-auto">
          <img
            src="/logo-mark.svg"
            alt="LeadSite"
            className="logo-img h-36 sm:h-44 w-auto mx-auto mb-6"
          />
          <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-[--text]">
            Learn to use <span className="lp-gradient-text whitespace-nowrap">LeadSite</span><br />
            and close clients in minutes
          </h1>
          <p className="mt-5 text-[clamp(1rem,2.2vw,1.25rem)] text-[--text-3] leading-relaxed max-w-2xl mx-auto">
            This guide shows you, step by step, how to use every screen: find businesses without
            a website in the <strong className="text-[--text-2]">Leads</strong> menu, generate
            and edit their site in one click, and close the deal in the <strong className="text-[--text-2]">CRM</strong>
            with a ready-made script. Start with step one.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/sign-up"
              className="group inline-flex items-center gap-2 text-[15px] font-bold px-7 py-3.5 rounded-full text-white transition-all hover:opacity-90 shadow-lg"
              style={{
                background: "#0071E3",
                boxShadow: "0 8px 28px rgba(0,113,227,0.35)",
              }}
            >
              Start for free <ArrowRight width="17" height="17" className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="#passo-a-passo"
              className="inline-flex items-center gap-2 text-[15px] font-semibold px-7 py-3.5 rounded-full glass-btn"
            >
              See the step-by-step
            </Link>
          </div>
          <p className="mt-5 text-[12px] text-[--text-4] flex items-center justify-center gap-x-4 gap-y-1 flex-wrap">
            <span className="inline-flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check" style={{ color: "#1A7E3A" }} aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Everything in one dashboard
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check" style={{ color: "#1A7E3A" }} aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Nothing to install
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check" style={{ color: "#1A7E3A" }} aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Built for local business
            </span>
          </p>
        </div>

        <div className="lp-reveal relative mt-14 max-w-4xl mx-auto" style={{ transitionDelay: "200ms" }}>
          <div className="lp-float">
            <div className="rounded-2xl overflow-hidden glass-card">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[--border-dim]">
                <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
                <div className="ml-3 flex-1 max-w-[280px] text-[11px] text-[--text-4] bg-[--bg-dark] rounded-md px-3 py-1 truncate">
                  app.useleadsite.com/pipeline
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_1fr] gap-0">
                <div className="p-4 sm:p-5 border-b sm:border-b-0 sm:border-r border-[--border-dim]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[13px] font-bold text-[--text]">Leads found</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ color: "#0071E3", background: "rgba(0,113,227,0.12)" }}>
                      +60 new
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      { name: "The Hungry Fox Café", score: "92", type: "Café · Leeds", status: "Hot", statusColor: "#1A7E3A", website: "No website", websiteColor: "#D92D20" },
                      { name: "Bella Hair Studio", score: "78", type: "Salon · Manchester", status: "Warm", statusColor: "#B26B00", website: "No website", websiteColor: "#D92D20" },
                      { name: "Smith's Auto Centre", score: "64", type: "Garage · Bradford", status: "Warm", statusColor: "#B26B00", website: null, websiteColor: null },
                      { name: "Faithful Friend Pet Shop", score: "41", type: "Pets · York", status: "Cold", statusColor: "#0071E3", website: "No website", websiteColor: "#D92D20" },
                    ].map((lead, i) => (
                      <div key={i} className="bg-[--bg-2] border border-[--border-dim] rounded-xl px-3 py-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[12px] font-semibold text-[--text] truncate">{lead.name}</span>
                          <span className="text-[11px] font-bold shrink-0" style={{ color: lead.statusColor }}>{lead.score}</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                          <span className="text-[10px] text-[--text-4]">{lead.type}</span>
                          {lead.status && (
                            <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full" style={{ color: lead.statusColor, background: `${lead.statusColor}22` }}>{lead.status}</span>
                          )}
                          {lead.website && (
                            <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full" style={{ color: lead.websiteColor, background: "#FFF5F4" }}>{lead.website}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 sm:p-5 bg-[--bg-dark]/40">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[13px] font-bold text-[--text]">Site generated</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: "#0071E3" }}>
                      ● Published
                    </span>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[--border-dim] bg-white">
                    <div className="h-20 flex flex-col items-center justify-center text-center px-3" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16213E 60%, #0F3460 100%)" }}>
                      <span className="text-[12px] font-extrabold text-white">The Hungry Fox Café</span>
                      <span className="text-[8px] text-white/70 mt-0.5">Fresh home-cooked food every day</span>
                      <span className="mt-1.5 text-[8px] font-bold text-[#16213E] bg-white rounded-full px-2.5 py-1">Order on WhatsApp</span>
                    </div>
                    <div className="p-3 grid grid-cols-3 gap-1.5">
                      <div className="h-8 rounded-md" style={{ background: "#F4C95D", opacity: 0.85 }} />
                      <div className="h-8 rounded-md" style={{ background: "#E8A87C", opacity: 0.85 }} />
                      <div className="h-8 rounded-md" style={{ background: "#C38D9E", opacity: 0.85 }} />
                    </div>
                    <div className="px-3 pb-3 flex flex-col gap-1">
                      <div className="h-1.5 rounded-full bg-[--bg-dark] w-3/4" />
                      <div className="h-1.5 rounded-full bg-[--bg-dark] w-1/2" />
                    </div>
                    <div className="mt-3 flex items-center gap-2 bg-[--bg-2] border border-[--border-dim] rounded-lg px-3 py-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#0071E3" }} />
                      <span className="text-[10px] text-[--text-3]">“make the button green” · changed in one click</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
