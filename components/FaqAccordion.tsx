'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/lib/project-data';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <div className="divide-y divide-[#E2E6E1] border-t border-b border-[#E2E6E1]">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              className="w-full min-h-[56px] py-5 text-left flex items-center justify-between gap-6 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C4B3B]"
            >
              <span className="text-base sm:text-lg font-medium text-[#161E1B] group-hover:text-[#1C4B3B] transition-colors duration-150">
                {faq.question}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={`w-5 h-5 text-[#4C5953] shrink-0 transition-transform duration-150 ${
                  isOpen ? 'rotate-180 text-[#1C4B3B]' : ''
                }`}
              />
            </button>
            <div
              id={`faq-answer-${idx}`}
              hidden={!isOpen}
              className="pb-6 pr-8 text-[15px] leading-relaxed text-[#4C5953] max-w-[68ch]"
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
