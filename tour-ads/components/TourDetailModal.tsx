'use client';

import React, { useState, useEffect } from 'react';
import { tourPackagesData, TourPackage } from '../config/tourPackages';

interface TourDetailModalProps {
  packageId: string | null;
  onClose: () => void;
  onSelectForBooking: (packageId: string, occupancy?: string) => void;
}

export default function TourDetailModal({
  packageId,
  onClose,
  onSelectForBooking,
}: TourDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'overview'>('itinerary');
  const [occupancy, setOccupancy] = useState<'double' | 'single'>('double');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (packageId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [packageId, onClose]);

  if (!packageId) return null;

  const pkg: TourPackage | undefined = tourPackagesData[packageId as keyof typeof tourPackagesData];
  if (!pkg) return null;

  const isGrandPrix = packageId === 'doha-grand-prix';
  const currentPrice = isGrandPrix
    ? occupancy === 'double'
      ? '₦3,400,000'
      : '₦4,150,000'
    : pkg.pricing.standardFormatted;

  const handleBook = () => {
    onSelectForBooking(packageId, isGrandPrix ? occupancy : undefined);
    onClose();
  };

  return (
    <div className="tour-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="tour-modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Header Bar */}
        <div className="tour-modal-header">
          <div className="tour-modal-title-group">
            <span className="tour-modal-kicker">{pkg.dates} · {pkg.durationLabel}</span>
            <h2 className="tour-modal-title">{pkg.title}</h2>
          </div>
          <button 
            type="button" 
            className="tour-modal-close" 
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Media Hero */}
        <div className="tour-modal-media">
          <img 
            src={isGrandPrix ? '/assets/images/doha-f1-grand-prix.jpg' : '/assets/images/zanzibar-beach.jpg'} 
            alt={pkg.title} 
          />
          <div className="tour-modal-media-overlay">
            <div className="tour-modal-price-pill">
              <span className="price-tag">{currentPrice}</span>
              <span className="price-sub">
                {isGrandPrix 
                  ? occupancy === 'double' ? 'Double Occupancy (sharing)' : 'Single Occupancy (private)' 
                  : pkg.pricing.occupancyTerms}
              </span>
            </div>
          </div>
        </div>

        {/* Occupancy Toggle for F1 */}
        {isGrandPrix && (
          <div className="tour-modal-toggle-row">
            <span className="toggle-label">Select Occupancy:</span>
            <div className="tour-occupancy-pill-group">
              <button
                type="button"
                className={`occ-btn ${occupancy === 'double' ? 'active' : ''}`}
                onClick={() => setOccupancy('double')}
              >
                Double Occupancy (₦3.4M)
              </button>
              <button
                type="button"
                className={`occ-btn ${occupancy === 'single' ? 'active' : ''}`}
                onClick={() => setOccupancy('single')}
              >
                Single Occupancy (₦4.15M)
              </button>
            </div>
          </div>
        )}

        {/* Tab Controls */}
        <div className="tour-modal-tabs">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'itinerary' ? 'active' : ''}`}
            onClick={() => setActiveTab('itinerary')}
          >
            Day-by-Day Itinerary
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'inclusions' ? 'active' : ''}`}
            onClick={() => setActiveTab('inclusions')}
          >
            What&apos;s Included
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="tour-modal-body">
          {activeTab === 'itinerary' && (
            <div className="modal-itinerary-list">
              {pkg.itinerary && pkg.itinerary.map((day) => (
                <div key={day.dayNumber} className="modal-itinerary-item">
                  <div className="day-badge">Day 0{day.dayNumber}</div>
                  <div className="day-content">
                    <h4 className="day-title">{day.title}</h4>
                    <p className="day-desc">{day.description}</p>
                    {day.highlights && day.highlights.length > 0 && (
                      <div className="day-pills">
                        {day.highlights.map((h, i) => (
                          <span key={i} className="day-pill">✓ {h}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'inclusions' && (
            <div className="modal-inclusions-grid">
              {pkg.inclusions.map((inc, i) => (
                <div key={i} className="modal-inc-card">
                  <span className="inc-icon">✓</span>
                  <div>
                    <h4 className="inc-card-title">{inc.title}</h4>
                    <p className="inc-card-desc">{inc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="modal-overview-text">
              <p className="overview-lead">{pkg.overviewDescription}</p>
              <div className="overview-stats">
                <div className="stat-box">
                  <span className="stat-label">Duration</span>
                  <span className="stat-val">{pkg.durationLabel}</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Destinations</span>
                  <span className="stat-val">{pkg.destinationBreakdown}</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Hotels</span>
                  <span className="stat-val">5-Star Verified</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Flights</span>
                  <span className="stat-val">Qatar Airways Return</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Fixed Footer Action */}
        <div className="tour-modal-footer">
          <div className="footer-price-info">
            <span className="footer-total-label">Package Rate:</span>
            <span className="footer-total-price">{currentPrice}</span>
          </div>

          <div className="footer-btn-group">
            <button
              type="button"
              className="clean-pill-btn"
              onClick={handleBook}
            >
              <span>Book This Package</span>
              <span className="clean-pill-arrow">↗</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
