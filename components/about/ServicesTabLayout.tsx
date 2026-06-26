'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, BarChart2, Film, Rocket, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const tabs = [
  {
    id: 'social',
    label: 'Social Media & PR',
    icon: LayoutGrid,
    services: [
      { title: 'Social Media Marketing', desc: 'Full-spectrum organic management and strategic content creation across Instagram, Facebook, LinkedIn, and YouTube.' },
      { title: 'Social Media Audit Service', desc: 'Comprehensive, data-backed audits of your current social presence to identify gaps and deliver actionable growth roadmaps.' },
      { title: 'Digital PR Services', desc: 'Strategic brand positioning, media relations, and digital press coverage to build your industry authority and trust.' },
    ],
  },
  {
    id: 'performance',
    label: 'Performance & Search',
    icon: BarChart2,
    services: [
      { title: 'Meta Ads & Google Ads', desc: 'Precision-targeted, high-ROI paid campaigns across Meta (Facebook/Instagram) and Google search and display networks.' },
      { title: 'SEO Services', desc: 'Advanced on-page, off-page, and technical Search Engine Optimization to dominate organic search rankings.' },
      { title: 'Digital Marketing Consultation', desc: 'Expert strategic consultation to audit your current funnels and architect high-converting digital growth plans.' },
    ],
  },
  {
    id: 'multimedia',
    label: 'Multimedia & Branding',
    icon: Film,
    services: [
      { title: 'Video, Product & Reel Shoots', desc: 'High-end production shoots for brand films, commercial product photography, and viral short-form social reels.' },
      { title: 'AI Video Creation & Editing', desc: 'Advanced post-production video editing and next-generation AI video asset generation for scalable content.' },
      { title: 'Graphic Designing & Brand Identity', desc: 'Premium logo creation, brand guidelines, ad creatives, and comprehensive visual identity architecture.' },
    ],
  },
  {
    id: 'growth',
    label: 'Web & Growth',
    icon: Rocket,
    services: [
      { title: 'E-Commerce & Website Development', desc: 'Custom, high-performance website and e-commerce builds engineered to convert organic and paid traffic into sales.' },
      { title: 'Influencer Marketing', desc: 'Curated influencer and creator partnerships with performance-tracked campaigns and authentic brand alignment.' },
      { title: 'WhatsApp Marketing', desc: 'Intelligent automation flows and direct broadcast campaigns for lead nurturing and high-conversion customer retention.' },
    ],
  },
];

export default function ServicesTabLayout() {
  const [activeTab, setActiveTab] = useState('social');
  const [mobileOpen, setMobileOpen] = useState<string | null>('social');
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const active = tabs.find(t => t.id === activeTab)!;

  return (
    <section ref={ref} className="py-12 md:py-24 bg-off-white relative">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1B2B6B 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 tracking-[-0.02em] leading-[1.2]">
            The Comprehensive Service Ecosystem
          </h2>
          <p className="text-[17px] text-gray-700 mt-3 max-w-2xl mx-auto">
            Four integrated verticals, one unified growth strategy.
          </p>
        </motion.div>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <div className="flex border-b border-gray-200 mb-8">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`
                    flex items-center gap-2 px-6 py-4 text-base font-medium transition-colors duration-200 relative
                    ${isActive ? 'text-navy-primary' : 'text-gray-400 hover:text-navy-primary'}
                  `}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="tabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-primary"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-card"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {active.services.map(svc => (
                  <div key={svc.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-navy-light flex items-center justify-center">
                      <active.icon className="h-5 w-5 text-navy-primary" />
                    </div>
                    <div>
                      {/* Service title — spec: 17px, weight-600 */}
                      <h4 className="text-[17px] font-semibold text-gray-900 mb-1">{svc.title}</h4>
                      {/* Service desc — spec: 15px, weight-400 */}
                      <p className="text-[15px] text-gray-700 leading-[1.6]">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-3">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isOpen = mobileOpen === tab.id;
            return (
              <div key={tab.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setMobileOpen(isOpen ? null : tab.id)}
                  className="w-full flex items-center justify-between px-5 py-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-gold-primary" />
                    <span className="text-base font-semibold text-gray-900">{tab.label}</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 space-y-4 border-t border-gray-100 pt-4">
                        {tab.services.map(svc => (
                          <div key={svc.title}>
                            <h4 className="text-[15px] font-semibold text-navy-primary mb-1">{svc.title}</h4>
                            <p className="text-[15px] text-gray-700 leading-[1.6]">{svc.desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
