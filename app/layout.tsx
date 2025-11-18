import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import { generateWebsiteSchema } from "@/lib/seo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Velocity FI - The Futuristic Financial Independence Engine",
  description: "Data-driven wealth building for tech workers, engineers, and optimizers. Speed. Accuracy. Efficiency.",
  keywords: ["FIRE", "Financial Independence", "Retire Early", "Wealth Building", "Investing", "Personal Finance"],
  authors: [{ name: "Velocity FI" }],
  openGraph: {
    title: "Velocity FI - Financial Independence Engine",
    description: "Data-driven wealth building for tech workers and optimizers",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = generateWebsiteSchema('https://velocityfi.com');
  
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: websiteSchema }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
