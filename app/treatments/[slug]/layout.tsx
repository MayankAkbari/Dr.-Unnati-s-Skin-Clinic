import React, { use } from "react";
import type { Metadata } from "next";
import { treatmentsData } from "@/data/treatments";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const treatment = treatmentsData.find((t) => t.slug === resolvedParams.slug);

  if (!treatment) {
    return {
      title: "Treatment Not Found | Dr. Unnati's Skin Clinic",
    };
  }

  const title = `${treatment.title} in Nikol, Ahmedabad | Dr. Unnati's Skin & Laser Clinic`;
  const description = `${treatment.description} Supervised by Gold Medalist Dr. Unnati Panchal (MBBS, MD Dermatology). Duration: ${treatment.duration}. Expected Downtime: ${treatment.downtime}.`;

  return {
    title,
    description,
    keywords: [
      `${treatment.title} Nikol Ahmedabad`,
      `Best ${treatment.title} Doctor Ahmedabad East`,
      `${treatment.title} Cost Ahmedabad`,
      `${treatment.title} Procedure Gujarat`,
      `Dr Unnati Panchal ${treatment.title}`,
      "US FDA Approved Laser Clinic Nikol"
    ],
    alternates: {
      canonical: `/treatments/${treatment.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://drunnatiskinclinic.com/treatments/${treatment.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function TreatmentSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const treatment = treatmentsData.find((t) => t.slug === resolvedParams.slug);

  if (!treatment) {
    return <>{children}</>;
  }

  // Multi-schema graph for specific procedure: MedicalProcedure + FAQPage + BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://drunnatiskinclinic.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Treatments",
            "item": "https://drunnatiskinclinic.com/treatments"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": treatment.title,
            "item": `https://drunnatiskinclinic.com/treatments/${treatment.slug}`
          }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "@id": `https://drunnatiskinclinic.com/treatments/${treatment.slug}#procedure`,
        "name": treatment.title,
        "description": treatment.description,
        "url": `https://drunnatiskinclinic.com/treatments/${treatment.slug}`,
        "procedureType": treatment.category === "laser" ? "NoninvasiveProcedure" : "PercutaneousProcedure",
        "bodyLocation": treatment.category === "hair" ? "Scalp" : "Skin / Facial Dermis",
        "preparation": `Initial 3D Digital Dermoscopy diagnosis by Dr. Unnati Panchal. Duration: ${treatment.duration}.`,
        "followup": `Post-procedure recovery protocol: ${treatment.downtime}. Sunscreen SPF 50+ mandatory.`,
        "status": "https://schema.org/EventRescheduled"
      },
      {
        "@type": "FAQPage",
        "@id": `https://drunnatiskinclinic.com/treatments/${treatment.slug}#faq`,
        "mainEntity": treatment.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
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
