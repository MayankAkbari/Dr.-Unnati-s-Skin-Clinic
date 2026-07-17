import React from "react";
import type { Metadata } from "next";
import { clinicProfile } from "@/data/doctors";

export const metadata: Metadata = {
  title: "About Dr. Unnati Panchal | Chief Clinical Specialist & Laser Surgeon Nikol",
  description: "Learn about Dr. Unnati Panchal, Clinical Skin & Laser Specialist with 12+ years of clinical excellence. Leading skin, laser & trichology specialist in Nikol, Ahmedabad.",
  keywords: [
    "Dr Unnati Panchal Biography",
    "Clinical Skin Specialist Ahmedabad",
    "Best Skin Specialist Doctor in Nikol",
    "Dr Unnati Panchal Qualifications",
    "Skin & Laser Specialist Ahmedabad",
    "Top Trichologist Nikol Ahmedabad",
    "Best Laser Skin Specialist Gujarat"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Dr. Unnati Panchal | Nikol, Ahmedabad",
    description: "Chief Clinical Specialist & Laser Surgeon with 12+ years of ethical clinical excellence in Ahmedabad East.",
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
        "description": "Clinical Specialist, Cosmetologist, and Trichologist with over 12+ years of clinical and surgical experience.",
        "medicalSpecialty": ["SkinCare", "CosmeticProcedures", "Trichology", "LaserSurgery"],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Advanced Residency in Clinical Skin & Laser Therapeutics"
        },
        "award": [
          "Excellence Award in Advanced Clinical Skin & Laser Therapies",
          "Best Clinical Skin Specialist Award Gujarat",
          "Excellence in Laser Aesthetic Surgery"
        ],
        "memberOf": [
          {
            "@type": "MedicalOrganization",
            "name": "Association of Clinical Aesthetics & Laser Specialists"
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
