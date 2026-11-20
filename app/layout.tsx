import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-mono',
  display: 'swap',
});

const SITE_URL = process.env.APP_URL || 'https://manaskanda.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Luxury Apartments Near Wipro Corporate Office | MANA SKANDA 3 & 3.5 BHK from ₹1.75 Cr',
  description:
    'Explore luxury apartments near Wipro Corporate Office at MANA SKANDA, a 100+ acre child-centric township on Varthur-Sarjapur Road. 3 & 3.5 BHK from ₹1.75 Cr. Call +91-8926267958 or fill the form for details.',
  keywords: [
    'Luxury Apartments Near Wipro Corporate Office',
    'apartments near Wipro Corporate Office Sarjapur',
    'luxury apartments Sarjapur Road',
    '3 BHK apartments near Wipro',
    '3.5 BHK luxury apartments East Bangalore',
    'integrated township near Whitefield',
    'apartments near tech parks Bangalore',
    'MANA SKANDA Sarjapur',
    'township apartments near Whitefield',
  ],
  alternates: {
    canonical: '/luxury-apartments-near-wipro-corporate-office',
  },
  openGraph: {
    title: 'Luxury Apartments Near Wipro Corporate Office | MANA SKANDA 3 & 3.5 BHK from ₹1.75 Cr',
    description:
      'Explore luxury apartments near Wipro Corporate Office at MANA SKANDA, a 100+ acre child-centric township on Varthur-Sarjapur Road. 3 & 3.5 BHK from ₹1.75 Cr. Call +91-8926267958 or fill the form for details.',
    url: '/luxury-apartments-near-wipro-corporate-office',
    siteName: 'MANA SKANDA – The Right Life',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Apartments Near Wipro Corporate Office | MANA SKANDA 3 & 3.5 BHK from ₹1.75 Cr',
    description:
      '100+ acre child-centric integrated township on Varthur-Sarjapur Road, East Bangalore. 3 & 3.5 BHK luxury apartments from ₹1.75 Cr.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} ${ibmMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="font-sans bg-[#F9FAF8] text-[#161E1B] antialiased selection:bg-[#1C4B3B] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
