import SkinTightning from "../app/assets/TreatmentImages/SkinTightning.webp";
import acneTreatment from "../app/assets/TreatmentImages/acneTreatment.png";
import hairPRPTherapy from "../app/assets/TreatmentImages/hairPRPTherapy.png";
import hydraFacial from "../app/assets/TreatmentImages/hydraFacial.jpeg";
import pigmentationCorrection from "../app/assets/TreatmentImages/pigmentation correction.jpg";
import microneedling from "../app/assets/TreatmentImages/Microneedling.jpeg";

import photoFacial from "../app/assets/TreatmentImages/photoFacial.webp";
import laserHairRemoval from "../app/assets/TreatmentImages/laserHairRemoval.webp";
import chemicalPeel from "../app/assets/TreatmentImages/chemicalPeel.webp";
import facePRP from "../app/assets/TreatmentImages/facePRP.webp";
import glutathioneIV from "../app/assets/TreatmentImages/glutathioneIV.webp";
import carbonLaser from "../app/assets/TreatmentImages/carbonLaser.webp";
import iplTreatment from "../app/assets/TreatmentImages/iplTreatment.webp";
import oxygeneoTreatment from "../app/assets/TreatmentImages/oxygeneoTreatment.webp";
import tattooRemove from "../app/assets/TreatmentImages/tattooRemove.png";

