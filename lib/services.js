import SkinTightning from "../app/assets/TreatmentImages/SkinTightning.webp";
import acneTreatment from "../app/assets/TreatmentImages/acneTreatment.png";
import hairPRPTherapy from "../app/assets/TreatmentImages/hairPRPTherapy.png";
import hydraFacial from "../app/assets/TreatmentImages/hydraFacial.jpeg";
import medTherapy from "../app/assets/TreatmentImages/medTherapy.webp";
import pigmentationCorrection from "../app/assets/TreatmentImages/pigmentation correction.jpg";
import tattooRemove from "../app/assets/TreatmentImages/tattooRemove.jpeg";
import microneedling from "../app/assets/TreatmentImages/Microneedling.jpeg";

export const clinicServices = [
  {
    id: "skin-tightening",
    name: "Skin Tightening",
    tagline: "Lift and contour, naturally.",
    description: "Stimulate deep collagen production to lift sagging skin on the face and neck. Achieve a firmer, more contoured profile without surgery.",
    duration: "60-90 mins",
    recovery: "No Downtime",
    category: "Anti-Aging",
    slug: "skin-tightening",
    image: SkinTightning,
    alt: "Non-surgical skin tightening procedure using ultrasound technology",
    overview: "High-Intensity Focused Ultrasound (HIFU) delivers focused energy deep beneath the skin to target the SMAS layer. This triggers a natural regenerative response, lifting and tightening loose skin over time.",
    bestFor: ["Sagging jowls", "Loose neck skin", "Drooping brows", "Loss of jawline definition"],
    benefits: ["Non-surgical facelift alternative", "Lifts and tightens skin", "Defines the jawline", "Single session often sufficient for 12-18 months"],
    results: "Initial tightening is visible immediately, with peak lifting results developing over 2-3 months as new collagen forms.",
    downtime: "None. You can return to normal activities immediately.",
    sessions: "1-2 sessions depending on skin laxity.",
    pain: "Moderate. You will feel deep, warm pulses. Comfort measures are provided.",
    faqs: [
      { q: "Is HIFU safe?", a: "Yes, ultrasound has been used safely in medicine for over 50 years. It bypasses the surface of the skin, meaning no surface damage." },
      { q: "How long do results last?", a: "Results typically last 12-18 months, as the skin continues to age naturally." }
    ]
  },
  {
    id: "acne-treatment",
    name: "Acne Treatment",
    tagline: "Clear skin, fearless confidence.",
    description: "Stop masking the problem. Get to the root cause of active breakouts with our targeted medical treatments, combining extraction, peels, and light therapy.",
    duration: "45-60 mins",
    recovery: "Minimal",
    category: "Skin",
    slug: "acne-treatment",
    image: acneTreatment,
    alt: "Dermatologist examining patient's skin for acne treatment",
    overview: "Our comprehensive acne protocol tackles active breakouts, reduces inflammation, and prevents future scarring. We combine deep pore extractions, targeted chemical peels, and LED light therapy to destroy acne-causing bacteria.",
    bestFor: ["Active acne", "Hormonal breakouts", "Congested pores", "Blackheads and whiteheads"],
    benefits: ["Rapidly reduces active pimples", "Prevents acne scarring", "Unclogs deep pores", "Calms red, inflamed skin"],
    results: "Significant reduction in active breakouts within 1-2 weeks.",
    downtime: "Mild redness for 24 hours.",
    sessions: "4-6 sessions, spaced 2 weeks apart.",
    pain: "Mild discomfort during extractions.",
    faqs: [
      { q: "Will this treatment cause me to purge?", a: "Some patients experience a mild 'purge' as deep congestion is brought to the surface, but this clears quickly." }
    ]
  },
  {
    id: "hair-prp-therapy",
    name: "Hair PRP Therapy",
    tagline: "Empower your natural growth.",
    description: "Revitalize thinning hair using your body's own growth factors. A natural, clinically proven approach to thicker, healthier hair follicles.",
    duration: "60 mins",
    recovery: "No Downtime",
    category: "Hair",
    slug: "hair-prp-therapy",
    image: hairPRPTherapy,
    alt: "Close up of healthy hair roots and scalp treatment",
    overview: "Platelet-Rich Plasma (PRP) therapy utilizes the healing properties of your own blood to stimulate hair follicles. By injecting concentrated growth factors into the scalp, we can naturally slow down hair loss and encourage new, thicker hair growth.",
    bestFor: ["Early stage hair thinning", "Male/Female pattern baldness", "Post-pregnancy hair loss", "Weak hair follicles"],
    benefits: ["100% natural (uses your own blood)", "Increases hair density", "Strengthens existing hair", "No risk of allergic reaction"],
    results: "Initial decrease in hair fall within 1 month, visible new growth after 3-4 months.",
    downtime: "None. You can wash your hair the next day.",
    sessions: "3-4 sessions, spaced 4 weeks apart.",
    pain: "Mild discomfort. Numbing spray/cream is used.",
    faqs: [
      { q: "Who is a good candidate for PRP?", a: "PRP works best for individuals in the early stages of hair thinning with active hair follicles." },
      { q: "Is it safe?", a: "Extremely safe, as it uses your own body's natural growth factors, eliminating the risk of rejection." }
    ]
  },
  {
    id: "hydra-facial",
    name: "Hydra Facial",
    tagline: "Illuminate your authentic beauty.",
    description: "Deeply cleanse, hydrate, and nourish. We combine spa-level comfort with clinical-grade active ingredients for an instant, lasting glow.",
    duration: "60 mins",
    recovery: "Instant Glow",
    category: "Skin",
    slug: "hydra-facial",
    image: hydraFacial,
    alt: "Hydra facial treatment process",
    overview: "Our Hydra Facial uses medical-grade serums, advanced exfoliation, and targeted technologies to penetrate deeper into the skin for profound hydration and instantly visible radiance.",
    bestFor: ["Special events", "Dull, tired skin", "Dehydration", "Monthly skin maintenance"],
    benefits: ["Instant, luminous glow", "Deep pore cleansing", "Intense hydration", "Relaxing experience with clinical results"],
    results: "Immediate radiance and plumpness that lasts for weeks.",
    downtime: "None. Perfect 'lunchtime' procedure.",
    sessions: "Recommended monthly for optimal skin health.",
    pain: "None. Highly relaxing and soothing.",
    faqs: [
      { q: "What's the difference between this and a salon facial?", a: "Medical facials use scientifically proven, active ingredients and technologies that penetrate beyond the skin's surface for true cellular benefit." }
    ]
  },
  {
    id: "medical-therapy",
    name: "Medical Therapy",
    tagline: "Targeted, professional dermatological care.",
    description: "Advanced medical-grade treatments designed to heal and restore the skin's natural balance. Effective against various chronic skin conditions.",
    duration: "30-45 mins",
    recovery: "Minimal",
    category: "Skin",
    slug: "medical-therapy",
    image: medTherapy,
    alt: "Medical therapy procedure for skin restoration",
    overview: "Medical Therapy encompasses a range of clinical procedures targeting deep skin conditions. By addressing the root causes of inflammation and cellular damage, we restore long-term skin health.",
    bestFor: ["Chronic skin conditions", "Rosacea", "Inflammation", "Severe textural issues"],
    benefits: ["Clinically proven methodologies", "Targets root causes rather than symptoms", "Provides long-term relief", "Personalized to individual needs"],
    results: "Progressive improvement depending on the specific condition being treated.",
    downtime: "Varies from 0 to 3 days depending on the intensity of the therapy.",
    sessions: "Typically a series of 3-6 treatments.",
    pain: "Mild to moderate, managed with topical anesthetics if necessary.",
    faqs: [
      { q: "Is medical therapy right for me?", a: "A full consultation with our experts is required to determine the best medical therapy path for your specific skin concerns." }
    ]
  },
  {
    id: "pigmentation-correction",
    name: "Pigmentation Correction",
    tagline: "Flawless, even-toned perfection.",
    description: "Effectively fade dark spots, melasma, and sun damage using advanced Q-switch lasers and customized lightening serums tailored to your skin type.",
    duration: "45 mins",
    recovery: "1-2 Days",
    category: "Laser",
    slug: "pigmentation-correction",
    image: pigmentationCorrection,
    alt: "Laser treatment device targeting hyperpigmentation",
    overview: "Hyperpigmentation requires a careful, targeted approach. We utilize advanced Q-switch Nd:YAG lasers to safely shatter excess melanin pigment under the skin without damaging the surrounding tissue, restoring a clear, even complexion.",
    bestFor: ["Sun spots / Age spots", "Melasma", "Freckles", "Post-inflammatory hyperpigmentation"],
    benefits: ["Fades stubborn dark spots", "Evens out overall skin tone", "Safe for Indian skin types", "Stimulates mild collagen production"],
    results: "Pigmentation gradually lightens over 2-3 weeks post-treatment.",
    downtime: "Mild redness or slight darkening of spots before they flake off (2-3 days).",
    sessions: "4-6 sessions, spaced 3-4 weeks apart.",
    pain: "Feels like a light prickling or warm sensation.",
    faqs: [
      { q: "Can melasma be cured completely?", a: "Melasma is a chronic condition often triggered by hormones or sun. While it can be significantly cleared, maintenance and sun protection are essential." }
    ]
  },
  {
    id: "tattoo-removal",
    name: "Tattoo Removal",
    tagline: "A fresh start for your skin.",
    description: "Safe and effective laser removal for unwanted tattoos. We use advanced laser technology to break down ink particles with minimal impact on surrounding skin.",
    duration: "30-60 mins",
    recovery: "3-7 Days",
    category: "Laser",
    slug: "tattoo-removal",
    image: tattooRemove,
    alt: "Laser tattoo removal procedure",
    overview: "Our advanced Q-switched laser systems are designed to effectively shatter tattoo ink into microscopic particles, which are then naturally eliminated by the body's immune system. This allows for safe removal with minimal risk of scarring.",
    bestFor: ["Unwanted tattoos", "Faded tattoos before cover-ups", "Mistakes and blowouts"],
    benefits: ["Effectively removes a wide range of ink colors", "Minimal risk of scarring", "Highly precise targeting", "Fades tattoos over successive sessions"],
    results: "Gradual fading is seen after each session. Complete removal can take several months.",
    downtime: "Redness, swelling, and possible blistering for up to a week.",
    sessions: "Typically 6-10 sessions, spaced 6-8 weeks apart.",
    pain: "Moderate. A sensation often compared to a rubber band snapping against the skin. Numbing options are provided.",
    faqs: [
      { q: "Will the tattoo disappear completely?", a: "Most tattoos can be significantly faded or completely removed, though some ink colors are more stubborn than others." },
      { q: "Does tattoo removal leave a scar?", a: "When performed by our experts with proper aftercare, the risk of scarring is very low." }
    ]
  },
  {
    id: "microneedling",
    name: "Microneedling",
    tagline: "Rebuild and refine your skin texture.",
    description: "A minimally invasive treatment that stimulates natural collagen production to reduce scars, fine lines, and large pores.",
    duration: "45-60 mins",
    recovery: "2-3 Days",
    category: "Skin",
    slug: "microneedling",
    image: microneedling,
    alt: "Microneedling skin rejuvenation treatment",
    overview: "Microneedling (also known as collagen induction therapy) involves using fine needles to create hundreds of tiny, invisible puncture wounds in the top layer of skin. This micro-injury triggers the body's natural wound healing processes, resulting in cell turnover and increased collagen and elastin production.",
    bestFor: ["Acne scars", "Fine lines and wrinkles", "Enlarged pores", "Uneven skin texture"],
    benefits: ["Stimulates collagen and elastin", "Significantly reduces the appearance of acne scars", "Refines pore size", "Enhances absorption of skincare products"],
    results: "Skin appears tighter and more radiant after the first week; optimal results after multiple sessions.",
    downtime: "Redness similar to a mild sunburn for 1-3 days. Minor peeling may occur.",
    sessions: "3-6 sessions, spaced 4-6 weeks apart.",
    pain: "Mild. A topical numbing cream is applied prior to treatment.",
    faqs: [
      { q: "Does microneedling hurt?", a: "We use a medical-grade topical anesthetic before the procedure to ensure you remain completely comfortable." },
      { q: "Can I wear makeup after?", a: "You should wait at least 24 hours before applying makeup to avoid irritation and infection." }
    ]
  }
];

export function getServiceBySlug(slug) {
  return clinicServices.find((s) => s.slug === slug) || null;
}
