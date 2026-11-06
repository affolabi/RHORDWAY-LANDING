'use client';

import React, { useState, useEffect } from 'react';
import { tourPackagesData } from '../config/tourPackages';
import { siteConfig } from '../config/siteConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { generateReservationPDF, generateBookingReference } from '../utils/pdfGenerator';

interface TourCollationDeskProps {
  initialPackageId?: string;
  initialOccupancy?: string;
}

export default function TourCollationDesk({
  initialPackageId = 'doha-zanzibar',
  initialOccupancy
}: TourCollationDeskProps) {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(initialPackageId);
  const [occupancy, setOccupancy] = useState<string>('double');
  const [travellerCount, setTravellerCount] = useState<number>(1);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [departureCity, setDepartureCity] = useState<string>('Lagos, Nigeria');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialPackageId) {
      setSelectedPkgId(initialPackageId);
    }
  }, [initialPackageId]);

  useEffect(() => {
    if (initialOccupancy) {
      if (initialOccupancy.toLowerCase().includes('single')) {
        setOccupancy('single');
      } else {
        setOccupancy('double');
      }
    }
  }, [initialOccupancy]);

  const currentPkg = tourPackagesData[selectedPkgId] || tourPackagesData['doha-zanzibar'];

  // Calculate rate per person
  let perPersonRate = currentPkg.pricing.standardRate;
  let occupancyLabel = currentPkg.pricing.occupancyTerms;

  if (selectedPkgId === 'doha-grand-prix') {
    if (occupancy === 'single') {
      perPersonRate = 4150000;
      occupancyLabel = 'Single Occupancy (Solo Private Room)';
    } else {
      perPersonRate = 3400000;
      occupancyLabel = 'Double Occupancy (per person sharing)';
    }
  }

  const totalCalculated = perPersonRate * travellerCount;
  const totalFormatted = `₦${totalCalculated.toLocaleString('en-NG')}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingPdf(true);

    const bookingRef = generateBookingReference(
      selectedPkgId === 'doha-grand-prix' ? 'RH-F1' : 'RH-DZ'
    );

    try {
      // 1. Generate & download official PDF dossier
      await generateReservationPDF({
        bookingRef,
        packageName: currentPkg.title,
        travelDates: currentPkg.dates,
        duration: currentPkg.durationLabel,
        occupancy: occupancyLabel,
        priceFormatted: `₦${perPersonRate.toLocaleString('en-NG')}`,
        travellerCount,
        totalEstimated: totalFormatted,
        leadName: fullName || 'Valued Guest',
        email,
        phone,
        departureCity,
        specialRequests,
        inclusions: currentPkg.inclusions
      });
    } catch (err) {
      console.error('PDF Generation failed:', err);
    } finally {
      setIsGeneratingPdf(false);
      setIsSubmitted(true);
    }

    // 2. Open WhatsApp with pre-filled enquiry dossier
    const waUrl = buildWhatsAppUrl({
      bookingRef,
      packageName: currentPkg.title,
      travelDates: currentPkg.dates,
      leadName: fullName,
      phone,
      email,
      travellerCount,
      occupancy: occupancyLabel,
      departureCity,
      specialRequests,
      totalEstimated: totalFormatted
    });

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="tour-section collation-section-main" id="booking-collation">
      <div className="tour-container">
        
        {/* Header */}
        <div className="tour-section-header text-center anim-reveal-text">
          <div className="tour-eyebrow-pill center-pill">
            <span className="pulse-blue-dot"></span>
            Official Reservation Desk
          </div>
          <h2 className="tour-section-heading">
            Collate Your Details &amp; Receive Your Official Dossier<span style={{ color: '#0080E8' }}>.</span>
          </h2>
          <p className="tour-section-subheading">
            Select your package, review estimated party pricing, and generate your official PDF reservation dossier to dispatch directly to our WhatsApp consultant.
          </p>
        </div>

        {/* Collation Card */}
        <div className="collation-main-shell anim-reveal-text">
          <form onSubmit={handleSubmit} className="collation-form">
            
            {/* Step 1: Select Package */}
            <div className="form-step-group">
              <div className="step-label-row">
                <span className="step-circle-num">01</span>
                <div>
                  <h3 className="step-heading">Select Holiday Package &amp; Departure</h3>
                  <p className="step-sub">Choose which curated escape you would like to reserve.</p>
                </div>
              </div>

              <div className="package-select-radios">
                {/* Option A: Doha + Zanzibar */}
                <label 
                  className={`pkg-radio-card ${selectedPkgId === 'doha-zanzibar' ? 'selected' : ''}`}
                  onClick={() => setSelectedPkgId('doha-zanzibar')}
                >
                  <input 
                    type="radio" 
                    name="packageSelect" 
                    checked={selectedPkgId === 'doha-zanzibar'} 
                    onChange={() => setSelectedPkgId('doha-zanzibar')} 
                    className="sr-only"
                  />
                  <div className="radio-thumb">
                    <img src="/assets/images/zanzibar-beach.jpg" alt="Doha + Zanzibar" />
                    <span className="thumb-badge">Dual Escape</span>
                  </div>
                  <div className="radio-content">
                    <div className="radio-top-meta">
                      <span className="radio-dates">Dec 12–19, 2026 · 7 Nights</span>
                      <span className="radio-check-bubble">{selectedPkgId === 'doha-zanzibar' ? '✓' : ''}</span>
                    </div>
                    <h4 className="radio-title">Doha + Zanzibar</h4>
                    <p className="radio-summary">5-Star Doha stay, all-inclusive Zanzibar resort, Qatar Airways flights &amp; visas.</p>
                    <div className="radio-price-tag">
                      <strong>₦4,350,000</strong> <span>per person sharing</span>
                    </div>
                  </div>
                </label>

                {/* Option B: Doha Grand Prix */}
                <label 
                  className={`pkg-radio-card ${selectedPkgId === 'doha-grand-prix' ? 'selected' : ''}`}
                  onClick={() => setSelectedPkgId('doha-grand-prix')}
                >
                  <input 
                    type="radio" 
                    name="packageSelect" 
                    checked={selectedPkgId === 'doha-grand-prix'} 
                    onChange={() => setSelectedPkgId('doha-grand-prix')} 
                    className="sr-only"
                  />
                  <div className="radio-thumb">
                    <img src="/assets/images/doha-f1-grand-prix.jpg" alt="Doha Grand Prix" />
                    <span className="thumb-badge f1">F1 Grand Prix</span>
                  </div>
                  <div className="radio-content">
                    <div className="radio-top-meta">
                      <span className="radio-dates">Nov 25 – Dec 1, 2026 · 6 Nights</span>
                      <span className="radio-check-bubble">{selectedPkgId === 'doha-grand-prix' ? '✓' : ''}</span>
                    </div>
                    <h4 className="radio-title">Doha Grand Prix Experience</h4>
                    <p className="radio-summary">3-Day Lusail Circuit F1 admission, 6 nights 5-star Doha luxury &amp; desert safari.</p>
                    <div className="radio-price-tag">
                      <strong>From ₦3,400,000</strong> <span>per person</span>
                    </div>
                  </div>
                </label>
              </div>

              {/* Occupancy Tier (shown for Grand Prix or standard) */}
              {selectedPkgId === 'doha-grand-prix' ? (
                <div className="occupancy-select-box">
                  <label className="input-field-label">Accommodation &amp; Room Occupancy *</label>
                  <div className="occupancy-toggle-pills">
                    <button 
                      type="button" 
                      className={`occ-btn ${occupancy === 'double' ? 'active' : ''}`}
                      onClick={() => setOccupancy('double')}
                    >
                      Double Occupancy (₦3,400,000 / person)
                    </button>
                    <button 
                      type="button" 
                      className={`occ-btn ${occupancy === 'single' ? 'active' : ''}`}
                      onClick={() => setOccupancy('single')}
                    >
                      Single Occupancy Solo Room (₦4,150,000)
                    </button>
                  </div>
                </div>
              ) : (
                <div className="occupancy-info-note">
                  <span>Room Basis: <strong>Double Occupancy / Per Person Sharing</strong> (Included in package)</span>
                </div>
              )}
            </div>

            {/* Step 2: Guest Details */}
            <div className="form-step-group">
              <div className="step-label-row">
                <span className="step-circle-num">02</span>
                <div>
                  <h3 className="step-heading">Collate Guest Information</h3>
                  <p className="step-sub">Enter primary contact details for your official reservation dossier.</p>
                </div>
              </div>

              <div className="form-inputs-grid">
                <div className="input-item">
                  <label htmlFor="leadName" className="input-field-label">Lead Guest Full Name *</label>
                  <input 
                    type="text" 
                    id="leadName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Oluwaseun Adeleke"
                    required 
                    className="styled-input"
                  />
                </div>

                <div className="input-item">
                  <label htmlFor="guestPhone" className="input-field-label">Phone &amp; WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    id="guestPhone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +234 801 234 5678"
                    required 
                    className="styled-input"
                  />
                </div>

                <div className="input-item">
                  <label htmlFor="guestEmail" className="input-field-label">Email Address *</label>
                  <input 
                    type="email" 
                    id="guestEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. adeleke@example.com"
                    required 
                    className="styled-input"
                  />
                </div>

                <div className="input-item">
                  <label htmlFor="departureCity" className="input-field-label">Departure City / Airport *</label>
                  <input 
                    type="text" 
                    id="departureCity"
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    placeholder="e.g. Lagos, Abuja, Port Harcourt"
                    required 
                    className="styled-input"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="input-item" style={{ marginTop: '16px' }}>
                <label htmlFor="specialRequests" className="input-field-label">Special Requests / Dietary / Room Preferences (Optional)</label>
                <textarea 
                  id="specialRequests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Honeymoon setup, dietary preferences, extra days in Doha..."
                  rows={2}
                  className="styled-textarea"
                />
              </div>
            </div>

            {/* Step 3: Traveller Counter & Live Calculation */}
            <div className="form-step-group calculation-group">
              <div className="step-label-row">
                <span className="step-circle-num">03</span>
                <div>
                  <h3 className="step-heading">Party Size &amp; Rate Estimation</h3>
                  <p className="step-sub">Select the number of guests in your travel party.</p>
                </div>
              </div>

              <div className="calculation-card-inner">
                <div className="counter-row">
                  <div>
                    <span className="counter-label">Number of Travellers:</span>
                    <span className="counter-desc">Adult guests sharing room or private rooms</span>
                  </div>

                  <div className="counter-controls">
                    <button 
                      type="button" 
                      className="counter-btn"
                      onClick={() => setTravellerCount(Math.max(1, travellerCount - 1))}
                      aria-label="Decrease guest count"
                    >
                      −
                    </button>
                    <span className="counter-value">{travellerCount}</span>
                    <button 
                      type="button" 
                      className="counter-btn"
                      onClick={() => setTravellerCount(Math.min(10, travellerCount + 1))}
                      aria-label="Increase guest count"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Calculation Summary Box */}
                <div className="calculation-summary-box">
                  <div className="summary-line">
                    <span>Package:</span>
                    <strong>{currentPkg.title}</strong>
                  </div>
                  <div className="summary-line">
                    <span>Travel Window:</span>
                    <span>{currentPkg.dates}</span>
                  </div>
                  <div className="summary-line">
                    <span>Rate per Guest:</span>
                    <span>₦{perPersonRate.toLocaleString('en-NG')}</span>
                  </div>
                  <div className="summary-line total-line">
                    <span>Estimated Total:</span>
                    <strong className="grand-total-amount">{totalFormatted}</strong>
                  </div>
                  <p className="calc-disclaimer">
                    * Final airline baggage class and flight availability confirmed with your Rhordway consultant upon dossier submission.
                  </p>
                </div>

                {/* Submit Action Buttons */}
                <div className="form-submit-row">
                  <button 
                    type="submit" 
                    className="collation-submit-btn"
                    disabled={isGeneratingPdf}
                  >
                    <span>
                      {isGeneratingPdf 
                        ? 'Generating Your Official Dossier...' 
                        : 'Generate Official PDF Dossier & Dispatch to WhatsApp'}
                    </span>
                    <span className="btn-arrow" aria-hidden="true">↗</span>
                  </button>

                  <div className="submit-trust-badges">
                    <span>🔒 Official PDF Download</span>
                    <span>·</span>
                    <span>💬 Direct WhatsApp Connect (+234 816 420 6030)</span>
                    <span>·</span>
                    <span>⚡ Instant Specialist Review</span>
                  </div>
                </div>

                {isSubmitted && (
                  <div className="success-banner">
                    ✓ Your PDF Dossier has been downloaded and WhatsApp has been launched! A consultant will review your slot now.
                  </div>
                )}
              </div>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
