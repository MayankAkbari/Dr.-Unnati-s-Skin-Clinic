"use client";

import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import {
  Sparkles,
  Clock,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Award,
  Zap,
  Activity,
  HeartHandshake,
  HelpCircle,
  Phone
} from "lucide-react";
import { treatmentsData, Treatment } from "@/data/treatments";
import { clinicProfile } from "@/data/doctors";

interface TreatmentDetailPageProps {
  params: Promise<{ slug: string }>;
  onOpenBooking?: (treatmentId?: string) => void;
}

export default function TreatmentDetailPage({ params, onOpenBooking }: TreatmentDetailPageProps) {
  const resolvedParams = use(params);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const treatment = treatmentsData.find((t) => t.slug === resolvedParams.slug);

  if (!treatment) {
    return (
      <div className="pt-36 pb-24 text-center min-h-screen flex flex-col justify-center items-center space-y-4">
        <h2 className="text-3xl font-extrabold text-foreground">Procedure Protocol Not Found</h2>
        <p className="text-muted-foreground text-sm max-w-md">
          We could not locate this specific procedure page. Please explore our comprehensive treatments directory.
        </p>
        <Link
          href="/treatments"
          className="px-6 py-3 rounded-xl bg-primary-gold text-obsidian-900 font-bold text-sm"
        >
          View All 15+ Treatments
        </Link>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "skin": return <Sparkles className="w-6 h-6 text-primary-gold" />;
      case "laser": return <Zap className="w-6 h-6 text-primary-gold" />;
      case "hair": return <Activity className="w-6 h-6 text-primary-gold" />;
      case "anti-aging": return <HeartHandshake className="w-6 h-6 text-primary-gold" />;
      default: return <Award className="w-6 h-6 text-primary-gold" />;
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/treatments"
            className="inline-flex items-center text-xs font-bold text-muted-foreground hover:text-primary-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Treatments Directory
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Procedure Content (Cols 1 to 8) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Header Banner */}
            <div className="space-y-4 border-b border-border/80 pb-8">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-primary/10">
                  {getCategoryIcon(treatment.category)}
                </div>
                <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full liquid-glass-pill text-secondary-emerald font-extrabold text-xs uppercase tracking-wider border border-secondary-emerald/30 shadow-sm">
                  {treatment.category} Clinical Protocol
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full liquid-glass-pill text-primary-gold font-extrabold text-xs border border-primary-gold/30 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1" /> US-FDA Cleared
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                {treatment.title}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {treatment.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-foreground">
                <div className="flex items-center px-3.5 py-2 rounded-xl bg-muted">
                  <Clock className="w-4 h-4 mr-2 text-primary-gold" />
                  <span>Procedure Duration: {treatment.duration}</span>
                </div>
                <div className="flex items-center px-3.5 py-2 rounded-xl bg-muted">
                  <Sparkles className="w-4 h-4 mr-2 text-secondary-emerald" />
                  <span>Expected Downtime: {treatment.downtime}</span>
                </div>
              </div>

              {/* AEO (Answer Engine) & GEO (Generative Engine) Direct Answer Factual Block */}
              <div className="p-6 rounded-3xl bg-obsidian-900 text-white border-2 border-primary-gold/40 shadow-xl space-y-3 mt-6" role="region" aria-label={`AI Executive Summary for ${treatment.title}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary-gold/15 text-primary-gold font-extrabold text-[10px] uppercase tracking-wider border border-primary-gold/30 self-start">
                    AEO / GEO Direct Clinical Answer
                  </span>
                  <span className="text-[11px] text-pearl-200 font-medium">Medically Verified by Dr. Unnati Panchal (Clinical Specialist)</span>
                </div>
                <h2 className="text-sm sm:text-base font-extrabold text-white">
                  What is {treatment.title} and what should patients expect in Ahmedabad?
                </h2>
                <p className="text-xs sm:text-sm text-pearl-100 leading-relaxed">
                  <strong className="text-primary-gold">{treatment.title}</strong> at Dr. Unnati&apos;s Skin Clinic in Nikol, Ahmedabad is a physician-supervised, 100% US-FDA cleared medical procedure tailored for {treatment.suitableFor.join(", ")}. The typical session duration is <strong className="text-white">{treatment.duration}</strong> with an expected recovery/downtime of <strong className="text-white">{treatment.downtime}</strong>. Every protocol begins with digital 3D dermoscopy and follows hospital-grade autoclave sterilization.
                </p>
              </div>
            </div>

            {/* Clinical Benefits Grid */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary-gold" />
                Key Clinical Benefits & Outcomes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {treatment.benefits.map((benefit, i) => (
                  <div key={i} className="p-5 rounded-2xl liquid-glass-card border border-white/60 dark:border-white/20 flex items-start space-x-3 shadow-md">
                    <CheckCircle2 className="w-5 h-5 text-secondary-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Procedure Protocol */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-primary-gold" />
                Dr. Unnati&apos;s Step-by-Step Clinical Protocol
              </h3>
              <div className="space-y-4">
                {treatment.procedureSteps.map((step, idx) => (
                  <div key={idx} className="p-6 rounded-3xl liquid-glass-card border border-white/60 dark:border-white/20 flex items-start space-x-4 shadow-md">
                    <div className="w-8 h-8 rounded-xl bg-primary-gold text-obsidian-900 font-black flex items-center justify-center flex-shrink-0 text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-foreground">
                        Step {idx + 1}: {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal Candidates Section */}
            <div className="p-7 sm:p-8 rounded-3xl liquid-glass dark:bg-obsidian-900/90 border-2 border-secondary-emerald/40 space-y-4 shadow-xl backdrop-blur-xl">
              <h4 className="text-lg font-extrabold text-foreground flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2 text-secondary-emerald" />
                Who Should Choose {treatment.title}?
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {treatment.suitableFor.map((item, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl liquid-glass border border-secondary-emerald/40 text-xs font-extrabold text-foreground shadow-sm">
                    • {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                Note: During your initial digital dermoscopic checkup, Dr. Unnati Panchal will verify if your skin barrier and active concerns make you a 100% biological candidate for this procedure.
              </p>
            </div>

            {/* Procedure FAQs */}
            <div className="space-y-6 pt-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-primary-gold" />
                Frequently Asked Questions About {treatment.title}
              </h3>
              <div className="space-y-3">
                {treatment.faqs.map((faq, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/40 overflow-hidden liquid-glass dark:bg-obsidian-900/80 shadow-md">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-foreground flex items-center justify-between hover:text-primary-gold transition-colors"
                    >
                      <span>{faq.question}</span>
                      {openFaq === idx ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-primary-gold" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-muted-foreground" />}
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Booking & Doctor Authority Box (Cols 9 to 12) */}
          <div className="lg:col-span-4 space-y-6 sticky top-28 self-start">
            
            {/* Quick Consultation Reservation Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-obsidian-900 text-white dark:bg-obsidian-900/95 border-2 border-primary-gold/50 shadow-2xl space-y-6 backdrop-blur-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-border/20 pb-4">
                <span className="text-xs font-bold text-primary-gold uppercase tracking-wider">
                  Priority Slot
                </span>
                <span className="text-xs text-secondary-emerald font-bold flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1" /> MD Guidance
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-white">
                  Reserve {treatment.title}
                </h3>
                <p className="text-xs text-pearl-100 dark:text-pearl-200 leading-relaxed">
                  Avoid salon risk. Get a customized, ethical diagnosis directly from Clinical Specialist Dr. Unnati Panchal in Nikol.
                </p>
              </div>

              <div className="space-y-3 bg-obsidian-800 p-4 rounded-2xl border border-border/20 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Specialist:</span>
                  <span className="font-bold text-white">Dr. Unnati Panchal (Clinical Specialist)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Facility:</span>
                  <span className="font-bold text-white">Nikol, Ahmedabad East</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Digital 3D Scan:</span>
                  <span className="font-bold text-secondary-emerald">Included with Consultation</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking && onOpenBooking(treatment.id)}
                className="w-full py-4.5 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-sm shadow-xl hover:scale-105 transition-all flex items-center justify-center"
              >
                <Calendar className="w-4 h-4 mr-2" /> Book Slot For This Procedure
              </button>

              <a
                href={`tel:${clinicProfile.contact.phone.replace(/\s+/g, '')}`}
                className="w-full py-3.5 rounded-2xl liquid-glass border border-white/40 text-white font-extrabold text-xs hover:border-primary-gold transition-all flex items-center justify-center"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-secondary-emerald" /> Call Care Desk Now
              </a>
            </div>

            {/* Doctor Authority Mini Card */}
            <div className="p-6 rounded-3xl liquid-glass-card border-2 border-white/60 dark:border-white/20 space-y-4 relative overflow-hidden">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-obsidian-900 p-1.5 shadow-md flex items-center justify-center overflow-hidden border border-primary-gold/30">
                  <Image src="/logo.png" alt="Dr. Unnati's Skin Clinic Logo" width={40} height={40} className="object-contain w-full h-full" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">Dr. Unnati Panchal</h4>
                  <p className="text-[11px] text-muted-foreground">Clinical Specialist • Laser Surgeon</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                &ldquo;Your skin is a living, breathing organ. Every laser setting and active ingredient we use is tailored precisely to your unique biology.&rdquo;
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
