import Link from 'next/link';

export default function Start() {
  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-white mb-6">
          Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Started</span>
        </h1>

        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Your path to Financial Independence starts with understanding the fundamentals. 
          Follow this roadmap designed specifically for tech workers and engineers.
        </p>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Calculate Your Baseline</h2>
                <p className="text-gray-300 mb-4">
                  Before optimizing, you need to know where you stand. Calculate your:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Net worth (assets - liabilities)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Monthly expenses (track for 3 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Savings rate (% of income saved/invested)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>FIRE number (annual expenses × 25)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Build Your Emergency Fund</h2>
                <p className="text-gray-300 mb-4">
                  Before aggressive investing, secure your foundation:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Save 6 months of expenses in a high-yield savings account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Choose a HYSA with 4.5%+ APY (see our analysis)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Automate monthly contributions</span>
                  </li>
                </ul>
                <Link href="/blog/cluster-1/maximizing-hysa-returns" className="inline-flex items-center gap-2 text-cyan-400 font-medium mt-4 hover:text-cyan-300">
                  Read: Maximizing HYSA Returns →
                </Link>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Optimize Tax-Advantaged Accounts</h2>
                <p className="text-gray-300 mb-4">
                  Max out these accounts in order:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>401(k) up to employer match (free money)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>HSA if eligible (triple tax advantage)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Roth IRA or Traditional IRA ($6,500/year)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Max 401(k) ($22,500/year in 2024)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Invest Systematically</h2>
                <p className="text-gray-300 mb-4">
                  Build a diversified portfolio with low-cost index funds:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>60-90% stocks (VTI, VXUS for global diversification)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>10-40% bonds (BND, based on age and risk tolerance)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Dollar-cost average monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Rebalance annually</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">5</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Monitor and Optimize</h2>
                <p className="text-gray-300 mb-4">
                  Use data to continuously improve:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Track net worth monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Review savings rate quarterly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Increase contributions with raises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Explore algorithmic strategies when ready</span>
                  </li>
                </ul>
                <Link href="/blog/cluster-2/algo-trading-basics" className="inline-flex items-center gap-2 text-purple-400 font-medium mt-4 hover:text-purple-300">
                  Read: Algorithmic Trading for Beginners →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Calculate Your Path?
          </h2>
          <p className="text-gray-300 mb-6">
            Use our interactive calculators to model different scenarios and find your optimal strategy.
          </p>
          <Link 
            href="/calculators" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          >
            Launch Calculators
          </Link>
        </div>
      </div>
    </div>
  );
}
