'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, Star, Sparkles, Users } from 'lucide-react';

const badges = [
  { icon: Star,     text: '8+ Years of Cross-Industry Strategy Mastery' },
  { icon: Award,    text: 'Awarded Maharashtra Udyog Gaurav' },
  { icon: Sparkles, text: 'Recognized as an Inspiring Woman Entrepreneur' },
  { icon: Users,    text: 'BNI Proud Member' },
];

// Duplicate 3× for seamless infinite loop
const allBadges = [...badges, ...badges, ...badges];

export default function TrustRibbon() {
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
    <section
      className="bg-navy-primary overflow-hidden select-none"
      aria-label="Trust credentials"
      aria-live="off"
    >
      {prefersReduced ? (
        /* Static grid fallback */
        <div className="flex flex-wrap justify-center gap-4 py-4 px-6">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <b.icon className="h-4 w-4 text-gold-primary flex-shrink-0" />
              <span className="text-white text-xs font-medium">{b.text}</span>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="flex py-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex gap-8 whitespace-nowrap animate-marquee"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {allBadges.map((badge, index) => (
              <div key={index} className="inline-flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <badge.icon className="h-4 w-4 text-gold-primary flex-shrink-0" />
                  <span className="text-white text-xs font-medium">{badge.text}</span>
                </div>
                <span className="text-gold-primary text-sm" aria-hidden="true">◆</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
