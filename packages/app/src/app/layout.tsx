import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { ModalProvider } from "@/components/context/modal.context";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

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
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />

      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
       `}
      </Script>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2642908073199820"
        crossOrigin="anonymous"
      />
      <meta name="google-adsense-account" content="ca-pub-2642908073199820" />
      <body>
        <ModalProvider>
          <Header />
          {children}
        </ModalProvider>
        <Analytics />
      </body>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
    </html>
  );
}
