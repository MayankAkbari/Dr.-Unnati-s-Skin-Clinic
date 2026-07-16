export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: "skin" | "hair" | "laser" | "cosmetic" | "anti-aging";
  tagline: string;
  description: string;
  benefits: string[];
  procedureSteps: { title: string; desc: string }[];
  duration: string;
  downtime: string;
  sessionsRecommended: string;
  priceEstimate?: string;
  suitableFor: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
  iconName: string; // Lucide icon mapping name
}

export const treatmentsData: Treatment[] = [
  {
    id: "hydrafacial-md",
    slug: "hydrafacial-md-medical-cleanup",
    title: "Medical-Grade HydraFacial MD®",
    category: "skin",
    tagline: "Deep pore extraction, exfoliation, and antioxidant infusion for instant celebrity glow.",
    description: "Our signature 6-step medical HydraFacial utilizes patented vortex suction technology to clear congested pores while simultaneously nourishing the skin with customized hyaluronic acid, vitamin C, and peptide serums. Safe for sensitive skin and tailored to combat pollution damage in Ahmedabad.",
    benefits: [
      "Instant luminous glow with zero downtime or redness",
      "Painless extraction of blackheads, whiteheads, and sebum",
      "Deep cellular hydration with medical-grade antioxidant infusion",
      "Improves fine lines, skin texture, and mild pigmentation"
    ],
    procedureSteps: [
      { title: "Detox & Cleanse", desc: "Gentle lymphatic drainage followed by vortex cleansing to remove dead skin cells." },
      { title: "Peel & Extract", desc: "Non-irritating glycolic and salicylic peel dissolves debris from deep within pores." },
      { title: "Infuse & Protect", desc: "Vortex-fusion of peptides, antioxidants, and hyaluronic acid to lock in moisture." }
    ],
    duration: "45 - 60 Minutes",
    downtime: "None (Instant Glow)",
    sessionsRecommended: "Monthly for optimal maintenance",
    priceEstimate: "₹3,500 - ₹5,500 per session",
    suitableFor: ["Dull Skin", "Acne-Prone & Congested Pores", "Dehydrated Skin", "Bridal Prep"],
    featured: true,
    iconName: "Sparkles",
    faqs: [
      { question: "Is HydraFacial safe before a major event or wedding?", answer: "Yes! HydraFacial is known as the 'Red Carpet Facial' because it causes zero peeling or inflammation. Your skin looks dewy and radiant immediately after." },
      { question: "How does medical HydraFacial differ from salon facials?", answer: "Salon facials use manual squeezing that can stretch pores and cause scarring. Our medical HydraFacial uses calibrated vacuum suction and US-FDA approved clinical serums administered under dermatological supervision." }
    ]
  },
  {
    id: "q-switched-ndyag-laser",
    slug: "q-switched-ndyag-laser-toning",
    title: "Q-Switched Nd:YAG Laser Toning",
    category: "laser",
    tagline: "Advanced optical targeting for stubborn melasma, pigmentation, and tattoo removal.",
    description: "State-of-the-art US-FDA cleared Q-Switched Nd:YAG laser delivers ultra-short nanosecond pulse energy that shatters deep dermal melanin particles without harming surrounding healthy skin. Highly effective for Indian skin types (Fitzpatrick IV-V).",
    benefits: [
      "Treats deep-seated melasma, sun spots, and freckles effectively",
      "Stimulates deep collagen synthesis for skin tightening and pore reduction",
      "Complete removal of unwanted dark and colored tattoos",
      "Helps clear post-acne hyperpigmentation (PIH)"
    ],
    procedureSteps: [
      { title: "Skin Analysis & Cleansing", desc: "Digital dermoscopy to evaluate pigment depth followed by thorough cleansing." },
      { title: "Laser Toning Pass", desc: "Controlled nanosecond laser beams pass over the skin creating a gentle warming sensation." },
      { title: "Soothing Mask & Sun Protection", desc: "Medical cooling mask application and SPF 50+ broad-spectrum sunscreen." }
    ],
    duration: "30 - 45 Minutes",
    downtime: "Mild pinkness for 1-2 hours",
    sessionsRecommended: "4 to 6 sessions spaced 3-4 weeks apart",
    priceEstimate: "₹4,000 - ₹7,000 per session",
    suitableFor: ["Melasma", "Sun Spots & Freckles", "Acne Marks (PIH)", "Tattoo Removal"],
    featured: true,
    iconName: "Zap",
    faqs: [
      { question: "Will laser toning make my skin thin?", answer: "Quite the opposite. By stimulating fibroblasts in the dermis, Q-Switched laser actually thickens and strengthens your skin's collagen matrix over time." },
      { question: "Can I go out in the sun after laser toning?", answer: "Strict sun protection (SPF 50+ re-applied every 3 hours) is mandatory for at least 7 days post-treatment to prevent rebound pigmentation." }
    ]
  },
  {
    id: "prp-gfc-hair-regrowth",
    slug: "prp-gfc-advanced-hair-therapy",
    title: "GFC & PRP Advanced Hair Regrowth Therapy",
    category: "hair",
    tagline: "Concentrated growth factor concentrates derived from your own blood to awaken dormant follicles.",
    description: "Growth Factor Concentrate (GFC) is the next-generation evolution of traditional PRP. We extract and concentrate pure platelet-derived growth factors (PDGF, VEGF, TGF-β) to inject precisely into thinning scalp zones, arresting hair fall and thickening follicular shaft diameter.",
    benefits: [
      "Stops severe androgenetic and stress-related hair fall within 2-3 sessions",
      "100% autologous (natural) with zero risk of allergic reactions",
      "Thickens existing miniaturized hair strands and promotes new follicular sprouts",
      "GFC offers superior pain-free experience with higher concentration than normal PRP"
    ],
    procedureSteps: [
      { title: "Blood Draw & Centrifugation", desc: "15ml of blood is collected in specialized acellular GFC tubes and spun at exact RPM." },
      { title: "Growth Factor Extraction", desc: "Pure golden acellular serum rich in active growth factors is harvested." },
      { title: "Micro-Injection & Derma Roller", desc: "Painless micro-injections into the scalp dermis under local cooling or topical anesthesia." }
    ],
    duration: "45 Minutes",
    downtime: "None (Mild scalp tenderness for 12 hours)",
    sessionsRecommended: "4 to 6 sessions at monthly intervals",
    priceEstimate: "₹4,500 - ₹8,000 per session",
    suitableFor: ["Pattern Baldness (Male & Female)", "Post-COVID Hair Fall", "Thinning Crown & Receding Hairline"],
    featured: true,
    iconName: "Activity",
    faqs: [
      { question: "What is the difference between PRP and GFC?", answer: "Traditional PRP contains platelets and RBC remnants which can cause mild pain and swelling. GFC is pure, acellular growth factor concentrate without RBCs or WBCs, resulting in 3x higher efficacy and almost zero discomfort." },
      { question: "When will I see noticeable new hair growth?", answer: "Hair shedding usually stops by week 3 after the first session. Visible thickening and baby hair growth emerge between the 2nd and 3rd month." }
    ]
  },
  {
    id: "diode-laser-hair-reduction",
    slug: "painless-diode-laser-hair-reduction",
    title: "Painless Ice-Cool Diode Laser Hair Reduction",
    category: "laser",
    tagline: "Permanent hair reduction using triple-wavelength laser with sapphire contact cooling.",
    description: "Say goodbye to waxing burns and ingrown hairs. Our US-FDA approved triple-wavelength (755nm, 808nm, 1064nm) Diode Laser targets hair follicles at different depths while the integrated -5°C sapphire ice tip keeps your skin completely cool and comfortable.",
    benefits: [
      "Up to 90% permanent hair reduction after a complete course",
      "Completely painless with advanced contact ice cooling technology",
      "Eliminates painful ingrown hairs, strawberry legs, and shaving bumps",
      "Safe and fast for full-body, facial, bikini, and underarm areas"
    ],
    procedureSteps: [
      { title: "Shaving & Marking", desc: "The treatment area is gently shaved and marked with medical white grid lines." },
      { title: "Cooling Gel & Laser Gliding", desc: "Ultrasound conductive gel is applied and the laser handpiece glides smoothly over the skin." },
      { title: "Post-Care Soothing", desc: "Wipe clean and apply soothing aloe-calamine lotion." }
    ],
    duration: "15 mins (Underarms/Face) to 90 mins (Full Body)",
    downtime: "Zero downtime",
    sessionsRecommended: "6 to 8 sessions for permanent reduction",
    priceEstimate: "From ₹1,500 (Small area) / ₹12,000 (Full Body combo)",
    suitableFor: ["Unwanted Facial Hair (PCOS)", "Full Body Hair Reduction", "Ingrown Hairs", "Sensitive Skin"],
    featured: true,
    iconName: "ShieldCheck",
    faqs: [
      { question: "Is laser hair reduction permanent?", answer: "It provides permanent hair reduction of around 85-95%. Any fine hairs that may regrow over years are light, thin, and virtually invisible. Yearly touch-ups can maintain 100% smoothness." },
      { question: "Is it safe for women with PCOS or hormonal imbalances?", answer: "Yes! In fact, laser hair reduction is the #1 recommended dermatological solution for thick hormonal chin and facial hair caused by PCOS, along with medical hormone management." }
    ]
  },
  {
    id: "mnrf-acne-scar-resurfacing",
    slug: "mnrf-radiofrequency-microneedling",
    title: "MNRF (Micro-Needling Radio Frequency) Scar Resurfacing",
    category: "skin",
    tagline: "Gold-plated insulated needles delivering deep RF energy to rebuild collagen and fill deep scars.",
    description: "MNRF is the gold standard clinical procedure for deep boxcar, rolling, and ice-pick acne scars, stretch marks, and enlarged pores. Ultra-fine gold-plated microneedles penetrate precisely into the dermis and emit bipolar radiofrequency energy to remodel scar tissue inside out.",
    benefits: [
      "Dramatic smoothing of stubborn pitted acne scars and uneven skin texture",
      "Tightens sagging jowls and improves jawline definition via deep collagen induction",
      "Insulated tips protect the top skin layer, ensuring safety for darker skin tones",
      "Reduces open pore diameter by over 50-60% within 3 sessions"
    ],
    procedureSteps: [
      { title: "Topical Anesthesia", desc: "Numbing cream is applied for 45 minutes to ensure a completely comfortable experience." },
      { title: "MNRF Stamping", desc: "Robotic precision stamping delivers controlled RF energy directly at 1.5mm to 3.0mm dermal depths." },
      { title: "Calming Peptide Mask & LED Therapy", desc: "Post-procedure sterile cooling peptide sheet mask combined with Near-Infrared LED." }
    ],
    duration: "60 - 75 Minutes",
    downtime: "Mild redness and micro-crusting for 2-3 days",
    sessionsRecommended: "3 to 5 sessions spaced 4-6 weeks apart",
    priceEstimate: "₹6,000 - ₹10,000 per session",
    suitableFor: ["Deep Acne Scars", "Open Pores", "Post-Surgical Scars", "Stretch Marks", "Skin Laxity"],
    featured: true,
    iconName: "Target",
    faqs: [
      { question: "Is MNRF painful?", answer: "With our high-strength medical topical numbing cream applied for 45 minutes prior, patients report minimal discomfort—typically rating it 2 out of 10." },
      { question: "Can MNRF be combined with Subcision?", answer: "Yes, Dr. Unnati often combines MNRF with subcision and TCA Cross in the same session for deep tethered scars to yield up to 80% improvement." }
    ]
  },
  {
    id: "botox-dermal-fillers",
    slug: "botox-hyaluronic-fillers-antiaging",
    title: "Botox® & Hyaluronic Acid Dermal Fillers",
    category: "anti-aging",
    tagline: "Subtle, natural facial harmonization to erase wrinkles, restore lost volume, and lift contours.",
    description: "Performed exclusively by Dr. Unnati Panchal using US-FDA approved Botox/Dysport and premium hyaluronic acid fillers (Juvederm/Restylane). Whether smoothing forehead lines, lifting nasolabial folds, or plumping lips, our philosophy is 'undetectable enhancements that make you look well-rested and youthful.'",
    benefits: [
      "Smooths crow's feet, forehead furrows, and frown lines within 5 days",
      "Restores youthful cheek volume and corrects under-ear eye hollows (dark circles)",
      "Non-surgical liquid facelift and jawline sculpting in under 45 minutes",
      "100% reversible (for HA fillers) with exceptional safety profile"
    ],
    procedureSteps: [
      { title: "Anatomical Mapping", desc: "Detailed facial assessment examining dynamic muscle movement and structural volume loss." },
      { title: "Micro-Injection Precision", desc: "Ultra-fine atraumatic cannulas and needles ensure painless, bruise-free placement." },
      { title: "Instant Review", desc: "Post-injection molding and immediate aesthetic check with custom aftercare kit." }
    ],
    duration: "30 - 45 Minutes",
    downtime: "None (Rare minor bruising at entry points)",
    sessionsRecommended: "Botox lasts 4-6 months; Fillers last 12-18 months",
    priceEstimate: "Consultation based (Per unit/syringe pricing)",
    suitableFor: ["Forehead & Eye Wrinkles", "Sinking Cheeks", "Lip Enhancement", "Jawline & Chin Shaping"],
    featured: true,
    iconName: "HeartHandshake",
    faqs: [
      { question: "Will my face look frozen or artificial after Botox?", answer: "Never at our clinic. Dr. Unnati specializes in 'Baby Botox' and natural dosing that softens wrinkles while preserving graceful facial expressions and warmth." },
      { question: "Are dermal fillers safe?", answer: "Yes. We strictly use pure Hyaluronic Acid (HA) fillers from global leaders like Allergan (Juvederm) and Galderma. HA is a natural substance already present in your skin and is completely biocompatible." }
    ]
  },
  {
    id: "chemical-peels",
    slug: "medical-chemical-peels-glow",
    title: "Clinical Chemical Peels & Skin Brightening",
    category: "skin",
    tagline: "Targeted botanical and medical acid cocktails to dissolve dead skin, acne, and stubborn dark spots.",
    description: "From gentle party-glow Mandelic and Lactic acid peels to deep medical-grade Yellow Peels (Retinol + Vitamin C) and Salicylic peels for active acne breakouts. Customized to reveal fresh, even-toned skin underneath.",
    benefits: [
      "Rapidly dries up active acne nodules and prevents new breakouts",
      "Fades sun tan, stubborn dark patches, and uneven facial tone",
      "Improves skin luminosity and unclogs congested pores",
      "Quick 20-minute lunchtime procedure with high patient satisfaction"
    ],
    procedureSteps: [
      { title: "Skin Degreasing", desc: "Removal of all skin oils and surface impurities using balanced prep solutions." },
      { title: "Controlled Acid Application", desc: "Calibrated layers of medical peels applied with precise timing monitoring." },
      { title: "Neutralization & Barrier Repair", desc: "Instant neutralizing buffer followed by deep skin-barrier soothing ceramides." }
    ],
    duration: "20 - 30 Minutes",
    downtime: "Minimal to mild flaking for 2-4 days depending on peel depth",
    sessionsRecommended: "4 sessions spaced 2-3 weeks apart",
    priceEstimate: "₹2,000 - ₹4,500 per session",
    suitableFor: ["Active Acne & Pimples", "Sun Tan & Dullness", "Melasma & Pigmentation", "Fine Wrinkles"],
    featured: false,
    iconName: "Sparkles",
    faqs: [
      { question: "Will my skin peel off in big flakes?", answer: "Most modern superficial medical peels cause microscopic shedding rather than visible sheets of flaking. You can comfortably carry on with work and social commitments." }
    ]
  },
  {
    id: "hair-transplant-fue",
    slug: "bio-fue-hair-transplantation",
    title: "Bio-FUE™ High-Density Hair Transplantation",
    category: "hair",
    tagline: "Natural, dense hairline restoration with zero linear scarring and lifetime growth guarantee.",
    description: "Under the direct surgical leadership of Dr. Unnati Panchal, our Bio-FUE procedure extracts individual healthy follicular grafts from the donor area (back of scalp/beard) and implants them at natural angulation and density. Enhanced with intra-operative PRP bathing for maximum graft survival (>97%).",
    benefits: [
      "Completely natural-looking hairline customized to your age and facial symmetry",
      "No stitches, no staples, and no linear scar on the back of your head",
      "Transplanted hair grows naturally for a lifetime without special medications",
      "Done under local anesthesia in our state-of-the-art sterile modular OT suite"
    ],
    procedureSteps: [
      { title: "Hairline Design & Extraction", desc: "Artistic hairline marking followed by painless micro-motor punch extraction of grafts." },
      { title: "Graft Preservation in PRP", desc: "Extracted grafts are preserved in nutrient-rich chilled PRP serum." },
      { title: "Direct Bio-Implantation", desc: "Precise slit creation and graft placement maintaining exact natural hair growth angles." }
    ],
    duration: "6 - 8 Hours (Outpatient procedure)",
    downtime: "3 - 5 days for initial scab healing",
    sessionsRecommended: "Single comprehensive surgical session",
    priceEstimate: "Customized by graft count (Transparent per-graft pricing)",
    suitableFor: ["Advanced Male Pattern Baldness (Grade 3+)", "Female Hairline Lowering", "Eyebrow & Beard Reconstruction"],
    featured: false,
    iconName: "Award",
    faqs: [
      { question: "Is hair transplant surgery painful?", answer: "We use virtually painless ring block local anesthesia. Once numbed, patients feel zero pain and comfortably watch movies, listen to music, or sleep during the 6-hour procedure." }
    ]
  }
];

export const categoriesList = [
  { id: "all", label: "All Treatments", icon: "Grid" },
  { id: "skin", label: "Skin & Glow", icon: "Sparkles" },
  { id: "laser", label: "Laser Treatments", icon: "Zap" },
  { id: "hair", label: "Hair & Scalp", icon: "Activity" },
  { id: "anti-aging", label: "Anti-Aging & Injectables", icon: "HeartHandshake" },
  { id: "cosmetic", label: "Cosmetic Dermatology", icon: "Award" },
];
