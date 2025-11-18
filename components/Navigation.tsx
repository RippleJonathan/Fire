'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--background)] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-[var(--neon-cyan)] neon-text">
            VELOCITY_FI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/wealth-algorithms" 
              className="text-[var(--foreground)] hover:text-[var(--neon-cyan)] transition-colors"
            >
              Wealth Algorithms
            </Link>
            <Link 
              href="/high-yield-banking" 
              className="text-[var(--foreground)] hover:text-[var(--neon-magenta)] transition-colors"
            >
              Banking
            </Link>
            <Link 
              href="/tax-optimization" 
              className="text-[var(--foreground)] hover:text-[var(--terminal-green)] transition-colors"
            >
              Tax Hacks
            </Link>
            <Link 
              href="/tools" 
              className="px-4 py-2 rounded border border-[var(--neon-cyan)] text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)] hover:text-[var(--background)] transition-all"
            >
              Tools
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[var(--foreground)] focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              href="/wealth-algorithms" 
              className="block text-[var(--foreground)] hover:text-[var(--neon-cyan)] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Wealth Algorithms
            </Link>
            <Link 
              href="/high-yield-banking" 
              className="block text-[var(--foreground)] hover:text-[var(--neon-magenta)] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Banking
            </Link>
            <Link 
              href="/tax-optimization" 
              className="block text-[var(--foreground)] hover:text-[var(--terminal-green)] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tax Hacks
            </Link>
            <Link 
              href="/tools" 
              className="block text-[var(--neon-cyan)]"
              onClick={() => setIsOpen(false)}
            >
              Tools
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
