'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Phone } from 'lucide-react';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from '@/lib/project-data';

interface EnquiryFormProps {
  configuration: string;
  onConfigurationChange: (value: string) => void;
  intent: string;
  onIntentChange: (value: string) => void;
  variant?: 'dark' | 'light';
}

interface SubmissionResult {
  referenceId: string;
  fullName: string;
  configuration: string;
  intent: string;
}

const INTENT_OPTIONS = [
  'Get Price Sheet & Brochure',
  'Book a Site Visit',
  'Request Callback',
] as const;

const CONFIG_OPTIONS = [
  '3 BHK (1661 – 1953 Sq.Ft.) · From ₹1.75 Cr',
  '3.5 BHK (2067 – 2244 Sq.Ft.) · From ₹2.35 Cr',
  'Both 3 & 3.5 BHK Options',
] as const;

export default function EnquiryForm({
  configuration,
  onConfigurationChange,
  intent,
  onIntentChange,
  variant = 'dark',
}: EnquiryFormProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<SubmissionResult | null>(null);

  const isDark = variant === 'dark';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmedName = fullName.trim();
    const digitsOnly = phone.replace(/\D/g, '');
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (trimmedName.length < 2) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: trimmedName,
          phone: phone.trim(),
          email: trimmedEmail,
          configuration,
          intent,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.error || 'Please check your details and try again.');
        return;
      }

      setSubmitted({
        referenceId: data.referenceId,
        fullName: trimmedName,
        configuration,
        intent,
      });
    } catch {
      setErrorMessage(
        `Network error submitting your enquiry. Please call ${CONTACT_PHONE_DISPLAY} directly.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`rounded-lg p-6 sm:p-8 border ${
          isDark
            ? 'bg-white/[0.05] border-white/15 text-white'
            : 'bg-[#F1F3F0] border-[#E2E6E1] text-[#161E1B]'
        }`}
      >
        <div className="flex items-start gap-3">
          <CheckCircle2
            className={`w-6 h-6 shrink-0 mt-0.5 ${isDark ? 'text-[#9ED3BD]' : 'text-[#1C4B3B]'}`}
            aria-hidden="true"
          />
          <div>
            <h3 className="font-serif text-2xl font-semibold">
              Enquiry Received, {submitted.fullName}
            </h3>
            <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-[#CED7D1]' : 'text-[#4C5953]'}`}>
              Our MANA SKANDA advisory team will reach out shortly with your requested{' '}
              <span className="font-medium">{submitted.intent.toLowerCase()}</span> for{' '}
              <span className="font-medium">{submitted.configuration}</span>.
            </p>
            <p className={`mt-4 text-xs font-mono tabular-nums ${isDark ? 'text-[#A8B8AF]' : 'text-[#4C5953]'}`}>
              Reference ID: {submitted.referenceId}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_PHONE_HREF}
                className={`min-h-[44px] px-5 py-2.5 text-sm font-medium rounded-md inline-flex items-center gap-2 whitespace-nowrap transition-colors duration-150 ${
                  isDark
                    ? 'bg-white text-[#13211C] hover:bg-[#E8ECE7]'
                    : 'bg-[#1C4B3B] text-white hover:bg-[#153A2E]'
                }`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call {CONTACT_PHONE_DISPLAY}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(null);
                  setFullName('');
                  setPhone('');
                  setEmail('');
                }}
                className={`min-h-[44px] px-4 py-2.5 text-sm font-medium rounded-md cursor-pointer transition-colors duration-150 ${
                  isDark
                    ? 'text-[#CED7D1] hover:text-white underline underline-offset-4'
                    : 'text-[#4C5953] hover:text-[#161E1B] underline underline-offset-4'
                }`}
              >
                Submit another enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const labelClass = isDark
    ? 'block text-xs font-medium text-[#CED7D1] mb-1.5'
    : 'block text-xs font-medium text-[#4C5953] mb-1.5';

  const inputClass = isDark
    ? 'w-full min-h-[44px] px-3.5 py-2.5 text-sm text-white placeholder:text-[#8E9F96] bg-white/[0.06] border border-white/20 rounded-md focus:outline-none focus:border-white transition-colors duration-150'
    : 'w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#161E1B] placeholder:text-[#7D8A83] bg-white border border-[#D4DBD3] rounded-md focus:outline-none focus:border-[#1C4B3B] transition-colors duration-150';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Request intent selector */}
      <div>
        <span className={labelClass}>What would you like to receive?</span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {INTENT_OPTIONS.map((option) => {
            const active = intent === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => onIntentChange(option)}
                className={`min-h-[42px] px-3 py-2 text-xs font-medium rounded-md border text-center transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  isDark
                    ? active
                      ? 'bg-white text-[#13211C] border-white focus-visible:outline-white'
                      : 'bg-transparent text-[#CED7D1] border-white/20 hover:border-white/50 focus-visible:outline-white'
                    : active
                    ? 'bg-[#1C4B3B] text-white border-[#1C4B3B] focus-visible:outline-[#1C4B3B]'
                    : 'bg-white text-[#4C5953] border-[#D4DBD3] hover:border-[#1C4B3B] focus-visible:outline-[#1C4B3B]'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="enquiry-full-name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="enquiry-full-name"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="enquiry-phone" className={labelClass}>
            Mobile Number *
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 98XXX XXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`${inputClass} tabular-nums`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="enquiry-email" className={labelClass}>
            Email Address *
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="enquiry-config" className={labelClass}>
            Preferred Configuration
          </label>
          <select
            id="enquiry-config"
            name="configuration"
            value={configuration}
            onChange={(e) => onConfigurationChange(e.target.value)}
            className={`${inputClass} cursor-pointer ${
              isDark ? '[&>option]:text-[#161E1B] [&>option]:bg-white' : ''
            }`}
          >
            {CONFIG_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {errorMessage && (
        <p
          role="alert"
          className={`text-sm px-3.5 py-2.5 rounded-md border ${
            isDark
              ? 'bg-red-950/60 border-red-400/40 text-red-200'
              : 'bg-red-50 border-red-200 text-red-800'
          }`}
        >
          {errorMessage}
        </p>
      )}

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`min-h-[48px] px-7 py-3 text-sm font-semibold rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 ${
            isDark
              ? 'bg-white text-[#13211C] hover:bg-[#E8ECE7] focus-visible:outline-white'
              : 'bg-[#1C4B3B] text-white hover:bg-[#153A2E] focus-visible:outline-[#1C4B3B]'
          }`}
        >
          {isSubmitting ? 'Submitting Enquiry...' : intent}
        </button>

        <a
          href={CONTACT_PHONE_HREF}
          className={`min-h-[48px] px-5 py-3 text-sm font-medium rounded-md border inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-150 ${
            isDark
              ? 'border-white/25 text-white hover:bg-white/10'
              : 'border-[#D4DBD3] text-[#161E1B] hover:bg-[#F1F3F0]'
          }`}
        >
          <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span className="tabular-nums">Call Now: {CONTACT_PHONE_DISPLAY}</span>
        </a>
      </div>

      <p className={`text-xs leading-relaxed ${isDark ? 'text-[#A8B8AF]' : 'text-[#5E6B64]'}`}>
        By submitting this form, you authorise our MANA SKANDA sales representatives to share the
        official price sheet, floor plans, brochure, and site visit schedule.
      </p>
    </form>
  );
}
