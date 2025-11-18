import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { JsonLd, generateWebsiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Velocity FI - The Futuristic Financial Independence Engine",
  description: "Demystifying wealth building through data-driven algorithms. Built for engineers, optimizers, and high-intent financial minds.",
  keywords: ["FIRE", "Financial Independence", "Retire Early", "Wealth Building", "Investment Strategy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={generateWebsiteSchema()} />
      </head>
      <body className="font-sans antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
