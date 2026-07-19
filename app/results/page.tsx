"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, CheckCircle2, Calendar, Star } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { beforeAfterCases, testimonialsData } from "@/data/testimonials";

interface ResultsPageProps {
  onOpenBooking?: () => void;
}

export default function ResultsPage({ onOpenBooking }: ResultsPageProps) {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const allTags = ["All", "Acne & Scars", "Laser Hair Reduction", "Skin Brightening", "Hair Restoration", "HydraFacial"];

  const filteredTestimonials = selectedTag === "All"
    ? testimonialsData
    : testimonialsData.filter((t) => t.beforeAfterTags.includes(selectedTag));

  return (
    <div className="pt-48 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-glass-pill text-secondary-emerald font-extrabold text-xs uppercase tracking-wider border border-secondary-emerald/30 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-secondary-emerald" />
            <span>100% Authentic Patient Archives</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Real Patients. <span className="gold-gradient-text">Verified Transformations.</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Every clinical outcome shown below represents strict adherence to Dr. Unnati Panchal&apos;s custom clinical and laser protocols in Nikol, Ahmedabad.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <BeforeAfterSlider />

        {/* Filtered Clinical Case Studies Grid */}
        <div className="mt-24 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-foreground">
              Patient Case Studies & Reviews By Concern
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Filter by procedure to review authentic clinical outcomes.
            </p>

            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4.5 py-2.5 rounded-2xl text-xs font-extrabold transition-all ${
                    selectedTag === tag
                      ? "liquid-glass-btn text-obsidian-900 shadow-liquid-gold scale-105 border-white"
                      : "liquid-glass hover:border-primary-gold/50 text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((t) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl liquid-glass-card border-2 border-white/60 dark:border-white/20 p-6 sm:p-8 flex flex-col justify-between shadow-xl hover-lift relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-primary-gold">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary-gold" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary-emerald/10 text-secondary-emerald text-[11px] font-bold">
                      Verified Outcome
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground italic leading-relaxed mb-6">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-gold to-secondary-emerald p-0.5 flex-shrink-0">
                      <div className="w-full h-full bg-obsidian-900 rounded-xl flex items-center justify-center font-bold text-white text-xs">
                        {t.avatarText}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-foreground">{t.name}</h4>
                      <p className="text-[11px] text-muted-foreground">Treated for: <strong className="text-primary-gold">{t.treatmentTaken}</strong></p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Booking Trigger */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-obsidian-900 text-white dark:bg-obsidian-900/95 border-2 border-primary-gold/50 text-center space-y-6 max-w-4xl mx-auto shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary-gold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Start Your Transformation Today</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready To See Similar Results In Your Mirror?
          </h3>
          <p className="text-xs sm:text-sm text-pearl-100 dark:text-pearl-200 max-w-xl mx-auto leading-relaxed font-normal">
            Schedule your personalized digital skin and hair checkup with Dr. Unnati Panchal in Nikol, Ahmedabad. We guarantee transparent protocols with zero upselling.
          </p>
          <div>
            <button
              onClick={onOpenBooking}
              className="px-8 py-4.5 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-sm shadow-xl hover:scale-105 transition-all inline-flex items-center"
            >
              <Calendar className="w-4 h-4 mr-2" /> Book Your Priority Checkup Now →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
