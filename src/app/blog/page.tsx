import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FIRE Blog - Financial Independence Insights',
  description: 'Expert insights, strategies, and data-driven analysis for achieving Financial Independence and Early Retirement.',
}

export default function BlogPage() {
  const posts = [
    {
      title: 'The Math Behind the 4% Rule',
      excerpt: 'Understanding the Trinity Study and safe withdrawal rates for early retirement.',
      date: '2024-11-15',
      category: 'Strategy',
    },
    {
      title: 'Coast FIRE: The Middle Path',
      excerpt: 'How to achieve financial flexibility without waiting for full FIRE.',
      date: '2024-11-10',
      category: 'Lifestyle',
    },
    {
      title: 'Tax Optimization for FIRE',
      excerpt: 'Maximizing tax-advantaged accounts and minimizing your lifetime tax burden.',
      date: '2024-11-05',
      category: 'Tax Strategy',
    },
    {
      title: 'Index Funds vs Individual Stocks',
      excerpt: 'Why passive investing wins for most FIRE seekers.',
      date: '2024-10-28',
      category: 'Investment',
    },
  ]

  return (
    <div className="min-h-screen">
      <nav className="container mx-auto px-6 py-6">
        <Link href="/" className="text-3xl font-cyber font-bold cyber-glow text-cyber-purple">
          FIRE_ENGINE
        </Link>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-cyber font-black mb-6 text-center bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple bg-clip-text text-transparent">
          FIRE BLOG
        </h1>
        <p className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          Data-driven insights and expert strategies for your FIRE journey
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="card-cyber group cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="text-xs text-cyber-blue uppercase tracking-wider mb-2">
                {post.category}
              </div>
              <h2 className="text-2xl font-cyber font-bold text-white mb-3 group-hover:text-cyber-purple transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 mb-4">
                {post.excerpt}
              </p>
              <div className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
