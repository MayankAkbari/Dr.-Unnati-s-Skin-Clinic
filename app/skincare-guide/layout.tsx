import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Skincare Guides & Specialist Advice | Dr. Unnati's Clinical Skin Clinic Nikol",
  description: "Read evidence-based clinical guides on acne care, post-laser SPF protection, hair fall remedies, and Clinical HydraFacial® maintenance authored by Clinical Specialist Dr. Unnati Panchal.",
  keywords: [
    "Skincare Tips by Specialist Ahmedabad",
    "Acne Scar Care Guide",
    "Post Laser Hair Removal Care",
    "How to Stop Hair Fall Specialist Advice",
    "Sunscreen SPF Guidance Indian Skin",
    "Dr Unnati Panchal Articles",
    "Clinical Skincare Blog Ahmedabad"
  ],
  alternates: {
    canonical: "/skincare-guide",
  },
  openGraph: {
    title: "Clinical Skincare & Laser Knowledge Base | Dr. Unnati's Skin Clinic Nikol",
    description: "Expert clinical articles, recovery tips, and clinical FAQs by Dr. Unnati Panchal.",
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
    "description": "Medically reviewed guidance on clinical skin procedures, laser care, and trichology.",
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
