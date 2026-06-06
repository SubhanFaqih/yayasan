// File: src/app/tentang-kami/page.jsx
import Link from 'next/link';

export const metadata = {
  title: 'Tentang Kami',
  description:
    'Kenali lebih dalam Yayasan Pendidikan Islam An-Nur — sejarah, visi misi, legalitas, dan tim asatidz berpengalaman kami di Depok, Jawa Barat.',
};

/* ─── Decorative Helpers ─── */

function PageHero({ title, breadcrumb }) {
  return (
    <section className="bg-[#1A6B3A] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,3 37,21 56,21 42,33 47,52 30,41 13,52 18,33 4,21 23,21" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
      
      {/* Nilai padding vertical (py) diperbesar di baris ini */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="flex items-center gap-2 text-white/50 text-xs font-body mb-3">
          <Link href="/" className="hover:text-white transition-colors duration-200">Beranda</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
          <span className="text-white/80">{breadcrumb}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">{title}</h1>
        <div className="mt-3 h-1 w-16 bg-[#C9A84C] rounded-full" />
      </div>
    </section>
  );
}

function IslamicOctagramSVG() {
  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-xs opacity-80" aria-hidden="true">
      <defs>
        <linearGradient id="octGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A6B3A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {/* Outer 8-pointed star */}
      <path
        d="M100 10 L113 50 L153 37 L140 77 L180 90 L140 103 L153 143 L113 130 L100 170 L87 130 L47 143 L60 103 L20 90 L60 77 L47 37 L87 50 Z"
        fill="url(#octGrad)"
        stroke="#C9A84C"
        strokeWidth="1"
      />
      {/* Inner circle */}
      <circle cx="100" cy="90" r="30" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="5,3" />
      {/* Center dot */}
      <circle cx="100" cy="90" r="6" fill="#C9A84C" opacity="0.6" />
      {/* Connecting lines */}
      <line x1="100" y1="10" x2="100" y2="170" stroke="#1A6B3A" strokeWidth="0.5" opacity="0.3" />
      <line x1="20" y1="90" x2="180" y2="90" stroke="#1A6B3A" strokeWidth="0.5" opacity="0.3" />
      <line x1="37" y1="37" x2="163" y2="143" stroke="#1A6B3A" strokeWidth="0.5" opacity="0.3" />
      <line x1="163" y1="37" x2="37" y2="143" stroke="#1A6B3A" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

/* ─── Data ─── */
const asatidz = [
  {
    initial: 'AF',
    name: 'Ustadz Ahmad Fauzi, S.Pd.I',
    title: 'Kepala Program',
    credentials: ['Hafidz 30 Juz', '10 Tahun Pengalaman'],
  },
  {
    initial: 'NA',
    name: 'Ustadzah Nur Azizah',
    title: 'Kelas Pra-Tahsin',
    credentials: ['Spesialis Psikologi Anak', 'Usia Dini'],
  },
  {
    initial: 'HB',
    name: 'Ustadz Hasan Basri',
    title: 'Tahsin & Tajwid',
    credentials: ['Lulusan Pesantren Tahfidz', 'Tilawati Bersanad'],
  },
  {
    initial: 'MS',
    name: 'Ustadzah Maryam Sari',
    title: 'Tahfidz Cilik',
    credentials: ['Metode Muraja\'ah Kreatif', 'Hafidz 30 Juz'],
  },
];

/* ─── Page ─── */
export default function TentangKamiPage() {
  return (
    <>
      <PageHero title="Tentang Kami" breadcrumb="Tentang Kami" />

      {/* ══════════════════════════════════════════
          SECTION 2 — PENGANTAR / SEJARAH
      ══════════════════════════════════════════ */}
  <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Kolom Kiri: Teks & Informasi */}
          <div>
            {/* Kutipan Bahasa Arab (Aksen Emas) */}
            <p
              className="font-arabic text-3xl sm:text-4xl text-[#C9A84C] leading-relaxed mb-8 text-right lg:text-left"
              dir="rtl"
              lang="ar"
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </p>
            
            {/* Judul Utama */}
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-6">
              Bismillah, Bermula dari <br className="hidden sm:block"/>
              <span className="italic text-gray-600">Kepedulian untuk Umat</span>
            </h2>
            
            {/* Paragraf Deskripsi */}
            <div className="space-y-6 mb-10">
              <p className="text-gray-500 text-base leading-relaxed">
                Kami menyadari bahwa tantangan membesarkan anak di era digital semakin besar.
                Yayasan kami hadir sebagai mitra Ayah Bunda untuk membentengi ananda dengan
                cahaya Al-Qur'an — karena kami percaya bahwa setiap anak berhak tumbuh
                dalam naungan kalam ilahi.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Dengan ketulusan hati dan metode yang telah teruji, kami berkomitmen untuk
                memberikan pengalaman belajar Al-Qur'an yang menyenangkan, terstruktur, dan
                penuh kasih sayang bagi generasi penerus umat.
              </p>
            </div>

            {/* Badges Informasi */}
            <div className="flex flex-col sm:flex-row gap-5">
              {/* Badge 1: Tahun Berdiri */}
              <div className="group flex flex-1 items-center gap-4 px-6 py-5 border border-gray-200 transition-all duration-300 hover:border-gray-900 hover:shadow-sm">
                <div className="text-gray-400 group-hover:text-[#1C1C1C] transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C9A84C] mb-1">
                    Berdiri sejak
                  </p>
                  <p className="font-medium text-gray-900 text-sm">
                    Tahun 2018
                  </p>
                </div>
              </div>

              {/* Badge 2: Lokasi */}
              <div className="group flex flex-1 items-center gap-4 px-6 py-5 border border-gray-200 transition-all duration-300 hover:border-gray-900 hover:shadow-sm">
                <div className="text-gray-400 group-hover:text-[#1C1C1C] transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C9A84C] mb-1">
                    Lokasi
                  </p>
                  <p className="font-medium text-gray-900 text-sm">
                    Depok, Jawa Barat
                  </p>
                </div>
              </div>
            </div>
            
          </div>

          {/* Kolom Kanan: Ornamen Visual / SVG */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-full border border-gray-100 bg-[#F9F9F9] flex items-center justify-center p-12 transition-transform duration-700 hover:scale-105">
              {/* Lingkaran dalam sebagai bingkai tambahan */}
              <div className="absolute inset-6 border border-gray-200/60 rounded-full" aria-hidden="true" />
              
              {/* Komponen SVG Ornamen */}
              <div className="relative w-full h-full text-gray-300 flex items-center justify-center">
                {/* Pastikan komponen IslamicOctagramSVG Anda dapat menerima class dari parent atau menggunakan stroke="currentColor" */}
                {/* <IslamicOctagramSVG /> */}
                
                {/* Placeholder SVG jika komponen aslinya belum diimpor */}
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full opacity-50">
                  <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                  <circle cx="50" cy="50" r="20" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — VISI & MISI
      ══════════════════════════════════════════ */}
    <section className="bg-[#F9F9F9] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="uppercase text-[#C9A84C] text-xs tracking-[0.2em] font-semibold mb-4 block">
              Landasan Kami
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight">
              Visi &amp; Misi
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Visi Card */}
            <div className="group bg-white p-8 lg:p-12 border border-gray-200 transition-all duration-300 hover:border-gray-900 hover:shadow-lg hover:-translate-y-1 flex flex-col">
              {/* Icon Box */}
              <div className="w-14 h-14 rounded bg-gray-100 text-gray-600 flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-[#1C1C1C] group-hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              
              <h3 className="font-serif text-3xl text-gray-900 mb-6">Visi</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Menjadi lembaga pendidikan Al-Qur'an terpercaya yang melahirkan generasi
                rabbani, berakhlak mulia, dan cinta Al-Qur'an.
              </p>
            </div>

            {/* Misi Card */}
            <div className="group bg-white p-8 lg:p-12 border border-gray-200 transition-all duration-300 hover:border-gray-900 hover:shadow-lg hover:-translate-y-1 flex flex-col">
              {/* Icon Box */}
              <div className="w-14 h-14 rounded bg-gray-100 text-gray-600 flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-[#1C1C1C] group-hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              
              <h3 className="font-serif text-3xl text-gray-900 mb-6">Misi</h3>
              <ul className="space-y-4">
                {[
                  'Menyelenggarakan pembelajaran Al-Qur\'an yang menyenangkan dan terstruktur',
                  'Membina karakter islami melalui keteladanan',
                  'Membangun kemitraan aktif bersama keluarga santri',
                  'Mengembangkan kurikulum berbasis tahapan usia anak',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-gray-500 text-base leading-relaxed">
                    <svg className="flex-shrink-0 mt-1 text-[#C9A84C]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — LEGALITAS
      ══════════════════════════════════════════ */}
      {/* Menggunakan background abu-abu sangat muda untuk memberi jeda antar seksi */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="uppercase text-[#C9A84C] text-xs tracking-[0.2em] font-semibold mb-4 block">
              Legalitas
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight">
              Terdaftar &amp; Terpercaya
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                ),
                label: 'SK Kemenkumham',
                value: 'No. XXX/2018',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                ),
                label: 'Terdaftar Kemenag',
                value: 'Kota Depok',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                ),
                label: 'NPWP Yayasan',
                value: 'XX.XXX.XXX.X-XXX.XXX',
              },
            ].map(({ icon, label, value }) => (
              <div 
                key={label} 
                className="group bg-white p-6 sm:p-8 border border-gray-200 transition-all duration-300 hover:border-gray-900 hover:shadow-md flex items-center gap-5"
              >
                {/* Icon Box */}
                <div className="w-14 h-14 rounded bg-gray-100 text-gray-600 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#1C1C1C] group-hover:text-white">
                  {icon}
                </div>
                
                {/* Content */}
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C9A84C] mb-1">
                    {label}
                  </p>
                  <p className="font-medium text-gray-900 text-base sm:text-lg">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* ══════════════════════════════════════════
          SECTION 5 — PROFIL ASATIDZ
      ══════════════════════════════════════════ */}
      <section className="bg-[#F9F9F9] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-sm font-semibold tracking-wider uppercase text-gray-500">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 max-w-lg leading-tight">
            Profile Asatidz
          </h2>
          {/* Garis Hijau di bawah judul */}
          <div className="w-16 h-1 bg-green-500 mt-6"></div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {asatidz.map((member, index) => (
            <article
              key={index}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Image Container */}
              <div className="w-full aspect-square mb-4 bg-gray-100 overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Name & Title */}
              <h3 className="font-bold text-gray-900 text-lg mb-1">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {member.title}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>

    </>
  );
}
