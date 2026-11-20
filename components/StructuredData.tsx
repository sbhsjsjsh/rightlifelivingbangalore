import { CANONICAL_SLUG, CONTACT_PHONE_DISPLAY, FAQS, RERA_NUMBERS } from '@/lib/project-data';

export default function StructuredData() {
  const siteUrl = process.env.APP_URL || 'https://manaskanda.example.com';
  const pageUrl = `${siteUrl}${CANONICAL_SLUG}`;

  const residenceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ApartmentComplex',
    name: 'MANA SKANDA – The Right Life',
    description:
      'Explore luxury apartments near Wipro Corporate Office at MANA SKANDA, a 100+ acre child-centric integrated township on Varthur-Sarjapur Road, East Bangalore. 3 & 3.5 BHK residences starting from ₹1.75 Cr.',
    url: pageUrl,
    telephone: CONTACT_PHONE_DISPLAY,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Varthur–Sarjapur Road',
      addressLocality: 'East Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: '84% Open Areas', value: true },
      {
        '@type': 'LocationFeatureSpecification',
        name: '3.5 Lakh Sq.Ft. Premium Clubhouses (100+ Experiences)',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: '6.5 Acres of Sports Facilities',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'No-Vehicle Pedestrian Child-Centric Zones',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Vastu-Compliant High-Rise Towers',
        value: true,
      },
    ],
    identifier: RERA_NUMBERS.map((r) => r.code),
    offers: [
      {
        '@type': 'Offer',
        name: '3 BHK Luxury Apartment (1661 – 1953 Sq.Ft.)',
        price: '17500000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/PreOrder',
      },
      {
        '@type': 'Offer',
        name: '3.5 BHK Luxury Apartment (2067 – 2244 Sq.Ft.)',
        price: '23500000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/PreOrder',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residenceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
