'use client';

import React from 'react';
import { tourPackagesData } from '../config/tourPackages';

interface TourCampaignHeroProps {
  onSelectPackage?: (packageId: string) => void;
}

export default function TourCampaignHero({ onSelectPackage }: TourCampaignHeroProps) {
  const pkgDZ = tourPackagesData['doha-zanzibar'];
  const pkgGP = tourPackagesData['doha-grand-prix'];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="tour-hero-section" id="hero">
      {/* Background with Ambient Overlay */}
      <div className="tour-hero-backdrop">
        <img 
          src="/assets/images/hero-reference-bridge.jpg" 
          alt="Luxury travel at dawn — Rhordway exclusive holiday departures" 
          className="tour-hero-bg-img"
          fetchPriority="high"
        />
        <div className="tour-hero-scrim"></div>
      </div>

      <div className="tour-container tour-hero-inner">
        {/* Top Text Content */}
        <div className="tour-hero-content anim-reveal-hero">
          <div className="tour-eyebrow-pill">
            <span className="tour-blue-dot"></span>
            Exclusive 2026 Holiday Departures
          </div>

          <h1 className="tour-hero-title">
            Two Destinations.<br />
            <span className="tour-title-soft">One Extraordinary Escape.</span>
          </h1>

          <p className="tour-hero-lead">
            From Doha's striking geometric skyline to Zanzibar's turquoise coral shores, discover two unforgettable luxury journeys curated by Rhordway.
          </p>

          <div className="tour-hero-cta-group">
            <button 
              type="button" 
              className="tour-btn-primary"
              onClick={() => scrollTo('experiences')}
            >
              <span>Explore the Experiences</span>
              <span className="tour-btn-circle" aria-hidden="true">↓</span>
            </button>

            <button 
              type="button" 
              className="tour-btn-glass"
              onClick={() => scrollTo('booking-collation')}
            >
              <span>Speak to a Travel Consultant</span>
              <span className="tour-btn-circle" aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        {/* 2 Featured Holiday Package Cards in Hero */}
        <div className="tour-hero-cards-grid anim-reveal-cards">
          {/* Package 1: Doha + Zanzibar */}
          <article 
            className="tour-hero-card"
            onClick={() => {
              if (onSelectPackage) onSelectPackage('doha-zanzibar');
              scrollTo('doha-zanzibar');
            }}
          >
            <div className="tour-card-top-tag">
              <span className="tour-card-badge">{pkgDZ.dates}</span>
              <span className="tour-card-nights">{pkgDZ.durationLabel}</span>
            </div>
            <h3 className="tour-card-title">{pkgDZ.title}</h3>
            <p className="tour-card-desc">{pkgDZ.destinationBreakdown}</p>
            <div className="tour-card-price-row">
              <span className="tour-card-price">{pkgDZ.pricing.standardFormatted}</span>
              <span className="tour-card-occupancy">{pkgDZ.pricing.occupancyTerms}</span>
            </div>
            <div className="tour-card-footer">
              <span className="tour-card-link">View Itinerary Details &rarr;</span>
              <span className="tour-card-arrow-circle">↗</span>
            </div>
          </article>

          {/* Package 2: Doha Grand Prix */}
          <article 
            className="tour-hero-card grand-prix-card"
            onClick={() => {
              if (onSelectPackage) onSelectPackage('doha-grand-prix');
              scrollTo('doha-grand-prix');
            }}
          >
            <div className="tour-card-top-tag">
              <span className="tour-card-badge f1-badge">{pkgGP.dates}</span>
              <span className="tour-card-nights">{pkgGP.durationLabel}</span>
            </div>
            <h3 className="tour-card-title">{pkgGP.title}</h3>
            <p className="tour-card-desc">{pkgGP.destinationBreakdown}</p>
            <div className="tour-card-price-row">
              <span className="tour-card-price">{pkgGP.pricing.standardFormatted}</span>
              <span className="tour-card-occupancy">per person on double occupancy</span>
            </div>
            <div className="tour-card-footer">
              <span className="tour-card-link">View Race Weekend &rarr;</span>
              <span className="tour-card-arrow-circle">↗</span>
            </div>
          </article>
        </div>

        {/* Bottom Trust Ribbon */}
        <div className="tour-hero-trust-ribbon anim-reveal-trust">
          <span>✓ RETURN FLIGHTS INCLUDED</span>
          <span className="ribbon-sep">·</span>
          <span>✓ 5-STAR LUXURY ACCOMMODATION</span>
          <span className="ribbon-sep">·</span>
          <span>✓ EMBASSY VISAS &amp; INSURANCE HANDLED</span>
          <span className="ribbon-sep">·</span>
          <span>✓ PRIVATE AIRPORT TRANSFERS</span>
        </div>
      </div>
    </section>
  );
}
