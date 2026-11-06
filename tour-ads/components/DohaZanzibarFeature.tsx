'use client';

import React from 'react';
import { tourPackagesData } from '../config/tourPackages';

interface DohaZanzibarFeatureProps {
  onSelectPackage?: (packageId: string) => void;
}

export default function DohaZanzibarFeature({ onSelectPackage }: DohaZanzibarFeatureProps) {
  const pkg = tourPackagesData['doha-zanzibar'];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="tour-section tour-feature-section" id="doha-zanzibar">
      <div className="tour-container">
        
        {/* Section Header */}
        <div className="tour-editorial-header anim-reveal-text">
          <div className="tour-eyebrow-pill">
            <span className="tour-blue-dot"></span>
            Dual Destination Flagship · Dec 12–19, 2026
          </div>
          <h2 className="tour-editorial-heading">
            From the energy of Doha to the shores of Zanzibar<span style={{ color: '#0080E8' }}>.</span>
          </h2>
          <p className="tour-editorial-sub">
            A seven-night luxury escape curated to seamlessly bridge two distinct worlds. Begin amidst the bold geometric architecture and rich Arabian desert of Qatar, then fly south with Qatar Airways to unwind along the white sand reefs and spice heritage of Zanzibar.
          </p>
        </div>

        {/* 7-Night Itinerary Sequence Columns */}
        <div className="tour-itinerary-split anim-reveal-text">
          
          {/* Part One: Doha (4 Nights) */}
          <div className="itinerary-column-card">
            <div className="itinerary-header-box">
              <span className="itinerary-part-tag">PART ONE · 4 NIGHTS</span>
              <h3 className="itinerary-location">Doha, Qatar</h3>
              <p className="itinerary-theme">Urban Exploration &amp; Arabian Heritage</p>
            </div>

            <div className="itinerary-img-wrap">
              <img 
                src="/assets/images/doha-skyline.jpg" 
                alt="Doha Qatar modern West Bay skyline — Rhordway" 
                loading="lazy" 
              />
            </div>

            <ul className="itinerary-list">
              <li>
                <span className="check-dot">✓</span>
                <div>
                  <strong>5-Star Doha Luxury Hotel:</strong> 4 nights in premium accommodations with daily morning gourmet breakfast buffet included.
                </div>
              </li>
              <li>
                <span className="check-dot">✓</span>
                <div>
                  <strong>Doha City Guided Tour:</strong> Explore West Bay modern towers, Katara Cultural Village, and the vibrant Corniche.
                </div>
              </li>
              <li>
                <span className="check-dot">✓</span>
                <div>
                  <strong>National Museum of Qatar:</strong> Jean Nouvel’s breathtaking architectural desert rose showcasing centuries of culture.
                </div>
              </li>
              <li>
                <span className="check-dot">✓</span>
                <div>
                  <strong>Villaggio Gondola Experience:</strong> Italianate indoor canal cruise through Doha’s premier luxury shopping mall.
                </div>
              </li>
              <li>
                <span className="check-dot">✓</span>
                <div>
                  <strong>4x4 Desert Safari &amp; Camel Trek:</strong> High-energy dune bashing excursion across golden dunes to the inland sea.
                </div>
              </li>
            </ul>
          </div>

          {/* Part Two: Zanzibar (3 Nights) */}
          <div className="itinerary-column-card">
            <div className="itinerary-header-box">
              <span className="itinerary-part-tag">PART TWO · 3 NIGHTS</span>
              <h3 className="itinerary-location">Zanzibar, Tanzania</h3>
              <p className="itinerary-theme">Tropical Reefs &amp; Historic Stone Town</p>
            </div>

            <div className="itinerary-img-wrap">
              <img 
                src="/assets/images/zanzibar-mnemba.jpg" 
                alt="Zanzibar Mnemba Island dolphin snorkelling — Rhordway" 
                loading="lazy" 
              />
            </div>

            <ul className="itinerary-list">
              <li>
                <span className="check-dot">✓</span>
                <div>
                  <strong>All-Inclusive 5-Star Beach Resort:</strong> Beachfront hospitality with daily breakfast, lunch, dinner, snacks, and cocktails.
                </div>
              </li>
              <li>
                <span className="check-dot">✓</span>
                <div>
                  <strong>Mnemba Island Sandbank Expedition:</strong> Private marine boat cruise for crystal snorkelling and wild dolphin encounters.
                </div>
              </li>
              <li>
                <span className="check-dot">✓</span>
                <div>
                  <strong>UNESCO Stone Town Guided Walk:</strong> Winding coral stone lanes, the Old Fort, and famous carved Swahili brass doors.
                </div>
              </li>
              <li>
                <span className="check-dot">✓</span>
                <div>
                  <strong>Natural Sea Turtle Lagoon Swim:</strong> Feed and swim alongside rescued green sea turtles in their protected tidal sanctuary.
                </div>
              </li>
              <li>
                <span className="check-dot">✓</span>
                <div>
                  <strong>Kendwa Sunset &amp; Kayaking:</strong> Unwind along powder-soft sand and take a tranquil ocean kayak excursion along the reef.
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Inclusions Banner */}
        <div className="tour-inclusions-banner anim-reveal-text">
          <div className="banner-pricing-side">
            <span className="banner-kicker">OFFICIAL ALL-INCLUSIVE RATE</span>
            <div className="banner-price">{pkg.pricing.standardFormatted}</div>
            <span className="banner-sub">{pkg.pricing.occupancyTerms}</span>
            <p className="banner-note">December 12–19, 2026 · Limited Cabin &amp; Hotel Slots</p>
          </div>

          <div className="banner-details-side">
            <h4 className="banner-includes-title">What’s Included in Your Package:</h4>
            <div className="banner-grid-2">
              <div>✓ Return Qatar Airways Flights</div>
              <div>✓ 5-Star Doha Hotel &amp; Breakfast</div>
              <div>✓ 5-Star All-Inclusive Zanzibar Resort</div>
              <div>✓ Qatar Tourist Visa Included</div>
              <div>✓ Tanzania Tourist Visa Included</div>
              <div>✓ Mandatory Zanzibar Travel Insurance</div>
              <div>✓ Private Airport Pickups &amp; Drop-offs</div>
              <div>✓ All Guided Excursions &amp; Entry Fees</div>
            </div>
            <div className="banner-action-wrap">
              <button 
                type="button" 
                className="banner-cta-btn"
                onClick={() => {
                  if (onSelectPackage) onSelectPackage('doha-zanzibar');
                  scrollTo('booking-collation');
                }}
              >
                <span>Reserve Doha + Zanzibar Slot</span>
                <span className="banner-arrow">↗</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
