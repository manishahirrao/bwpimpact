'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, BarChart2, Film, Rocket, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const tabs = [
  {
    id: 'social',
    label: 'Social Media',
    icon: LayoutGrid,
    services: [
      { title: 'Organic Platform Management', desc: 'Full-spectrum management across Instagram, Facebook, LinkedIn, and YouTube — content, scheduling, community.' },
      { title: 'Strategic Content Creation', desc: 'Thumb-stopping creatives, conversion-focused captions, and platform-native formats engineered to grow your audience.' },
      { title: 'Comprehensive SMM Audits', desc: 'Data-backed audits of your current social presence — gaps identified, opportunities quantified, roadmap delivered.' },
    ],
  },
  {
    id: 'performance',
    label: 'Performance Marketing',
    icon: BarChart2,
    services: [
      { title: 'Meta & Google Ad Campaigns', desc: 'Precision-targeted paid campaigns across Meta (Facebook/Instagram) and Google — from strategy to creative to optimization.' },
      { title: 'Marketplace Marketing', desc: 'Amazon, Flipkart, and D2C performance campaigns designed to drive sales velocity and improve organic ranking.' },
    ],
  },
  {
    id: 'multimedia',
    label: 'Multimedia & AI',
    icon: Film,
    services: [
      { title: 'Advanced Video Production', desc: 'High-retention video content — brand films, reels, product demos, and testimonial edits that convert cold audiences.' },
      { title: 'Elite Graphic Design', desc: 'Premium visual identity, ad creatives, pitch decks, and brand collateral designed to command attention.' },
      { title: 'AI Video Assets & Agents', desc: 'Next-generation AI-powered video generation and intelligent brand agents for automated content at enterprise scale.' },
    ],
  },
  {
    id: 'growth',
    label: 'Growth Accelerators',
    icon: Rocket,
    services: [
      { title: 'Influencer Marketing Networks', desc: 'Curated influencer partnerships — micro to macro — with performance-tracked campaigns and authentic brand alignment.' },
      { title: 'Automated WhatsApp Marketing', desc: 'Intelligent WhatsApp automation flows for lead nurturing, re-engagement, and customer retention at scale.' },
      { title: 'E-Commerce Web & App Architecture', desc: 'Conversion-optimized e-commerce builds on Shopify, WooCommerce, and custom stacks — built to sell, not just look good.' },
    ],
  },
];

export default function ServicesTabLayout() {
  const [activeTab, setActiveTab] = useState('social');
  const [mobileOpen, setMobileOpen] = useState<string | null>('social');
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const active = tabs.find(t => t.id === activeTab)!;

  return (
    <section ref={ref} className="py-16 md:py-24 bg-off-white relative">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            The Comprehensive Service Ecosystem
          </h2>
          <p className="text-md text-gray-700 mt-3 max-w-2xl mx-auto">
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
                      <h4 className="text-md font-semibold text-gray-900 mb-1">{svc.title}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">{svc.desc}</p>
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
                            <h4 className="text-sm font-semibold text-navy-primary mb-1">{svc.title}</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">{svc.desc}</p>
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
