'use client';

import React, { useState } from 'react';

interface EditorialDispatch {
  id: string;
  category: 'desert' | 'zanzibar' | 'f1';
  plateNo: string;
  type: 'video' | 'photo';
  headline: string;
  subheadline: string;
  caption: string;
  location: string;
  travellers: string;
  image: string;
  videoUrl?: string;
  aspect: 'cinema' | 'portrait' | 'landscape';
}

const dispatches: EditorialDispatch[] = [
  {
    id: 'dispatch-1',
    category: 'desert',
    plateNo: 'PLATE 01 · DOHA DESERT',
    type: 'video',
    headline: 'Golden Hour Traversal',
    subheadline: 'Khor Al Adaid Inland Sea',
    caption: 'Private 4x4 convoy navigating the golden dunes where desert meets the ocean at sunset.',
    location: 'Inland Sea, Qatar',
    travellers: 'Tunde, Folake & crew · Lagos',
    image: '/assets/images/doha-desert-safari.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-driving-a-4x4-vehicle-through-the-desert-dunes-43282-large.mp4',
    aspect: 'cinema'
  },
  {
    id: 'dispatch-2',
    category: 'zanzibar',
    plateNo: 'PLATE 02 · KENDWA COAST',
    type: 'photo',
    headline: 'The Turquoise Coastline',
    subheadline: 'All-Inclusive Beachfront Villa',
    caption: 'Waking up to the Indian Ocean reef. Unfiltered coral shades and gentle coastal dhows.',
    location: 'Kendwa Beach, Zanzibar',
    travellers: 'Folake & Tunde · Honeymoon Cohort',
    image: '/assets/images/zanzibar-beach.jpg',
    aspect: 'portrait'
  },
  {
    id: 'dispatch-3',
    category: 'f1',
    plateNo: 'PLATE 03 · LUSAIL CIRCUIT',
    type: 'video',
    headline: 'Formula 1 Night Racing',
    subheadline: '330 km/h Under 1,000 Floodlights',
    caption: 'The raw roar and atmosphere as the world champions battle through turns 1 to 4 on race night.',
    location: 'Lusail Circuit, Doha',
    travellers: 'Engr. Chinedu & group · Abuja',
    image: '/assets/images/doha-f1-grand-prix.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sports-car-racing-on-a-track-40342-large.mp4',
    aspect: 'cinema'
  },
  {
    id: 'dispatch-4',
    category: 'zanzibar',
    plateNo: 'PLATE 04 · MNEMBA ATOLL',
    type: 'photo',
    headline: 'Wild Dolphin Encounter',
    subheadline: 'Protected Coral Marine Reserve',
    caption: 'Swimming alongside wild pods of spinner dolphins in crystal-clear visibility at dawn.',
    location: 'Mnemba Island, Zanzibar',
    travellers: 'Dr. Kemi Balogun & family · Port Harcourt',
    image: '/assets/images/zanzibar-mnemba.jpg',
    aspect: 'landscape'
  },
  {
    id: 'dispatch-5',
    category: 'zanzibar',
    plateNo: 'PLATE 05 · STONE TOWN',
    type: 'photo',
    headline: 'Antique Omani Heritage',
    subheadline: 'Historic Spice Alleys',
    caption: 'Centuries of Swahili, Arab, and Indian culture preserved within intricately carved teak portals.',
    location: 'Stone Town, Zanzibar',
    travellers: 'Amina & Zainab Yusuf · Abuja',
    image: '/assets/images/zanzibar-stone-town.jpg',
    aspect: 'landscape'
  }
];

