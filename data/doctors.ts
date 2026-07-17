export interface Doctor {
  name: string;
  title: string;
  credentials: string[];
  bio: string;
  specialties: string[];
  experience: string;
  awards: string[];
  philosophy: string;
  stats: { label: string; value: string }[];
  consultationTimings: { days: string; time: string }[];
  location: {
    address: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    googleMapsUrl: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
  };
}

export const clinicProfile: Doctor = {
  name: "Dr. Unnati Panchal",
  title: "Chief Clinical Specialist, Laser & Aesthetic Surgeon",
  credentials: [
    "Certified Specialist in Advanced Laser & Aesthetic Surgery",
    "Certified Hair Transplant Surgeon (Bio-FUE™ Gold Standard)",
    "Fellowship in Clinical Aesthetics & Anti-Aging Treatments",
    "Expert in Advanced Skin & Scalp Diagnostic Protocols"
  ],
  bio: "Dr. Unnati Panchal is one of Ahmedabad's most respected and sought-after clinical skin and hair specialists, bringing over 12+ years of intensive clinical and cosmetic experience. Renowned for her meticulous precision, ethical diagnostic approach, and mastery over US-FDA approved laser systems, she has transformed over 15,000+ patient lives. She believes that healthy skin is the foundation of confidence and combines evidence-based clinical skin treatments with state-of-the-art aesthetic technology to deliver natural, long-lasting results.",
  specialties: [
    "Advanced Anti-Aging & Facial Harmonization (Botox & Fillers)",
    "Laser Skin Resurfacing & Pigmentation Toning",
    "GFC & Bio-FUE™ Hair Restoration",
    "Clinical Acne & Deep Scar Revision (MNRF & Subcision)",
    "Pediatric & Clinical Skin Care (Eczema, Psoriasis, Vitiligo)"
  ],
  experience: "12+ Years of Clinical Excellence",
  awards: [
    "Excellence in Clinical Laser Care Award - Gujarat Medical Conference",
    "Best Laser & Skin Clinic in Ahmedabad East (Nikol)",
    "Excellence Award in Advanced Clinical Skin & Laser Therapies",
    "Speaker & Faculty at National Aesthetic & Laser Guild"
  ],
  philosophy: "We never oversell or perform unnecessary cosmetic procedures. Every treatment plan at Dr. Unnati's Skin Clinic is personalized after rigorous digital dermoscopic skin analysis, ensuring scientific safety, transparency, and profound aesthetic enhancement.",
  stats: [
    { label: "Happy Patients Treated", value: "15,000+" },
    { label: "Years of Clinical Mastery", value: "12+" },
    { label: "US-FDA Approved Technologies", value: "10+" },
    { label: "Patient Satisfaction Rate", value: "99.4%" }
  ],
  consultationTimings: [
    { days: "Monday - Saturday (Morning)", time: "10:30 AM - 1:30 PM" },
    { days: "Monday - Saturday (Evening)", time: "5:00 PM - 8:30 PM" },
    { days: "Sunday", time: "By Prior Appointment Only" }
  ],
  location: {
    address: "2nd Floor, Above HDFC Bank, Near Raspan Cross Road",
    area: "Nikol",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "382350",
    googleMapsUrl: "https://maps.google.com"
  },
  contact: {
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    email: "care@drunnatiskinclinic.com"
  }
};
