'use client';

import React, { useState } from 'react';
import TourSiteHeader from '../components/TourSiteHeader';
import TourCampaignHero from '../components/TourCampaignHero';
import TourExperienceSelector from '../components/TourExperienceSelector';
import DohaZanzibarFeature from '../components/DohaZanzibarFeature';
import GrandPrixFeature from '../components/GrandPrixFeature';
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
        {/* 1. Hero Campaign Banner with Departure Cards */}
        <TourCampaignHero onSelectPackage={handleSelectPackage} />

        {/* 2. Package Selector & Side-by-Side Comparison */}
        <TourExperienceSelector onSelectPackage={handleSelectPackage} />

        {/* 3. Deep Dive: Doha + Zanzibar 7-Night Dual Escape */}
        <DohaZanzibarFeature onSelectPackage={handleSelectPackage} />

        {/* 4. Deep Dive: Doha Grand Prix Formula 1 Race Weekend */}
        <GrandPrixFeature onSelectPackage={handleSelectPackage} />

        {/* 5. Asymmetric Excursion & Activity Mosaic */}
        <ActivityGallery />

        {/* 6. Rhordway Travel Confidence Pillars */}
        <TravelConfidence />

        {/* 7. 3-Step Transparent Booking Flow */}
        <BookingSteps />

        {/* 8. Interactive Collation Desk: Pricing, PDF Dossier & WhatsApp Dispatch */}
        <TourCollationDesk
          initialPackageId={selectedPackageId}
          initialOccupancy={selectedOccupancy}
        />

        {/* 9. Frequently Asked Questions */}
        <TourFAQ />

        {/* 10. Final Call to Action */}
        <TourFinalCTA />
      </main>

      <TourSiteFooter />
    </div>
  );
}
