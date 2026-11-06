'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export default function SiteFooter() {
  const pathname = usePathname();
  const { scrollToConsultation, selectServiceAndScroll } = useApp();

  if (pathname?.startsWith('/tour-ads')) {
    return null;
  }

  return (
    <footer className="ref-footer">
      <div className="ref-footer-container">
        <div className="ref-footer-main-row">
          
          {/* Col 1: Brand & Socials */}
          <div className="ref-footer-brand-col">
            <Link href="/" className="ref-footer-logo" aria-label={`${siteConfig.brandName} Home`}>
              <img 
                src="/assets/images/rhordway-logo-dark.png" 
                alt={siteConfig.brandName} 
                className="rhordway-footer-logo-img"
                width="155"
                height="29"
              />
            </Link>
            <p className="ref-footer-tagline">
              We Make Travel Processing Simple And Stress-Free. Explore the world, one breathtaking destination at a time.
            </p>

            <div className="ref-social-icons-row" aria-label="Social media channels">
              {/* Facebook */}
              <a href="https://facebook.com/Rhordway" target="_blank" rel="noopener noreferrer" className="ref-social-icon icon-fb" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="https://twitter.com/Rhordway" target="_blank" rel="noopener noreferrer" className="ref-social-icon icon-tw" aria-label="Twitter">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/Rhordway" target="_blank" rel="noopener noreferrer" className="ref-social-icon icon-ig" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="ref-social-icon icon-wa" aria-label="WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="ref-footer-links-col">
            <h4 className="ref-footer-col-title">Pages &amp; Services</h4>
            <ul className="ref-footer-nav-list">
              <li><Link href="/">Home Overview</Link></li>
              <li><Link href="/about">About Rhordway</Link></li>
              <li><Link href="/migration-services">Migration &amp; Student Visas</Link></li>
              <li><Link href="/holidays">Curated Holiday Packages</Link></li>
              <li>
                <button 
                  type="button" 
                  style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                  onClick={() => selectServiceAndScroll('Student Visa & Study Abroad')}
                >
                  Student Visa &amp; SOP Structuring
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                  onClick={() => selectServiceAndScroll('Passport Processing & Renewal')}
                >
                  Passport Processing &amp; Renewal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Consultation Desk */}
          <div className="ref-footer-links-col">
            <h4 className="ref-footer-col-title">Consultation Desk</h4>
            <ul className="ref-footer-nav-list">
              <li>
                <a href={`tel:+${siteConfig.whatsappNumber}`}>
                  {siteConfig.primaryPhoneFormatted} (WhatsApp)
                </a>
              </li>
              <li>
                <a href={`tel:+${siteConfig.alternatePhoneClean}`}>
                  {siteConfig.alternatePhone} (Direct Line)
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <span style={{ color: '#71717A', fontSize: '0.85rem' }}>
                  Lagos, Nigeria · Global Corridors
                </span>
              </li>
              <li style={{ marginTop: '12px' }}>
                <button 
                  type="button"
                  className="mw-action-pill"
                  style={{ background: '#0F1115', color: '#FFFFFF', padding: '10px 18px', fontSize: '0.75rem', cursor: 'pointer', border: 'none', borderRadius: '100px' }}
                  onClick={scrollToConsultation}
                >
                  BOOK CONSULTATION ↗
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="ref-footer-bottom-bar">
          <p className="ref-footer-copy">
            &copy; {siteConfig.legal.copyrightYear} {siteConfig.brandName}™. All rights reserved. Registered travel consultancy in Nigeria.
          </p>
          <div className="ref-footer-legal-links">
            <span>Student Visas · Global Migration · Travel Visas · Passports · Flights · Transfers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
