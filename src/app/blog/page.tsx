import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'FIRE Blog - Financial Independence Insights',
  description: 'Expert insights, strategies, and data-driven analysis for achieving Financial Independence and Early Retirement.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <Image 
            src="/logo.jpg" 
            alt="Fire Driven Media" 
            width={60} 
            height={60}
            className="rounded-full ring-2 ring-cyber-purple/50 group-hover:ring-cyber-pink transition-all"
          />
        </Link>
        <div className="flex gap-4 md:gap-6 text-sm md:text-base">
          <Link href="/about" className="text-cyber-blue hover:text-cyber-green transition-colors font-semibold">
            About
          </Link>
          <Link href="/calculators" className="text-cyber-blue hover:text-cyber-green transition-colors">
            Calculators
          </Link>
          <Link href="/strategies" className="text-cyber-blue hover:text-cyber-green transition-colors">
            Strategies
          </Link>
          <Link href="/blog" className="text-cyber-blue hover:text-cyber-green transition-colors">
            Blog
          </Link>
        </div>
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
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="card-cyber group cursor-pointer hover:scale-105 transition-transform block"
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
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                {post.readTime && <span>{post.readTime}</span>}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
