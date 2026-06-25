'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * BrandEvolutionSection Component
 * Two-column layout explaining the transition from Branding with Priyam to BWP IMPACT
 */
export default function BrandEvolutionSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-off-white"
    >
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy (60%) */}
          <div className="lg:col-span-3 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
            >
              Same Legacy. Disruptive Upgrades.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-base text-gray-700 leading-relaxed"
            >
              <p>
                For over 8 years, <span className="italic text-navy-primary">Branding with Priyam</span> has 
                been the go-to partner for ambitious businesses seeking measurable digital growth. 
                From bootstrapped startups to established corporate brands, we've engineered marketing 
                systems that don't just generate impressions—they generate revenue.
              </p>

              <p>
                Today, we evolve into <span className="font-bold text-gold-primary">BWP IMPACT</span>—not 
                a rebrand, but a strategic upgrade. Same founder. Same integrity. Same relentless focus 
                on your ROI. But now with expanded capabilities in AI-driven solutions, next-generation 
                content automation, and enterprise-grade performance marketing infrastructure.
              </p>

              <p>
                The name changes. The mission intensifies. Your brand's transformation remains our 
                obsession.
              </p>

              <div className="pt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <div className="text-sm font-semibold text-navy-primary">Results-Driven</div>
                    <div className="text-xs text-gray-600">ROI First, Always</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <div className="text-sm font-semibold text-navy-primary">AI-Powered</div>
                    <div className="text-xs text-gray-600">Next-Gen Solutions</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <div className="text-sm font-semibold text-navy-primary">8+ Years</div>
                    <div className="text-xs text-gray-600">Proven Track Record</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Element (40%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Placeholder for brand evolution image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-navy-light via-white to-gold-light">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-6">
                  {/* Before */}
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600 italic">Legacy</div>
                    <div className="text-xl font-semibold text-navy-primary italic">
                      Branding with Priyam
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="text-4xl text-gold-primary">↓</div>

                  {/* After */}
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Evolution</div>
                    <div className="text-2xl font-bold text-gold-primary">
                      BWP IMPACT
                    </div>
                    <div className="text-xs text-gray-600 italic">
                      The Next Evolution
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-navy-primary/10 rounded-full blur-2xl" />
              </div>

              {/* Accent border */}
              <div className="absolute -inset-2 border-4 border-gold-primary/20 rounded-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
