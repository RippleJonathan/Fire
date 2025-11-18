import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Velocity FI - The Mathematical Path to Financial Independence",
  description: "Advanced financial independence strategies with interactive tools. Master FIRE, tax optimization, and high-yield banking with data-driven insights.",
  keywords: ["FIRE", "financial independence", "early retirement", "tax optimization", "high-yield savings", "compound interest"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-[var(--border-color)] bg-[var(--card-bg)] py-8 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-[var(--foreground)] text-sm">
              © {new Date().getFullYear()} Velocity FI. Built for speed, optimized for wealth.
            </p>
            <p className="text-[var(--foreground)] text-xs mt-2 opacity-60">
              Not financial advice. Do your own research.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
