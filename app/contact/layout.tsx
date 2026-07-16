import React from "react";
import type { Metadata } from "next";
import { clinicProfile } from "@/data/doctors";

export const metadata: Metadata = {
  title: "Contact & Book Consultation | Dr. Unnati's Skin & Laser Clinic Nikol, Ahmedabad",
  description: "Schedule your priority clinical consultation with Gold Medalist Dermatologist Dr. Unnati Panchal. Located on 2nd Floor, Above HDFC Bank, Near Raspan Cross Road, Nikol, Ahmedabad (382350). Call +91 98765 43210.",
  keywords: [
    "Contact Dr Unnati Panchal",
    "Skin Clinic Address Nikol Ahmedabad",
    "Dermatologist Phone Number Nikol",
    "Book Appointment Dr Unnati Skin Clinic",
    "Skin Specialist Near Raspan Cross Road Nikol",
    "Best Laser Clinic Nikol Contact"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Book Consultation | Dr. Unnati's Skin Clinic Nikol",
    description: "Connect with Ahmedabad East's leading clinical dermatology center. Priority consultation booking available.",
    url: "https://drunnatiskinclinic.com/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ContactPage & LocalBusiness/MedicalClinic JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://drunnatiskinclinic.com/contact#page",
        "url": "https://drunnatiskinclinic.com/contact",
        "name": "Contact Dr. Unnati's Skin, Hair & Laser Clinic",
        "mainEntity": {
          "@id": "https://drunnatiskinclinic.com/#clinic"
        }
      },
      {
        "@type": "MedicalClinic",
        "@id": "https://drunnatiskinclinic.com/#clinic",
        "name": "Dr. Unnati's Skin, Hair, Laser & Cosmetic Clinic",
        "telephone": clinicProfile.contact.phone,
        "email": clinicProfile.contact.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": clinicProfile.location.address,
          "addressLocality": clinicProfile.location.area,
          "addressRegion": clinicProfile.location.city,
          "postalCode": clinicProfile.location.pincode,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "23.0487",
          "longitude": "72.6682"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:30",
            "closes": "20:30"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
