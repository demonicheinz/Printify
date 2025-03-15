import { ReactNode } from "react";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface CompanyValue {
  iconType: string; // Nama icon untuk digunakan dengan komponen Icon
  title: string;
  description: string;
}

export interface AboutFAQ {
  question: string;
  answer: string;
}

// Data tim
export const teamMembers: TeamMember[] = [
  {
    name: "Ahmad Haizul Amany",
    role: "Founder & Lead Developer",
    bio: "Berpengalaman 10+ tahun di industri percetakan dan fotografi.",
    image: "/images/about/team/heinz.png",
  },
  {
    name: "Khusnul Ma'rifah",
    role: "Head of Operations",
    bio: "Ahli manajemen operasional dengan latar belakang di bidang pendidikan.",
    image: "/images/about/team/khusnul.png",
  },
  {
    name: "Kholina",
    role: "Customer Relations",
    bio: "Spesialis layanan pelanggan dengan fokus pada kepuasan klien.",
    image: "/images/about/team/kholina.png",
  },
];

// Data nilai-nilai perusahaan
export const companyValues: CompanyValue[] = [
  {
    iconType: "CheckCircle2",
    title: "Kualitas Terbaik",
    description:
      "Kami berkomitmen untuk memberikan hasil cetak dengan kualitas tertinggi menggunakan teknologi dan material terbaik.",
  },
  {
    iconType: "Users",
    title: "Fokus pada Pelanggan",
    description:
      "Kepuasan pelanggan adalah prioritas utama kami, dengan layanan yang ramah dan solusi yang disesuaikan dengan kebutuhan.",
  },
  {
    iconType: "Zap",
    title: "Efisiensi",
    description:
      "Proses yang cepat dan efisien tanpa mengorbankan kualitas, menghemat waktu dan biaya Anda.",
  },
  {
    iconType: "Award",
    title: "Inovasi",
    description:
      "Terus mengembangkan layanan dan teknologi baru untuk memberikan pengalaman cetak yang lebih baik.",
  },
  {
    iconType: "Clock",
    title: "Ketepatan Waktu",
    description: "Berkomitmen untuk menyelesaikan pesanan sesuai dengan jadwal yang dijanjikan.",
  },
];

// Data FAQ tentang perusahaan
export const aboutFAQs: AboutFAQ[] = [
  {
    question: "Apa yang membedakan Printify dari layanan cetak lainnya?",
    answer:
      "Printify fokus pada kebutuhan khusus institusi pendidikan seperti sekolah dan pondok pesantren. Kami menawarkan sistem layout yang fleksibel, harga khusus untuk pemesanan dalam jumlah besar, dan pengalaman pengguna yang dirancang khusus untuk memudahkan proses cetak foto dan dokumen.",
  },
  {
    question: "Bagaimana Printify menjamin kualitas hasil cetak?",
    answer:
      "Kami menggunakan peralatan cetak profesional dan bahan berkualitas tinggi. Setiap pesanan melalui proses quality control sebelum dikirimkan kepada pelanggan. Jika hasil tidak sesuai dengan standar kami, kami akan mencetak ulang tanpa biaya tambahan.",
  },
  {
    question: "Apakah Printify menawarkan layanan desain?",
    answer:
      "Ya, kami menyediakan layanan konsultasi desain khusus untuk kebutuhan institusi pendidikan. Tim desain kami dapat membantu membuat layout yang optimal untuk berbagai kebutuhan seperti kartu pelajar, buku tahunan, dan materi promosi sekolah.",
  },
  {
    question: "Bagaimana cara memulai kerjasama dengan Printify?",
    answer:
      "Anda dapat menghubungi tim partnership kami melalui halaman Kontak. Kami akan mendiskusikan kebutuhan spesifik institusi Anda dan menawarkan solusi yang paling sesuai. Untuk institusi pendidikan, kami menawarkan program kerjasama khusus dengan berbagai keuntungan.",
  },
  {
    question: "Apakah Printify melayani pesanan dari luar kota?",
    answer:
      "Ya, kami melayani pesanan dari seluruh Indonesia. Untuk pesanan dari luar kota, kami menyediakan layanan pengiriman dengan biaya tambahan. Waktu pengiriman bervariasi tergantung lokasi, namun kami selalu berusaha untuk memastikan pesanan sampai tepat waktu.",
  },
];
