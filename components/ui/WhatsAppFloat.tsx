'use client';

import { WHATSAPP_BUSINESS_NUMBER } from '@/lib/whatsapp';

/**
 * WhatsApp Floating Button
 * Always-visible bottom-right bubble per design spec D-04
 * Opens WhatsApp chat directly
 */
export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(
    'Hi BWP IMPACT! I just visited your website and would like to know more about your services.'
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed bottom-6 right-6 z-[90]
        w-14 h-14 rounded-full
        bg-[#25D366] hover:bg-[#20ba5a]
        flex items-center justify-center
        shadow-xl hover:shadow-2xl
        transition-all duration-200
        hover:scale-110 active:scale-95
        group
      "
    >
      {/* WhatsApp SVG icon */}
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.003 2.667C8.639 2.667 2.667 8.639 2.667 16c0 2.333.625 4.637 1.813 6.656L2.667 29.333l6.875-1.776A13.282 13.282 0 0016.003 29.333c7.361 0 13.33-5.971 13.33-13.333 0-7.361-5.969-13.333-13.33-13.333zm0 24.266a11.018 11.018 0 01-5.56-1.501l-.399-.237-4.079 1.053 1.079-3.948-.26-.413A10.942 10.942 0 015.001 16c0-6.072 4.93-11.002 11.002-11.002 6.07 0 11 4.93 11 11.002 0 6.069-4.93 10.933-11 10.933zm6.042-8.218c-.332-.166-1.963-.967-2.268-1.079-.303-.111-.524-.166-.744.167-.219.333-.85 1.079-1.042 1.301-.193.221-.387.248-.718.083-.332-.166-1.4-.516-2.664-1.643-.986-.879-1.651-1.964-1.845-2.297-.193-.333-.02-.512.145-.678.149-.149.332-.387.498-.58.166-.193.221-.332.332-.554.111-.221.055-.415-.028-.58-.083-.166-.744-1.793-.1019-2.457-.268-.644-.54-.554-.744-.564l-.633-.011c-.221 0-.58.083-.884.415-.303.332-1.158 1.131-1.158 2.762 0 1.631 1.186 3.208 1.351 3.43.166.221 2.331 3.562 5.652 4.994.79.341 1.407.545 1.888.697.793.252 1.516.217 2.086.131.636-.094 1.963-.803 2.238-1.578.277-.773.277-1.435.193-1.578-.083-.138-.303-.221-.634-.388z" />
      </svg>

      {/* Tooltip */}
      <span className="
        absolute right-16 top-1/2 -translate-y-1/2
        bg-gray-900 text-white text-xs font-medium
        px-3 py-1.5 rounded-lg whitespace-nowrap
        opacity-0 group-hover:opacity-100
        transition-opacity duration-200
        pointer-events-none
      ">
        Chat with us
      </span>
    </a>
  );
}