export default function TravelerMomentsCarousel() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'desert' | 'zanzibar' | 'f1'>('all');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredDispatches = activeCategory === 'all'
    ? dispatches
    : dispatches.filter((d) => d.category === activeCategory);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featurePlate = filteredDispatches[0] || dispatches[0];
  const sidePlates = filteredDispatches.slice(1);

  return (
    <section className="magazine-editorial-section" id="moments">
      <div className="magazine-container">
        
        {/* Magazine Masthead & Header */}
        <div className="magazine-masthead">
          <div className="masthead-top-rule">
            <span className="masthead-vol">THE RHORDWAY JOURNAL · VOL. 26</span>
            <span className="masthead-center">THROUGH OUR LENS</span>
            <span className="masthead-date">2026 FIELD DISPATCHES</span>
          </div>

          <div className="magazine-title-block">
            <h2 className="magazine-main-title">
              Real Travellers. <span className="serif-italic">Unfiltered Moments.</span>
            </h2>
            <p className="magazine-editorial-lede">
              A curated photographic &amp; cinematic chronicle of guests who journeyed with Rhordway across the Arabian dunes of Qatar, the turquoise coral reefs of Zanzibar, and the high-speed theatre of Formula 1.
            </p>
          </div>

          {/* Magazine Category Pills */}
          <div className="magazine-chapter-pills">
            <button
              type="button"
              className={`chapter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Dispatches (05)
            </button>
            <button
              type="button"
              className={`chapter-btn ${activeCategory === 'desert' ? 'active' : ''}`}
              onClick={() => setActiveCategory('desert')}
            >
              Doha Desert Safari
            </button>
            <button
              type="button"
              className={`chapter-btn ${activeCategory === 'zanzibar' ? 'active' : ''}`}
              onClick={() => setActiveCategory('zanzibar')}
            >
              Zanzibar Reef &amp; Coast
            </button>
            <button
              type="button"
              className={`chapter-btn ${activeCategory === 'f1' ? 'active' : ''}`}
              onClick={() => setActiveCategory('f1')}
            >
              Formula 1 Grand Prix
            </button>
          </div>
        </div>

        {/* Magazine Cinematic Bento Layout */}
        <div className="magazine-bento-spread">
          
          {/* Main Cinematic Feature Frame (Left / Large) */}
          <div 
            className="magazine-hero-plate"
            onClick={() => {
              if (featurePlate.type === 'video' && featurePlate.videoUrl) {
                setActiveVideo(featurePlate.videoUrl);
              }
            }}
          >
            <div className="cinema-frame-wrap">
              <img src={featurePlate.image} alt={featurePlate.headline} />
              
              {/* Cinematic Letterbox & Film Brackets */}
              <div className="cinema-viewfinder-brackets">
                <span className="bracket tl"></span>
                <span className="bracket tr"></span>
                <span className="bracket bl"></span>
                <span className="bracket br"></span>
              </div>

              {/* REC / Plate Tag */}
              <div className="cinema-status-bar">
                <span className="rec-badge">
                  {featurePlate.type === 'video' ? '● REC · 4K CINEMA' : '◉ 35MM EXP'}
                </span>
                <span className="plate-tag">{featurePlate.plateNo}</span>
              </div>

              {/* Play Icon if Video */}
              {featurePlate.type === 'video' && (
                <div className="cinema-play-button" aria-label="Play video highlight">
                  <span className="play-triangle">▶</span>
                  <span className="play-label">WATCH FILM</span>
                </div>
              )}

              {/* Editorial Caption Box */}
              <div className="cinema-caption-scrim">
                <div className="caption-meta">
                  <span className="caption-loc">{featurePlate.location}</span>
                  <span className="caption-user">{featurePlate.travellers}</span>
                </div>
                <h3 className="caption-headline">{featurePlate.headline}</h3>
                <p className="caption-body">{featurePlate.caption}</p>
              </div>
            </div>
          </div>

          {/* Secondary Editorial Spread (Right Stack) */}
          <div className="magazine-side-stack">
            {sidePlates.map((item) => (
              <article 
                key={item.id} 
                className="magazine-side-card"
                onClick={() => {
                  if (item.type === 'video' && item.videoUrl) {
                    setActiveVideo(item.videoUrl);
                  }
                }}
              >
                <div className="side-card-media">
                  <img src={item.image} alt={item.headline} loading="lazy" />
                  <span className="side-plate-no">{item.plateNo}</span>
                  {item.type === 'video' && (
                    <span className="side-video-icon">▶</span>
                  )}
                </div>

                <div className="side-card-content">
                  <div className="side-card-top">
                    <span className="side-loc">{item.location}</span>
                    <span className="side-user">{item.travellers}</span>
                  </div>
                  <h4 className="side-headline">{item.headline}</h4>
                  <p className="side-desc">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>

        </div>

        {/* Magazine Colophon / Footer Action */}
        <div className="magazine-colophon-bar">
          <div className="colophon-text">
            <span className="colophon-title">BEHIND THE CURATION</span>
            <p>Every group departure is strictly limited to 20 guests to guarantee dedicated concierge service, private excursions, and verified 5-star comfort.</p>
          </div>

          <button 
            type="button" 
            className="clean-pill-btn"
            onClick={() => scrollTo('booking-desk')}
          >
            <span>Reserve Your 2026 Slot</span>
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
              aria-label="Close video player"
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
