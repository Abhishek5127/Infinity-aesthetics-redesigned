"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const treatment = formData.get("treatment");

    if (!name || !phone || !treatment) {
      alert("Please fill in required fields: Name, Phone, and Treatment Interest.");
      return;
    }

    setStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      e.target.reset();
      
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1200);
  };

  return (
    <div className="ia-contact-form-wrap ia-reveal">
      <div className="ia-consult-card">
        <p className="ia-consult-label">First consultation fee</p>
        <p className="ia-consult-price">₹85</p>
        <p className="ia-consult-note">Credited toward your treatment if you book same day</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="ia-form-field">
          <input type="text" id="fullName" name="name" placeholder=" " required />
          <label htmlFor="fullName">Full Name</label>
        </div>

        <div className="ia-form-field">
          <input type="tel" id="phone" name="phone" placeholder=" " required />
          <label htmlFor="phone">Phone Number *</label>
        </div>

        <div className="ia-form-field">
          <input type="email" id="email" name="email" placeholder=" " />
          <label htmlFor="email">Email Address (optional)</label>
        </div>

        <div className="ia-form-row">
          <div className="ia-form-field ia-select-field">
            <select id="treatment" name="treatment" required defaultValue="">
              <option value="" disabled>Select…</option>
              <option value="skin-consultation">Skin Consultation</option>
              <option value="hair-treatment">Hair Treatment</option>
              <option value="laser">Laser</option>
              <option value="acne-program">Acne Program</option>
              <option value="chemical-peel">Chemical Peel</option>
              <option value="prp-therapy">PRP Therapy</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="treatment">Treatment Interest</label>
          </div>

          <div className="ia-form-field ia-select-field">
            <select id="time" name="time" defaultValue="">
              <option value="" disabled>Select…</option>
              <option value="morning">Morning (9–12)</option>
              <option value="afternoon">Afternoon (12–4)</option>
              <option value="evening">Evening (4–8)</option>
            </select>
            <label htmlFor="time">Preferred Time</label>
          </div>
        </div>

        <div className="ia-form-field">
          <textarea id="message" name="message" rows="3" placeholder=" "></textarea>
          <label htmlFor="message">Message / Additional Notes (optional)</label>
        </div>

        <button type="submit" className="ia-btn ia-btn-submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request Appointment →"}
        </button>

        <div className={`ia-form-success ${status === "success" ? "show" : ""}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          We&apos;ll call you within 2 hours ✓
        </div>
      </form>
    </div>
  );
}
