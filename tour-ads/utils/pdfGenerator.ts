import jsPDF from 'jspdf';
import { siteConfig } from '../config/siteConfig';

export interface ReservationData {
  bookingRef: string;
  packageName: string;
  travelDates: string;
  duration: string;
  occupancy: string;
  priceFormatted: string;
  travellerCount: number;
  totalEstimated: string;
  leadName: string;
  email: string;
  phone: string;
  departureCity: string;
  specialRequests?: string;
  inclusions: string[];
}

export function generateBookingReference(prefix: string = 'RH-TOUR'): string {
  const randomStr = Math.random().toString(36).substring(2, 7).toUpperCase();
  const year = new Date().getFullYear();
  return `${prefix}-${year}-${randomStr}`;
}

export async function generateReservationPDF(data: ReservationData): Promise<void> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();

  // 1. Header Banner
  doc.setFillColor(15, 17, 21); // #0F1115 Obsidian
  doc.rect(0, 0, pageWidth, 42, 'F');

  // Azure Accent Strip
  doc.setFillColor(0, 128, 232); // #0080E8 Azure
  doc.rect(0, 42, pageWidth, 2.5, 'F');

  // Brand Name
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('RHORDWAY™', 20, 20);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(200, 210, 225);
  doc.text('EXCLUSIVE HOLIDAY & TOUR CAMPAIGN DOSSIER', 20, 27);
  doc.text('LUXURY ESCAPES · EMBASSY-COMPLIANT DOCUMENTATION · VERIFIED STAYS', 20, 33);

  // Booking Ref Badge (Right Header)
  doc.setFillColor(30, 34, 43);
  doc.roundedRect(pageWidth - 78, 12, 58, 22, 3, 3, 'F');

  doc.setFontSize(7.5);
  doc.setTextColor(150, 160, 180);
  doc.text('BOOKING REFERENCE', pageWidth - 72, 19);

  doc.setFontSize(10.5);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 128, 232);
  doc.text(data.bookingRef, pageWidth - 72, 27);

  // 2. Package Overview Box
  let y = 56;
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(20, y, pageWidth - 40, 32, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(15, 17, 21);
  doc.text(data.packageName, 26, y + 9);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text(`Travel Window: ${data.travelDates}  |  Duration: ${data.duration}`, 26, y + 17);
  doc.text(`Occupancy: ${data.occupancy}  |  Party Size: ${data.travellerCount} Guest(s)`, 26, y + 24);

  // Rate Display in Box
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(0, 128, 232);
  doc.text(data.totalEstimated, pageWidth - 26, y + 18, { align: 'right' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Estimated Total', pageWidth - 26, y + 24, { align: 'right' });

  // 3. Guest Details Section
  y = 98;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 17, 21);
  doc.text('LEAD GUEST & CONTACT INFORMATION', 20, y);

  doc.setDrawColor(226, 232, 240);
  doc.line(20, y + 3, pageWidth - 20, y + 3);

  y += 11;
  doc.setFontSize(8.5);

  const guestFields = [
    { label: 'Lead Guest Name', value: data.leadName || 'Valued Guest' },
    { label: 'Phone / WhatsApp', value: data.phone || 'N/A' },
    { label: 'Email Address', value: data.email || 'N/A' },
    { label: 'Departure City', value: data.departureCity || 'Nigeria' }
  ];

  guestFields.forEach((field, idx) => {
    const colX = idx % 2 === 0 ? 20 : 110;
    const currentY = y + Math.floor(idx / 2) * 12;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text(field.label, colX, currentY);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 17, 21);
    doc.text(field.value, colX, currentY + 5);
  });

  y += 28;

  // 4. Inclusions Checklist
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 17, 21);
  doc.text('VERIFIED PACKAGE INCLUSIONS & ENTITLEMENTS', 20, y);

  doc.setDrawColor(226, 232, 240);
  doc.line(20, y + 3, pageWidth - 20, y + 3);

  y += 10;
  doc.setFontSize(8);

  const topInclusions = data.inclusions.slice(0, 8);
  topInclusions.forEach((inc) => {
    // Check bullet dot
    doc.setFillColor(0, 128, 232);
    doc.circle(23, y - 1, 1.2, 'F');

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30, 41, 59);
    doc.text(inc, 28, y);
    y += 6;
  });

  // 5. Special Requests or Notes
  if (data.specialRequests && data.specialRequests.trim().length > 0) {
    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 17, 21);
    doc.text('Special Requests / Notes:', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    const splitNotes = doc.splitTextToSize(data.specialRequests, pageWidth - 40);
    doc.text(splitNotes, 20, y + 5);
    y += splitNotes.length * 5 + 4;
  } else {
    y += 4;
  }

  // 6. Verification & Consultant Contact Footer Box
  const footerBoxY = 244;
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(20, footerBoxY, pageWidth - 40, 36, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 17, 21);
  doc.text('NEXT STEPS TO CONFIRM YOUR RESERVATION:', 26, footerBoxY + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text(
    '1. Submit this generated PDF dossier directly to Rhordway’s official WhatsApp consultant desk.\n' +
    '2. Our specialist will confirm live airline seat inventory, 5-star hotel availability, and payment milestones.\n' +
    '3. Your official booking confirmation invoice will be issued upon payment receipt.',
    26,
    footerBoxY + 14
  );

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(0, 128, 232);
  doc.text(`Official WhatsApp: ${siteConfig.primaryPhoneFormatted}  |  Email: ${siteConfig.contactEmail}`, 26, footerBoxY + 31);

  // Save / Trigger Download
  const fileName = `Rhordway_Reservation_${data.bookingRef}.pdf`;
  doc.save(fileName);
}
