import React from "react";
import type { Metadata } from "next";
import { clinicProfile } from "@/data/doctors";

export const metadata: Metadata = {
  title: "About Dr. Unnati Panchal (MBBS, MD Dermatology Gold Medalist) | Chief Dermatologist Nikol",
  description: "Learn about Dr. Unnati Panchal, Gold Medalist MD Dermatologist with 12+ years of clinical excellence. Member of IADVL and Medical Council of India. Leading skin, laser & trichology specialist in Nikol, Ahmedabad.",
  keywords: [
    "Dr Unnati Panchal Biography",
    "MD Dermatologist Gold Medalist Ahmedabad",
    "Best Skin Specialist Doctor in Nikol",
    "Dr Unnati Panchal Qualifications",
    "IADVL Dermatologist Ahmedabad",
    "Top Trichologist Nikol Ahmedabad",
    "Best Laser Skin Specialist Gujarat"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Dr. Unnati Panchal (MBBS, MD Gold Medalist) | Nikol, Ahmedabad",
    description: "Chief Dermatologist & Laser Surgeon with 12+ years of ethical clinical excellence in Ahmedabad East.",
    url: "https://drunnatiskinclinic.com/about",
    type: "profile",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ProfilePage & Physician E-E-A-T JSON-LD structured data for GEO LLM citations
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://drunnatiskinclinic.com/about#profile",
        "mainEntity": {
          "@id": "https://drunnatiskinclinic.com/#physician"
        }
      },
      {
        "@type": "Physician",
        "@id": "https://drunnatiskinclinic.com/#physician",
        "name": clinicProfile.name,
        "jobTitle": clinicProfile.title,
        "description": "Gold Medalist MD Dermatologist, Cosmetologist, and Trichologist with over 12+ years of clinical and surgical experience.",
        "medicalSpecialty": ["Dermatology", "CosmeticDermatology", "Trichology", "LaserSurgery"],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Top Medical Residency - Gold Medalist in MD Dermatology"
        },
        "award": [
          "Gold Medalist - MD Dermatology",
          "Best Clinical Dermatologist Award Gujarat",
          "Excellence in Laser Aesthetic Surgery"
        ],
        "memberOf": [
          {
            "@type": "MedicalOrganization",
            "name": "Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)"
          },
          {
            "@type": "MedicalOrganization",
            "name": "Medical Council of India (MCI)"
          }
        ],
        "worksFor": {
          "@id": "https://drunnatiskinclinic.com/#clinic"
        },
        "knowsAbout": [
          "Acne & Acne Scar Revision (MNRF)",
          "Triple Wavelength Diode Laser Hair Reduction",
          "Bio-FUE Hair Transplantation",
          "HydraFacial MD Deep Cleansing",
          "Melasma & Pigmentation Toning",
          "Anti-Aging Liquid Facelifts"
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
