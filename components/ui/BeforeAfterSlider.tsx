"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeftRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { beforeAfterCases } from "@/data/testimonials";

export default function BeforeAfterSlider() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const activeCase = beforeAfterCases[activeCaseIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section className="py-20 bg-muted/30 dark:bg-obsidian-900/40 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-secondary-emerald/10 text-secondary-emerald font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Clinical Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Real Patients. <span className="gold-gradient-text">Profound Outcomes.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Slide across our clinical before-and-after comparison cards. Every result shown represents strict adherence to Dr. Unnati Panchal&apos;s custom clinical skin and laser protocols in Ahmedabad.
          </p>
        </div>

        {/* Case Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {beforeAfterCases.map((c, index) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCaseIndex(index);
                setSliderPos(50);
              }}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all ${
                activeCaseIndex === index
                  ? "liquid-glass-btn text-obsidian-900 shadow-liquid-gold scale-105 border-white"
                  : "liquid-glass hover:border-primary-gold/50 text-foreground"
              }`}
            >
              {c.tag}: {c.title.split("&")[0]}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card & Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Slider Box (Cols 1-7) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative h-[440px] sm:h-[500px] w-full rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl border-2 border-white/60 dark:border-white/20 group bg-obsidian-900 shadow-liquid-glass-dark"
            >
              {/* After Layer (Background Full Width) */}
              <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-secondary-emerald/30 via-obsidian-800 to-obsidian-900 text-white">
                <div className="flex justify-end">
                  <span className="px-3.5 py-1.5 rounded-full liquid-glass-pill bg-secondary-emerald text-white font-extrabold text-xs shadow-lg uppercase tracking-wider flex items-center border border-white/30">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    {activeCase.afterImageLabel}
                  </span>
                </div>
                <div className="liquid-glass dark:bg-obsidian-900/80 backdrop-blur-2xl p-5 rounded-2xl border border-secondary-emerald/40 max-w-sm ml-auto shadow-2xl">
                  <div className="text-xs text-secondary-emerald font-extrabold uppercase tracking-wider">
                    Post-Treatment Status
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    {activeCase.description}
                  </div>
                </div>
              </div>

              {/* Before Layer (Clipped to Slider Position) */}
              <div
                className="absolute inset-0 h-full flex flex-col justify-between p-6 bg-gradient-to-br from-obsidian-700 via-obsidian-800 to-obsidian-900 text-white overflow-hidden border-r-2 border-primary-gold"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="flex justify-start w-screen">
                  <span className="px-3.5 py-1.5 rounded-full liquid-glass-pill bg-destructive/80 text-white font-extrabold text-xs shadow-lg uppercase tracking-wider border border-white/30">
                    {activeCase.beforeImageLabel}
                  </span>
                </div>
                <div className="liquid-glass dark:bg-obsidian-900/80 backdrop-blur-2xl p-5 rounded-2xl border border-destructive/40 max-w-sm w-80 shadow-2xl">
                  <div className="text-xs text-destructive font-extrabold uppercase tracking-wider">
                    Initial Consultation State
                  </div>
                  <div className="text-sm font-bold text-pearl-200 mt-1">
                    Condition: {activeCase.title}
                  </div>
                </div>
              </div>

              {/* Center Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-primary-gold shadow-[0_0_20px_rgba(212,175,55,0.9)] pointer-events-none flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary-gold text-obsidian-900 flex items-center justify-center shadow-2xl border-2 border-white group-hover:scale-110 transition-transform -translate-x-1/2">
                  <ArrowLeftRight className="w-5 h-5 font-black" />
                </div>
              </div>

              {/* Drag instruction overlay */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px] text-pearl-300 pointer-events-none uppercase tracking-widest font-semibold border border-white/10">
                ← Drag to Compare →
              </div>
            </div>
          </div>

          {/* Case Details Box (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 md:p-8 rounded-3xl liquid-glass-card border-2 border-white/60 dark:border-white/20 space-y-5 relative overflow-hidden">
              <div className="inline-flex items-center space-x-2 text-xs font-extrabold text-primary-gold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-primary-gold" />
                <span>Case Analysis Profile</span>
              </div>

              <h3 className="text-2xl font-black text-foreground leading-tight">
                {activeCase.title}
              </h3>

              <div className="p-4 rounded-2xl liquid-glass dark:bg-obsidian-800 text-xs font-extrabold text-foreground flex items-center justify-between border border-white/30 shadow-sm">
                <span>Patient Profile:</span>
                <span className="text-secondary-emerald">{activeCase.patientInfo}</span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {activeCase.description} Every step was planned using digital skin analysis, ensuring zero downtime and structural collagen regeneration.
              </p>

              <div className="pt-2 border-t border-border/60 space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                  Clinical Protocol Highlights:
                </h4>
                <ul className="space-y-2 text-xs text-muted-foreground font-medium">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-emerald mr-2 flex-shrink-0 mt-0.5" />
                    <span>Customized numbing & comfort monitoring throughout</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-emerald mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sterile medical-grade actives & US-FDA laser calibration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-emerald mr-2 flex-shrink-0 mt-0.5" />
                    <span>Post-procedure healing barrier mask & home care kit</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href="#booking"
                  className="w-full py-4 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-sm flex items-center justify-center hover:scale-[1.02] transition-all shadow-xl"
                >
                  Schedule Your Consultation For Similar Results →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
