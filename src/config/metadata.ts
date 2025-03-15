// Konfigurasi metadata untuk aplikasi
export const baseURL = "printify.heinz.id";

export const siteConfig = {
  name: "Printify",
  description: "Solusi Cetak Foto dan Dokumen untuk Sekolah dan Pondok Pesantren",
  url: `https://${baseURL}`,
  ogImage: `https://${baseURL}/images/og/default.png`,
  links: {
    twitter: "https://twitter.com/printify",
    instagram: "https://instagram.com/printify",
  },
};

// Konfigurasi metadata untuk halaman info
export const infoPages = {
  about: {
    title: "Tentang Kami",
    description:
      "Pelajari lebih lanjut tentang Printify, layanan cetak foto dan dokumen terbaik untuk sekolah dan pondok pesantren.",
    path: "/about",
  },
  pricing: {
    title: "Harga",
    description:
      "Lihat daftar harga dan paket layanan cetak foto dan dokumen Printify untuk sekolah dan pondok pesantren.",
    path: "/pricing",
  },
  faq: {
    title: "FAQ",
    description:
      "Pertanyaan yang sering diajukan tentang layanan cetak foto dan dokumen Printify untuk sekolah dan pondok pesantren.",
    path: "/faq",
  },
  contact: {
    title: "Hubungi Kami",
    description:
      "Hubungi tim Printify untuk pertanyaan, dukungan, atau kerjasama terkait layanan cetak foto dan dokumen.",
    path: "/contact",
  },
};
