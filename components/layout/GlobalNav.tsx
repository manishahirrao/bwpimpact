'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { mobileMenuOverlay, mobileMenuPanel } from '@/lib/animations';
import { generateQuickWhatsAppLink } from '@/lib/whatsapp';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-services', label: 'About Us + Services' },
  { href: '/impactx', label: 'ImpactX' },
];

/**
 * GlobalNav Component
 * Scroll-aware navigation with backdrop blur effect
 * Implements mobile hamburger menu with full-screen overlay
 */
export default function GlobalNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-moderate ease-default',
          'h-16 md:h-16',
          isScrolled
            ? 'bg-white/88 backdrop-blur-safari border-b border-black/[0.06]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-container mx-auto px-6 md:px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex flex-col">
              {/* Logo text — spec: 140px wide logo, sub-tagline 11px italic gray */}
              <div className="text-[22px] font-bold text-navy-primary tracking-tight">
                BWP IMPACT
              </div>
              <div className="hidden md:block text-[11px] italic text-gray-400 font-light leading-tight">
                The Next Evolution of Branding with Priyam
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-[15px] font-medium transition-colors duration-fast',
                      'relative pb-1',
                      isActive
                        ? 'text-navy-primary'
                        : 'text-gray-700 hover:text-navy-primary'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-primary"
                        layoutId="activeLink"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <a
                href={generateQuickWhatsAppLink('audit')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrimaryButton
                  variant="gold"
                  size="sm"
                  className="h-9 px-4 text-[13px]"
                >
                  Claim Your Free Digital Audit
                </PrimaryButton>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-navy-primary"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={mobileMenuOverlay}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/40 z-[60] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              variants={mobileMenuPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[70] md:hidden overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                {/* Mobile overlay logo — spec: full logo with sub-tagline */}
                <div>
                  <div className="text-[22px] font-bold text-navy-primary tracking-tight">BWP IMPACT</div>
                  <div className="text-[11px] italic text-gray-400 font-light">The Next Evolution of Branding with Priyam</div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-navy-primary"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Links — spec: 24px weight-600 in overlay */}
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'text-[24px] font-semibold transition-colors',
                        isActive
                          ? 'text-navy-primary'
                          : 'text-gray-700 hover:text-navy-primary'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="p-6">
                <a
                  href={generateQuickWhatsAppLink('audit')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <PrimaryButton variant="gold" className="w-full">
                    Claim Your Free Digital Audit
                  </PrimaryButton>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
