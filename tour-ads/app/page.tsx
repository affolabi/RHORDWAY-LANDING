'use client';

import React, { useState } from 'react';
import TourSiteHeader from '../components/TourSiteHeader';
import TourCampaignHero from '../components/TourCampaignHero';
import TourExperienceSelector from '../components/TourExperienceSelector';
import DohaZanzibarFeature from '../components/DohaZanzibarFeature';
import GrandPrixFeature from '../components/GrandPrixFeature';
import TourReviews from '../components/TourReviews';
import ActivityGallery from '../components/ActivityGallery';
import TravelConfidence from '../components/TravelConfidence';
import BookingSteps from '../components/BookingSteps';
import TourCollationDesk from '../components/TourCollationDesk';
import TourFAQ from '../components/TourFAQ';
import TourFinalCTA from '../components/TourFinalCTA';
import TourSiteFooter from '../components/TourSiteFooter';
import TourScrollObserver from '../components/TourScrollObserver';

export default function TourAdsPage() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('doha-zanzibar');
  const [selectedOccupancy, setSelectedOccupancy] = useState<string>('double');

  const handleSelectPackage = (pkgId: string, occupancy?: string) => {
    setSelectedPackageId(pkgId);
    if (occupancy) {
      setSelectedOccupancy(occupancy);
    }
    const desk = document.getElementById('booking-desk');
    if (desk) {
      desk.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="tour-app-wrapper">
      <TourScrollObserver />
      <TourSiteHeader />

      <main id="tour-main-content">
        {/* 1. Uncluttered Hero Image Slider */}
        <TourCampaignHero />

        {/* 2. Top Offer Showcase (Doha+Zanzibar & Grand Prix) */}
        <TourExperienceSelector onSelectPackage={handleSelectPackage} />

        {/* 3. Deep Dive Itinerary: Doha + Zanzibar 7-Night Dual Escape */}
        <DohaZanzibarFeature onSelectPackage={handleSelectPackage} />

        {/* 4. Deep Dive Itinerary: Doha Grand Prix Formula 1 Race Weekend */}
        <GrandPrixFeature onSelectPackage={handleSelectPackage} />

        {/* 5. Verified Client Reviews & Testimonials */}
        <TourReviews />

        {/* 6. Asymmetric Excursion & Activity Photo Mosaic */}
        <ActivityGallery />

        {/* 7. Rhordway Travel Confidence Pillars */}
        <TravelConfidence />

        {/* 8. 3-Step Reservation Process */}
        <BookingSteps />

        {/* 9. Interactive Collation Desk: Instant Pricing, PDF Dossier & WhatsApp Dispatch */}
        <TourCollationDesk
          initialPackageId={selectedPackageId}
          initialOccupancy={selectedOccupancy}
        />

        {/* 10. Frequently Asked Questions */}
        <TourFAQ />

        {/* 11. Final High-Impact CTA */}
        <TourFinalCTA />
      </main>

      <TourSiteFooter />
    </div>
  );
}
