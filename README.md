# AuroraSoft — Website Software House Premium

Website korporat modern untuk software house dengan gaya minimalis, profesional, dan tech-forward. Kini menggunakan Next.js (App Router) + TypeScript + Tailwind dengan komponen reusable dan animasi halus.

## Fitur Utama
- Hero 3D halus dengan glassmorphism dan elemen blob mengambang (subtle futuristic), hanya di hero
- Animasi scroll fade-in berulang menggunakan `IntersectionObserver` (elemen akan animasi setiap masuk viewport)
- Halaman lengkap: Home, Work (portfolio + filter kategori), Services (ikon dan copy informatif), Team (carousel avatar, center scale 1.5x), Contact (form + peta + sosial)
- Desain premium: white space luas, tipografi besar, palet warna brand elegan, hover effects yang refined
- Data proyek terpusat agar konsisten antar halaman

## Teknologi
- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS (custom theme + animasi)
- Ikon: `lucide-react` (utama), `react-icons` (pelengkap)
- Font: Inter (Google Fonts)

## Menjalankan
- Instal dependencies: `npm install`
- Dev server: `npm run dev` lalu buka `http://localhost:3000/`
- Build produksi: `npm run build`
- Start produksi (local): `npm start`

## Struktur Proyek Singkat
- Routing: App Router di `src/app/`
  - Home: `src/app/page.tsx`
  - Work: `src/app/work/page.tsx`
  - Services: `src/app/services/page.tsx`
  - Team: `src/app/team/page.tsx`
  - Contact: `src/app/contact/page.tsx`
- Gaya global: `src/app/globals.css` — Tailwind layers, utilitas (`.glass`, `.hero-shape`, `.reveal`)
- Konfigurasi Tailwind: `tailwind.config.js` — palet brand, `shadow-soft`, keyframes `float` dan `fadeInUp`
- Data proyek: `src/data/projects.ts` — daftar proyek untuk Work & Featured Work
- Komponen inti:
  - `src/components/Hero3D.tsx` — panel 3D halus di hero
  - `src/components/Reveal.tsx` — animasi scroll fade-in berulang
  - `src/components/ProjectCard.tsx` — kartu portfolio dengan hover scale dan tags
  - `src/components/ServiceCard.tsx` — kartu layanan minimalis dengan ikon
  - `src/components/TeamCarousel.tsx` — carousel horizontal, avatar tengah scale 1.5x

## Halaman
- Home: `src/app/page.tsx`
- Work: `src/app/work/page.tsx`
- Services: `src/app/services/page.tsx`
- Team: `src/app/team/page.tsx`
- Contact: `src/app/contact/page.tsx`

## Animasi
- Float (blob hero): `tailwind.config.js:27` digunakan di `Hero3D.tsx:23`–`:25` via `animate-float`
- Fade-in up (scroll reveal): `tailwind.config.js:31` alias `animation.fadeInUp` dipakai oleh `.reveal.in-view`
- Komponen `Reveal`:
  - Menggunakan `IntersectionObserver` dengan threshold 0.2 untuk toggle kelas `in-view`
  - Replay animasi saat elemen keluar lalu masuk viewport lagi
  - Contoh pakai: bungkus elemen dengan `<Reveal delay={i * 80}>...</Reveal>`

## Kustomisasi
- Warna brand: ubah di `tailwind.config.js:10`–`:21`
- Font: ubah import di `src/app/globals.css`
- Logo & nama brand: `src/components/Navbar.tsx:6` dan footer `src/components/Footer.tsx:5`
- Data proyek: `src/data/projects.ts` (terpakai di Work & Featured Work)
- Tim: edit list di `src/components/TeamCarousel.tsx:10`
- Peta: ubah `src` iframe di `src/app/contact/page.tsx`
- Copy: semua teks mudah disesuaikan di file halaman terkait

## Prinsip Aksesibilitas
- Gunakan alt pada gambar, label pada input, dan kontras warna yang cukup
- Hindari animasi berlebihan; animasi telah disetel halus untuk mengurangi distraksi

## Keamanan
- Tidak menyimpan secrets dalam repo
- Hindari menempatkan kunci API langsung di klien; gunakan env server-side jika diperlukan

## Deploy
- Build output berada di `.next/`
- Deploy ideal: Vercel (native). Untuk server sendiri: `npm run build` lalu `npm start` (Node server Next.js)

## Lisensi
- Tambahkan lisensi sesuai kebutuhan organisasi Anda