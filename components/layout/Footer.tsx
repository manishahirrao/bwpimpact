import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Trophy, Handshake, Star, Heart } from 'lucide-react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { WHATSAPP_BUSINESS_NUMBER } from '@/lib/whatsapp';

const footerLinks = {
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/about-services', label: 'About Us / Services' },
    { href: '/visibilityx', label: 'VisibilityX' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
  social: [
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/bwpimpact', label: 'Instagram' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/company/bwpimpact', label: 'LinkedIn' },
    { name: 'Facebook', icon: FaFacebook, href: 'https://facebook.com/bwpimpact', label: 'Facebook' },
  ],
};

const whatsappFooterHref = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent('Hi BWP IMPACT! 👋 I have a question.')}`;

export default function Footer() {
  return (
    <footer className="bg-[#0D1B4B] text-white">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand Column */}
          <div className="space-y-4">
            {/* Footer logo */}
            <div className="relative h-10 w-[180px]">
              <Image src="/assets/logo/logo.png" alt="BWP IMPACT" fill className="object-contain object-left brightness-0 invert" sizes="180px" />
            </div>
            <p className="text-[15px] text-gray-300 leading-[1.6]">
              Engineering high-converting social media ecosystems and AI-powered solutions
              for MSMEs, corporate brands, and ambitious entrepreneurs across India.
            </p>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-xs text-gray-300">
                <Trophy className="w-3.5 h-3.5 text-gold-primary" /> Maharashtra Udyog Gaurav
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-xs text-gray-300">
                <Handshake className="w-3.5 h-3.5 text-gold-primary" /> BNI Member
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-xs text-gray-300">
                <Star className="w-3.5 h-3.5 text-gold-primary" /> 8+ Years Excellence
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            {/* Column header — spec: text-sm (13px), uppercase, tracking-widest */}
            <h3 className="text-[13px] font-semibold uppercase tracking-widest text-gray-400">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-[13px] font-semibold uppercase tracking-widest text-gray-400">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:brandingwithpriyam@gmail.com"
                className="flex items-center gap-3 text-[15px] text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                brandingwithpriyam@gmail.com
              </a>

              <a
                href="tel:+917304601580"
                className="flex items-center gap-3 text-[15px] text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                +91 7304601580
              </a>

              {/* WhatsApp Link */}
              <a
                href={whatsappFooterHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[15px] text-gray-300 hover:text-white transition-colors duration-200"
              >
                {/* WhatsApp icon (inline SVG — no external dep) */}
                <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0 fill-current" aria-hidden="true">
                  <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.75.469 3.478 1.36 4.992L2 22l5.162-1.328A9.955 9.955 0 0012.001 22C17.523 22 22 17.522 22 12S17.523 2 12.001 2zm0 18.182a8.178 8.178 0 01-4.172-1.143l-.299-.178-3.063.79.812-2.963-.196-.308A8.147 8.147 0 013.818 12c0-4.513 3.671-8.182 8.183-8.182S20.182 7.487 20.182 12 16.512 20.182 12.001 20.182zm4.531-6.163c-.249-.124-1.472-.725-1.7-.809-.228-.083-.393-.124-.558.125-.165.248-.638.808-.782.976-.145.166-.29.186-.538.062-.25-.124-1.049-.387-1.997-1.233-.738-.658-1.237-1.471-1.382-1.72-.145-.249-.015-.383.109-.507.112-.111.249-.29.373-.435.125-.145.166-.249.248-.415.083-.166.042-.311-.021-.435-.062-.125-.558-1.343-.765-1.839-.2-.483-.406-.417-.558-.425l-.475-.008c-.166 0-.435.062-.662.311-.228.248-.869.849-.869 2.07s.89 2.401 1.014 2.567c.125.166 1.754 2.679 4.249 3.755.594.256 1.058.409 1.42.524.597.19 1.14.163 1.569.099.479-.071 1.473-.602 1.681-1.184.207-.58.207-1.078.145-1.184-.062-.104-.228-.166-.476-.29z" />
                </svg>
                WhatsApp Business
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 pt-2">
              {footerLinks.social.map(({ name, icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 opacity-70 hover:opacity-100"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-gray-400 text-center md:text-left">
            © 2026 BWP IMPACT. All rights reserved. Formerly Branding with Priyam.
          </p>

        </div>
      </div>
    </footer>
  );
}
