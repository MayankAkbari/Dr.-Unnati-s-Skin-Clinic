import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosmetology & Skincare Guides | Dr. Unnati's Skin Clinic Nikol",
  description: "Read evidence-based guides on acne care, post-laser SPF protection, hair fall remedies, and Clinical HydraFacial® maintenance authored by Cosmetologist & Aesthetic Medicine Expert Dr. Unnati Panchal.",
  keywords: [
    "Skincare Tips by Cosmetologist Ahmedabad",
    "Acne Scar Care Guide",
    "Post Laser Hair Removal Care",
    "How to Stop Hair Fall Specialist Advice",
    "Sunscreen SPF Guidance Indian Skin",
    "Dr Unnati Panchal Articles",
    "Cosmetology & Aesthetic Blog Ahmedabad"
  ],
  alternates: {
    canonical: "/skincare-guide",
  },
  openGraph: {
    title: "Cosmetology & Skincare Knowledge Base | Dr. Unnati's Skin Clinic Nikol",
    description: "Expert cosmetology articles, recovery tips, and FAQs by Cosmetologist Dr. Unnati Panchal.",
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
    "name": "Dr. Unnati's Cosmetology & Skincare Knowledge Base",
    "description": "Expert guidance on cosmetology skin procedures, laser care, and hair aesthetics.",
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
