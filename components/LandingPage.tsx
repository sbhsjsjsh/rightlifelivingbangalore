'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { motion } from 'motion/react';

import heroTownshipImg from '@/src/assets/images/hero_mana_skanda_township_1795147852497.jpg';
import apartmentInteriorImg from '@/src/assets/images/luxury_apartment_interior_1795147851342.jpg';
import forestClubhouseImg from '@/src/assets/images/forest_clubhouse_pavilion_1795147851578.jpg';
import lakefrontParkImg from '@/src/assets/images/lakefront_kids_park_1795147853673.jpg';

import Navbar from '@/components/Navbar';
import SafeImage from '@/components/SafeImage';
import LocationExplorer from '@/components/LocationExplorer';
import FaqAccordion from '@/components/FaqAccordion';
import ReraCopyCard from '@/components/ReraCopyCard';
import EnquiryForm from '@/components/EnquiryForm';

import {
  BUYER_PROFILES,
  CANONICAL_SLUG,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  KEY_METRICS,
  PROJECT_HIGHLIGHTS,
  PROJECT_OVERVIEW,
  RERA_NUMBERS,
  UNIT_CONFIGURATIONS,
  WHY_CHOOSE_REASONS,
  WHY_LIVE_NEAR_WIPRO,
} from '@/lib/project-data';

