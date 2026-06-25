import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Crumb { label: string; href: string }

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-navy-light to-white">
      <div className="max-w-container mx-auto px-6">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="h-4 w-4 text-gray-400" />}
                <Link href={crumb.href} className="hover:text-navy-primary transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-navy-primary font-medium">{title}</span>
          </nav>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">{title}</h1>
        {subtitle && <p className="mt-3 text-md text-gray-700 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
