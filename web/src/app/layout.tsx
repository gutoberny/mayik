import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const geova = localFont({
  src: [
    { path: "../../public/fonts/GeovaTrial-Thin.ttf", weight: "100", style: "normal" },
    { path: "../../public/fonts/GeovaTrial-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/GeovaTrial-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/GeovaTrial-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/GeovaTrial-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/GeovaTrial-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/GeovaTrial-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../../public/fonts/GeovaTrial-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-geova",
});

const kymer = localFont({
  src: "../../public/fonts/KymerAwon.ttf",
  variable: "--font-kymer",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAYIK | Arquitetura Transcedental",
  description: "Arquitetura além do físico. Projetos com alma, propósito e essência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="pt-BR" className={`${geova.variable} ${kymer.variable} ${inter.variable}`}>
      <body className="antialiased bg-background text-foreground selection:bg-accent/30 font-sans">
        {children}
      </body>
    </html>
  );
}
