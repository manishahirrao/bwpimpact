import Image from 'next/image';

const partners = [
  { src: '/assets/logo/316063.jpg', alt: 'Partner' },
  { src: '/assets/logo/niroots.png', alt: 'Niroots' },
  { src: '/assets/logo/visvoi.png', alt: 'Visvoi' },
];

export default function PartnersSection() {
  return (
    <section className="bg-gray-50 py-14 border-t border-gray-100">
      <div className="max-w-container mx-auto px-6">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">
          Our Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="relative h-16 w-40 opacity-90 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
