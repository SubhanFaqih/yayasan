// File: src/components/sections/HeroSection.jsx
import Link from 'next/link';

/**
 * Reusable inner-page hero banner used by all sub-pages.
 * @param {string} title - Main heading text
 * @param {string} [subtitle] - Optional subtitle paragraph
 * @param {{ label: string, href: string }[]} [breadcrumbs] - Breadcrumb trail (auto-prepends Beranda)
 */
export default function HeroSection({ title, subtitle, breadcrumbs = [] }) {
  const allCrumbs = [{ label: 'Beranda', href: '/' }, ...breadcrumbs];

  return (
    <section className="bg-[#1A6B3A] relative overflow-hidden">
      {/* Arabesque pattern overlay */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="hero-section-pattern"
              x="0" y="0"
              width="60" height="60"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="30,3 37,21 56,21 42,33 47,52 30,41 13,52 18,33 4,21 23,21"
                fill="none"
                stroke="white"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-section-pattern)" />
        </svg>
      </div>

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Breadcrumb */}
        {allCrumbs.length > 1 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center flex-wrap gap-1.5">
              {allCrumbs.map((crumb, i) => {
                const isLast = i === allCrumbs.length - 1;
                return (
                  <li key={crumb.href} className="flex items-center gap-1.5">
                    {isLast ? (
                      <span className="font-body text-xs text-white/80" aria-current="page">
                        {crumb.label}
                      </span>
                    ) : (
                      <>
                        <Link
                          href={crumb.href}
                          className="font-body text-xs text-white/50 hover:text-white transition-colors duration-200"
                        >
                          {crumb.label}
                        </Link>
                        <svg
                          width="10" height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-white/30"
                          aria-hidden="true"
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>

        {/* Gold underline accent */}
        <div className="mt-3 h-1 w-16 bg-[#C9A84C] rounded-full" aria-hidden="true" />

        {/* Optional subtitle */}
        {subtitle && (
          <p className="mt-4 font-body text-white/70 text-base max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
