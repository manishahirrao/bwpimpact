'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { motion } from 'framer-motion';

const rows = [
  {
    feature: 'Logistics & Infrastructure',
    traditional: 'Studio booking, equipment hire, presenter scheduling — weeks of coordination before a single frame is captured.',
    visibilityx: 'Zero friction. Cloud-based AI generation — from brief to delivery with no physical infrastructure required.',
  },
  {
    feature: 'Turnaround Time',
    traditional: 'Weeks of post-production editing, color grading, audio mastering, and revision cycles.',
    visibilityx: 'Lightning fast. First episode delivered within 5 business days of brief sign-off. Every time.',
  },
  {
    feature: 'Brand Control & PR Safety',
    traditional: 'Human presenters bring personal opinions, off-script moments, and reputational risk to your brand.',
    visibilityx: 'Total brand control. Your AI avatar delivers exactly what\'s scripted — on-brand, on-message, every episode.',
  },
  {
    feature: 'Financial Overhead',
    traditional: 'Studio rental, presenter fees, videographer, editor — a minimum ₹50,000+ per episode for quality production.',
    visibilityx: 'Fraction of the cost. Enterprise-grade brand content from ₹5,999/- per episode. ROI from day one.',
  },
  {
    feature: 'Repurposing Velocity',
    traditional: 'One format output. Re-cutting for Reels, Shorts, and clips requires additional editing time and budget.',
    visibilityx: 'Multi-format native delivery. Horizontal video, vertical clips, and audio podcast — all delivered simultaneously.',
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
            Traditional vs. VisibilityX
          </h2>
          <p className="text-[17px] text-gray-700 mt-3">The numbers don&apos;t lie.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Desktop table view */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 shadow-md">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  <th className="bg-navy-primary text-white text-xs font-semibold uppercase tracking-[0.06em] px-6 py-4 text-left">
                    Commercial Feature
                  </th>
                  <th className="bg-navy-primary text-white text-xs font-semibold uppercase tracking-[0.06em] px-6 py-4 text-left min-w-[240px] w-2/5">
                    Traditional Brand Podcasts
                  </th>
                  <th className="bg-gold-primary text-navy-deep text-xs font-semibold uppercase tracking-[0.06em] px-6 py-4 text-left min-w-[240px] w-2/5">
                    ✦ VisibilityX AI Podcast System
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-off-white'}>
                    <td className="px-6 py-5 text-xs font-semibold text-navy-primary border-r border-gray-200 min-w-[160px]">
                      {row.feature}
                    </td>
                    <td className="px-6 py-5 text-[14px] text-gray-400 leading-relaxed border-r border-gray-200">
                      {row.traditional}
                    </td>
                    <td
                      className="px-6 py-5 text-[14px] text-navy-primary font-medium leading-relaxed border-l-[3px] border-gold-primary"
                      style={{ background: 'rgba(201,168,68,0.04)' }}
                    >
                      <span className="text-gold-primary mr-1">✦</span>
                      {row.visibilityx}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card view */}
          <div className="md:hidden space-y-6">
            {rows.map((row, i) => (
              <div key={row.feature} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-navy-primary px-5 py-3">
                  <h3 className="text-sm font-semibold text-white">{row.feature}</h3>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Traditional Approach
                    </div>
                    <p className="text-[14px] text-gray-600 leading-relaxed">{row.traditional}</p>
                  </div>
                  <div className="pt-3 border-t-2 border-gold-primary/30" style={{ background: 'rgba(201,168,68,0.04)' }}>
                    <div className="text-xs font-semibold text-gold-primary uppercase tracking-wider mb-2 flex items-center gap-1">
                      <span>✦</span> VisibilityX Advantage
                    </div>
                    <p className="text-[14px] text-navy-primary font-medium leading-relaxed">{row.visibilityx}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
