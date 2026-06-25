import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const footerLinks = {
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/about-services', label: 'About Us + Services' },
    { href: '/impactx', label: 'ImpactX' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
  social: [
    { name: 'Instagram', href: '#', label: 'Instagram' },
    { name: 'LinkedIn', href: '#', label: 'LinkedIn' },
    { name: 'Facebook', href: '#', label: 'Facebook' },
  ],
};

/**
 * Footer Component
 * 3-column layout with brand info, navigation, and connect links
 * Dark Navy background following BWP IMPACT design system
 */
export default function Footer() {
  return (
    <footer className="bg-[#0D1B4B] text-white">
      <div className="max-w-container mx-auto px-6 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">BWP IMPACT</div>
            <p className="text-[11px] italic text-gray-400 font-light">
              The Next Evolution of Branding with Priyam
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Engineering high-converting social media ecosystems and AI-powered solutions 
              for MSMEs, corporate brands, and ambitious entrepreneurs.
            </p>
            {/* Trust Icons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-4 py-2 bg-white/10 rounded-full text-xs">
                Maharashtra Udyog Gaurav
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-full text-xs">
                BNI Member
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@bwpimpact.com"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors duration-base"
              >
                <Mail className="h-4 w-4" />
                hello@bwpimpact.com
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors duration-base"
              >
                <Phone className="h-4 w-4" />
                WhatsApp Business
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {footerLinks.social.map(({ name, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity duration-base text-sm"
                  aria-label={label}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400 text-center">
            © 2025 BWP IMPACT. All rights reserved. Formerly Branding with Priyam.
          </p>
        </div>
      </div>
    </footer>
  );
}
