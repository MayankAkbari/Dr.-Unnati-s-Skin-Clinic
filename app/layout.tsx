import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { clinicProfile } from "@/data/doctors";
import { faqsData } from "@/data/faqs";

export const metadata: Metadata = {
  metadataBase: new URL("https://drunnatiskinclinic.com"),
  title: {
    default: "Dr. Unnati's Skin, Hair, Laser & Cosmetic Clinic | Best Skin & Laser Clinic in Nikol, Ahmedabad",
    template: "%s | Dr. Unnati's Clinical Skin & Laser Clinic Nikol, Ahmedabad"
  },
  description: "Experience world-class cosmetology skin care, US-FDA approved laser hair reduction, Clinical HydraFacial®, MNRF acne scar revision, and GFC/Bio-FUE™ hair restoration led by Cosmetologist & Aesthetic Medicine Expert Dr. Unnati Panchal in Nikol, Ahmedabad.",
  keywords: [
    "Dr Unnati Panchal",
    "Best Skin Clinic in Nikol Ahmedabad",
    "Best Skin & Laser Clinic in Nikol Ahmedabad",
    "Top Skin Specialist in Ahmedabad East",
    "Laser Hair Removal Nikol Ahmedabad",
    "Clinical HydraFacial Nikol",
    "Acne Scar Treatment Ahmedabad",
    "MNRF Microneedling Nikol",
    "GFC Hair Treatment Ahmedabad",
    "Bio FUE Hair Transplant Gujarat",
    "Botox Fillers Ahmedabad East",
    "Skin Specialist Near Raspan Cross Road Nikol",
    "Advanced Clinical Skin Specialist Gujarat"
  ],
  authors: [{ name: "Dr. Unnati Panchal (Advanced Clinical Skin Specialist)", url: "https://drunnatiskinclinic.com/about" }],
  creator: "Dr. Unnati Panchal",
  publisher: "Dr. Unnati's Skin, Hair, Laser & Cosmetic Clinic",
  category: "Clinical Care / Skin & Aesthetics",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr. Unnati's Skin, Hair, Laser & Cosmetic Clinic | Best Skin Clinic in Nikol, Ahmedabad",
    description: "Personalized, ethical clinical skin care and advanced US-FDA laser treatments by Dr. Unnati Panchal. Book priority consultation today.",
    url: "https://drunnatiskinclinic.com",
    siteName: "Dr. Unnati's Skin & Laser Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Unnati's Skin, Hair, Laser & Cosmetic Clinic in Nikol, Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Unnati's Skin & Laser Clinic | Nikol, Ahmedabad",
    description: "Clinical Skin Specialist Dr. Unnati Panchal offering US-FDA laser, skin & hair treatments in Nikol, Ahmedabad.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Comprehensive JSON-LD Structured Data for SEO, AEO (Answer Engines), and GEO (Generative Engines)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://drunnatiskinclinic.com/#website",
        "url": "https://drunnatiskinclinic.com",
        "name": "Dr. Unnati's Skin, Hair, Laser & Cosmetic Clinic",
        "description": "Ahmedabad's premier cosmetology and laser aesthetics center led by Cosmetologist & Aesthetic Medicine Expert Dr. Unnati Panchal.",
        "publisher": {
          "@id": "https://drunnatiskinclinic.com/#clinic"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://drunnatiskinclinic.com/treatments?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "MedicalClinic",
        "@id": "https://drunnatiskinclinic.com/#clinic",
        "name": "Dr. Unnati's Skin, Hair, Laser & Cosmetic Clinic",
        "description": "Ahmedabad's premier center for clinical skin care, laser aesthetics, acne scar revision, and hair transplantation.",
        "url": "https://drunnatiskinclinic.com",
        "telephone": clinicProfile.contact.phone,
        "email": clinicProfile.contact.email,
        "image": "https://drunnatiskinclinic.com/og-image.jpg",
        "priceRange": "₹₹",
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
        ],
        "medicalSpecialty": ["CosmeticProcedures", "SkinCare", "Cosmetology"],
        "availableService": [
          {
            "@type": "MedicalProcedure",
            "name": "Laser Hair Reduction",
            "description": "Painless triple-wavelength diode laser hair reduction for Indian skin."
          },
          {
            "@type": "MedicalProcedure",
            "name": "Clinical HydraFacial® Deep Cleansing",
            "description": "Clinical vortex extraction and antioxidant infusion."
          },
          {
            "@type": "MedicalProcedure",
            "name": "MNRF Acne Scar Revision",
            "description": "Microneedling Radiofrequency for deep post-acne scars and open pores."
          },
          {
            "@type": "MedicalProcedure",
            "name": "Bio-FUE™ Hair Transplantation",
            "description": "Permanent surgical hair restoration with high follicular graft survival."
          }
        ],
        "hasMap": "https://maps.google.com/?q=23.0487,72.6682"
      },
      {
        "@type": "Physician",
        "@id": "https://drunnatiskinclinic.com/#physician",
        "name": clinicProfile.name,
        "jobTitle": clinicProfile.title,
        "medicalSpecialty": "SkinCare",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Advanced Residency in Clinical Skin & Laser Therapeutics"
        },
        "award": "Excellence Award in Clinical Skin & Laser Therapeutics",
        "knowsAbout": [
          "Clinical Skin Care",
          "Laser Skin Toning",
          "Bio-FUE Hair Transplant",
          "Acne & Scar Revision",
          "Anti-aging Liquid Facelifts",
          "3D Digital Dermoscopy"
        ],
        "worksFor": {
          "@id": "https://drunnatiskinclinic.com/#clinic"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://drunnatiskinclinic.com/#faq",
        "mainEntity": faqsData.map((faq) => ({
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
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
