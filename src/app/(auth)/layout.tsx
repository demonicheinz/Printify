import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6 border-b">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold"
        >
          <img
            src="/logo.png"
            alt="Printify Logo"
            className="h-8 w-auto"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-4">
          <Link
            href="/about"
            className="text-xs md:text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Tentang Kami
          </Link>
          <Link
            href="/pricing"
            className="text-xs md:text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Harga
          </Link>
          <Link
            href="/sign-in"
            className="text-xs md:text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Masuk
          </Link>
          <Link
            href="/sign-up"
            className="text-xs md:text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Daftar
          </Link>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-muted/40">
        <div className="container px-4 py-4">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} Printify. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <Link
                href="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Syarat dan Ketentuan
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
