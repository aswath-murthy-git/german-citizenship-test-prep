import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

const siteUrl = "https://german-citizenship-test-prep.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "German Citizenship Test Prep (Einbürgerungstest 2026) — Free 310 Questions Drill",
    template: "%s | German Citizenship Test Prep",
  },
  description:
    "Free interactive drill app for the German Einbürgerungstest (LiD - Leben in Deutschland). Practice all 310 official BAMF questions with instant bilingual English mode, all 16 state-specific sets, bookmarks, and realistic 33-question timed exam simulations.",
  keywords: [
    "Einbürgerungstest",
    "Einbürgerungstest 2026",
    "German citizenship test",
    "German naturalization test",
    "Leben in Deutschland test",
    "LiD Test",
    "BAMF 310 Fragen",
    "Einbürgerungstest online kostenlos",
    "Einbürgerungstest Englisch Übersetzung",
    "German citizenship test practice with English",
    "LiD Test Vorbereitung",
    "Einbürgerungstest Üben",
    "310 Fragenkatalog BAMF",
    "German citizenship exam simulator",
  ],
  authors: [{ name: "Aswath Murthy", url: "https://github.com/aswath-murthy-git" }],
  creator: "Aswath Murthy",
  publisher: "Aswath Murthy",
  applicationName: "German Citizenship Test Prep",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "German Citizenship Test Prep (Einbürgerungstest 2026) — 100% Free Drill",
    description:
      "Practice all 310 official BAMF questions with instant English translations, state filters (all 16 Bundesländer), and timed 33-question exam simulations. 100% free and mobile-friendly.",
    url: siteUrl,
    siteName: "German Citizenship Test Prep",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "German Citizenship Test Prep (Einbürgerungstest 2026)",
    description:
      "Practice all 310 official BAMF questions with bilingual English mode, state sets, and timed exam simulations.",
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
  category: "Education",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "German Citizenship Test Prep (Einbürgerungstest)",
    "alternateName": "Leben in Deutschland Test Trainer",
    "url": siteUrl,
    "description":
      "Free interactive practice platform for the official German BAMF Einbürgerungstest and Leben in Deutschland exam. Covers all 310 official questions with bilingual English toggle, state filters, and exam simulation.",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All modern browsers (iOS, Android, macOS, Windows, Linux)",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
    },
    "inLanguage": ["de", "en"],
    "audience": {
      "@type": "Audience",
      "audienceType": "Immigrants, expats, and students preparing for the German citizenship test",
    },
    "featureList": [
      "All 310 official BAMF questions",
      "Questions 301 and 308 for all 16 German states",
      "Instant bilingual English translations toggle",
      "60-minute realistic 33-question timed exam simulation",
      "Mastery gate requiring 2 consecutive correct answers",
      "Offline-first client-side progress saving",
      "Export and Import JSON progress backup",
    ],
    "author": {
      "@type": "Person",
      "name": "Aswath Murthy",
      "url": "https://github.com/aswath-murthy-git",
    },
  };

  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
