'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { generateQuickWhatsAppLink } from '@/lib/whatsapp';

export default function VisibilityXClosingCTA() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-navy-deep overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-navy-medium/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          {/* Closing headline — spec: text-3xl (48px) desktop */}
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white tracking-[-0.03em] leading-[1.1]">
            Turn Conversations into{' '}
            <span className="text-gold-primary">Market Influence and Measurable Brand Impact.</span>
          </h2>

          {/* Subtext — spec: text-md = 17px */}
          <p className="text-[17px] text-gray-300 leading-relaxed">
            Join forward-thinking businesses changing how market authority is established.
          </p>

          <div className="pt-4">
            <a
              href={generateQuickWhatsAppLink('visibilityx')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PrimaryButton
                variant="gold"
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                className="animate-gold-pulse shadow-gold"
              >
                Launch Your Custom VisibilityX Show
              </PrimaryButton>
            </a>
          </div>

          <p className="text-sm text-gray-500 pt-2">
            Starting at ₹5,999/- &nbsp;|&nbsp; Delivered in days, not weeks
          </p>

          {/* VisibilityX Social Links */}
          <div className="pt-6 flex flex-col items-center gap-3">
            <p className="text-xs uppercase tracking-widest text-gray-500">Follow VisibilityX</p>
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/channel/UCQRFZHk4tyCnINMd4mHYOOg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-primary transition-colors duration-200"
                aria-label="VisibilityX YouTube"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/visibilityx.bwp?igsh=dTUzc2VweGNoZmsz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-primary transition-colors duration-200"
                aria-label="VisibilityX Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
