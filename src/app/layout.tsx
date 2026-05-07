import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

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
      suppressHydrationWarning
    >
      {/* Inline script: sets .dark BEFORE first paint to prevent flash */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('barbershop-theme');if(t!=='light')document.documentElement.classList.add('dark');})();`,
          }}
        />
      </head>
      <body className="font-sans bg-background text-foreground selection:bg-primary selection:text-foreground min-h-screen">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
