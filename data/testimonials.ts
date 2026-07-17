export interface Testimonial {
  id: string;
  name: string;
  age: number;
  treatmentTaken: string;
  rating: number; // out of 5
  comment: string;
  date: string;
  verified: boolean;
  beforeAfterTags: string[];
  avatarText: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Priya Shah",
    age: 28,
    treatmentTaken: "Medical HydraFacial MD® & Laser Toning",
    rating: 5,
    comment: "I visited Dr. Unnati's clinic for bridal skin prep just 2 months before my wedding. My skin had stubborn tan and active breakouts from wedding shopping in Ahmedabad heat. Dr. Unnati suggested a customized HydraFacial and Q-Switched laser plan. The glow on my wedding day was supernatural—my makeup artist didn't even need color corrector! Truly the best skin clinic in Nikol.",
    date: "2 weeks ago",
    verified: true,
    beforeAfterTags: ["Bridal Glow", "Pigmentation Clear"],
    avatarText: "PS"
  },
  {
    id: "test-2",
    name: "Rahul Patel",
    age: 34,
    treatmentTaken: "GFC & PRP Advanced Hair Therapy",
    rating: 5,
    comment: "I was losing almost 150 hair strands every day due to stress and genetic pattern baldness. I tried various oils and shampoos without success. Dr. Unnati diagnosed my condition thoroughly and started GFC therapy. By the 3rd session, my hair fall dropped by 90% and today after 5 sessions, my crown area is completely filled with thick new hair. Highly ethical doctor who explains every step.",
    date: "1 month ago",
    verified: true,
    beforeAfterTags: ["Hair Regrowth", "GFC Success"],
    avatarText: "RP"
  },
  {
    id: "test-3",
    name: "Ankita Trivedi",
    age: 25,
    treatmentTaken: "MNRF Radio Frequency & Chemical Peels",
    rating: 5,
    comment: "Suffering from deep cystic acne scars since college made me extremely self-conscious. I used to hide my cheeks behind long hair. Dr. Unnati's MNRF treatment combined with subcision worked wonders. After just 4 sessions, my pitted scars are 80% smoother and my open pores are almost invisible. Her clinic ambiance feels like a luxury spa with strict hospital-grade hygiene.",
    date: "3 months ago",
    verified: true,
    beforeAfterTags: ["Acne Scar Revision", "Smooth Texture"],
    avatarText: "AT"
  },
  {
    id: "test-4",
    name: "Sneha Mehta",
    age: 41,
    treatmentTaken: "Baby Botox & Hyaluronic Acid Fillers",
    rating: 5,
    comment: "At 40, I started noticing deep frown lines and hollow under-eyes that made me look constantly exhausted. I was terrified of looking 'plastic'. Dr. Unnati put me at complete ease. Her micro-injection technique for Botox and under-eye filler was 100% painless. The result? I look 10 years younger and completely rested, yet none of my friends can guess I had any procedure done!",
    date: "2 months ago",
    verified: true,
    beforeAfterTags: ["Natural Lift", "Under-Eye Brightening"],
    avatarText: "SM"
  },
  {
    id: "test-5",
    name: "Karan Desai",
    age: 29,
    treatmentTaken: "Diode Laser Beard Shaping & Neck Hair Reduction",
    rating: 5,
    comment: "As a working professional, shaving my neck daily caused severe razor bumps and ingrown hairs. I opted for 6 sessions of painless Diode Laser at Dr. Unnati's clinic. The cooling tip makes it feel like ice cubes gliding on skin. Now my beard line is razor-sharp permanently without ever needing a razor again. Excellent staff and prompt appointment timings.",
    date: "3 weeks ago",
    verified: true,
    beforeAfterTags: ["Permanent Smoothness", "No Razor Bumps"],
    avatarText: "KD"
  },
  {
    id: "test-6",
    name: "Dr. Brijesh Solanki",
    age: 45,
    treatmentTaken: "Laser Pigmentation & Melasma Treatment",
    rating: 5,
    comment: "Being a doctor myself, I appreciate Dr. Unnati's immense clinical knowledge and adherence to US-FDA safety protocols. She treated my stubborn facial melasma that didn't respond to topical creams for 3 years. Her combination of laser toning and medical peel protocol cleared it completely in 4 visits. Truly a doctor's doctor!",
    date: "1 month ago",
    verified: true,
    beforeAfterTags: ["Melasma Clear", "Doctor Verified"],
    avatarText: "BS"
  }
];

export const beforeAfterCases = [
  {
    id: "case-1",
    title: "Severe Cystic Acne & Boxcar Scar Revision",
    patientInfo: "Female, 25 Years • 4 Sessions of MNRF + Subcision",
    description: "Complete restoration of cheek texture and elimination of active inflammatory nodules.",
    tag: "Acne Scars",
    beforeImageLabel: "Before Treatment (Grade 4 Scars)",
    afterImageLabel: "After 4 Months (85% Smoother Skin)"
  },
  {
    id: "case-2",
    title: "Crown Thinning & Androgenetic Alopecia",
    patientInfo: "Male, 33 Years • 5 Sessions of GFC Therapy + Medical Management",
    description: "Significant follicular thickening and revival of dormant miniaturized hair roots on the vertex.",
    tag: "Hair Restoration",
    beforeImageLabel: "Before Treatment (Visible Scalp Crown)",
    afterImageLabel: "After 5 Months (Dense Natural Hairline)"
  },
  {
    id: "case-3",
    title: "Refractory Melasma & Sun Damage Toning",
    patientInfo: "Female, 39 Years • 6 Sessions of Q-Switched Laser Toning",
    description: "Even-toned, luminous complexion achieved by shattering deep dermal melanin deposits without downtime.",
    tag: "Pigmentation",
    beforeImageLabel: "Before (Deep Bilateral Melasma)",
    afterImageLabel: "After 6 Sessions (Radiant Porcelain Glow)"
  },
  {
    id: "case-4",
    title: "Facial Harmonization & Under-Eye Hollow Correction",
    patientInfo: "Female, 42 Years • 1ml HA Filler + Baby Botox",
    description: "Instant rejuvenation eliminating dark circles and smoothing crow's feet while preserving natural warmth.",
    tag: "Anti-Aging",
    beforeImageLabel: "Before (Tired Eye Hollows & Wrinkles)",
    afterImageLabel: "After 14 Days (Rested & Lifted Contour)"
  }
];
