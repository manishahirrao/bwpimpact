'use client';

import { motion } from 'framer-motion';
import { Utensils, Hotel, Home, Heart, Briefcase, GraduationCap } from 'lucide-react';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { generateQuickWhatsAppLink } from '@/lib/whatsapp';

const niches = [
  { icon: Utensils,       title: 'Restaurant & Cafe Owners',           desc: 'Foot traffic, delivery orders, and loyal repeat customers through hyper-local social strategy.' },
  { icon: Hotel,          title: 'Premium Resorts & Staycations',       desc: 'Aspirational content and targeted campaigns that fill your calendar with high-value guests.' },
  { icon: Home,           title: 'Real Estate Developers',              desc: 'Lead generation funnels and trust-building content that convert browsers into buyers.' },
  { icon: Heart,          title: 'Healthcare Professionals & Clinics',  desc: 'HIPAA-sensitive marketing that builds credibility and drives appointment bookings consistently.' },
  { icon: Briefcase,      title: 'Corporate Services (CA, CS, Lawyers)', desc: 'Thought leadership content and digital authority-building for professional service providers.' },
  { icon: GraduationCap,  title: 'Coaching & Educational Academies',    desc: 'Enrollment-focused funnels and community-building strategies for coaches and educators.' },
];

export default function NicheExpertiseGrid() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Your Industry. Our Expertise.
          </h2>
          <p className="text-md text-gray-700 mt-3 max-w-2xl mx-auto">
            We've built deep playbooks for 6 key industries — so you get strategy that works, not experiments at your expense.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {niches.map(niche => {
            const Icon = niche.icon;
            return (
              <motion.div
                key={niche.title}
                variants={staggerItem}
                className="group border border-gray-200 rounded-xl p-6 cursor-default
                           hover:bg-navy-primary hover:border-navy-primary transition-all duration-[250ms]"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-navy-light group-hover:bg-white/10 transition-colors flex items-center justify-center">
                    <Icon className="h-6 w-6 text-navy-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-gray-900 group-hover:text-white transition-colors mb-1">
                      {niche.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">
                      {niche.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href={generateQuickWhatsAppLink('audit')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryButton variant="navy" size="lg">
              Let&apos;s Engineer Your System — Contact Our Team
            </PrimaryButton>
          </a>
        </div>
      </div>
    </section>
  );
}
