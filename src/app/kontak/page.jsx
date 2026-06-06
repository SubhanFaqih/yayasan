'use client';

// File: src/app/kontak/page.jsx
import { useState } from 'react';
import Link from 'next/link';

/* ─── Data ─── */

const faqs = [
  {
    id: 1,
    question: 'Berapa usia minimal untuk mendaftar?',
    answer: 'Kami menerima santri mulai usia 4 tahun untuk program Pra-Tahsin. Tidak ada batasan atas \u2014 semangat belajar Al-Qur\'an tidak mengenal usia!',
  },
  {
    id: 2,
    question: 'Apakah ada biaya pendaftaran?',
    answer: 'Terdapat biaya pendaftaran awal sebesar Rp 100.000 yang mencakup seragam dan buku panduan. Investasi kecil untuk bekal seumur hidup.',
  },
  {
    id: 3,
    question: 'Bagaimana metode pembelajaran yang digunakan?',
    answer: 'Kami menggunakan metode Ummi dan Tilawati yang telah teruji, disesuaikan dengan usia dan kemampuan ananda. Setiap anak mendapat perhatian individual.',
  },
  {
    id: 4,
    question: 'Apakah orang tua bisa memantau progress ananda?',
    answer: 'Kami menyediakan laporan perkembangan bulanan dan parent meeting tiap semester. Orang tua selalu kami libatkan sebagai mitra utama pendidikan.',
  },
  {
    id: 5,
    question: 'Berapa kapasitas santri per kelas?',
    answer: 'Maksimal 15 santri per kelas untuk memastikan perhatian optimal dari asatidz. Kami percaya kualitas lebih penting dari kuantitas.',
  },
  {
    id: 6,
    question: 'Apakah ada program untuk anak berkebutuhan khusus?',
    answer: 'Kami sedang mengembangkan program inklusi. Silakan hubungi admin untuk konsultasi lebih lanjut — kami akan berusaha mengakomodasi setiap kebutuhan.',
  },
  {
    id: 7,
    question: 'Bagaimana alur pendaftaran?',
    answer: 'Isi formulir online → Konfirmasi via WhatsApp → Placement test ringan → Mulai belajar. Mudah, Insya Allah! Prosesnya bisa selesai dalam 3–5 hari kerja.',
  },
  {
    id: 8,
    question: 'Apakah ada diskon untuk kakak-adik?',
    answer: 'Ya, terdapat keringanan infak 10% untuk santri kedua dan seterusnya dari keluarga yang sama. Kami sangat mendukung keluarga yang bersama-sama belajar Al-Qur\'an.',
  },
];

