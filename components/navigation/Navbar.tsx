"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  Menu,
  X,
  Sparkles,
  ChevronDown,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  Activity,
  HeartHandshake,
  Award
} from "lucide-react";
import { categoriesList, treatmentsData } from "@/data/treatments";
import { clinicProfile } from "@/data/doctors";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsDropdown, setTreatmentsDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "skin": return <Sparkles className="w-4 h-4 text-primary-gold" />;
      case "laser": return <Zap className="w-4 h-4 text-primary-gold" />;
      case "hair": return <Activity className="w-4 h-4 text-primary-gold" />;
      case "anti-aging": return <HeartHandshake className="w-4 h-4 text-primary-gold" />;
      default: return <Award className="w-4 h-4 text-primary-gold" />;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-obsidian-900 text-pearl-100 text-xs py-2 px-4 border-b border-primary/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-primary-champagne font-medium">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
              US-FDA Approved Clinical Technologies
            </span>
            <span className="flex items-center text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 mr-1 text-primary-gold" />
              {clinicProfile.location.address}, {clinicProfile.location.area}
            </span>
            <span className="flex items-center text-muted-foreground">
              <Clock className="w-3.5 h-3.5 mr-1 text-primary-gold" />
              Mon-Sat: 10:30 AM - 8:30 PM
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${clinicProfile.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center text-primary-champagne hover:text-white transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 mr-1" />
              {clinicProfile.contact.phone}
            </a>
            <Link
              href="/#booking"
              onClick={onOpenBooking}
              className="bg-primary/20 text-primary-gold px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-primary/30 hover:bg-primary/30 transition-all"
            >
              Book Priority Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header Row (All items aligned cleanly in ONE single horizontal line, no header background) */}
      <div className={`transition-all duration-500 px-3 sm:px-6 lg:px-8 bg-transparent border-none ${isScrolled ? "pt-2" : "pt-0"}`}>
        <div
          className={`mx-auto transition-all duration-500 flex items-center justify-between gap-4 bg-transparent border-none ${
            isScrolled
              ? "max-w-[1400px] py-2.5 px-5"
              : "max-w-[1400px] py-3.5 px-4 sm:px-6 lg:px-8"
          }`}
        >
          {/* 1. Far Left Corner of the Header: Logo (No text, no background box, increased size for crystal clear visibility) */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Dr. Unnati's Skin Clinic Logo"
              width={260}
              height={90}
              priority
              className="h-16 sm:h-20 lg:h-[84px] w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* 2. Center of the Header: Short, All Corners Rounded Navigation Bar (Page Names Only) */}
          <nav
            className="hidden lg:inline-flex items-center justify-center space-x-6 xl:space-x-8 rounded-full liquid-glass-nav border border-white/30 dark:border-white/15 py-2 px-6 shadow-liquid-glass transition-all duration-300 mx-auto flex-shrink-0"
          >
            {/* Desktop Navigation Links (Page Names Only Aligned in One Line) */}
            <Link
              href="/"
              className={`text-xs xl:text-sm font-semibold transition-colors hover:text-primary-gold ${
                pathname === "/" ? "text-primary-gold" : "text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Treatments Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setTreatmentsDropdown(true)}
              onMouseLeave={() => setTreatmentsDropdown(false)}
            >
              <Link
                href="/treatments"
                onClick={(e) => {
                  e.preventDefault();
                  setTreatmentsDropdown(!treatmentsDropdown);
                }}
                className={`flex items-center text-xs xl:text-sm font-semibold transition-colors hover:text-primary-gold py-1 cursor-pointer ${
                  pathname.startsWith("/treatments") || treatmentsDropdown ? "text-primary-gold" : "text-foreground"
                }`}
              >
                Treatments
                <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${treatmentsDropdown ? "rotate-180 text-primary-gold" : ""}`} />
              </Link>

              {/* Mega Dropdown Menu (High contrast, crystal clear readability) */}
              <AnimatePresence>
                {treatmentsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute top-full left-0 mt-3 w-[460px] bg-background/95 dark:bg-obsidian-950/95 backdrop-blur-3xl rounded-3xl border-2 border-primary-gold/40 dark:border-white/20 shadow-2xl shadow-black/80 p-6 grid grid-cols-1 gap-3.5 z-50 text-left"
                  >
                    <div className="text-xs font-extrabold uppercase tracking-widest text-primary-gold pb-2 border-b border-border/60 flex items-center justify-between">
                      <span>Featured Clinical Procedures</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    {treatmentsData.slice(0, 5).map((t) => (
                      <Link
                        key={t.id}
                        href={`/treatments/${t.slug}`}
                        onClick={() => setTreatmentsDropdown(false)}
                        className="flex items-start p-3.5 rounded-2xl bg-white/40 dark:bg-obsidian-900/60 hover:bg-primary-gold/15 dark:hover:bg-primary-gold/20 transition-all border border-border/40 hover:border-primary-gold/50 group/item hover:shadow-md"
                      >
                        <div className="p-2.5 rounded-xl bg-primary/20 mr-3.5 mt-0.5 group-hover/item:bg-primary-gold group-hover/item:text-obsidian-900 transition-all shadow-sm">
                          {getCategoryIcon(t.category)}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-extrabold text-foreground group-hover/item:text-primary-gold transition-colors">
                            {t.title}
                          </div>
                          <div className="text-xs text-muted-foreground group-hover/item:text-foreground/90 line-clamp-1 font-medium mt-0.5">
                            {t.tagline}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-border/60 flex justify-between items-center">
                      <Link
                        href="/treatments"
                        onClick={() => setTreatmentsDropdown(false)}
                        className="text-xs font-bold text-primary-gold hover:underline flex items-center"
                      >
                        View All 15+ Treatments →
                      </Link>
                      <span className="text-[10px] font-bold text-muted-foreground flex items-center">
                        <ShieldCheck className="w-3.5 h-3.5 mr-1 text-secondary-emerald" />
                        US-FDA Cleared
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <Link
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  setAboutDropdown(!aboutDropdown);
                }}
                className={`flex items-center text-xs xl:text-sm font-semibold transition-colors hover:text-primary-gold py-1 cursor-pointer ${
                  pathname.startsWith("/about") || pathname === "/certificates" || aboutDropdown ? "text-primary-gold" : "text-foreground"
                }`}
              >
                About Dr. Unnati
                <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${aboutDropdown ? "rotate-180 text-primary-gold" : ""}`} />
              </Link>

              <AnimatePresence>
                {aboutDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute top-full left-0 mt-3 w-56 bg-background/95 dark:bg-obsidian-950/95 backdrop-blur-3xl rounded-3xl border-2 border-primary-gold/40 dark:border-white/20 shadow-2xl shadow-black/80 p-3 grid grid-cols-1 gap-2 z-50 text-left"
                  >
                    <Link
                      href="/about"
                      onClick={() => setAboutDropdown(false)}
                      className="flex items-start p-3 rounded-2xl bg-white/40 dark:bg-obsidian-900/60 hover:bg-primary-gold/15 dark:hover:bg-primary-gold/20 transition-all border border-transparent hover:border-primary-gold/50 group/item hover:shadow-md"
                    >
                      <div className="flex-1 text-sm font-extrabold text-foreground group-hover/item:text-primary-gold transition-colors">
                        Clinic & Profile
                      </div>
                    </Link>
                    <Link
                      href="/certificates"
                      onClick={() => setAboutDropdown(false)}
                      className="flex items-start p-3 rounded-2xl bg-white/40 dark:bg-obsidian-900/60 hover:bg-primary-gold/15 dark:hover:bg-primary-gold/20 transition-all border border-transparent hover:border-primary-gold/50 group/item hover:shadow-md"
                    >
                      <div className="flex-1 text-sm font-extrabold text-foreground group-hover/item:text-primary-gold transition-colors">
                        Certificates
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/results"
              className={`text-xs xl:text-sm font-semibold transition-colors hover:text-primary-gold ${
                pathname === "/results" ? "text-primary-gold" : "text-foreground"
              }`}
            >
              Patient Results
            </Link>

            <Link
              href="/skincare-guide"
              className={`text-xs xl:text-sm font-semibold transition-colors hover:text-primary-gold ${
                pathname === "/skincare-guide" ? "text-primary-gold" : "text-foreground"
              }`}
            >
              Skincare Guide
            </Link>

            <Link
              href="/contact"
              className={`text-xs xl:text-sm font-semibold transition-colors hover:text-primary-gold ${
                pathname === "/contact" ? "text-primary-gold" : "text-foreground"
              }`}
            >
              Contact & FAQs
            </Link>
          </nav>

          {/* 3. Far Right Corner of the Header: Call & Book Consultation Buttons */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <a
              href={`tel:${clinicProfile.contact.phone.replace(/\s+/g, '')}`}
              className="hidden sm:flex items-center justify-center p-2.5 rounded-xl border border-border text-foreground hover:border-primary-gold hover:text-primary-gold transition-all shadow-sm"
              title="Call Clinic Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <Link
              href="/#booking"
              onClick={(e) => {
                if (onOpenBooking) {
                  e.preventDefault();
                  onOpenBooking();
                }
              }}
              className="flex items-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-gold to-[#B89728] text-obsidian-900 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Calendar className="w-4 h-4 mr-1.5" />
              Book Consultation
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl liquid-glass border border-white/40 dark:border-white/15 text-foreground hover:text-primary-gold focus:outline-none shadow-sm ml-1"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              className="lg:hidden liquid-glass rounded-3xl mt-3 mx-4 border border-white/50 dark:border-white/15 shadow-2xl px-5 pt-4 pb-7 space-y-4 overflow-hidden backdrop-blur-2xl"
            >
              <div className="flex flex-col space-y-2 pt-1 border-t border-border/40">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-base font-extrabold text-foreground hover:bg-white/50 dark:hover:bg-obsidian-800/80 transition-all"
                >
                  Home
                </Link>
                <Link
                  href="/treatments"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-base font-extrabold text-foreground hover:bg-white/50 dark:hover:bg-obsidian-800/80 transition-all flex justify-between items-center"
                >
                  <span>All Treatments (15+)</span>
                  <Sparkles className="w-4 h-4 text-primary-gold" />
                </Link>
                <div className="pl-6 space-y-2 border-l-2 border-primary/40 my-1">
                  {treatmentsData.slice(0, 4).map((t) => (
                    <Link
                      key={t.id}
                      href={`/treatments/${t.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-semibold text-muted-foreground hover:text-primary-gold py-1"
                    >
                      • {t.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-base font-extrabold text-foreground hover:bg-white/50 dark:hover:bg-obsidian-800/80 transition-all"
                >
                  About Dr. Unnati
                </Link>
                <div className="pl-6 space-y-2 border-l-2 border-primary/40 my-1">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-semibold text-muted-foreground hover:text-primary-gold py-1"
                  >
                    • Clinic & Profile
                  </Link>
                  <Link
                    href="/certificates"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-semibold text-muted-foreground hover:text-primary-gold py-1"
                  >
                    • Certificates & Credentials
                  </Link>
                </div>
                <Link
                  href="/results"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-base font-extrabold text-foreground hover:bg-white/50 dark:hover:bg-obsidian-800/80 transition-all"
                >
                  Before & After Results
                </Link>
                <Link
                  href="/skincare-guide"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-base font-extrabold text-foreground hover:bg-white/50 dark:hover:bg-obsidian-800/80 transition-all"
                >
                  Skincare Guide & Blog
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-base font-extrabold text-foreground hover:bg-white/50 dark:hover:bg-obsidian-800/80 transition-all"
                >
                  Contact & FAQs
                </Link>
              </div>

              <div className="pt-4 border-t border-border/50 space-y-3">
                <Link
                  href="/#booking"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (onOpenBooking) {
                      e.preventDefault();
                      onOpenBooking();
                    }
                  }}
                  className="w-full flex items-center justify-center py-3.5 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-sm shadow-xl"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Instant Consultation
                </Link>
                <a
                  href={`tel:${clinicProfile.contact.phone.replace(/\s+/g, '')}`}
                  className="w-full flex items-center justify-center py-3 rounded-2xl liquid-glass border border-white/40 text-foreground font-bold text-sm hover:border-primary-gold transition-all"
                >
                  <Phone className="w-4 h-4 mr-2 text-secondary-emerald" />
                  Call Clinic ({clinicProfile.contact.phone})
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  }
