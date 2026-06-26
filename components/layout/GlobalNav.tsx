'use client';

import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Modal from '@/components/ui/Modal';
import { mobileMenuOverlay, mobileMenuPanel } from '@/lib/animations';
import { generateQuickWhatsAppLink, generateContactWhatsAppLink } from '@/lib/whatsapp';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-services', label: 'About Us / Services' },
  { href: '/visibilityx', label: 'VisibilityX' },
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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    const whatsappLink = generateContactWhatsAppLink(data);
    window.open(whatsappLink, '_blank');
    
    setTimeout(() => {
      setIsContactModalOpen(false);
    }, 500);
  };

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

  // Determine if the current page header should be dark (e.g. VisibilityX hero is dark)
  const isDarkHeader = pathname === '/visibilityx' && !isScrolled;

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-moderate ease-default',
          'h-20 md:h-20',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-container mx-auto px-6 md:px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex flex-col justify-center gap-1">
              {/* Logo image */}
              <div className="relative h-10 md:h-12 w-[180px] md:w-[220px]">
                <Image
                  src="/assets/logo/logo_v2.png"
                  alt="BWP IMPACT"
                  fill
                  className={cn("object-contain object-left transition-all duration-300", isDarkHeader && "brightness-0 invert")}
                  priority
                  sizes="(max-width: 768px) 180px, 220px"
                />
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
                        ? (isDarkHeader ? 'text-white' : 'text-navy-primary')
                        : (isDarkHeader ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-navy-primary')
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
              <button
                onClick={() => setIsContactModalOpen(true)}
                className={cn(
                  'text-[15px] font-medium transition-colors duration-fast relative pb-1',
                  isDarkHeader ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-navy-primary'
                )}
              >
                Contact Us
              </button>
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
              className={cn("md:hidden p-2 transition-colors", isDarkHeader ? "text-white" : "text-navy-primary")}
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
              variants={{
                hidden: { y: '-100%' },
                visible: {
                  y: 0,
                  transition: { type: 'spring', damping: 25, stiffness: 200 }
                },
                exit: {
                  y: '-100%',
                  transition: { duration: 0.3, ease: 'easeInOut' }
                }
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 right-0 max-h-[85vh] bg-[#0D1B4B] z-[70] md:hidden flex flex-col rounded-b-[2rem] shadow-2xl overflow-y-auto border-b border-white/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
                {/* Mobile overlay logo */}
                <div className="flex flex-col gap-1">
                  <div className="relative h-12 w-[220px]">
                    <Image src="/assets/logo/logo_v2.png" alt="BWP IMPACT" fill className="object-contain object-left brightness-0 invert" sizes="220px" />
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/80 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="h-7 w-7" strokeWidth={1.5} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col px-8 py-6 gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'text-[20px] font-medium tracking-tight transition-all duration-300',
                        isActive
                          ? 'text-white'
                          : 'text-white/60 hover:text-white'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="text-left text-[20px] font-medium tracking-tight text-white/60 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>

              {/* CTA Button & Footer */}
              <div className="px-8 pb-8 pt-2">
                <a
                  href={generateQuickWhatsAppLink('audit')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <PrimaryButton variant="gold" size="lg" className="w-full text-[15px] shadow-gold">
                    Claim Your Free Digital Audit
                  </PrimaryButton>
                </a>
                <p className="text-center text-[10px] text-white/40 mt-6 uppercase tracking-[0.2em]">
                  Engineering Growth
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contact Us Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Get In Touch"
        maxWidth="md"
      >
        <div className="p-6">
          <form className="space-y-4" onSubmit={handleContactSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all"
                placeholder="Rahul Sharma"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all"
                placeholder="rahul@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                How can we help? *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            {/* Honeypot field (hidden) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />
            <div className="pt-4">
              <PrimaryButton
                type="submit"
                variant="gold"
                className="w-full"
              >
                Send via WhatsApp →
              </PrimaryButton>
            </div>
            <p className="text-xs text-gray-500 text-center">
              Tapping the button will open WhatsApp with your details pre-filled.
            </p>
          </form>
        </div>
      </Modal>
    </>
  );
}
