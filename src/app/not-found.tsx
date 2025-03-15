import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-background">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-primary mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Halaman Tidak Ditemukan</h2>

        <p className="text-muted-foreground mb-8">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman mungkin telah dipindahkan,
          dihapus, atau tidak pernah ada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link
              href="/"
              className="flex items-center"
            >
              <Icon
                name="home"
                size={18}
                className="mr-2"
              />
              Kembali ke Beranda
            </Link>
          </Button>

          <Button
            variant="outline"
            asChild
          >
            <Link
              href="/contact"
              className="flex items-center"
            >
              <Icon
                name="whatsapp"
                size={18}
                className="mr-2"
              />
              Hubungi Kami
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          Jika Anda yakin ini adalah kesalahan, silakan hubungi tim dukungan kami.
        </p>
      </div>
    </div>
  );
}
