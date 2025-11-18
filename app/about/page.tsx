import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">
          About Velocity FI
        </h1>

        <div className="space-y-6 text-gray-300">
          <section className="bg-slate-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="mb-4">
              Velocity FI is not a traditional blog. It is a high-performance content engine designed to 
              dominate the &quot;Financial Independence, Retire Early&quot; (FIRE) niche. Our goal is to demystify 
              wealth building through a data-driven, algorithmic approach, presented in a blazing-fast, 
              futuristic UI.
            </p>
            <p>
              We target the &quot;High-Intent&quot; financial demographic: tech workers, engineers, and optimizers 
              who value speed, accuracy, and efficiency over fluff.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
            <p className="mb-4">
              This project is built for Core Web Vitals perfection, targeting a 100/100 Lighthouse Score.
            </p>
            <ul className="space-y-2 ml-6 list-disc">
              <li><strong className="text-white">Framework:</strong> Next.js 14 with App Router for server-side rendering and instant transitions</li>
              <li><strong className="text-white">Styling:</strong> Tailwind CSS for a &quot;Cyberpunk/Clean&quot; aesthetic</li>
              <li><strong className="text-white">Content:</strong> MDX for markdown with embedded React components</li>
              <li><strong className="text-white">SEO:</strong> Programmatic SEO with automated JSON-LD Schema generation</li>
              <li><strong className="text-white">Analytics:</strong> Privacy-focused server-side analytics</li>
            </ul>
          </section>

          <section className="bg-slate-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
            <p className="mb-4">
              We believe in:
            </p>
            <ul className="space-y-2 ml-6 list-disc">
              <li><strong className="text-white">Data-Driven Analysis:</strong> Every recommendation backed by numbers</li>
              <li><strong className="text-white">Algorithmic Precision:</strong> Automated tools for financial planning</li>
              <li><strong className="text-white">High Performance:</strong> Lightning-fast load times and interactions</li>
              <li><strong className="text-white">Actionable Insights:</strong> No fluff, just practical strategies</li>
              <li><strong className="text-white">Open Source:</strong> Transparency in our methods and code</li>
            </ul>
          </section>

          <section className="bg-slate-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Content Clusters</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">High Yield Savings</h3>
                <p>Maximize returns on your cash reserves with data-driven account selection and optimization strategies.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Algorithmic Trading</h3>
                <p>Automate your investment strategy with proven algorithms designed for long-term wealth building.</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-lg p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Get Started</h2>
            <p className="mb-4">
              Ready to accelerate your journey to financial independence?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition-colors"
              >
                Explore Articles
              </Link>
              <Link
                href="/calculators"
                className="inline-flex items-center justify-center px-6 py-3 border border-cyan-500 text-base font-medium rounded-md text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              >
                Try Calculators
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

