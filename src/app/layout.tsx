import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lilbyte",
  description: "SaaS startup",
  icons: {
    icon: [{ url: "/logo/lilbyte-logo.png", type: "image/png" }],
    apple: [{ url: "/logo/lilbyte-logo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
        <link rel="icon" type="image/png" href="/logo/lilbyte-logo.png" />
        <link rel="apple-touch-icon" href="/logo/lilbyte-logo.png" />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} antialiased overflow-x-hidden`}
      >
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <Navbar />
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
