// File: src/app/layout.jsx
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloating from '@/components/ui/WhatsAppFloating';

export const metadata = {
  title: {
    default: 'Rumah Tahfidz An-Nur — Pendidikan Al-Qur\'an Terpercaya di Depok',
    template: '%s | Rumah Tahfidz An-Nur',
  },
  description:
    'Yayasan Pendidikan Islam An-Nur hadir sebagai mitra Ayah Bunda untuk membentengi ananda dengan cahaya Al-Qur\'an. Program Pra-Tahsin, Tahsin & Tajwid, dan Tahfidz Cilik di Depok, Jawa Barat.',
  keywords: [
    'rumah tahfidz',
    'TPA Depok',
    'tahfidz quran anak',
    'pendidikan islam anak',
    'belajar quran',
    'tahsin tajwid',
  ],
  openGraph: {
    title: 'Rumah Tahfidz An-Nur — Pendidikan Al-Qur\'an Terpercaya',
    description: 'Mencetak Generasi Qur\'ani sejak dini bersama Yayasan An-Nur Depok.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body className="font-body bg-[#FDFAF4] text-[#1C1C1C] antialiased">
        <Navbar />
        <main className="min-h-screen transition-opacity duration-300">
          {children}
        </main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
