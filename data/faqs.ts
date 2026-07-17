export interface FAQItem {
  id: string;
  category: "general" | "skin" | "hair" | "laser" | "booking";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "gen-1",
    category: "general",
    question: "Why should I choose a qualified Cosmetologist & Aesthetic Medicine Expert over a local beauty salon?",
    answer: "Beauty salons and non-medical spas perform superficial treatments using unregulated creams or aggressive mechanical scrubs that can permanently damage your skin barrier, stretch pores, and cause severe post-inflammatory hyperpigmentation. At Dr. Unnati's Skin Clinic, every procedure is diagnosed and supervised by Cosmetologist & Aesthetic Medicine Expert Dr. Unnati Panchal, using US-FDA cleared clinical lasers and pure medical-grade serums to ensure unmatched clinical efficacy and 100% safety."
  },
  {
    id: "gen-2",
    category: "general",
    question: "Where is Dr. Unnati's Skin Clinic located in Ahmedabad?",
    answer: "Our luxury medical facility is conveniently located on the 2nd Floor, Above HDFC Bank, Near Raspan Cross Road in Nikol, Ahmedabad (382350). We have ample dedicated parking and elevator access for all patients."
  },
  {
    id: "book-1",
    category: "booking",
    question: "How do I book an appointment with Dr. Unnati Panchal?",
    answer: "You can book an instant consultation through our online booking portal on this website, connect with our care team via WhatsApp at +91 98765 43210, or call us directly during clinic hours (10:30 AM – 8:30 PM, Monday to Saturday). Prior appointment is highly recommended to avoid waiting times."
  },
  {
    id: "book-2",
    category: "booking",
    question: "What happens during my first clinical consultation?",
    answer: "During your initial 30-minute consultation, Dr. Unnati performs a thorough clinical history review and uses high-resolution digital dermoscopic imaging to analyze your skin depth, moisture levels, pore structure, or scalp follicular density. Based on medical evidence, she designs a transparent, step-by-step treatment road map tailored to your skin goal and budget."
  },
  {
    id: "skin-1",
    category: "skin",
    question: "Is HydraFacial suitable for sensitive or acne-prone skin?",
    answer: "Absolutely! Unlike traditional facials that involve painful squeezing, HydraFacial uses calibrated vortex vacuum suction combined with anti-inflammatory salicylic and hyaluronic acid serums to flush out clogged pores without any friction or irritation. It is the ideal deep-cleansing therapy for sensitive and acne-prone skin."
  },
  {
    id: "skin-2",
    category: "skin",
    question: "How long do the results of chemical peels or laser toning last?",
    answer: "With proper sun protection (SPF 50+ broad-spectrum sunscreen applied every 3 hours) and a tailored home medical skincare routine, results can last for months or even years. We recommend periodic maintenance sessions every 2-3 months to maintain your luminous celebrity glow."
  },
  {
    id: "laser-1",
    category: "laser",
    question: "Is Diode Laser hair reduction completely painless and safe for Indian skin?",
    answer: "Yes! Our triple-wavelength Diode Laser features a continuous -5°C sapphire ice contact cooling tip that numbs the skin instantly as the laser glides over. It specifically targets melanin inside the hair root while leaving the surrounding Indian skin (Fitzpatrick IV-V) completely cool, unharmed, and comfortable."
  },
  {
    id: "laser-2",
    category: "laser",
    question: "How many laser hair reduction sessions will I need?",
    answer: "Because hair grows in distinct cycles (Anagen, Catagen, Telogen), lasers only destroy hair roots in the active growth phase. Most patients achieve 85% to 95% permanent hair reduction within 6 to 8 sessions spaced 4-6 weeks apart."
  },
  {
    id: "hair-1",
    category: "hair",
    question: "How effective is GFC (Growth Factor Concentrate) compared to regular PRP?",
    answer: "GFC is a revolutionary advancement over standard PRP. In normal PRP, red blood cells and platelets can cause mild post-procedure swelling or pain. GFC extracts only pure, highly concentrated acellular growth factors from your blood, delivering 3x higher regenerative potency with virtually zero pain or downtime."
  },
  {
    id: "hair-2",
    category: "hair",
    question: "Are hair transplants permanent?",
    answer: "Yes! In our Bio-FUE™ hair transplant procedure, healthy hair roots are harvested from the permanent safe donor zone at the back of the head (where roots are genetically resistant to DHT baldness hormone). Once transplanted to the bald crown or hairline, these roots continue growing naturally for a lifetime."
  }
];
