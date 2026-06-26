'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const clientLogos = [
  { src: '/assets/logo/icici.jpg', alt: 'ICICI' },
  { src: '/assets/logo/meril.jpg', alt: 'Meril' },
  { src: '/assets/logo/LB.png', alt: 'LB' },
  { src: '/assets/logo/E-magine.jpg', alt: 'E-magine' },
  { src: '/assets/logo/sugoi.jpg', alt: 'Sugoi' },
  { src: '/assets/logo/wealthness.jpg', alt: 'Wealthness' },
  { src: '/assets/logo/dynamic-travels.jpg', alt: 'Dynamic Travels' },
  { src: '/assets/logo/farm-house.jpg', alt: 'Farm House' },
  { src: '/assets/logo/fashion.jpg', alt: 'Fashion Brand' },
  { src: '/assets/logo/316063.jpg', alt: 'Client' },
];

// Duplicate for seamless infinite loop
const allLogos = [...clientLogos, ...clientLogos, ...clientLogos];

export default function ClientLogos() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section className="bg-white py-12 overflow-hidden border-t border-gray-100">
      <div className="max-w-container mx-auto px-6 mb-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest">
          Trusted by Ambitious Brands
        </p>
      </div>

      {prefersReduced ? (
        <div className="flex flex-wrap justify-center gap-8 px-6">
          {clientLogos.map((logo, i) => (
            <div key={i} className="relative h-12 w-32 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="flex overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex gap-16 whitespace-nowrap animate-marquee items-center"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {allLogos.map((logo, index) => (
              <div key={index} className="relative h-12 w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="128px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
