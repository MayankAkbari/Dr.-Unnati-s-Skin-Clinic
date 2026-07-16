"use client";

import React from "react";
import HeroSection from "@/components/ui/HeroSection";
import TreatmentCategoryGrid from "@/components/home/TreatmentCategoryGrid";
import DoctorShowcaseSection from "@/components/home/DoctorShowcaseSection";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import BookingCTA from "@/components/home/BookingCTA";

interface HomePageProps {
  onOpenBooking?: (treatmentId?: string) => void;
}

export default function HomePage({ onOpenBooking }: HomePageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection onOpenBooking={() => onOpenBooking && onOpenBooking()} />
      <TreatmentCategoryGrid onOpenBooking={(id) => onOpenBooking && onOpenBooking(id)} />
      <DoctorShowcaseSection onOpenBooking={() => onOpenBooking && onOpenBooking()} />
      <BeforeAfterSlider />
      <TestimonialsCarousel />
      <BookingCTA onOpenBooking={() => onOpenBooking && onOpenBooking()} />
    </div>
  );
}
