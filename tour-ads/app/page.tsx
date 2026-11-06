'use client';

import React, { useState } from 'react';
import TourSiteHeader from '../components/TourSiteHeader';
import TourCampaignHero from '../components/TourCampaignHero';
import TourExperienceSelector from '../components/TourExperienceSelector';
import TravelerMomentsCarousel from '../components/TravelerMomentsCarousel';
import TourReviews from '../components/TourReviews';
import TravelConfidence from '../components/TravelConfidence';
import BookingSteps from '../components/BookingSteps';
import TourCollationDesk from '../components/TourCollationDesk';
import TourFAQ from '../components/TourFAQ';
import TourFinalCTA from '../components/TourFinalCTA';
import TourSiteFooter from '../components/TourSiteFooter';
import TourScrollObserver from '../components/TourScrollObserver';
import TourDetailModal from '../components/TourDetailModal';

export default function TourAdsPage() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('doha-zanzibar');
  const [selectedOccupancy, setSelectedOccupancy] = useState<string>('double');
  const [modalPackageId, setModalPackageId] = useState<string | null>(null);

  const handleSelectPackageForBooking = (pkgId: string, occupancy?: string) => {
    setSelectedPackageId(pkgId);
    if (occupancy) {
      setSelectedOccupancy(occupancy);
    }
    const desk = document.getElementById('booking-desk');
    if (desk) {
      desk.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenTourDetails = (pkgId: string) => {
    setModalPackageId(pkgId);
  };

  const handleCloseModal = () => {
    setModalPackageId(null);
  };

  return (
    <div className="tour-app-wrapper">
      <TourScrollObserver />
      <TourSiteHeader />

      <main id="tour-main-content">
        {/* 1. Fast 800ms Holiday Hero Slider with Restored Copy */}
        <TourCampaignHero />

        {/* 2. "Our Tours" Clean Showcase - Click opens TourDetailModal */}
        <TourExperienceSelector 
          onOpenDetails={handleOpenTourDetails}
          onSelectPackage={handleSelectPackageForBooking} 
        />

        {/* 3. "Through Our Lens" Interactive People & Video Moments Carousel */}
        <TravelerMomentsCarousel />

        {/* 4. Compact, Space-Minimized Reviews Carousel */}
        <TourReviews />

        {/* 5. Confidence Pillars */}
        <TravelConfidence />

        {/* 6. Simple 3-Step Process */}
        <BookingSteps />

        {/* 7. Collation Desk: Instant Pricing, PDF Dossier & WhatsApp Dispatch */}
        <TourCollationDesk
          initialPackageId={selectedPackageId}
          initialOccupancy={selectedOccupancy}
        />

        {/* 8. Frequently Asked Questions */}
        <TourFAQ />

        {/* 9. Final CTA */}
        <TourFinalCTA />
      </main>

      <TourSiteFooter />

      {/* Interactive Tour Detail Modal (No clutter on homepage) */}
      <TourDetailModal
        packageId={modalPackageId}
        onClose={handleCloseModal}
        onSelectForBooking={handleSelectPackageForBooking}
      />
    </div>
  );
}
