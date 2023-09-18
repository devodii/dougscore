import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { ModalProvider } from "@/components/context/modal.context";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Dougscore finder",
  description:
    "Explore expert car reviews and ratings. Discover your dream car with Dougscore ratings and compare vehicles effortlessly. Your trusted source for car research.",
  keywords: [
    "cars",
    "car reviews",
    "car sale",
    "cars",
    "new cars",
    "cars in the world",
    "car score",
    "used cars",
  ],
  robots: "index, follow",
  referrer: "origin",
  creator: "Emmanuel Odii",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
          <Header />
          {children}
        </ModalProvider>
      </body>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2642908073199820"
        crossOrigin="anonymous"
      />
    </html>
  );
}
