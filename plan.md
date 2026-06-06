# 📋 Agentic Prompting Plan — Website Yayasan Rumah Tahfidz
**Stack:** Next.js 16 (App Router) · Tailwind CSS · Shadcn/UI  
**Tujuan:** Company profile yayasan pendidikan Al-Qur'an yang membangun kepercayaan orang tua dan mempermudah pendaftaran santri baru.

---

## 🎨 Design Direction (Baca sebelum semua task)

**Nama Tema:** *Cahaya Hijau Daun* — Islamic Organic Warmth  
**Tone:** Hangat, amanah, bersih. Bukan kaku formal, bukan terlalu playful.  
**Palette:**
```
--color-primary:     #1A6B3A   /* Hijau hutan dalam — warna dominan */
--color-primary-light: #2E9E5B /* Hijau segar — tombol & aksen */
--color-accent:      #C9A84C   /* Emas tembaga — hiasan kaligrafi */
--color-warm-bg:     #FDFAF4   /* Krem susu — background utama */
--color-text:        #1C1C1C   /* Tinta gelap */
--color-text-muted:  #6B6B6B
--color-surface:     #FFFFFF
--color-border:      #E8E0D0
```
**Tipografi:**
- Display / Heading: `Amiri` (Google Fonts) — serif berkelas, nuansa manuskrip islami
- Body: `Plus Jakarta Sans` — modern & readable
- Arabic / Ayat: `Scheherazade New` — untuk kutipan Al-Qur'an

**Motif Visual:**
- Ornamen geometri islami (bintang 8, arabesk) sebagai divider section — SVG subtle, bukan noisy
- Gradien lembut dari `#FDFAF4` ke `#EFF7F2` antar section
- Tidak ada drop shadow keras — gunakan ring/border halus
- Foto placeholder: unsplash query `"children quran learning"`, `"islamic school kids"`

---

## 📦 TASK 1 — Project Setup & Global Layout

**Objective:** Inisialisasi project Next.js dan bangun komponen global (Navbar, Footer, Root Layout) yang akan digunakan di semua halaman.

### Prompt untuk Agent:

```
You are a senior Next.js frontend developer building a company profile website for an Indonesian Islamic children's education foundation (Rumah Tahfidz / TPA). 

Your task is TASK 1: Project Setup & Global Layout.

**Tech Stack:**
- Next.js 14 with App Router
- Tailwind CSS
- TypeScript (optional, use JSX if simpler)
- Google Fonts: Amiri (headings), Plus Jakarta Sans (body), Scheherazade New (arabic text)

**Design System (apply consistently to ALL components):**
- Primary color: #1A6B3A (deep forest green)
- Primary light: #2E9E5B (fresh green for buttons/hover)
- Accent: #C9A84C (warm gold for decorative elements)
- Background: #FDFAF4 (warm cream)
- Surface: #FFFFFF
- Border: #E8E0D0
- Text: #1C1C1C, Muted: #6B6B6B
- Border radius: rounded-xl for cards, rounded-full for buttons
- Heading font: 'Amiri', serif
- Body font: 'Plus Jakarta Sans', sans-serif

**What to build:**

1. `tailwind.config.js` — extend theme with the custom colors and font families above.

2. `src/app/globals.css` — import Google Fonts, define CSS variables, set base body styles (font, bg color, text color).

3. `src/app/layout.jsx` — Root layout wrapping all pages with <Navbar> and <Footer>.

4. `src/components/layout/Navbar.jsx`:
   - Sticky top, background: white/90 with backdrop-blur
   - Left: Logo placeholder (green rectangle + text "Rumah Tahfidz An-Nur")
   - Center: Nav links — Beranda, Tentang Kami, Program, Galeri, Kontak
   - Right: CTA button "Daftar Sekarang" (solid green, rounded-full, links to /daftar)
   - Mobile: hamburger menu with slide-down drawer
   - Active link underline using green accent

5. `src/components/layout/Footer.jsx`:
   - 3-column grid layout
   - Col 1: Logo + tagline "Mencetak Generasi Qur'ani sejak dini."
   - Col 2: Quick Links (Beranda, Program, Tentang Kami, FAQ)
   - Col 3: Contact info — WhatsApp: 0812-XXXX-XXXX, Email: info@rumahtahfidz-annur.id, Alamat: Jl. Margonda Raya No. XX, Depok, Jawa Barat
   - Bottom bar: Social media icons (Instagram, YouTube, Facebook) + copyright "© 2026 Yayasan Pendidikan Islam An-Nur. All rights reserved."
   - Jam operasional: Senin–Sabtu, 07.00–17.00 WIB
   - Background: #1A6B3A (green), text: white

6. `src/components/ui/Button.jsx` — reusable button component with variants: 'primary' (solid green), 'outline' (border green), 'ghost'.

7. `src/lib/utils.js` — export a `cn()` helper using clsx + tailwind-merge.

**Output:** Provide all file contents. Each file should start with a comment `// File: path/to/file`. Make sure imports are correct. Use placeholder href="#" for links where pages don't exist yet.
```

---

## 📦 TASK 2 — Halaman Beranda (/)

**Objective:** Bangun halaman landing page utama yang memukau, memuat Hero, Keunggulan, Preview Program, dan Testimoni.

### Prompt untuk Agent:

```
You are a senior Next.js frontend developer continuing work on a company profile website for an Indonesian Islamic children's education foundation (Rumah Tahfidz An-Nur).

