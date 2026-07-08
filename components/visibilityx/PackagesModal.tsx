'use client';

import { Check, Star, Zap, Crown } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import { generateQuickWhatsAppLink } from '@/lib/whatsapp';

interface PackagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const packages = [
  {
    tier: 'STARTER',
    name: 'Visibility Sprint',
    tagline: 'Start Building Your Digital Authority',
    price: '₹5,999',
    badge: null,
    icon: Zap,
    accentColor: 'border-blue-400',
    badgeBg: '',
    perfectFor: 'Entrepreneurs, Coaches, Consultants & Local Businesses who want to test AI Podcast marketing.',
    delivers: ['2 Premium AI Podcast Shorts (30–45 sec)'],
    includes: [
      'AI Podcast Strategy Call',
      'Professional Podcast Script',
      '2-Hour Smartphone Shoot',
      'Your Exclusive AI Host (reserved only for your brand)',
      'Professional Voice Enhancement',
      'Cinematic Editing',
      'Captions & Motion Graphics',
      'Brand Logo Integration',
      'Royalty-Free Background Music',
      'Published from VisibilityX Official Channel',
      'Collaboration Invite to Your Instagram Account',
      'Optimized Captions & Hashtags',
    ],
    results: [
      'Increase Brand Visibility',
      'Build Trust Faster',
      'Professional Social Media Presence',
      'Ready-to-Share Content',
    ],
    bonuses: [
      'FREE AI Thumbnail Design',
      'FREE Caption Copy',
      'FREE Content Publishing',
    ],
    bonusWorth: null,
  },
  {
    tier: 'MOST POPULAR',
    name: 'Authority Builder',
    tagline: 'Turn One Conversation into Multiple High-Converting Content Assets',
    price: '₹14,999',
    badge: 'Most Popular',
    icon: Star,
    accentColor: 'border-gold-primary',
    badgeBg: 'bg-gold-primary text-navy-deep',
    perfectFor: 'Business owners who want consistent authority-building content every month.',
    delivers: [
      '1 Premium AI Podcast Episode (5–7 Minutes)',
      '3 High-Retention Viral Reels',
    ],
    includes: [
      'Everything in Visibility Sprint PLUS',
      'Long-form Podcast Editing',
      'YouTube Ready Format',
      'LinkedIn Optimized Format',
      'Multiple Camera Style AI Editing',
      'Premium Motion Graphics',
      'Hook Optimization',
      'AI Voice Enhancement',
      'CTA Integration',
      'End Screen Branding',
      'SEO-Friendly Title',
      'Description Writing',
      'YouTube Thumbnail',
    ],
    results: [
      'Establish Thought Leadership',
      'Increase Professional Credibility',
      'More Organic Reach',
      'More Website Visits',
      'Better Client Trust',
    ],
    bonuses: [
      'FREE YouTube Thumbnail',
      'FREE SEO Title & Description',
      'FREE Social Media Caption Set',
      'FREE Viral Hook Optimization',
    ],
    bonusWorth: '₹7,000',
  },
  {
    tier: 'PREMIUM',
    name: 'Industry Authority Engine',
    tagline: 'Dominate Every Platform with One Powerful AI Podcast',
    price: '₹29,999',
    badge: 'Premium',
    icon: Crown,
    accentColor: 'border-purple-500',
    badgeBg: 'bg-purple-600 text-white',
    perfectFor: 'Founders, CEOs, consultants, speakers, and personal brands serious about becoming the face of their industry.',
    delivers: [
      'Premium AI Podcast (15–20 Minutes)',
      '5 Viral Shorts / Reels',
      'Multi-Platform Distribution Assets',
    ],
    includes: [
      'Everything in Authority Builder PLUS',
      'Deep Research & Topic Blueprint',
      'Premium Storytelling Framework',
      'Advanced AI Editing',
      'Platform-Specific Optimization (YouTube, Instagram, LinkedIn, Facebook, Shorts)',
      'High-End Motion Graphics',
      'Brand Animation',
      'Cinematic Sound Design',
      'Multiple CTA Versions',
      'Priority Editing',
    ],
    results: [
      'Position Yourself as an Industry Leader',
      'Build Massive Digital Authority',
      'Create Weeks of Content from One Shoot',
      'Higher Audience Trust',
      'More Leads & Inbound Enquiries',
      'Strong Personal Brand Presence',
    ],
    bonuses: [
      'AI Podcast Thumbnail',
      'Viral Hooks',
      'YouTube SEO',
      'Caption Pack',
      'Multi-Platform Publishing',
      'Priority Delivery',
      'Content Repurposing Strategy',
      '30-Day Content Posting Plan',
    ],
    bonusWorth: '₹18,000',
  },
];

