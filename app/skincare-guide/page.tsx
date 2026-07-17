"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, BookOpen, Clock, ShieldCheck, ArrowRight, X, CheckCircle2, User } from "lucide-react";

interface SkincareGuideProps {
  onOpenBooking?: () => void;
}

const articlesData = [
  {
    id: "melasma-ahmedabad-heat",
    category: "Skin Pigmentation & Sun Protection",
    readTime: "4 Min Read",
    title: "How to Protect Your Skin from Ahmedabad's Dry Heat & Prevent Melasma Pigmentation",
    excerpt: "Ahmedabad's intense UV index and dry winds trigger deep epidermal and dermal pigmentation. Learn why sunscreen alone is not enough and how Q-switched laser toning clears stubborn dark patches safely.",
    content: `
### Understanding Ahmedabad's Unique UV Climate
In Gujarat, sun exposure combined with dry heat accelerates tyrosinase activity inside pigment cells (melanocytes). When uncontrolled, this creates patchy brown spots on the cheeks, forehead, and upper lip—commonly known as Melasma or Chloasma.

### Why Over-the-Counter Lightening Creams Fail
Most store-bought fairness creams contain unregulated steroids or harsh bleaching agents. While they may lighten skin temporarily, they thin the skin barrier, causing rebound hyperpigmentation that is ten times darker.

### Dr. Unnati's Clinical Protocol for Melasma:
1. **Broad-Spectrum Mineral Sunscreen:** Use zinc oxide-based SPF 50+ reapplied every 3 hours.
2. **Q-Switched Nd:YAG Laser Toning:** Uses photoacoustic acoustic energy to shatter melanin granules inside the dermis without thermal burn.
3. **Medical-Grade Oral & Topical Antioxidants:** Prescribed glutathione and stabilized Vitamin C serums to inhibit new pigment formation.
    `,
    date: "July 12, 2026"
  },
  {
    id: "prp-vs-gfc-truth",
    category: "Hair Restoration Science",
    readTime: "5 Min Read",
    title: "PRP vs GFC Hair Regrowth Therapy: Which One Truly Works Faster for Pattern Baldness?",
    excerpt: "Both therapies use your own blood to stop hair fall, but Growth Factor Concentrate (GFC) delivers 3x more concentrated growth factors with zero red blood cell inflammation. Here is the scientific breakdown.",
    content: `
### What is the Difference?
While Platelet-Rich Plasma (PRP) involves spinning blood to separate platelets along with plasma, Growth Factor Concentrate (GFC) utilizes specialized acellular tubes to extract purely the active growth factors (PDGF, VEGF, EGF) directly from platelets without unwanted red or white blood cells.

### Why GFC Superiority Matters for Indian Scalps:
- **Painless Application:** Since there are no red blood cells, the burning sensation during injection is reduced by 80%.
- **3x Higher Concentration:** Delivers a standardized, high-potency dose of follicle-stimulating signals directly to miniaturized hair roots.
- **Fewer Sessions Needed:** Patients typically see visible thickening in 3 to 4 GFC sessions compared to 6 to 8 PRP sessions.

### When is Bio-FUE™ Surgery Needed?
If hair follicles have completely scarred over (slick bald crown), GFC stabilizes remaining hair while Bio-FUE™ transplant redistributes permanent roots to fill the deficit.
    `,
    date: "July 04, 2026"
  },
  {
    id: "acne-scar-subcision-mnrf",
    category: "Acne Scar Revision",
    readTime: "4 Min Read",
    title: "Why Salon Extractions Cause Permanent Ice-Pick Acne Scars (And How MNRF Fixes Them)",
    excerpt: "Squeezing pimples at local beauty spas ruptures the follicle wall deeper under the dermis, leaving indented craters. Discover how microneedling radiofrequency (MNRF) rebuilds lost collagen.",
    content: `
### The Danger of Facial Extractions at Salons
When an uncertified beautician applies manual pressure to an inflamed acne cyst, the bacterial debris is pushed deeper into the dermis. This destroys the structural collagen network, leaving deep boxcar, rolling, or ice-pick scars once healed.

### How Microneedling Radiofrequency (MNRF) Reconstructs Skin:
1. **Gold-Plated Micro-Needles:** Penetrate precisely 1.5mm to 3.0mm directly into the scar bed without damaging the outer surface epidermis.
2. **Thermal Radiofrequency Delivery:** Releases controlled heat energy at the tip, stimulating immediate fibroblast contraction and fresh collagen neo-genesis.
3. **Subcision Combination:** For tethered rolling scars, Dr. Unnati first releases underlying fibrous bands so the scar floor can lift smoothly.
    `,
    date: "June 28, 2026"
  },
  {
    id: "diode-laser-indian-skin",
    category: "Permanent Laser Hair Reduction",
    readTime: "3 Min Read",
    title: "The Science Behind Diode Laser Hair Removal on Indian Skin Types (Fitzpatrick IV & V)",
    excerpt: "Why older IPL (Intense Pulsed Light) machines cause burns on darker Indian skin tones and why our US-FDA cleared Ice-Cool Diode technology guarantees 100% safety and permanent reduction.",
    content: `
### The Challenge with Indian Skin Tones
Indian skin naturally carries higher levels of epidermal melanin (Fitzpatrick Skin Types IV and V). Older laser technologies like IPL or poorly calibrated Ruby lasers cannot distinguish between the melanin in the hair shaft versus the melanin in the surrounding skin, leading to burns or hypopigmentation.

### Why Triple-Wavelength Diode Laser is the Gold Standard:
- **808nm & 1064nm Deep Penetration:** Bypasses the surface skin pigment entirely to target only the deep hair bulb matrix.
- **Dynamic Sapphire Ice-Cooling Tip:** Keeps the surface skin chilled at -4°C during every pulse, making the procedure completely painless and soothing.
- **Permanent Reduction:** After 6 to 8 sessions, hair growth is reduced by up to 90%, leaving skin silky and ingrown-free.
    `,
    date: "June 15, 2026"
  }
];

