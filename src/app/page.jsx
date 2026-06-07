'use client';
// File: src/app/page.jsx
import Link from 'next/link';
import { useEffect, useState } from 'react';

// export const metadata = {
//   title: 'Beranda — Mencetak Generasi Qur\'ani Sejak Dini',
//   description:
//     'Rumah Tahfidz An-Nur hadir sebagai mitra Ayah Bunda untuk membentengi ananda dengan cahaya Al-Qur\'an. Program Pra-Tahsin, Tahsin & Tajwid, dan Tahfidz Cilik di Depok.',
// };

/* ─────────────────────────────────────────────
   INLINE SVG HELPERS
───────────────────────────────────────────── */

function IslamicStarDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-2" aria-hidden="true">
      <div className="h-px flex-1 bg-[#C9A84C]/30" />
      <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
        {/* 8-pointed star */}
        <polygon
          points="50,5 61,35 93,35 68,57 79,91 50,70 21,91 32,57 7,35 39,35"
          fill="#C9A84C"
          fillOpacity="0.35"
        />
        <polygon
          points="50,15 59,40 85,40 64,56 72,83 50,67 28,83 36,56 15,40 41,40"
          fill="#C9A84C"
          fillOpacity="0.2"
        />
      </svg>
      <div className="h-px flex-1 bg-[#C9A84C]/30" />
    </div>
  );
}

function ArabesqueBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="arabesque" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="white" strokeWidth="0.8" opacity="0.08">
            <polygon points="40,4 52,28 78,28 58,44 66,70 40,54 14,70 22,44 2,28 28,28" />
            <circle cx="40" cy="40" r="18" />
            <line x1="40" y1="0" x2="40" y2="80" />
            <line x1="0" y1="40" x2="80" y2="40" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#arabesque)" />
    </svg>
  );
}

function ScrollDownArrow() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" aria-hidden="true">
      <span className="text-white/50 text-xs font-body tracking-widest uppercase">Scroll</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const stats = [
  { value: '500+', label: 'Santri Aktif' },
  { value: '15', label: 'Asatidz Berpengalaman' },
  { value: '8 Tahun', label: 'Berdiri' },
  { value: '3', label: 'Cabang Depok' },
];

const keunggulan = [
  {
    icon: '📖',
    title: 'Metode Menyenangkan',
    desc: 'Belajar Al-Qur\'an tanpa rasa bosan. Kami menggunakan pendekatan psikologi anak agar ananda rindu untuk terus belajar.',
  },
  {
    icon: '🤲',
    title: 'Asatidz Berdedikasi',
    desc: 'Dibimbing langsung oleh pengajar yang sabar, tersertifikasi, dan berpengalaman dalam dunia pendidikan anak.',
  },
  {
    icon: '✨',
    title: 'Fokus pada Adab',
    desc: 'Bukan sekadar fasih membaca, kami juga menanamkan adab islami harian yang akan menjadi fondasi akhlak ananda di rumah.',
  },
];

const programs = [
  {
    badge: 'Usia 4–6 Tahun',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    title: 'Pra-Tahsin',
    desc: 'Bermain sambil mengenal huruf Hijaiyah. Menumbuhkan rasa cinta melalui metode berkisah dan nasyid edukatif.',
    href: '/program#pra-tahsin',
  },
  {
    badge: 'Usia 7–12 Tahun',
    badgeColor: 'bg-blue-100 text-blue-800',
    title: 'Tahsin & Tajwid',
    desc: 'Fokus memperbaiki makharijul huruf dan hukum bacaan agar tartil sesuai tuntunan Rasulullah ﷺ.',
    href: '/program#tahsin',
  },
  {
    badge: 'Program Unggulan',
    badgeColor: 'bg-amber-100 text-amber-800',
    title: 'Tahfidz Cilik',
    desc: 'Bimbingan hafalan Juz 30 dengan metode muraja\'ah rutin yang menyenangkan tanpa membebani anak.',
    href: '/program#tahfidz',
  },
];

