'use client';

import React, { useState } from 'react';
import { tourPackagesData } from '../config/tourPackages';

interface GrandPrixFeatureProps {
  onSelectPackage?: (packageId: string, occupancy?: string) => void;
}

export default function GrandPrixFeature({ onSelectPackage }: GrandPrixFeatureProps) {
  const [occupancy, setOccupancy] = useState<'double' | 'single'>('double');
  const pkg = tourPackagesData['doha-grand-prix'];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedRate = occupancy === 'double' ? '₦3,400,000' : '₦4,150,000';
  const selectedTerms =
    occupancy === 'double'
      ? 'per person sharing (Double Occupancy)'
      : 'solo traveller private room (Single Occupancy)';

  return (
    <section className="tour-section tour-grand-prix-section" id="doha-grand-prix">
      <div className="tour-container">
        
        {/* Editorial Header */}
        <div className="tour-editorial-header anim-reveal-text">
          <div className="tour-eyebrow-pill f1-pill">
            <span className="tour-red-dot"></span>
            Formula 1 Qatar Grand Prix · Nov 25 – Dec 1, 2026
          </div>
          <h2 className="tour-editorial-heading">
            Experience Doha beyond the ordinary<span style={{ color: '#E52E2E' }}>.</span>
          </h2>
          <p className="tour-editorial-sub">
            Immerse yourself in 6 nights of 5-star hospitality, cultural museum exploration, and the heart-pounding spectacle of the Formula 1 Qatar Airways Qatar Grand Prix under the Lusail International Circuit floodlights.
          </p>
        </div>

        {/* Grand Prix Spotlight Grid */}
        <div className="grand-prix-spotlight-grid anim-reveal-text">
          
          {/* Left Media & Highlight Cards */}
          <div className="gp-left-media">
            <div className="gp-hero-image-wrap">
              <img 
                src="/assets/images/doha-f1-grand-prix.jpg" 
                alt="Formula 1 Lusail Circuit night race — Rhordway" 
                loading="lazy" 
              />
              <div className="gp-img-badge">3-DAY FORMULA 1 RACE WEEKEND</div>
            </div>

            <div className="gp-highlights-boxes">
              <div className="gp-box">
                <span className="gp-box-title">3-Day F1 Admission</span>
                <p className="gp-box-desc">Practice, qualifying, and Sunday night Grand Prix at Lusail Circuit.</p>
              </div>
              <div className="gp-box">
                <span className="gp-box-title">5-Star Doha Luxury</span>
                <p className="gp-box-desc">6 nights accommodation with daily morning breakfast buffet.</p>
              </div>
              <div className="gp-box">
                <span className="gp-box-title">Inland Sea Desert Safari</span>
                <p className="gp-box-desc">4x4 dune roller-coaster tour to the breathtaking Khor Al Adaid.</p>
              </div>
            </div>
          </div>

          {/* Right Pricing & Inclusions Card */}
          <div className="gp-right-card">
            <div className="gp-tier-selector-header">
              <span className="gp-tier-label">SELECT OCCUPANCY TIER</span>
              <div className="gp-toggle-pills">
                <button 
                  type="button"
                  className={`gp-toggle-btn ${occupancy === 'double' ? 'active' : ''}`}
                  onClick={() => setOccupancy('double')}
                >
                  Double Occupancy
                </button>
                <button 
                  type="button"
                  className={`gp-toggle-btn ${occupancy === 'single' ? 'active' : ''}`}
                  onClick={() => setOccupancy('single')}
                >
                  Single Occupancy
                </button>
              </div>
            </div>

            <div className="gp-pricing-display">
              <div className="gp-price-val">{selectedRate}</div>
              <span className="gp-price-sub">{selectedTerms}</span>
            </div>

            <div className="gp-inclusions-list">
              <h4 className="gp-inc-title">Package Inclusions:</h4>
              <ul>
                <li>✓ 6 Nights at a Luxury 5-Star Doha Hotel</li>
                <li>✓ Daily Morning Gourmet Breakfast Included</li>
                <li>✓ Return International Flight Tickets</li>
                <li>✓ 3-Day Formula 1 Lusail Circuit Grand Prix Access</li>
                <li>✓ Qatar Electronic Tourist Visa Included</li>
                <li>✓ Return Airport Transfers (Hamad International Airport)</li>
                <li>✓ Lusail International Circuit Transport Coordination</li>
                <li>✓ Comprehensive Guided Doha City Tour</li>
                <li>✓ National Museum of Qatar Admission</li>
                <li>✓ 4x4 Desert Safari &amp; Inland Sea Excursion</li>
              </ul>
            </div>

            <div className="gp-action-wrap">
              <button 
                type="button" 
                className="gp-reserve-btn"
                onClick={() => {
                  if (onSelectPackage) {
                    onSelectPackage(
                      'doha-grand-prix',
                      occupancy === 'double'
                        ? 'Double Occupancy (per person sharing)'
                        : 'Single Occupancy (solo room)'
                    );
                  }
                  scrollTo('booking-collation');
                }}
              >
                <span>Reserve Your Grand Prix Slot</span>
                <span className="gp-arrow">↗</span>
              </button>
              <span className="gp-guarantee">Official 2026 Season Allocation · Limited Availability</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
