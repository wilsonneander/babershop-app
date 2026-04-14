import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
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
      className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="font-sans bg-background text-foreground selection:bg-primary selection:text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