TASK 2: Build the Homepage at `src/app/(beranda)/page.jsx`.

**Design System** (same as established):
- Colors: primary #1A6B3A, accent gold #C9A84C, warm bg #FDFAF4
- Fonts: 'Amiri' for headings, 'Plus Jakarta Sans' for body
- Decorative element: use an inline SVG of a subtle 8-pointed star (Islamic geometric) as section dividers, colored #C9A84C at 20% opacity

**Sections to build (in order):**

### Section 1 — Hero
- Full viewport height (min-h-screen)
- Background: layered gradient from #1A6B3A to #0F4526, with a subtle SVG arabesque pattern overlay at 8% opacity (create as inline SVG or CSS background)
- Center-aligned content:
  - Small label badge: "بِسْمِ اللَّهِ" in Scheherazade New font, gold color, above headline
  - H1 headline: "Mencetak Generasi Qur'ani, Cerdas, dan Berakhlak Mulia." (Amiri font, large, white)
  - Subheadline paragraph (Plus Jakarta Sans, white/80): "Investasi akhirat terbaik Ayah Bunda dimulai dari sini. Mari bersama-sama menanamkan kecintaan ananda pada Al-Qur'an sejak usia dini dalam lingkungan yang aman, ceria, dan penuh kasih sayang."
  - Two buttons: "Daftar Sekarang" (solid white bg, green text) + "Lihat Program" (outline white)
  - Scroll-down arrow animation at bottom

