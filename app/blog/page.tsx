import Link from 'next/link';

const blogPosts = [
  {
    slug: 'maximizing-high-yield-savings',
    title: 'Maximizing High Yield Savings in 2025',
    description: 'Discover the best high-yield savings accounts and strategies to maximize your returns.',
    category: 'High Yield Savings',
    date: '2025-01-15',
    cluster: 'cluster-1'
  },
  {
    slug: 'emergency-fund-blueprint',
    title: 'The Emergency Fund Blueprint: Data-Driven Approach',
    description: 'Build an emergency fund using algorithmic precision and high-yield savings strategies.',
    category: 'High Yield Savings',
    date: '2025-01-10',
    cluster: 'cluster-1'
  },
  {
    slug: 'algo-trading-primer',
    title: 'Algorithmic Trading for FIRE Seekers: A Primer',
    description: 'Explore algorithmic trading strategies designed for long-term wealth building.',
    category: 'Algo Trading',
    date: '2025-01-20',
    cluster: 'cluster-2'
  },
  {
    slug: 'building-trading-bots',
    title: 'Building Trading Bots: A Technical Guide',
    description: 'Technical walkthrough for building your first algorithmic trading bot.',
    category: 'Algo Trading',
    date: '2025-01-25',
    cluster: 'cluster-2'
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-300">
            Data-driven insights for financial independence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="bg-slate-800 rounded-lg p-6 h-full hover:bg-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full">
                    {post.category}
                  </span>
                  <time className="text-sm text-gray-400">{post.date}</time>
                </div>
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-300">{post.description}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
