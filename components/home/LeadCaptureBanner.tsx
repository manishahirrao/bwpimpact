'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { generateQuickWhatsAppLink } from '@/lib/whatsapp';

export default function LeadCaptureBanner() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-[#0D1B4B] via-navy-primary to-[#1B2B6B]"
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
          <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-white tracking-[-0.02em] leading-[1.2]">
            Is your current digital marketing draining your cash flow without 
            delivering results?
          </h2>

          {/* Subtext */}
          <p className="text-[17px] text-gray-300 leading-relaxed">
            Stop guessing. Let our growth specialists run an exhaustive, data-backed 
            audit of your social presence and current ad funnels—completely free.
          </p>

          {/* CTA Button with Pulse Animation */}
          <div className="pt-4">
            <a
              href={generateQuickWhatsAppLink('audit')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
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
                  icon={<Sparkles className="h-5 w-5" />}
                  className="shadow-gold"
                >
                  Claim Your Free Social Media Audit Now
                </PrimaryButton>
              </motion.div>
            </a>
          </div>

          {/* Trust line */}
          <p className="text-sm text-gray-400 pt-2">
            ✓ No credit card required • ✓ Results delivered in 48 hours • ✓ 100% confidential
          </p>
        </motion.div>
      </div>
    </section>
  );
}
