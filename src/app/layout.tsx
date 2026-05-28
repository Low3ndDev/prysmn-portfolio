import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
  const brandColor = process.env.NEXT_PUBLIC_BRAND_COLOR || "#fca12c";
  const template = process.env.NEXT_PUBLIC_TEMPLATE || "default";

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
      <body className={`${geistSans.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
