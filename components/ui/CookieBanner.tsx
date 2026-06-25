'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

const COOKIE_KEY = 'bwp_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage blocked in some contexts
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ accepted: true, date: Date.now() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[80] p-4 md:p-6">
      <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="h-6 w-6 text-gold-primary flex-shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-sm text-gray-700 flex-1">
          We use cookies to improve your experience and analyze site usage. By continuing, you agree to our{' '}
          <Link href="/privacy-policy" className="text-navy-primary underline">Privacy Policy</Link>.
        </p>
        <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={() => setVisible(false)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors px-3 py-2"
          >
            Manage
          </button>
          <PrimaryButton variant="gold" size="sm" onClick={accept}>
            Accept All
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
