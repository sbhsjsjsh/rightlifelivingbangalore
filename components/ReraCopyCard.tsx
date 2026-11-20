'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { RERA_NUMBERS } from '@/lib/project-data';

export default function ReraCopyCard() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      window.setTimeout(() => {
        setCopiedCode((current) => (current === code ? null : current));
      }, 2200);
    } catch {
      setCopiedCode(null);
    }
  };

  return (
    <div className="bg-[#13211C] text-[#F5F7F4] rounded-lg p-6 sm:p-8 flex flex-col justify-between gap-6">
      <div>
        <p className="text-sm text-[#B7C4BC] tracking-wide">
          Karnataka RERA Registered · Phase 1 Approved
        </p>
        <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-white">
          RERA Registration Details
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#CED7D1]">
          Verified registration under the Real Estate Regulatory Authority, Karnataka. Click any
          registration number below to copy it for independent verification.
        </p>
      </div>

      <div className="space-y-3">
        {RERA_NUMBERS.map((item) => {
          const isCopied = copiedCode === item.code;
          return (
            <div
              key={item.code}
              className="border border-white/15 rounded-md px-4 py-3.5 flex items-center justify-between gap-3 bg-white/[0.03]"
            >
              <div className="min-w-0">
                <p className="text-xs text-[#A8B8AF]">{item.label}</p>
                <p className="mt-0.5 font-mono text-xs sm:text-sm text-white tabular-nums break-all">
                  {item.code}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(item.code)}
                aria-label={`Copy ${item.code}`}
                className="min-h-[40px] px-3 py-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 rounded-md inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-white/15 flex items-baseline justify-between gap-4 text-sm">
        <span className="text-[#B7C4BC]">Completion Timeline</span>
        <span className="font-mono font-medium text-white tabular-nums">2028 onwards</span>
      </div>
    </div>
  );
}
