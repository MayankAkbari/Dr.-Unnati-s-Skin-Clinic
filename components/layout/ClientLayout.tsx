"use client";

import React, { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import BookingModal from "@/components/booking/BookingModal";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import { clinicProfile } from "@/data/doctors";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (treatmentId?: string) => {
    setSelectedTreatmentId(treatmentId);
    setBookingModalOpen(true);
  };

  const openWhatsAppDirect = () => {
    const text = `Hello Dr. Unnati's Skin Clinic,\nI visited your website and would like to inquire about consultation and laser treatment options. Please guide me.`;
    const url = `https://wa.me/${clinicProfile.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-background text-foreground relative">
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      
      <main className="flex-grow">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              onOpenBooking: handleOpenBooking,
            });
          }
          return child;
        })}
      </main>

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultTreatmentId={selectedTreatmentId}
      />

      {/* Floating Action Bar / WhatsApp & Consultation Capsule */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3.5">
        <button
          onClick={() => handleOpenBooking()}
          className="hidden sm:flex items-center px-6 py-3.5 rounded-full liquid-glass-btn text-obsidian-900 font-extrabold text-xs shadow-2xl hover:scale-105 active:scale-95 transition-all border-2 border-white/80 animate-bounce"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Quick Consultation Slot
        </button>

        <div className="p-1.5 rounded-full liquid-glass border border-white/50 dark:border-white/20 shadow-2xl backdrop-blur-2xl flex items-center group">
          <button
            onClick={openWhatsAppDirect}
            className="flex items-center space-x-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#1ebe5d] text-white font-extrabold text-xs sm:text-sm shadow-lg hover:scale-[1.03] active:scale-95 transition-all border border-white/30 relative overflow-hidden"
            title="Chat directly with Clinic Care Team on WhatsApp"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            <span>Chat on WhatsApp</span>
            <span className="w-2 h-2 rounded-full bg-white animate-ping ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
