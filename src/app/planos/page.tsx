import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { Stats } from "@/components/sections/Stats";

export default function PlanosPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-[#0071E3] selection:text-white">
      <Navbar />
      <section className="relative max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="lp-glow" style={{ width: 400, height: 400, background: "rgba(0,113,227,0.12)", top: 40, left: "50%", transform: "translateX(-50%)" }} />
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[13px] font-bold uppercase tracking-wider" style={{ color: "#0071E3" }}>
            Plans
          </span>
          <h1 className="mt-3 text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-tight text-[--text]">
            Pick a plan and start selling.
          </h1>
          <p className="mt-4 text-[16px] text-[--text-3] leading-relaxed">
            No card to start. No lock-in. Choose the plan that fits your business and start finding
            local clients without websites today.
          </p>
          <div className="mt-8 inline-flex items-center gap-1 p-1 rounded-full glass-btn">
            <button className="px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all text-white" style={{ background: "#0071E3" }}>
              Monthly
            </button>
            <button className="px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all inline-flex items-center gap-1.5 text-[--text-3]">
              Annual <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(26,126,58,0.14)", color: "#1A7E3A" }}>
                -35%
              </span>
            </button>
          </div>
        </div>
      </section>
      <Stats />
      <Pricing />
      <Footer />
    </div>
  );
}
