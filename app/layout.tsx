import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import CookieBanner from '@/components/ui/CookieBanner';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: { default: 'BWP IMPACT', template: '%s | BWP IMPACT' },
  description: 'The Next Evolution of Branding with Priyam — digital growth partner for MSMEs and ambitious brands.',
  metadataBase: new URL('https://bwpimpact.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <CookieBanner />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
