'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Modal from '@/components/ui/Modal';
import { generateImpactXWhatsAppLink } from '@/lib/whatsapp';

export default function ImpactXHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName') as string,
      companyName: formData.get('companyName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      description: formData.get('description') as string,
    };

    // Generate WhatsApp link with form data
    const whatsappLink = generateImpactXWhatsAppLink(data);
    
    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank');
    
    // Close modal after short delay
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center bg-navy-deep overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-medium/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-container mx-auto px-6 w-full pt-16 lg:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div className="space-y-6">
              {/* Gold italic tagline — spec: font-accent italic, gold */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-accent italic text-gold-primary text-[21px] md:text-[28px]"
              >
                AI podcasts that turn brand stories into measurable impact.
              </motion.p>

              {/* Main headline — spec: text-3xl (48px) desktop */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white tracking-[-0.03em] leading-[1.1]"
              >
                Your Always-On, Fully Automated Industry Authority Engine.
              </motion.h1>

              {/* Philosophy text — spec: text-md = 17px */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-[17px] text-gray-300 leading-relaxed"
              >
                ImpactX is not a podcast studio. It&apos;s an AI-powered brand authority system
                that deploys your exclusive digital avatar as a permanent, always-on industry
                voice — generating premium video content without cameras, studios, or
                production overhead.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <PrimaryButton
                  variant="gold"
                  size="lg"
                  icon={<ArrowRight className="h-4 w-4" />}
                  onClick={() => setIsModalOpen(true)}
                >
                  Deploy Your AI Brand Avatar Today
                </PrimaryButton>

                {/* Pricing pill */}
                <div className="inline-flex items-center self-center px-5 py-3 border border-gold-primary rounded-full">
                  <span className="text-gold-primary font-semibold text-base">
                    Packages start from just ₹5,999/-
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right — Avatar mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0D1B4B] to-[#050E2E] border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="text-6xl">🤖</div>
                    <p className="text-sm text-gray-400">AI Avatar Mockup</p>
                    <p className="text-xs text-gray-500">800×600px placeholder</p>
                    <div className="flex gap-2 justify-center mt-4">
                      <span className="px-3 py-1 bg-gold-primary/20 text-gold-primary text-xs rounded-full">YouTube</span>
                      <span className="px-3 py-1 bg-gold-primary/20 text-gold-primary text-xs rounded-full">Reels</span>
                      <span className="px-3 py-1 bg-gold-primary/20 text-gold-primary text-xs rounded-full">Shorts</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-primary/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ImpactX Contact Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Deploy Your AI Brand Avatar" maxWidth="md">
        <div className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all text-base"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company / Brand Name *</label>
              <input
                type="text"
                name="companyName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all text-base"
                placeholder="Company / Brand Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all text-base"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all text-base"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Brief Description of Your Business *</label>
              <textarea
                name="description"
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all text-base resize-none"
                placeholder="Tell us about your business, industry, and goals..."
              />
            </div>
            {/* Honeypot */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
            <PrimaryButton type="submit" variant="gold" className="w-full mt-2">
              Send via WhatsApp →
            </PrimaryButton>
            <p className="text-xs text-gray-500 text-center">
              Tapping the button will open WhatsApp with your details pre-filled.
            </p>
          </form>
        </div>
      </Modal>
    </>
  );
}
