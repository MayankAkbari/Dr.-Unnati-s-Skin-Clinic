"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  ShieldCheck,
  Star,
  Award,
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  Check
} from "lucide-react";
import { clinicProfile } from "@/data/doctors";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] pt-48 pb-20 overflow-hidden flex items-center justify-center bg-gradient-to-b from-pearl-100 via-background to-pearl-50 dark:from-obsidian-900 dark:via-background dark:to-obsidian-800">
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-primary-gold/15 to-secondary-emerald/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-primary-gold/10 rounded-full blur-[100px] pointer-events-none animate-float" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-secondary-emerald/10 rounded-full blur-[100px] pointer-events-none animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Luxury Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full liquid-glass-pill text-primary-gold font-extrabold text-xs uppercase tracking-wider shadow-sm border border-white/60 dark:border-white/20"
            >
              <Sparkles className="w-4 h-4 animate-spin text-primary-gold" style={{ animationDuration: "8s" }} />
              <span>Ahmedabad&apos;s #1 Clinical Skincare & Laser Center</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]"
            >
              Where Medical Science Meets{" "}
              <span className="gold-gradient-text block mt-1">
                Luxury Aesthetic Precision.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Transform your skin and hair with{" "}
              <strong className="text-foreground font-semibold">Dr. Unnati Panchal</strong> (Cosmetologist & Aesthetic Medicine Expert). Experience US-FDA approved laser therapies, signature HydraFacials, advanced MNRF acne scar revision, and Bio-FUE™ hair restoration in a world-class clinical sanctuary.
            </motion.p>

            {/* Bullet Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 pt-1 max-w-lg mx-auto lg:mx-0 text-left text-xs sm:text-sm font-medium text-foreground"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-emerald flex-shrink-0" />
                <span>Personalized Specialist Supervision</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-emerald flex-shrink-0" />
                <span>100% US-FDA Cleared Lasers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-emerald flex-shrink-0" />
                <span>Painless Ice-Cool Diode Technology</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-emerald flex-shrink-0" />
                <span>Digital 3D Dermoscopic Analysis</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-base shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center group"
              >
                <Calendar className="w-5 h-5 mr-2.5 text-obsidian-900" />
                <span>Book Priority Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <Link
                href="/treatments"
                className="w-full sm:w-auto px-7 py-4.5 rounded-2xl liquid-glass border border-white/60 dark:border-white/20 hover:border-primary-gold text-foreground font-extrabold text-base transition-all flex items-center justify-center shadow-md hover:-translate-y-1"
              >
                <span>Explore 15+ Treatments</span>
              </Link>
            </motion.div>

            {/* Social Proof Mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4 flex items-center justify-center lg:justify-start space-x-4 text-xs text-muted-foreground"
            >
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-primary-gold flex items-center justify-center text-obsidian-900 font-bold text-xs">P</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-secondary-emerald flex items-center justify-center text-white font-bold text-xs">R</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-obsidian-700 flex items-center justify-center text-primary-gold font-bold text-xs">A</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-accent flex items-center justify-center text-obsidian-900 font-bold text-[10px]">+15K</div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-primary-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary-gold mr-0.5" />
                  ))}
                  <span className="font-bold ml-1 text-foreground">4.9/5 Rating</span>
                </div>
                <span>Over 15,000+ verified patient transformations in Nikol</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Doctor Trust Showcase & Floating Cards */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden liquid-glass-card border-2 border-white/60 dark:border-white/20 shadow-liquid-glass-dark p-6 md:p-8"
            >
              {/* Doctor Header Banner */}
              <div className="flex items-center space-x-4 pb-6 border-b border-border/40">
                <div className="flex-shrink-0">
                  <Image
                    src="/dr-unnati-suthar.jpeg"
                    alt="Dr. Unnati Panchal - Cosmetologist & Aesthetic Medicine Expert"
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-primary-gold shadow-md"
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h3 className="font-extrabold text-lg text-foreground">
                      Dr. Unnati Panchal
                    </h3>
                    <Award className="w-4 h-4 text-primary-gold fill-primary-gold/20" />
                  </div>
                  <p className="text-xs text-secondary-emerald font-bold uppercase tracking-wider">
                    Cosmetologist & Aesthetic Medicine Expert
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    12+ Years of Clinical Mastery
                  </p>
                </div>
              </div>

              {/* Core Excellence Points */}
              <div className="py-6 space-y-4">
                <div className="flex items-start space-x-3.5 p-4 rounded-2xl liquid-glass border border-white/50 dark:border-white/15 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-primary-gold/20 text-primary-gold mt-0.5 shadow-sm">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-foreground">
                      100% Ethical Medical Philosophy
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Every patient undergoes rigorous digital dermoscopy before any treatment is prescribed. No unnecessary procedures or false promises.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-4 rounded-2xl liquid-glass border border-white/50 dark:border-white/15 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-secondary-emerald/20 text-secondary-emerald mt-0.5 shadow-sm">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-foreground">
                      Triple-Wavelength & Q-Switched Lasers
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Calibrated specifically for Indian skin types (Fitzpatrick IV-V) ensuring rapid clearance without thermal injury.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Mini Booking Action inside card */}
              <div className="pt-2">
                <div className="p-5 rounded-2xl bg-obsidian-900 text-white dark:bg-obsidian-900/95 flex flex-col sm:flex-row items-center justify-between gap-3 border border-primary-gold/40 shadow-xl backdrop-blur-2xl">
                  <div className="text-left">
                    <span className="text-xs text-primary-gold dark:text-primary-champagne font-extrabold uppercase tracking-wider block">
                      Consultation Slots Available
                    </span>
                    <span className="text-xs text-pearl-100 dark:text-pearl-200 block mt-0.5">
                      Strict appointment slots to guarantee zero rush.
                    </span>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="px-5 py-2.5 rounded-xl liquid-glass-btn text-obsidian-900 font-extrabold text-xs hover:scale-105 transition-all flex-shrink-0 shadow-md"
                  >
                    Reserve Now →
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Floating Decorative Badges around the right card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center space-x-3.5 liquid-glass-pill p-4 rounded-2xl border border-white/60 dark:border-white/20 shadow-2xl z-20 backdrop-blur-2xl"
            >
              <div className="p-3 rounded-xl bg-primary-gold/20 text-primary-gold shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-bold">Over 12+ Years</div>
                <div className="text-sm font-black text-foreground">Clinical Authority</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute -top-6 -right-4 hidden sm:flex items-center space-x-3 bg-obsidian-900 text-white dark:bg-obsidian-900/90 p-4 rounded-2xl border border-secondary-emerald/50 shadow-2xl z-20 backdrop-blur-2xl"
            >
              <div className="p-2.5 rounded-xl bg-secondary-emerald text-white shadow-sm">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div className="text-xs">
                <span className="font-extrabold text-secondary-emerald block">15,000+ Happy Patients</span>
                <span className="text-pearl-100 dark:text-pearl-200 font-semibold">Clinical Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Quick Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 pt-10 border-t border-border/60 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
        >
          {clinicProfile.stats.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-3xl liquid-glass-card border border-white/60 dark:border-white/20">
              <div className="text-3xl sm:text-4xl font-black gold-gradient-text">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-muted-foreground mt-1.5 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
