import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.javirivash.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Javier Rivas — Frontend & Full-Stack Engineer",
  description:
    "Frontend & Full-Stack Engineer with 4+ years of experience building scalable, accessible user interfaces with React, TypeScript and Next.js. Remote from Mexico.",
  keywords: [
    "Frontend Engineer",
    "Full-Stack Engineer",
    "Next.js",
    "React Developer",
    "TypeScript",
    "UI Engineer",
    "Web Developer",
    "Javier Rivas",
  ],
  authors: [{ name: "Javier Rivas" }],
  creator: "Javier Rivas",
  openGraph: {
    title: "Javier Rivas — Frontend & Full-Stack Engineer",
    description:
      "Frontend & Full-Stack Engineer with 4+ years of experience building scalable, accessible user interfaces. Remote from Mexico.",
    url: siteUrl,
    siteName: "Javier Rivas",
    locale: "en_US",
    type: "website",
    // TODO: Add social sharing image (recommended: 1200x630px)
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Javier Rivas — Frontend & Full-Stack Engineer",
    //   },
    // ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
          {children}
          <Analytics />
        </body>
    </html>
  );
}
