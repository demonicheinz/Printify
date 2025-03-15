export interface ContactInfo {
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  email: string;
  whatsapp: string;
  operationalHours: {
    weekdays: string;
    sunday: string;
  };
  mapCoordinates: [number, number]; // [latitude, longitude]
  socialMedia: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
  partnership: {
    email: string;
    phone: string;
    description: string;
  };
  peakHours: string;
}

export interface ContactFAQ {
  question: string;
  answer: string;
}

// Data informasi kontak
export const contactInfo: ContactInfo = {
  address: "Jl. Al Huda Sirau, Kecamatan Kemranjen",
  city: "Kabupaten Banyumas",
  postalCode: "53194",
  phone: "+62 812-3456-7890",
  email: "info@printify.heinz.id",
  whatsapp: "+62 812-3456-7890",
  operationalHours: {
    weekdays: "08.00 - 16.00",
    sunday: "09.00 - 16.00",
  },
  mapCoordinates: [-7.616939201521617, 109.28842582715205],
  socialMedia: {
    instagram: "printify.id",
    facebook: "printify.id",
    twitter: "printify_id",
  },
  partnership: {
    email: "partnership@printify.heinz.id",
    phone: "+62 812-3456-7891",
    description:
      "Untuk kerjasama dengan sekolah, pondok pesantren, atau institusi lainnya, silakan hubungi tim partnership kami.",
  },
  peakHours:
    "Jam sibuk kami biasanya pada pukul 10.00 - 14.00. Respons mungkin lebih lambat pada jam tersebut.",
};

// Data FAQ kontak
export const contactFAQs: ContactFAQ[] = [
  {
    question: "Bagaimana cara melacak pesanan saya?",
    answer:
      "Anda dapat melacak pesanan dengan memasukkan nomor pesanan di halaman Tracking pada website kami, atau menghubungi kami melalui WhatsApp dengan menyertakan nomor pesanan Anda.",
  },
  {
    question: "Berapa lama waktu pengerjaan pesanan?",
    answer:
      "Waktu pengerjaan standar adalah 1-2 hari kerja, tergantung pada jenis dan jumlah pesanan. Untuk pesanan dalam jumlah besar, mungkin memerlukan waktu tambahan.",
  },
  {
    question: "Apakah ada layanan pengiriman?",
    answer:
      "Ya, kami menyediakan layanan pengiriman untuk area tertentu dengan biaya tambahan. Silakan hubungi kami untuk informasi lebih lanjut tentang cakupan area dan biaya pengiriman.",
  },
  {
    question: "Apakah ada diskon untuk pesanan dalam jumlah besar?",
    answer:
      "Ya, kami menawarkan diskon khusus untuk pesanan dalam jumlah besar, terutama untuk institusi pendidikan. Silakan hubungi tim partnership kami untuk informasi lebih lanjut.",
  },
  {
    question: "Bagaimana cara melakukan pembayaran?",
    answer:
      "Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, DANA, LinkAja), dan QRIS. Untuk institusi, kami juga menyediakan opsi pembayaran dengan invoice.",
  },
];
