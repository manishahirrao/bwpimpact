'use client';

import { motion } from 'framer-motion';
import { Brain, TrendingUp, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { staggerContainer, staggerItem } from '@/lib/animations';

const pillars = [
  {
    number: '01',
    icon: Brain,
    title: 'Human-Centric Consumer Psychology',
    description:
      'We decode buyer intent, emotional triggers, and decision-making patterns across industries. Every campaign is engineered around how your audience actually thinks—not how we wish they would.',
    borderColor: 'border-navy-primary',
  },
  {
    number: '02',
    icon: TrendingUp,
    title: 'Hyper-Optimized Performance',
    description:
      'Vanity metrics mean nothing to us. We architect conversion funnels, A/B test ruthlessly, and obsess over cost-per-acquisition. Your marketing budget becomes a measurable revenue engine.',
    borderColor: 'border-gold-primary',
  },
  {
    number: '03',
    icon: Zap,
    title: 'AI-Accelerated Production',
    description:
      'From ImpactX AI podcasts to automated content calendars, we leverage next-generation AI tools to produce at scale while maintaining brand authenticity. Speed without compromise.',
    borderColor: 'border-navy-primary',
  },
];

/**
 * CorePillarsSection Component
 * Three feature cards with watermark numbers and bottom accent borders
 * Implements scroll-triggered stagger animation
 */
export default function CorePillarsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Engineered for Brands that Demand Measurable ROI
          </h2>
          <p className="text-md text-gray-700">
            Our three-pillar methodology transforms digital marketing from expense to investment
          </p>
        </motion.div>

        {/* Pillar Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                variants={staggerItem}
                className="relative group"
              >
                {/* Card */}
                <div
                  className={`
                    relative overflow-hidden
                    bg-white border border-gray-200 rounded-lg
                    p-8
                    shadow-card hover:shadow-lg
                    transition-all duration-250
                    hover:-translate-y-1
                    ${pillar.borderColor} border-b-4
                  `}
                >
                  {/* Watermark Number */}
                  <div
                    className="absolute top-6 right-6 text-[80px] font-extrabold text-gray-100 leading-none select-none"
                    aria-hidden="true"
                  >
                    {pillar.number}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-light">
                      <Icon className="h-7 w-7 text-navy-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-700 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
