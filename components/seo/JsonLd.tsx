/**
 * JSON-LD Structured Data Components
 * Schema.org markup for SEO — LocalBusiness + Person
 */

interface LocalBusinessJsonLdProps {
  siteUrl?: string;
}

export function LocalBusinessJsonLd({ siteUrl = 'https://bwpimpact.com' }: LocalBusinessJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#business`,
    name: 'BWP IMPACT',
    alternateName: 'Branding with Priyam',
    description:
      'Digital marketing consultancy specialising in social media ecosystems, performance marketing, AI solutions, and brand growth for MSMEs and corporate brands across India.',
    url: siteUrl,
    telephone: '+91-XXXXXXXXXX',
    email: 'hello@bwpimpact.com',
    foundingDate: '2016',
    founder: {
      '@type': 'Person',
      name: 'Priyam Talpade Mandrekar',
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    award: [
      'Maharashtra Udyog Gaurav',
      'Inspiring Woman Entrepreneur',
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'BNI',
    },
    sameAs: [
      'https://instagram.com/bwpimpact',
      'https://linkedin.com/company/bwpimpact',
      'https://facebook.com/bwpimpact',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'BWP IMPACT Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance Marketing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Video Production (ImpactX)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Influencer Marketing' } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface PersonJsonLdProps {
  siteUrl?: string;
}

export function PersonJsonLd({ siteUrl = 'https://bwpimpact.com' }: PersonJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#priyam`,
    name: 'Priyam Talpade Mandrekar',
    jobTitle: 'Founder & Chief Marketing Strategist',
    worksFor: {
      '@type': 'Organization',
      name: 'BWP IMPACT',
      url: siteUrl,
    },
    description:
      'Marketing strategist with 8+ years of experience. PGDM in Marketing Management. Background in Nielsen market research consulting. Certified in AI-driven digital marketing.',
    url: `${siteUrl}/about-services`,
    sameAs: [
      'https://linkedin.com/in/priyam-talpade-mandrekar',
      'https://instagram.com/priyamtalpade',
    ],
    award: [
      'Maharashtra Udyog Gaurav',
      'Inspiring Woman Entrepreneur',
    ],
    knowsAbout: [
      'Social Media Marketing',
      'Performance Marketing',
      'AI Marketing',
      'Lead Generation',
      'Brand Strategy',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
