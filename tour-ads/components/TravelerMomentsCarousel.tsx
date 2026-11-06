'use client';

import React, { useState, useRef } from 'react';

interface MediaMoment {
  id: string;
  type: 'video' | 'photo';
  title: string;
  location: string;
  tag: string;
  traveller: string;
  image: string;
  videoUrl?: string;
}

const mediaMoments: MediaMoment[] = [
  {
    id: 'm-1',
    type: 'video',
    title: 'Sunset Dune Bashing in 4x4 Convoy',
    location: 'Inland Sea, Doha Desert',
    tag: '📹 Video Highlight',
    traveller: 'Tunde, Folake & crew · Lagos',
    image: '/assets/images/doha-desert-safari.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-driving-a-4x4-vehicle-through-the-desert-dunes-43282-large.mp4'
  },
  {
    id: 'm-2',
    type: 'photo',
    title: 'Turquoise Shores & Beachfront Villa',
    location: 'Kendwa Beach, Zanzibar',
    tag: '📸 Coastal Luxury',
    traveller: 'Folake & Tunde · Honeymooners',
    image: '/assets/images/zanzibar-beach.jpg'
  },
  {
    id: 'm-3',
    type: 'video',
    title: 'Formula 1 Night Race at Lusail Circuit',
    location: 'Lusail Circuit, Doha',
    tag: '📹 F1 Grand Prix',
    traveller: 'Engr. Chinedu & group · Abuja',
    image: '/assets/images/doha-f1-grand-prix.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sports-car-racing-on-a-track-40342-large.mp4'
  },
  {
    id: 'm-4',
    type: 'photo',
    title: 'Swimming with Wild Dolphins',
    location: 'Mnemba Island Coral Atoll',
    tag: '🌊 Marine Safari',
    traveller: 'Dr. Kemi & family · Port Harcourt',
    image: '/assets/images/zanzibar-mnemba.jpg'
  },
  {
    id: 'm-5',
    type: 'photo',
    title: 'Stone Town Spice Route & Heritage',
    location: 'Stone Town, Zanzibar',
    tag: '📸 Culture Walk',
    traveller: 'Amina & Zainab · Abuja',
    image: '/assets/images/zanzibar-stone-town.jpg'
  },
  {
    id: 'm-6',
    type: 'photo',
    title: 'Giant Aldabra Tortoise Sanctuary',
    location: 'Prison Island, Zanzibar',
    tag: '🐢 Wildlife Sanctuary',
    traveller: 'Rhordway holiday cohort',
    image: '/assets/images/zanzibar-turtles.jpg'
  }
];

export default function TravelerMomentsCarousel() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="clean-section clean-moments-section" id="moments">
      <div className="clean-inner">
        
        {/* Section Header Row */}
        <div className="clean-header-row">
          <div>
            <span className="clean-tag">Through Our Lens</span>
            <h2 className="clean-title">
              Real travellers.<br />
              Unfiltered moments.
            </h2>
            <p className="clean-subtitle">
              Authentic highlights from guests who travelled with Rhordway across Doha, Zanzibar, and the Grand Prix.
            </p>
          </div>

          <div className="clean-carousel-nav">
            <button 
              type="button" 
              className="clean-carousel-arrow" 
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              ‹
            </button>
            <button 
              type="button" 
              className="clean-carousel-arrow" 
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              ›
            </button>
          </div>
        </div>

        {/* Horizontal Moments Carousel */}
        <div className="clean-moments-scroll-track" ref={carouselRef}>
          {mediaMoments.map((item) => (
            <article 
              key={item.id} 
              className="clean-moment-card"
              onClick={() => {
                if (item.type === 'video' && item.videoUrl) {
                  setActiveVideo(item.videoUrl);
                }
              }}
            >
              <div className="clean-moment-media">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="clean-moment-scrim"></div>

                {/* Top Badge */}
                <span className="clean-moment-badge">
                  {item.tag}
                </span>

                {/* Play Button for Videos */}
                {item.type === 'video' && (
                  <div className="clean-play-icon" aria-label="Play video highlight">
                    ▶
                  </div>
                )}

                {/* Bottom Card Content */}
                <div className="clean-moment-info">
                  <span className="clean-moment-loc">{item.location}</span>
                  <h3 className="clean-moment-title">{item.title}</h3>
                  <span className="clean-moment-user">{item.traveller}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Row */}
        <div className="clean-bottom-cta-row" style={{ marginTop: '36px' }}>
          <p className="clean-prompt-text">
            Ready to experience these breathtaking destinations with a 5-star private group?
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

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div className="clean-video-modal-backdrop" onClick={() => setActiveVideo(null)}>
          <div className="clean-video-modal-box" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="clean-video-modal-close" 
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              playsInline 
              className="clean-video-player"
            />
          </div>
        </div>
      )}
    </section>
  );
}
