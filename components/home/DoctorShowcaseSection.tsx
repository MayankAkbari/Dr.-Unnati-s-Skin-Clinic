"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, XCircle, HeartHandshake, Microscope, Stethoscope, ArrowRight } from "lucide-react";
import { clinicProfile } from "@/data/doctors";

interface DoctorShowcaseProps {
  onOpenBooking?: () => void;
}

export default function DoctorShowcaseSection({ onOpenBooking }: DoctorShowcaseProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background border-y border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Doctor Bio Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left Column: Doctor Profile Box */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl p-8 sm:p-10 bg-obsidian-900 text-white dark:bg-obsidian-900/95 border-2 border-primary-gold/50 shadow-2xl overflow-hidden backdrop-blur-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-gold/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center space-x-4 pb-6 border-b border-border/20">
                <div className="flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Dr. Unnati's Skin Clinic Logo"
                    width={110}
                    height={110}
                    className="h-20 sm:h-24 w-auto object-contain"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full liquid-glass-pill text-primary-gold text-[10px] font-extrabold uppercase tracking-wider mb-1 border border-primary-gold/30">
                    Cosmetologist & Aesthetic Medicine Expert
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    Dr. Unnati Panchal
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-emerald font-extrabold mt-0.5">
                    Cosmetologist & Aesthetic Medicine Expert
                  </p>
                </div>
              </div>

              <div className="py-6 space-y-4 text-xs sm:text-sm text-pearl-100 dark:text-pearl-200 leading-relaxed font-normal">
                <p>
                  With over <strong className="text-primary-gold font-bold">12+ years of cosmetology and aesthetic leadership</strong>, Dr. Unnati is recognized as one of Gujarat&apos;s leading authorities on laser skin toning, anti-aging liquid facelifts, and Bio-FUE™ hair restoration.
                </p>
                <p className="italic text-white border-l-2 border-primary-gold pl-3.5 py-1 bg-white/5 rounded-r-xl">
                  &ldquo;We never oversell or perform unnecessary cosmetic procedures. Our mission is transparent, ethical medicine that restores your natural, radiant confidence.&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border/20 space-y-2.5 text-xs font-bold text-white">
                {clinicProfile.credentials.map((cred, i) => (
                  <div key={i} className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary-emerald flex-shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-4.5 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-sm flex items-center justify-center shadow-xl hover:scale-[1.02] transition-all"
                >
                  Consult Personally With Dr. Unnati →
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Digital Dermoscopy & Clinical Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-glass-pill text-secondary-emerald font-extrabold text-xs uppercase tracking-wider border border-secondary-emerald/30 shadow-sm">
                <Stethoscope className="w-4 h-4 text-secondary-emerald" />
                <span>The Cosmetology Difference</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
                Why Discerning Patients Choose <span className="gold-gradient-text block mt-1">Dr. Unnati&apos;s Skin Clinic.</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Most commercial skincare chains rely on therapists or one-size-fits-all packages. Here, your entire journey is directly guided by a dedicated Cosmetologist utilizing 3D digital dermoscopy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-7 rounded-3xl liquid-glass-card border-2 border-white/60 dark:border-white/20 shadow-liquid-glass space-y-3 relative overflow-hidden">
                <div className="p-3.5 rounded-2xl bg-primary-gold/15 w-fit text-primary-gold shadow-sm">
                  <Microscope className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-lg text-foreground">
                  3D Digital Skin & Follicle Analysis
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Before touching a laser, we magnify your dermal layers 50x to measure exact melanin depth, hydration levels, and hair miniaturization ratios.
                </p>
              </div>

              <div className="p-7 rounded-3xl liquid-glass-card border-2 border-white/60 dark:border-white/20 shadow-liquid-glass space-y-3 relative overflow-hidden">
                <div className="p-3.5 rounded-2xl bg-secondary-emerald/15 w-fit text-secondary-emerald shadow-sm">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-lg text-foreground">
                  Zero Hidden Costs or Upselling
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  You receive a transparent, printed medical protocol with upfront pricing. If a procedure is not biologically suited for your skin, Dr. Unnati will advise against it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Matrix: Why Dr. Unnati vs Salon / Commercial Chains */}
        <div className="bg-obsidian-900 text-white dark:bg-obsidian-900/95 rounded-3xl p-6 sm:p-10 border-2 border-primary-gold/50 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Advanced Clinical Skincare vs. Beauty Salons / Commercial Spas
            </h3>
            <p className="text-xs sm:text-sm text-pearl-100 dark:text-pearl-200">
              See why clinical oversight is critical to protecting your delicate facial and scalp barrier.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border/20 text-pearl-100 dark:text-muted-foreground">
                  <th className="py-4 px-4 font-bold text-white">Treatment Factor</th>
                  <th className="py-4 px-4 font-extrabold text-primary-gold bg-primary-gold/10 rounded-t-xl">
                    Dr. Unnati&apos;s Skin Clinic (Nikol)
                  </th>
                  <th className="py-4 px-4 font-semibold text-pearl-200 dark:text-pearl-300">
                    Local Salons & Commercial Spas
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/10">
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Supervision & Diagnosis</td>
                  <td className="py-4 px-4 font-extrabold text-secondary-emerald bg-primary-gold/5">
                    <CheckCircle2 className="w-4 h-4 inline mr-1 text-secondary-emerald" />
                    Experienced Clinical Skin Specialist
                  </td>
                  <td className="py-4 px-4 text-pearl-200 dark:text-muted-foreground">
                    <XCircle className="w-4 h-4 inline mr-1 text-destructive" />
                    Uncertified beauticians / therapists
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Technology Standard</td>
                  <td className="py-4 px-4 font-extrabold text-white bg-primary-gold/5">
                    <CheckCircle2 className="w-4 h-4 inline mr-1 text-secondary-emerald" />
                    100% US-FDA Cleared Calibrated Lasers
                  </td>
                  <td className="py-4 px-4 text-pearl-200 dark:text-muted-foreground">
                    <XCircle className="w-4 h-4 inline mr-1 text-destructive" />
                    Unregulated local or counterfeit machines
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Facial Extraction & Peels</td>
                  <td className="py-4 px-4 font-extrabold text-white bg-primary-gold/5">
                    <CheckCircle2 className="w-4 h-4 inline mr-1 text-secondary-emerald" />
                    Painless Medical Vortex Vacuum & pH-Buffered Peels
                  </td>
                  <td className="py-4 px-4 text-pearl-200 dark:text-muted-foreground">
                    <XCircle className="w-4 h-4 inline mr-1 text-destructive" />
                    Manual painful squeezing causing permanent scars
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Safety & Sterility</td>
                  <td className="py-4 px-4 font-extrabold text-white bg-primary-gold/5 rounded-b-xl">
                    <CheckCircle2 className="w-4 h-4 inline mr-1 text-secondary-emerald" />
                    Hospital-Grade Autoclave Sterilization
                  </td>
                  <td className="py-4 px-4 text-pearl-200 dark:text-muted-foreground">
                    <XCircle className="w-4 h-4 inline mr-1 text-destructive" />
                    Shared towels and unsterilized metal loops
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
