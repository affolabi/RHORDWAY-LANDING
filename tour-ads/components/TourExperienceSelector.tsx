'use client';

import React from 'react';
import { tourPackagesData } from '../config/tourPackages';

interface TourExperienceSelectorProps {
  onSelectPackage?: (packageId: string) => void;
}

export default function TourExperienceSelector({ onSelectPackage }: TourExperienceSelectorProps) {
  const pkgDZ = tourPackagesData['doha-zanzibar'];
  const pkgGP = tourPackagesData['doha-grand-prix'];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="tour-section" id="experiences">
      <div className="tour-container">
        
        {/* Section Header */}
        <div className="tour-section-header text-center anim-reveal-text">
          <div className="tour-eyebrow-pill center-pill">
            <span className="tour-blue-dot"></span>
            Curated 2026 Departures
          </div>
          <h2 className="tour-section-heading">
            Choose Your Unforgettable 2026 Journey<span style={{ color: '#0080E8' }}>.</span>
          </h2>
          <p className="tour-section-subheading">
            Two distinct holiday concepts designed for travellers who appreciate architectural wonder, tropical island serenity, or high-speed motorsport prestige.
          </p>
        </div>

        {/* 2-Item Premium Layout */}
        <div className="tour-duo-grid">
          
          {/* Card 1: Doha + Zanzibar */}
          <article className="tour-duo-card anim-reveal-text">
            <div className="tour-duo-media">
              <img 
                src="/assets/images/zanzibar-beach.jpg" 
                alt="Zanzibar Beach and coastal luxury resort — Rhordway holiday package" 
                loading="lazy" 
              />
              <div className="tour-duo-scrim"></div>
              <div className="tour-duo-badge-floating">
                <span>{pkgDZ.dates}</span>
                <span className="bullet">·</span>
                <span>{pkgDZ.durationLabel}</span>
              </div>
            </div>

            <div className="tour-duo-content">
              <div className="tour-duo-top">
                <span className="tour-duo-kicker">DUAL ESCAPE · QATAR &amp; TANZANIA</span>
                <h3 className="tour-duo-title">{pkgDZ.title}</h3>
                <p className="tour-duo-summary">{pkgDZ.overviewDescription}</p>
              </div>

              <div className="tour-duo-inclusions-preview">
                <div className="inc-pill">✓ 5-Star Doha Hotel &amp; Daily Breakfast</div>
                <div className="inc-pill">✓ All-Inclusive Zanzibar Beach Resort</div>
                <div className="inc-pill">✓ Qatar Airways Flights &amp; Private Transfers</div>
                <div className="inc-pill">✓ Qatar &amp; Tanzania Visas + Insurance</div>
              </div>

              <div className="tour-duo-price-block">
                <div>
                  <span className="price-label">All-Inclusive Package Rate</span>
                  <div className="price-number">{pkgDZ.pricing.standardFormatted}</div>
                  <span className="price-terms">{pkgDZ.pricing.occupancyTerms}</span>
                </div>

                <div className="tour-duo-actions">
                  <button 
                    type="button" 
                    className="tour-duo-view-btn"
                    onClick={() => scrollTo('doha-zanzibar')}
                  >
                    View Itinerary ↗
                  </button>
                  <button 
                    type="button" 
                    className="tour-duo-reserve-btn"
                    onClick={() => {
                      if (onSelectPackage) onSelectPackage('doha-zanzibar');
                      scrollTo('booking-collation');
                    }}
                  >
                    Reserve Slot
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2: Doha Grand Prix */}
          <article className="tour-duo-card anim-reveal-text anim-delay-1">
            <div className="tour-duo-media">
              <img 
                src="/assets/images/doha-f1-grand-prix.jpg" 
                alt="Formula 1 Qatar Airways Qatar Grand Prix at Lusail International Circuit — Rhordway" 
                loading="lazy" 
              />
              <div className="tour-duo-scrim"></div>
              <div className="tour-duo-badge-floating f1-badge">
                <span>{pkgGP.dates}</span>
                <span className="bullet">·</span>
                <span>{pkgGP.durationLabel}</span>
              </div>
            </div>

            <div className="tour-duo-content">
              <div className="tour-duo-top">
                <span className="tour-duo-kicker">MOTORSPORT LUXURY · LUSAIL CIRCUIT</span>
                <h3 className="tour-duo-title">{pkgGP.title}</h3>
                <p className="tour-duo-summary">{pkgGP.overviewDescription}</p>
              </div>

              <div className="tour-duo-inclusions-preview">
                <div className="inc-pill">✓ 3-Day Formula 1 Lusail Circuit Weekend</div>
                <div className="inc-pill">✓ 6 Nights at 5-Star Doha Luxury Hotel</div>
                <div className="inc-pill">✓ Return Flights &amp; Qatar Tourist Visa</div>
                <div className="inc-pill">✓ 4x4 Desert Safari &amp; Inland Sea Excursion</div>
              </div>

              <div className="tour-duo-price-block">
                <div>
                  <span className="price-label">Starting Package Rate</span>
                  <div className="price-number">From {pkgGP.pricing.standardFormatted}</div>
                  <span className="price-terms">Double Occupancy (Single: ₦4,150,000)</span>
                </div>

                <div className="tour-duo-actions">
                  <button 
                    type="button" 
                    className="tour-duo-view-btn"
                    onClick={() => scrollTo('doha-grand-prix')}
                  >
                    View Weekend ↗
                  </button>
                  <button 
                    type="button" 
                    className="tour-duo-reserve-btn"
                    onClick={() => {
                      if (onSelectPackage) onSelectPackage('doha-grand-prix');
                      scrollTo('booking-collation');
                    }}
                  >
                    Reserve Slot
                  </button>
                </div>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
