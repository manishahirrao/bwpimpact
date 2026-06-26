'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { generateQuickWhatsAppLink } from '@/lib/whatsapp';

export default function VisibilityXHero() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-[90vh] flex flex-col justify-center bg-navy-deep overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-medium/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-container mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div className="space-y-6">
              {/* Gold italic tagline — spec: font-accent italic, gold */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-accent italic text-gold-primary text-[21px] md:text-[28px]"
              >
                AI podcasts that turn brand stories into measurable impact.
              </motion.p>

              {/* Main headline — spec: text-3xl (48px) desktop */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white tracking-[-0.03em] leading-[1.1]"
              >
                Your Always-On, Fully Automated Industry Authority Engine.
              </motion.h1>

              {/* Philosophy text — spec: text-md = 17px */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-[17px] text-gray-300 leading-relaxed"
              >
                VisibilityX is not a podcast studio. It&apos;s an AI-powered brand authority system
                that deploys your exclusive digital avatar as a permanent, always-on industry
                voice — generating premium video content without cameras, studios, or
                production overhead.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex flex-col md:flex-row gap-4 pt-4 w-full md:w-auto items-stretch md:items-center"
              >
                <a
                  href={generateQuickWhatsAppLink('visibilityx')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto"
                >
                  <PrimaryButton
                    variant="gold"
                    size="lg"
                    icon={<ArrowRight className="h-4 w-4 flex-shrink-0" />}
                    className="w-full md:w-auto text-center"
                  >
                    Deploy Your AI Brand Avatar Today
                  </PrimaryButton>
                </a>

                {/* Pricing pill */}
                <div className="inline-flex items-center justify-center px-5 py-3 min-h-[56px] border border-gold-primary rounded-2xl md:rounded-full w-full md:w-auto text-center">
                  <span className="text-gold-primary font-semibold text-base">
                    Packages start from just ₹5,999/-
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right — Avatar mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0D1B4B] to-[#050E2E] border border-white/10 shadow-2xl">
                <video
                  src="/assets/visibilityx/podcast.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle gradient overlay to make it blend perfectly with the dark theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050E2E]/60 via-transparent to-[#0D1B4B]/20 pointer-events-none" />
                
                {/* Floating Tags */}
                <div className="absolute bottom-6 left-0 right-0 flex gap-2 justify-center z-10">
                  <span className="px-4 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-medium rounded-full shadow-lg">YouTube</span>
                  <span className="px-4 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-medium rounded-full shadow-lg">Reels</span>
                  <span className="px-4 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-medium rounded-full shadow-lg">Shorts</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-primary/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
