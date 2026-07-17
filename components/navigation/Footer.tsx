"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Send,
  Heart
} from "lucide-react";
import { clinicProfile } from "@/data/doctors";
import { treatmentsData } from "@/data/treatments";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to Dr. Unnati's Clinical Skincare Bulletin!");
  };

  return (
    <footer className="bg-obsidian-900 text-pearl-100 border-t border-primary/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border/20">
          {/* Col 1 & 2: Clinic Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group pb-2">
              <Image
                src="/logo.png"
                alt="Dr. Unnati's Skin Clinic Logo"
                width={260}
                height={90}
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed pr-6">
              Ahmedabad&apos;s premier cosmetology center for advanced skin aesthetics, laser therapies, and Bio-FUE™ hair restoration. We combine evidence-based US-FDA cleared technologies with Dr. Unnati Panchal&apos;s 12+ years of aesthetic mastery to deliver natural, transformational outcomes.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl liquid-glass border border-white/20 text-muted-foreground hover:text-primary-gold hover:border-primary-gold transition-all hover:-translate-y-1 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl liquid-glass border border-white/20 text-muted-foreground hover:text-primary-gold hover:border-primary-gold transition-all hover:-translate-y-1 shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl liquid-glass border border-white/20 text-muted-foreground hover:text-primary-gold hover:border-primary-gold transition-all hover:-translate-y-1 shadow-sm"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <span className="text-xs text-secondary-emerald font-bold flex items-center pl-2">
                <ShieldCheck className="w-4 h-4 mr-1 text-secondary-emerald" />
                Verified Clinical Hygiene
              </span>
            </div>
          </div>

          {/* Col 3: Quick Treatments */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-primary-gold pl-2.5">
              Popular Treatments
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {treatmentsData.slice(0, 5).map((t) => (
                <li key={t.id}>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="hover:text-primary-gold transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-gold/60 mr-2" />
                    {t.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/treatments"
                  className="text-primary-gold font-semibold hover:underline flex items-center pt-1 text-xs"
                >
                  View All 15+ Procedures →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-primary-gold pl-2.5">
              Clinic Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary-gold transition-colors">
                  About Dr. Unnati Panchal
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-primary-gold transition-colors">
                  Before & After Results
                </Link>
              </li>
              <li>
                <Link href="/skincare-guide" className="hover:text-primary-gold transition-colors">
                  Skincare Tips & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-gold transition-colors">
                  Consultation Timings
                </Link>
              </li>
              <li>
                <Link href="/#booking" className="hover:text-primary-gold transition-colors">
                  Online Booking Portal
                </Link>
              </li>
              <li>
                <Link href="/contact#faqs" className="hover:text-primary-gold transition-colors">
                  Patient FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info & Timings */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-primary-gold pl-2.5">
              Visit The Clinic
            </h4>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary-gold flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block">{clinicProfile.location.address}</strong>
                  {clinicProfile.location.area}, {clinicProfile.location.city} - {clinicProfile.location.pincode}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-gold flex-shrink-0" />
                <a
                  href={`tel:${clinicProfile.contact.phone.replace(/\s+/g, '')}`}
                  className="text-white font-semibold hover:text-primary-gold transition-colors"
                >
                  {clinicProfile.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-gold flex-shrink-0" />
                <span className="text-muted-foreground">{clinicProfile.contact.email}</span>
              </div>
              <div className="flex items-start space-x-2 pt-1 border-t border-border/20">
                <Clock className="w-4 h-4 text-secondary-emerald flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Consultation Hours:</span>
                  <span>Mon - Sat: 10:30 AM – 1:30 PM & 5:00 PM – 8:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter & Skincare Tips Subscription */}
        <div className="py-10 border-b border-border/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h5 className="text-lg font-extrabold text-white flex items-center justify-center md:justify-start">
              <Sparkles className="w-4.5 h-4.5 mr-2 text-primary-gold animate-spin" style={{ animationDuration: "8s" }} />
              Join Dr. Unnati&apos;s Skincare Inner Circle
            </h5>
            <p className="text-xs sm:text-sm text-pearl-300 max-w-md leading-relaxed">
              Receive monthly seasonal skincare advisories, exclusive consultation invites, and clinical tips directly from Dr. Unnati Panchal.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto max-w-md gap-2.5">
            <input
              type="email"
              placeholder="Enter your email address..."
              required
              className="px-5 py-3 rounded-2xl liquid-glass border border-white/20 text-sm text-white focus:outline-none focus:border-primary-gold w-full md:w-72 shadow-inner"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-sm hover:scale-105 transition-all flex items-center flex-shrink-0 shadow-lg"
            >
              Subscribe <Send className="w-4 h-4 ml-2" />
            </button>
          </form>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} Dr. Unnati&apos;s Skin Clinic. All Rights Reserved. Medical License & US-FDA Compliance Verified.</p>
            <p className="text-[11px] text-muted-foreground/70">
              Medical Disclaimer: All clinical procedures shown are performed under strict clinical supervision. Individual results vary based on age, skin condition, and adherence to prescribed post-care regimens.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-primary-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-primary-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
