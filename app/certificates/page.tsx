import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, CheckCircle2, FileBadge } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Unnati Panchal | Professional Certificates & Medical Qualifications",
  description: "View the official medical certificates and cosmetology qualifications of Dr. Unnati Panchal. Expert in Skin Esthetics, Laser, and Clinical Cosmetology.",
  openGraph: {
    title: "Dr. Unnati Panchal - Professional Certificates",
    description: "View the official medical certificates and cosmetology qualifications of Dr. Unnati Panchal. E-E-A-T Verified.",
    images: [{ url: "/dr-unnati-suthar.jpeg", width: 800, height: 800, alt: "Dr. Unnati Panchal" }],
  }
};

const certificates = [
  {
    title: "M.D. (Alternative Medicine)",
    src: "/certificates/1. Certificate Of  M.D. (Alternative Medicine).jpeg",
    description: "Doctor of Medicine in Alternative Medicine, emphasizing holistic and integrative approaches."
  },
  {
    title: "Advance Skin Esthetics & Laser",
    src: "/certificates/2. Certificate Of  Advance Skin Esthetics & Laser.jpeg",
    description: "Advanced certification in modern skin esthetics and laser treatment protocols."
  },
  {
    title: "Skin Disease Expert",
    src: "/certificates/3. Certificate Of Skin Disease.jpeg",
    description: "Specialized training and certification in diagnosing and treating various dermatological conditions."
  },
  {
    title: "Venereal Disease Management",
    src: "/certificates/4. Certificate Of Venereal Disease.jpeg",
    description: "Certified expertise in the management and treatment of venereal diseases."
  },
  {
    title: "Clinical Cosmetologist",
    src: "/certificates/5. Certificate Of Clinical Cosmetologist.jpeg",
    description: "Board-certified clinical cosmetologist ensuring safe, scientific, and aesthetic skin enhancements."
  }
];

export default function CertificatesPage() {
  // JSON-LD Structured Data for Medical Clinic / Physician to optimize for Answer Engines (AEO) and Generative Search (GEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Unnati Panchal",
    "image": "/dr-unnati-suthar.jpeg",
    "jobTitle": "Cosmetologist & Aesthetic Medicine Expert",
    "description": "Expert Cosmetologist with 12+ years of experience in clinical precision with evidence-based, transparent cosmetology care.",
    "url": "https://drunnatiskinclinic.com/certificates",
    "medicalSpecialty": [
      "Cosmetology",
      "Dermatology",
      "Aesthetic Medicine"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Alternative Medicine"
      }
    ],
    "knowsAbout": [
      "Laser Treatments",
      "Acne Scar Revision",
      "Hair Transplantation",
      "Skin Esthetics",
      "Venereal Diseases"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-48 pb-24 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-glass-pill text-primary-gold font-extrabold text-xs uppercase tracking-wider border border-primary-gold/30 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-primary-gold" />
              <span>Verified Medical Credentials</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Official <span className="gold-gradient-text">Certificates & Qualifications.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Transparency and trust are at the core of our clinical philosophy. Review Dr. Unnati Panchal&apos;s board certifications, medical degrees, and specialized cosmetology training.
            </p>
          </div>

          {/* GEO / E-E-A-T Citation Box */}
          <section className="mb-16 p-6 sm:p-8 rounded-3xl bg-obsidian-900 border-2 border-primary-gold/50 shadow-2xl text-white max-w-4xl mx-auto" role="region" aria-label="E-E-A-T Verification Box">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-24 h-24 relative rounded-full overflow-hidden border-2 border-primary-gold shadow-lg">
                 <Image src="/dr-unnati-suthar.jpeg" alt="Dr. Unnati Panchal" fill className="object-cover object-top" />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">Why E-E-A-T Matters in Aesthetics</h2>
                <p className="text-sm text-pearl-200 leading-relaxed font-normal">
                  Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) are critical when choosing your skin specialist. Dr. Unnati provides 100% transparent access to her medical qualifications, ensuring every patient feels secure in the hands of an experienced Clinical Cosmetologist.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center text-xs font-bold text-secondary-emerald bg-secondary-emerald/10 px-3 py-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5 mr-1" /> 12+ Years Experience</span>
                  <span className="inline-flex items-center text-xs font-bold text-primary-gold bg-primary-gold/10 px-3 py-1 rounded-full"><Award className="w-3.5 h-3.5 mr-1" /> Board Certified</span>
                </div>
              </div>
            </div>
          </section>

          {/* Certificates List */}
          <div className="flex flex-col items-center gap-16 max-w-5xl mx-auto">
            {certificates.map((cert, idx) => (
              <article key={idx} className="w-full group rounded-3xl bg-obsidian-900 border border-white/10 overflow-hidden hover:border-primary-gold/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary-gold/10 flex flex-col">
                <div className="relative w-full bg-obsidian-950 p-2 sm:p-6 md:p-8 border-b border-white/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/40 to-transparent z-10 pointer-events-none" />
                  <Image
                    src={cert.src}
                    alt={`Certificate for ${cert.title} of Dr. Unnati Panchal`}
                    width={1600}
                    height={1200}
                    className="w-full h-auto object-contain rounded-xl shadow-lg z-0 relative"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    quality={100}
                  />
                  <div className="absolute bottom-8 left-8 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-obsidian-800/95 backdrop-blur-md border border-primary-gold/50 text-primary-gold shadow-2xl">
                    <FileBadge className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-8 sm:p-10">
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">{cert.title}</h3>
                  <p className="text-base sm:text-lg text-pearl-200 leading-relaxed max-w-4xl">
                    {cert.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
