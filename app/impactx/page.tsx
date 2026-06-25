import type { Metadata } from 'next';
import GlobalNav from '@/components/layout/GlobalNav';
import Footer from '@/components/layout/Footer';
import ImpactXHero from '@/components/impactx/ImpactXHero';
import ImpactXFeatureSuite from '@/components/impactx/ImpactXFeatureSuite';
import ComparisonTable from '@/components/impactx/ComparisonTable';
import HowItWorksSteps from '@/components/impactx/HowItWorksSteps';
import ImpactXClosingCTA from '@/components/impactx/ImpactXClosingCTA';

export const metadata: Metadata = {
  title: 'ImpactX by BWP IMPACT — AI Podcast Production Starting ₹5,999',
  description: 'Deploy your Always-On AI Brand Avatar. AI-powered podcast production with multi-format delivery. No studio needed. Starting at ₹5,999/-.',
  openGraph: {
    title: 'ImpactX by BWP IMPACT — AI Podcast Production Starting ₹5,999',
    description: 'Deploy your Always-On AI Brand Avatar. AI-powered podcast production with multi-format delivery. No studio needed.',
    type: 'website',
  },
};

export default function ImpactXPage() {
  return (
    <main>
      <GlobalNav />
      <ImpactXHero />
      <ImpactXFeatureSuite />
      <ComparisonTable />
      <HowItWorksSteps />
      <ImpactXClosingCTA />
      <Footer />
    </main>
  );
}
