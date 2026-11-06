'use client';

import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function TourSiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="tour-header" id="tourHeader">
        <div className="tour-header-container">
          {/* Brand Logo */}
          <a href="#hero" className="tour-brand-logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
            <img 
              src="/assets/images/rhordway-logo-dark.png" 
              alt={siteConfig.brandName} 
              className="tour-logo-img"
              width="140"
              height="26"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="tour-nav-links" aria-label="Campaign Navigation">
            <button type="button" onClick={() => scrollTo('experiences')} className="tour-nav-btn">
              Offers
            </button>
            <button type="button" onClick={() => scrollTo('moments')} className="tour-nav-btn">
              Through Our Lens
            </button>
            <button type="button" onClick={() => scrollTo('reviews')} className="tour-nav-btn">
              Reviews
            </button>
            <button type="button" onClick={() => scrollTo('faqs')} className="tour-nav-btn">
              FAQs
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="tour-header-cta-wrap">
            <button 
              type="button" 
              className="tour-header-cta"
              onClick={() => scrollTo('booking-desk')}
            >
              <span>Book a Slot</span>
              <span className="tour-cta-arrow" aria-hidden="true">↗</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              type="button" 
              className="tour-mobile-menu-btn" 
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="tour-mobile-drawer">
          <div className="tour-mobile-drawer-header">
            <img 
              src="/assets/images/rhordway-logo-dark.png" 
              alt={siteConfig.brandName} 
              className="tour-logo-img"
              width="130"
              height="24"
            />
            <button type="button" className="tour-drawer-close" onClick={() => setMobileMenuOpen(false)}>✕</button>
          </div>
          <nav className="tour-mobile-nav">
            <button type="button" onClick={() => scrollTo('experiences')} className="tour-mobile-link">
              2026 Holiday Offers
            </button>
            <button type="button" onClick={() => scrollTo('moments')} className="tour-mobile-link">
              Through Our Lens (Videos &amp; Photos)
            </button>
            <button type="button" onClick={() => scrollTo('reviews')} className="tour-mobile-link">
              Traveller Reviews ★★★★★
            </button>
            <button type="button" onClick={() => scrollTo('faqs')} className="tour-mobile-link">
              Frequently Asked Questions
            </button>
          </nav>
          <div className="tour-mobile-drawer-footer">
            <button 
              type="button" 
              className="tour-drawer-cta"
              onClick={() => scrollTo('booking-desk')}
            >
              Reserve Your Holiday Slot ↗
            </button>
            <a href={`https://wa.me/${siteConfig.whatsappNumber}`} className="tour-drawer-wa-btn" target="_blank" rel="noopener noreferrer">
              WhatsApp Desk: {siteConfig.primaryPhoneFormatted}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
