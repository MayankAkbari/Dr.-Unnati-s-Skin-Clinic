import React from "react";
import type { Metadata } from "next";
import { treatmentsData } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Dermatological & US-FDA Laser Treatments Directory | Dr. Unnati's Skin Clinic Nikol",
  description: "Explore our comprehensive directory of 100% US-FDA cleared dermatology, laser hair reduction, HydraFacial MD®, MNRF acne scar revision, and Bio-FUE™ hair transplant procedures supervised by MD Gold Medalist Dr. Unnati Panchal in Nikol, Ahmedabad.",
  keywords: [
    "Dermatology Treatments Nikol Ahmedabad",
    "Laser Hair Removal Cost Ahmedabad",
    "HydraFacial MD Price Nikol",
    "MNRF Acne Scar Treatment Gujarat",
    "Bio FUE Hair Transplant Nikol",
    "Chemical Peel Treatment Ahmedabad East",
    "GFC Hair Regrowth Cost Gujarat",
    "US FDA Approved Laser Clinic Ahmedabad"
  ],
  alternates: {
    canonical: "/treatments",
  },
  openGraph: {
    title: "All Treatments Directory | Dr. Unnati's Skin Clinic Nikol, Ahmedabad",
    description: "Complete clinical portfolio of evidence-based laser and skin procedures by Dr. Unnati Panchal.",
    url: "https://drunnatiskinclinic.com/treatments",
    type: "website",
  },
};

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ItemList & MedicalProcedure structured graph for SEO & AEO indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Dr. Unnati's Clinical Dermatology & Laser Procedures Portfolio",
    "description": "Evidence-based medical, surgical, and cosmetic dermatology procedures.",
    "url": "https://drunnatiskinclinic.com/treatments",
    "numberOfItems": treatmentsData.length,
    "itemListElement": treatmentsData.map((t, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "MedicalProcedure",
        "@id": `https://drunnatiskinclinic.com/treatments/${t.slug}#procedure`,
        "name": t.title,
        "description": t.description,
        "url": `https://drunnatiskinclinic.com/treatments/${t.slug}`,
        "procedureType": t.category === "laser" ? "NoninvasiveProcedure" : "PercutaneousProcedure",
        "bodyLocation": t.category === "hair" ? "Scalp" : "Skin / Facial Dermis",
        "status": "https://schema.org/EventRescheduled"
      }
    }))
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
