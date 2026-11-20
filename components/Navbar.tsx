'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { CANONICAL_SLUG } from '@/lib/project-data';

interface NavbarProps {
  onEnquireClick: (intent?: string) => void;
}

const NAV_LINKS = [
  { label: 'Configurations', href: '#configurations' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Location', href: '#location' },
  { label: 'Overview', href: '#overview' },
  { label: 'FAQs', href: '#faqs' },
];

export default function Navbar({ onEnquireClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative md:sticky md:top-0 z-40 bg-[#F9FAF8]/95 backdrop-blur-md border-b border-[#E2E6E1]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line brand wordmark */}
        <Link
          href={CANONICAL_SLUG}
          className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#161E1B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C4B3B]"
        >
          MANA SKANDA
        </Link>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4C5953]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 whitespace-nowrap shrink-0 hover:text-[#161E1B] underline-offset-4 hover:underline decoration-[#1C4B3B]/40 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C4B3B]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action (desktop) + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onEnquireClick('Get Price Sheet & Brochure')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#1C4B3B] hover:bg-[#153A2E] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C4B3B]"
          >
            Enquire Now
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-[#E2E6E1] text-[#161E1B] hover:bg-[#F1F3F0] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C4B3B]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-[#E2E6E1] bg-[#F9FAF8] px-4 py-4"
        >
          <div className="flex flex-col divide-y divide-[#E2E6E1]/70">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMobileLinkClick}
                className="py-3.5 text-base font-medium text-[#161E1B] hover:text-[#1C4B3B] transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEnquireClick('Get Price Sheet & Brochure');
                }}
                className="w-full min-h-[44px] px-5 py-3 text-sm font-medium text-white bg-[#1C4B3B] hover:bg-[#153A2E] rounded-md transition-colors duration-150 cursor-pointer"
              >
                Get Price & Brochure
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
