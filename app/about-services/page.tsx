import type { Metadata } from 'next';
import GlobalNav from '@/components/layout/GlobalNav';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import AboutLeadershipSection from '@/components/about/AboutLeadershipSection';
import ServicesTabLayout from '@/components/about/ServicesTabLayout';
import NicheExpertiseGrid from '@/components/about/NicheExpertiseGrid';
import { PersonJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'About Priyam Talpade Mandrekar & BWP IMPACT Services',
  description: 'Meet the strategist behind BWP IMPACT. Performance marketing, AI automation, multimedia production for India\'s growing businesses.',
  openGraph: {
    title: 'About Priyam Talpade Mandrekar & BWP IMPACT Services',
    description: 'Meet the strategist behind BWP IMPACT. Performance marketing, AI automation, multimedia production for India\'s growing businesses.',
    type: 'website',
  },
};

export default function AboutServicesPage() {
  return (
    <main>
      <PersonJsonLd />
      <GlobalNav />

      <PageHero
        title="About BWP IMPACT"
        subtitle="Meet the strategist, explore the methodology, and discover the service ecosystem built to engineer your brand's next chapter."
        breadcrumbs={[{ label: 'Home', href: '/' }]}
      />

      <AboutLeadershipSection />
      <ServicesTabLayout />
      <NicheExpertiseGrid />

      <Footer />
    </main>
  );
}