### Section 2 — Stats Bar
- Full-width strip, background white, border-y border-[#E8E0D0]
- 4 stats in a row: "500+ Santri Aktif", "15 Asatidz Berpengalaman", "8 Tahun Berdiri", "3 Cabang Depok"
- Each stat: large number in green Amiri font + label in muted gray

### Section 3 — Mengapa Memilih Kami?
- Background: #FDFAF4
- Section title: "Mengapa Memilih Kami?" (centered, Amiri h2)
- 3 cards in a grid (md:grid-cols-3), each card:
  - Icon (use emoji or simple SVG): 📖 Metode Menyenangkan, 🤲 Asatidz Berdedikasi, ✨ Fokus pada Adab
  - Card copy from blueprint:
    - "Belajar Al-Qur'an tanpa rasa bosan. Kami menggunakan pendekatan psikologi anak agar ananda rindu untuk terus belajar."
    - "Dibimbing langsung oleh pengajar yang sabar, tersertifikasi, dan berpengalaman dalam dunia pendidikan anak."
    - "Bukan sekadar fasih membaca, kami juga menanamkan adab islami harian yang akan menjadi fondasi akhlak ananda di rumah."
  - Card: white bg, gold top-border accent (border-t-4 border-[#C9A84C]), rounded-xl, shadow-sm

### Section 4 — Sekilas Program
- Background: gradient from #EFF7F2 to #FDFAF4
- Section title: "Program Unggulan Kami"
- 3 program cards (from data): Pra-Tahsin, Tahsin & Tajwid, Tahfidz Cilik
- Each: colored badge (age range), title, short description, "Selengkapnya →" link
- CTA at bottom: "Lihat Semua Program" button (outline green)

### Section 5 — Testimoni
- Background: #1A6B3A
- Section title: "Kata Mereka" in white Amiri font
- 3 testimoni cards (white bg, rounded-xl):
  - "Alhamdulillah, anak saya yang tadinya susah diajak ngaji, sekarang malah yang ngajak ke TPA duluan!" — Bunda Aisyah, Wali Santri
  - "Gurunya sabar sekali, anak saya jadi lebih percaya diri membaca Al-Qur'an." — Ayah Rizki, Wali Santri
  - "Programnya terstruktur, progress ananda bisa dipantau tiap bulan. Sangat profesional." — Bunda Fatimah, Wali Santri
  - Each card: star rating ⭐⭐⭐⭐⭐, quote text, name + label
- Gold quotation mark decorative element

### Section 6 — CTA Banner
- Background: gold gradient (#C9A84C to #A8873E)
- Text: "Siap Memulai Perjalanan Qur'ani Ananda?" + button "Daftar Sekarang" (green)

**Output:** Full `src/app/(beranda)/page.jsx` file. Use Tailwind classes exclusively. Import Button from @/components/ui/Button. No external component libraries needed. Use Next.js <Link> for navigation. Add 'use client' if needed for interactivity.
```

---

## 📦 TASK 3 — Halaman Tentang Kami & Program

**Objective:** Bangun dua halaman konten: profil yayasan dan detail program belajar.

### Prompt untuk Agent:

```
You are a senior Next.js frontend developer continuing work on the Rumah Tahfidz An-Nur website.

TASK 3: Build two content pages.

**Design System** (consistent):
- Colors: primary #1A6B3A, accent #C9A84C, bg #FDFAF4
- Fonts: 'Amiri' headings, 'Plus Jakarta Sans' body

---

### FILE 1: `src/app/tentang-kami/page.jsx`

Build the Tentang Kami page with these sections:

**Section 1 — Page Hero**
- Small full-width banner: bg #1A6B3A, white text
- Title "Tentang Kami", breadcrumb "Beranda > Tentang Kami"

**Section 2 — Pengantar / Sejarah**
- 2-column layout (text left, decorative right)
- Arabic quote: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم" in large Scheherazade New font, green color
- Heading: "Bismillah, Bermula dari Kepedulian untuk Umat"
- Body text: "Kami menyadari bahwa tantangan membesarkan anak di era digital semakin besar. Yayasan kami hadir sebagai mitra Ayah Bunda untuk membentengi ananda dengan cahaya Al-Qur'an."
- Founded year badge, location badge (Depok, Jawa Barat)
- Right side: decorative Islamic geometric SVG (octagram pattern) in green/gold

**Section 3 — Visi & Misi**
- Two cards side by side
- Visi card (green bg, white text): "Menjadi lembaga pendidikan Al-Qur'an terpercaya yang melahirkan generasi rabbani, berakhlak mulia, dan cinta Al-Qur'an."
- Misi card (white bg, green border): bulleted list — "Menyelenggarakan pembelajaran Al-Qur'an yang menyenangkan dan terstruktur", "Membina karakter islami melalui keteladanan", "Membangun kemitraan aktif bersama keluarga santri", "Mengembangkan kurikulum berbasis tahapan usia anak"

**Section 4 — Legalitas**
- Simple info strip: SK Kemenkumham No. XXX/2018, Terdaftar di Kemenag Kota Depok, NPWP Yayasan: XX.XXX.XXX.X-XXX.XXX
- Icon + text layout, bg white, border rounded-xl

**Section 5 — Profil Asatidz**
- Section title: "Tim Asatidz Kami"
- Intro quote: "Setiap huruf yang ananda baca adalah amanah bagi kami."
- 4 profile cards in a grid:
  - Ustadz Ahmad Fauzi, S.Pd.I — Kepala Program, Hafidz 30 Juz, pengalaman 10 tahun
  - Ustadzah Nur Azizah — Kelas Pra-Tahsin, spesialis psikologi anak usia dini
  - Ustadz Hasan Basri — Tahsin & Tajwid, lulusan pesantren tahfidz
  - Ustadzah Maryam Sari — Tahfidz Cilik, metode muraja'ah kreatif
  - Each card: avatar circle placeholder (green bg, white initial), name, title, credential badges

---

### FILE 2: `src/app/program/page.jsx`

Build the Program Belajar page:

**Section 1 — Page Hero**
- Same style as tentang-kami hero banner
- Title: "Program Belajar", subtitle: "Langkah Terarah Menuju Cahaya Al-Qur'an"

**Section 2 — Intro Filosofi**
- Centered text: "Setiap anak itu unik. Oleh karena itu, kami merancang kurikulum yang disesuaikan dengan tahapan usia dan kemampuan ananda."
- Learning path visual: horizontal stepper/timeline showing 3 stages

**Section 3 — 3 Program Cards (Detailed)**
For each program, build an expanded card with:

**Pra-Tahsin** (usia 4–6 tahun)
- Badge: "Usia 4–6 Tahun" (green), "Pemula"
- Description: "Bermain sambil mengenal huruf Hijaiyah. Menumbuhkan rasa cinta melalui metode berkisah (sirah) dan nasyid edukatif."
- Materi: Pengenalan Huruf Hijaiyah, Hafalan doa harian, Sirah Nabawiyah dasar, Nasyid & lagu islami
- Jadwal: Senin, Rabu, Jumat — 15.30–17.00 WIB
- Infak: Rp 150.000/bulan

**Tahsin & Tajwid** (usia 7–12 tahun)
- Badge: "Usia 7–12 Tahun", "Menengah"
- Description: "Fokus memperbaiki makharijul huruf dan hukum bacaan agar tartil sesuai tuntunan."
- Materi: Makharijul Huruf, Hukum Nun Mati & Tanwin, Hukum Mim Mati, Mad & Qasr, Waqaf & Ibtida'
- Jadwal: Selasa, Kamis, Sabtu — 15.30–17.00 WIB
- Infak: Rp 175.000/bulan

**Tahfidz Cilik** (usia 7–15 tahun)
- Badge: "Usia 7–15 Tahun", "Program Unggulan"
- Description: "Bimbingan hafalan Juz 30 dengan metode muraja'ah rutin yang menyenangkan tanpa membebani anak."
- Materi: Target hafalan bertahap (An-Nas hingga An-Naba'), Muraja'ah harian, Tasmi' mingguan, Sertifikat per juz
- Jadwal: Senin–Jumat — 07.00–08.30 WIB (pagi) atau 15.30–17.00 WIB
- Infak: Rp 250.000/bulan

**Section 4 — Jadwal Kegiatan Tabel**
- Simple responsive table: Hari | Waktu | Kelas | Pengajar
- Striped rows (even: white, odd: #F4FAF6)

**Section 5 — CTA**
- "Masih bingung program mana yang tepat untuk ananda? Konsultasikan langsung dengan kami."
- WhatsApp button link + Daftar Sekarang button

**Output:** Two complete files. Use 'use client' only where needed. All Tailwind classes. Export default page components.
```

---

## 📦 TASK 4 — Halaman Galeri, Kontak & FAQ

**Objective:** Bangun halaman galeri foto dan halaman kontak lengkap dengan FAQ accordion.

### Prompt untuk Agent:

```
You are a senior Next.js frontend developer continuing work on the Rumah Tahfidz An-Nur website.

TASK 4: Build the Gallery and Contact pages.

**Design System** (consistent):
- Colors: primary #1A6B3A, accent #C9A84C, bg #FDFAF4
- Fonts: 'Amiri' headings, 'Plus Jakarta Sans' body

---

### FILE 1: `src/app/galeri/page.jsx`

**Section 1 — Page Hero**
- Banner: bg #1A6B3A, title "Galeri Kegiatan", subtitle "Sekilas momen kebersamaan kami"

**Section 2 — Filter Tabs**
- 'use client' component
- Filter buttons: Semua | Kegiatan Belajar | Acara Mabit | Wisuda Santri | Hari Besar Islam
- Active tab: solid green bg, inactive: outline green

**Section 3 — Photo Grid**
- Masonry-style grid (CSS columns: 2 cols mobile, 3 cols desktop)
- 12 placeholder image cards using:
  `https://source.unsplash.com/random/600x400?sig={n}&quran,children,learning`
  (use n = 1..12 for variation)
- Each image: rounded-xl, overflow-hidden, hover: scale-105 transition, overlay with caption on hover
- Captions (create 12 varied captions): "Kelas Pra-Tahsin", "Mabit Ramadhan 1446H", "Wisuda Santri Juz 30", "Belajar bersama Ustadz", "Kegiatan halaqah pagi", etc.

**Section 4 — Video Section**
- Single centered card: YouTube embed placeholder (use a green placeholder div with play button SVG)
- Title: "Dokumentasi Mabit Ramadhan 1446H"
- Caption: "Malam penuh berkah bersama para santri dan wali murid."

---

### FILE 2: `src/app/kontak/page.jsx`

**Section 1 — Page Hero**
- Banner: title "Kontak & FAQ"

**Section 2 — Contact Cards**
- 3-column grid of contact info cards:
  - 📱 WhatsApp Admin: 0812-3456-7890 (link: https://wa.me/6281234567890) — "Respon cepat di jam operasional"
  - 📧 Email: info@rumahtahfidz-annur.id — "Balas dalam 1x24 jam"
  - 📍 Alamat: Jl. Margonda Raya No. 45, Depok, Jawa Barat 16424
- Each card: white bg, green icon, gold accent line, rounded-xl

**Section 3 — 2-Column Layout**
Left (60%): Contact form
- 'use client'
- Fields: Nama Lengkap, Nomor WhatsApp, Pilih Program (dropdown: Pra-Tahsin/Tahsin/Tahfidz), Pesan/Pertanyaan (textarea)
- Submit button: "Kirim via WhatsApp" — on submit, build WA deep link:
  `https://wa.me/6281234567890?text=Assalamu'alaikum, saya ${nama} ingin bertanya tentang program ${program}. ${pesan}`
- Form validation: required fields highlight red on empty submit

Right (40%): Embed Google Maps placeholder
- Use an iframe placeholder (green bg div) with address text overlay
- Note: "Pasang Google Maps Embed API key di sini"
- Jam Operasional card below map:
  Senin–Jumat: 07.00–17.00 WIB | Sabtu: 08.00–14.00 WIB | Ahad: Libur

**Section 4 — FAQ Accordion**
- 'use client' — useState for open/close
- Section title: "Pertanyaan yang Sering Ditanyakan (FAQ)"
- 8 FAQ items with smooth open/close animation (max-height transition):
  1. "Berapa usia minimal untuk mendaftar?" → "Kami menerima santri mulai usia 4 tahun untuk program Pra-Tahsin."
  2. "Apakah ada biaya pendaftaran?" → "Terdapat biaya pendaftaran awal sebesar Rp 100.000 yang mencakup seragam dan buku panduan."
  3. "Bagaimana metode pembelajaran yang digunakan?" → "Kami menggunakan metode Ummi dan Tilawati yang telah teruji, disesuaikan dengan usia dan kemampuan ananda."
  4. "Apakah orang tua bisa memantau progress ananda?" → "Kami menyediakan laporan perkembangan bulanan dan parent meeting tiap semester."
  5. "Berapa kapasitas santri per kelas?" → "Maksimal 15 santri per kelas untuk memastikan perhatian optimal dari asatidz."
  6. "Apakah ada program untuk anak berkebutuhan khusus?" → "Kami sedang mengembangkan program inklusi. Silakan hubungi admin untuk konsultasi lebih lanjut."
  7. "Bagaimana alur pendaftaran?" → "Isi formulir online → Konfirmasi via WhatsApp → Placement test ringan → Mulai belajar. Mudah, Insya Allah!"
  8. "Apakah ada diskon untuk kakak-adik?" → "Ya, terdapat keringanan infak 10% untuk santri kedua dan seterusnya dari keluarga yang sama."
- Accordion style: border-b, chevron icon rotates on open, answer text in muted color

**Output:** Two complete files with 'use client' where needed.
```

---

## 📦 TASK 5 — Halaman Pendaftaran, Data Layer & Polish

**Objective:** Bangun halaman pendaftaran, file data statis, dan lakukan final polish keseluruhan project.

### Prompt untuk Agent:

```
You are a senior Next.js frontend developer completing the final task for the Rumah Tahfidz An-Nur website.

TASK 5: Registration page, data files, and final polish.

**Design System** (consistent):
- Colors: primary #1A6B3A, accent #C9A84C, bg #FDFAF4
- Fonts: 'Amiri' headings, 'Plus Jakarta Sans' body

---

### FILE 1: `src/data/programs.js`
Export an array of program objects:
```js
export const programs = [
  {
    id: 'pra-tahsin',
    name: 'Pra-Tahsin',
    ageRange: '4–6 Tahun',
    level: 'Pemula',
    description: '...',
    materi: [...],
    schedule: 'Senin, Rabu, Jumat — 15.30–17.00 WIB',
    infak: 150000,
    color: '#2E9E5B',
    icon: '📖'
  },
  // ... tahsin, tahfidz
]
```

### FILE 2: `src/data/faq.js`
Export array of 8 FAQ objects: `{ id, question, answer }`

### FILE 3: `src/app/daftar/page.jsx`

Build the Registration page:

**Section 1 — Hero Banner**
- bg #1A6B3A, centered
- Title: "Daftar Santri Baru"
- Subtitle: "Alhamdulillah, ini adalah langkah awal Ayah Bunda untuk menghadiahkan mahkota kemuliaan di akhirat kelak."
- Arabic text: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا" (Scheherazade New, gold)

**Section 2 — Alur Pendaftaran (Steps)**
- Horizontal step indicator: 4 steps
  1. 📝 Isi Formulir — Lengkapi data ananda secara online
  2. 💬 Konfirmasi WA — Tim kami akan menghubungi dalam 1x24 jam
  3. 📋 Placement Test — Tes ringan untuk penempatan kelas yang tepat
  4. 🎉 Mulai Belajar — Ananda siap bergabung dengan keluarga kami!
- Each step: circle number (green), title, description below
- Connected by dashed line

**Section 3 — Registration Form**
- 'use client'
- 2-column form layout (on desktop), single column on mobile
- Fields:
  LEFT COLUMN:
  - Nama Lengkap Santri (text, required)
  - Nama Panggilan (text)
  - Tempat, Tanggal Lahir (text + date)
  - Jenis Kelamin (radio: Laki-laki / Perempuan)
  - Alamat Rumah (textarea)
  
  RIGHT COLUMN:
  - Nama Ayah / Wali (text, required)
  - Nomor WhatsApp Aktif (tel, required)
  - Email (email)
  - Program yang Diminati (select: Pra-Tahsin / Tahsin & Tajwid / Tahfidz Cilik, required)
  - Pilihan Jadwal (select based on program)
  - Pertanyaan / Catatan Khusus (textarea)
  
  FULL WIDTH:
  - Checkbox: "Saya menyetujui bahwa data yang diisi adalah benar dan bersedia mengikuti tata tertib yayasan."
  - Submit button: "Kirim Pendaftaran via WhatsApp" (full width, large, solid green)
  
- On submit: validate required fields, build formatted WhatsApp message, open `https://wa.me/6281234567890?text=...`
- Success state: show a thank-you card with green checkmark

**Section 4 — Jaminan / Reassurance**
- 3 small badges below form: 🔒 Data Aman & Rahasia | ⚡ Respon Cepat | 💚 Tanpa Syarat Berat

---

### FILE 4: `src/components/ui/Button.jsx` (finalize if not done)
Variants: primary, outline, ghost, danger
Sizes: sm, md, lg
With loading state (spinner)

### FILE 5: `src/components/sections/HeroSection.jsx`
Reusable inner-page hero banner component:
Props: title, subtitle, breadcrumbs[]
Used by tentang-kami, program, galeri, kontak, daftar pages

### FINAL POLISH CHECKLIST — Apply to all pages:
1. Add `<title>` and `<meta description>` via Next.js `export const metadata` on each page
2. Add `loading="lazy"` to all images
3. Ensure all interactive elements have `focus-visible:ring-2 ring-[#1A6B3A]` for accessibility
4. Add `aria-label` to icon-only buttons
5. Ensure mobile responsiveness — test breakpoints: sm (640px), md (768px), lg (1024px)
6. Add smooth scroll: `html { scroll-behavior: smooth }` in globals.css
7. Page transitions: add `transition-opacity duration-300` to main content areas

**Output:** All 5 files with complete, production-ready code. Note any npm packages that need to be installed (besides Next.js and Tailwind which are already set up).
```

---

## 🚀 Urutan Eksekusi

| # | Task | Dependencies | Estimasi |
|---|------|-------------|----------|
| 1 | Setup & Global Layout | — | 30 menit |
| 2 | Halaman Beranda | Task 1 selesai | 45 menit |
| 3 | Tentang Kami & Program | Task 1 selesai | 45 menit |
| 4 | Galeri, Kontak & FAQ | Task 1 selesai | 40 menit |
| 5 | Pendaftaran & Polish | Task 1–4 selesai | 40 menit |

**Task 2, 3, 4 bisa dijalankan paralel** setelah Task 1 selesai.

---

## 📦 Packages yang Dibutuhkan

```bash
# Core (sudah ada di Next.js default)
npx create-next-app@latest my-yayasan-app --tailwind --app --jsx

# Tambahan yang dibutuhkan
npm install clsx tailwind-merge          # untuk cn() utility
npm install lucide-react                 # icons (chevron, phone, mail, map-pin, dll)
npm install @tailwindcss/typography      # untuk konten teks panjang
```

---

*Dokumen ini dibuat berdasarkan blueprint `blueprint-website-yayasan-v2.pdf`*  
*Versi: 1.0 — Juni 2026*
