import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dougscore",
  description: "Get dougreview on car searches",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
