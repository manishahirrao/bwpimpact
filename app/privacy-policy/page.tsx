import type { Metadata } from 'next';
import GlobalNav from '@/components/layout/GlobalNav';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'BWP IMPACT Privacy Policy — how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <GlobalNav />
      <PageHero title="Privacy Policy" breadcrumbs={[{ label: 'Home', href: '/' }]} />
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-gray max-w-none">
          <p className="text-sm text-gray-500">Last updated: January 2025</p>
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide when filling out our contact forms, including name, email, phone number, business name, and social media URLs. We also collect analytics data through Google Analytics 4.</p>
          <h2>2. How We Use Your Information</h2>
          <p>We use your information to respond to your enquiries, send you requested audit reports, and — with your consent — send you marketing communications about BWP IMPACT services.</p>
          <h2>3. Email Communications</h2>
          <p>Form submissions are processed via Resend (resend.com) for reliable email delivery. We store form data securely and do not sell or share it with third parties.</p>
          <h2>4. Analytics</h2>
          <p>We use Google Analytics 4 to understand how visitors use our site. This data is anonymised and only loaded with your cookie consent.</p>
          <h2>5. Data Retention</h2>
          <p>Contact form data is retained for 24 months. You may request deletion of your data at any time by emailing hello@bwpimpact.com.</p>
          <h2>6. Your Rights</h2>
          <p>Under the Information Technology Act 2000 (India) and applicable privacy laws, you have the right to access, correct, and request deletion of your personal data.</p>
          <h2>7. Contact</h2>
          <p>For privacy-related queries, contact us at <a href="mailto:hello@bwpimpact.com" className="text-navy-primary underline">hello@bwpimpact.com</a>.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
