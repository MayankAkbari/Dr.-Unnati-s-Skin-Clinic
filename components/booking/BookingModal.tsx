"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  Phone,
  User,
  MessageSquare,
  ShieldAlert,
  ArrowRight,
  ArrowLeft,
  Check
} from "lucide-react";
import { categoriesList, treatmentsData } from "@/data/treatments";
import { clinicProfile } from "@/data/doctors";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Valid 10-digit mobile number required"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  category: z.string().min(1, "Please select a treatment category"),
  treatmentId: z.string().min(1, "Please pick a specific treatment"),
  preferredDate: z.string().min(1, "Please choose a preferred date"),
  preferredTimeSlot: z.string().min(1, "Please pick a time slot"),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatmentId?: string;
}

export default function BookingModal({ isOpen, onClose, defaultTreatmentId }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      category: "all",
      treatmentId: defaultTreatmentId || treatmentsData[0].id,
      preferredDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
      preferredTimeSlot: "Morning (11:00 AM - 1:00 PM)",
      notes: "",
    },
  });

  const watchTreatmentId = watch("treatmentId");
  const watchTimeSlot = watch("preferredTimeSlot");
  const watchValues = watch();

  const selectedTreatmentObj = treatmentsData.find((t) => t.id === watchTreatmentId) || treatmentsData[0];

  const filteredTreatments = selectedCategory === "all"
    ? treatmentsData
    : treatmentsData.filter((t) => t.category === selectedCategory);

  const onSubmit = (data: BookingFormValues) => {
    setStep(4);
  };

  const openWhatsAppConfirmation = () => {
    const text = `Hello Dr. Unnati's Skin Clinic Team,\nI would like to confirm my consultation booking:\n\n👤 *Patient:* ${watchValues.fullName}\n📞 *Phone:* ${watchValues.phone}\n✨ *Treatment:* ${selectedTreatmentObj.title}\n📅 *Preferred Date:* ${watchValues.preferredDate}\n⏰ *Time Slot:* ${watchValues.preferredTimeSlot}\n💬 *Notes:* ${watchValues.notes || "None"}\n\nPlease confirm my slot. Thank you!`;
    const url = `https://wa.me/${clinicProfile.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-900/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl rounded-3xl liquid-glass dark:bg-obsidian-900/95 border-2 border-primary-gold/50 shadow-2xl overflow-hidden z-10 backdrop-blur-2xl"
        >
          {/* Header */}
          <div className="bg-obsidian-900/90 text-white p-6 sm:p-8 border-b border-white/20 flex items-center justify-between backdrop-blur-md">
            <div className="flex items-center space-x-3.5">
              <div className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Dr. Unnati's Skin Clinic Logo"
                  width={140}
                  height={50}
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <div className="hidden md:block w-px h-10 bg-white/20" />
              <div className="hidden sm:flex items-center space-x-3">
                <Image
                  src="/dr-unnati-suthar.jpeg"
                  alt="Dr. Unnati Panchal"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover object-top border-2 border-primary-gold flex-shrink-0 shadow-md"
                />
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-white leading-tight">
                    {step === 4 ? "Consultation Confirmed!" : "Priority Appointment Reservation"}
                  </h3>
                  <p className="text-xs text-primary-champagne font-bold">
                    Dr. Unnati Panchal • Cosmetologist & Aesthetic Medicine Expert
                  </p>
                </div>
              </div>
              <div className="sm:hidden">
                <h3 className="font-extrabold text-lg sm:text-xl text-white leading-tight">
                  {step === 4 ? "Consultation Confirmed!" : "Priority Appointment Reservation"}
                </h3>
                <p className="text-xs text-primary-champagne font-bold">
                  Dr. Unnati Panchal • Cosmetologist
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-obsidian-800 text-muted-foreground hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Step Progress Tracker (Steps 1 to 3) */}
          {step < 4 && (
            <div className="bg-muted/40 dark:bg-obsidian-800/80 px-6 py-3.5 border-b border-border/60 flex justify-between items-center text-xs font-bold text-muted-foreground backdrop-blur-sm">
              <div className={`flex items-center ${step >= 1 ? "text-primary-gold font-extrabold" : ""}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 text-[11px] ${step >= 1 ? "bg-primary-gold text-obsidian-900" : "bg-muted text-muted-foreground"}`}>1</span>
                <span>Select Treatment</span>
              </div>
              <div className="w-8 h-px bg-border" />
              <div className={`flex items-center ${step >= 2 ? "text-primary-gold font-extrabold" : ""}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 text-[11px] ${step >= 2 ? "bg-primary-gold text-obsidian-900" : "bg-muted text-muted-foreground"}`}>2</span>
                <span>Date & Time</span>
              </div>
              <div className="w-8 h-px bg-border" />
              <div className={`flex items-center ${step >= 3 ? "text-primary-gold font-extrabold" : ""}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 text-[11px] ${step >= 3 ? "bg-primary-gold text-obsidian-900" : "bg-muted text-muted-foreground"}`}>3</span>
                <span>Patient Details</span>
              </div>
            </div>
          )}

          {/* Form Body */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            
            {/* STEP 1: Select Treatment */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                <div>
                  <label className="text-sm font-bold text-foreground block mb-3">
                    Step 1: Choose Treatment Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categoriesList.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                          selectedCategory === cat.id
                            ? "liquid-glass-btn text-obsidian-900 shadow-sm scale-105 border-white"
                            : "liquid-glass hover:border-primary-gold/50 text-foreground"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-foreground block mb-3">
                    Pick Specific Procedure / Area of Concern
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-1">
                    {filteredTreatments.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => setValue("treatmentId", t.id)}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          watchTreatmentId === t.id
                            ? "border-primary-gold liquid-glass dark:bg-primary-gold/15 shadow-md scale-[1.01]"
                            : "border-white/40 hover:border-primary-gold/50 liquid-glass"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-foreground">{t.title}</span>
                          {watchTreatmentId === t.id && (
                            <CheckCircle2 className="w-4 h-4 text-primary-gold flex-shrink-0" />
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 line-clamp-1">
                          {t.duration} • {t.downtime}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end border-t border-border">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3.5 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-sm flex items-center hover:scale-[1.02] transition-all shadow-lg"
                  >
                    Next: Pick Date & Time <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Pick Date & Time Slot */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <label className="text-sm font-bold text-foreground block mb-2">
                    Step 2: Choose Preferred Consultation Date
                  </label>
                  <input
                    type="date"
                    {...register("preferredDate")}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3.5 rounded-2xl border border-white/40 liquid-glass text-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-gold shadow-inner"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-foreground block mb-3">
                    Preferred Time Slot
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Morning Slot (10:30 AM - 12:00 PM)",
                      "Midday Slot (12:00 PM - 1:30 PM)",
                      "Evening Slot (5:00 PM - 6:30 PM)",
                      "Late Evening (6:30 PM - 8:30 PM)"
                    ].map((slot) => (
                      <div
                        key={slot}
                        onClick={() => setValue("preferredTimeSlot", slot)}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                          watchTimeSlot === slot
                            ? "border-primary-gold liquid-glass dark:bg-primary-gold/15 font-extrabold text-foreground shadow-md"
                            : "border-white/40 text-muted-foreground hover:border-primary-gold/50 liquid-glass"
                        }`}
                      >
                        <span className="text-xs sm:text-sm">{slot}</span>
                        {watchTimeSlot === slot && <Check className="w-4 h-4 text-primary-gold" />}
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-2">
                    Note: Exact appointment time will be confirmed by clinic receptionist via phone/WhatsApp within 30 minutes.
                  </p>
                </div>

                <div className="pt-4 flex justify-between border-t border-border">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-3.5 rounded-2xl liquid-glass border border-white/40 text-foreground font-extrabold text-sm flex items-center hover:border-primary-gold transition-all"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-3.5 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-sm flex items-center hover:scale-[1.02] transition-all shadow-lg"
                  >
                    Next: Patient Information <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Patient Details & Medical Notes */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-3.5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="E.g., Mayank Sharma"
                        {...register("fullName")}
                        className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-white/40 liquid-glass text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold shadow-inner"
                      />
                    </div>
                    {errors.fullName && <p className="text-destructive text-xs mt-1 font-semibold">{errors.fullName.message}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-muted-foreground" />
                      <input
                        type="tel"
                        placeholder="E.g., 63514 67025"
                        {...register("phone")}
                        className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-white/40 liquid-glass text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold shadow-inner"
                      />
                    </div>
                    {errors.phone && <p className="text-destructive text-xs mt-1 font-semibold">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="For appointment confirmation receipt..."
                    {...register("email")}
                    className="w-full px-4 py-3.5 rounded-2xl border border-white/40 liquid-glass text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold shadow-inner"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1">
                    Any Specific Skin / Medical Concerns?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell Dr. Unnati about how long you have had this concern, any past treatments, or active allergies..."
                    {...register("notes")}
                    className="w-full p-4 rounded-2xl border border-white/40 liquid-glass text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold shadow-inner"
                  />
                </div>

                <div className="p-3.5 rounded-2xl bg-secondary-emerald/10 border border-secondary-emerald/30 text-xs text-foreground flex items-start space-x-2.5">
                  <ShieldAlert className="w-4 h-4 text-secondary-emerald flex-shrink-0 mt-0.5" />
                  <span>
                    Your privacy is 100% protected. Consultation slot reservation is verified directly by our medical reception desk.
                  </span>
                </div>

                <div className="pt-4 flex justify-between border-t border-border">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-3.5 rounded-2xl liquid-glass border border-white/40 text-foreground font-extrabold text-sm flex items-center hover:border-primary-gold transition-all"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                  </button>
                  <button
                    type="submit"
                    className="px-7 py-3.5 rounded-2xl liquid-glass-btn text-obsidian-900 font-extrabold text-sm flex items-center shadow-xl hover:scale-[1.02] transition-all"
                  >
                    Confirm Consultation Slot <CheckCircle2 className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Booking Confirmed & Summary */}
            {step === 4 && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 text-center py-4">
                <div className="w-16 h-16 rounded-full bg-secondary-emerald/20 text-secondary-emerald flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-foreground">Consultation Slot Reserved!</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-md mx-auto">
                    We have logged your appointment request for <strong className="text-foreground">{selectedTreatmentObj.title}</strong> on <strong className="text-foreground">{watchValues.preferredDate}</strong>.
                  </p>
                </div>

                <div className="liquid-glass dark:bg-obsidian-800/80 p-6 rounded-2xl border border-primary-gold/40 text-left space-y-2.5 max-w-md mx-auto text-xs sm:text-sm shadow-xl">
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted-foreground">Patient Name:</span>
                    <span className="font-bold text-foreground">{watchValues.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted-foreground">Mobile (WhatsApp):</span>
                    <span className="font-bold text-foreground">{watchValues.phone}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted-foreground">Procedure:</span>
                    <span className="font-bold text-primary-gold">{selectedTreatmentObj.title}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted-foreground">Time Window:</span>
                    <span className="font-bold text-foreground">{watchValues.preferredTimeSlot}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-muted-foreground">Clinic Location:</span>
                    <span className="font-bold text-foreground">Nikol, Ahmedabad</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={openWhatsAppConfirmation}
                    className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#25D366] text-white font-extrabold text-sm flex items-center justify-center shadow-xl hover:bg-[#20b858] hover:scale-[1.02] transition-all"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" /> Send via WhatsApp for Instant VIP Check-In
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