export default function LandingPage() {
  const [selectedConfig, setSelectedConfig] = useState(
    '3 BHK (1661 – 1953 Sq.Ft.) · From ₹1.75 Cr'
  );
  const [selectedIntent, setSelectedIntent] = useState('Get Price Sheet & Brochure');

  const scrollToEnquiry = (intent?: string, config?: string) => {
    if (intent) setSelectedIntent(intent);
    if (config) setSelectedConfig(config);
    const el = document.getElementById('enquire');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAF8] text-[#161E1B]">
      <Navbar onEnquireClick={(intent) => scrollToEnquiry(intent)} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-[#E2E6E1]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end"
            >
              <div className="lg:col-span-7">
                <p className="text-sm text-[#4C5953] flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>Varthur–Sarjapur Road, East Bangalore</span>
                  <span aria-hidden="true">·</span>
                  <span>100+ Acre Child-Centric Township</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">3 &amp; 3.5 BHK from ₹1.75 Cr</span>
                </p>

                <h1 className="mt-4 font-serif text-[clamp(2.25rem,4.1vw,3.65rem)] font-semibold leading-[1.06] tracking-tight text-[#161E1B] text-balance">
                  Luxury Apartments Near Wipro Corporate Office – MANA SKANDA, The Right Life
                </h1>
              </div>

              <div className="lg:col-span-5 lg:pb-1">
                <p className="text-base font-medium text-[#161E1B] leading-snug">
                  A 100+ Acre Child-Centric Integrated Township on Varthur–Sarjapur Road, East
                  Bangalore
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[#4C5953]">
                  Looking for{' '}
                  <strong className="font-semibold text-[#161E1B]">
                    luxury apartments near Wipro Corporate Office
                  </strong>
                  ? MANA SKANDA brings premium 3 and 3.5 BHK residences to a forest-themed
                  integrated township with 84% open areas, a 3.5 lakh sq.ft. clubhouse and top
                  international schools right next door. Located on the main Varthur–Sarjapur Road,
                  it gives direct access to ORR, Sarjapur SEZ and Whitefield–ITPL.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToEnquiry('Get Price Sheet & Brochure')}
                    className="min-h-[48px] px-6 py-3 text-sm font-semibold text-white bg-[#1C4B3B] hover:bg-[#153A2E] rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C4B3B]"
                  >
                    <span>Get Price &amp; Brochure</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </button>

                  <a
                    href={CONTACT_PHONE_HREF}
                    className="min-h-[48px] px-5 py-3 text-sm font-medium text-[#161E1B] bg-white border border-[#D4DBD3] hover:bg-[#F1F3F0] rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C4B3B]"
                  >
                    <Phone className="w-4 h-4 text-[#1C4B3B] shrink-0" aria-hidden="true" />
                    <span className="tabular-nums">Call Now: {CONTACT_PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Panoramic 16:9 architectural hero plate */}
            <div className="mt-8 sm:mt-10 relative w-full h-[240px] sm:h-[380px] lg:h-[490px] rounded-lg overflow-hidden bg-[#E8ECE7] border border-[#E2E6E1]">
              <SafeImage
                src={heroTownshipImg}
                alt="MANA SKANDA forest-themed luxury high-rise apartment towers overlooking landscaped car-free promenades and a scenic lake near Wipro Corporate Office on Varthur-Sarjapur Road"
                caption="MANA SKANDA – The Right Life, Varthur–Sarjapur Road"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#101A16]/75 via-[#101A16]/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
                <p className="text-xs sm:text-sm font-medium text-white/95">
                  Forest-themed masterplan · 13-acre scenic lake nearby · Main-road frontage
                </p>
                <p className="text-xs font-mono tabular-nums text-white/85">
                  Phase 1: 31 Acres · 3 Towers · Completion 2028 onwards
                </p>
              </div>
            </div>

            {/* Full-width 4-column specification strip directly below hero */}
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 border-t border-b border-[#E2E6E1] divide-y lg:divide-y-0 divide-x divide-[#E2E6E1] bg-white rounded-md overflow-hidden">
              {KEY_METRICS.map((metric) => (
                <div key={metric.label} className="p-4 sm:p-6">
                  <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#161E1B] tabular-nums">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#161E1B]">{metric.label}</p>
                  <p className="mt-1 text-xs text-[#4C5953]">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY LIVE NEAR WIPRO CORPORATE OFFICE */}
        <section className="py-16 sm:py-24 border-b border-[#E2E6E1]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm text-[#1C4B3B] font-medium">
                Corridor Advantage · Sarjapur–Whitefield Tech Belt
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#161E1B] text-balance">
                Why Live Near Wipro Corporate Office?
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between divide-y divide-[#E2E6E1] border-t border-b border-[#E2E6E1]">
                {WHY_LIVE_NEAR_WIPRO.map((item) => (
                  <div key={item.number} className="py-6 flex items-start gap-5">
                    <span className="font-mono text-sm text-[#1C4B3B] tabular-nums pt-1 shrink-0">
                      {item.number}.
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-[#161E1B]">{item.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-[#4C5953] max-w-[62ch]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5 flex flex-col">
                <div className="relative flex-1 min-h-[280px] lg:min-h-0 rounded-lg overflow-hidden border border-[#E2E6E1] bg-[#E8ECE7]">
                  <SafeImage
                    src={lakefrontParkImg}
                    alt="Car-free pedestrian walkway and children's forest play garden beside a serene lake at MANA SKANDA"
                    caption="Tranquil 13-Acre Scenic Lake Microclimate"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-xs text-[#4C5953]">
                  Safe no-vehicle pathways and a natural microclimate shaped by a 13-acre scenic
                  lake nearby.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UNIT CONFIGURATIONS & PRICING */}
        <section id="configurations" className="py-16 sm:py-24 bg-[#F1F3F0] border-b border-[#E2E6E1]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-sm text-[#1C4B3B] font-medium">
                  Phase 1 Residences · 3 BHK &amp; 3.5 BHK Apartments Near Wipro
                </p>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#161E1B] text-balance">
                  Unit Configurations &amp; Pricing
                </h2>
              </div>
              <p className="text-sm text-[#4C5953]">
                Vastu-compliant layouts across 3B + G + 35 floor towers
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between bg-white border border-[#E2E6E1] rounded-lg p-6 sm:p-8">
                <div>
                  {/* Clean Pricing Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-[#E2E6E1] text-xs font-medium text-[#4C5953]">
                          <th className="py-3 pr-4">Configuration</th>
                          <th className="py-3 px-4">Size (Sq.Ft.)</th>
                          <th className="py-3 px-4">Starting Price</th>
                          <th className="py-3 pl-4 text-right">Floor Plan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E2E6E1]">
                        {UNIT_CONFIGURATIONS.map((unit) => {
                          const configLabel =
                            unit.id === '3bhk'
                              ? '3 BHK (1661 – 1953 Sq.Ft.) · From ₹1.75 Cr'
                              : '3.5 BHK (2067 – 2244 Sq.Ft.) · From ₹2.35 Cr';
                          return (
                            <tr key={unit.id} className="group">
                              <td className="py-5 pr-4 font-serif text-2xl font-semibold text-[#161E1B] whitespace-nowrap">
                                {unit.type}
                              </td>
                              <td className="py-5 px-4 text-sm font-mono tabular-nums text-[#4C5953] whitespace-nowrap">
                                {unit.sizeSqFt}
                              </td>
                              <td className="py-5 px-4 text-sm sm:text-base font-semibold tabular-nums text-[#1C4B3B] whitespace-nowrap">
                                {unit.startingPrice}
                              </td>
                              <td className="py-5 pl-4 text-right whitespace-nowrap">
                                <button
                                  type="button"
                                  onClick={() =>
                                    scrollToEnquiry('Get Price Sheet & Brochure', configLabel)
                                  }
                                  className="min-h-[40px] px-3.5 py-2 text-xs font-medium text-[#161E1B] border border-[#D4DBD3] hover:border-[#1C4B3B] hover:text-[#1C4B3B] rounded-md transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C4B3B]"
                                >
                                  Price Sheet
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Configuration specifics */}
                  <div className="mt-6 pt-6 border-t border-[#E2E6E1] grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {UNIT_CONFIGURATIONS.map((unit) => (
                      <div key={unit.id}>
                        <p className="text-sm font-semibold text-[#161E1B]">
                          {unit.type} Luxury Residences
                        </p>
                        <ul className="mt-2.5 space-y-2 text-sm text-[#4C5953]">
                          {unit.highlights.map((pt) => (
                            <li key={pt} className="flex items-start gap-2">
                              <span className="text-[#1C4B3B] mt-1" aria-hidden="true">
                                ·
                              </span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Single primary CTA + Phone fallback */}
                <div className="mt-8 pt-6 border-t border-[#E2E6E1] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToEnquiry('Get Price Sheet & Brochure')}
                    className="min-h-[48px] px-6 py-3 text-sm font-semibold text-white bg-[#1C4B3B] hover:bg-[#153A2E] rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C4B3B]"
                  >
                    <span>Get Complete Price Sheet</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </button>

                  <a
                    href={CONTACT_PHONE_HREF}
                    className="min-h-[48px] px-5 py-3 text-sm font-medium text-[#161E1B] border border-[#D4DBD3] hover:bg-[#F9FAF8] rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-150"
                  >
                    <Phone className="w-4 h-4 text-[#1C4B3B] shrink-0" aria-hidden="true" />
                    <span className="tabular-nums">Call Now: {CONTACT_PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col">
                <div className="relative flex-1 min-h-[280px] lg:min-h-0 rounded-lg overflow-hidden border border-[#E2E6E1] bg-[#E8ECE7]">
                  <SafeImage
                    src={apartmentInteriorImg}
                    alt="Spacious luxury 3.5 BHK apartment living room opening onto a forest-view balcony at MANA SKANDA East Bangalore"
                    caption="Expansive 3 & 3.5 BHK Living Spaces"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-xs text-[#4C5953]">
                  Representative interior view of spacious forest-facing living rooms designed for
                  abundant daylight and natural cross-ventilation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT HIGHLIGHTS — ASYMMETRIC BENTO GRID */}
        <section id="highlights" className="py-16 sm:py-24 border-b border-[#E2E6E1]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm text-[#1C4B3B] font-medium">
                Masterplan &amp; Lifestyle Architecture
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#161E1B] text-balance">
                Project Highlights
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Marquee 2-column visual clubhouse feature */}
              <article className="md:col-span-2 relative min-h-[300px] sm:min-h-[340px] rounded-lg overflow-hidden border border-[#E2E6E1] bg-[#13211C] flex flex-col justify-end p-6 sm:p-8">
                <SafeImage
                  src={forestClubhouseImg}
                  alt="3.5 lakh sq.ft. forest-integrated timber and stone luxury clubhouse with reflection pool at MANA SKANDA"
                  caption="3.5 Lakh Sq.Ft. of Premium Clubhouses"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101A16]/90 via-[#101A16]/45 to-transparent pointer-events-none" />
                <div className="relative z-10 max-w-xl text-white">
                  <p className="text-xs font-mono text-[#CFE0D6] tabular-nums">
                    04 · 100+ Experiences for Every Age Group
                  </p>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-white">
                    3.5 Lakh Sq.Ft. of Premium Clubhouses
                  </h3>
                  <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-[#E3EAE5]">
                    More than 100 unique experiences for every age group, nestled directly within
                    the township&apos;s shaded forest canopy.
                  </p>
                </div>
              </article>

              {/* Remaining 5 architectural highlight blocks */}
              {PROJECT_HIGHLIGHTS.filter((h) => h.number !== '04').map((highlight) => (
                <article
                  key={highlight.number}
                  className="bg-white border border-[#E2E6E1] rounded-lg p-6 sm:p-7 flex flex-col justify-between gap-6"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-3 text-xs text-[#4C5953]">
                      <span className="font-mono tabular-nums text-[#1C4B3B]">
                        {highlight.number}
                      </span>
                      <span className="tabular-nums">{highlight.metric}</span>
                    </div>
                    <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug text-[#161E1B]">
                      {highlight.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-[#4C5953]">
                      {highlight.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT OVERVIEW & RERA DETAILS */}
        <section id="overview" className="py-16 sm:py-24 bg-[#F1F3F0] border-b border-[#E2E6E1]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm text-[#1C4B3B] font-medium">
                Specifications &amp; Regulatory Transparency
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#161E1B] text-balance">
                Project Overview &amp; RERA Details
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 bg-white border border-[#E2E6E1] rounded-lg p-6 sm:p-8">
                <dl className="divide-y divide-[#E2E6E1]">
                  {PROJECT_OVERVIEW.map((row) => (
                    <div
                      key={row.label}
                      className="py-4 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4"
                    >
                      <dt className="sm:col-span-4 text-sm font-medium text-[#4C5953]">
                        {row.label}
                      </dt>
                      <dd className="sm:col-span-8 text-[15px] font-medium text-[#161E1B]">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:col-span-5 flex">
                <ReraCopyCard />
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION ADVANTAGES */}
        <section id="location" className="py-16 sm:py-24 border-b border-[#E2E6E1]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm text-[#1C4B3B] font-medium">
                Varthur–Sarjapur Road · Near Whitefield &amp; ORR
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#161E1B] text-balance">
                Location Advantages
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#4C5953]">
                Explore leading tech parks, international schools within 0–5 km, multi-specialty
                hospitals, and major retail destinations surrounding MANA SKANDA.
              </p>
            </div>

            <div className="mt-8">
              <LocationExplorer />
            </div>
          </div>
        </section>

        {/* WHO ARE THESE APARTMENTS FOR + WHY CHOOSE MANA SKANDA */}
        <section className="py-16 sm:py-24 bg-[#F1F3F0] border-b border-[#E2E6E1]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left: Who Are These Apartments For? */}
              <div className="lg:col-span-7">
                <p className="text-sm text-[#1C4B3B] font-medium">Designed for East Bangalore</p>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#161E1B] text-balance">
                  Who Are These Apartments For?
                </h2>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {BUYER_PROFILES.map((profile) => (
                    <div
                      key={profile.number}
                      className="bg-white border border-[#E2E6E1] rounded-lg p-6"
                    >
                      <span className="font-mono text-xs text-[#1C4B3B] tabular-nums">
                        {profile.number}
                      </span>
                      <h3 className="mt-3 text-base font-semibold text-[#161E1B]">
                        {profile.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#4C5953]">
                        {profile.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Why Choose MANA SKANDA? */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-[#E2E6E1] rounded-lg p-6 sm:p-8">
                <div>
                  <p className="text-sm text-[#1C4B3B] font-medium">The Right Life Advantage</p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#161E1B]">
                    Why Choose MANA SKANDA?
                  </h2>

                  <ul className="mt-6 space-y-4">
                    {WHY_CHOOSE_REASONS.map((reason) => (
                      <li key={reason} className="flex items-start gap-3">
                        <Check
                          className="w-4 h-4 text-[#1C4B3B] mt-1 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-[15px] leading-relaxed text-[#161E1B]">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E2E6E1]">
                  <button
                    type="button"
                    onClick={() => scrollToEnquiry('Book a Site Visit')}
                    className="w-full min-h-[48px] px-5 py-3 text-sm font-semibold text-white bg-[#1C4B3B] hover:bg-[#153A2E] rounded-md transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C4B3B]"
                  >
                    Book a Guided Site Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section id="faqs" className="py-16 sm:py-24 border-b border-[#E2E6E1]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="text-sm text-[#1C4B3B] font-medium">Answers Before You Visit</p>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#161E1B] text-balance">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[#4C5953]">
                  Have specific questions about unit availability, floor rises, or payment plans
                  for our apartments near Wipro Corporate Office?
                </p>
                <a
                  href={CONTACT_PHONE_HREF}
                  className="mt-6 min-h-[44px] px-5 py-2.5 text-sm font-medium text-[#161E1B] border border-[#D4DBD3] hover:bg-[#F1F3F0] rounded-md inline-flex items-center gap-2 whitespace-nowrap transition-colors duration-150"
                >
                  <Phone className="w-4 h-4 text-[#1C4B3B]" aria-hidden="true" />
                  <span className="tabular-nums">Speak With Us: {CONTACT_PHONE_DISPLAY}</span>
                </a>
              </div>

              <div className="lg:col-span-8">
                <FaqAccordion />
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CONVERSION / ENQUIRY SECTION */}
        <section id="enquire" className="py-16 sm:py-24 bg-[#13211C] text-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <p className="text-sm text-[#B7C4BC] tracking-wide">
                  MANA SKANDA – The Right Life · Varthur–Sarjapur Road
                </p>
                <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold leading-[1.08] tracking-tight text-white text-balance">
                  Own a Luxury Home Near Wipro Corporate Office
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#CED7D1]">
                  Shorter commutes, a forest-themed township and top schools next door. Fill the
                  form or call now to get the price sheet, brochure and site visit details.
                </p>

                <dl className="mt-8 pt-6 border-t border-white/15 space-y-3 text-sm">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[#A8B8AF]">Configurations</dt>
                    <dd className="font-medium text-white tabular-nums">3 BHK &amp; 3.5 BHK</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[#A8B8AF]">Starting Price</dt>
                    <dd className="font-medium text-white tabular-nums">₹1.75 Crore onwards</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[#A8B8AF]">Sales Advisory</dt>
                    <dd>
                      <a
                        href={CONTACT_PHONE_HREF}
                        className="font-mono font-medium text-white underline underline-offset-4 hover:text-[#CFE0D6] tabular-nums"
                      >
                        {CONTACT_PHONE_DISPLAY}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="lg:col-span-7 bg-white/[0.04] border border-white/15 rounded-lg p-6 sm:p-8">
                <EnquiryForm
                  configuration={selectedConfig}
                  onConfigurationChange={setSelectedConfig}
                  intent={selectedIntent}
                  onIntentChange={setSelectedIntent}
                  variant="dark"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* QUIET EDITORIAL FOOTER */}
      <footer className="bg-[#0E1814] text-[#A8B8AF] border-t border-white/10 pt-12 pb-24 sm:pb-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
            <div className="md:col-span-5">
              <Link href={CANONICAL_SLUG} className="font-serif text-2xl font-semibold text-white">
                MANA SKANDA
              </Link>
              <p className="mt-2 text-sm text-[#CED7D1]">
                The Right Life — Luxury apartments near Wipro Corporate Office on Varthur–Sarjapur
                Road, East Bangalore.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#8E9F96]">
                3 BHK near Wipro Sarjapur, 3.5 BHK luxury apartments East Bangalore, and integrated
                township apartments near Whitefield &amp; Sarjapur tech parks.
              </p>
            </div>

            <div className="md:col-span-3">
              <p className="text-xs font-medium text-white">Quick Links</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#configurations" className="hover:text-white transition-colors">
                    Configurations &amp; Pricing
                  </a>
                </li>
                <li>
                  <a href="#highlights" className="hover:text-white transition-colors">
                    Project Highlights
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-white transition-colors">
                    Location Advantages
                  </a>
                </li>
                <li>
                  <a href="#overview" className="hover:text-white transition-colors">
                    Project Overview &amp; RERA
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <p className="text-xs font-medium text-white">RERA &amp; Contact</p>
              <p className="mt-3 text-xs font-mono leading-relaxed text-[#CED7D1] tabular-nums">
                {RERA_NUMBERS.map((r) => r.code).join(' · ')}
              </p>
              <p className="mt-3 text-sm text-[#CED7D1]">
                Direct Sales Desk:{' '}
                <a
                  href={CONTACT_PHONE_HREF}
                  className="font-mono text-white underline underline-offset-4 tabular-nums"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#8E9F96]">
            <p>© {new Date().getFullYear()} MANA SKANDA – The Right Life. All rights reserved.</p>
            <p>
              Completion Timeline: 2028 onwards · Varthur–Sarjapur Road, East Bangalore
            </p>
          </div>
        </div>
      </footer>

      {/* COMPACT MOBILE BOTTOM ACTION BAR (56px height, <= 15% mobile viewport cap) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 h-14 bg-white border-t border-[#E2E6E1] px-3 flex items-center gap-2.5 shadow-[0_-4px_16px_rgba(16,26,22,0.08)]">
        <a
          href={CONTACT_PHONE_HREF}
          className="flex-1 h-10 px-3 text-xs font-semibold text-[#161E1B] bg-[#F1F3F0] border border-[#D4DBD3] rounded-md inline-flex items-center justify-center gap-1.5 whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-[#1C4B3B] shrink-0" aria-hidden="true" />
          <span className="tabular-nums">Call Now</span>
        </a>
        <button
          type="button"
          onClick={() => scrollToEnquiry('Get Price Sheet & Brochure')}
          className="flex-[1.35] h-10 px-3 text-xs font-semibold text-white bg-[#1C4B3B] rounded-md inline-flex items-center justify-center whitespace-nowrap cursor-pointer"
        >
          Get Price &amp; Brochure
        </button>
      </div>
    </div>
  );
}
