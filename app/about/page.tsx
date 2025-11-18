export default function About() {
  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-white mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Velocity FI</span>
        </h1>

        <div className="prose prose-invert max-w-none">
          <div className="text-xl text-gray-300 mb-8 leading-relaxed">
            Velocity FI is not a traditional personal finance blog. We&apos;re a high-performance content engine 
            designed to dominate the Financial Independence, Retire Early (FIRE) niche through data-driven insights, 
            algorithmic precision, and a cyberpunk-clean aesthetic.
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To demystify wealth building through a data-driven, algorithmic approach, presented in a blazing-fast, 
              futuristic UI. We target the &quot;High-Intent&quot; financial demographic: tech workers, engineers, and optimizers 
              who value speed, accuracy, and efficiency over fluff.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Tech Stack</h2>
            <p className="text-gray-300 mb-4">
              Built for Core Web Vitals perfection with a 100/100 Lighthouse Score target:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▸</span>
                <span><strong className="text-white">Next.js 14:</strong> Server-side rendering and instant transitions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▸</span>
                <span><strong className="text-white">Tailwind CSS:</strong> Utility-first styling for a &quot;Cyberpunk/Clean&quot; aesthetic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▸</span>
                <span><strong className="text-white">MDX:</strong> Markdown with embedded React components for interactive calculators</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▸</span>
                <span><strong className="text-white">TypeScript:</strong> Type-safe development for reliability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▸</span>
                <span><strong className="text-white">Programmatic SEO:</strong> Automated JSON-LD Schema generation</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Content Strategy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our content is organized into topic clusters for maximum SEO performance:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-xl">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-white mb-2">High Yield Savings</h3>
                <p className="text-gray-400 text-sm">
                  Data-driven analysis of savings optimization, compound interest strategies, and cash management.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-xl">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="text-xl font-bold text-white mb-2">Algorithmic Trading</h3>
                <p className="text-gray-400 text-sm">
                  Leverage algorithms and automation to optimize investment strategies and execution.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Who We Serve</h2>
            <p className="text-gray-300 leading-relaxed">
              Velocity FI is built for:
            </p>
            <ul className="space-y-2 text-gray-300 mt-4">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Software engineers and tech workers pursuing FIRE</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Data-driven optimizers who want numbers, not narratives</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>People who value speed, accuracy, and efficiency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Individuals comfortable with code and algorithms</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Open Source</h2>
            <p className="text-gray-300 leading-relaxed">
              This project is open source and available under the MIT License. We believe in transparency 
              and the power of community-driven development. Contributions are welcome!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