/* ─── Sub-components ─── */
function PageHero() {
  return (
    <section className="bg-[#1A6B3A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="kontak-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,3 37,21 56,21 42,33 47,52 30,41 13,52 18,33 4,21 23,21"
                fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#kontak-pattern)" />
        </svg>
      </div>
      
      {/* Padding vertikal diubah menjadi py-24 sm:py-32 di sini */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="flex items-center gap-2 text-white/50 text-xs font-body mb-3">
          <Link href="/" className="hover:text-white transition-colors duration-200">Beranda</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span className="text-white/80">Kontak & FAQ</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">Kontak &amp; FAQ</h1>
        <p className="font-body text-white/70 text-base">Kami siap menjawab semua pertanyaan Ayah Bunda.</p>
        <div className="mt-4 h-1 w-16 bg-[#C9A84C] rounded-full" />
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ nama: '', whatsapp: '', program: '', pesan: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.nama.trim()) e.nama = 'Nama wajib diisi';
    if (!form.whatsapp.trim()) e.whatsapp = 'Nomor WhatsApp wajib diisi';
    if (!form.program) e.program = 'Pilih program terlebih dahulu';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    const text = encodeURIComponent(
      `Assalamu'alaikum, saya ${form.nama} ingin bertanya tentang program ${form.program}. ${form.pesan}`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#EFF7F2] border-2 border-[#1A6B3A] flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A6B3A" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-[#1A6B3A]">Jazakallah Khair!</h3>
        <p className="font-body text-[#6B6B6B] max-w-xs">
          Pesan Anda telah disiapkan di WhatsApp. Tim kami akan segera merespons, insya Allah.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ nama: '', whatsapp: '', program: '', pesan: '' }); }}
          className="mt-2 px-6 py-2.5 rounded-full border border-[#1A6B3A] text-[#1A6B3A] font-body text-sm font-semibold hover:bg-[#EFF7F2] transition-colors duration-200"
        >
          Kirim lagi
        </button>
      </div>
    );
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border font-body text-sm text-[#1C1C1C] bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-[#1A6B3A] focus:border-transparent placeholder:text-[#6B6B6B]/60 ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-[#E8E0D0] hover:border-[#1A6B3A]/40'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Nama */}
      <div>
        <label htmlFor="kontak-nama" className="block font-body text-sm font-semibold text-[#1C1C1C] mb-1.5">
          Nama Lengkap <span className="text-red-500">*</span>
        </label>
        <input
          id="kontak-nama"
          name="nama"
          type="text"
          value={form.nama}
          onChange={handleChange}
          placeholder="Masukkan nama lengkap Anda"
          className={inputClass('nama')}
          autoComplete="name"
        />
        {errors.nama && <p className="mt-1 text-xs text-red-500 font-body">{errors.nama}</p>}
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor="kontak-wa" className="block font-body text-sm font-semibold text-[#1C1C1C] mb-1.5">
          Nomor WhatsApp <span className="text-red-500">*</span>
        </label>
        <input
          id="kontak-wa"
          name="whatsapp"
          type="tel"
          value={form.whatsapp}
          onChange={handleChange}
          placeholder="08xx-xxxx-xxxx"
          className={inputClass('whatsapp')}
          autoComplete="tel"
        />
        {errors.whatsapp && <p className="mt-1 text-xs text-red-500 font-body">{errors.whatsapp}</p>}
      </div>

      {/* Program */}
      <div>
        <label htmlFor="kontak-program" className="block font-body text-sm font-semibold text-[#1C1C1C] mb-1.5">
          Pilih Program <span className="text-red-500">*</span>
        </label>
        <select
          id="kontak-program"
          name="program"
          value={form.program}
          onChange={handleChange}
          className={`${inputClass('program')} cursor-pointer`}
        >
          <option value="">-- Pilih program --</option>
          <option value="Pra-Tahsin">Pra-Tahsin (4–6 Tahun)</option>
          <option value="Tahsin & Tajwid">Tahsin & Tajwid (7–12 Tahun)</option>
          <option value="Tahfidz Cilik">Tahfidz Cilik (7–15 Tahun)</option>
        </select>
        {errors.program && <p className="mt-1 text-xs text-red-500 font-body">{errors.program}</p>}
      </div>

      {/* Pesan */}
      <div>
        <label htmlFor="kontak-pesan" className="block font-body text-sm font-semibold text-[#1C1C1C] mb-1.5">
          Pesan / Pertanyaan
        </label>
        <textarea
          id="kontak-pesan"
          name="pesan"
          value={form.pesan}
          onChange={handleChange}
          placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
          rows={4}
          className={`${inputClass('pesan')} resize-none`}
        />
      </div>

      <button
        id="kontak-submit"
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#25D366] text-white font-body font-bold text-base hover:bg-[#1ebe57] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:outline-none"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Kirim via WhatsApp
      </button>
    </form>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#E8E0D0] last:border-b-0">
      <button
        id={`faq-btn-${item.id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:ring-2 focus-visible:ring-[#1A6B3A] focus-visible:outline-none rounded-lg"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className="font-body font-semibold text-[#1C1C1C] text-sm sm:text-base leading-snug pr-2">
          {item.question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isOpen ? '#1A6B3A' : '#6B6B6B'}
          strokeWidth="2.5"
          strokeLinecap="round"
          className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-btn-${item.id}`}
        style={{
          maxHeight: isOpen ? '400px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <p className="font-body text-[#6B6B6B] text-sm leading-relaxed pb-5 pr-8">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

/* ─── Page ─── */

export default function KontakPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => setOpenFaq((prev) => (prev === id ? null : id));

  return (
    <>
      <PageHero />

      {/* ══════════════════════════════════════════
          SECTION 3 — FORM + MAP
      ══════════════════════════════════════════ */}
     <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: Form (60%) */}
            <div className="lg:col-span-3">
              <div className="mb-10">
                <span className="uppercase text-[#C9A84C] text-xs tracking-[0.2em] font-semibold mb-4 block">
                  Hubungi Kami
                </span>
                <h2 className="font-serif text-4xl text-gray-900 leading-tight mb-3">
                  Kirim Pesan
                </h2>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  Isi formulir di bawah dan pesan Anda akan langsung terbuka di WhatsApp.
                </p>
              </div>
              
              {/* Komponen Form Tetap Tidak Diubah */}
              <ContactForm />
            </div>

            {/* Right: Map + Hours (40%) */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              
              {/* Map Box */}
              <div>
                <span className="uppercase text-[#C9A84C] text-xs tracking-[0.2em] font-semibold mb-3 block">
                  Lokasi Kami
                </span>
                <h2 className="font-serif text-3xl text-gray-900 mb-6">
                  Temukan Kami
                </h2>
                
                <div className="relative overflow-hidden border border-gray-200 bg-[#F9F9F9] group transition-all duration-300 hover:border-gray-900 hover:shadow-md">
                  {/* Map placeholder */}
                  <div className="aspect-[4/3] flex flex-col items-center justify-center gap-4 relative">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 transition-transform duration-500 group-hover:-translate-y-1" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <div className="text-center px-6">
                      <p className="font-serif font-medium text-gray-900 text-lg mb-1">Jl. Margonda Raya No. 45</p>
                      <p className="text-gray-500 text-sm tracking-wide">Depok, Jawa Barat 16424</p>
                    </div>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 px-6 py-2.5 bg-white border border-gray-200 text-gray-900 text-[11px] uppercase tracking-widest font-semibold hover:border-gray-900 hover:bg-gray-50 transition-all duration-300"
                    >
                      Buka di Google Maps
                    </a>
                  </div>
                  
                  {/* Disclaimer Kanan Atas */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 border border-gray-100">
                    <p className="text-[10px] text-gray-400 tracking-wider">* Pasang Google Maps Embed API key di sini</p>
                  </div>
                </div>
              </div>

              {/* Operating Hours Box */}
              <div className="bg-white border border-gray-200 p-8 transition-all duration-300 hover:border-gray-900 hover:shadow-md">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-gray-900">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl text-gray-900">Jam Operasional</h3>
                </div>
                
                <div className="space-y-0 divide-y divide-gray-100">
                  {[
                    { hari: 'Senin – Jumat', jam: '07.00 – 17.00 WIB' },
                    { hari: 'Sabtu', jam: '08.00 – 14.00 WIB' },
                    { hari: 'Ahad', jam: 'Libur' },
                  ].map(({ hari, jam }) => (
                    <div key={hari} className="flex items-center justify-between py-4">
                      <span className="text-gray-500 text-sm">{hari}</span>
                      <span className={`text-sm font-medium ${jam === 'Libur' ? 'text-[#C9A84C]' : 'text-gray-900'}`}>
                        {jam}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — FAQ ACCORDION
      ══════════════════════════════════════════ */}
      <section id="faq" className="bg-[#F9F9F9] py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="uppercase text-[#C9A84C] text-xs tracking-[0.2em] font-semibold mb-4 block">
              FAQ
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-gray-500 text-base">
              Tidak menemukan jawaban yang Anda cari? Hubungi kami langsung via WhatsApp.
            </p>
          </div>

          {/* Accordion Container */}
          <div className="bg-white border border-gray-200 divide-y divide-gray-100 px-6 sm:px-10 shadow-sm">
            {faqs.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openFaq === item.id}
                onToggle={() => toggleFaq(item.id)}
              />
            ))}
          </div>

          {/* FAQ CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-6">
              Masih ada pertanyaan lain?
            </p>
            <a
              href="https://wa.me/6281234567890?text=Assalamu'alaikum%2C%20saya%20ingin%20bertanya%20tentang%20Rumah%20Tahfidz%20An-Nur."
              target="_blank"
              rel="noopener noreferrer"
              id="faq-wa-btn"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1C1C1C] text-white font-sans font-medium text-sm hover:bg-black transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Tanya via WhatsApp
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
