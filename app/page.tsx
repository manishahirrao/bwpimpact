import type { Metadata } from 'next';
import GlobalNav from '@/components/layout/GlobalNav';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import TrustRibbon from '@/components/home/TrustRibbon';
import BrandEvolutionSection from '@/components/home/BrandEvolutionSection';
import CorePillarsSection from '@/components/home/CorePillarsSection';
import LeadCaptureBanner from '@/components/home/LeadCaptureBanner';
import { LocalBusinessJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'BWP IMPACT — Your Zero to Hero Digital Growth Partner',
  description: 'High-converting social media, lead generation & AI solutions for MSMEs and brands. Built on 8+ years of Branding with Priyam\'s legacy.',
  openGraph: {
    title: 'BWP IMPACT — Your Zero to Hero Digital Growth Partner',
    description: 'High-converting social media, lead generation & AI solutions for MSMEs and brands. Built on 8+ years of Branding with Priyam\'s legacy.',
    type: 'website',
    url: 'https://bwpimpact.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BWP IMPACT — Your Zero to Hero Digital Growth Partner',
    description: 'High-converting social media, lead generation & AI solutions for MSMEs and brands.',
  },
};

export default function HomePage() {
  return (
    <main>
      <LocalBusinessJsonLd />
      <GlobalNav />
      <HeroSection />
      <TrustRibbon />
      <BrandEvolutionSection />
      <CorePillarsSection />
      <LeadCaptureBanner />
      <Footer />
    </main>
  );
}
