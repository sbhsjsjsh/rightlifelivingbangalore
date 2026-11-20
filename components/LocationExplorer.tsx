'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOCATION_CATEGORIES, type LocationCategory } from '@/lib/project-data';

export default function LocationExplorer() {
  const [activeId, setActiveId] = useState<LocationCategory['id']>('tech-parks');

  const activeCategory =
    LOCATION_CATEGORIES.find((cat) => cat.id === activeId) ?? LOCATION_CATEGORIES[0];

  return (
    <div>
      {/* Interactive category filter controls */}
      <div
        role="tablist"
        aria-label="Nearby Location Categories"
        className="flex items-center gap-1.5 p-1 bg-[#F1F3F0] border border-[#E2E6E1] rounded-lg overflow-x-auto"
      >
        {LOCATION_CATEGORIES.map((category) => {
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${category.id}`}
              id={`tab-${category.id}`}
              onClick={() => setActiveId(category.id)}
              className={`min-h-[40px] px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C4B3B] ${
                isActive
                  ? 'bg-[#1C4B3B] text-white'
                  : 'text-[#4C5953] hover:text-[#161E1B] hover:bg-white/70'
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Active tab panel */}
      <div
        id={`panel-${activeCategory.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeCategory.id}`}
        className="mt-6 bg-white border border-[#E2E6E1] rounded-lg p-6 sm:p-8"
      >
        <div className="pb-5 mb-5 border-b border-[#E2E6E1] flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#161E1B]">
            {activeCategory.label}
          </h3>
          <p className="text-sm text-[#4C5953]">{activeCategory.subtitle}</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={activeCategory.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10 divide-y divide-[#E2E6E1]/70 md:divide-y-0"
          >
            {activeCategory.items.map((item) => (
              <li
                key={item.name}
                className="py-3.5 md:border-b md:border-[#E2E6E1]/70 flex items-baseline justify-between gap-4"
              >
                <span className="text-[15px] font-medium text-[#161E1B]">{item.name}</span>
                {item.proximity && (
                  <span className="text-sm font-mono tabular-nums text-[#1C4B3B] whitespace-nowrap shrink-0">
                    {item.proximity}
                  </span>
                )}
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
