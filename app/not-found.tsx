import Link from 'next/link';
import GlobalNav from '@/components/layout/GlobalNav';
import Footer from '@/components/layout/Footer';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main>
      <GlobalNav />
      <section className="min-h-screen flex items-center justify-center bg-white pt-16">
        <div className="text-center space-y-6 max-w-lg mx-auto px-6">
          <div className="text-[120px] font-extrabold text-gray-100 leading-none select-none">404</div>
          <h1 className="text-3xl font-bold text-gray-900 -mt-8">Page Not Found</h1>
          <p className="text-md text-gray-600">
            Looks like this page took an unplanned detour. Let&apos;s get you back on track.
          </p>
          <div className="pt-4">
            <Link href="/">
              <PrimaryButton variant="gold" icon={<ArrowLeft className="h-4 w-4" />} iconPosition="left">
                Back to Home
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
