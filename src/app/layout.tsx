import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const roboto_font = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const roboto_mono_font = localFont({
  src: [
    {
      path: "../../public/fonts/RobotoMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/RobotoMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/RobotoMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Printify",
  description: "Printify",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  appleWebApp: {
    title: "Printify",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning={true}
      className={`${roboto_font.className} ${roboto_mono_font.className} antialiased`}
    >
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content="Printify"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
