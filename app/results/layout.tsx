import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After Clinical Results Gallery | Dr. Unnati's Skin & Laser Clinic Nikol",
  description: "View verified clinical before and after results for Diode Laser Hair Reduction, MNRF Acne Scar Revision, Melasma Pigmentation Toning, and Bio-FUE™ Hair Transplants treated by Dr. Unnati Panchal in Nikol, Ahmedabad.",
  keywords: [
    "Before After Laser Hair Removal Indian Skin",
    "Acne Scar Treatment Results Ahmedabad",
    "HydraFacial Before After Nikol",
    "GFC Hair Regrowth Results Gujarat",
    "Bio FUE Hair Transplant Photos Ahmedabad",
    "Dr Unnati Panchal Patient Reviews Results"
  ],
  alternates: {
    canonical: "/results",
  },
  openGraph: {
    title: "Before & After Clinical Transformations | Dr. Unnati's Skin Clinic Nikol",
    description: "Verified patient outcomes achieved with US-FDA cleared lasers and physician-supervised protocols.",
    url: "https://drunnatiskinclinic.com/results",
    type: "website",
  },
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // MedicalObservationalStudy / Review collection JSON-LD graph for clinical verification
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Clinical Before & After Transformations Gallery",
    "description": "Evidence-based dermatological outcomes across 15,000+ patient treatments in Ahmedabad.",
    "url": "https://drunnatiskinclinic.com/results",
    "about": [
      { "@type": "MedicalSpecialty", "name": "Dermatology" },
      { "@type": "MedicalSpecialty", "name": "LaserSurgery" },
      { "@type": "MedicalSpecialty", "name": "Trichology" }
    ],
    "author": {
      "@id": "https://drunnatiskinclinic.com/#physician"
    }
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
