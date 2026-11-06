'use client';

import { useEffect } from 'react';

export default function TourScrollObserver() {
  useEffect(() => {
    // 1. Header scroll effect
    const handleScroll = () => {
      const header = document.getElementById('tourHeader');
      if (header) {
        if (window.scrollY > 30) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. IntersectionObserver for reveal animations
    const targetSelectors = [
      '.anim-reveal-hero',
      '.anim-reveal-cards',
      '.anim-reveal-trust',
      '.anim-reveal-text',
      '.tour-duo-card',
      '.itinerary-column-card',
      '.grand-prix-spotlight-grid',
      '.mosaic-card',
      '.confidence-card',
      '.step-card',
      '.collation-main-shell',
      '.tour-faq-item',
      '.tour-final-inner'
    ];

    const elements = document.querySelectorAll(targetSelectors.join(', '));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    elements.forEach((el) => observer.observe(el));

    // 3. Immediate entrance for top hero
    const timer = setTimeout(() => {
      document.querySelectorAll('.anim-reveal-hero, .anim-reveal-cards, .anim-reveal-trust').forEach((el) => {
        el.classList.add('is-inview');
      });
    }, 60);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return null;
}
