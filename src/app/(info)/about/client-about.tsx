"use client";

import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { TeamMember, CompanyValue, AboutFAQ } from "@/data";
import { Icon } from "@/components/ui/icon";
import dynamic from "next/dynamic";

// Lazy load FAQ section
const FAQSection = dynamic(() => import("@/components/sections/faq-section"), {
  loading: () => (
    <div className="bg-card border rounded-lg p-6 shadow-sm animate-pulse">
      <div className="h-6 bg-muted rounded mb-4 w-3/4" />
      <div className="h-4 bg-muted rounded mb-2 w-full" />
      <div className="h-4 bg-muted rounded mb-2 w-5/6" />
      <div className="h-4 bg-muted rounded w-4/6" />
    </div>
  ),
  ssr: true,
});

// Fungsi untuk mendapatkan inisial dari nama
function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

// Fungsi untuk mendapatkan komponen icon berdasarkan tipe
function getIconComponent(iconType: string) {
  switch (iconType) {
    case "CheckCircle2":
      return (
        <Icon
          name="success"
          size={32}
          className="text-primary"
        />
      );
    case "Users":
      return (
        <Icon
          name="users"
          size={32}
          className="text-primary"
        />
      );
    case "Zap":
      return (
        <Icon
          name="zap"
          size={32}
          className="text-primary"
        />
      );
    case "Award":
      return (
        <Icon
          name="award"
          size={32}
          className="text-primary"
        />
      );
    case "Clock":
      return (
        <Icon
          name="clock"
          size={32}
          className="text-primary"
        />
      );
    default:
      return null;
  }
}

// Animasi variants untuk Framer Motion
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface ClientAboutProps {
  teamMembers: TeamMember[];
  companyValues: CompanyValue[];
  aboutFAQs: AboutFAQ[];
}

export default function ClientAbout({ teamMembers, companyValues, aboutFAQs }: ClientAboutProps) {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/about/team/hero.jpg"
            alt="Printify Team"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-primary text-center drop-shadow-sm">
              Cerita Kami
            </h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            Printify didirikan pada tahun 2019 dengan visi sederhana: membuat layanan cetak foto dan
            dokumen menjadi lebih mudah, cepat, dan berkualitas untuk institusi pendidikan.
          </p>
          <p className="text-lg text-muted-foreground">
            Kami memahami kebutuhan unik dari sekolah dan pondok pesantren, dan berkomitmen untuk
            menyediakan solusi cetak yang terjangkau tanpa mengorbankan kualitas.
          </p>
        </div>
      </motion.div>

      {/* Nilai-nilai Perusahaan */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Nilai-nilai Kami</h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companyValues.map((value: CompanyValue, i: number) => (
            <motion.div
              key={i}
              className="bg-card border rounded-lg p-6 shadow-sm text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="mb-4 flex justify-center">{getIconComponent(value.iconType)}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Tim Kami */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Tim Kami</h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              className="bg-card border rounded-lg p-6 text-center shadow-sm"
              variants={fadeIn}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="inline-block"
              >
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    loading="lazy"
                  />
                  <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                </Avatar>
              </motion.div>
              <h3 className="text font-semibold">{member.name}</h3>
              <p className="text-primary text-sm mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Pertanyaan Umum</h2>

        <motion.div
          className="bg-card border rounded-lg p-6 shadow-sm"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FAQSection faqs={aboutFAQs} />
        </motion.div>
      </motion.div>

      {/* Statistik */}
      <motion.div
        className="mb-16 bg-muted rounded-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3 className="text-4xl font-bold text-primary mb-2">3+</h3>
            <p className="text-muted-foreground">Tahun Pengalaman</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
            <p className="text-muted-foreground">Institusi Mitra</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3 className="text-4xl font-bold text-primary mb-2">10K+</h3>
            <p className="text-muted-foreground">Pesanan Selesai</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3 className="text-4xl font-bold text-primary mb-2">99%</h3>
            <p className="text-muted-foreground">Kepuasan Pelanggan</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Keunggulan Layanan */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Keunggulan Layanan Kami</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-card border rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-semibold mb-4">Untuk Sekolah & Pesantren</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon
                  name="success"
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Program kerjasama khusus dengan harga spesial</span>
              </li>
              <li className="flex items-start">
                <Icon
                  name="success"
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Layanan cetak kartu pelajar dan buku tahunan</span>
              </li>
              <li className="flex items-start">
                <Icon
                  name="success"
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Pengerjaan cepat untuk kebutuhan mendesak</span>
              </li>
              <li className="flex items-start">
                <Icon
                  name="success"
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Konsultasi desain untuk kebutuhan institusi</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-card border rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-semibold mb-4">Teknologi & Kualitas</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon
                  name="success"
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Peralatan cetak profesional dengan hasil berkualitas tinggi</span>
              </li>
              <li className="flex items-start">
                <Icon
                  name="success"
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Sistem layout fleksibel untuk berbagai kebutuhan</span>
              </li>
              <li className="flex items-start">
                <Icon
                  name="success"
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Proses quality control untuk setiap pesanan</span>
              </li>
              <li className="flex items-start">
                <Icon
                  name="success"
                  size={20}
                  className="text-primary mr-2 mt-0.5 flex-shrink-0"
                />
                <span>Bahan berkualitas dengan ketahanan warna optimal</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4">Siap Bekerja Sama?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Kami siap membantu kebutuhan cetak institusi Anda dengan solusi yang disesuaikan dan
          layanan profesional.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.05 } }}
          >
            Hubungi Kami
          </motion.a>
          <motion.a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2"
            whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.05 } }}
          >
            Lihat Harga
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
}