const whyDifferent = [
  'Exclusive AI Host Created Only for Your Brand',
  'Human-Level Storytelling',
  'Professional Scriptwriting',
  'Smartphone Shoot Only (No Studio Required)',
  'AI + Human Editing Workflow',
  'Collaborative Publishing for Maximum Reach',
  'Content Optimized for Instagram, LinkedIn & YouTube',
  'Build Authority Without Spending Hours Recording Podcasts',
];

export default function PackagesModal({ isOpen, onClose }: PackagesModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
      <div className="bg-gradient-to-br from-navy-deep to-[#050E2E] text-white">
        {/* Compact Header */}
        <div className="px-6 pt-6 pb-4 text-center">
          <h2 className="text-[22px] md:text-[26px] font-bold text-white">
            Choose Your Package
          </h2>
          <p className="text-gray-400 text-[13px] mt-1">Become the Industry Expert Without Recording Traditional Podcasts</p>
        </div>

        {/* 3 Package Cards - side by side, compact */}
        <div className="px-4 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              const isPopular = pkg.tier === 'MOST POPULAR';
              return (
                <div
                  key={pkg.name}
                  className={`relative rounded-xl border-2 ${pkg.accentColor} ${isPopular ? 'ring-2 ring-gold-primary/40' : ''} bg-gradient-to-b from-white/[0.07] to-white/[0.03] overflow-hidden`}
                >
                  {/* Badge */}
                  {pkg.badge && (
                    <div className="absolute top-0 inset-x-0 flex justify-center -mt-0.5">
                      <div className={`px-3 py-0.5 rounded-b-lg text-[10px] font-bold ${pkg.badgeBg} shadow-md`}>
                        {pkg.badge}
                      </div>
                    </div>
                  )}

                  <div className="p-4">
                    {/* Icon + Name - ultra compact */}
                    <div className="flex flex-col items-center text-center mb-3 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-gold-primary/10 flex items-center justify-center mb-2 border border-gold-primary/20">
                        <Icon className="h-5 w-5 text-gold-primary" />
                      </div>
                      <h3 className="text-[15px] font-bold text-white leading-tight">{pkg.name}</h3>
                    </div>

                    {/* Price - prominent */}
                    <div className="text-center mb-3 pb-3 border-b border-white/10">
                      <span className="text-[28px] font-bold text-gold-primary">{pkg.price}</span>
                    </div>

                    {/* Key Delivers - ultra condensed */}
                    <div className="mb-3">
                      <ul className="space-y-1">
                        {pkg.delivers.map((d) => (
                          <li key={d} className="flex items-start gap-1.5 text-[11px] text-white font-medium leading-tight">
                            <Check className="h-3 w-3 text-gold-primary flex-shrink-0 mt-0.5" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Top 2 Results only */}
                    <div className="mb-3">
                      <ul className="space-y-0.5">
                        {pkg.results.slice(0, 2).map((r) => (
                          <li key={r} className="flex items-start gap-1.5 text-[10px] text-green-400 leading-tight">
                            <Check className="h-2.5 w-2.5 flex-shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bonus tag */}
                    <div className="mb-3 bg-gold-primary/10 border border-gold-primary/30 rounded-md p-2">
                      <p className="text-[9px] font-bold text-gold-primary uppercase tracking-wider mb-0.5">
                        🎁 Bonus{pkg.bonusWorth ? ` ${pkg.bonusWorth}` : ''}
                      </p>
                      <p className="text-[10px] text-gray-300 leading-tight">
                        {pkg.bonuses.slice(0, 2).join(' • ')}
                      </p>
                    </div>

                    {/* CTA */}
                    <a
                      href={generateQuickWhatsAppLink('visibilityx')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2 px-3 bg-gold-primary text-navy-deep font-bold text-[13px] rounded-lg hover:bg-gold-primary/90 transition-colors duration-200"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA bar - single line */}
        <div className="px-6 pb-6">
          <div className="bg-gradient-to-r from-gold-primary/10 to-gold-primary/5 border border-gold-primary/30 rounded-lg p-4 text-center">
            <p className="text-[12px] text-gray-300 mb-2">
              <span className="font-bold text-gold-primary">Save ₹10,000+</span> • Free AI Host • Free Strategy Call • Priority Support
            </p>
            <a
              href={generateQuickWhatsAppLink('visibilityx')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 px-6 bg-gold-primary text-navy-deep font-bold text-[13px] rounded-lg hover:bg-gold-primary/90 transition-colors duration-200"
            >
              Claim Launch Offer →
            </a>
          </div>
        </div>

      </div>
    </Modal>
  );
}
