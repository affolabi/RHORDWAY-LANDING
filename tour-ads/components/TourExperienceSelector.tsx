'use client';

import React from 'react';

interface TourExperienceSelectorProps {
  onOpenDetails: (packageId: string) => void;
  onSelectPackage?: (packageId: string) => void;
}

export default function TourExperienceSelector({
  onOpenDetails,
  onSelectPackage
}: TourExperienceSelectorProps) {
  const tourCards = [
    {
      id: 'doha-zanzibar',
      title: 'Doha + Zanzibar',
      price: '₦4,350,000 / per person',
      tag: '7 Nights · Dec 12–19, 2026',
      image: '/assets/images/zanzibar-beach.jpg',
      alt: 'Zanzibar turquoise beach luxury resort'
    },
    {
      id: 'doha-grand-prix',
      title: 'Doha Grand Prix',
      price: '₦3,400,000 / double',
      tag: '6 Nights · Nov 25 – Dec 1, 2026',
      image: '/assets/images/doha-f1-grand-prix.jpg',
      alt: 'Formula 1 Lusail Circuit race under floodlights'
    },
    {
      id: 'doha-zanzibar-safari',
      packageId: 'doha-zanzibar',
      title: 'Desert Dune Safari',
      price: 'Included in Doha Tour',
      tag: 'Inland Sea Private 4x4 Excursion',
      image: '/assets/images/doha-desert-safari.jpg',
      alt: 'Arabian desert dunes at sunset'
    },
    {
      id: 'doha-zanzibar-atoll',
      packageId: 'doha-zanzibar',
      title: 'Mnemba Coral Atoll',
      price: 'Included in Zanzibar Tour',
      tag: 'Private Dolphin Cruise & Snorkel',
      image: '/assets/images/zanzibar-mnemba.jpg',
      alt: 'Crystal turquoise water at Mnemba Island'
    }
  ];

  return (
    <div className="clean-curated-container" id="experiences">
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
              onClick={() => onOpenDetails('doha-zanzibar')}
            >
              <span>Explore Itineraries</span>
              <span className="clean-pill-arrow">↗</span>
            </button>
          </div>

          {/* 4 Cards Grid - Clicking opens TourDetailModal */}
          <div className="clean-cards-grid">
            {tourCards.map((tour) => {
              const targetPkg = tour.packageId || tour.id;
              return (
                <article
                  key={tour.id}
                  className="clean-tour-card"
                  onClick={() => onOpenDetails(targetPkg)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') onOpenDetails(targetPkg);
                  }}
                  aria-label={`View details for ${tour.title}`}
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
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
