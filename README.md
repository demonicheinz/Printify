<div align="center">

<!-- ![Banner](/assets/banner.png) -->

<br>

![Next.js](https://img.shields.io/badge/Next.js-black?logo=nextdotjs&labelColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-black?logo=typescript&labelColor=black)
![React](https://img.shields.io/badge/React-black?logo=react&labelColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-black?logo=tailwindcss&labelColor=black)

![GitHub License](https://img.shields.io/github/license/demonicheinz/Printify?logo=creative-commons&logoColor=white&label=License)
![GitHub last commit](https://img.shields.io/github/last-commit/demonicheinz/Printify?logo=github&label=Last%20Commit)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/demonicheinz/Printify/CodeQL.yml?branch=main&logo=github&label=Build)
[![Live Preview](https://img.shields.io/badge/Live%20Preview-🔗-blue?logo=vercel&logoColor=white)](https://printify-omega.vercel.app//)

</div>

## Daftar Isi

1. [Deskripsi](#deskripsi)
2. [Fitur Utama](#fitur-utama)
3. [Fitur Keamanan](#fitur-keamanan)
4. [Tech Stack](#tech-stack)
5. [Cara Memulai](#cara-memulai)
6. [Struktur Proyek](#struktur-proyek)
7. [Model Data](#model-data)
8. [User Journey](#user-journey)
6. [Deployment](#deployment)
7. [Kontribusi](#kontribusi)
8. [Lisensi](#lisensi)
9. [Kontak](#kontak)

## Deskripsi

Printify adalah aplikasi web untuk mendukung bisnis printing, dengan fokus pada segmen pelanggan anak sekolah. Aplikasi ini memungkinkan pengguna untuk mengumpulkan, menata, dan mencetak foto dan dokumen dengan berbagai layout yang fleksibel.

## Fitur Utama

### 📋 Sistem Layout Fleksibel
- **Single Layout (1×1)**: Satu foto per halaman
- **Tile Layout (Grid)**: Layout berdasarkan grid dari 1×1 hingga 24×24
- **Cell Size Layout**: Layout berdasarkan ukuran fisik foto (3R, 4R, custom size, dll)

### 🔧 Customization Options
- Orientasi kertas (portrait/landscape)
- Ukuran kertas (A4, F4)
- Cell spacing
- Opsi foto (fill, fit, stretch)
- Custom size dalam mm (dengan konversi ke cm)

### 👁️ Preview & Arrangement
- Live preview layout
- Interface drag-and-drop untuk mengatur foto
- Preview final berkualitas tinggi

### 👥 Multi-level User Access
- **Guest**: Order tanpa mendaftar
- **Registered User**: Riwayat order dan fitur tambahan
- **Admin**: Manajemen order dan sistem

### 🖼️ Image Management
- Upload multi-file
- Basic editing (crop, rotate, straighten, flip, brightness/contrast)
- Auto-arrangement

### 📊 Order Management
- Status tracking
- Notifikasi
- Riwayat pesanan

## Fitur Keamanan

- Time-limited storage (3 bulan)
- Auto-backup ke penyimpanan lokal
- Permission control berbasis role

## Tech Stack

Printify dibangun dengan:

- **Frontend**:
  - Next.js 15 dengan App Router
  - TypeScript
  - TailwindCSS
  - shadcn/ui & RadixUI

- **Backend**:
  - Supabase untuk database PostgreSQL
  - Supabase Auth untuk autentikasi
  - Supabase Storage untuk penyimpanan media

## Cara Memulai

### Prasyarat

- **Node.js** `v18` atau yang lebih baru → [Download Node.js](https://nodejs.org/)
- **Package Manager**:  
  - [`pnpm`](https://pnpm.io/) (disarankan)  
  - [`npm`](https://www.npmjs.com/)  
  - [`yarn`](https://yarnpkg.com/)  
  - [`bun`](https://bun.sh/)
- **Akun Supabase** → [Daftar di Supabase](https://supabase.com/)

### Instalasi

1. Clone repositori:
    ```bash
    git clone https://github.com/demonicheinz/Printify.git
    cd Printify
    ```

2. Instal dependensi:
    ```bash
    pnpm install
    # atau
    npm install
    # atau
    yarn install
    # atau
    bun install
    ```

3. Buat file `.env.local`:\
    Linux & macOS:
    ```bash
    # (bash/zsh)
    cp .env.example .env.local
    ```

    Windows:
    ```bash
    # (CMD/Command Prompt)
    copy .env.example .env.local
    
    # (PowerShell)
    Copy-Item .env.example -Destination .env.local
    ```

4. Edit `.env.local` dan tambahkan konfigurasi berikut:
    ```ini
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
    ```

5. Setup Supabase:
   - Buat proyek baru di Supabase
   - Jalankan SQL yang ada di `supabase/schema.sql` untuk membuat tabel dan kebijakan akses
   - Aktifkan autentikasi email dan buat akun admin pertama

6. Jalankan aplikasi:
    ```bash
    pnpm dev
    # atau
    npm run dev
    # atau
    yarn dev
    # atau
    bun dev
    ```

6. Buka `http://localhost:3000` di browser Anda

## Struktur Proyek

Printify menggunakan struktur folder Next.js App Router standar dengan beberapa modifikasi untuk mendukung fitur-fitur khusus:

```
printify/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   └── favicon.ico
│   └── assets/
├── src/
│   ├── app/            # Next.js App Router
│   ├── components/     # React components
│   ├── lib/            # Utils, helpers, dan client libraries
│   ├── hooks/          # Custom React hooks
│   ├── types/          # TypeScript type definitions
│   ├── actions/        # Server Actions
│   ├── config/         # Configuration files
│   └── styles/         # Global styles
```

Lihat [struktur folder lengkap](./STRUCTURE.md) untuk detail lebih lanjut.

## Model Data

### User
- `id`: UUID
- `email`: String
- `role`: Enum (guest, user, admin)
- `created_at`: Timestamp
- `profile`: Object (name, contact, etc)

### Order
- `id`: UUID
- `user_id`: UUID (Null untuk guest)
- `guest_id`: String (Null untuk registered user)
- `status`: Enum (pending, processing, completed)
- `layout_type`: Enum (single, tile, cell_size)
- `layout_config`: JSON
- `paper_size`: Enum (A4, F4)
- `paper_orientation`: Enum (portrait, landscape)
- `quantity`: Integer
- `notes`: Text
- `created_at`: Timestamp
- `updated_at`: Timestamp

### File
- `id`: UUID
- `order_id`: UUID
- `storage_path`: String
- `position`: JSON (x, y dalam layout)
- `transformations`: JSON
- `created_at`: Timestamp
- `expires_at`: Timestamp

## User Journey

### Guest User
1. Landing page → Create Order
2. Pilih layout (Single, Tile, Cell Size)
3. Konfigurasi layout
4. Upload & arrange foto
5. Preview hasil
6. Checkout (Basic info)
7. Terima order ID & tracking link

### Registered User
1. Login → Dashboard
2. Create New Order / View Past Orders
3. Sama dengan guest, plus:
   - Riwayat pesanan
   - Reorder dengan konfigurasi yang sama
   - Notifikasi status pesanan

### Admin
1. Login → Admin Dashboard
2. Overview pesanan dan statistik
3. Manajemen pesanan
   - View detail pesanan
   - Update status
   - Download file cetak
4. User management

## Deployment

Printify dapat dengan mudah di-deploy ke layanan hosting seperti Vercel atau Netlify:

1. Buat repositori GitHub untuk proyek Anda
2. Hubungkan repositori ke Vercel atau Netlify
3. Konfigurasikan `.env.local` yang diperlukan
4. Deploy!

## Kontribusi

Kontribusi selalu disambut! Silakan ikuti langkah-langkah ini:

1. Fork repositori
2. Buat branch fitur (`git checkout -b feature/amazing-feature`)
3. Commit perubahan Anda (`git commit -m 'Add some amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buka Pull Request

## Lisensi

Didistribusikan di bawah Lisensi MIT. Lihat [LICENSE](./LICENSE) untuk informasi lebih lanjut.

## Kontak

Jika ada pertanyaan atau ingin berkontribusi, jangan ragu untuk menghubungi saya!  

Email: [contact@heinz.id](mailto:contact@heinz.id)
GitHub: [Heinz](https://github.com/demonicheinz)

Made with ❤️ by [Heinz](https://github.com/demonicheinz)

Terima kasih telah melihat proyek ini! **Happy coding**🚀