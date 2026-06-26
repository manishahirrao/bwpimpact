'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Award, Shield, UserCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const coreValues = [
  { title: 'Client-Centricity',    desc: 'Your success is our only measure. Every strategy begins and ends with your specific goals, audience, and constraints.' },
  { title: 'Results-Orientation',  desc: 'No vanity metrics. We obsess over revenue-generating outcomes—qualified leads, conversions, and measurable ROI.' },
  { title: 'Innovation',           desc: 'We constantly evolve. AI tools, emerging platforms, and cutting-edge tactics are evaluated and deployed when they deliver results.' },
  { title: 'Adaptability',         desc: 'Markets shift. Algorithms change. We recalibrate strategies in real time so your brand stays ahead, not behind.' },
  { title: 'Collaboration',        desc: 'We work as an extension of your team—transparent, communicative, and fully aligned with your vision.' },
];

const awardBadges = [
  { icon: Award,  label: 'Maharashtra Udyog Gaurav' },
  { icon: Shield, label: 'Inspiring Woman Entrepreneur' },
  { icon: Award,  label: 'BNI Member' },
];

export default function AboutLeadershipSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-12 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[28px] md:text-[36px] font-bold text-gray-900 tracking-[-0.02em] leading-[1.2] text-center mb-12 md:mb-16"
        >
          Bridging Corporate Strategy with Ground-Level Business Realities.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Priyam portrait placeholder */}
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              <div
                className="absolute inset-0 rounded-xl overflow-hidden bg-gradient-to-br from-navy-light to-gold-light"
                style={{ borderRadius: '24px', border: '3px solid #C9A844' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3 p-8">
                    <UserCircle className="w-16 h-16 text-navy-primary mx-auto opacity-80" strokeWidth={1.5} />
                    <p className="text-sm text-gray-600 font-medium">Priyam Talpade Mandrekar</p>
                    <p className="text-xs text-gray-500 italic">Founder, BWP IMPACT</p>
                  </div>
                </div>
              </div>
              {/* Gold accent border */}
              <div className="absolute -inset-2 border-2 border-gold-primary/30 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              {/* Name — spec: text-lg (21px), weight-700 */}
              <h3 className="text-[21px] font-bold text-navy-primary mb-1">Priyam Talpade Mandrekar</h3>
              {/* Role — spec: text-sm (13px) */}
              <p className="text-[13px] text-gray-500">Founder & Chief Strategist, BWP IMPACT</p>
            </div>

            <div className="space-y-3 text-[15px] text-gray-700 leading-[1.6]">
              <p>
                With a <strong>PGDM in Marketing Management</strong> and a background in{' '}
                <strong>Nielsen market research consulting</strong>, Priyam brings the rigor of
                corporate strategy to every engagement — without losing the agility that growing
                businesses need.
              </p>
              <p>
                Certified in <strong>AI-driven digital marketing</strong>, she architects
                systems that combine psychology-driven content, performance marketing science,
                and next-generation AI automation to engineer compounding growth for brands
                across India.
              </p>
              <p>
                Over 8+ years, she's built a reputation for one thing: results that outlast the
                campaign and outlast the agency relationship.
              </p>
            </div>

            {/* Award Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {awardBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 border border-gold-primary rounded-full text-sm text-navy-primary"
                >
                  <Icon className="h-4 w-4 text-gold-primary" />
                  {label}
                </div>
              ))}
            </div>

            {/* Core Values Accordion */}
            <div className="pt-4">
              {/* Core Values heading — spec: text-base (15px), weight-600 */}
              <h4 className="text-[15px] font-semibold text-gray-900 mb-3">Our Core Values</h4>
              <div className="space-y-2">
                {coreValues.map((val, i) => (
                  <div key={val.title} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-100 transition-colors"
                      aria-expanded={openIndex === i}
                    >
                      {/* Accordion trigger — spec: text-base = 15px, weight-500 */}
                      <span className="text-[15px] font-medium text-gray-900">{val.title}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {openIndex === i && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="px-4 pb-4 text-[15px] text-gray-700 leading-[1.6]">{val.desc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
