import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YumeTattoos | The Art of Natural Beauty",
  description: "Specialized micropigmentation for freckles. 10+ years of experience in creating natural beauty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-brand-champagne text-brand-ink font-sans selection:bg-brand-rose">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
