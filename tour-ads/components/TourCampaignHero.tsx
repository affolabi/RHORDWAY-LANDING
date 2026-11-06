'use client';

import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config/siteConfig';

interface HeroSlide {
  image: string;
  alt: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: '/assets/images/zanzibar-beach.jpg',
    alt: 'Zanzibar turquoise coastal beach luxury resort'
  },
  {
    image: '/assets/images/doha-desert-safari.jpg',
    alt: 'Golden desert safari dunes at sunset'
  },
  {
    image: '/assets/images/doha-f1-grand-prix.jpg',
    alt: 'Formula 1 racing under night lights at Lusail Circuit'
  },
  {
    image: '/assets/images/zanzibar-mnemba.jpg',
    alt: 'Crystal clear turquoise waters at Mnemba Island'
  },
  {
    image: '/assets/images/hero-airplane-sky.jpg',
    alt: 'International luxury travel above golden clouds'
  }
];

export default function TourCampaignHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = heroSlides.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Rapid dynamic slide transition: less than 1 second per slide (800ms)
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slideCount]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="tour-hero-section tour-slider-hero clean-hero-section" id="hero">
      {/* Background Rapid Slides */}
      <div className="tour-hero-backdrop">
        {heroSlides.map((s, idx) => (
          <div
            key={s.image}
            className={`tour-hero-slide ${idx === currentSlide ? 'active' : ''}`}
            aria-hidden={idx !== currentSlide}
          >
            <img
              src={s.image}
              alt={s.alt}
              className="tour-hero-bg-img"
              loading={idx === 0 ? 'eager' : 'lazy'}
              fetchPriority={idx === 0 ? 'high' : 'auto'}
            />
          </div>
        ))}
        <div className="tour-hero-scrim"></div>
      </div>

      <div className="tour-container tour-hero-inner">
        {/* Minimal, Uncluttered Clean Hero Content */}
        <div className="clean-hero-content">
          <h1 className="clean-hero-headline">
            Find your perfect<br />
            holiday escape.
          </h1>

          <p className="clean-hero-subline">
            All-inclusive 2026 holiday packages curated by Rhordway.
          </p>

          <div className="clean-hero-btn-row">
            <button 
              type="button" 
              className="clean-pill-btn"
              onClick={() => scrollTo('experiences')}
            >
              <span>Explore Offers</span>
              <span className="clean-pill-arrow">↓</span>
            </button>

            <a 
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hello Rhordway, I would like to enquire about your 2026 Holiday Tours (Doha + Zanzibar / Doha Grand Prix).')}`}
              className="clean-pill-btn-glass"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>Chat on WhatsApp</span>
              <span className="clean-pill-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Minimal Progress Dots */}
        <div className="clean-hero-dots">
          {heroSlides.map((_, idx) => (
            <span
              key={idx}
              className={`clean-dot ${idx === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
