'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export default function SiteHeader() {
  const pathname = usePathname();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, scrollToConsultation } = useApp();

  if (pathname?.startsWith('/tour-ads')) {
    return null;
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Migration Services', href: '/migration-services' },
    { label: 'Holidays', href: '/holidays' },
  ];

  return (
    <>
      <header className="ref-header mw-white-header" id="siteHeader">
        <div className="ref-header-container mw-header-inner">
          <Link 
            href="/" 
            className="ref-brand-logo mw-brand-logo" 
            aria-label={`${siteConfig.brandName} Home`}
            onClick={() => closeMobileMenu()}
          >
            <img 
              src="/assets/images/rhordway-logo-dark.png" 
              alt={siteConfig.brandName} 
              className="rhordway-brand-logo-img"
              width="150"
              height="28"
            />
          </Link>

          <nav className="ref-nav-links mw-nav-links" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`ref-nav-link mw-nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ref-header-actions mw-header-actions">
            <button 
              type="button" 
              className="mw-black-pill-btn mobile-hide"
              style={{ letterSpacing: '0.05em', fontSize: '0.78rem', padding: '12px 24px' }}
              onClick={scrollToConsultation}
            >
              BOOK CONSULTATION
            </button>

            <button 
              type="button" 
              className={`menu-toggle-btn mw-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              id="menuToggleBtn" 
              aria-label="Toggle navigation menu" 
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`} 
        id="mobileNavDrawer" 
        aria-hidden={!isMobileMenuOpen}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link 
            href="/" 
            className="ref-brand-logo mw-brand-logo" 
            aria-label={`${siteConfig.brandName} Home`}
            onClick={closeMobileMenu}
          >
            <img 
              src="/assets/images/rhordway-logo-dark.png" 
              alt={siteConfig.brandName} 
              className="rhordway-brand-logo-img"
              width="140"
              height="26"
            />
          </Link>
          <button 
            type="button" 
            className="modal-close-btn" 
            id="mobileNavCloseBtn" 
            aria-label="Close menu"
            onClick={closeMobileMenu}
          >
            &times;
          </button>
        </div>

        <nav className="mobile-nav-links" aria-label="Mobile Navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '28px', borderTop: '1px solid #E4E4E7' }}>
          <button 
            type="button" 
            className="mw-black-pill-btn"
            style={{ width: '100%', padding: '14px', fontSize: '0.85rem' }}
            onClick={() => {
              closeMobileMenu();
              scrollToConsultation();
            }}
          >
            BOOK CONSULTATION ↗
          </button>

          <div style={{ marginTop: '20px', fontSize: '0.82rem', color: '#71717A', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div>
              <strong style={{ color: '#0F1115' }}>Direct WhatsApp / Phone:</strong><br />
              <a href={`tel:+${siteConfig.whatsappNumber}`} style={{ color: '#0080E8', textDecoration: 'none' }}>
                {siteConfig.primaryPhoneFormatted}
              </a>
            </div>
            <div>
              <strong style={{ color: '#0F1115' }}>Email:</strong><br />
              <a href={`mailto:${siteConfig.contactEmail}`} style={{ color: '#0080E8', textDecoration: 'none' }}>
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
