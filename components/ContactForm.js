"use client";

import { useRef, useState } from "react";

const CLINIC_WHATSAPP = "917788991101";

const TREATMENT_LABELS = {
  "skin-consultation": "General Skin Consultation",
  "hydra-facial": "Hydra Facial",
  "photo-facial": "Photo Facial",
  "laser-hair-removal": "Laser Hair Removal",
  "chemical-peel": "Chemical Peel",
  "hifu": "HIFU",
  "hair-prp": "Hair PRP",
  "hair-prp-gfc": "Hair PRP (GFC)",
  "face-prp": "Face PRP",
  "glutathione-iv": "Glutathione IV",
  "carbon-laser": "Carbon Laser",
  "ipl-treatment": "IPL Treatment",
  "oxygeneo-treatment": "Oxygeneo Treatment",
  "scar-treatment": "Scar Treatment",
  "acne-treatment": "Acne Treatment",
  "pigmentation-treatment": "Pigmentation Treatment",
  "other": "Other",
};

const TIME_LABELS = {
  morning: "Morning (9-12)",
  afternoon: "Afternoon (12-4)",
  evening: "Evening (4-8)",
};

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validate = (data) => {
    const next = {};
    if (!data.name.trim()) next.name = "Please enter your name.";
    if (!data.phone.trim()) {
      next.phone = "Please enter a phone number.";
    } else if (data.phone.replace(/\D/g, "").length < 10) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!data.treatment) next.treatment = "Please pick a treatment.";
    return next;
  };

  const buildWhatsappMessage = (data) => {
    const treatment = TREATMENT_LABELS[data.treatment] || data.treatment;
    const time = TIME_LABELS[data.time] || "";
    const lines = [
      "Hi Infinity Aesthetics,",
      "I'd like to book a consultation in Ajmer.",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      `Treatment: ${treatment}`,
      time ? `Preferred time: ${time}` : null,
      data.message ? `Notes: ${data.message}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: (formData.get("name") || "").toString(),
      phone: (formData.get("phone") || "").toString(),
      email: (formData.get("email") || "").toString(),
      treatment: (formData.get("treatment") || "").toString(),
      time: (formData.get("time") || "").toString(),
      message: (formData.get("message") || "").toString(),
    };

    const nextErrors = validate(data);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstField = ["name", "phone", "treatment"].find((field) => nextErrors[field]);
      formRef.current?.querySelector(`[name="${firstField}"]`)?.focus();
      return;
    }

    setStatus("submitting");

    const message = buildWhatsappMessage(data);
    const waUrl = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setStatus("success");
    e.target.reset();

    setTimeout(() => {
      setStatus("idle");
    }, 6000);
  };

  const clearError = (field) =>
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });

  return (
    <div className="ia-contact-form-wrap ia-reveal">
      <div className="ia-consult-card">
        <p className="ia-consult-label">First consultation</p>
        <p className="ia-consult-price">Free</p>
        <p className="ia-consult-note">No commitment required. Come discuss your goals.</p>
      </div>

      <form onSubmit={handleSubmit} ref={formRef} noValidate>
        <div className="ia-form-field">
          <input
            type="text"
            id="fullName"
            name="name"
            placeholder=" "
            required
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "err-name" : undefined}
            onChange={() => clearError("name")}
          />
          <label htmlFor="fullName">Full Name</label>
          {errors.name && (
            <p className="ia-form-error" id="err-name" role="alert">{errors.name}</p>
          )}
        </div>

        <div className="ia-form-field">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder=" "
            required
            aria-invalid={errors.phone ? "true" : undefined}
            aria-describedby={errors.phone ? "err-phone" : undefined}
            onChange={() => clearError("phone")}
          />
          <label htmlFor="phone">Phone Number *</label>
          {errors.phone && (
            <p className="ia-form-error" id="err-phone" role="alert">{errors.phone}</p>
          )}
        </div>

        <div className="ia-form-field">
          <input type="email" id="email" name="email" placeholder=" " />
          <label htmlFor="email">Email Address (optional)</label>
        </div>

        <div className="ia-form-row">
          <div className="ia-form-field ia-select-field">
            <select
              id="treatment"
              name="treatment"
              required
              defaultValue=""
              aria-invalid={errors.treatment ? "true" : undefined}
              aria-describedby={errors.treatment ? "err-treatment" : undefined}
              onChange={() => clearError("treatment")}
            >
              <option value="" disabled>Select...</option>
              <option value="skin-consultation">General Skin Consultation</option>
              <option value="hydra-facial">Hydra Facial</option>
              <option value="photo-facial">Photo Facial</option>
              <option value="laser-hair-removal">Laser Hair Removal</option>
              <option value="chemical-peel">Chemical Peel</option>
              <option value="hifu">HIFU</option>
              <option value="hair-prp">Hair PRP</option>
              <option value="hair-prp-gfc">Hair PRP (GFC)</option>
              <option value="face-prp">Face PRP</option>
              <option value="glutathione-iv">Glutathione IV</option>
              <option value="carbon-laser">Carbon Laser</option>
              <option value="ipl-treatment">IPL Treatment</option>
              <option value="oxygeneo-treatment">Oxygeneo Treatment</option>
              <option value="scar-treatment">Scar Treatment</option>
              <option value="acne-treatment">Acne Treatment</option>
              <option value="pigmentation-treatment">Pigmentation Treatment</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="treatment">Treatment Interest</label>
            {errors.treatment && (
              <p className="ia-form-error" id="err-treatment" role="alert">{errors.treatment}</p>
            )}
          </div>

          <div className="ia-form-field ia-select-field">
            <select id="time" name="time" defaultValue="">
              <option value="" disabled>Select...</option>
              <option value="morning">Morning (9-12)</option>
              <option value="afternoon">Afternoon (12-4)</option>
              <option value="evening">Evening (4-8)</option>
            </select>
            <label htmlFor="time">Preferred Time</label>
          </div>
        </div>

        <div className="ia-form-field">
          <textarea id="message" name="message" rows="3" placeholder=" "></textarea>
          <label htmlFor="message">Message / Additional Notes (optional)</label>
        </div>

        <button type="submit" className="ia-btn ia-btn-submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Opening WhatsApp..." : "Request Appointment in Ajmer"}
        </button>

        <div className={`ia-form-success ${status === "success" ? "show" : ""}`} role="status">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
          Opened in WhatsApp - just hit send and we&apos;ll reply within 2 hours.
        </div>
      </form>
    </div>
  );
}
