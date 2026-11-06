import { siteConfig } from '../config/siteConfig';

export interface WhatsAppBookingParams {
  packageName: string;
  travelDates: string;
  leadName?: string;
  phone?: string;
  email?: string;
  travellerCount?: number;
  occupancy?: string;
  departureCity?: string;
  specialRequests?: string;
  totalEstimated?: string;
  bookingRef?: string;
}

export function buildWhatsAppUrl(params: WhatsAppBookingParams): string {
  const cleanPhone = (siteConfig.whatsappNumber || '2348164206030').replace(/[^0-9]/g, '');

  let text = `*RHORDWAY TOUR RESERVATION INQUIRY*\n`;
  if (params.bookingRef) {
    text += `*Booking Ref:* ${params.bookingRef}\n`;
  }
  text += `*Package:* ${params.packageName}\n`;
  text += `*Travel Window:* ${params.travelDates}\n`;

  if (params.occupancy) {
    text += `*Occupancy Tier:* ${params.occupancy}\n`;
  }
  if (params.travellerCount) {
    text += `*Number of Travellers:* ${params.travellerCount} Guest(s)\n`;
  }
  if (params.totalEstimated) {
    text += `*Total Estimated:* ${params.totalEstimated}\n`;
  }
  if (params.leadName) {
    text += `*Lead Guest Name:* ${params.leadName}\n`;
  }
  if (params.phone) {
    text += `*Phone / WhatsApp:* ${params.phone}\n`;
  }
  if (params.email) {
    text += `*Email Address:* ${params.email}\n`;
  }
  if (params.departureCity) {
    text += `*Departure City:* ${params.departureCity}\n`;
  }
  if (params.specialRequests) {
    text += `*Special Requests / Notes:* ${params.specialRequests}\n`;
  }

  text += `\nHello Rhordway Desk, I would like to check availability and confirm my reservation for this 2026 holiday package.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

export function buildGeneralEnquiryUrl(topic: string = 'Exclusive 2026 Holiday Tours'): string {
  const cleanPhone = (siteConfig.whatsappNumber || '2348164206030').replace(/[^0-9]/g, '');
  const text = `Hello Rhordway Consultant, I am interested in your ${topic} and would like to speak with a travel advisor regarding itinerary details and slot availability.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
