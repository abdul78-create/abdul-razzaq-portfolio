import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Razzaq — Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Abdul Razzaq, a B.Tech CSE student at LPU specializing in full-stack development, cloud infrastructure, DevOps, and AI-powered applications.",
  keywords: [
    "Abdul Razzaq",
    "Full-Stack Developer",
    "DevOps",
    "AI",
    "Next.js",
    "React",
    "Cloud",
    "LPU",
    "Portfolio",
  ],
  authors: [{ name: "Abdul Razzaq" }],
  openGraph: {
    title: "Abdul Razzaq — Full-Stack Developer & AI Enthusiast",
    description:
      "Portfolio of Abdul Razzaq — B.Tech CSE student building scalable web applications, AI-powered solutions, and cloud infrastructure.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Razzaq — Full-Stack Developer",
    description:
      "B.Tech CSE student building scalable web apps, AI solutions, and cloud infrastructure.",
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
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
