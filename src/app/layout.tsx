import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RazorLine | Premium Barbershop Scheduling",
  description: "Book your appointment with the best barbers in town. No WhatsApp needed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="font-inter selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
