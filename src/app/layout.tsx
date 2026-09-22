import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceMono = Space_Mono({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: "Mukul Singh - Full-stack Developer",
  description: "Portfolio of Mukul Singh, Full-stack developer building robust SaaS and API solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans bg-[var(--color-background)] text-[var(--color-foreground)] antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
