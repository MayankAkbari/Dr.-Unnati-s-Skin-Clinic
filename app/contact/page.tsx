"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Calendar,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { clinicProfile } from "@/data/doctors";
import { faqsData } from "@/data/faqs";

interface ContactPageProps {
  onOpenBooking?: () => void;
}

export default function ContactPage({ onOpenBooking }: ContactPageProps) {
  const [openFaq, setOpenFaq] = useState<string | null>("gen-1");
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("all");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredFaqs = activeFaqCategory === "all"
    ? faqsData
    : faqsData.filter((f) => f.category === activeFaqCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-glass-pill text-primary-gold font-extrabold text-xs uppercase tracking-wider border border-primary-gold/30 shadow-sm">
            <MapPin className="w-4 h-4 text-primary-gold" />
            <span>Nikol, Ahmedabad Medical Suite</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Get In Touch With <span className="gold-gradient-text">Dr. Unnati&apos;s Care Desk.</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Whether you need a priority appointment slot, pricing transparent estimates, or post-laser guidance, our clinical care coordinators are here to assist you.
          </p>
        </div>

        {/* AEO & GEO Direct Answer Contact Fact Box */}
        <section className="mb-16 p-6 sm:p-8 rounded-3xl bg-obsidian-900 border-2 border-primary-gold/40 shadow-2xl text-white max-w-5xl mx-auto" role="region" aria-label="AI Direct Contact & Address Verification">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="px-3 py-1 rounded-full bg-primary-gold/15 text-primary-gold font-extrabold text-[11px] uppercase tracking-wider border border-primary-gold/30">
                AEO / GEO Verified Contact Profile
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-white">
                How can patients reach Dr. Unnati&apos;s Skin Clinic in Nikol, Ahmedabad?
              </h2>
              <p className="text-xs sm:text-sm text-pearl-100 dark:text-pearl-200 leading-relaxed font-normal">
                Dr. Unnati&apos;s Skin, Hair, Laser & Cosmetic Clinic is located on the <strong className="text-white">2nd Floor, Above HDFC Bank, Near Raspan Cross Road, Nikol, Ahmedabad, Gujarat 382350</strong>. Patients can book priority consultations or request treatment estimates by calling or WhatsApping <strong className="text-primary-gold">+91 98765 43210</strong>. Clinical consultation hours are Monday through Saturday from <strong className="text-white">10:30 AM to 8:30 PM</strong>.
              </p>
            </div>
            <div className="flex-shrink-0 bg-obsidian-800 p-4 rounded-2xl border border-white/10 text-center space-y-1">
              <span className="block text-[11px] uppercase tracking-wider text-primary-gold font-bold">Direct Phone</span>
              <span className="block text-white font-extrabold text-sm">+91 98765 43210</span>
              <span className="block text-[11px] text-secondary-emerald font-bold">Priority Slot Booking</span>
            </div>
          </div>
        </section>

        {/* Contact Info & Direct Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left: Contact Cards & Location Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-9 rounded-3xl bg-obsidian-900 text-white dark:bg-obsidian-900/95 border-2 border-primary-gold/50 shadow-2xl space-y-6 backdrop-blur-2xl relative overflow-hidden">
              <h3 className="text-2xl font-black text-white border-b border-border/20 pb-4">
                Clinic Location & Direct Contacts
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-pearl-100 dark:text-pearl-200">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Main Clinical Center:</strong>
                    <span>{clinicProfile.location.address}, Near Raspan Cross Road, {clinicProfile.location.area}, {clinicProfile.location.city} - {clinicProfile.location.pincode}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-secondary-emerald flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">Appointment Desk / Emergency:</strong>
                    <a href={`tel:${clinicProfile.contact.phone.replace(/\s+/g, '')}`} className="hover:text-primary-gold font-bold">
                      {clinicProfile.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-gold flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">Email Communications:</strong>
                    <span>{clinicProfile.contact.email}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-2 border-t border-border/20">
                  <Clock className="w-5 h-5 text-secondary-emerald flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Consultation Timings:</strong>
                    <span>Mon to Sat: 10:30 AM – 1:30 PM & 5:00 PM – 8:30 PM</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">Sunday by prior emergency surgical booking only</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${clinicProfile.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Dr. Unnati's Skin Clinic, I would like to inquire about appointment timings and location directions.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl bg-[#25D366] text-white font-extrabold text-sm flex items-center justify-center shadow-xl hover:bg-[#20b858] hover:scale-[1.02] transition-all"
                >
                  <MessageSquare className="w-4 h-4 mr-2" /> Message Clinic on WhatsApp
                </a>
                <button
                  onClick={onOpenBooking}
                  className="w-full py-4 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-sm flex items-center justify-center shadow-xl hover:scale-[1.02] transition-all"
                >
                  <Calendar className="w-4 h-4 mr-2" /> Book Instant Consultation
                </button>
              </div>
            </div>

            {/* Interactive Location Guidance Card */}
            <div className="p-6 sm:p-7 rounded-3xl liquid-glass-card border-2 border-white/60 dark:border-white/20 space-y-3 text-xs shadow-md">
              <h4 className="font-extrabold text-sm text-foreground flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-secondary-emerald" />
                Landmark & Parking Details
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                We are conveniently situated above HDFC Bank on the 2nd Floor, offering elevator access and dedicated patient parking right below the clinic building in Nikol.
              </p>
            </div>
          </div>

          {/* Right: Direct Inquiry Form (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl liquid-glass-card border-2 border-white/60 dark:border-white/20 shadow-xl relative overflow-hidden">
              <h3 className="text-2xl font-extrabold text-foreground mb-2">
                Send A Direct Clinical Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-8">
                Fill out the form below. A senior dermatological care coordinator will respond with exact procedure estimates and slot availability within 2 hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-secondary-emerald/10 border border-secondary-emerald text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-secondary-emerald mx-auto" />
                  <h4 className="text-xl font-bold text-foreground">Inquiry Received & Priority Logged!</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                    Thank you. We have forwarded your message directly to Dr. Unnati&apos;s medical reception desk. You will receive a WhatsApp notification shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-primary-gold text-obsidian-900 font-bold text-xs"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="E.g., Priya Patel"
                        className="w-full px-4 py-3.5 rounded-2xl border border-white/40 liquid-glass text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1">
                        Mobile Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="E.g., +91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-2xl border border-white/40 liquid-glass text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="For detailed clinical estimates & brochures..."
                      className="w-full px-4 py-3.5 rounded-2xl border border-white/40 liquid-glass text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1">
                      Primary Concern / Procedure Inquiry *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3.5 rounded-2xl border border-white/40 liquid-glass text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold shadow-inner"
                    >
                      <option value="">-- Select Procedure Inquiry --</option>
                      <option value="acne">Cystic Acne & MNRF Scar Revision</option>
                      <option value="laser">Painless Diode Laser Hair Reduction</option>
                      <option value="hydrafacial">Signature US-FDA HydraFacial MD®</option>
                      <option value="hair">GFC / Bio-FUE™ Hair Transplantation</option>
                      <option value="melasma">Q-Switched Laser Melasma & Toning</option>
                      <option value="anti-aging">Liquid Facelift (Botox / Dermal Fillers)</option>
                      <option value="other">Other Dermatological Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1">
                      Additional Notes / Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe how long you have had this concern or any past treatments..."
                      className="w-full p-4 rounded-2xl border border-white/40 liquid-glass text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold shadow-inner"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4.5 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-base shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center"
                    >
                      <span>Submit Direct Clinical Inquiry</span>
                      <Send className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Comprehensive Patient FAQs Accordion Section */}
        <div id="faqs" className="mt-20 pt-16 border-t border-border/80 max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-glass-pill text-secondary-emerald font-extrabold text-xs uppercase tracking-wider border border-secondary-emerald/30 shadow-sm">
              <HelpCircle className="w-4 h-4 text-secondary-emerald" />
              <span>Patient Knowledge Center</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Everything you need to know about safety, pricing transparency, and preparation before visiting Dr. Unnati Panchal.
            </p>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {[
                { id: "all", label: "All Questions" },
                { id: "general", label: "Consultation & Booking" },
                { id: "lasers", label: "Laser Hair & Toning" },
                { id: "acne", label: "Acne Scars & Peels" },
                { id: "hair", label: "Bio-FUE™ & GFC Hair" },
                { id: "safety", label: "Hygiene & Sterility" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveFaqCategory(c.id)}
                  className={`px-4.5 py-2.5 rounded-2xl text-xs font-extrabold transition-all ${
                    activeFaqCategory === c.id
                      ? "liquid-glass-btn text-obsidian-900 shadow-liquid-gold scale-105 border-white"
                      : "liquid-glass hover:border-primary-gold/50 text-foreground"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="rounded-2xl border border-white/40 overflow-hidden liquid-glass dark:bg-obsidian-900/80 shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-foreground flex items-center justify-between hover:text-primary-gold transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0 text-primary-gold" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0 text-muted-foreground" />
                  )}
                </button>
                {openFaq === faq.id && (
                  <div className="px-5 pb-6 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4 bg-muted/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
