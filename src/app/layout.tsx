import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = "https://mukul-pink.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mukul Singh — Full-Stack Developer | Next.js & Node.js",
  description:
    "Mukul Singh is a full-stack developer from India specialising in Next.js, Node.js, and SaaS products. Open to remote opportunities in Europe and worldwide. Building Base0, SupaToken, and more.",
  keywords: [
    "Mukul Singh",
    "full-stack developer",
    "Next.js developer",
    "Node.js developer",
    "remote developer",
    "SaaS developer",
    "software engineer India",
    "remote opportunities Europe",
    "React developer",
    "TypeScript developer",
  ],
  authors: [{ name: "Mukul Singh", url: siteUrl }],
  creator: "Mukul Singh",
  publisher: "Mukul Singh",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: "Mukul Singh",
    title: "Mukul Singh — Full-Stack Developer | Next.js & Node.js",
    description:
      "Full-stack developer from India. Building robust SaaS and API solutions with Next.js and Node.js. Open to remote work in Europe and globally.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mukul Singh — Full-Stack Developer portfolio",
      },
    ],
    locale: "en_GB",
    firstName: "Mukul",
    lastName: "Singh",
    username: "mukuls1107",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mukulownsyou",
    creator: "@mukulownsyou",
    title: "Mukul Singh — Full-Stack Developer | Next.js & Node.js",
    description:
      "Full-stack developer from India. Building robust SaaS and API solutions with Next.js and Node.js. Open to remote work in Europe and globally.",
    images: [
      {
        url: "/hero.jpg",
        alt: "Mukul Singh — Full-Stack Developer portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
    other: [
      { rel: "manifest", url: "/favicon/site.webmanifest" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "theme-color-light": "#ffffff",
    "theme-color-dark": "#0f172a",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Mukul Singh",
      url: siteUrl,
      sameAs: [
        "https://github.com/mukuls1107",
        "https://linkedin.com/in/mukul1107",
        "https://x.com/mukulownsyou",
      ],
      jobTitle: "Full-Stack Developer",
      description:
        "Full-stack developer from India specialising in Next.js, Node.js, and SaaS products. Open to remote opportunities in Europe and worldwide.",
      email: "mukul.110705@gmail.com",
      knowsAbout: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "React",
        "SaaS development",
        "API design",
        "Redis",
        "BullMQ",
        "Salesforce",
      ],
      nationality: {
        "@type": "Country",
        name: "India",
      },
      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/img.jpg`,
        contentUrl: `${siteUrl}/img.jpg`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Mukul Singh — Portfolio",
      description:
        "Portfolio of Mukul Singh, full-stack developer building SaaS and API solutions.",
      author: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-GB",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Mukul Singh — Full-Stack Developer | Next.js & Node.js",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      description:
        "Portfolio of Mukul Singh, full-stack developer specialising in Next.js, Node.js, and SaaS products. Open to remote opportunities.",
      inLanguage: "en-GB",
      datePublished: "2025-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceMono.variable} font-sans bg-[var(--color-background)] text-[var(--color-foreground)] antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
