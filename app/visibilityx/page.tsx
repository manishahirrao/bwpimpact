import type { Metadata } from 'next';
import GlobalNav from '@/components/layout/GlobalNav';
import Footer from '@/components/layout/Footer';
import VisibilityXHero from '@/components/visibilityx/VisibilityXHero';
import VisibilityXFeatureSuite from '@/components/visibilityx/VisibilityXFeatureSuite';
import ComparisonTable from '@/components/visibilityx/ComparisonTable';
import HowItWorksSteps from '@/components/visibilityx/HowItWorksSteps';
import VisibilityXClosingCTA from '@/components/visibilityx/VisibilityXClosingCTA';

export const metadata: Metadata = {
  title: 'VisibilityX by BWP IMPACT — AI Podcast Production Starting ₹5,999',
  description: 'Deploy your Always-On AI Brand Avatar. AI-powered podcast production with multi-format delivery. No studio needed. Starting at ₹5,999/-.',
  openGraph: {
    title: 'VisibilityX by BWP IMPACT — AI Podcast Production Starting ₹5,999',
    description: 'Deploy your Always-On AI Brand Avatar. AI-powered podcast production with multi-format delivery. No studio needed.',
    type: 'website',
  },
};

export default function VisibilityXPage() {
  return (
    <main>
      <GlobalNav />
      <VisibilityXHero />
      <VisibilityXFeatureSuite />
      <ComparisonTable />
      <HowItWorksSteps />
      <VisibilityXClosingCTA />
      <Footer />
    </main>
  );
}
