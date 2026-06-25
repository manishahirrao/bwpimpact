'use client';

import { motion } from 'framer-motion';
import { MapPin, Bot, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { stepBadge } from '@/lib/animations';

const steps = [
  {
    number: '1',
    icon: MapPin,
    title: 'The Blueprint Framework',
    desc: "We deep-dive into your specific product, target market profile, and commercial goals to program your brand's unique conversational structure.",
  },
  {
    number: '2',
    icon: Bot,
    title: 'Avatar Synthesis',
    desc: "We generate your brand's custom, exclusive AI Avatar host, configured natively with your precise industry insights and brand guidelines.",
  },
  {
    number: '3',
    icon: Zap,
    title: 'Omni-Distribution Delivery',
    desc: 'You receive premium, high-retention horizontal video files and vertical viral clips fully ready to engage your audience and convert cold traffic.',
  },
];

export default function HowItWorksSteps() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-12 md:py-24 bg-off-white">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 tracking-[-0.02em] leading-[1.2]">
            How It Works
          </h2>
          <p className="text-[17px] text-gray-700 mt-3">Three steps. Infinite impact.</p>
        </motion.div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connector line */}
          <div className="absolute top-6 left-[calc(16.67%)] right-[calc(16.67%)] h-[2px] border-t-2 border-dashed border-gold-primary/40 -z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                custom={i}
                variants={stepBadge}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                transition={{ delay: i * 0.3 }}
                className="flex flex-col items-center text-center flex-1 px-4 relative z-10"
              >
                {/* Step badge */}
                <div className="w-12 h-12 rounded-full bg-gold-primary text-white flex items-center justify-center text-xl font-bold shadow-md mb-4">
                  {step.number}
                </div>
                <div className="w-10 h-10 rounded-md bg-navy-light mb-3 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-navy-primary" />
                </div>
                {/* Step title — spec: 20px, weight-700, navy */}
                <h3 className="text-[20px] font-bold text-navy-primary mb-2 max-w-[200px]">{step.title}</h3>
                {/* Step desc — spec: 15px, gray-700, line-height 1.7 */}
                <p className="text-[15px] text-gray-700 leading-[1.7] max-w-[240px]">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-8 relative">
          {/* Vertical connector */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-gold-primary/40" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={stepBadge}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                transition={{ delay: i * 0.3 }}
                className="flex gap-4 relative z-10"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gold-primary text-white flex items-center justify-center text-xl font-bold shadow-md">
                  {step.number}
                </div>
                <div className="flex-1 pt-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-navy-light mb-2">
                    <Icon className="h-5 w-5 text-navy-primary" />
                  </div>
                  {/* Mobile step title */}
                  <h3 className="text-[20px] font-bold text-navy-primary mb-1">{step.title}</h3>
                  <p className="text-[15px] text-gray-700 leading-[1.7]">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