export default function HomePage() {
const testimoni = [
  {
    name: "Bunda Aisyah",
    label: "Wali Santri",
    avatar: "https://i.pravatar.cc/150?img=47",
    quote: "Alhamdulillah, anak saya yang tadinya susah diajak ngaji, sekarang malah yang ngajak ke TPA duluan!"
  },
  {
    name: "Ayah Rizki",
    label: "Wali Santri",
    avatar: "https://i.pravatar.cc/150?img=12",
    quote: "Gurunya sabar sekali, anak saya jadi lebih percaya diri membaca Al-Qur'an."
  },
  {
    name: "Bunda Fatimah",
    label: "Wali Santri",
    avatar: "https://i.pravatar.cc/150?img=44",
    quote: "Programnya terstruktur, progress ananda bisa dipantau tiap bulan. Sangat profesional."
  }
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Logika slider otomatis setiap 3 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true); // Memulai efek fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimoni.length);
        setFade(false); // Mengembalikan opasitas (fade in)
      }, 300); // Waktu transisi fade
    }, 3000);

    return () => clearInterval(timer);
  }, [testimoni.length]);

  const currentTestimonial = testimoni[currentIndex];
  // Data mock (sesuaikan dengan data programs Anda)
  const programs = [
    { title: 'Pra-Tahsin', desc: 'Bermain sambil mengenal huruf Hijaiyah. Menumbuhkan rasa cinta melalui metode berkisah (sirah) dan nasyid edukatif.', href: '/program#pra-tahsin' },
    { title: 'Tahsin & Tajwid', desc: 'Fokus memperbaiki makharijul huruf dan hukum bacaan agar tartil sesuai tuntunan.', href: '/program#tahsin' },
    { title: 'Tahfidz Cilik', desc: 'Bimbingan hafalan Juz 30 dengan metode muraja\'ah rutin yang menyenangkan tanpa membebani anak.', href: '/program#tahfidz' },
  ];

  // Fungsi untuk merender ikon berbeda berdasarkan index
  const renderIcon = (index) => {
    switch (index) {
      case 0:
        // Ikon Layers
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 12 12 17 22 12"></polyline>
            <polyline points="2 17 12 22 22 17"></polyline>
          </svg>
        );
      case 1:
        // Ikon Puzzle
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19.439 7.85c-.049.322-.059.648-.029.975.112 1.234 1.169 2.15 2.4 2.15.176 0 .354-.017.53-.051v3.911c-.176-.034-.354-.051-.53-.051-1.42 0-2.614 1.05-2.82 2.45-.03.197-.03.397 0 .594.206 1.4 1.4 2.45 2.82 2.45.176 0 .354-.017.53-.051v.24c0 1.05-.85 1.9-1.9 1.9h-2.22c-.035-.18-.053-.364-.053-.55 0-1.42 1.05-2.614 2.45-2.82.197-.03.397-.03.594 0 1.4.206 2.45 1.4 2.45 2.82 0 .186-.018.37-.053.55h-3.91c.035-.18.053-.364.053-.55 0-1.42-1.05-2.614-2.45-2.82-.197-.03-.397-.03-.594 0-1.23.112-2.146 1.168-2.146 2.4 0 .186.018.37.053.55H6.9c-1.05 0-1.9-.85-1.9-1.9v-2.22c.18.035.364.053.55.053 1.42 0 2.614-1.05 2.82-2.45.03-.197.03-.397 0-.594-.206-1.4-1.4-2.45-2.82-2.45-.186 0-.37.018-.55.053v-3.91c.18.035.364.053.55.053 1.42 0 2.614-1.05 2.82-2.45.03-.197.03-.397 0-.594-.206-1.4-1.4-2.45-2.82-2.45-.186 0-.37.018-.55.053V5.9c0-1.05.85-1.9 1.9-1.9h2.22c.035.18.053.364.053.55 0 1.42-1.05 2.614-2.45 2.82-.197.03-.397.03-.594 0-1.23-.112-2.146-1.168-2.146-2.4 0-.186-.018-.37-.053-.55h3.91c-.035.18-.053.364-.053.55 0 1.232.914 2.288 2.146 2.4z"></path>
          </svg>
        );
      default:
        // Ikon Pie Chart
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
          </svg>
        );
    }
  };
  const keunggulan = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Metode Menyenangkan',
      desc: "Belajar Al-Qur'an tanpa rasa bosan. Kami menggunakan pendekatan psikologi anak agar ananda rindu untuk terus belajar."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Asatidz Berdedikasi',
      desc: "Dibimbing langsung oleh pengajar yang sabar, tersertifikasi, dan berpengalaman dalam dunia pendidikan anak."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: 'Fokus pada Adab',
      desc: "Bukan sekadar fasih membaca, kami juga menanamkan adab islami harian yang akan menjadi fondasi akhlak ananda di rumah."
    }
  ];
  return (
    <>
      {/* ══════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0F4526]">
        {/* Layered gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #1A6B3A 0%, #0F4526 60%, #083318 100%)',
          }}
        />

        {/* Arabesque pattern overlay */}
        <ArabesqueBackground />

        {/* Gold bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto py-24">
          {/* Bismillah badge */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="px-6 py-2 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 backdrop-blur-sm">
              <span
                className="font-arabic text-2xl text-[#C9A84C] leading-none"
                dir="rtl"
                lang="ar"
              >
                بِسْمِ اللَّهِ
              </span>
            </div>
          </div>

          {/* H1 Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Mencetak Generasi Qur'ani,
            <br />
            <span className="text-[#C9A84C]">Cerdas,</span> dan Berakhlak Mulia.
          </h1>

          {/* Subheadline */}
          <p className="font-body text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Investasi akhirat terbaik Ayah Bunda dimulai dari sini. Mari bersama-sama
            menanamkan kecintaan ananda pada Al-Qur'an sejak usia dini dalam lingkungan
            yang aman, ceria, dan penuh kasih sayang.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/daftar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#1A6B3A] font-body font-bold text-base hover:bg-[#FDFAF4] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Daftar Sekarang
            </Link>
            <Link
              href="/program"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-white border-2 border-white/70 font-body font-semibold text-base hover:bg-white/10 hover:border-white transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Lihat Program
            </Link>
          </div>

          {/* Trust badge */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {['Terdaftar Kemenag', '8 Tahun Berpengalaman', '500+ Santri'].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-white/60 text-xs font-body">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>

        <ScrollDownArrow />
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — STATS BAR
      ══════════════════════════════════════════ */}
      <section className="bg-white border-y border-[#E8E0D0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center group">
                <p className="font-display text-4xl font-bold text-[#1A6B3A] group-hover:text-[#2E9E5B] transition-colors duration-200">
                  {value}
                </p>
                <p className="font-body text-sm text-[#6B6B6B] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — MENGAPA MEMILIH KAMI
      ══════════════════════════════════════════ */}
     <section className="bg-[#F9F9F9] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="uppercase text-[#C9A84C] text-xs tracking-[0.2em] font-semibold mb-4 block">
            Keunggulan Kami
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-6">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Kami hadir dengan pendekatan yang berbeda — hangat, terstruktur, dan penuh cinta.
          </p>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keunggulan.map(({ icon, title, desc }) => (
            <article
              key={title}
              className="group bg-white p-8 lg:p-10 border border-gray-200 transition-all duration-300 hover:border-gray-900 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon Box */}
              <div className="w-14 h-14 rounded bg-gray-100 text-gray-600 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#1C1C1C] group-hover:text-white">
                {icon}
              </div>
              
              {/* Content */}
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
      {/* ══════════════════════════════════════════
          SECTION 4 — SEKILAS PROGRAM
      ══════════════════════════════════════════ */}
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight">
            Program Unggulan<br />Kami
          </h2>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {programs.map(({ title, desc, href }, index) => {
            // Menjadikan card tengah (index 1) sebagai mode "aktif/fokus" seperti di gambar
            const isActive = index === 1;

            return (
              <Link key={title} href={href} className="group outline-none">
                <article
                  className={`h-full bg-white flex flex-col p-8 lg:p-12 transition-all duration-300
                    ${isActive 
                      ? 'border border-gray-900 shadow-md transform md:-translate-y-2' 
                      : 'border border-gray-100 shadow-sm hover:border-gray-300 hover:shadow-md'
                    }
                  `}
                >
                  {/* Icon Box */}
                  <div 
                    className={`w-16 h-16 rounded-md flex items-center justify-center mb-8 transition-colors
                      ${isActive ? 'bg-[#1C1C1C] text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'}
                    `}
                  >
                    {renderIcon(index)}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl text-gray-900 mb-6">
                    {title}
                  </h3>

                  {/* Step Number & Divider Line */}
                  <div className="flex items-center w-full mb-6">
                    <span 
                      className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                        ${isActive 
                          ? 'bg-[#1C1C1C] text-white' 
                          : 'border border-gray-200 text-gray-500 group-hover:border-gray-400'
                        }
                      `}
                    >
                      0{index + 1}
                    </span>
                    <hr className={`flex-grow ml-4 border-t transition-colors ${isActive ? 'border-gray-800' : 'border-gray-200 group-hover:border-gray-300'}`} />
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {desc}
                  </p>
                </article>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/program"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#1C1C1C] text-white font-sans font-medium text-sm hover:bg-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Lihat Semua Program
          </Link>
        </div>

      </div>
    </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — TESTIMONI
      ══════════════════════════════════════════ */}
    <section className="bg-[#F9F9F9] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Kolom Kiri: Teks & Slider Testimoni */}
        <div className="flex flex-col justify-center">
          
          {/* ========================================= */}
          {/* BAGIAN FIX: Judul tidak akan ikut berubah */}
          {/* ========================================= */}
          <div className="mb-10">
            <span className="uppercase text-[#C9A84C] text-xs tracking-[0.2em] font-semibold mb-4 block">
              Testimonial
            </span>
            <h2 className="text-4xl sm:text-5xl text-gray-900 font-serif mb-2">
              Testimony Wali Santri
            </h2>
          </div>

          {/* ========================================= */}
          {/* BAGIAN SLIDER: Konten yang berganti otomatis */}
          {/* ========================================= */}
          {/* min-h-[280px] mencegah layout lompat jika teks panjangnya berbeda */}
          <div className="min-h-[280px] w-full">
            <div 
              className={`transition-opacity duration-300 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}
            >
              {/* Profil Pelanggan */}
              <div className="flex items-center gap-5 mb-6">
                <img 
                  src={currentTestimonial.avatar} 
                  alt={currentTestimonial.name} 
                  className="w-16 h-16 rounded-full object-cover shadow-sm"
                />
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-bold text-gray-900 text-base">
                      {currentTestimonial.name}
                    </h4>
                    <span className="text-gray-400">—</span>
                    {/* Bintang Rating Hitam */}
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#1C1C1C">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {currentTestimonial.label}
                  </p>
                </div>
              </div>

              {/* Garis Pemisah */}
              <hr className="border-gray-200 mb-6 w-full" />

              {/* Kutipan */}
              <blockquote className="text-gray-500 font-serif italic text-lg leading-loose pr-4">
                {currentTestimonial.quote}
              </blockquote>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Gambar & Play Button */}
        <div className="relative w-full h-[400px] lg:h-[600px] rounded-sm overflow-hidden group cursor-pointer">
<img 
  src="https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=1000" 
  alt="Kegiatan Membaca Al-Qur'an" 
  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
/>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
              <svg 
                className="w-8 h-8 text-white ml-2" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>

      {/* ══════════════════════════════════════════
          SECTION 6 — CTA BANNER
      ══════════════════════════════════════════ */}
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Ayat Al-Qur'an (Aksen Emas) */}
        <p className="text-2xl md:text-3xl text-[#C9A84C] mb-6 font-arabic" dir="rtl" lang="ar">
          ﴿ وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ ﴾
        </p>

        {/* Subtitle */}
        <span className="uppercase text-[#C9A84C] text-xs tracking-[0.2em] font-semibold mb-4 block">
          Mari Bergabung
        </span>

        {/* Heading */}
        <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-6">
          Siap Memulai Perjalanan<br className="hidden sm:block" /> Qur'ani Ananda?
        </h2>

        {/* Deskripsi */}
        <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          Jangan tunda lagi. Setiap hari yang terlewat adalah kesempatan emas yang berlalu.
        </p>

        {/* Tombol CTA */}
        <Link
          href="/daftar"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#1C1C1C] text-white font-sans font-medium text-sm hover:bg-black transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          Daftar Sekarang — Gratis Konsultasi
        </Link>

        {/* Teks Tambahan di Bawah Tombol */}
        <p className="text-gray-400 text-xs mt-6 tracking-wide">
          Respon cepat &nbsp;&middot;&nbsp; Tanpa syarat berat &nbsp;&middot;&nbsp; Insya Allah berkah
        </p>
        
      </div>
    </section>
    </>
  );
}
