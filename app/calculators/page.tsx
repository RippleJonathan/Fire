import CompoundInterestCalculator from '@/components/CompoundInterestCalculator';

export default function Calculators() {
  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-white mb-4">
          Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Calculators</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl">
          Interactive tools to model your path to financial independence. Built with precision for the data-driven optimizer.
        </p>

        <div className="space-y-12">
          {/* Compound Interest Calculator */}
          <section>
            <CompoundInterestCalculator />
          </section>

          {/* FIRE Calculator Card */}
          <section className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-xl">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">🔥</span>
              FIRE Calculator
            </h2>
            <p className="text-gray-400 mb-6">
              Calculate how long until you reach Financial Independence based on your savings rate, current assets, and expected returns.
            </p>
            <div className="text-cyan-400 font-medium">
              Coming Soon - Advanced FIRE modeling with Monte Carlo simulations
            </div>
          </section>

          {/* Savings Rate Calculator */}
          <section className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-xl">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">💾</span>
              Savings Rate Optimizer
            </h2>
            <p className="text-gray-400 mb-6">
              Determine your optimal savings rate based on income, expenses, and FIRE goals. Includes tax optimization strategies.
            </p>
            <div className="text-purple-400 font-medium">
              Coming Soon - Multi-scenario analysis with tax considerations
            </div>
          </section>

          {/* Portfolio Allocation */}
          <section className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-xl">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">📊</span>
              Portfolio Allocation Tool
            </h2>
            <p className="text-gray-400 mb-6">
              Optimize your asset allocation based on risk tolerance, time horizon, and market conditions. Uses Modern Portfolio Theory.
            </p>
            <div className="text-purple-400 font-medium">
              Coming Soon - Interactive efficient frontier visualization
            </div>
          </section>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-slate-800/30 border border-gray-700 rounded-lg">
          <p className="text-gray-400 text-sm">
            <strong className="text-gray-300">Disclaimer:</strong> These calculators are for educational and illustrative purposes only. 
            Results are estimates based on the inputs provided and should not be considered financial advice. 
            Actual results may vary. Consult with a qualified financial advisor before making investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
