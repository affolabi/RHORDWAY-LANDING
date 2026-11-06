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

  const tourCards = [
    {
      id: 'doha-zanzibar',
      title: 'Doha + Zanzibar',
      price: '₦4,350,000 / per person',
      tag: '7 Nights · Dec 12–19',
      image: '/assets/images/zanzibar-beach.jpg',
      alt: 'Zanzibar turquoise beach luxury resort'
    },
    {
      id: 'doha-grand-prix',
      title: 'Doha Grand Prix',
      price: '₦3,400,000 / double',
      tag: '6 Nights · Nov 25 – Dec 1',
      image: '/assets/images/doha-f1-grand-prix.jpg',
      alt: 'Formula 1 Lusail Circuit race under floodlights'
    },
    {
      id: 'doha-desert',
      title: 'Desert Dune Safari',
      price: 'Included in Doha Packages',
      tag: 'Inland Sea Private Safari',
      image: '/assets/images/doha-desert-safari.jpg',
      alt: 'Arabian desert dunes at sunset'
    },
    {
      id: 'zanzibar-mnemba',
      title: 'Mnemba Coral Atoll',
      price: 'Included in Zanzibar Package',
      tag: 'Private Dolphin Cruise',
      image: '/assets/images/zanzibar-mnemba.jpg',
      alt: 'Crystal turquoise water at Mnemba Island'
    }
  ];

  return (
    <div className="clean-curated-container" id="experiences">
      {/* ----------------------------------------------------------------------
          SECTION 1: OUR TOURS (Matches Reference Layout)
          ---------------------------------------------------------------------- */}
      <section className="clean-section">
        <div className="clean-inner">
          
          {/* Header Row */}
          <div className="clean-header-row">
            <div>
              <span className="clean-tag">Our Tours</span>
              <h2 className="clean-title">
                Find your perfect<br />
                holiday experience
              </h2>
            </div>

            <button 
              type="button" 
              className="clean-pill-btn"
              onClick={() => scrollTo('booking-desk')}
            >
              <span>See All Tours</span>
              <span className="clean-pill-arrow">↗</span>
            </button>
          </div>

          {/* 4 Cards Grid (Exact Reference Look) */}
          <div className="clean-cards-grid">
            {tourCards.map((tour) => (
              <article
                key={tour.id}
                className="clean-tour-card"
                onClick={() => {
                  if (tour.id === 'doha-zanzibar' || tour.id === 'doha-grand-prix') {
                    if (onSelectPackage) onSelectPackage(tour.id);
                    scrollTo(tour.id);
                  } else if (tour.id === 'doha-desert') {
                    if (onSelectPackage) onSelectPackage('doha-grand-prix');
                    scrollTo('doha-grand-prix');
                  } else {
                    if (onSelectPackage) onSelectPackage('doha-zanzibar');
                    scrollTo('doha-zanzibar');
                  }
                }}
              >
                <div className="clean-card-image-wrap">
                  <img src={tour.image} alt={tour.alt} loading="lazy" />
                  <div className="clean-card-gradient"></div>
                  
                  {/* Floating Circular Arrow */}
                  <span className="clean-card-floating-arrow" aria-hidden="true">
                    ↗
                  </span>

                  {/* Card Bottom Content */}
                  <div className="clean-card-bottom">
                    <h3 className="clean-card-title">{tour.title}</h3>
                    <p className="clean-card-price">{tour.price}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 2: EXPERIENCE / PHILOSOPHY (Matches Reference Layout)
          ---------------------------------------------------------------------- */}
      <section className="clean-section clean-experience-section">
        <div className="clean-inner">
          
          <span className="clean-tag">Experience</span>
          
          <h2 className="clean-statement">
            With a love for luxury and seamless exploration, we create meaningful holiday journeys that inspire, connect, and stay forever in memory.
          </h2>

          {/* 3 Landscape Images */}
          <div className="clean-tri-grid">
            <div className="clean-tri-item">
              <img src="/assets/images/doha-desert-safari.jpg" alt="Doha golden desert dunes" loading="lazy" />
            </div>
            <div className="clean-tri-item">
              <img src="/assets/images/zanzibar-beach.jpg" alt="Zanzibar white sand beach" loading="lazy" />
            </div>
            <div className="clean-tri-item">
              <img src="/assets/images/doha-skyline.jpg" alt="Doha futuristic waterfront skyline" loading="lazy" />
            </div>
          </div>

          {/* Bottom Prompt + CTA */}
          <div className="clean-bottom-cta-row">
            <p className="clean-prompt-text">
              Would you like to explore exclusive itineraries or customize this trip for your group?
            </p>

            <button 
              type="button" 
              className="clean-pill-btn"
              onClick={() => scrollTo('booking-desk')}
            >
              <span>Reserve Your Slot</span>
              <span className="clean-pill-arrow">↗</span>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
