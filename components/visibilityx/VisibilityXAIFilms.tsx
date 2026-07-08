'use client';

import { motion } from 'framer-motion';
import { Film, PlayCircle, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { staggerContainer, staggerItem } from '@/lib/animations';

const whatWeCreate = [
  {
    icon: Film,
    title: 'Corporate Brand Films & Product Launches',
    desc: 'Professional, cinematic videos aligned with your brand identity and business goals.',
  },
  {
    icon: PlayCircle,
    title: 'YouTube Documentary Content',
    desc: 'High-retention, documentary-style videos that help creators and brands grow consistently.',
  },
  {
    icon: Sparkles,
    title: 'Event Teasers & Highlights',
    desc: 'Blockbuster-style pre-event promotions and post-event highlight films that leave a lasting impression.',
  },
];

const whyPoints = [
  { icon: Film,       text: 'Studio-grade cinematic visuals' },
  { icon: Sparkles,   text: 'AI-powered scripting & storytelling' },
  { icon: Zap,        text: 'Fast turnaround with automated production' },
  { icon: TrendingUp, text: 'High-retention content optimized for digital platforms' },
  { icon: Shield,     text: 'Premium quality without the traditional production complexity' },
];

export default function VisibilityXAIFilms() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-12 md:py-24 bg-navy-deep relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(201,168,68,0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full text-xs font-semibold text-gold-primary uppercase tracking-widest mb-4">
            ✦ New
          </span>
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-white tracking-[-0.02em] leading-[1.15]">
            VisibilityX AI Films
          </h2>
          <p className="text-gold-primary text-[17px] font-medium mt-2">
            Cinematic Storytelling. Studio-Quality Results. AI-Powered Speed.
          </p>
          <p className="text-[16px] text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Move beyond ordinary videos with AI-powered cinematic films that captivate audiences
            and elevate your brand. VisibilityX AI Films combines intelligent storytelling,
            cinematic visuals, AI-generated scripts, and automated post-production to create
            premium brand films, YouTube documentaries, product launches, and event videos —
            delivered faster than traditional production.
          </p>
        </motion.div>

        {/* What We Create */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-14"
        >
          <h3 className="text-[13px] font-semibold uppercase tracking-widest text-gray-400 text-center mb-8">
            What We Create
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {whatWeCreate.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-gold-primary/40 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-gold-primary/10 flex items-center justify-center mb-4 group-hover:bg-gold-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-gold-primary" />
                  </div>
                  <h4 className="text-[16px] font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-[14px] text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Why VisibilityX AI Films */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10"
        >
          <h3 className="text-[20px] font-bold text-white mb-6 text-center">
            Why VisibilityX AI Films?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.text} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gold-primary/10 flex items-center justify-center mt-0.5">
                    <Icon className="h-4 w-4 text-gold-primary" />
                  </div>
                  <p className="text-[15px] text-gray-300 leading-[1.5]">{point.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Closing tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center mt-12"
        >
          <p className="text-[22px] md:text-[28px] font-bold text-white">
            Your Story.{' '}
            <span className="text-gold-primary">Cinematically Reimagined.</span>
          </p>
          <p className="text-[16px] text-gray-400 mt-3 max-w-xl mx-auto">
            Create powerful visual experiences that build authority, engage audiences, and deliver lasting impact.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
