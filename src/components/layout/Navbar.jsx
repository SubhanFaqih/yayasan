'use client';

// File: src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'Program', href: '/program' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shadow-sm transition-colors duration-200 ${
            scrolled 
              ? 'bg-[#1A6B3A] group-hover:bg-[#2E9E5B]' 
              : 'bg-white/10 group-hover:bg-white/20 border border-white/20'
          }`}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              {/* Open book icon */}
              <path
                d="M2 6.5C2 5.4 2.9 4.5 4 4.5H10C11.1 4.5 12 5.4 12 6.5V18.5C12 17.4 11.1 16.5 10 16.5H4C2.9 16.5 2 17.4 2 18.5V6.5Z"
                fill="white"
                fillOpacity="0.9"
              />
              <path
                d="M22 6.5C22 5.4 21.1 4.5 20 4.5H14C12.9 4.5 12 5.4 12 6.5V18.5C12 17.4 12.9 16.5 14 16.5H20C21.1 16.5 22 17.4 22 18.5V6.5Z"
                fill="white"
                fillOpacity="0.6"
              />
            </svg>
          </div>
          <div className="leading-tight">
            <p className={`font-display font-bold text-base leading-none transition-colors duration-200 ${
              scrolled ? 'text-[#1A6B3A]' : 'text-white'
            }`}>
              Rumah Tahfidz
            </p>
            <p className={`font-body text-[10px] tracking-widest uppercase transition-colors duration-200 ${
              scrolled ? 'text-[#6B6B6B]' : 'text-white/70'
            }`}>
              An-Nur
            </p>
          </div>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg font-body text-sm font-medium transition-colors duration-200 group ${
                    scrolled
                      ? isActive
                        ? 'text-[#1A6B3A]'
                        : 'text-[#1C1C1C] hover:text-[#1A6B3A]'
                      : isActive
                        ? 'text-[#C9A84C]'
                        : 'text-white/95 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Active underline indicator */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-200 ${
                      scrolled ? 'bg-[#1A6B3A]' : 'bg-[#C9A84C]'
                    } ${
                      isActive
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── CTA Button ── */}
        <div className="hidden md:block">
          <Link
            href="/daftar"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body font-semibold transition-all duration-200 shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none ${
              scrolled
                ? 'bg-[#1A6B3A] text-white hover:bg-[#2E9E5B] focus-visible:ring-[#1A6B3A]'
                : 'bg-white text-[#1A6B3A] hover:bg-[#FDFAF4] focus-visible:ring-white'
            }`}
          >
            Daftar Sekarang
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          id="navbar-hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          className={`md:hidden p-2 rounded-lg transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none ${
            scrolled
              ? 'text-[#1A6B3A] hover:bg-[#EFF7F2] focus-visible:ring-[#1A6B3A]'
              : 'text-white hover:bg-white/10 focus-visible:ring-white'
          }`}
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu navigasi'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-[#E8E0D0] px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-4 py-3 rounded-xl font-body text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#EFF7F2] text-[#1A6B3A] font-semibold'
                    : 'text-[#1C1C1C] hover:bg-[#EFF7F2] hover:text-[#1A6B3A]'
                }`}
              >
                {isActive && (
                  <span className="mr-2 w-1.5 h-1.5 rounded-full bg-[#1A6B3A] inline-block" />
                )}
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/daftar"
              className="flex items-center justify-center w-full py-3 rounded-full bg-[#1A6B3A] text-white font-body text-sm font-semibold hover:bg-[#2E9E5B] transition-colors duration-200"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
