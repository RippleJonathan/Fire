import Hero from '@/components/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      
      {/* Featured Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ArticleCard
              title="Maximizing High Yield Savings in 2025"
              description="Discover the best high-yield savings accounts and strategies to maximize your returns."
              category="High Yield Savings"
              href="/blog/maximizing-high-yield-savings"
            />
            <ArticleCard
              title="The Emergency Fund Blueprint"
              description="Build an emergency fund using algorithmic precision and high-yield savings strategies."
              category="High Yield Savings"
              href="/blog/emergency-fund-blueprint"
            />
            <ArticleCard
              title="Algorithmic Trading Primer"
              description="Explore algorithmic trading strategies designed for long-term wealth building."
              category="Algo Trading"
              href="/blog/algo-trading-primer"
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Financial Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ToolCard
              title="Compound Interest Calculator"
              description="Calculate the future value of your investments with compound interest."
              href="/calculators/compound-interest"
            />
            <ToolCard
              title="FIRE Number Calculator"
              description="Determine how much you need to achieve financial independence."
              href="/calculators/fire-number"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ArticleCard({ title, description, category, href }: {
  title: string;
  description: string;
  category: string;
  href: string;
}) {
  return (
    <Link href={href} className="block group">
      <div className="bg-slate-700 rounded-lg p-6 h-full hover:bg-slate-600 transition-colors">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </Link>
  );
}

function ToolCard({ title, description, href }: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="block group">
      <div className="bg-gradient-to-br from-purple-900/50 to-slate-800 rounded-lg p-6 h-full hover:from-purple-800/50 hover:to-slate-700 transition-all border border-purple-500/20">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </Link>
  );
}
