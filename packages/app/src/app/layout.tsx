import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { ModalProvider } from "@/components/context/modal.context";

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
      <body>
        <ModalProvider>
          <Header />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
