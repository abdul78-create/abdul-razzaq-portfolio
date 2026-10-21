import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Razzaq — Cloud Computing & DevOps Enthusiast",
  description:
    "Portfolio of Abdul Razzaq, a B.Tech CSE student at Lovely Professional University focused on cloud infrastructure, DevOps, containerization, and automation.",
  keywords: [
    "Abdul Razzaq",
    "Cloud Computing",
    "DevOps",
    "Cloud Infrastructure",
    "Docker",
    "CI/CD",
    "AWS",
    "B.Tech CSE",
    "LPU",
    "Portfolio",
  ],
  authors: [{ name: "Abdul Razzaq" }],
  openGraph: {
    title: "Abdul Razzaq — Cloud Computing & DevOps Enthusiast",
    description:
      "Portfolio of Abdul Razzaq — B.Tech CSE student focused on cloud infrastructure, automation, CI/CD, containerization, and scalable systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Razzaq — Cloud Computing & DevOps Enthusiast",
    description:
      "B.Tech CSE student focused on cloud infrastructure, automation, CI/CD, containerization, and scalable systems.",
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
