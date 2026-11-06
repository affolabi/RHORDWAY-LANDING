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
    // Dynamic rapid slide transition: 800ms per slide
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
    <section className="tour-hero-section tour-slider-hero" id="hero">
      {/* Background Rapid Slides (< 1s per slide) */}
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
        {/* Restored Original High-Converting Copy */}
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

            <a 
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hello Rhordway, I am interested in reserving a slot for your 2026 Holiday Tours (Doha + Zanzibar / Doha Grand Prix). Please provide more details.')}`}
              className="tour-btn-glass"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>Speak to a Travel Consultant</span>
              <span className="tour-btn-circle" aria-hidden="true">↗</span>
            </a>
          </div>

        </div>

        {/* Minimal Slide Dots Indicator */}
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
