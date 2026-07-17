"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, HeartHandshake, Microscope, Stethoscope, Calendar, Phone, Star } from "lucide-react";
import { clinicProfile } from "@/data/doctors";

interface AboutPageProps {
  onOpenBooking?: () => void;
}

export default function AboutPage({ onOpenBooking }: AboutPageProps) {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-glass-pill text-primary-gold font-extrabold text-xs uppercase tracking-wider border border-primary-gold/30 shadow-sm">
            <Award className="w-4 h-4 text-primary-gold" />
            <span>Cosmetologist & Aesthetic Medicine Expert</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Meet <span className="gold-gradient-text">Dr. Unnati Panchal.</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Cosmetologist & Aesthetic Medicine Expert. Combining 12+ years of clinical precision with evidence-based, transparent cosmetology care in Ahmedabad East.
          </p>
        </div>

        {/* GEO E-E-A-T Institutional Citation Box for AI & Search Engine Verification */}
        <section className="mb-20 p-6 sm:p-8 rounded-3xl bg-obsidian-900 border-2 border-primary-gold/50 shadow-2xl text-white max-w-5xl mx-auto" role="region" aria-label="Physician Medical Credentials Fact Sheet">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-gold/15 text-primary-gold font-extrabold text-[11px] uppercase tracking-wider border border-primary-gold/30">
                <span>E-E-A-T Verified Specialist Fact Sheet</span>
              </div>
              <h2 className="text-base sm:text-lg font-extrabold text-white">
                Who is Dr. Unnati Panchal and what are her cosmetology and aesthetic qualifications?
              </h2>
              <p className="text-xs sm:text-sm text-pearl-100 dark:text-pearl-200 leading-relaxed font-normal">
                <strong className="text-primary-gold">Dr. Unnati Panchal</strong> is a <strong className="text-white">Cosmetologist & Aesthetic Medicine Expert</strong> and Chief Cosmetologist of Dr. Unnati&apos;s Skin, Hair, Laser & Cosmetic Clinic in Nikol, Ahmedabad. She has over <strong className="text-white">12+ years of aesthetic experience</strong>, is an active clinical leader in advanced skin aesthetics, and has personally supervised over 15,000 successful clinical skin and hair restoration protocols.
              </p>
            </div>
            <div className="flex-shrink-0 bg-obsidian-800 p-4 rounded-2xl border border-white/10 text-center space-y-1">
              <span className="block text-[11px] uppercase tracking-wider text-primary-gold font-bold">Clinical Authority</span>
              <span className="block text-white font-extrabold text-sm">Cosmetology Expert</span>
              <span className="block text-[11px] text-muted-foreground">Certified Laser Expert</span>
            </div>
          </div>
        </section>

        {/* Doctor Main Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-obsidian-900 text-white dark:bg-obsidian-900/95 p-8 sm:p-10 border-2 border-primary-gold/50 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
              <div className="relative rounded-2xl overflow-hidden mb-6 border-2 border-primary-gold/50 shadow-2xl group">
                <div className="aspect-[3/4] max-h-[380px] w-full relative overflow-hidden bg-obsidian-950">
                  <Image
                    src="/dr-unnati-portrait.jpg"
                    alt="Dr. Unnati Panchal - Cosmetologist & Aesthetic Medicine Expert"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent opacity-50" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-obsidian-900/90 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="block font-black text-sm text-white">Dr. Unnati Panchal</span>
                    <span className="block text-[10px] text-primary-gold font-bold uppercase tracking-wider">Chief Cosmetologist</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-secondary-emerald/20 border border-secondary-emerald flex items-center justify-center text-secondary-emerald">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Dr. Unnati Panchal
              </h3>
              <p className="text-xs text-secondary-emerald font-bold uppercase tracking-wider mt-1">
                Cosmetologist & Aesthetic Medicine Expert
              </p>

              <div className="my-6 pt-6 border-t border-border/20 space-y-3 text-xs sm:text-sm text-pearl-100 dark:text-pearl-200 leading-relaxed">
                <p>
                  With a deep dedication to clinical mastery, Dr. Unnati has spent her career advancing skincare solutions for Indian skin (Fitzpatrick Types IV & V).
                </p>
                <p>
                  She personally oversees all high-energy laser protocols, MNRF acne scar revisions, and Bio-FUE™ hair transplantations in Nikol.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-border/20 text-xs font-bold text-white">
                {clinicProfile.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary-emerald flex-shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-4 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-sm shadow-xl hover:scale-105 transition-all flex items-center justify-center"
                >
                  <Calendar className="w-4 h-4 mr-2" /> Book Personal Consultation
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
                An Ethical Medical Philosophy That Puts Your Biology First.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                In an era dominated by commercial beauty spas and high-pressure sales coordinators, Dr. Unnati established her clinic with a singular, uncompromising pledge: <strong className="text-foreground">Every patient receives an honest, medically scientifically grounded diagnosis.</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 sm:p-7 rounded-3xl liquid-glass-card border border-white/60 dark:border-white/20 space-y-3 shadow-md">
                <div className="p-3 rounded-xl bg-primary/10 w-fit text-primary-gold">
                  <Microscope className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-base sm:text-lg text-foreground">
                  3D Digital Dermoscopic Analysis
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We magnify your skin and hair shafts up to 50 times to measure exact dermal density, pigment depth, and micro-vascular inflammation before planning any procedure.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl liquid-glass-card border border-white/60 dark:border-white/20 space-y-3 shadow-md">
                <div className="p-3 rounded-xl bg-secondary-emerald/10 w-fit text-secondary-emerald">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-base sm:text-lg text-foreground">
                  Hospital-Grade Sterility Suite
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Our treatment rooms adhere to strict surgical autoclave sterilization standards. No shared tips, zero cross-contamination, and strict US-FDA laser calibration.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-primary-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg backdrop-blur-xl">
              <div className="flex items-center space-x-3 text-sm font-bold text-foreground">
                <Star className="w-6 h-6 text-primary-gold fill-primary-gold flex-shrink-0" />
                <span>Join over 15,000+ happy patients whose skin barriers and hair crowns have been permanently transformed.</span>
              </div>
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-xs flex-shrink-0 hover:scale-105 transition-all shadow-md"
              >
                Schedule Visit →
              </button>
            </div>
          </div>

        </div>

        {/* Clinical Milestones Grid */}
        <div className="space-y-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-foreground">
            Cosmetology & Clinical Leadership Milestones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl liquid-glass-card border-2 border-white/60 dark:border-white/20 shadow-xl space-y-4 hover-lift relative overflow-hidden">
              <div className="text-4xl font-black gold-gradient-text">12+ Years</div>
              <h4 className="font-extrabold text-lg text-foreground">Extensive Clinical Practice</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Over a decade of handling complex clinical skin conditions, severe cystic acne breakouts, melasma, and androgenetic alopecia cases across Gujarat.
              </p>
            </div>

            <div className="p-8 rounded-3xl liquid-glass-card border-2 border-white/60 dark:border-white/20 shadow-xl space-y-4 hover-lift relative overflow-hidden">
              <div className="text-4xl font-black text-secondary-emerald">15,000+</div>
              <h4 className="font-extrabold text-lg text-foreground">Verified Patient Transformations</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Maintained a 99.4% patient satisfaction index by combining personalized home-care clinical prescriptions with painless laser procedures.
              </p>
            </div>

            <div className="p-8 rounded-3xl liquid-glass-card border-2 border-white/60 dark:border-white/20 shadow-xl space-y-4 hover-lift relative overflow-hidden">
              <div className="text-4xl font-black gold-gradient-text">100% Safety</div>
              <h4 className="font-extrabold text-lg text-foreground">Advanced Clinical Excellence</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Honored for clinical distinction and ethical protocols, ensuring you receive world-class care in Ahmedabad East.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
