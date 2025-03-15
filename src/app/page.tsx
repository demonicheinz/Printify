import { ResponsiveImage } from "@/components/ui/responsive-image";
import { LazyLoad } from "@/components/ui/lazy-load";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md mx-auto">
        <ResponsiveImage
          src="/images/logo-full.svg"
          alt="Printify"
          width={500}
          height={500}
          priority
          sizes="(max-width: 768px) 100vw, 500px"
          className="mb-8"
        />

        <LazyLoad className="mt-8">
          <div className="bg-card border rounded-lg p-6 shadow-sm text-center">
            <h2 className="text-xl font-semibold mb-4">Selamat Datang di Printify</h2>
            <p className="text-muted-foreground text-pretty">
              Solusi cetak foto dan dokumen yang dioptimalkan untuk institusi pendidikan. Dengan
              teknologi terkini dan layanan profesional, kami siap membantu kebutuhan cetak Anda.
            </p>
          </div>
        </LazyLoad>
      </div>
    </div>
  );
}
