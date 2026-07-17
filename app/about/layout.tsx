import React from "react";
import type { Metadata } from "next";
import { clinicProfile } from "@/data/doctors";

export const metadata: Metadata = {
  title: "About Dr. Unnati Panchal | Cosmetologist & Aesthetic Medicine Expert Nikol",
  description: "Learn about Dr. Unnati Panchal, Cosmetologist & Aesthetic Medicine Expert with 12+ years of aesthetic excellence. Leading cosmetology, laser & trichology expert in Nikol, Ahmedabad.",
  keywords: [
    "Dr Unnati Panchal Biography",
    "Cosmetologist Ahmedabad",
    "Best Cosmetology Doctor in Nikol",
    "Dr Unnati Panchal Qualifications",
    "Aesthetic Medicine Expert Ahmedabad",
    "Top Trichologist Nikol Ahmedabad",
    "Best Laser Skin Expert Gujarat"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Dr. Unnati Panchal | Nikol, Ahmedabad",
    description: "Cosmetologist & Aesthetic Medicine Expert with 12+ years of ethical aesthetic excellence in Ahmedabad East.",
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
        "@type": "Person",
        "@id": "https://drunnatiskinclinic.com/#physician",
        "name": clinicProfile.name,
        "jobTitle": clinicProfile.title,
        "description": "Cosmetologist & Aesthetic Medicine Expert with over 12+ years of cosmetology and aesthetic experience.",
        "worksFor": {
          "@id": "https://drunnatiskinclinic.com/#clinic"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Advanced Fellowship in Clinical Cosmetology & Laser Aesthetics"
        },
        "award": [
          "Excellence Award in Advanced Cosmetology & Laser Therapies",
          "Best Cosmetology & Laser Clinic Award Gujarat",
          "Excellence in Laser Aesthetic Care"
        ],
        "memberOf": [
          {
            "@type": "Organization",
            "name": "Association of Clinical Aesthetics & Cosmetology Specialists"
          }
        ],
        "knowsAbout": [
          "Acne & Acne Scar Revision (MNRF)",
          "Triple Wavelength Diode Laser Hair Reduction",
          "GFC & Bio-FUE Hair Restoration",
          "Clinical HydraFacial Deep Cleansing",
          "Melasma & Pigmentation Toning",
          "Anti-Aging Facial Harmonization"
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
