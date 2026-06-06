'use client';

// File: src/app/daftar/page.jsx
import { useState } from 'react';
import Link from 'next/link';

/* ─── Registration Steps ─── */
const steps = [
  { num: '1', emoji: '\uD83D\uDCDD', title: 'Isi Formulir', desc: 'Lengkapi data ananda secara online' },
  { num: '2', emoji: '\uD83D\uDCAC', title: 'Konfirmasi WA', desc: 'Tim kami menghubungi dalam 1x24 jam' },
  { num: '3', emoji: '\uD83D\uDCCB', title: 'Placement Test', desc: 'Tes ringan untuk penempatan kelas yang tepat' },
  { num: '4', emoji: '\uD83C\uDF89', title: 'Mulai Belajar', desc: 'Ananda siap bergabung dengan keluarga kami!' },
];

/* ─── Form Component ─── */
function RegistrationForm() {
  const [form, setForm] = useState({
    namaSantri: '',
    namaPanggilan: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    alamat: '',
    namaWali: '',
    whatsapp: '',
    email: '',
    program: '',
    jadwal: '',
    catatan: '',
    setuju: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const jadwalOptions = {
    'Pra-Tahsin': ['Senin, Rabu, Jumat \u2014 15.30\u201317.00 WIB'],
    'Tahsin & Tajwid': ['Selasa, Kamis, Sabtu \u2014 15.30\u201317.00 WIB'],
    'Tahfidz Cilik': [
      'Senin\u2013Jumat \u2014 07.00\u201308.30 WIB (Pagi)',
      'Senin\u2013Jumat \u2014 15.30\u201317.00 WIB (Sore)',
    ],
  };

  const validate = () => {
    const e = {};
    if (!form.namaSantri.trim()) e.namaSantri = 'Nama santri wajib diisi';
    if (!form.namaWali.trim()) e.namaWali = 'Nama wali wajib diisi';
    if (!form.whatsapp.trim()) e.whatsapp = 'Nomor WhatsApp wajib diisi';
    if (!form.program) e.program = 'Pilih program terlebih dahulu';
    if (!form.setuju) e.setuju = 'Anda harus menyetujui pernyataan ini';
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setForm((prev) => ({ ...prev, [name]: val }));
    if (name === 'program') setForm((prev) => ({ ...prev, program: value, jadwal: '' }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    const msg = [
      `Assalamu'alaikum, saya ${form.namaWali} ingin mendaftarkan ananda:`,
      `\uD83D\uDC66 Nama Santri: ${form.namaSantri}${form.namaPanggilan ? ` (${form.namaPanggilan})` : ''}`,
      form.tempatLahir ? `\uD83D\uDCC5 TTL: ${form.tempatLahir}, ${form.tanggalLahir}` : '',
      form.jenisKelamin ? `\u2642\uFE0F Jenis Kelamin: ${form.jenisKelamin}` : '',
      `\uD83D\uDCDA Program: ${form.program}`,
      form.jadwal ? `\uD83D\uDD52 Jadwal: ${form.jadwal}` : '',
      form.whatsapp ? `\uD83D\uDCF1 WhatsApp: ${form.whatsapp}` : '',
      form.catatan ? `\uD83D\uDCDD Catatan: ${form.catatan}` : '',
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
        <div className="w-20 h-20 rounded-full bg-[#EFF7F2] border-4 border-[#1A6B3A] flex items-center justify-center shadow-lg">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1A6B3A" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-3xl font-bold text-[#1A6B3A] mb-2">Jazakallah Khair!</h3>
          <p className="font-body text-[#6B6B6B] max-w-sm leading-relaxed">
            Formulir pendaftaran telah disiapkan di WhatsApp. Tim kami akan segera menghubungi
            Ayah/Bunda untuk konfirmasi, insya Allah.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => { setSubmitted(false); setForm({ namaSantri: '', namaPanggilan: '', tempatLahir: '', tanggalLahir: '', jenisKelamin: '', alamat: '', namaWali: '', whatsapp: '', email: '', program: '', jadwal: '', catatan: '', setuju: false }); }}
            className="px-6 py-2.5 rounded-full border-2 border-[#1A6B3A] text-[#1A6B3A] font-body text-sm font-semibold hover:bg-[#EFF7F2] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#1A6B3A] focus-visible:outline-none"
          >
            Daftar Anak Lain
          </button>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-full bg-[#1A6B3A] text-white font-body text-sm font-semibold hover:bg-[#2E9E5B] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#1A6B3A] focus-visible:outline-none"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const inputBase = 'w-full px-4 py-3 rounded-xl border font-body text-sm text-[#1C1C1C] bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-[#1A6B3A] focus:border-transparent placeholder:text-[#6B6B6B]/50';
  const inputClass = (field) => `${inputBase} ${errors[field] ? 'border-red-400 bg-red-50' : 'border-[#E8E0D0] hover:border-[#1A6B3A]/40'}`;

  return (
 <form onSubmit={handleSubmit} noValidate className="space-y-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">

        {/* ── LEFT COLUMN: DATA SANTRI ── */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl text-gray-900 pb-3 border-b border-gray-100">
            Data Santri
          </h3>

          {/* Nama Lengkap Santri */}
          <div>
            <label htmlFor="daftar-nama-santri" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Nama Lengkap Santri <span className="text-red-500">*</span>
            </label>
            <input 
              id="daftar-nama-santri" 
              name="namaSantri" 
              type="text" 
              value={form.namaSantri}
              onChange={handleChange} 
              placeholder="Nama lengkap sesuai akta" 
              className={inputClass('namaSantri')} 
            />
            {errors.namaSantri && <p className="mt-1.5 text-xs text-red-500 font-sans">{errors.namaSantri}</p>}
          </div>

          {/* Nama Panggilan */}
          <div>
            <label htmlFor="daftar-panggilan" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Nama Panggilan
            </label>
            <input 
              id="daftar-panggilan" 
              name="namaPanggilan" 
              type="text" 
              value={form.namaPanggilan}
              onChange={handleChange} 
              placeholder="Nama yang biasa dipanggil" 
              className={inputClass('namaPanggilan')} 
            />
          </div>

          {/* TTL */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="daftar-tempat" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Tempat Lahir
              </label>
              <input 
                id="daftar-tempat" 
                name="tempatLahir" 
                type="text" 
                value={form.tempatLahir}
                onChange={handleChange} 
                placeholder="Kota" 
                className={inputClass('tempatLahir')} 
              />
            </div>
            <div>
              <label htmlFor="daftar-tgl" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Tanggal Lahir
              </label>
              <input 
                id="daftar-tgl" 
                name="tanggalLahir" 
                type="date" 
                value={form.tanggalLahir}
                onChange={handleChange} 
                className={inputClass('tanggalLahir')} 
              />
            </div>
          </div>

          {/* Jenis Kelamin */}
          <div>
            <p className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-3">Jenis Kelamin</p>
            <div className="flex gap-8">
              {['Laki-laki', 'Perempuan'].map((opt) => (
                <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="jenisKelamin"
                    value={opt}
                    checked={form.jenisKelamin === opt}
                    onChange={handleChange}
                    className="w-4 h-4 accent-gray-900 focus:ring-gray-950"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Alamat */}
          <div>
            <label htmlFor="daftar-alamat" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Alamat Rumah
            </label>
            <textarea 
              id="daftar-alamat" 
              name="alamat" 
              value={form.alamat}
              onChange={handleChange} 
              placeholder="Alamat lengkap" 
              rows={4}
              className={`${inputClass('alamat')} resize-none`} 
            />
          </div>
        </div>

        {/* ── RIGHT COLUMN: DATA WALI & PROGRAM ── */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl text-gray-900 pb-3 border-b border-gray-100">
            Data Wali &amp; Program
          </h3>

          {/* Nama Wali */}
          <div>
            <label htmlFor="daftar-wali" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Nama Ayah / Wali <span className="text-red-500">*</span>
            </label>
            <input 
              id="daftar-wali" 
              name="namaWali" 
              type="text" 
              value={form.namaWali}
              onChange={handleChange} 
              placeholder="Nama lengkap wali santri" 
              className={inputClass('namaWali')} 
            />
            {errors.namaWali && <p className="mt-1.5 text-xs text-red-500 font-sans">{errors.namaWali}</p>}
          </div>

          {/* WhatsApp */}
          <div>
            <label htmlFor="daftar-wa" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Nomor WhatsApp Utama <span className="text-red-500">*</span>
            </label>
            <input 
              id="daftar-wa" 
              name="whatsapp" 
              type="tel" 
              value={form.whatsapp}
              onChange={handleChange} 
              placeholder="08xx-xxxx-xxxx" 
              className={inputClass('whatsapp')}
              autoComplete="tel" 
            />
            {errors.whatsapp && <p className="mt-1.5 text-xs text-red-500 font-sans">{errors.whatsapp}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="daftar-email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Email
            </label>
            <input 
              id="daftar-email" 
              name="email" 
              type="email" 
              value={form.email}
              onChange={handleChange} 
              placeholder="email@contoh.com" 
              className={inputClass('email')}
              autoComplete="email" 
            />
          </div>

          {/* Program */}
          <div>
            <label htmlFor="daftar-program" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Program yang Diminati <span className="text-red-500">*</span>
            </label>
            <select 
              id="daftar-program" 
              name="program" 
              value={form.program}
              onChange={handleChange} 
              className={`${inputClass('program')} cursor-pointer bg-white`}
            >
              <option value="">-- Pilih program --</option>
              <option value="Pra-Tahsin">Pra-Tahsin (4–6 Tahun)</option>
              <option value="Tahsin & Tajwid">Tahsin &amp; Tajwid (7–12 Tahun)</option>
              <option value="Tahfidz Cilik">Tahfidz Cilik (7–15 Tahun)</option>
            </select>
            {errors.program && <p className="mt-1.5 text-xs text-red-500 font-sans">{errors.program}</p>}
          </div>

          {/* Jadwal (conditional) */}
          {form.program && jadwalOptions[form.program] && (
            <div>
              <label htmlFor="daftar-jadwal" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Pilihan Jadwal
              </label>
              <select 
                id="daftar-jadwal" 
                name="jadwal" 
                value={form.jadwal}
                onChange={handleChange} 
                className={`${inputClass('jadwal')} cursor-pointer bg-white`}
              >
                <option value="">-- Pilih jadwal --</option>
                {jadwalOptions[form.program].map((j) => (
                  <option key={j} value={j}>{j}</option>
                ))}
              </select>
            </div>
          )}

          {/* Catatan */}
          <div>
            <label htmlFor="daftar-catatan" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Pertanyaan / Catatan Khusus
            </label>
            <textarea 
              id="daftar-catatan" 
              name="catatan" 
              value={form.catatan}
              onChange={handleChange} 
              placeholder="Ada pertanyaan atau hal khusus yang perlu kami ketahui?" 
              rows={4}
              className={`${inputClass('catatan')} resize-none`} 
            />
          </div>
        </div>
      </div>

      {/* ── FULL WIDTH BOTTOM AREA ── */}
      <div className="pt-8 space-y-6">
        {/* Checkbox persetujuan */}
        <div>
          <label className={`flex items-start gap-4 cursor-pointer group p-5 border transition-all duration-300 ${errors.setuju ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-gray-900 bg-white'}`}>
            <input
              id="daftar-setuju"
              type="checkbox"
              name="setuju"
              checked={form.setuju}
              onChange={handleChange}
              className="mt-1 w-4 h-4 accent-gray-900 flex-shrink-0 focus:ring-gray-950"
            />
            <span className="text-gray-600 text-sm leading-relaxed transition-colors group-hover:text-gray-900">
              Saya menyetujui bahwa data yang diisi adalah benar dan bersedia mengikuti
              tata tertib yayasan. <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.setuju && <p className="mt-1.5 text-xs text-red-500 font-sans">{errors.setuju}</p>}
        </div>

        {/* Submit Button */}
        <button
          id="daftar-submit"
          type="submit"
          className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1C1C1C] text-white font-sans font-medium text-sm hover:bg-black transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          {/* Ikon WhatsApp */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-[#25D366]">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Kirim Pendaftaran via WhatsApp
        </button>
      </div>
    </form>
  );
}

/* ─── Page ─── */
export default function DaftarPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════ */}
     <section className="bg-[#1A6B3A] relative overflow-hidden text-center">
  <div className="absolute inset-0 opacity-5" aria-hidden="true">
    <svg width="100%" height="100%">
      <defs>
        <pattern id="daftar-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <polygon points="30,3 37,21 56,21 42,33 47,52 30,41 13,52 18,33 4,21 23,21"
            fill="none" stroke="white" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#daftar-pattern)" />
    </svg>
  </div>
  
  {/* Padding vertikal diubah menjadi py-24 sm:py-32 di sini */}
  <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
    <p className="font-arabic text-3xl text-[#C9A84C] mb-4 leading-relaxed" dir="rtl" lang="ar">
      &#x648;&#x645;&#x646; &#x64A;&#x62A;&#x651;&#x642; &#x627;&#x644;&#x644;&#x651;&#x647;&#x64E; &#x64A;&#x62C;&#x652;&#x639;&#x64E;&#x644; &#x644;&#x651;&#x647;&#x64F; &#x645;&#x64E;&#x62E;&#x652;&#x631;&#x62C;&#x64B;&#x627;
    </p>
    <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
      Daftar Santri Baru
    </h1>
    <p className="font-body text-white/80 text-base leading-relaxed max-w-xl mx-auto">
      Alhamdulillah, ini adalah langkah awal Ayah Bunda untuk menghadiahkan mahkota
      kemuliaan di akhirat kelak. Semoga Allah mudahkan setiap prosesnya.
    </p>
    <div className="mt-4 mx-auto h-1 w-16 bg-[#C9A84C] rounded-full" />
  </div>
</section>

      {/* ══════════════════════════════════════════
          SECTION 2 — ALUR PENDAFTARAN (STEPS)
      ══════════════════════════════════════════ */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F9F9F9] border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="uppercase text-[#C9A84C] text-xs tracking-[0.2em] font-semibold mb-4 block">
              Alur
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight">
              Cara Mendaftar
            </h2>
          </div>

          <div className="relative mt-8">
            {/* Garis Penghubung (Dashed/Solid abu-abu tipis) */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[1px] bg-gray-200" aria-hidden="true" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
              {steps.map(({ num, emoji, title, desc }) => (
                <div key={num} className="group flex flex-col items-center text-center gap-5 relative cursor-default">
                  
                  {/* Lingkaran Ikon */}
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex flex-col items-center justify-center shadow-sm z-10 relative transition-all duration-300 group-hover:border-gray-900 group-hover:bg-[#1C1C1C]">
                    <span className="text-xl leading-none mb-1 group-hover:scale-110 transition-transform duration-300">
                      {emoji}
                    </span>
                    <span className="font-sans text-[10px] font-bold text-gray-400 group-hover:text-gray-300">
                      {num}
                    </span>
                  </div>
                  
                  {/* Teks */}
                  <div>
                    <p className="font-serif text-xl text-gray-900 mb-2">
                      {title}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed px-2">
                      {desc}
                    </p>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — REGISTRATION FORM
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="uppercase text-[#C9A84C] text-xs tracking-[0.2em] font-semibold mb-4 block">
              Formulir
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
              Isi Data Pendaftaran
            </h2>
            <p className="text-gray-500 text-sm">
              Kolom bertanda <span className="text-red-500 font-bold">*</span> wajib diisi.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white border border-gray-200 p-6 sm:p-12 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <RegistrationForm />
          </div>

        </div>
      </section>

    </>
  );
}
