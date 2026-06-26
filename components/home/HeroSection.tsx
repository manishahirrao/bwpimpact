'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { generateQuickWhatsAppLink } from '@/lib/whatsapp';
import {
  heroHeadline,
  heroSubheadline,
  heroCTA,
  heroImage,
} from '@/lib/animations';

/**
 * HeroSection Component
 * Full viewport hero with split layout (text + image)
 * Implements staggered entrance animations
 */
export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-32 min-h-[90vh] flex flex-col justify-center bg-white">
      <div className="max-w-container mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Main Headline */}
            <motion.h1
              variants={heroHeadline}
              initial="hidden"
              animate="visible"
              className="text-[40px] md:text-[56px] lg:text-[64px] font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.0]"
            >
              Your 'Zero to Hero' Digital Growth Partner.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={heroSubheadline}
              initial="hidden"
              animate="visible"
              className="text-[17px] text-gray-700 leading-relaxed max-w-xl"
            >
              We don't chase vanity metrics. At BWP Impact, we engineer 
              high-converting social media ecosystems, high-yield lead generation 
              engines, and next-generation AI solutions for MSMEs, corporate brands, 
              and ambitious entrepreneurs.
            </motion.p>

            <motion.p
              variants={heroSubheadline}
              initial="hidden"
              animate="visible"
              className="text-[15px] text-gray-600"
            >
              Built on the trusted 8+ year legacy of{' '}
              <span className="italic text-navy-primary">Branding with Priyam</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={heroCTA}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 w-full"
            >
              <a
                href={generateQuickWhatsAppLink('strategy')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <PrimaryButton
                  variant="gold"
                  size="lg"
                  icon={<ArrowRight className="h-4 w-4 flex-shrink-0" />}
                  className="w-full sm:w-auto"
                >
                  Book Your 1-on-1 Growth Strategy Session
                </PrimaryButton>
              </a>

              <a
                href="https://drive.google.com/drive/u/0/folders/1rpjOCqZVGMai4El5M1meKY-sarcriMNz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <PrimaryButton variant="navy" size="lg" className="w-full sm:w-auto">
                  View Our Portfolio
                </PrimaryButton>
              </a>

              <Link href="/visibilityx" className="w-full sm:w-auto">
                <PrimaryButton variant="ghost-navy" size="lg" className="w-full sm:w-auto">
                  Explore VisibilityX AI Podcasts →
                </PrimaryButton>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 pt-8 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>8+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>State-Level Recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span>100+ Brands Served</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Hero Image */}
          <motion.div
            variants={heroImage}
            initial="hidden"
            animate="visible"
            className="relative w-full h-[400px] lg:h-[600px]"
          >
            <div className="absolute w-full h-full inset-0 rounded-2xl bg-gradient-to-br from-navy-light via-gold-light/20 to-navy-light overflow-hidden shadow-2xl">
              <Image 
                src="/assets/images/agency_hero_v2.png" 
                alt="BWP IMPACT Digital Agency Workspace" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105" 
                priority 
                sizes="(max-width: 1024px) 100vw, 50vw" 
              />
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-primary/10 rounded-full blur-3xl" />
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-primary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

    </section>
  );
}
