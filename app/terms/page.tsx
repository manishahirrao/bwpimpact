import type { Metadata } from 'next';
import GlobalNav from '@/components/layout/GlobalNav';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'BWP IMPACT Terms of Service — terms governing our marketing consultation services.',
};

export default function TermsPage() {
  return (
    <main>
      <GlobalNav />
      <PageHero title="Terms of Service" breadcrumbs={[{ label: 'Home', href: '/' }]} />
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-gray max-w-none">
          <p className="text-sm text-gray-500">Last updated: January 2025</p>
          <h2>1. Services</h2>
          <p>BWP IMPACT provides digital marketing consultation, content creation, performance marketing, AI solutions, and VisibilityX AI podcast production services as described on this website.</p>
          <h2>2. Engagement</h2>
          <p>All service engagements commence upon signing of a separate Service Agreement and receipt of applicable payment. Free Digital Audits are provided as a no-obligation service.</p>
          <h2>3. Intellectual Property</h2>
          <p>All deliverables created specifically for your brand — content, creatives, AI avatars — become your property upon full payment. BWP IMPACT retains the right to showcase work in its portfolio unless expressly restricted in writing.</p>
          <h2>4. Confidentiality</h2>
          <p>BWP IMPACT treats all client business information as strictly confidential and will not disclose it to third parties without written consent.</p>
          <h2>5. Limitation of Liability</h2>
          <p>BWP IMPACT's liability is limited to the fees paid for the specific service giving rise to the claim. We do not guarantee specific results, as digital marketing outcomes depend on multiple factors beyond our control.</p>
          <h2>6. Governing Law</h2>
          <p>These terms are governed by the laws of Maharashtra, India. Any disputes shall be subject to the jurisdiction of courts in Pune, Maharashtra.</p>
          <h2>7. Contact</h2>
          <p>For terms-related queries, email <a href="mailto:brandingwithpriyam@gmail.com" className="text-navy-primary underline">brandingwithpriyam@gmail.com</a>.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
