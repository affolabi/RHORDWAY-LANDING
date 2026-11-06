'use client';

import React from 'react';

export default function BookingSteps() {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Experience',
      desc: 'Pick your preferred 2026 holiday escape: Doha + Zanzibar (Dec 12–19) or Doha Grand Prix (Nov 25 – Dec 1).'
    },
    {
      step: '02',
      title: 'Collate & Confirm Availability',
      desc: 'Enter your guest details below to calculate your estimated party cost and generate your official reservation PDF dossier.'
    },
    {
      step: '03',
      title: 'Direct WhatsApp Review & Invoice',
      desc: 'Submit your reservation dossier directly to our consultant desk on WhatsApp to confirm airline seats, rooms, and payment milestones.'
    }
  ];

  return (
    <section className="tour-section steps-section" id="booking-steps">
      <div className="tour-container">
        
        <div className="tour-section-header text-center anim-reveal-text">
          <div className="tour-eyebrow-pill center-pill">
            <span className="tour-blue-dot"></span>
            Simple 3-Step Process
          </div>
          <h2 className="tour-section-heading">
            How to Reserve Your Holiday Slot<span style={{ color: '#0080E8' }}>.</span>
          </h2>
          <p className="tour-section-subheading">
            A transparent and effortless reservation process designed to lock in your flights and 5-star rooms without hassle.
          </p>
        </div>

        <div className="steps-cards-grid anim-reveal-text">
          {steps.map((s) => (
            <div key={s.step} className="step-card">
              <span className="step-badge">STEP {s.step}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
