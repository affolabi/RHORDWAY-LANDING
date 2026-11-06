'use client';

import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function TourFAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs = [
    {
      id: 'faq-1',
      question: 'What is included in the package price?',
      answer:
        'All advertised packages include return international flight tickets, 5-star luxury hotel accommodation with daily breakfast (plus all-inclusive resort meals and drinks in Zanzibar), tourist visa processing, mandatory travel insurance, private airport transfers, and scheduled excursions with entrance fees.'
    },
    {
      id: 'faq-2',
      question: 'What does "per person sharing" (Double Occupancy) mean?',
      answer:
        'Per person sharing (Double Occupancy) means the rate is calculated per traveller sharing a room with another guest (twin beds or king bed). If travelling solo, you can select Single Occupancy to enjoy a private room dedicated entirely to yourself.'
    },
    {
      id: 'faq-3',
      question: 'Are visas guaranteed, and how are they processed?',
      answer:
        'Rhordway’s dedicated documentation specialists prepare and submit your electronic Qatar tourist visa and Tanzania/Zanzibar tourist visa directly through official immigration portals. All filing fees and requirements are included in your package price.'
    },
    {
      id: 'faq-4',
      question: 'Are flights and airport transfers included?',
      answer:
        'Yes. For Doha + Zanzibar, flights are booked with Qatar Airways. In addition, private airport meet-and-greet transfers are included for both arrivals and departures in Doha and Zanzibar.'
    },
    {
      id: 'faq-5',
      question: 'How do I reserve a slot for my holiday package?',
      answer:
        'Simply use the reservation collation form above to enter your party details, download your official reservation dossier PDF, and send it to our WhatsApp consultant desk (+234 816 420 6030). Our team will confirm seat and room availability and issue your booking invoice.'
    },
    {
      id: 'faq-6',
      question: 'What are the payment arrangements and payment milestones?',
      answer:
        'Initial deposit secures your flight seats and 5-star hotel slots, with flexible balance milestones prior to departure. Official payment receipts and invoices are issued through Rhordway’s verified corporate banking lines.'
    }
  ];

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="tour-section tour-faq-section" id="faqs">
      <div className="tour-container">
        
        <div className="tour-section-header text-center anim-reveal-text">
          <div className="tour-eyebrow-pill center-pill">
            <span className="tour-blue-dot"></span>
            Clear Travel Information
          </div>
          <h2 className="tour-section-heading">
            Frequently Asked Questions<span style={{ color: '#0080E8' }}>.</span>
          </h2>
          <p className="tour-section-subheading">
            Essential information regarding our 2026 curated holiday packages, flight bookings, visas, and reservation terms.
          </p>
        </div>

        <div className="tour-faq-list anim-reveal-text">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className={`tour-faq-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  type="button" 
                  className="tour-faq-trigger"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon-bubble" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div className="tour-faq-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-help-footer anim-reveal-text">
          <p>
            Have a question not listed here? Chat directly with our travel advisory desk on WhatsApp:{' '}
            <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              <strong>{siteConfig.primaryPhoneFormatted}</strong>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
