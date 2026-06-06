// File: src/components/layout/Footer.jsx
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.01" fill="currentColor" strokeWidth="3"/>
    </svg>
  );
}
function YoutubeIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  );
}
function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );
}

const quickLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Program', href: '/program' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'FAQ', href: '/kontak#faq' },
];

const socialLinks = [
  {
    icon: InstagramIcon,
    href: 'https://instagram.com',
    label: 'Instagram Rumah Tahfidz An-Nur',
  },
  {
    icon: YoutubeIcon,
    href: 'https://youtube.com',
    label: 'YouTube Rumah Tahfidz An-Nur',
  },
  {
    icon: FacebookIcon,
    href: 'https://facebook.com',
    label: 'Facebook Rumah Tahfidz An-Nur',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A6B3A] text-white">
      {/* ── Decorative top border ── */}
      <div className="h-1 w-full bg-gradient-to-r from-[#C9A84C] via-[#f0d080] to-[#C9A84C]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* ── Column 1: Logo + Tagline ── */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center group-hover:bg-white/25 transition-colors duration-200">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2 6.5C2 5.4 2.9 4.5 4 4.5H10C11.1 4.5 12 5.4 12 6.5V18.5C12 17.4 11.1 16.5 10 16.5H4C2.9 16.5 2 17.4 2 18.5V6.5Z" fill="white" fillOpacity="0.9"/>
                  <path d="M22 6.5C22 5.4 21.1 4.5 20 4.5H14C12.9 4.5 12 5.4 12 6.5V18.5C12 17.4 12.9 16.5 14 16.5H20C21.1 16.5 22 17.4 22 18.5V6.5Z" fill="white" fillOpacity="0.6"/>
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg leading-none">Rumah Tahfidz</p>
                <p className="font-body text-white/60 text-xs tracking-widest uppercase">An-Nur</p>
              </div>
            </Link>

            <p className="font-body text-white/80 text-sm leading-relaxed max-w-xs">
              Mencetak Generasi Qur'ani sejak dini. Bersama kami, ananda belajar Al-Qur'an dengan metode yang menyenangkan dan penuh kasih sayang.
            </p>

            {/* Jam Operasional */}
            <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
              <Clock size={16} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-body font-semibold text-white text-xs mb-1">Jam Operasional</p>
                <p className="font-body text-white/75 text-xs">Senin – Sabtu</p>
                <p className="font-body text-white/75 text-xs">07.00 – 17.00 WIB</p>
              </div>
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div className="space-y-5">
            <h3 className="font-display text-lg font-bold text-[#C9A84C]">
              Tautan Cepat
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-white/80 text-sm hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/50 group-hover:bg-[#C9A84C] transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact Info ── */}
          <div className="space-y-5">
            <h3 className="font-display text-lg font-bold text-[#C9A84C]">
              Hubungi Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="font-body text-white/60 text-xs mb-0.5">WhatsApp</p>
                  <a
                    href="https://wa.me/6281200000000"
                    className="font-body text-white text-sm hover:text-[#C9A84C] transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    0812-XXXX-XXXX
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="font-body text-white/60 text-xs mb-0.5">Email</p>
                  <a
                    href="mailto:info@rumahtahfidz-annur.id"
                    className="font-body text-white text-sm hover:text-[#C9A84C] transition-colors duration-200 break-all"
                  >
                    info@rumahtahfidz-annur.id
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="font-body text-white/60 text-xs mb-0.5">Alamat</p>
                  <p className="font-body text-white text-sm leading-relaxed">
                    Jl. Margonda Raya No. XX,<br />Depok, Jawa Barat
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/50 text-xs text-center sm:text-left">
            © 2026 Yayasan Pendidikan Islam An-Nur. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C9A84C] flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
