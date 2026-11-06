'use client';

import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config/siteConfig';

interface HeroSlide {
  image: string;
  tag: string;
  headline: string;
  subheadline: string;
  alt: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: '/assets/images/doha-skyline.jpg',
    tag: 'Doha, Qatar · 5-Star Modern Architecture',
    headline: 'Extraordinary Escapes.',
    subheadline: 'Two exclusive 2026 holiday packages curated with 5-star luxury, international flights, visa processing, and VIP excursions.',
    alt: 'Doha futuristic illuminated skyline across the Arabian Gulf'
  },
  {
    image: '/assets/images/zanzibar-beach.jpg',
    tag: 'Zanzibar, Tanzania · Turquoise Coral Reefs',
    headline: 'Untouched Tropical Luxury.',
    subheadline: 'All-inclusive beachfront resort luxury, private Mnemba atoll dolphin excursions, and Stone Town heritage tours.',
    alt: 'Zanzibar pristine turquoise beach with private beachfront loungers'
  },
  {
    image: '/assets/images/doha-f1-grand-prix.jpg',
    tag: 'Lusail Circuit, Doha · Formula 1 Grand Prix',
    headline: 'Pure Motorsport Prestige.',
    subheadline: 'Full 3-day Formula 1 race weekend access under floodlights, 5-star Doha accommodation, and desert safari dune bashing.',
    alt: 'Formula 1 racing under night lights at Lusail International Circuit'
  },
  {
    image: '/assets/images/doha-desert-safari.jpg',
    tag: 'Inland Sea · Golden Desert Safari',
    headline: 'Golden Sunset Adventures.',
    subheadline: 'Private 4x4 dune bashing across golden Arabian dunes, camel riding, and dinner by the inland sea.',
    alt: 'Private luxury desert safari 4x4 dune bashing at sunset'
  },
  {
    image: '/assets/images/zanzibar-mnemba.jpg',
    tag: 'Mnemba Atoll · Crystal Marine Reserve',
    headline: 'Crystal Lagoon Safaris.',
    subheadline: 'Private boat charters, swimming alongside wild dolphins, and vibrant snorkeling on private coral atolls.',
    alt: 'Crystal clear turquoise waters at Mnemba Island Zanzibar'
  }
];

export default function TourCampaignHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = heroSlides.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlide, isPaused]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slide = heroSlides[currentSlide];

  return (
    <section 
      className="tour-hero-section tour-slider-hero" 
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Rhordway 2026 Tour Offers Carousel"
    >
      {/* Background Slides with Crossfade */}
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
        {/* Uncluttered, Punchy Hero Text */}
        <div className="tour-hero-content anim-reveal-hero">
          
          <div className="tour-eyebrow-pill">
            <span className="pulse-blue-dot"></span>
            Exclusive 2026 Tour Offers
          </div>

          <h1 className="tour-hero-title">
            {slide.headline}<br />
            <span className="tour-title-soft">Curated by Rhordway.</span>
          </h1>

          <p className="tour-hero-lead">
            {slide.subheadline}
          </p>

          <div className="tour-hero-cta-group">
            <button 
              type="button" 
              className="tour-btn-primary"
              onClick={() => scrollTo('experiences')}
            >
              <span>View Exclusive Offers</span>
              <span className="tour-btn-circle" aria-hidden="true">↓</span>
            </button>

            <a 
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hello Rhordway, I am interested in reserving a slot for your 2026 Holiday Tours (Doha + Zanzibar / Doha Grand Prix). Please provide more details.')}`}
              className="tour-btn-glass"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>Chat on WhatsApp</span>
              <span className="tour-btn-circle" aria-hidden="true">↗</span>
            </a>
          </div>

        </div>

        {/* Floating Slide Location Pill */}
        <div className="tour-slider-meta-tag">
          <span className="meta-pin">📍</span>
          <span>{slide.tag}</span>
        </div>

        {/* Slider Navigation Bar */}
        <div className="tour-slider-controls">
          <div className="tour-slider-nav-btns">
            <button 
              type="button" 
              className="tour-slide-btn" 
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button 
              type="button" 
              className="tour-slide-btn" 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="tour-slide-dots">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`tour-slide-dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="tour-slide-counter">
            <span className="current-num">0{currentSlide + 1}</span>
            <span className="slash">/</span>
            <span className="total-num">0{slideCount}</span>
          </div>
        </div>

        {/* Bottom Trust Ribbon */}
        <div className="tour-hero-trust-ribbon anim-reveal-trust">
          <span>✓ RETURN FLIGHTS INCLUDED</span>
          <span className="ribbon-sep">·</span>
          <span>✓ 5-STAR LUXURY ACCOMMODATION</span>
          <span className="ribbon-sep">·</span>
          <span>✓ VISAS &amp; TRAVEL INSURANCE</span>
          <span className="ribbon-sep">·</span>
          <span>✓ PRIVATE VIP AIRPORT TRANSFERS</span>
        </div>
      </div>
    </section>
  );
}
