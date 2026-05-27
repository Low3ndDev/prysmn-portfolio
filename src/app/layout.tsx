import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_BUSINESS_NAME || "Pro Trades",
  description: process.env.NEXT_PUBLIC_TAGLINE || "Professional trades services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const brandColor = process.env.NEXT_PUBLIC_BRAND_COLOR || "#0078d4";

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --brand-color: ${brandColor};
              }
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
