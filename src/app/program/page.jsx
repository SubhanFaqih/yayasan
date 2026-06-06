// File: src/app/program/page.jsx
import Link from 'next/link';

export const metadata = {
  title: 'Program Belajar',
  description:
    'Temukan program unggulan Rumah Tahfidz An-Nur: Pra-Tahsin (4–6 tahun), Tahsin & Tajwid (7–12 tahun), dan Tahfidz Cilik (7–15 tahun). Kurikulum terstruktur, asatidz bersanad.',
};

/* ─── Helpers ─── */

function PageHero({ title, subtitle }) {
  return (
    <section className="bg-[#1A6B3A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="prog-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,3 37,21 56,21 42,33 47,52 30,41 13,52 18,33 4,21 23,21"
                fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#prog-pattern)" />
        </svg>
      </div>
      
      {/* Menggunakan padding vertikal yang sama: py-24 sm:py-32 */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="flex items-center gap-2 text-white/50 text-xs font-body mb-3">
          <Link href="/" className="hover:text-white transition-colors duration-200">Beranda</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M9 18l6-6-6-6"/>
          </svg>
          <span className="text-white/80">Program Belajar</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">{title}</h1>
        <p className="font-body text-white/70 text-base max-w-xl">{subtitle}</p>
        <div className="mt-4 h-1 w-16 bg-[#C9A84C] rounded-full" />
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 24 24"
      fill="none" stroke="#2E9E5B" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ─── Data ─── */

const programs = [
  {
    id: 'pra-tahsin',
    emoji: '🌱',
    badge: 'Usia 4–6 Tahun',
    badgeClass: 'bg-emerald-100 text-emerald-800',
    levelBadge: 'Pemula',
    levelClass: 'bg-gray-100 text-gray-600',
    title: 'Pra-Tahsin',
    description:
      'Bermain sambil mengenal huruf Hijaiyah. Menumbuhkan rasa cinta melalui metode berkisah (sirah) dan nasyid edukatif yang membuat ananda rindu belajar.',
    materi: [
      'Pengenalan Huruf Hijaiyah',
      'Hafalan doa harian',
      'Sirah Nabawiyah dasar',
      'Nasyid & lagu islami',
    ],
    jadwal: 'Senin, Rabu, Jumat — 15.30–17.00 WIB',
    infak: 'Rp 150.000/bulan',
    color: '#2E9E5B',
    borderColor: 'border-emerald-400',
  },
  {
    id: 'tahsin',
    emoji: '📖',
    badge: 'Usia 7–12 Tahun',
    badgeClass: 'bg-blue-100 text-blue-800',
    levelBadge: 'Menengah',
    levelClass: 'bg-blue-50 text-blue-600',
    title: 'Tahsin & Tajwid',
    description:
      'Fokus memperbaiki makharijul huruf dan hukum bacaan agar tartil sesuai tuntunan Rasulullah ﷺ. Dibimbing oleh asatidz bersanad dan berpengalaman.',
    materi: [
      'Makharijul Huruf',
      'Hukum Nun Mati & Tanwin',
      'Hukum Mim Mati',
      'Mad & Qasr',
      'Waqaf & Ibtida\'',
    ],
    jadwal: 'Selasa, Kamis, Sabtu — 15.30–17.00 WIB',
    infak: 'Rp 175.000/bulan',
    color: '#1A6B3A',
    borderColor: 'border-blue-400',
  },
  {
    id: 'tahfidz',
    emoji: '⭐',
    badge: 'Usia 7–15 Tahun',
    badgeClass: 'bg-amber-100 text-amber-800',
    levelBadge: 'Program Unggulan',
    levelClass: 'bg-amber-50 text-amber-700',
    title: 'Tahfidz Cilik',
    description:
      'Bimbingan hafalan Juz 30 dengan metode muraja\'ah rutin yang menyenangkan tanpa membebani anak. Target hafalan bertahap dengan sertifikat per juz.',
    materi: [
      'Target hafalan bertahap (An-Nas → An-Naba\')',
      'Muraja\'ah harian',
      'Tasmi\' mingguan',
      'Sertifikat per juz',
    ],
    jadwal: 'Senin–Jumat — 07.00–08.30 WIB atau 15.30–17.00 WIB',
    infak: 'Rp 250.000/bulan',
    color: '#C9A84C',
    borderColor: 'border-amber-400',
  },
];

const jadwalTable = [
  { hari: 'Senin', waktu: '07.00–08.30 WIB', kelas: 'Tahfidz Cilik (Pagi)', pengajar: 'Ustadz Ahmad Fauzi' },
  { hari: 'Senin', waktu: '15.30–17.00 WIB', kelas: 'Pra-Tahsin & Tahfidz Cilik', pengajar: 'Ustadzah Nur Azizah / Ustadzah Maryam Sari' },
  { hari: 'Selasa', waktu: '15.30–17.00 WIB', kelas: 'Tahsin & Tajwid', pengajar: 'Ustadz Hasan Basri' },
  { hari: 'Rabu', waktu: '15.30–17.00 WIB', kelas: 'Pra-Tahsin', pengajar: 'Ustadzah Nur Azizah' },
  { hari: 'Kamis', waktu: '15.30–17.00 WIB', kelas: 'Tahsin & Tajwid', pengajar: 'Ustadz Hasan Basri' },
  { hari: 'Jumat', waktu: '07.00–08.30 WIB', kelas: 'Tahfidz Cilik (Pagi)', pengajar: 'Ustadz Ahmad Fauzi' },
  { hari: 'Jumat', waktu: '15.30–17.00 WIB', kelas: 'Pra-Tahsin & Tahfidz Cilik', pengajar: 'Ustadzah Maryam Sari' },
  { hari: 'Sabtu', waktu: '15.30–17.00 WIB', kelas: 'Tahsin & Tajwid', pengajar: 'Ustadz Hasan Basri' },
];

/* ─── Page ─── */

export default function ProgramPage() {
  return (
    <>
      <PageHero
        title="Program Belajar"
        subtitle="Langkah Terarah Menuju Cahaya Al-Qur'an"
      />

      {/* ══════════════════════════════════════════
          SECTION 2 — INTRO FILOSOFI + LEARNING PATH
      ══════════════════════════════════════════ */}
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          
          <span className="uppercase text-[#C9A84C] text-xs tracking-[0.2em] font-semibold mb-4 block">
            Filosofi Kami
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-6">
            Setiap Anak Itu Unik
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto mb-16">
            Oleh karena itu, kami merancang kurikulum yang disesuaikan dengan tahapan usia
            dan kemampuan ananda — sehingga setiap anak dapat berkembang dengan optimal
            sesuai potensinya masing-masing.
          </p>

          {/* Learning Path Stepper */}
          <div className="relative mt-8">
            {/* Connecting line (desktop) - Diubah menjadi garis abu-abu tipis */}
            <div className="hidden sm:block absolute top-8 left-[16.66%] right-[16.66%] h-[1px] bg-gray-200" aria-hidden="true" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-4">
              {[
                { step: '01', label: 'Pra-Tahsin', age: '4–6 Tahun', color: 'bg-[#2E9E5B]' },
                { step: '02', label: 'Tahsin & Tajwid', age: '7–12 Tahun', color: 'bg-[#1A6B3A]' },
                { step: '03', label: 'Tahfidz Cilik', age: '7–15 Tahun', color: 'bg-[#C9A84C]' },
              ].map(({ step, label, age }) => (
                <div key={step} className="group flex flex-col items-center gap-5 cursor-default">
                  {/* Circle Number */}
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm z-10 relative transition-all duration-300 group-hover:border-gray-900 group-hover:bg-[#1C1C1C]">
                    <span className="font-sans font-medium text-lg text-gray-500 transition-colors duration-300 group-hover:text-white">
                      {step}
                    </span>
                  </div>
                  {/* Text */}
                  <div className="text-center">
                    <p className="font-serif text-xl text-gray-900 mb-1">{label}</p>
                    <p className="text-gray-500 text-sm tracking-wide">{age}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — PROGRAM CARDS (DETAILED)
      ══════════════════════════════════════════ */}
      <section className="bg-[#F9F9F9] py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="uppercase text-[#C9A84C] text-xs tracking-[0.2em] font-semibold mb-4 block">
              Detail Program
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight">
              Program Unggulan Kami
            </h2>
          </div>

          <div className="space-y-8">
            {programs.map(({ id, emoji, badge, badgeClass, levelBadge, levelClass, title, description, materi, jadwal, infak, borderColor }) => (
              <article
                key={id}
                id={id}
                className="group bg-white border border-gray-200 transition-all duration-300 hover:border-gray-900 hover:shadow-lg"
              >
                <div className="p-8 sm:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-8">
                    
                    {/* Left: Emoji / Icon Box */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded bg-gray-100 flex items-center justify-center text-3xl transition-transform duration-300 group-hover:-translate-y-1">
                        {emoji}
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1">
                      
                      {/* Badges (diseragamkan gayanya) */}
                      <div className="flex flex-wrap gap-3 mb-5">
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 border border-gray-200 text-gray-500 bg-white">
                          {badge}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 border border-[#C9A84C] text-[#C9A84C] bg-white">
                          {levelBadge}
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl text-gray-900 mb-4">
                        {title}
                      </h3>
                      <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-3xl">
                        {description}
                      </p>

                      <hr className="border-gray-100 mb-8" />

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Materi */}
                        <div>
                          <p className="font-sans font-semibold text-gray-900 text-sm mb-4 uppercase tracking-wide flex items-center gap-3">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#C9A84C]">
                              <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                            </svg>
                            Materi Pembelajaran
                          </p>
                          <ul className="space-y-3">
                            {materi.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-gray-500 text-sm leading-relaxed">
                                <div className="mt-0.5 text-[#1C1C1C]">
                                  <CheckIcon />
                                </div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Info Boxes */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 p-5 bg-white border border-gray-100 transition-colors group-hover:border-gray-200">
                            <div className="text-gray-400">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                              </svg>
                            </div>
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C9A84C] mb-1">Jadwal</p>
                              <p className="text-gray-900 text-sm font-medium">{jadwal}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 p-5 bg-white border border-gray-100 transition-colors group-hover:border-gray-200">
                            <div className="text-gray-400">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="1" x2="12" y2="23"/>
                                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                              </svg>
                            </div>
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C9A84C] mb-1">Infak Bulanan</p>
                              <p className="text-gray-900 text-sm font-medium">{infak}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — JADWAL KEGIATAN TABEL
      ══════════════════════════════════════════ */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="uppercase text-[#C9A84C] text-xs tracking-[0.2em] font-semibold mb-4 block">
              Jadwal Mingguan
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight">
              Jadwal Kegiatan
            </h2>
          </div>

          <div className="overflow-x-auto border border-gray-200 bg-white">
            <table className="w-full min-w-[640px] text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-900 bg-white">
                  {['Hari', 'Waktu', 'Kelas', 'Pengajar'].map((h) => (
                    <th key={h} className="px-6 py-5 text-gray-900 font-sans text-sm tracking-widest uppercase font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {jadwalTable.map(({ hari, waktu, kelas, pengajar }, i) => (
                  <tr
                    key={`${hari}-${waktu}`}
                    className="hover:bg-[#F9F9F9] transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">{hari}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{waktu}</td>
                    <td className="px-6 py-4 text-gray-900 text-sm">{kelas}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{pengajar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </>
  );
}
