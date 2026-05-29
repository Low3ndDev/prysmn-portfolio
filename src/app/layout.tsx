import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prysmn — Websites & AI Systems for Aussie Tradies",
  description:
    "We build websites, AI chatbots, missed-call text-back, and automated follow-up systems for Australian tradies. More leads. Less manual work. Built for plumbers, electricians, landscapers, and every trade in between.",
  keywords: [
    "tradie website",
    "plumber website Australia",
    "electrician website Sydney",
    "tradie marketing",
    "AI for tradies",
    "missed call text back",
    "automated follow-up",
    "GoHighLevel",
    "trades business growth",
  ],
  openGraph: {
    title: "Prysmn — Websites & AI Systems for Aussie Tradies",
    description:
      "Stop losing leads. Get a website that converts, AI that answers calls 24/7, and automated follow-up that books jobs while you're on the tools.",
    url: "https://prysmn.com",
    siteName: "Prysmn",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased bg-[#0a0a0a]`}>
        {children}
      </body>
    </html>
  );
}