export const clinicServices = [
  {
    id: "hydra-facial",
    name: "Hydra Facial",
    tagline: "Illuminate your authentic beauty.",
    description: "Deeply cleanse, hydrate, and nourish. We combine spa-level comfort with clinical-grade active ingredients for an instant, lasting glow.",
    duration: "45-60 mins",
    recovery: "Instant Glow",
    category: "Facials & Glow",
    slug: "hydra-facial",
    image: hydraFacial,
    alt: "Hydra facial treatment process for deep hydration",
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
    id: "photo-facial",
    name: "Photo Facial",
    tagline: "Rejuvenate with light energy.",
    description: "A non-invasive treatment that uses light-based technology to target skin blemishes, pigmentation, and fine lines for an even complexion.",
    duration: "45 mins",
    recovery: "Minimal Redness",
    category: "Facials & Glow",
    slug: "photo-facial",
    image: photoFacial,
    alt: "Patient receiving a photo facial skin rejuvenation treatment",
    overview: "Photo Facial utilizes targeted light energy to heat the skin's surface gently, stimulating collagen and targeting superficial pigmented spots and redness.",
    bestFor: ["Sun spots", "Fine lines", "Mild redness", "Skin dullness"],
    benefits: ["Evens skin tone", "Stimulates natural collagen", "Fades light spots", "No recovery downtime needed"],
    results: "Smoother, brighter skin tone visible within 1-2 weeks.",
    downtime: "None. Slight flush for a few hours.",
    sessions: "3-5 sessions, spaced 3-4 weeks apart.",
    pain: "Mild warmth and slight snapping sensation.",
    faqs: [
      { q: "What is the recovery like?", a: "You can apply makeup and return to normal activities immediately, although broad-spectrum sunscreen is crucial." }
    ]
  },
  {
    id: "oxygeneo-treatment",
    name: "Oxygeneo Treatment",
    tagline: "Exfoliate, Infuse, and Oxygenate.",
    description: "3-in-1 super facial that exfoliates, infuses active nutrients, and oxygenates the skin from within for ultimate skin nourishment.",
    duration: "45 mins",
    recovery: "Instant Glow",
    category: "Facials & Glow",
    slug: "oxygeneo-treatment",
    image: oxygeneoTreatment,
    alt: "Oxygenating skincare treatment on patient's face",
    overview: "Oxygeneo utilizes the Bohr effect, inducing the body to send oxygen-rich blood to the skin's surface, maximizing the absorption of custom active serums infused during the treatment.",
    bestFor: ["Dullness", "Fine lines", "Enlarged pores", "Uneven texture"],
    benefits: ["Plumps and hydrates skin", "Exfoliates dead cells", "Oxygenates naturally from within", "Brighter, healthier looking complexion"],
    results: "Immediate skin plumping, smoothing, and radiance.",
    downtime: "None. Ready for any event.",
    sessions: "4-6 sessions, spaced 2 weeks apart for cumulative improvements.",
    pain: "None. Comforting, massage-like sensation.",
    faqs: [
      { q: "Is it suitable for sensitive skin?", a: "Yes, the custom capsules can be tailored to soothe sensitive and reactive skin barriers." }
    ]
  },
  {
    id: "chemical-peel",
    name: "Chemical Peel",
    tagline: "Reset and renew your skin.",
    description: "Formulated medical acids gently exfoliate dead layers to target acne, sun damage, and shallow texture issues.",
    duration: "30-45 mins",
    recovery: "1-3 Days Flaking",
    category: "Facials & Glow",
    slug: "chemical-peel",
    image: chemicalPeel,
    alt: "Application of a gentle chemical peel to a client's skin",
    overview: "We use customized, clinical-grade chemical solutions to peel away dead outer skin layers, encouraging cellular turnover and revealing fresh, healthy skin.",
    bestFor: ["Acne marks", "Uneven skin tone", "Fine lines", "Mild congestion"],
    benefits: ["Exfoliates congested cells", "Fades post-acne pigmentation", "Smooths skin texture", "Clarifies the overall complexion"],
    results: "Fresher, more luminous skin after the initial flaking stage clears.",
    downtime: "Mild flaking or dryness for 2-3 days.",
    sessions: "4-6 sessions, spaced 2-4 weeks apart.",
    pain: "Mild tingling or warm sensation during application.",
    faqs: [
      { q: "Will my skin peel off in sheets?", a: "Modern chemical peels are designed for controlled cellular shedding. You will typically experience mild flaking rather than dramatic peeling." }
    ]
  },
  {
    id: "laser-hair-removal",
    name: "Laser Hair Removal",
    tagline: "Smooth skin, simplified.",
    description: "Highly targeted laser beams destroy hair follicles at the root, delivering long-term hair reduction without razor burn or ingrowns.",
    duration: "30-90 mins",
    recovery: "No Downtime",
    category: "Laser & Light",
    slug: "laser-hair-removal",
    image: laserHairRemoval,
    alt: "Practitioner performing laser hair removal on patient's arm",
    overview: "Using advanced medical lasers, we target melanin in the hair follicle. The laser heats and destroys the follicle to prevent future hair growth while keeping surrounding skin safe.",
    bestFor: ["Unwanted facial/body hair", "Ingrown hairs", "Razor bumps", "Long-term hair reduction"],
    benefits: ["Permanent hair reduction", "Eliminates ingrown hairs", "Saves time and money compared to waxing", "Safe and effective for diverse skin tones"],
    results: "Noticeable thinning and reduction after 2-3 sessions.",
    downtime: "None. Avoid direct sun and hot showers for 24 hours.",
    sessions: "6-8 sessions, spaced 4-6 weeks apart.",
    pain: "Mild, like a small pinch or rubber band snap, managed with cooling tips.",
    faqs: [
      { q: "Is the reduction permanent?", a: "Yes, it offers permanent hair reduction. Occasional touch-ups may be required once or twice a year due to hormonal shifts." }
    ]
  },
  {
    id: "carbon-laser",
    name: "Carbon Laser",
    tagline: "Deep detox for instant clarity.",
    description: "Also known as the 'Hollywood Peel', this treatment uses carbon paste and laser energy to clear pores, reduce oil, and brighten skin.",
    duration: "45-60 mins",
    recovery: "No Downtime",
    category: "Laser & Light",
    slug: "carbon-laser",
    image: carbonLaser,
    alt: "Carbon laser peel treatment on client's face",
    overview: "A medical-grade carbon liquid is applied to the face, binding with oil, dirt, and dead cells. A Q-switched laser is then swept across, vaporizing the carbon along with impurities.",
    bestFor: ["Oily skin", "Enlarged pores", "Active blackheads", "Dull texture"],
    benefits: ["Instant pore purification", "Controls excess sebum", "Softens texture", "Promotes an immediate glow"],
    results: "Instantly refreshed skin with reduced oiliness.",
    downtime: "None. Perfect event prep.",
    sessions: "4-6 sessions, spaced 2-3 weeks apart.",
    pain: "None to very mild warmth/prickling.",
    faqs: [
      { q: "Does the carbon laser hurt?", a: "Not at all. You will hear a loud clicking sound as the laser interacts with the carbon, but it is completely painless." }
    ]
  },
  {
    id: "ipl-treatment",
    name: "IPL Treatment",
    tagline: "Target redness and pigmentation.",
    description: "Intense Pulsed Light therapy designed to target sun spots, active redness, rosacea, and superficial broken capillaries.",
    duration: "30-45 mins",
    recovery: "Minimal",
    category: "Laser & Light",
    slug: "ipl-treatment",
    image: iplTreatment,
    alt: "IPL laser therapy being applied to target redness",
    overview: "IPL filters specific wavelengths of light to target melanin (spots) and hemoglobin (redness) in the skin. The heat breaks down these pigment structures without damaging the skin surface.",
    bestFor: ["Sun spots / freckles", "Rosacea and redness", "Broken capillaries", "Mild phototanning"],
    benefits: ["Improves skin tone uniformity", "Reduces chronic redness", "Minimal downtime", "Stimulates general skin brightness"],
    results: "Pigmentation darkens and naturally flakes off within 5-7 days, showing clearer skin.",
    downtime: "1-2 days of mild swelling or darkening of spots.",
    sessions: "4-6 sessions, spaced 4 weeks apart.",
    pain: "Mild snap sensation, similar to a rubber band.",
    faqs: [
      { q: "How should I prepare?", a: "Avoid active tanning or direct intense sun exposure for 2-3 weeks prior to treatment." }
    ]
  },
  {
    id: "hair-prp",
    name: "Hair PRP",
    tagline: "Empower your natural growth.",
    description: "Revitalize thinning hair using your body's own growth factors. A natural, clinically proven approach to thicker, healthier hair follicles.",
    duration: "60 mins",
    recovery: "No Downtime",
    category: "PRP & Injectables",
    slug: "hair-prp",
    image: hairPRPTherapy,
    alt: "Scalp receiving hair PRP therapy",
    overview: "Platelet-Rich Plasma (PRP) therapy utilizes the healing properties of your own blood to stimulate hair follicles. By injecting concentrated growth factors into the scalp, we can naturally slow down hair loss and encourage new, thicker hair growth.",
    bestFor: ["Early stage hair thinning", "Male/Female pattern baldness", "Post-pregnancy hair loss", "Weak hair follicles"],
    benefits: ["100% natural (uses your own blood)", "Increases hair density", "Strengthens existing hair", "No risk of allergic reaction"],
    results: "Initial decrease in hair fall within 1 month, visible new growth after 3-4 months.",
    downtime: "None. You can wash your hair the next day.",
    sessions: "4-6 sessions, spaced 4 weeks apart.",
    pain: "Mild discomfort. Numbing spray/cream is used.",
    faqs: [
      { q: "Who is a good candidate for PRP?", a: "PRP works best for individuals in the early stages of hair thinning with active hair follicles." }
    ]
  },
  {
    id: "hair-prp-gfc",
    name: "Hair PRP( GFC)",
    tagline: "Next-gen hair follicle therapy.",
    description: "Growth Factor Concentrate (GFC) is an advanced, highly concentrated therapy derived from your growth factors for superior hair restoration results.",
    duration: "60 mins",
    recovery: "No Downtime",
    category: "PRP & Injectables",
    slug: "hair-prp-gfc",
    image: hairPRPTherapy,
    alt: "Advanced growth factor concentrate therapy for hair roots",
    overview: "GFC is a highly refined variant of PRP. It extracts and concentrates growth factors directly from activated platelets in a sterile, cell-free format, offering more targeted, predictable hair regeneration.",
    bestFor: ["Moderate hair thinning", "Stubborn pattern hair fall", "Scalp conditioning", "Post-PRP maintenance"],
    benefits: ["Highly concentrated growth factors", "Completely cell-free, minimizing irritation", "Fewer sessions required than standard PRP", "Promotes strong and shiny hair"],
    results: "Noticeable reduction in hair fall and initial volume boost in 2-3 sessions.",
    downtime: "None. Normal routine can be resumed immediately.",
    sessions: "3-4 sessions, spaced 4-6 weeks apart.",
    pain: "Mild, comfortable treatment with minimal injection sites.",
    faqs: [
      { q: "How is GFC different from PRP?", a: "GFC is cell-free and contains only active growth factors extracted in high concentrations, which leads to less inflammation and higher efficiency." }
    ]
  },
  {
    id: "face-prp",
    name: "Face PRP",
    tagline: "Vampire facial for youthful texture.",
    description: "Reinvigorate your facial skin using concentrated platelets. Fades wrinkles, improves skin laxity, and promotes deep healing from within.",
    duration: "60 mins",
    recovery: "1-2 Days Redness",
    category: "PRP & Injectables",
    slug: "face-prp",
    image: facePRP,
    alt: "PRP face rejuvenation treatment on patient's skin",
    overview: "Face PRP (Platelet-Rich Plasma) involves infusing your own platelet growth factors back into your skin via micro-punctures, which triggers a powerful natural repair process for smoother, tighter skin.",
    bestFor: ["Acne scars", "Fine lines", "Loss of volume", "Tired skin texture"],
    benefits: ["Naturally boosts collagen and elastin", "Fades scar visibility", "Improves under-eye circles", "Safe and biocompatible"],
    results: "Enhanced skin texture and tone developing over 2-4 weeks.",
    downtime: "1-2 days of redness similar to a light sunburn.",
    sessions: "3-4 sessions, spaced 4 weeks apart.",
    pain: "Mild discomfort, managed with topical anesthetic.",
    faqs: [
      { q: "Is there any risk of reaction?", a: "Since PRP is made from your own blood, there is virtually zero risk of allergic reaction or rejection." }
    ]
  },
  {
    id: "glutathione-iv",
    name: "Glutathione IV",
    tagline: "Detoxify and brighten from within.",
    description: "Intravenous infusion of glutathione and vitamin C to detoxify cells, combat oxidative stress, and reveal brighter, even-toned skin.",
    duration: "45 mins",
    recovery: "No Downtime",
    category: "PRP & Injectables",
    slug: "glutathione-iv",
    image: glutathioneIV,
    alt: "Patient receiving a glutathione IV infusion in a clinic",
    overview: "Glutathione is a master antioxidant. Delivering it intravenously ensures 100% absorption, neutralizing free radicals throughout the body and naturally inhibiting melanin production.",
    bestFor: ["Body pigmentation", "Chronic fatigue", "Dull skin", "Environmental toxin exposure"],
    benefits: ["Whole-body skin brightening", "Powerful liver detox", "Increases cellular energy", "Improves skin health from the inside out"],
    results: "Brighter skin tone and increased vitality noticeable within 3-4 sessions.",
    downtime: "None. You can return to work immediately.",
    sessions: "6-10 sessions, spaced weekly or bi-weekly.",
    pain: "Minimal. A tiny needle pinch during IV placement.",
    faqs: [
      { q: "Are IV drips safe?", a: "Yes, our IV infusions are administered by certified professionals in sterile conditions, tailored to your health profile." }
    ]
  },
  {
    id: "hifu",
    name: "HIFU",
    tagline: "Lift and contour, naturally.",
    description: "Stimulate deep collagen production to lift sagging skin on the face and neck. Achieve a firmer, more contoured profile without surgery.",
    duration: "60-90 mins",
    recovery: "No Downtime",
    category: "Advanced Skin Care",
    slug: "hifu",
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
    id: "scar-treatment",
    name: "Scar Treatment",
    tagline: "Rebuild and refine your skin texture.",
    description: "Clinically proven collagen induction therapy utilizing microneedling and active serums to target deep acne scars, stretch marks, and textural voids.",
    duration: "45-60 mins",
    recovery: "2-3 Days Redness",
    category: "Advanced Skin Care",
    slug: "scar-treatment",
    image: microneedling,
    alt: "Microneedling treatment targeting acne scars",
    overview: "Microneedling creates micro-channels in the skin. This triggers the body's natural healing response to lay down new collagen and elastin fibers, filling in depressions and refining structural scars.",
    bestFor: ["Acne scars", "Surgical scars", "Large pores", "Uneven skin texture"],
    benefits: ["Significantly reduces acne scars", "Smooths skin texture", "Reduces pore size", "Promotes firmer, thicker skin"],
    results: "Improvement in skin texture starts within 1-2 weeks; scars fade progressively over multiple sessions.",
    downtime: "Mild redness and swelling for 24-48 hours.",
    sessions: "4-6 sessions, spaced 4 weeks apart.",
    pain: "Mild discomfort, managed with medical-grade numbing cream.",
    faqs: [
      { q: "Can old scars be treated?", a: "Yes, microneedling is highly effective at breaking up old scar tissue, though older or deeper scars may require more sessions." }
    ]
  },
  {
    id: "acne-treatment",
    name: "Acne Treatment",
    tagline: "Clear skin, fearless confidence.",
    description: "Stop masking the problem. Get to the root cause of active breakouts with our targeted medical treatments, combining extraction, peels, and light therapy.",
    duration: "45-60 mins",
    recovery: "Minimal",
    category: "Advanced Skin Care",
    slug: "acne-treatment",
    image: acneTreatment,
    alt: "Active acne skin treatment and extractions",
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
    id: "pigmentation-treatment",
    name: "Pigmentation Treatment",
    tagline: "Flawless, even-toned perfection.",
    description: "Effectively fade dark spots, melasma, and sun damage using advanced Q-switch lasers and customized lightening serums tailored to your skin type.",
    duration: "45 mins",
    recovery: "1-2 Days",
    category: "Advanced Skin Care",
    slug: "pigmentation-treatment",
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
    tagline: "Fade the past, reclaim your skin.",
    description: "Safely and effectively fade unwanted tattoos using advanced laser technology designed to target and break down deep ink pigments.",
    duration: "15-30 mins",
    recovery: "3-5 Days",
    category: "Advanced Skin Care",
    slug: "tattoo-removal",
    image: tattooRemove,
    alt: "Laser tattoo removal session at Infinity Aesthetics clinic Ajmer",
    overview: "Our advanced Q-switch laser breaks down tattoo ink particles into tiny fragments that your body's lymphatic system naturally clears away over time, ensuring safe and progressive fading.",
    bestFor: ["Unwanted tattoos", "Fading old tattoos for cover-ups"],
    benefits: ["Safely shatters ink pigments", "Effective on dark and colored inks", "Minimizes risk of scarring", "Precision treatment areas"],
    results: "Progressive fading over multiple sessions as ink clears.",
    downtime: "3-5 days of mild swelling, redness, or scabbing.",
    sessions: "6-8 sessions, spaced 6-8 weeks apart.",
    pain: "Feels like a rubber band snapping against the skin.",
    faqs: [
      { q: "How many sessions are required?", a: "The number of sessions depends on ink depth, color, age of the tattoo, and your skin type. Typically, 6 to 8 sessions are needed for optimal fading." }
    ]
  }
];

export function getServiceBySlug(slug) {
  return clinicServices.find((s) => s.slug === slug) || null;
}
