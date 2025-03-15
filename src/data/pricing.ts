export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
  ctaLink: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Dasar",
    price: "Rp500",
    description: "Per lembar untuk cetak foto standar",
    features: [
      "Layout Single (1×1)",
      "Kertas Ukuran A4/F4",
      "Kualitas Standar",
      "Pengambilan di Toko",
      "Tanpa Akun",
    ],
    popular: false,
    cta: "Mulai Cetak",
    ctaLink: "/create",
  },
  {
    name: "Reguler",
    price: "Rp750",
    description: "Per lembar untuk cetak foto premium",
    features: [
      "Semua fitur Dasar",
      "Layout Grid (hingga 24×24)",
      "Layout Cell Size",
      "Kualitas Premium",
      "Penyimpanan 1 Bulan",
    ],
    popular: true,
    cta: "Pilih Paket",
    ctaLink: "/create",
  },
  {
    name: "Institusi",
    price: "Rp5.000",
    description: "Per siswa untuk cetak massal",
    features: [
      "Semua fitur Reguler",
      "Diskon Volume",
      "Pengiriman ke Lokasi",
      "Penyimpanan 3 Bulan",
      "Dukungan Prioritas",
    ],
    popular: false,
    cta: "Hubungi Kami",
    ctaLink: "/contact",
  },
];

export interface PricingFAQ {
  question: string;
  answer: string;
}

export const pricingFAQs: PricingFAQ[] = [
  {
    question: "Apakah ada biaya tambahan?",
    answer:
      "Tidak ada biaya tersembunyi. Harga yang tercantum sudah termasuk semua fitur yang disebutkan.",
  },
  {
    question: "Bagaimana cara pembayaran?",
    answer: "Kami menerima pembayaran tunai, transfer bank, dan QRIS untuk semua layanan.",
  },
  {
    question: "Apakah ada diskon untuk pesanan besar?",
    answer:
      "Ya, kami menawarkan diskon volume untuk pesanan institusi. Hubungi kami untuk detail lebih lanjut.",
  },
  {
    question: "Berapa lama proses cetak?",
    answer:
      "Pesanan standar selesai dalam 1-2 jam. Pesanan besar membutuhkan waktu 1-2 hari kerja.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Printify sangat membantu kami dalam mencetak foto untuk buku tahunan sekolah. Hasilnya berkualitas tinggi dan pengerjaan cepat.",
    name: "Ahmad Fauzi",
    title: "Kepala Sekolah SMA Nusantara",
  },
  {
    quote:
      "Layanan yang sangat profesional dengan harga yang terjangkau. Kami sangat puas dengan hasil cetakan untuk kartu pelajar.",
    name: "Siti Aminah",
    title: "Pengurus Pondok Pesantren Al-Hikmah",
  },
  {
    quote:
      "Kualitas cetakan sangat bagus dan tahan lama. Proses pemesanan juga sangat mudah melalui platform online mereka.",
    name: "Budi Santoso",
    title: "Guru SMK Teknologi",
  },
  {
    quote:
      "Pelayanan sangat ramah dan responsif. Mereka membantu kami menyelesaikan pesanan mendadak untuk acara sekolah.",
    name: "Dewi Lestari",
    title: "Koordinator OSIS SMP Cendekia",
  },
  {
    quote:
      "Harga yang ditawarkan sangat kompetitif dengan kualitas yang tidak mengecewakan. Sangat direkomendasikan!",
    name: "Hendra Wijaya",
    title: "Bendahara Yayasan Pendidikan Maju",
  },
  {
    quote:
      "Kami telah menggunakan jasa Printify untuk mencetak brosur acara tahunan dan hasilnya selalu memuaskan.",
    name: "Ratna Sari",
    title: "Ketua Panitia Festival Budaya",
  },
  {
    quote:
      "Proses pemesanan yang mudah dan cepat. Sangat cocok untuk kebutuhan cetak mendadak dengan hasil yang tetap berkualitas.",
    name: "Andi Pratama",
    title: "Ketua BEM Universitas Maju",
  },
  {
    quote:
      "Printify membantu kami mencetak materi pembelajaran dengan kualitas terbaik. Para siswa sangat senang dengan hasilnya.",
    name: "Rina Wulandari",
    title: "Guru SD Ceria",
  },
];
