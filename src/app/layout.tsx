import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap', // Melhora performance de loading
  preload: true,
});

export const metadata: Metadata = {
  title: "GESCON - Gestão Condominial Completa",
  description:
    "Sistema completo para gestão de condomínios. App mobile, controle de acesso, gestão financeira, boletos automáticos e muito mais.",
  keywords: [
    "gestão condominial",
    "sistema para condomínio",
    "app condomínio",
    "boletos automáticos",
    "controle de acesso",
    "gestão financeira",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
