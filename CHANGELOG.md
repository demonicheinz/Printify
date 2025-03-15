# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- Implementasi halaman autentikasi (sign-in, sign-up, forgot-password)
- Validasi form menggunakan Zod
- Tombol login sosial (Google, Apple)
- Optimasi font dengan Inter dan JetBrains Mono
- Komponen SectionHeader untuk konsistensi visual di halaman info
- Komponen animasi client menggunakan Framer Motion
- Tombol toggle tema (light/dark mode) dengan ikon sun dan moon
- Logo baru yang responsif terhadap tema
- Accordion untuk bagian FAQ di halaman pricing dan contact
- Peta interaktif di halaman kontak dengan marker lokasi kustom
- Kontrol fullscreen dan layer untuk pengalaman peta yang lebih baik
- Popup informasi kontak dengan tombol petunjuk arah
- Integrasi Leaflet Awesome Markers dengan Font Awesome untuk marker kustom
- Marker tambahan untuk menunjukkan fasilitas di sekitar lokasi
- Dukungan multi-layer peta (OpenStreetMap dan Satelit)
- Komponen PerformanceOptimizer untuk deteksi preferensi pengguna (reduced motion, reduced data)
- Deteksi tipe koneksi untuk mengoptimalkan pengalaman pada koneksi lambat
- Komponen ClientOptimizers untuk mengelola optimasi di sisi klien
- Komponen PasswordInput untuk input password dengan toggle visibility
- Komponen LoadingSpinner untuk indikator loading yang konsisten
- Metadata SEO yang terstruktur untuk semua halaman menggunakan createMetadata
- Konfigurasi robots.txt dan sitemap.xml untuk pengindeksan yang lebih baik
- Penggunaan React.memo untuk optimasi performa pada layout client

### Changed

- Perbaikan layout footer dengan penempatan yang lebih baik
- Penggantian underline dengan transisi warna untuk UX yang lebih baik
- Implementasi pendekatan mobile-first untuk responsivitas
- Pemisahan data ke file terpisah untuk maintainability
- Optimalisasi gambar dengan lazy loading dan placeholder
- Perbaikan layout halaman contact dengan penempatan peta yang lebih baik
- Pemisahan komponen server dan client untuk menghindari error hydration
- Perbaikan animasi hover pada tombol dan kartu pricing
- Peningkatan kecepatan animasi hover untuk responsivitas yang lebih baik
- Perbaikan styling popup peta untuk konsistensi visual
- Pindahkan dynamic import dengan ssr: false ke Client Component untuk mengatasi error SSR
- Perbaikan tipe TypeScript untuk Navigator Connection API
- Restrukturisasi layout auth untuk memisahkan metadata (server component) dan UI (client component)
- Optimasi sitemap dengan pendekatan dinamis menggunakan Object.values
- Perbaikan metadata dengan penggunaan generateMetadata dan destructuring untuk kode yang lebih bersih
- Konsistensi pendekatan metadata di seluruh aplikasi

### Removed

- Scale control pada peta yang menyebabkan masalah konsistensi tampilan

## [1.1.1] - 2025-03-08

### Added

- 

### Fixed

- 

### Changed

- 

### Removed

- 