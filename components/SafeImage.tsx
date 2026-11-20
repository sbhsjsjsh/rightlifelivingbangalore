'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Building2 } from 'lucide-react';

interface SafeImageProps {
  src: StaticImageData | string;
  alt: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export default function SafeImage({
  src,
  alt,
  caption,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = 'object-cover',
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#E8ECE7] via-[#F1F3F0] to-[#DFE5DF] text-[#4C5953] p-6 text-center"
      >
        <Building2 className="w-8 h-8 mb-3 text-[#1C4B3B]/70" strokeWidth={1.5} />
        <p className="font-serif text-lg text-[#161E1B]">{caption || 'MANA SKANDA'}</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
