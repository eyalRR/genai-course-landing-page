import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "hebrew"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// ─── Replace with your real domain before deploying ─────────────────────────
const SITE_URL = "https://creative-gen-ai.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // ── Core ─────────────────────────────────────────────────────────────────
  title: {
    default: "קורס Creative GenAI – בניית כלי AI בפייתון",
    template: "%s | Creative GenAI Course",
  },
  description:
    "קורס מעשי של 12 שבועות בקבוצות בוטיק עד 5 משתתפים. לומדים Python, OpenAI API, Flux, LoRA ווידאו – ובונים כלי AI עצמאיים עם פרויקט גמר אישי.",
  keywords: [
    "קורס Generative AI",
    "קורס בינה מלאכותית",
    "קורס Python",
    "OpenAI API",
    "Flux LoRA",
    "קורס AI עברית",
    "Creative AI Course",
    "Generative AI Course Israel",
    "AI coding bootcamp",
    "prompt engineering",
    "Midjourney alternative",
    "DALL-E course",
  ],
  authors: [{ name: "Eyal Rabinovich" }],
  creator: "Eyal Rabinovich",
  publisher: "Creative GenAI",

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },

  // ── Canonical + hreflang ─────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
    languages: {
      "he": SITE_URL,
      "en": `${SITE_URL}/en`,
    },
  },

  // ── Open Graph ───────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Creative GenAI Course",
    title: "קורס Creative GenAI – בניית כלי AI בפייתון",
    description:
      "12 שבועות, קבוצות בוטיק, פרויקט גמר אישי. תבנו כלי AI עצמאיים עם Python, OpenAI, Flux ו-LoRA.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creative GenAI Coding Course",
      },
    ],
    locale: "he_IL",
    alternateLocale: ["en_US"],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "קורס Creative GenAI – בניית כלי AI בפייתון",
    description:
      "12 שבועות, קבוצות בוטיק, פרויקט גמר אישי. לומדים Python, OpenAI, Flux ו-LoRA.",
    images: ["/og-image.png"],
    creator: "@eyal_rabinovich",
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${rubik.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["light", "dark"]}
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
