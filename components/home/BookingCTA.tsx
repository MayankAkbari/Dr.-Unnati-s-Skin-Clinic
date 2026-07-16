"use client";

import React from "react";
import { Calendar, Phone, ShieldCheck, Sparkles, MapPin, Clock } from "lucide-react";
import { clinicProfile } from "@/data/doctors";

interface BookingCTAProps {
  onOpenBooking?: () => void;
}

export default function BookingCTA({ onOpenBooking }: BookingCTAProps) {
  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-obsidian-900 via-obsidian-800 to-obsidian-900 text-white relative overflow-hidden border-t border-primary/30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-gold/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-emerald/10 rounded-full blur-[100px] pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-obsidian-900 text-white dark:bg-obsidian-900/95 border-2 border-primary-gold/50 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-glass-pill text-primary-gold font-extrabold text-xs uppercase tracking-wider border border-primary-gold/30 shadow-sm">
              <Sparkles className="w-4 h-4 animate-spin text-primary-gold" style={{ animationDuration: "10s" }} />
              <span>Take The First Step To Flawless Skin</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Ready To Experience <span className="gold-gradient-text block mt-1">Clinical Perfection?</span>
            </h2>

            <p className="text-sm sm:text-base text-pearl-100 dark:text-pearl-200 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Stop guessing with commercial creams and painful beauty salon extractions. Reserve your priority consultation slot with <strong className="text-primary-gold font-bold">Dr. Unnati Panchal</strong> right now.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-md mx-auto lg:mx-0 text-xs text-pearl-100 dark:text-pearl-200 font-extrabold">
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-secondary-emerald flex-shrink-0" />
                <span>Zero Wait Time with Prior Booking</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-secondary-emerald flex-shrink-0" />
                <span>3D Digital Dermoscopic Analysis</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
              >
                <Calendar className="w-5 h-5 mr-2.5" />
                <span>Reserve Consultation Slot</span>
              </button>

              <a
                href={`tel:${clinicProfile.contact.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-obsidian-800 text-white dark:bg-obsidian-800/80 border border-primary-gold/40 hover:border-primary-gold font-extrabold text-base transition-all flex items-center justify-center shadow-lg hover:scale-[1.03]"
              >
                <Phone className="w-4 h-4 mr-2 text-secondary-emerald" />
                <span>Call ({clinicProfile.contact.phone})</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-obsidian-900 text-white dark:bg-obsidian-900/90 rounded-3xl p-7 sm:p-8 border-2 border-primary-gold/40 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
            <h3 className="font-black text-lg text-white border-b border-border/30 pb-4 flex items-center justify-between">
              <span>Clinic Visiting Information</span>
              <span className="text-xs text-secondary-emerald font-extrabold uppercase tracking-wider">Nikol, Ahmedabad</span>
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-pearl-100 dark:text-pearl-200 font-medium">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-extrabold">Facility Address:</strong>
                  <span>{clinicProfile.location.address}, Near Raspan Cross Road, {clinicProfile.location.area}, {clinicProfile.location.city} ({clinicProfile.location.pincode})</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-secondary-emerald flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-extrabold">Consultation Timings:</strong>
                  <span>Mon – Sat: 10:30 AM to 1:30 PM & 5:00 PM to 8:30 PM</span>
                  <span className="block text-xs text-pearl-200 dark:text-pearl-300 mt-0.5">Sunday by prior emergency appointment only</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-800 text-primary-gold dark:bg-primary-gold/15 border border-primary-gold/40 text-xs dark:text-primary-champagne text-center font-extrabold shadow-sm">
              ✨ Free Digital Skin Diagnosis included for online slot reservations this week.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