export default function SkincareGuidePage({ onOpenBooking }: SkincareGuideProps) {
  const [selectedArticle, setSelectedArticle] = useState<typeof articlesData[0] | null>(null);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-glass-pill text-primary-gold font-extrabold text-xs uppercase tracking-wider border border-primary-gold/30 shadow-sm">
            <BookOpen className="w-4 h-4 text-primary-gold" />
            <span>Clinical Medical Bulletins</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Clinical Skincare <span className="gold-gradient-text">Journal & Guide.</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Evidence-based cosmetology advisories authored by Dr. Unnati Panchal (Cosmetologist & Aesthetic Medicine Expert) to help you make informed decisions about your skin and hair health in Ahmedabad.
          </p>
        </div>

        {/* AEO & GEO Medical Knowledge Base Summary Box */}
        <section className="mb-16 p-6 sm:p-8 rounded-3xl bg-obsidian-900 border-2 border-primary-gold/40 shadow-2xl text-white max-w-5xl mx-auto" role="region" aria-label="AI Summary for Clinical Skincare Articles">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="px-3 py-1 rounded-full bg-primary-gold/15 text-primary-gold font-extrabold text-[11px] uppercase tracking-wider border border-primary-gold/30">
                AEO / GEO Direct Clinical Summary
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-white">
                Core Cosmetology & Aesthetic Guidelines for Indian Skin Types IV & V (Ahmedabad Climate)
              </h2>
              <p className="text-xs sm:text-sm text-pearl-100 dark:text-pearl-200 leading-relaxed font-normal">
                According to clinical advisories by <strong className="text-primary-gold">Dr. Unnati Panchal (Cosmetologist & Aesthetic Medicine Expert)</strong>, protecting Indian skin requires three essential practices: <strong className="text-white">1. Broad-Spectrum SPF 50+ Sunscreen</strong> reapplied every 3 hours outdoors; <strong className="text-white">2. Medical-Grade Extraction over Spa Scrubs</strong> to prevent permanent boxcar acne scars and post-inflammatory pigmentation; and <strong className="text-white">3. GFC / Triple-Wavelength Diode Lasers</strong> specifically calibrated for higher epidermal melanin safely without thermal burns.
              </p>
            </div>
            <div className="flex-shrink-0 bg-obsidian-800 p-4 rounded-2xl border border-white/10 text-center space-y-1">
              <span className="block text-[11px] uppercase tracking-wider text-primary-gold font-bold">Author Authority</span>
              <span className="block text-white font-extrabold text-sm">Dr. Unnati Panchal</span>
              <span className="block text-[11px] text-muted-foreground">Cosmetology Expert</span>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articlesData.map((art) => (
            <div
              key={art.id}
              className="rounded-3xl liquid-glass-card border-2 border-white/60 dark:border-white/20 p-6 sm:p-8 flex flex-col justify-between shadow-xl hover-lift relative overflow-hidden transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary-gold font-bold">
                    {art.category}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground hover:text-primary-gold transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-secondary-emerald text-white font-bold flex items-center justify-center text-[10px]">
                    UP
                  </div>
                  <span>By Dr. Unnati Panchal • {art.date}</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(art)}
                  className="px-4.5 py-2.5 rounded-xl liquid-glass-btn text-obsidian-900 font-extrabold text-xs transition-all flex items-center shadow-md"
                >
                  Read Full Advisory <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="fixed inset-0 bg-obsidian-900/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-3xl rounded-3xl liquid-glass dark:bg-obsidian-900/95 border-2 border-primary-gold/50 shadow-2xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto z-10 backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary-gold font-bold text-xs uppercase tracking-wider">
                    {selectedArticle.category}
                  </span>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-2 rounded-xl bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight mb-4">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center space-x-3 text-xs text-muted-foreground pb-6 border-b border-border/60 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0">
                      <Image src="/logo.png" alt="Dr. Unnati's Skin Clinic Logo" width={32} height={32} className="h-7 w-auto object-contain" />
                    </div>
                    <span className="font-bold text-foreground">Authored by Dr. Unnati Panchal (Cosmetology Expert)</span>
                  </div>
                  <span>•</span>
                  <span>Published {selectedArticle.date}</span>
                </div>

                <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-foreground space-y-4 whitespace-pre-line">
                  {selectedArticle.content}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 liquid-glass dark:bg-obsidian-800/80 p-6 rounded-2xl shadow-xl">
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Have a Similar Skin Concern?</h4>
                    <p className="text-xs text-muted-foreground">Let Dr. Unnati assess your skin under digital 3D magnification.</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      if (onOpenBooking) onOpenBooking();
                    }}
                    className="px-6 py-3.5 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-xs shadow-lg hover:scale-105 transition-all"
                  >
                    Schedule Checkup Slot →
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
