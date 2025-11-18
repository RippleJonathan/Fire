import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FIRE Engine - Financial Independence Retire Early',
  description: 'A high-performance content engine for achieving Financial Independence and Early Retirement. Interactive calculators, data-driven insights, and expert strategies.',
  keywords: ['FIRE', 'financial independence', 'early retirement', 'wealth building', 'passive income', 'investment strategies'],
  authors: [{ name: 'FIRE Engine' }],
  openGraph: {
    title: 'FIRE Engine - Financial Independence Retire Early',
    description: 'Master your path to Financial Independence with data-driven insights and interactive tools',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-cyber-darker bg-cyber-grid">
        {children}
      </body>
    </html>
  )
}
