import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Content Clusters Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Clusters</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            High-intent financial content organized by topic clusters for maximum SEO performance
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Cluster 1: High Yield Savings */}
            <Link href="/blog/cluster-1" className="group">
              <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-xl hover:border-purple-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  High Yield Savings
                </h3>
                <p className="text-gray-400 mb-4">
                  Maximize your returns with data-driven analysis of the best high-yield savings accounts and strategies.
                </p>
                <div className="flex items-center text-purple-400 font-medium">
                  Explore Cluster →
                </div>
              </div>
            </Link>

            {/* Cluster 2: Algo-Trading */}
            <Link href="/blog/cluster-2" className="group">
              <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-xl hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  Algorithmic Trading
                </h3>
                <p className="text-gray-400 mb-4">
                  Leverage algorithms and automation to optimize your investment strategy and execution.
                </p>
                <div className="flex items-center text-cyan-400 font-medium">
                  Explore Cluster →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Performance</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Optimized for Core Web Vitals with 100/100 Lighthouse scores</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SEO Optimized</h3>
              <p className="text-gray-400">Programmatic SEO with automated JSON-LD schema generation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Interactive Content</h3>
              <p className="text-gray-400">MDX-powered posts with embedded calculators and tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Velocity FI. Built with Next.js 14, Tailwind CSS, and MDX.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            For educational purposes only. Not financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
