'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Modal from '@/components/ui/Modal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { generateAuditWhatsAppLink } from '@/lib/whatsapp';

/**
 * LeadCaptureBanner Component
 * Full-width Navy gradient banner with pulsing Gold CTA
 * Opens modal form for Free Digital Audit
 */
export default function LeadCaptureBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName') as string,
      businessName: formData.get('businessName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      socialUrl: formData.get('socialUrl') as string,
      painPoint: formData.get('painPoint') as string,
    };

    // Generate WhatsApp link with form data
    const whatsappLink = generateAuditWhatsAppLink(data);
    
    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank');
    
    // Close modal after short delay
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  return (
    <>
      <section
        ref={ref}
        className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-[#0D1B4B] via-navy-primary to-[#1B2B6B]"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            {/* Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Is your current digital marketing draining your cash flow without 
              delivering results?
            </h2>

            {/* Subtext */}
            <p className="text-md md:text-lg text-gray-300 leading-relaxed">
              Stop guessing. Let our growth specialists run an exhaustive, data-backed 
              audit of your social presence and current ad funnels—completely free.
            </p>

            {/* CTA Button with Pulse Animation */}
            <div className="pt-4">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(201, 168, 68, 0)',
                    '0 0 0 20px rgba(201, 168, 68, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                className="inline-block rounded-full"
              >
                <PrimaryButton
                  variant="gold"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  icon={<Sparkles className="h-5 w-5" />}
                  className="shadow-gold"
                >
                  Claim Your Free Social Media Audit Now
                </PrimaryButton>
              </motion.div>
            </div>

            {/* Trust line */}
            <p className="text-sm text-gray-400 pt-2">
              ✓ No credit card required • ✓ Results delivered in 48 hours • ✓ 100% confidential
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead Capture Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Your Free Digital Audit"
        maxWidth="md"
      >
        <div className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
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
                placeholder="John Doe"
              />
            </div>

            {/* Business Name */}
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all"
                placeholder="Your Business LLC"
              />
            </div>

            {/* Email */}
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
                placeholder="john@business.com"
              />
            </div>

            {/* Phone */}
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

            {/* Social Media URL */}
            <div>
              <label htmlFor="socialUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Instagram/Facebook Page URL
              </label>
              <input
                type="url"
                id="socialUrl"
                name="socialUrl"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all"
                placeholder="https://instagram.com/yourbusiness"
              />
            </div>

            {/* Primary Pain Point */}
            <div>
              <label htmlFor="painPoint" className="block text-sm font-medium text-gray-700 mb-2">
                Primary Challenge *
              </label>
              <select
                id="painPoint"
                name="painPoint"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all"
              >
                <option value="">Select your biggest challenge</option>
                <option value="low-engagement">Low engagement on social media</option>
                <option value="no-leads">Not generating enough leads</option>
                <option value="high-ad-costs">High ad costs, poor ROI</option>
                <option value="no-strategy">No clear marketing strategy</option>
                <option value="time-constraints">No time to manage content</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Honeypot field (hidden) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            {/* Submit Button */}
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

            {/* Privacy Note */}
            <p className="text-xs text-gray-600 text-center pt-1">
              By submitting this form, you agree to our{' '}
              <a href="/privacy-policy" className="text-navy-primary hover:underline">
                Privacy Policy
              </a>.
            </p>
          </form>
        </div>
      </Modal>
    </>
  );
}
