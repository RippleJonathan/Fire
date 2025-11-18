import Link from 'next/link';
import { formatDate } from '@/lib/date-utils';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  cluster: string;
  readTime: number;
}

// In a real app, this would fetch from a database or file system
const blogPosts: BlogPost[] = [
  {
    slug: 'maximizing-hysa-returns',
    title: 'Maximizing HYSA Returns in 2024',
    description: 'A comprehensive analysis of the best high-yield savings accounts and optimization strategies.',
    date: '2024-01-15',
    cluster: 'cluster-1',
    readTime: 5,
  },
  {
    slug: 'compound-interest-mastery',
    title: 'The Power of Compound Interest: A Mathematical Deep Dive',
    description: 'Understanding the exponential growth of wealth through compound interest with interactive calculators.',
    date: '2024-01-10',
    cluster: 'cluster-1',
    readTime: 7,
  },
  {
    slug: 'algo-trading-basics',
    title: 'Algorithmic Trading for Beginners',
    description: 'Introduction to automated trading strategies and how tech workers can leverage their skills.',
    date: '2024-01-20',
    cluster: 'cluster-2',
    readTime: 8,
  },
  {
    slug: 'python-trading-bots',
    title: 'Building Python Trading Bots: A Complete Guide',
    description: 'Step-by-step guide to creating your own automated trading system using Python.',
    date: '2024-01-18',
    cluster: 'cluster-2',
    readTime: 12,
  },
];

export default function BlogIndex() {
  const cluster1Posts = blogPosts.filter(post => post.cluster === 'cluster-1');
  const cluster2Posts = blogPosts.filter(post => post.cluster === 'cluster-2');

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-white mb-4">
          Financial Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Hub</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl">
          Data-driven insights, algorithmic strategies, and interactive tools for the high-intent FIRE community.
        </p>

        {/* Cluster 1: High Yield Savings */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">High Yield Savings</h2>
              <p className="text-gray-400 text-sm">Maximize your cash returns</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {cluster1Posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.cluster}/${post.slug}`} className="group">
                <article className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-xl hover:border-purple-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <span>{formatDate(post.date, 'medium')}</span>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.description}</p>
                  <div className="flex items-center text-purple-400 font-medium">
                    Read Article →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Cluster 2: Algo Trading */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Algorithmic Trading</h2>
              <p className="text-gray-400 text-sm">Automate your investment strategy</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {cluster2Posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.cluster}/${post.slug}`} className="group">
                <article className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-xl hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <span>{formatDate(post.date, 'medium')}</span>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.description}</p>
                  <div className="flex items-center text-cyan-400 font-medium">
                    Read Article →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
