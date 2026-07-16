import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Skincare Guides & Dermatological Advice | Dr. Unnati's MD Skin Clinic Nikol",
  description: "Read evidence-based clinical guides on acne care, post-laser SPF protection, hair fall remedies, and HydraFacial maintenance authored by Gold Medalist Dr. Unnati Panchal (MBBS, MD Dermatology).",
  keywords: [
    "Skincare Tips by Dermatologist Ahmedabad",
    "Acne Scar Care Guide",
    "Post Laser Hair Removal Care",
    "How to Stop Hair Fall Dermatologist Advice",
    "Sunscreen SPF Guidance Indian Skin",
    "Dr Unnati Panchal Articles",
    "Medical Skincare Blog Ahmedabad"
  ],
  alternates: {
    canonical: "/skincare-guide",
  },
  openGraph: {
    title: "Clinical Skincare & Laser Knowledge Base | Dr. Unnati's Skin Clinic Nikol",
    description: "Expert dermatological articles, recovery tips, and clinical FAQs by Dr. Unnati Panchal.",
    url: "https://drunnatiskinclinic.com/skincare-guide",
    type: "website",
  },
};

export default function SkincareGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Blog / ScholarlyArticle Collection JSON-LD for AEO & GEO extraction
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Dr. Unnati's Clinical Skincare Knowledge Base",
    "description": "Medically reviewed guidance on dermatological procedures, laser skin care, and trichology.",
    "url": "https://drunnatiskinclinic.com/skincare-guide",
    "author": {
      "@id": "https://drunnatiskinclinic.com/#physician"
    },
    "publisher": {
      "@id": "https://drunnatiskinclinic.com/#clinic"
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
