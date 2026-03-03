import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeuroHeart AI — Your Mental Wellness Companion",
  description:
    "NeuroHeart AI understands your emotions, tracks your mental health patterns, and delivers personalized support — 24/7, on any device.",
  keywords: [
    "mental health",
    "AI wellness",
    "mood tracking",
    "therapy companion",
    "mental wellness",
    "NeuroHeart",
  ],
  openGraph: {
    title: "NeuroHeart AI — Your Mental Wellness Companion",
    description:
      "AI-powered mental wellness companion that understands your emotions and delivers personalized support.",
    url: "https://neuroheart.ai",
    siteName: "NeuroHeart AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroHeart AI — Your Mental Wellness Companion",
    description:
      "AI-powered mental wellness companion that understands your emotions and delivers personalized support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${plusJakarta.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
