'use client';

import React, { useState } from 'react';

export default function ActivityGallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'doha' | 'zanzibar'>('all');

  const activities = [
    {
      id: 'doha-museum',
      title: 'National Museum of Qatar',
      category: 'doha',
      tag: 'Architecture & Culture',
      image: '/assets/images/doha-museum.jpg',
      desc: 'Jean Nouvel’s desert rose masterpiece celebrating Arabian history.'
    },
    {
      id: 'zanzibar-mnemba',
      title: 'Mnemba Island Sandbank',
      category: 'zanzibar',
      tag: 'Marine & Snorkelling',
      image: '/assets/images/zanzibar-mnemba.jpg',
      desc: 'Turquoise atoll waters renowned for playful wild dolphin pods.'
    },
    {
      id: 'doha-safari',
      title: 'Desert Dune Safari & Camel Trek',
      category: 'doha',
      tag: 'Desert Excursion',
      image: '/assets/images/doha-desert-safari.jpg',
      desc: 'Rollercoaster 4x4 dune bashing across golden coastal dunes.'
    },
    {
      id: 'zanzibar-turtles',
      title: 'Baraka Sea Turtle Sanctuary',
      category: 'zanzibar',
      tag: 'Wildlife Encounter',
      image: '/assets/images/zanzibar-turtles.jpg',
      desc: 'Swim and feed rescued green sea turtles in their natural tidal pool.'
    },
    {
      id: 'doha-villaggio',
      title: 'Villaggio Gondola Canal',
      category: 'doha',
      tag: 'Shopping & Leisure',
      image: '/assets/images/doha-villaggio.jpg',
      desc: 'Indoor Venetian waterways and luxury shopping in the city.'
    },
    {
      id: 'zanzibar-stone-town',
      title: 'UNESCO Stone Town',
      category: 'zanzibar',
      tag: 'Historic Heritage',
      image: '/assets/images/zanzibar-stone-town.jpg',
      desc: 'Storied Swahili architecture, fragrant spice bazaars, and Sultan palaces.'
    }
  ];

  const filtered =
    activeTab === 'all'
      ? activities
      : activities.filter((act) => act.category === activeTab);

  return (
    <section className="tour-section tour-gallery-section" id="gallery">
      <div className="tour-container">
        
        {/* Header & Filter Tabs */}
        <div className="gallery-header-row anim-reveal-text">
          <div>
            <div className="tour-eyebrow-pill">
              <span className="tour-blue-dot"></span>
              Immersive Destination Highlights
            </div>
            <h2 className="tour-section-heading">
              Glimpse Your Upcoming Adventures<span style={{ color: '#0080E8' }}>.</span>
            </h2>
            <p className="tour-section-subheading">
              From majestic desert horizons to crystal coral reefs, explore the actual experiences waiting for you.
            </p>
          </div>

          <div className="gallery-filter-tabs">
            <button 
              type="button" 
              className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Highlights
            </button>
            <button 
              type="button" 
              className={`filter-btn ${activeTab === 'doha' ? 'active' : ''}`}
              onClick={() => setActiveTab('doha')}
            >
              Doha, Qatar
            </button>
            <button 
              type="button" 
              className={`filter-btn ${activeTab === 'zanzibar' ? 'active' : ''}`}
              onClick={() => setActiveTab('zanzibar')}
            >
              Zanzibar, Tanzania
            </button>
          </div>
        </div>

        {/* Asymmetric Photo Mosaic Grid */}
        <div className="gallery-mosaic-grid anim-reveal-text">
          {filtered.map((item, idx) => (
            <article 
              key={item.id} 
              className={`mosaic-card mosaic-card-${(idx % 3) + 1}`}
            >
              <div className="mosaic-img-frame">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="mosaic-gradient"></div>
                <span className="mosaic-tag-pill">{item.tag}</span>
              </div>
              <div className="mosaic-caption">
                <h4 className="mosaic-title">{item.title}</h4>
                <p className="mosaic-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
