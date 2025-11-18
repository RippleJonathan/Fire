'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-bold text-white">
              Velocity <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">FI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/blog" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/calculators" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
              Calculators
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
              About
            </Link>
            <Link 
              href="/start" 
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/blog" className="block text-gray-300 hover:text-purple-400 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/calculators" className="block text-gray-300 hover:text-purple-400 transition-colors font-medium">
              Calculators
            </Link>
            <Link href="/about" className="block text-gray-300 hover:text-purple-400 transition-colors font-medium">
              About
            </Link>
            <Link 
              href="/start" 
              className="block px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
