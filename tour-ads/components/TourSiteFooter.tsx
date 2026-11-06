'use client';

import React from 'react';
import { siteConfig } from '../config/siteConfig';

export default function TourSiteFooter() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="tour-footer">
      <div className="tour-container tour-footer-container">
        
        {/* Top Footer Row */}
        <div className="tour-footer-top">
          <div className="tour-footer-brand-side">
            <span className="tour-footer-logo">RHORDWAY<span className="dot">.</span></span>
            <p className="tour-footer-tagline">
              We make travel processing simple and stress-free. Premium holiday departures, verified 5-star accommodations, and comprehensive embassy visa support.
            </p>
          </div>

          <div className="tour-footer-contacts">
            <div className="contact-col">
              <span className="contact-label">Official Phone &amp; WhatsApp Lines</span>
              <a href={`tel:+${siteConfig.whatsappNumber}`} className="contact-val">
                {siteConfig.primaryPhoneFormatted}
              </a>
              <a href={`tel:+${siteConfig.alternatePhoneClean}`} className="contact-val">
                {siteConfig.alternatePhone}
              </a>
            </div>

            <div className="contact-col">
              <span className="contact-label">Email &amp; Social</span>
              <a href={`mailto:${siteConfig.contactEmail}`} className="contact-val">
                {siteConfig.contactEmail}
              </a>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="contact-val">
                Instagram: {siteConfig.instagram}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="tour-footer-divider"></div>

        {/* Bottom Footer Row */}
        <div className="tour-footer-bottom">
          <p className="tour-copy-text">
            &copy; {siteConfig.currentYear} {siteConfig.brandLegal}. All rights reserved.
          </p>

          <div className="tour-footer-quick-links">
            <button type="button" onClick={() => scrollTo('experiences')}>Experiences</button>
            <button type="button" onClick={() => scrollTo('doha-zanzibar')}>Doha + Zanzibar</button>
            <button type="button" onClick={() => scrollTo('doha-grand-prix')}>Doha Grand Prix</button>
            <button type="button" onClick={() => scrollTo('booking-collation')}>Book Slot</button>
            <button type="button" onClick={() => scrollTo('faqs')}>FAQs</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
