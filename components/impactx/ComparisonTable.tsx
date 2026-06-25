'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { motion } from 'framer-motion';

const rows = [
  {
    feature: 'Logistics & Infrastructure',
    traditional: 'Studio booking, equipment hire, presenter scheduling — weeks of coordination before a single frame is captured.',
    impactx: 'Zero friction. Cloud-based AI generation — from brief to delivery with no physical infrastructure required.',
  },
  {
    feature: 'Turnaround Time',
    traditional: 'Weeks of post-production editing, color grading, audio mastering, and revision cycles.',
    impactx: 'Lightning fast. First episode delivered within 5 business days of brief sign-off. Every time.',
  },
  {
    feature: 'Brand Control & PR Safety',
    traditional: 'Human presenters bring personal opinions, off-script moments, and reputational risk to your brand.',
    impactx: 'Total brand control. Your AI avatar delivers exactly what\'s scripted — on-brand, on-message, every episode.',
  },
  {
    feature: 'Financial Overhead',
    traditional: 'Studio rental, presenter fees, videographer, editor — a minimum ₹50,000+ per episode for quality production.',
    impactx: 'Fraction of the cost. Enterprise-grade brand content from ₹5,999/- per episode. ROI from day one.',
  },
  {
    feature: 'Repurposing Velocity',
    traditional: 'One format output. Re-cutting for Reels, Shorts, and clips requires additional editing time and budget.',
    impactx: 'Multi-format native delivery. Horizontal video, vertical clips, and audio podcast — all delivered simultaneously.',
  },
];

export default function ComparisonTable() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-12 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 tracking-[-0.02em] leading-[1.2]">
            Traditional vs. ImpactX
          </h2>
          <p className="text-[17px] text-gray-700 mt-3">The numbers don&apos;t lie.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto -webkit-overflow-scrolling-touch rounded-xl border border-gray-200 shadow-md"
        >
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="bg-navy-primary text-white text-xs font-semibold uppercase tracking-[0.06em] px-6 py-4 text-left sticky left-0 z-10">
                  Commercial Feature
                </th>
                <th className="bg-navy-primary text-white text-xs font-semibold uppercase tracking-[0.06em] px-6 py-4 text-left w-2/5">
                  Traditional Brand Podcasts
                </th>
                <th className="bg-gold-primary text-navy-deep text-xs font-semibold uppercase tracking-[0.06em] px-6 py-4 text-left w-2/5">
                  ✦ ImpactX AI Podcast System
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-off-white'}>
                  <td
                    className="sticky left-0 z-10 px-6 py-5 text-xs font-semibold text-navy-primary border-r border-gray-200 min-w-[160px]"
                    style={{ background: 'inherit' }}
                  >
                    {row.feature}
                  </td>
                  {/* Traditional column — spec: 14px, gray-400 (muted) */}
                  <td className="px-6 py-5 text-[14px] text-gray-400 leading-relaxed border-r border-gray-200">
                    {row.traditional}
                  </td>
                  {/* ImpactX column — spec: 14px, navy-primary, weight-500 */}
                  <td
                    className="px-6 py-5 text-[14px] text-navy-primary font-medium leading-relaxed border-l-[3px] border-gold-primary"
                    style={{ background: 'rgba(201,168,68,0.04)' }}
                  >
                    <span className="text-gold-primary mr-1">✦</span>
                    {row.impactx}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
