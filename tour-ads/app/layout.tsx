import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#0c1a2e',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://rhordway.com'),
  title: 'Rhordway™ | Exclusive 2026 Holiday Tours (Doha + Zanzibar & Doha Grand Prix)',
  description:
    'Experience extraordinary luxury travel with Rhordway. Reserve your spot for the 7-Night Doha + Zanzibar Escape or the 6-Night Doha Formula 1 Grand Prix Race Weekend. 5-star hotels, visas, private transfers & curated tours.',
  keywords: [
    'Rhordway holiday tours',
    'Doha and Zanzibar tour package 2026',
    'Doha Grand Prix F1 package Nigeria',
    'luxury holiday packages Lagos',
    'Rhordway travel and tours',
    'Qatar Grand Prix package'
  ],
  authors: [{ name: 'Rhordway Travel' }],
  icons: {
    icon: '/assets/images/favicon.png',
    apple: '/assets/images/rhordway-icon.png',
  },
  openGraph: {
    type: 'website',
    title: 'Rhordway™ | Exclusive 2026 Holiday Tours',
    description:
      'Two Destinations. One Extraordinary Escape. Book your Doha + Zanzibar or Doha Grand Prix holiday experience with Rhordway.',
    images: ['/assets/images/doha-skyline.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rhordway™ | Exclusive 2026 Holiday Tours',
    description:
      'Two Destinations. One Extraordinary Escape. Book your Doha + Zanzibar or Doha Grand Prix holiday experience with Rhordway.',
    images: ['/assets/images/doha-skyline.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/assets/images/doha-skyline.jpg" fetchPriority="high" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
