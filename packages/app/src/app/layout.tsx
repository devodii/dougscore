import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { ModalProvider } from "@/components/context/modal.context";

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
    </html>
  );
}
