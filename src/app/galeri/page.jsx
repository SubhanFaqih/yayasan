'use client';

// File: src/app/galeri/page.jsx
import { useState } from 'react';
import Link from 'next/link';

/* ─── Data ─── */

const filters = ['Semua', 'Kegiatan Belajar', 'Acara Mabit', 'Wisuda Santri', 'Hari Besar Islam'];

const photos = [
  { id: 1, caption: 'Kelas Pra-Tahsin', category: 'Kegiatan Belajar', aspectClass: 'aspect-[4/3]', hue: '142' },
  { id: 2, caption: 'Mabit Ramadhan 1446H', category: 'Acara Mabit', aspectClass: 'aspect-[3/4]', hue: '38' },
  { id: 3, caption: 'Wisuda Santri Juz 30', category: 'Wisuda Santri', aspectClass: 'aspect-[4/3]', hue: '200' },
  { id: 4, caption: 'Belajar bersama Ustadz', category: 'Kegiatan Belajar', aspectClass: 'aspect-[1/1]', hue: '142' },
  { id: 5, caption: 'Kegiatan halaqah pagi', category: 'Kegiatan Belajar', aspectClass: 'aspect-[16/9]', hue: '160' },
  { id: 6, caption: "Malam Nuzulul Qur'an", category: 'Hari Besar Islam', aspectClass: 'aspect-[3/4]', hue: '270' },
  { id: 7, caption: 'Sesi Tahsin bersama', category: 'Kegiatan Belajar', aspectClass: 'aspect-[4/3]', hue: '142' },
  { id: 8, caption: 'Penyerahan Sertifikat Hafidz', category: 'Wisuda Santri', aspectClass: 'aspect-[1/1]', hue: '45' },
  { id: 9, caption: 'Pembukaan Pesantren Kilat', category: 'Acara Mabit', aspectClass: 'aspect-[16/9]', hue: '38' },
  { id: 10, caption: "Peringatan Isra' Mi'raj", category: 'Hari Besar Islam', aspectClass: 'aspect-[4/3]', hue: '270' },
  { id: 11, caption: "Muraja'ah bersama", category: 'Kegiatan Belajar', aspectClass: 'aspect-[3/4]', hue: '142' },
  { id: 12, caption: 'Wisuda Santri Batch II', category: 'Wisuda Santri', aspectClass: 'aspect-[4/3]', hue: '200' },
];

/* ─── Sub-components ─── */

function PageHero() {
  return (
    <section className="bg-[#1A6B3A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="galeri-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,3 37,21 56,21 42,33 47,52 30,41 13,52 18,33 4,21 23,21"
                fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#galeri-pattern)" />
        </svg>
      </div>
      
      {/* Padding vertikal diubah menjadi py-24 sm:py-32 */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="flex items-center gap-2 text-white/50 text-xs font-body mb-3">
          <Link href="/" className="hover:text-white transition-colors duration-200">Beranda</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span className="text-white/80">Galeri Kegiatan</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">Galeri Kegiatan</h1>
        <p className="font-body text-white/70 text-base">Sekilas momen kebersamaan kami</p>
        <div className="mt-4 h-1 w-16 bg-[#C9A84C] rounded-full" />
      </div>
    </section>
  );
}

function PhotoCard({ photo }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      className={`relative ${photo.aspectClass} overflow-hidden cursor-pointer group break-inside-avoid mb-6 border border-gray-200 bg-gray-50`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 
        Placeholder Image:
        Gradient HSL tetap digunakan namun dengan saturasi dan lightness yang diubah 
        agar terlihat pastel/abu-abu lembut (lebih elegan)
      */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-105"
        style={{
          background: `linear-gradient(135deg, hsl(${photo.hue}, 15%, 85%) 0%, hsl(${photo.hue}, 20%, 90%) 100%)`,
        }}
      >
        {/* Ikon Kamera Minimalis (pengganti pattern ramai) */}
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>

      {/* Caption Overlay (Gaya Gelap Mewah) */}
      <div
        className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-6 transition-opacity duration-500 ease-in-out ${hovered ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden={!hovered}
      >
        <p className="font-serif text-white text-lg leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {photo.caption}
        </p>
        <p className="text-[#C9A84C] text-[10px] uppercase tracking-widest mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {photo.category}
        </p>
      </div>
    </div>
  );
}

/* ─── Page ─── */

export default function GaleriPage() { // ✅ BENAR
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filtered = activeFilter === 'Semua'
    ? photos
    : photos.filter((p) => p.category === activeFilter);

  return (
    <>
      <PageHero />

      {/* ══════════════════════════════════════════
          SECTION 2 — FILTER TABS
      ══════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  id={`filter-${filter.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
                    isActive
                      ? 'bg-[#1C1C1C] text-white border border-[#1C1C1C]'
                      : 'bg-transparent text-gray-500 border border-gray-200 hover:border-gray-900 hover:text-gray-900'
                  }`}
                  aria-pressed={isActive}
                >
                  {filter}
                  {isActive && (
                    <span className="ml-2 bg-white/20 px-1.5 py-0.5 rounded text-[10px]">
                      {filtered.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — PHOTO GRID
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-gray-500 text-lg">Tidak ada foto untuk kategori ini.</p>
            </div>
          ) : (
            /* CSS columns masonry layout */
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {filtered.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — VIDEO SECTION
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header Video */}
          <span className="uppercase text-[#C9A84C] text-xs tracking-[0.2em] font-semibold mb-4 block">
            Dokumentasi Video
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-12">
            Dokumentasi Kegiatan Kami
          </h2>

          <div className="relative overflow-hidden group cursor-pointer border border-gray-200 shadow-sm transition-shadow duration-500 hover:shadow-xl">
            {/* Video placeholder (Warna Gelap Monokrom) */}
            <div className="aspect-video bg-[#1C1C1C] flex flex-col items-center justify-center gap-6 relative overflow-hidden">
              
              {/* Overlay gelap agar teks lebih terbaca */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0"></div>

              {/* Tombol Play */}
              <button
                id="video-play-btn"
                className="relative z-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40 focus:outline-none"
                aria-label="Putar video dokumentasi"
              >
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Teks Keterangan di dalam Video */}
              <div className="relative z-10 text-center px-6 transition-transform duration-500 group-hover:-translate-y-2 mt-4">
                <p className="font-serif text-2xl text-white mb-2">
                  Dokumentasi Mabit Ramadhan 1446H
                </p>
                <p className="font-sans text-gray-300 text-sm font-light">
                  Malam penuh berkah bersama para santri dan wali murid.
                </p>
                
                {/* Badge YouTube */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 text-[11px] font-bold uppercase tracking-wider">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-red-600">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                    </svg>
                    Pasang YouTube Embed di sini
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-xs mt-6 tracking-wide">
            * Ganti placeholder ini dengan YouTube embed iframe untuk video aktual.
          </p>
        </div>
      </section>

    </>
  );
}
