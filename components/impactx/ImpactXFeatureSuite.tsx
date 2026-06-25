'use client';

import { motion } from 'framer-motion';
import { Bot, Share2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { staggerContainer, staggerItem } from '@/lib/animations';

const features = [
  {
    number: '01',
    icon: Bot,
    title: 'The Exclusive AI Brand Avatar Host',
    desc: 'We generate a bespoke AI avatar configured with your brand voice, industry positioning, and commercial messaging. Your avatar is exclusively yours — not a generic template.',
    outputs: ['YouTube Long-Form (16:9)', 'LinkedIn Video', 'Podcast Audio'],
  },
  {
    number: '02',
    icon: Share2,
    title: 'Native Multi-Format Asset Delivery',
    desc: 'Every episode is atomized into multiple high-retention formats, delivered fully edited and ready to publish — no additional post-production required.',
    outputs: ['Instagram Reels (9:16)', 'YouTube Shorts', 'TikTok Clips'],
  },
];

export default function ImpactXFeatureSuite() {
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
            What You Get with ImpactX
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        >
          {features.map(feat => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.number}
                variants={staggerItem}
                className="relative overflow-hidden bg-[#0D1B4B] border-l-4 border-gold-primary rounded-xl p-8 hover:-translate-y-1 transition-transform duration-250"
              >
                {/* Watermark */}
                <div className="absolute top-4 right-6 text-[80px] font-extrabold text-white/5 leading-none select-none">
                  {feat.number}
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-primary/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-gold-primary" />
                  </div>
                  {/* Feature card title — spec: text-xl = 28px, weight-700 */}
                  <h3 className="text-[21px] font-bold text-white">{feat.title}</h3>
                  {/* Feature desc — spec: text-base = 15px */}
                  <p className="text-[15px] text-gray-300 leading-[1.6]">{feat.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {feat.outputs.map(o => (
                      <span key={o} className="px-3 py-1 bg-white/10 text-gray-200 text-xs rounded-full">{o}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pricing callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block bg-gold-primary rounded-full px-8 py-4">
            <p className="text-navy-deep font-bold text-lg">
              Command elite enterprise brand positioning without a traditional studio price tag.
              <span className="ml-2">Packages start from just ₹5,999/-</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
