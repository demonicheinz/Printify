export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    id: "umum",
    label: "Umum",
    items: [
      {
        question: "Apa itu Printify?",
        answer:
          "Printify adalah platform cetak digital yang dirancang khusus untuk memenuhi kebutuhan cetak foto dan dokumen bagi siswa, santri, dan institusi pendidikan. Kami menawarkan berbagai layout cetak yang fleksibel dengan antarmuka yang mudah digunakan.",
      },
      {
        question: "Bagaimana cara menggunakan Printify?",
        answer:
          "Menggunakan Printify sangat mudah! Anda cukup memilih jenis layout yang diinginkan, mengunggah foto atau dokumen, mengatur posisi sesuai keinginan, dan menyelesaikan pesanan. Anda dapat menggunakan Printify tanpa perlu mendaftar, atau membuat akun untuk menyimpan riwayat pesanan.",
      },
      {
        question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan pesanan?",
        answer:
          "Pesanan standar biasanya selesai dalam waktu 1-2 jam setelah konfirmasi. Untuk pesanan dalam jumlah besar atau pesanan institusi, kami membutuhkan waktu 1-2 hari kerja tergantung pada volume dan kompleksitas pesanan.",
      },
    ],
  },
  {
    id: "layanan",
    label: "Layanan & Fitur",
    items: [
      {
        question: "Apa saja jenis layout yang tersedia di Printify?",
        answer:
          "Printify menawarkan tiga jenis layout utama: (1) Single Layout untuk satu foto per halaman, (2) Tile Layout (Grid) untuk layout berdasarkan grid dari 1×1 hingga 24×24, dan (3) Cell Size Layout untuk layout berdasarkan ukuran fisik foto seperti 3R, 4R, atau ukuran kustom.",
      },
      {
        question: "Apakah saya bisa mencetak foto dengan ukuran khusus?",
        answer:
          "Ya, Printify mendukung pencetakan dengan ukuran khusus melalui fitur Cell Size Layout. Anda dapat menentukan ukuran dalam milimeter (mm) dan sistem kami akan mengatur layout secara otomatis berdasarkan ukuran yang Anda tentukan.",
      },
      {
        question: "Apakah Printify menawarkan layanan pengiriman?",
        answer:
          "Saat ini, kami menawarkan layanan pengiriman khusus untuk pesanan institusi dalam jumlah besar. Untuk pesanan individual, Anda dapat mengambil hasil cetak di toko kami. Kami berencana untuk memperluas layanan pengiriman untuk semua jenis pesanan di masa mendatang.",
      },
      {
        question: "Bagaimana jika saya tidak puas dengan hasil cetak?",
        answer:
          "Kepuasan pelanggan adalah prioritas kami. Jika Anda tidak puas dengan hasil cetak, silakan hubungi kami dalam waktu 24 jam setelah pengambilan dan kami akan mengevaluasi masalah tersebut. Jika kesalahan berasal dari pihak kami, kami akan mencetak ulang pesanan Anda tanpa biaya tambahan.",
      },
    ],
  },
  {
    id: "harga",
    label: "Harga & Pembayaran",
    items: [
      {
        question: "Berapa biaya untuk mencetak foto di Printify?",
        answer:
          "Biaya cetak dimulai dari Rp500 per lembar untuk paket Dasar, Rp750 per lembar untuk paket Reguler dengan kualitas premium, dan paket Institusi dengan harga khusus untuk pesanan dalam jumlah besar. Silakan kunjungi halaman Harga untuk informasi lebih detail.",
      },
      {
        question: "Bagaimana cara pembayaran di Printify?",
        answer:
          "Kami menerima pembayaran tunai saat pengambilan, transfer bank, dan pembayaran melalui QRIS. Untuk pesanan institusi, kami juga menawarkan opsi penagihan dengan invoice.",
      },
      {
        question: "Apakah Printify menawarkan diskon untuk pesanan dalam jumlah besar?",
        answer:
          "Ya, kami menawarkan diskon volume untuk pesanan dalam jumlah besar, terutama untuk institusi pendidikan seperti sekolah dan pondok pesantren. Silakan hubungi tim kami untuk mendapatkan penawaran khusus sesuai dengan kebutuhan Anda.",
      },
    ],
  },
  {
    id: "keamanan",
    label: "Privasi & Keamanan",
    items: [
      {
        question: "Apakah Printify menyimpan foto saya?",
        answer:
          "Ya, Printify menyimpan foto Anda untuk jangka waktu terbatas. Untuk pengguna tamu, foto disimpan selama 7 hari. Untuk pengguna terdaftar, foto disimpan selama 1 bulan pada paket Reguler dan 3 bulan pada paket Institusi. Setelah periode tersebut, foto akan dihapus secara otomatis dari sistem kami.",
      },
      {
        question: "Bagaimana dengan keamanan data saya?",
        answer:
          "Keamanan data adalah prioritas kami. Semua file yang diunggah disimpan dengan aman di server kami dengan enkripsi dan hanya dapat diakses oleh Anda dan tim kami untuk keperluan pencetakan. Kami tidak akan menggunakan atau membagikan foto Anda untuk tujuan lain tanpa izin Anda.",
      },
    ],
  },
];
