export const CONTACT_PHONE_DISPLAY = '+91-8926267958';
export const CONTACT_PHONE_HREF = 'tel:+918926267958';

export const CANONICAL_SLUG = '/luxury-apartments-near-wipro-corporate-office';

export const KEY_METRICS = [
  {
    value: '100+ Acres',
    label: 'Child-Centric Township',
    detail: 'Varthur–Sarjapur Road, East Bangalore',
  },
  {
    value: '84%',
    label: 'Open Areas',
    detail: '51% hardscape · 33% softscape',
  },
  {
    value: '₹1.75 Cr*',
    label: 'Starting Price',
    detail: '3 BHK & 3.5 BHK luxury residences',
  },
  {
    value: '3.5 Lakh Sq.Ft.',
    label: 'Premium Clubhouses',
    detail: '100+ curated lifestyle experiences',
  },
] as const;

export const WHY_LIVE_NEAR_WIPRO = [
  {
    number: '01',
    title: 'A Shorter, Simpler Commute',
    description:
      'The Wipro Corporate Office sits in the same corridor, along with Microsoft Office, RGA Tech Park, RMZ Ecospace, Global Technology Park, Pritech Park SEZ, RMZ Eco World, Embassy Tech Village and Bagmane Constellation Business Park.',
  },
  {
    number: '02',
    title: 'More Time for Family',
    description:
      'Less time on the road means more time for your children, your fitness and your home.',
  },
  {
    number: '03',
    title: 'Main-Road Frontage, Effortless Access',
    description:
      'Direct access to ORR, Sarjapur SEZ and Whitefield–ITPL keeps daily travel smooth, with no bottlenecks.',
  },
  {
    number: '04',
    title: 'Luxury Living Away from the Noise',
    description:
      'A 13-acre scenic lake nearby creates a natural microclimate with lush greenery and tranquil views.',
  },
] as const;

export interface UnitConfiguration {
  id: '3bhk' | '3.5bhk';
  type: string;
  sizeSqFt: string;
  startingPrice: string;
  numericEstimate: string;
  highlights: string[];
}

export const UNIT_CONFIGURATIONS: UnitConfiguration[] = [
  {
    id: '3bhk',
    type: '3 BHK',
    sizeSqFt: '1661 – 1953 Sq.Ft.',
    startingPrice: '₹1.75 Crore onwards',
    numericEstimate: '₹1.75 Cr*',
    highlights: [
      'Vastu-compliant corner & garden-facing layouts',
      'Expansive forest-view living balconies',
      'Ideal for IT professionals & growing families',
    ],
  },
  {
    id: '3.5bhk',
    type: '3.5 BHK',
    sizeSqFt: '2067 – 2244 Sq.Ft.',
    startingPrice: '₹2.35 Crore onwards',
    numericEstimate: '₹2.35 Cr*',
    highlights: [
      'Dedicated study / home office suite for hybrid work',
      'Panoramic views across 84% open landscapes',
      'Designed for senior leaders seeking generous privacy',
    ],
  },
];

export const PROJECT_HIGHLIGHTS = [
  {
    number: '01',
    title: "Bangalore's Largest Child-Centric Integrated Township",
    description:
      'Safe, no-vehicle pedestrian zones and dedicated play and learning areas with a "Kids-First" vision.',
    metric: 'Kids-First Masterplan',
  },
  {
    number: '02',
    title: '84% Open Areas',
    description:
      '51% hardscape and 33% softscape for a green, open living environment.',
    metric: '51% Hardscape · 33% Softscape',
  },
  {
    number: '03',
    title: '6.5 Acres of Sports Facilities',
    description:
      'World-class stadiums, multi-purpose courts and a running track.',
    metric: '6.5 Acres Active Zone',
  },
  {
    number: '04',
    title: '3.5 Lakh Sq.Ft. of Premium Clubhouses',
    description: 'More than 100 unique experiences for every age group.',
    metric: '100+ Experiences',
  },
  {
    number: '05',
    title: 'Vastu-Compliant Towers',
    description:
      '3B + G + 35 floors, with 9 high-rise towers and 2000+ residences planned overall (3 towers in Phase 1).',
    metric: '3B + G + 35 Floors',
  },
  {
    number: '06',
    title: 'Future-Ready Township',
    description:
      'Upcoming commercial spaces, a curated retail high-street, a temple and everyday essentials within the township.',
    metric: 'Self-Sustaining Ecosystem',
  },
] as const;

export const PROJECT_OVERVIEW = [
  { label: 'Project Name', value: 'MANA SKANDA – The Right Life' },
  {
    label: 'Location',
    value: 'Varthur–Sarjapur Road, East Bangalore (near Whitefield)',
  },
  {
    label: 'Type',
    value: '100+ acre integrated township (residential, commercial, retail and sports)',
  },
  { label: 'Theme', value: 'Nature-integrated, child-centric, forest-themed' },
  { label: 'Phase 1', value: '31 acres with 3 towers' },
  { label: 'Completion Timeline', value: '2028 onwards' },
] as const;

export const RERA_NUMBERS = [
  {
    label: 'RERA Registration 01',
    code: 'PRM/KA/RERA/1251/308/PR/120326/008521',
  },
  {
    label: 'RERA Registration 02',
    code: 'PRM/KA/RERA/1251/308/PR/120326/008522',
  },
] as const;

export interface LocationCategory {
  id: 'tech-parks' | 'schools' | 'hospitals' | 'retail';
  label: string;
  subtitle: string;
  items: { name: string; proximity?: string }[];
}

