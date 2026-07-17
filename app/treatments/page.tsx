"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
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

interface TreatmentsPageProps {
  onOpenBooking?: (treatmentId?: string) => void;
}

export default function TreatmentsPage({ onOpenBooking }: TreatmentsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTreatments = treatmentsData.filter((t) => {
    const matchesCategory = activeCategory === "all" || t.category === activeCategory;
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.suitableFor.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-glass-pill text-primary-gold font-extrabold text-xs uppercase tracking-wider border border-primary-gold/30 shadow-sm">
            <Filter className="w-3.5 h-3.5 text-primary-gold" />
            <span>Complete Clinical Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Clinical & Laser <span className="gold-gradient-text">Procedures Directory.</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Every procedure at Dr. Unnati&apos;s Skin Clinic in Nikol, Ahmedabad is performed using US-FDA cleared clinical lasers and medical-grade active formulations under strict specialist guidance.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-lg mx-auto relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by concern e.g., 'Acne Scars', 'HydraFacial', 'Melasma', 'Hair Fall'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl liquid-glass border-2 border-white/40 focus:border-primary-gold text-sm text-foreground focus:outline-none shadow-xl backdrop-blur-2xl"
            />
          </div>
        </div>

        {/* AEO & GEO Direct Answer Procedure Summary Box */}
        <aside className="mb-14 p-6 sm:p-8 rounded-3xl bg-obsidian-900 border-2 border-primary-gold/40 shadow-2xl text-white max-w-5xl mx-auto" role="region" aria-label="AI Search Summary for Treatments">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="px-3 py-1 rounded-full bg-primary-gold/15 text-primary-gold font-extrabold text-[11px] uppercase tracking-wider border border-primary-gold/30">
                AEO Direct Clinical Answer
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-white">
                What clinical procedures are available at Dr. Unnati&apos;s Skin Clinic in Nikol, Ahmedabad?
              </h2>
              <p className="text-xs sm:text-sm text-pearl-100 dark:text-pearl-200 leading-relaxed font-normal">
                Dr. Unnati&apos;s Skin Clinic provides 8+ primary evidence-based procedures: <strong className="text-primary-gold">US-FDA Diode Laser Hair Reduction</strong> (triple-wavelength cooling for Indian skin), <strong className="text-primary-gold">Clinical HydraFacial® Deep Cleansing</strong>, <strong className="text-primary-gold">MNRF Acne Scar & Open Pore Revision</strong>, <strong className="text-primary-gold">Q-Switched Laser Toning & Carbon Peel</strong>, <strong className="text-primary-gold">Bio-FUE™ / GFC Hair Regrowth</strong>, and custom anti-aging liquid facelifts. All treatments include initial 3D digital dermoscopy and are prescribed by Cosmetologist & Aesthetic Medicine Expert Dr. Unnati Panchal.
              </p>
            </div>
            <div className="flex-shrink-0 bg-obsidian-800 p-4 rounded-2xl border border-white/10 text-center space-y-1">
              <span className="block text-[11px] uppercase tracking-wider text-primary-gold font-bold">Clinical Safety</span>
              <span className="block text-white font-extrabold text-sm">100% US-FDA Cleared</span>
              <span className="block text-[11px] text-muted-foreground">Autoclave Sterility</span>
            </div>
          </div>
        </aside>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all ${
                activeCategory === cat.id
                  ? "liquid-glass-btn text-obsidian-900 shadow-liquid-gold scale-105 border-white"
                  : "liquid-glass hover:border-primary-gold/50 text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        {filteredTreatments.length === 0 ? (
          <div className="text-center py-20 bg-muted/30 rounded-3xl border border-border max-w-lg mx-auto space-y-4">
            <div className="text-4xl">🔍</div>
            <h3 className="font-bold text-lg text-foreground">No Treatments Match &ldquo;{searchQuery}&rdquo;</h3>
            <p className="text-xs text-muted-foreground">
              Try searching for general skin terms or contact our care desk for a tailored recommendation.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="px-5 py-2 rounded-xl bg-primary-gold text-obsidian-900 font-bold text-xs"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((t) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="group rounded-3xl liquid-glass-card border-2 border-white/60 dark:border-white/20 p-6 sm:p-8 flex flex-col justify-between hover-lift relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="p-2.5 rounded-xl bg-primary/10">
                        {getCategoryIcon(t.category)}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary-emerald">
                        {t.category}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-primary-gold px-2.5 py-1 rounded-lg bg-primary/10">
                      {t.duration}
                    </span>
                  </div>

                  <Link href={`/treatments/${t.slug}`}>
                    <h3 className="text-xl font-extrabold text-foreground group-hover:text-primary-gold transition-colors leading-snug">
                      {t.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">
                    {t.description}
                  </p>

                  <div className="mt-4 space-y-1.5 pt-4 border-t border-border/50">
                    <div className="text-[11px] font-bold uppercase text-muted-foreground tracking-wider mb-1">
                      Ideal For / Recommended For:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {t.suitableFor.map((item, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-muted text-foreground text-[11px] font-semibold">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenBooking && onOpenBooking(t.id)}
                    className="flex-1 py-3 rounded-xl liquid-glass-btn text-obsidian-900 font-extrabold text-xs transition-all flex items-center justify-center shadow-md"
                  >
                    <Calendar className="w-3.5 h-3.5 mr-1.5" /> Book Consultation
                  </button>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="px-4.5 py-3 rounded-xl liquid-glass border border-white/40 text-foreground font-extrabold text-xs hover:border-primary-gold hover:text-primary-gold transition-all flex items-center justify-center"
                  >
                    Protocol Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom Consultation Assistance Box */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-obsidian-900 text-white dark:bg-obsidian-900/95 border-2 border-primary-gold/50 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-2xl font-black text-white">Unsure Which Procedure Fits Your Goal?</h3>
            <p className="text-xs sm:text-sm text-pearl-100 dark:text-pearl-200 leading-relaxed font-normal">
              Let Dr. Unnati perform a 3D digital dermoscopy on your skin. We will tailor a custom, cost-transparent regimen with zero pressure.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            className="px-8 py-4.5 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-sm shadow-xl hover:scale-105 transition-all flex-shrink-0"
          >
            Schedule Free Digital Skin Assessment →
          </button>
        </div>

      </div>
    </div>
  );
}
