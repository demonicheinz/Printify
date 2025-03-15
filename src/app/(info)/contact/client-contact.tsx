"use client";

import dynamic from "next/dynamic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import type { ContactInfo, ContactFAQ } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";

// Lazy load komponen
const MapComponent = dynamic(() => import("@/components/map/contact-map"), {
  ssr: false,
  loading: () => (
    <div className="bg-muted rounded-lg overflow-hidden aspect-video flex items-center justify-center">
      <p className="text-muted-foreground">Memuat peta...</p>
    </div>
  ),
});

const FAQSection = dynamic(() => import("@/components/sections/faq-section"), {
  loading: () => (
    <div className="bg-card animate-pulse p-4">
      <div className="h-6 bg-muted rounded mb-4 w-3/4" />
      <div className="h-4 bg-muted rounded mb-2 w-full" />
      <div className="h-4 bg-muted rounded mb-2 w-5/6" />
      <div className="h-4 bg-muted rounded w-4/6" />
    </div>
  ),
});

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

interface ClientContactProps {
  contactInfo: ContactInfo;
  contactFAQs: ContactFAQ[];
}

export default function ClientContact({ contactInfo, contactFAQs }: ClientContactProps) {
  return (
    <>
      {/* Bagian Atas: Informasi Kontak dan Peta */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Informasi Kontak */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>

          <motion.div
            className="flex items-start space-x-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center w-12 h-12">
              <Icon
                name="mapPin"
                size={24}
                className="text-primary"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Alamat</h3>
              <p className="text-muted-foreground mt-1">
                {contactInfo.address}
                <br />
                {contactInfo.city}, {contactInfo.postalCode}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start space-x-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center w-12 h-12">
              <Icon
                name="phone"
                size={24}
                className="text-primary"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Telepon</h3>
              <p className="text-muted-foreground mt-1">
                <a
                  href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start space-x-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center w-12 h-12">
              <Icon
                name="email"
                size={24}
                className="text-primary"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-muted-foreground mt-1">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start space-x-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35 }}
          >
            <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center w-12 h-12">
              <Icon
                name="clock"
                size={24}
                className="text-primary"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Jam Operasional</h3>
              <p className="text-muted-foreground mt-1">
                Senin - Sabtu: {contactInfo.operationalHours.weekdays}
                <br />
                Minggu: {contactInfo.operationalHours.sunday}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start space-x-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center w-12 h-12">
              <Icon
                name="info"
                size={24}
                className="text-primary"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Jam Sibuk</h3>
              <p className="text-muted-foreground mt-1">{contactInfo.peakHours}</p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="flex items-center space-x-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <span className="text-sm font-medium">Ikuti Kami:</span>
            <motion.a
              href={`https://instagram.com/${contactInfo.socialMedia.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-card/80 transition-colors p-2 rounded-full flex items-center justify-center w-10 h-10"
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.2 },
              }}
            >
              <Icon
                name="instagram"
                size={20}
                className="text-primary"
              />
            </motion.a>
            <motion.a
              href={`https://facebook.com/${contactInfo.socialMedia.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-card/80 transition-colors p-2 rounded-full flex items-center justify-center w-10 h-10"
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.2 },
              }}
            >
              <Icon
                name="facebook"
                size={20}
                className="text-primary"
              />
            </motion.a>
            <motion.a
              href={`https://twitter.com/${contactInfo.socialMedia.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-card/80 transition-colors p-2 rounded-full flex items-center justify-center w-10 h-10"
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.2 },
              }}
            >
              <Icon
                name="twitter"
                size={20}
                className="text-primary"
              />
            </motion.a>
          </motion.div>

          {/* WhatsApp Button */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9+]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-white hover:bg-green-700 h-10 px-4 py-2"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.15 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.05 },
              }}
            >
              <Icon
                name="whatsapp"
                size={24}
                className="mr-2 text-white"
              />
              Chat WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Peta Lokasi */}
        <motion.div
          className="relative w-full h-[500px] rounded-lg overflow-hidden border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <MapComponent
            position={contactInfo.mapCoordinates}
            zoom={16}
            contactInfo={contactInfo}
          />
        </motion.div>
      </div>
      {/* Bagian Tengah: Form Kontak dan Kerjasama Institusi */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Form Kontak */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Kirim Pesan</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Nama
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Nama Anda"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="email@anda.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Nomor Telepon (Opsional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="+62 8xx-xxxx-xxxx"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subjek
                </label>
                <input
                  id="subject"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Subjek pesan"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              <motion.button
                type="submit"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full cursor-pointer"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.15 },
                }}
                whileTap={{
                  scale: 0.97,
                  transition: { duration: 0.05 },
                }}
              >
                Kirim Pesan
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Kerjasama Institusi */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Icon
                name="users"
                size={24}
                className="text-primary mr-2"
              />
              <h3 className="text-xl font-semibold">Kerjasama Institusi</h3>
            </div>
            <p className="text-muted-foreground mb-6">{contactInfo.partnership.description}</p>

            <div className="bg-muted p-4 rounded-lg mb-6">
              <h4 className="font-medium mb-3">Kontak Kerjasama:</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon
                    name="email"
                    size={20}
                    className="text-primary mr-3"
                  />
                  <a
                    href={`mailto:${contactInfo.partnership.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {contactInfo.partnership.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="phone"
                    size={20}
                    className="text-primary mr-3"
                  />
                  <a
                    href={`tel:${contactInfo.partnership.phone.replace(/[^0-9+]/g, "")}`}
                    className="hover:text-primary transition-colors"
                  >
                    {contactInfo.partnership.phone}
                  </a>
                </div>
              </div>
            </div>

            <h4 className="font-medium mb-3">Keuntungan Kerjasama:</h4>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Harga khusus untuk pemesanan dalam jumlah besar</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Prioritas pengerjaan untuk kebutuhan mendesak</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Layanan antar gratis untuk area tertentu</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Konsultasi desain untuk kebutuhan institusi</span>
              </li>
            </ul>

            <motion.a
              href={`mailto:${contactInfo.partnership.email}`}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.15 },
              }}
              whileTap={{
                scale: 0.97,
                transition: { duration: 0.05 },
              }}
            >
              Ajukan Kerjasama
            </motion.a>
          </div>
        </motion.div>
      </div>
      {/* Bagian Bawah: FAQ */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Pertanyaan Umum</h2>
          <Link
            href="/faq"
            className="text-primary flex items-center hover:underline text-sm font-medium"
          >
            Lihat semua FAQ{" "}
            <Icon
              name="chevronRight"
              size={16}
              className="ml-1"
            />
          </Link>
        </div>
        <div className="bg-card border rounded-lg p-6 shadow-sm">
          <FAQSection faqs={contactFAQs} />
        </div>
      </motion.div>
    </>
  );
}
