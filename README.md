# AuroraSoft — Website Software House Premium

Website korporat modern untuk software house dengan gaya minimalis, profesional, dan tech-forward. Dibangun menggunakan React + Vite + Tailwind dengan komponen reusable dan animasi halus.

## Fitur Utama
- Hero 3D halus dengan glassmorphism dan elemen blob mengambang (subtle futuristic), hanya di hero
- Animasi scroll fade-in berulang menggunakan `IntersectionObserver` (elemen akan animasi setiap masuk viewport)
- Halaman lengkap: Home, Work (portfolio + filter kategori), Services (ikon dan copy informatif), Team (carousel avatar, center scale 1.5x), Contact (form + peta + sosial)
- Desain premium: white space luas, tipografi besar, palet warna brand elegan, hover effects yang refined
- Data proyek terpusat agar konsisten antar halaman

## Teknologi
- React 18, Vite 6, TypeScript
- Tailwind CSS (custom theme + animasi)
- React Router
- Ikon: `lucide-react` (utama), `react-icons` (pelengkap)
- Font: Inter (Google Fonts)

## Menjalankan
- Instal dependencies: `npm install`
- Dev server: `npm run dev` lalu buka `http://localhost:5173/`
- Build produksi: `npm run build`
- Preview produksi (local): `npm run preview`

## Struktur Proyek Singkat
- Routing: `src/App.tsx` — halaman Home, Work, Services, Team, Contact
- Gaya global: `src/styles.css` — Tailwind layers, utilitas (`.glass`, `.hero-shape`, `.reveal`)
- Konfigurasi Tailwind: `tailwind.config.js` — palet brand, `shadow-soft`, keyframes `float` dan `fadeInUp`
- Data proyek: `src/data/projects.ts` — daftar proyek untuk Work & Featured Work
- Komponen inti:
  - `src/components/Hero3D.tsx` — panel 3D halus di hero (lihat `d:\Project\sam\compro\src\components\Hero3D.tsx:22`)
  - `src/components/Reveal.tsx` — animasi scroll fade-in berulang
  - `src/components/ProjectCard.tsx` — kartu portfolio dengan hover scale dan tags
  - `src/components/ServiceCard.tsx` — kartu layanan minimalis dengan ikon
  - `src/components/TeamCarousel.tsx` — carousel horizontal, avatar tengah scale 1.5x

## Halaman
- Home: `src/pages/Home.tsx`
  - Hero dengan CTA: `src/components/Hero3D.tsx:7`
  - Expertise + ikon lucide dan copy lebih panjang: `src/pages/Home.tsx:16`
  - Featured Work sinkron data Work (3 proyek teratas): `src/pages/Home.tsx:29`
  - Why choose us + ikon lucide dan copy informatif: `src/pages/Home.tsx:33`
  - Clients, Stats, Testimonials dengan `Reveal` bertahap: `src/pages/Home.tsx:63`, `:77`, `:94`
- Work: `src/pages/Work.tsx`
  - Grid 3 kolom dengan filter kategori (All/Web/Mobile/AI/Cloud): `d:\Project\sam\compro\src\pages\Work.tsx:21`
- Services: `src/pages/Services.tsx`
  - Kartu layanan 2–3 kolom dengan soft shadow + ikon: `d:\Project\sam\compro\src\pages\Services.tsx:23`
- Team: `src/pages/Team.tsx`
  - Carousel avatar, center scale: `d:\Project\sam\compro\src\components\TeamCarousel.tsx:41`
- Contact: `src/pages/Contact.tsx`
  - Form (name, email, message), peta Google, link sosial, HQ & kontak

## Animasi
- Float (blob hero): `tailwind.config.js:27` digunakan di `Hero3D.tsx:23`–`:25` via `animate-float`
- Fade-in up (scroll reveal): `tailwind.config.js:31` alias `animation.fadeInUp` dipakai oleh `.reveal.in-view`
- Komponen `Reveal`:
  - Menggunakan `IntersectionObserver` dengan threshold 0.2 untuk toggle kelas `in-view`
  - Replay animasi saat elemen keluar lalu masuk viewport lagi
  - Contoh pakai: bungkus elemen dengan `<Reveal delay={i * 80}>...</Reveal>`

## Kustomisasi
- Warna brand: ubah di `tailwind.config.js:10`–`:21`
- Font: ubah import di `src/styles.css:1`
- Logo & nama brand: `src/components/Navbar.tsx:6` dan footer `src/components/Footer.tsx:5`
- Data proyek: `src/data/projects.ts` (terpakai di Work & Featured Work)
- Tim: edit list di `src/components/TeamCarousel.tsx:10`
- Peta: ubah `src` iframe di `src/pages/Contact.tsx:23`
- Copy: semua teks mudah disesuaikan di file halaman terkait

## Prinsip Aksesibilitas
- Gunakan alt pada gambar, label pada input, dan kontras warna yang cukup
- Hindari animasi berlebihan; animasi telah disetel halus untuk mengurangi distraksi

## Keamanan
- Tidak menyimpan secrets dalam repo
- Hindari menempatkan kunci API langsung di klien; gunakan env server-side jika diperlukan

## Deploy
- Hasil build berada di `dist/`
- Cocok untuk static hosting (Netlify, Vercel, GitHub Pages) atau reverse-proxy Nginx

## Lisensi
- Tambahkan lisensi sesuai kebutuhan organisasi Anda