"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary-gold font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>99.4% Verified Patient Satisfaction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Stories Of Confidence <span className="gold-gradient-text">Restored.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Read what real patients from Ahmedabad East and Gujarat say after experiencing Dr. Unnati Panchal&apos;s medical dermatology and laser treatments.
          </p>
        </div>

        {/* Featured Large Testimonial Card */}
        <div className="max-w-4xl mx-auto relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl liquid-glass-card p-8 md:p-12 border-2 border-white/60 dark:border-white/20 shadow-liquid-glass relative overflow-hidden"
            >
              <Quote className="w-16 h-16 text-primary-gold/15 absolute top-6 right-6 pointer-events-none" />

              <div className="flex items-center space-x-1 text-primary-gold mb-6">
                {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary-gold" />
                ))}
                <span className="text-xs font-bold text-foreground ml-2">5.0 / 5.0 Rating</span>
              </div>

              <p className="text-base sm:text-lg md:text-xl font-medium text-foreground leading-relaxed italic mb-8 relative z-10">
                &ldquo;{testimonialsData[currentIndex].comment}&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-border/60">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-gold to-secondary-emerald p-0.5 flex-shrink-0 shadow-md">
                    <div className="w-full h-full bg-obsidian-900 rounded-2xl flex items-center justify-center font-extrabold text-white text-sm">
                      {testimonialsData[currentIndex].avatarText}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-foreground">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Age {testimonialsData[currentIndex].age} • Treated for <strong className="text-primary-gold">{testimonialsData[currentIndex].treatmentTaken}</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary-emerald" />
                  <span className="text-xs font-bold text-secondary-emerald uppercase tracking-wider">
                    Verified Patient
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {testimonialsData[currentIndex].beforeAfterTags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-muted text-[11px] font-bold text-foreground">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3.5 rounded-full liquid-glass border border-white/50 text-foreground hover:bg-primary-gold hover:text-obsidian-900 transition-all shadow-lg hover:scale-110"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest">
              {currentIndex + 1} of {testimonialsData.length}
            </span>
            <button
              onClick={nextSlide}
              className="p-3.5 rounded-full liquid-glass border border-white/50 text-foreground hover:bg-primary-gold hover:text-obsidian-900 transition-all shadow-lg hover:scale-110"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Small Grid of remaining testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {testimonialsData.slice(0, 3).map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-6 rounded-3xl liquid-glass cursor-pointer transition-all ${
                currentIndex === idx
                  ? "border-2 border-primary-gold shadow-liquid-gold scale-[1.03]"
                  : "border border-white/40 hover:border-primary-gold/50"
              }`}
            >
              <div className="flex items-center space-x-1 text-primary-gold mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary-gold" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                &ldquo;{t.comment}&rdquo;
              </p>
              <div className="flex items-center justify-between text-xs font-bold text-foreground">
                <span>{t.name}</span>
                <span className="text-[10px] text-secondary-emerald">{t.beforeAfterTags[0]}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
