import type { Metadata, Viewport } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const SITE_URL =
  "https://launch-countdown-timer.abdelrhman-ahmed8881.workers.dev";

const name = "Liftoff";
const title = `${name} | Launching soon`;
const description =
  "Our new site is almost ready. Watch the countdown tick down to launch day, and follow along on social for the moment we go live.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "The word Liftoff over a starlit night sky above the line Launching soon.",
};

const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d1e28",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${redHatText.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