export const LOCATION_CATEGORIES: LocationCategory[] = [
  {
    id: 'tech-parks',
    label: 'Tech Parks & Offices',
    subtitle: 'Direct corridor access to Sarjapur SEZ, ORR & Whitefield–ITPL',
    items: [
      { name: 'Wipro Corporate Office', proximity: 'Same Corridor' },
      { name: 'Microsoft Office', proximity: 'Tech Corridor' },
      { name: 'RGA Tech Park', proximity: 'Sarjapur Road' },
      { name: 'RMZ Ecospace', proximity: 'ORR Belt' },
      { name: 'Global Technology Park', proximity: 'ORR Belt' },
      { name: 'Pritech Park SEZ', proximity: 'ORR Belt' },
      { name: 'RMZ Eco World', proximity: 'ORR Belt' },
      { name: 'Embassy Tech Village', proximity: 'ORR Belt' },
      { name: 'Bagmane Constellation Business Park', proximity: 'ORR–Whitefield' },
    ],
  },
  {
    id: 'schools',
    label: 'Top Schools (0–5 km)',
    subtitle: 'Premier international & CBSE institutions right beside the township',
    items: [
      { name: 'Greenwood High International School', proximity: '100 m' },
      { name: 'Inventure Academy', proximity: 'Right next door' },
      { name: 'United World Academy', proximity: 'Right next door' },
      { name: 'Global Indian International School', proximity: '700 m' },
      { name: 'TISB (The International School Bangalore)', proximity: '850 m' },
      { name: 'Oakridge International School', proximity: '1.5 km' },
      { name: 'One World International School', proximity: '4.6 km' },
      { name: 'Delhi Public School East', proximity: '0 – 5 km belt' },
      { name: 'Head Start Educational Academy', proximity: '0 – 5 km belt' },
      { name: 'Harvest International School', proximity: '0 – 5 km belt' },
    ],
  },
  {
    id: 'hospitals',
    label: 'Hospitals',
    subtitle: 'Multi-specialty healthcare & maternity care within swift reach',
    items: [
      { name: 'Manipal Hospitals' },
      { name: 'Sakra World Hospital' },
      { name: 'Motherhood Hospitals' },
      { name: 'Columbia Asia' },
      { name: 'Cloudnine' },
      { name: 'Apollo' },
      { name: "Rainbow Children's Hospital" },
      { name: 'Belenus Champion (New Apollo)' },
    ],
  },
  {
    id: 'retail',
    label: 'Retail & Malls',
    subtitle: 'Dining, entertainment & high-street destinations across East Bangalore',
    items: [
      { name: 'Forum Mall', proximity: '5 km' },
      { name: 'Soul Space Spirit Centro Mall' },
      { name: 'Phoenix Market City' },
      { name: 'Market Square Mall' },
      { name: 'Forum Neighbourhood Mall' },
      { name: 'Total Mall' },
    ],
  },
];

export const BUYER_PROFILES = [
  {
    number: '01',
    title: 'Wipro and IT Professionals',
    description:
      'Live close to work with a clean, direct route to ORR, Sarjapur SEZ and Whitefield–ITPL.',
  },
  {
    number: '02',
    title: 'Families with Children',
    description:
      "Safe, no-vehicle zones, learning areas and some of Bangalore's best international schools nearby.",
  },
  {
    number: '03',
    title: 'Senior Professionals and Leaders',
    description:
      'Spacious, Vastu-compliant homes with privacy and premium amenities.',
  },
  {
    number: '04',
    title: 'Investors',
    description:
      "A large integrated township in East Bangalore's growing tech and education belt.",
  },
] as const;

export const WHY_CHOOSE_REASONS = [
  "One of Bangalore's largest integrated township experiences",
  '"Kids-First" vision with safe movement spaces and learning zones',
  'Main-road frontage with no bottlenecks',
  'Surrounded by top international schools',
  'Excellent connectivity to ORR, Sarjapur SEZ and Whitefield–ITPL',
  '84% open areas, 13-acre lake nearby and 6.5 acres of sports facilities',
] as const;

export const FAQS = [
  {
    question: 'Are these luxury apartments near Wipro Corporate Office?',
    answer:
      'Yes. The Wipro Corporate Office and several major tech parks are in the surrounding Sarjapur–Whitefield corridor.',
  },
  {
    question: 'What are the apartment sizes and prices?',
    answer:
      '3 BHK apartments range from 1661 to 1953 sq.ft., starting at ₹1.75 Crore. 3.5 BHK apartments range from 2067 to 2244 sq.ft., starting at ₹2.35 Crore.',
  },
  {
    question: 'Where is MANA SKANDA located?',
    answer:
      'On Varthur–Sarjapur Road in East Bangalore, near Whitefield, with direct access to ORR, Sarjapur SEZ and Whitefield–ITPL.',
  },
  {
    question: 'Are the apartments Vastu-compliant?',
    answer: 'Yes. The towers are designed to be Vastu-compliant.',
  },
  {
    question: 'What amenities does the project offer?',
    answer:
      '3.5 lakh sq.ft. of clubhouses with 100+ experiences, 6.5 acres of sports facilities, 84% open areas, no-vehicle pedestrian zones and dedicated play and learning areas.',
  },
  {
    question: 'Which schools are nearby?',
    answer:
      'Greenwood High International School, Global Indian International School, TISB, Oakridge International School, Inventure Academy and United World Academy are all close by.',
  },
  {
    question: 'Is the project RERA registered?',
    answer:
      'Yes. RERA numbers are PRM/KA/RERA/1251/308/PR/120326/008521 and 008522.',
  },
  {
    question: 'When is the possession?',
    answer: 'The completion timeline is 2028 onwards.',
  },
  {
    question: 'How can I book a site visit?',
    answer:
      'Fill the form or call +91-8926267958 and our team will arrange your site visit.',
  },
] as const;
