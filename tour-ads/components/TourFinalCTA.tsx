'use client';

import React from 'react';
import { siteConfig } from '../config/siteConfig';

export default function TourFinalCTA() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="tour-final-cta-section">
      <div className="tour-final-backdrop">
        <img 
          src="/assets/images/hero-airplane-sky.jpg" 
          alt="International travel with Rhordway" 
          loading="lazy"
        />
        <div className="tour-final-scrim"></div>
      </div>

      <div className="tour-container tour-final-inner anim-reveal-text">
        <div className="tour-eyebrow-pill white-pill">
          <span className="tour-blue-dot"></span>
          Limited 2026 Season Departures
        </div>

        <h2 className="tour-final-heading">
          Your Next Unforgettable Experience Starts Here<span style={{ color: '#0080E8' }}>.</span>
        </h2>

        <p className="tour-final-sub">
          Choose your escape and let our specialist travel team handle your flights, 5-star accommodations, and visa approvals with complete peace of mind.
        </p>

        <div className="tour-final-buttons">
          <button 
            type="button" 
            className="tour-final-btn-primary"
            onClick={() => scrollTo('booking-collation')}
          >
            <span>Enquire About Your Trip</span>
            <span className="btn-circle">↗</span>
          </button>

          <a 
            href={`https://wa.me/${siteConfig.whatsappNumber}`} 
            className="tour-final-btn-wa"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>Chat on WhatsApp</span>
            <span className="btn-circle">💬</span>
          </a>
        </div>

        <div className="tour-final-trust-strip">
          <span>✓ Direct WhatsApp Booking</span>
          <span>·</span>
          <span>✓ Official Bank Payments</span>
          <span>·</span>
          <span>✓ Guaranteed Flight Inventory</span>
        </div>
      </div>
    </section>
  );
}
