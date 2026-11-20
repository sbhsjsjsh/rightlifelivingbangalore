import type { Metadata } from 'next';
import LandingPage from '@/components/LandingPage';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Luxury Apartments Near Wipro Corporate Office | MANA SKANDA 3 & 3.5 BHK from ₹1.75 Cr',
  description:
    'Explore luxury apartments near Wipro Corporate Office at MANA SKANDA, a 100+ acre child-centric township on Varthur-Sarjapur Road. 3 & 3.5 BHK from ₹1.75 Cr. Call +91-8926267958 or fill the form for details.',
  alternates: {
    canonical: '/luxury-apartments-near-wipro-corporate-office',
  },
};

export default function LuxuryApartmentsNearWiproPage() {
  return (
    <>
      <StructuredData />
      <LandingPage />
    </>
  );
}
