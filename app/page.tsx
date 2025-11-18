import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 border-b border-[var(--border-color)]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[var(--neon-cyan)] neon-text">
            VELOCITY_FI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[var(--foreground)]">
            The Mathematical Path to Financial Independence
          </p>
          <p className="text-lg mb-12 text-[var(--foreground)] max-w-2xl mx-auto">
            <strong className="text-[var(--neon-yellow)]">Traditional finance blogs are dead.</strong> They're slow, cluttered, and written by generic freelancers. 
            We win with <strong className="text-[var(--neon-cyan)]">speed</strong>, <strong className="text-[var(--neon-magenta)]">aesthetics</strong>, 
            and <strong className="text-[var(--terminal-green)]">utility</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/wealth-algorithms"
              className="px-8 py-4 rounded-lg bg-[var(--neon-cyan)] text-[var(--background)] font-bold hover:bg-[var(--neon-magenta)] transition-all shadow-lg hover:shadow-[0_0_20px_var(--neon-cyan)]"
            >
              Start Learning →
            </Link>
            <Link 
              href="/tools"
              className="px-8 py-4 rounded-lg border-2 border-[var(--neon-cyan)] text-[var(--neon-cyan)] font-bold hover:bg-[var(--neon-cyan)] hover:text-[var(--background)] transition-all"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--neon-cyan)] transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--neon-cyan)]">Sub-100ms Speed</h3>
              <p className="text-[var(--foreground)]">
                Built with Next.js for lightning-fast page loads. No popups, no clutter, no BS.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--neon-magenta)] transition-all">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--neon-magenta)]">Cyberpunk Aesthetic</h3>
              <p className="text-[var(--foreground)]">
                Dark mode with neon accents. A terminal-style UI that makes finance fun.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--terminal-green)] transition-all">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--terminal-green)]">Interactive Tools</h3>
              <p className="text-[var(--foreground)]">
                Calculators embedded directly in articles. Play with the data while you read.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Clusters */}
      <section className="py-16 px-4 bg-[var(--card-bg)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[var(--neon-cyan)]">
            Topical Clusters
          </h2>
          
          <div className="space-y-8">
            <Link href="/wealth-algorithms" className="block p-6 rounded-lg border-2 border-[var(--neon-cyan)] hover:bg-[var(--background)] transition-all">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🟢</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[var(--neon-cyan)]">Wealth Algorithms</h3>
                  <p className="text-[var(--foreground)] mb-4">
                    The mathematical foundations of FIRE. Learn the 4% rule (and why it's deprecated), 
                    optimize your savings rate, and understand LeanFIRE vs FatFIRE.
                  </p>
                  <div className="text-sm text-[var(--neon-yellow)]">
                    Target: Tech workers & Young Professionals
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/high-yield-banking" className="block p-6 rounded-lg border-2 border-[var(--neon-magenta)] hover:bg-[var(--background)] transition-all">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔵</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[var(--neon-magenta)]">High-Yield Banking</h3>
                  <p className="text-[var(--foreground)] mb-4">
                    Optimize your liquid assets with the best HYSAs. Understand APY vs inflation, 
                    FDIC limits, and when switching banks is worth it.
                  </p>
                  <div className="text-sm text-[var(--neon-yellow)]">
                    Target: Cash-heavy savers
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/tax-optimization" className="block p-6 rounded-lg border-2 border-[var(--terminal-green)] hover:bg-[var(--background)] transition-all">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🟣</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[var(--terminal-green)]">Tax Optimization</h3>
                  <p className="text-[var(--foreground)] mb-4">
                    Minimize tax drag on your wealth. Master the Mega-Backdoor Roth, HSA triple-tax advantage, 
                    and automated tax-loss harvesting.
                  </p>
                  <div className="text-sm text-[var(--neon-yellow)]">
                    Target: High earners
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[var(--neon-cyan)]">
            Ready to Accelerate Your FI Journey?
          </h2>
          <p className="text-lg mb-8 text-[var(--foreground)]">
            Join thousands of tech workers and young professionals building wealth with data-driven strategies.
          </p>
          <Link 
            href="/wealth-algorithms"
            className="inline-block px-8 py-4 rounded-lg bg-[var(--neon-cyan)] text-[var(--background)] font-bold hover:bg-[var(--neon-magenta)] transition-all shadow-lg hover:shadow-[0_0_20px_var(--neon-cyan)]"
          >
            Start Here →
          </Link>
        </div>
      </section>
    </div>
  );
}
