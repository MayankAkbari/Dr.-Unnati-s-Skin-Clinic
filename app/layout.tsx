import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { clinicProfile } from "@/data/doctors";

export const metadata: Metadata = {
  title: "Dr. Unnati's Skin, Hair, Laser & Cosmetic Clinic | Best Dermatologist in Nikol, Ahmedabad",
  description: "Experience world-class clinical dermatology, US-FDA approved laser hair reduction, HydraFacial MD®, MNRF acne scar revision, and GFC/Bio-FUE™ hair restoration led by Gold Medalist Dr. Unnati Panchal (MBBS, MD Dermatology) in Nikol, Ahmedabad.",
  keywords: [
    "Dr Unnati Panchal",
    "Best Skin Clinic in Nikol Ahmedabad",
    "Dermatologist in Nikol",
    "Laser Hair Removal Ahmedabad",
    "HydraFacial Nikol",
    "Acne Scar Treatment Ahmedabad",
    "GFC Hair Regrowth",
    "Bio FUE Hair Transplant Gujarat",
    "Botox Fillers Ahmedabad East"
  ],
  authors: [{ name: "Dr. Unnati Panchal (MD Dermatology)" }],
  openGraph: {
    title: "Dr. Unnati's Skin, Hair, Laser & Cosmetic Clinic | Best Dermatologist in Nikol, Ahmedabad",
    description: "Personalized, ethical medical dermatology and advanced US-FDA laser treatments. Book your consultation with Dr. Unnati Panchal.",
    url: "https://drunnatiskinclinic.com",
    siteName: "Dr. Unnati's Skin & Laser Clinic",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Unnati's Skin & Laser Clinic | Nikol, Ahmedabad",
    description: "Gold Medalist Dermatologist Dr. Unnati Panchal offering US-FDA laser, skin & hair treatments.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Local MedicalClinic & Physician Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://drunnatiskinclinic.com/#clinic",
        "name": "Dr. Unnati's Skin, Hair, Laser & Cosmetic Clinic",
        "description": "Ahmedabad's premier center for clinical dermatology, laser aesthetics, and hair transplantation.",
        "url": "https://drunnatiskinclinic.com",
        "telephone": clinicProfile.contact.phone,
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
        "medicalSpecialty": ["Dermatology", "CosmeticDermatology", "PlasticSurgery"]
      },
      {
        "@type": "Physician",
        "@id": "https://drunnatiskinclinic.com/#physician",
        "name": clinicProfile.name,
        "jobTitle": clinicProfile.title,
        "medicalSpecialty": "Dermatology",
        "alumniOf": "MD Dermatology Gold Medalist",
        "worksFor": {
          "@id": "https://drunnatiskinclinic.com/#clinic"
        }
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
