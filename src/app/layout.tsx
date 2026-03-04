import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import Analytics from "@/components/Analytics";
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
  metadataBase: new URL("https://neuroheart.ai"),
  title: {
    default: "NeuroHeart.AI — AI-Powered HRV Stress Management for Apple Watch",
    template: "%s | NeuroHeart.AI",
  },
  description:
    "NeuroHeart.AI is an iOS app that uses real-time heart rate variability (HRV) biofeedback from Apple Watch with AI-guided meditation, CBT therapy, and live music generation to measure, understand, and resolve stress. Based on 5 years of IEEE & ASEE published research.",
  keywords: [
    // Core product
    "HRV app",
    "heart rate variability",
    "stress management app",
    "Apple Watch HRV",
    "AI meditation",
    "biofeedback app",
    "mental health app",
    "CBT therapy app",
    "NeuroHeart",
    "NeuroHeart AI",
    "NeuroHeart.AI",
    "iOS wellness app",
    // HRV & biofeedback
    "real-time HRV",
    "HRV biofeedback",
    "RMSSD",
    "SDNN",
    "HRV index",
    "HRV coherence",
    "heart coherence",
    "HRV stress score",
    "autonomic nervous system",
    "parasympathetic activation",
    "sympathetic nervous system",
    "autonomic balance",
    "somatic biofeedback",
    "HRV metrics",
    "LF HF ratio",
    // Emotional wellness & AI
    "emotional wellness AI",
    "emotional regulation app",
    "AI emotional wellness companion",
    "emotional mapping",
    "mood detection app",
    "mood tracking HRV",
    "AI therapy companion",
    "personalized meditation app",
    "generative AI meditation",
    "AI music therapy",
    "AI generated meditation music",
    "guided meditation AI",
    "live music generation",
    "music healing",
    // Conditions & use cases
    "anxiety relief",
    "PTSD management",
    "stress reduction",
    "stress reactivity",
    "emotional triggers",
    "thought loops",
    "stress cycle",
    "corporate stress management",
    "workplace wellness",
    "performance enhancement",
    "focus and productivity",
    "sleep optimization",
    "emotional mastery",
    "inner harmony",
    // Competitor alternatives
    "Calm alternative",
    "Headspace alternative",
    "Whoop alternative",
    "Oura Ring alternative",
    "Muse 2 alternative",
    "Garmin stress tracking",
    "Apple Health HRV",
    "Apollo Neuro alternative",
    "Fitbit stress app",
    "better than Calm",
    "better than Headspace",
    // Wearable & tech
    "Apple Watch stress",
    "stress tracking Apple Watch",
    "wearable stress management",
    "smartwatch HRV",
    "meditation app with biofeedback",
    "HRV meditation app",
    "biofeedback meditation",
    "agentic AI wellness",
    // Research & credibility
    "evidence based meditation",
    "research backed wellness app",
    "IEEE published wellness",
    "mind body healing",
    "holistic wellness app",
  ],
  authors: [{ name: "Sreekanth Gopi", url: "https://neuroheart.ai" }],
  creator: "NeuroHeart.AI",
  publisher: "NeuroHeart.AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "NeuroHeart.AI — AI-Powered HRV Stress Intelligence for Apple Watch",
    description:
      "Real-time HRV biofeedback meets AI-generated meditation. Measure, understand, and resolve stress with your Apple Watch. Research-backed.",
    url: "https://neuroheart.ai",
    siteName: "NeuroHeart.AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeuroHeart.AI — AI-Powered HRV Stress Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroHeart.AI — AI HRV Stress Management for Apple Watch",
    description:
      "Real-time HRV biofeedback + AI meditation + live music generation. Measure and resolve stress with your Apple Watch. Research-backed.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://neuroheart.ai",
  },
  category: "Health & Wellness",
};

// Structured data — minimal info for search engine categorization only
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://neuroheart.ai/#organization",
      name: "NeuroHeart.AI",
      url: "https://neuroheart.ai",
      logo: "https://neuroheart.ai/neuroheart-logo.png",
    },
    {
      "@type": "MobileApplication",
      "@id": "https://neuroheart.ai/#app",
      name: "NeuroHeart.AI",
      description:
        "iOS app for stress management using real-time HRV biofeedback from Apple Watch with AI-guided meditation and therapy tools.",
      applicationCategory: "HealthApplication",
      operatingSystem: "iOS",
      author: { "@id": "https://neuroheart.ai/#organization" },
    },
    {
      "@type": "WebSite",
      "@id": "https://neuroheart.ai/#website",
      url: "https://neuroheart.ai",
      name: "NeuroHeart.AI",
      publisher: { "@id": "https://neuroheart.ai/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://neuroheart.ai/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is NeuroHeart.AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An iOS app that uses real-time HRV biofeedback from Apple Watch to help manage stress through AI-personalized meditation and therapy.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need an Apple Watch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Apple Watch provides the HRV biofeedback for personalized stress measurement. iPhone is required to run the app.",
          },
        },
        {
          "@type": "Question",
          name: "Is this backed by research?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Built on peer-reviewed research published at IEEE, FIE, and ASEE conferences.",
          },
        },
        {
          "@type": "Question",
          name: "Is my health data safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Data is encrypted, never sold, and never shared with third parties.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
