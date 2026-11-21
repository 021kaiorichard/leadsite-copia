"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { StepByStep } from "@/components/sections/StepByStep";
import { Screens } from "@/components/sections/Screens";
import { Mentorship } from "@/components/sections/Mentorship";
import { RevenueModel } from "@/components/sections/RevenueModel";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".lp-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-[#0071E3] selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <StepByStep />
      <Screens />
      <Mentorship />
      <RevenueModel />
      <Pricing />
      <Footer />
    </div>
  );
}
