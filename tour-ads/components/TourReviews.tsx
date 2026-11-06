'use client';

import React, { useState } from 'react';

interface Review {
  id: string;
  name: string;
  location: string;
  trip: string;
  rating: number;
  badge: string;
  avatar: string;
  comment: string;
}

const reviewsData: Review[] = [
  {
    id: 'rev-1',
    name: 'Tunde & Folake Adeleke',
    location: 'Victoria Island, Lagos',
    trip: 'Doha + Zanzibar 7-Night Dual Escape',
    rating: 5,
    badge: 'Verified Couple Travel',
    avatar: 'TF',
    comment:
      'From the moment we reserved our slots on WhatsApp, Rhordway handled every detail seamlessly. Our Qatar and Tanzania visas arrived with zero hassle. The 5-star hotel in Doha was breathtaking, and our beachfront resort in Zanzibar was pure paradise.'
  },
  {
    id: 'rev-2',
    name: 'Engr. Chinedu Okafor',
    location: 'Maitama, Abuja',
    trip: 'Doha Formula 1 Grand Prix Weekend',
    rating: 5,
    badge: 'Verified Motorsport Traveller',
    avatar: 'CO',
    comment:
      'Watching Formula 1 under the floodlights at Lusail Circuit was a lifelong bucket-list item. Rhordway’s ground concierge had our circuit passes and private VIP transfers coordinated to perfection every single day. Pure 5-star execution.'
  },
  {
    id: 'rev-3',
    name: 'Dr. Kemi Balogun',
    location: 'Old GRA, Port Harcourt',
    trip: 'Doha + Zanzibar Tour',
    rating: 5,
    badge: 'Verified Holiday Traveller',
    avatar: 'KB',
    comment:
      'Total transparency and peace of mind. No hidden surcharges, no airport delays. The Mnemba Island dolphin cruise and private desert safari in Doha were impeccably organized. My family and I will be booking again for 2026.'
  },
  {
    id: 'rev-4',
    name: 'Emeka & Ngozi Williams',
    location: 'Ikoyi, Lagos & London',
    trip: 'Doha + Zanzibar Couple’s Escape',
    rating: 5,
    badge: 'Verified Couple Escape',
    avatar: 'EW',
    comment:
      'The transition between modern high-rises in Doha and the serene turquoise coral shores of Zanzibar was magical. Rhordway’s WhatsApp team answered our questions within minutes anytime of day.'
  },
  {
    id: 'rev-5',
    name: 'Babatunde Alabi',
    location: 'Lekki Phase 1, Lagos',
    trip: 'Doha Grand Prix Solo Experience',
    rating: 5,
    badge: 'Verified F1 Enthusiast',
    avatar: 'BA',
    comment:
      'The single occupancy package was perfect for me. Luxury 5-star room, incredible breakfast, seamless circuit transfers, and meeting other Nigerian racing fans in Qatar made the whole experience unforgettable.'
  },
  {
    id: 'rev-6',
    name: 'Amina & Zainab Yusuf',
    location: 'Asokoro, Abuja',
    trip: 'Doha + Zanzibar Sister’s Getaway',
    rating: 5,
    badge: 'Verified Family Travel',
    avatar: 'AY',
    comment:
      'Everything from airport meet-and-greet to private shopping tours at Souq Waqif and Villaggio Mall was top-tier. As women travelling together, we felt completely secure and pampered throughout.'
  }
];

export default function TourReviews() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'doha-zanzibar' | 'doha-grand-prix'>('all');

  const filteredReviews = activeFilter === 'all'
    ? reviewsData
    : activeFilter === 'doha-zanzibar'
    ? reviewsData.filter(r => r.trip.includes('Zanzibar'))
    : reviewsData.filter(r => r.trip.includes('Grand Prix'));

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="clean-section clean-reviews-section" id="reviews">
      <div className="clean-inner">
        
        {/* Header Row */}
        <div className="clean-header-row">
          <div>
            <span className="clean-tag">Reviews</span>
            <h2 className="clean-title">
              What our travellers say
            </h2>
          </div>

          <div className="clean-reviews-stat-pill">
            <span className="stars-gold">★★★★★</span>
            <span className="stat-text"><strong>4.9 / 5.0</strong> from 450+ travellers</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="clean-reviews-filter-bar">
          <button
            type="button"
            className={`clean-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Reviews
          </button>
          <button
            type="button"
            className={`clean-filter-btn ${activeFilter === 'doha-zanzibar' ? 'active' : ''}`}
            onClick={() => setActiveFilter('doha-zanzibar')}
          >
            Doha + Zanzibar
          </button>
          <button
            type="button"
            className={`clean-filter-btn ${activeFilter === 'doha-grand-prix' ? 'active' : ''}`}
            onClick={() => setActiveFilter('doha-grand-prix')}
          >
            Doha Grand Prix
          </button>
        </div>

        {/* Clean Review Cards Grid */}
        <div className="clean-reviews-grid">
          {filteredReviews.map((rev) => (
            <article key={rev.id} className="clean-review-card">
              <div className="clean-rev-top">
                <div className="clean-rev-avatar" aria-hidden="true">
                  {rev.avatar}
                </div>
                <div className="clean-rev-user">
                  <h3 className="clean-rev-name">{rev.name}</h3>
                  <span className="clean-rev-loc">{rev.location}</span>
                </div>
                <span className="clean-rev-badge">{rev.badge}</span>
              </div>

              <div className="clean-rev-rating">
                <span className="stars-gold">★★★★★</span>
                <span className="clean-rev-trip">{rev.trip}</span>
              </div>

              <blockquote className="clean-rev-quote">
                &ldquo;{rev.comment}&rdquo;
              </blockquote>

              <div className="clean-rev-footer">
                <span className="clean-verified-tag">✓ Verified Rhordway Client</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Booking Prompt Strip */}
        <div className="clean-bottom-cta-row" style={{ marginTop: '40px' }}>
          <p className="clean-prompt-text">
            All departures are strictly limited to 20 guests for dedicated concierge service.
          </p>

          <button 
            type="button" 
            className="clean-pill-btn"
            onClick={() => scrollTo('booking-desk')}
          >
            <span>Book Your Consultation</span>
            <span className="clean-pill-arrow">↗</span>
          </button>
        </div>

      </div>
    </section>
  );
}
