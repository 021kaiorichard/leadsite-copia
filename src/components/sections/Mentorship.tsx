"use client";

export function Mentorship() {
  return (
    <section id="mentoria" className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="lp-reveal" style={{ transitionDelay: "0ms" }}>
        <div className="relative rounded-3xl overflow-hidden px-6 py-12 sm:px-12 sm:py-14" style={{ background: "linear-gradient(150deg, #06251A 0%, #0A3D2A 45%, #128C4A 100%)" }}>
          <div className="lp-glow" style={{ width: 320, height: 320, background: "rgba(37,211,102,0.28)", top: -50, right: -40 }} />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.22)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown" style={{ color: "#FFD54A" }} aria-hidden="true">
                  <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
                  <path d="M5 21h14" />
                </svg>
                Elite sales team
              </span>
              <h2 className="mt-4 text-[clamp(1.7rem,4vw,2.5rem)] font-extrabold tracking-tight text-white leading-[1.1]">
                Join the mentorship and learn to sell like the best.
              </h2>
              <p className="mt-4 text-[15px] text-white/80 leading-relaxed max-w-lg">
                LeadSite delivers the leads and the sites. In the mentorship you learn the part that closes
                the sale: outreach, pricing and negotiation. A private group for people who want to make a living selling websites.
              </p>
              <ul className="mt-6 flex flex-col gap-2.5 max-w-md">
                <li className="flex items-center gap-2.5 text-[14px] text-white/90">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check shrink-0" style={{ color: "#7BE8A6" }} aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Lessons and behind-the-scenes from people who sell sites every day
                </li>
                <li className="flex items-center gap-2.5 text-[14px] text-white/90">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check shrink-0" style={{ color: "#7BE8A6" }} aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Ready-made outreach and negotiation templates
                </li>
                <li className="flex items-center gap-2.5 text-[14px] text-white/90">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check shrink-0" style={{ color: "#7BE8A6" }} aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  A community to ask questions and swap clients
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-3">
              <a
                href="https://dmlink.app/r/dzm2tpm9"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-[16px] font-bold px-8 py-4 rounded-full text-[#06251A] bg-white transition-all hover:opacity-90 shadow-xl"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle" style={{ color: "#128C4A" }} aria-hidden="true">
                  <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                </svg>
                Join the mentorship group
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <span className="text-[12px] text-white/70">WhatsApp group · Limited spots</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
