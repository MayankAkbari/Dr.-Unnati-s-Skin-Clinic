"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Zap,
  Activity,
  HeartHandshake,
  Award,
  Clock,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Filter
} from "lucide-react";
import { categoriesList, treatmentsData } from "@/data/treatments";

interface TreatmentCategoryGridProps {
  onOpenBooking?: (treatmentId?: string) => void;
}

export default function TreatmentCategoryGrid({ onOpenBooking }: TreatmentCategoryGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredTreatments = activeCategory === "all"
    ? treatmentsData
    : treatmentsData.filter((t) => t.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "skin": return <Sparkles className="w-5 h-5 text-primary-gold" />;
      case "laser": return <Zap className="w-5 h-5 text-primary-gold" />;
      case "hair": return <Activity className="w-5 h-5 text-primary-gold" />;
      case "anti-aging": return <HeartHandshake className="w-5 h-5 text-primary-gold" />;
      default: return <Award className="w-5 h-5 text-primary-gold" />;
    }
  };

  return (
    <section id="treatments" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary-gold font-bold text-xs uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            <span>US-FDA Cleared Dermatological Procedures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Precision Treatments For <span className="gold-gradient-text">Skin, Hair & Lasers.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            From celebrity glow HydraFacials and permanent ice-cool Diode laser reduction to GFC hair therapy and Bio-FUE™ surgery. Pick your area of focus below.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center space-x-2 ${
                activeCategory === cat.id
                  ? "liquid-glass-btn text-obsidian-900 shadow-liquid-gold scale-105 border-white"
                  : "liquid-glass hover:border-primary-gold/50 text-foreground"
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredTreatments.map((t) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={t.id}
                className="group rounded-3xl liquid-glass-card border-2 border-white/60 dark:border-white/20 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top decorative badge */}
                {t.featured && (
                  <div className="absolute top-4 right-4 liquid-glass-pill text-primary-gold border border-primary-gold/40 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 mr-1 text-primary-gold" /> Featured
                  </div>
                )}

                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="p-3.5 rounded-2xl bg-primary-gold/15 group-hover:bg-primary-gold group-hover:text-obsidian-900 transition-all shadow-sm">
                      {getCategoryIcon(t.category)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary-emerald">
                      {t.category} Therapy
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-primary-gold transition-colors leading-snug">
                    {t.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">
                    {t.description}
                  </p>

                  <div className="mt-5 space-y-2 pt-4 border-t border-border/60">
                    {t.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-start text-xs text-foreground font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-emerald mr-2 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border/40 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-primary-gold" />
                      {t.duration}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-muted text-[11px] font-bold text-foreground">
                      {t.downtime}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => onOpenBooking && onOpenBooking(t.id)}
                      className="flex-1 py-3 rounded-xl liquid-glass-btn text-obsidian-900 font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center shadow-md group/btn"
                    >
                      <Calendar className="w-4 h-4 mr-1.5" /> Book Slot
                    </button>
                    <Link
                      href={`/treatments/${t.slug}`}
                      className="px-4.5 py-3 rounded-xl liquid-glass border border-white/40 text-foreground font-extrabold text-xs sm:text-sm hover:border-primary-gold hover:text-primary-gold transition-all flex items-center justify-center"
                    >
                      Protocol <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Directory Link */}
        <div className="mt-16 text-center">
          <Link
            href="/treatments"
            className="inline-flex items-center space-x-3 px-8 py-4.5 rounded-2xl liquid-glass dark:bg-obsidian-900/95 text-foreground font-extrabold text-sm transition-all shadow-2xl hover:scale-105 border border-primary-gold/50 backdrop-blur-2xl"
          >
            <span>Browse Full Medical Treatments Directory (15+ Procedures)</span>
            <ArrowRight className="w-4 h-4 text-primary-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
