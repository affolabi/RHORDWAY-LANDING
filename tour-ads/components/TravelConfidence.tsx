'use client';

import React from 'react';

export default function TravelConfidence() {
  const pillars = [
    {
      num: '01',
      title: 'Verified 5-Star Accommodations',
      desc: 'All hotels and all-inclusive coastal resorts are hand-selected, verified for luxury hospitality standards, and include all advertised breakfast and resort dining.'
    },
    {
      num: '02',
      title: 'Full Visa Assistance & Insurance',
      desc: 'From electronic Qatar tourist visas to Tanzania and Zanzibar permits, our dedicated documentation team audits your paperwork for smooth travel.'
    },
    {
      num: '03',
      title: 'Seamless Ground Mobility',
      desc: 'Private airport meet-and-greet transfers in both Doha and Zanzibar, plus coordinated transportation for scheduled tours and Lusail Grand Prix events.'
    },
    {
      num: '04',
      title: 'Curated Expert-Led Excursions',
      desc: 'Every scheduled desert dune excursion, island boat tour, and museum entry includes professional local guides and all entrance fees pre-paid.'
    }
  ];

  return (
    <section className="tour-section confidence-section" id="why-rhordway">
      <div className="tour-container">
        
        <div className="tour-section-header text-center anim-reveal-text">
          <div className="tour-eyebrow-pill center-pill">
            <span className="tour-blue-dot"></span>
            Seamless Travel Execution
          </div>
          <h2 className="tour-section-heading">
            Why Book Your 2026 Holiday With Rhordway<span style={{ color: '#0080E8' }}>.</span>
          </h2>
          <p className="tour-section-subheading">
            We handle the complexities of international flights, multi-country visas, premium hotels, and transfers so your vacation is completely stress-free.
          </p>
        </div>

        <div className="confidence-grid anim-reveal-text">
          {pillars.map((p) => (
            <div key={p.num} className="confidence-card">
              <div className="confidence-num">{p.num}</div>
              <h3 className="confidence-card-title">{p.title}</h3>
              <p className="confidence-card-desc">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
