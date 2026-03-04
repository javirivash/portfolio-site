import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// TODO: Replace with production URL
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Javier Rivas — Frontend Engineer",
  description:
    "Frontend Engineer with 4+ years of experience building scalable, accessible user interfaces using React, TypeScript, and modern tooling.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "TypeScript",
    "UI Engineer",
    "Web Developer",
    "Javier Rivas",
  ],
  authors: [{ name: "Javier Rivas" }],
  creator: "Javier Rivas",
  openGraph: {
    title: "Javier Rivas — Frontend Engineer",
    description:
      "Frontend Engineer with 4+ years of experience building scalable, accessible user interfaces.",
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
    //     alt: "Javier Rivas — Frontend Engineer",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier Rivas — Frontend Engineer",
    description:
      "Frontend Engineer with 4+ years of experience building scalable, accessible user interfaces.",
    // TODO: Add Twitter handle if applicable
    // creator: "@handle",
    // TODO: Add social sharing image
    // images: ["/og-image.png"],
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
