'use client';

import React, { useRef } from 'react';

interface Review {
  id: string;
  name: string;
  location: string;
  trip: string;
  avatar: string;
  comment: string;
}

const reviewsData: Review[] = [
  {
    id: 'rev-1',
    name: 'Tunde & Folake Adeleke',
    location: 'Lagos',
    trip: 'Doha + Zanzibar 7-Night Dual Escape',
    avatar: 'TF',
    comment:
      'Rhordway handled every detail seamlessly. Our Qatar and Tanzania visas arrived with zero hassle. The 5-star hotel in Doha was breathtaking, and our beachfront resort in Zanzibar was pure paradise.'
  },
  {
    id: 'rev-2',
    name: 'Engr. Chinedu Okafor',
    location: 'Abuja',
    trip: 'Doha Formula 1 Grand Prix Weekend',
    avatar: 'CO',
    comment:
      'Watching Formula 1 under the floodlights at Lusail Circuit was a lifelong dream. Circuit passes and private VIP transfers were coordinated to perfection every day. Pure 5-star execution.'
  },
  {
    id: 'rev-3',
    name: 'Dr. Kemi Balogun',
    location: 'Port Harcourt',
    trip: 'Doha + Zanzibar Tour',
    avatar: 'KB',
    comment:
      'Total transparency and peace of mind. No hidden surcharges, no airport delays. The Mnemba dolphin cruise and private desert safari were impeccably organized.'
  },
  {
    id: 'rev-4',
    name: 'Emeka & Ngozi Williams',
    location: 'Lagos & London',
    trip: 'Doha + Zanzibar Couple’s Escape',
    avatar: 'EW',
    comment:
      'The transition between modern Doha and serene turquoise Zanzibar was magical. Rhordway’s WhatsApp team answered our questions within minutes anytime of day.'
  },
  {
    id: 'rev-5',
    name: 'Babatunde Alabi',
    location: 'Lagos',
    trip: 'Doha Grand Prix Solo Experience',
    avatar: 'BA',
    comment:
      'The single occupancy package was perfect for me. Luxury 5-star room, incredible breakfast, and meeting other Nigerian racing fans in Qatar made it unforgettable.'
  },
  {
    id: 'rev-6',
    name: 'Amina & Zainab Yusuf',
    location: 'Abuja',
    trip: 'Doha + Zanzibar Getaway',
    avatar: 'AY',
    comment:
      'Everything from airport pickups to guided shopping at Souq Waqif and Villaggio Mall was top-tier. We felt completely secure and pampered throughout.'
  }
];

export default function TourReviews() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="clean-section compact-reviews-section" id="reviews">
      <div className="clean-inner">
        
        {/* Header Row */}
        <div className="compact-rev-header">
          <div>
            <span className="clean-tag">Reviews</span>
            <h2 className="compact-rev-title">
              What our travellers say
            </h2>
          </div>

          <div className="compact-rev-meta-controls">
            <div className="compact-score-tag">
              <span className="stars-gold">★★★★★</span>
              <span><strong>4.9 / 5.0</strong> (450+ travellers)</span>
            </div>

            <div className="clean-carousel-nav">
              <button 
                type="button" 
                className="clean-carousel-arrow" 
                onClick={scrollLeft}
                aria-label="Previous review"
              >
                ‹
              </button>
              <button 
                type="button" 
                className="clean-carousel-arrow" 
                onClick={scrollRight}
                aria-label="Next review"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Compact Horizontal Slider */}
        <div className="compact-reviews-track" ref={scrollRef}>
          {reviewsData.map((rev) => (
            <article key={rev.id} className="compact-review-card">
              <div className="compact-rev-card-top">
                <span className="stars-gold">★★★★★</span>
                <span className="compact-verified-pill">✓ Verified</span>
              </div>

              <p className="compact-rev-quote">
                &ldquo;{rev.comment}&rdquo;
              </p>

              <div className="compact-rev-author">
                <div className="compact-avatar" aria-hidden="true">
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="compact-name">{rev.name}</h4>
                  <span className="compact-location">{rev.location} · {rev.trip}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
