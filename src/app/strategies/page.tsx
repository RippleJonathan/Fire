import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FIRE Strategies - Path to Financial Independence',
  description: 'Proven strategies for achieving Financial Independence: investment approaches, passive income, tax optimization, and more.',
}

export default function StrategiesPage() {
  const strategies = [
    {
      title: 'Index Fund Investing',
      description: 'Build wealth through low-cost, diversified index funds. The foundation of passive investing.',
      category: 'Investment',
      color: 'cyber-purple',
    },
    {
      title: 'Real Estate Income',
      description: 'Generate passive income through rental properties and REITs.',
      category: 'Passive Income',
      color: 'cyber-green',
    },
    {
      title: 'Tax-Advantaged Accounts',
      description: 'Maximize 401(k), IRA, and HSA contributions to reduce taxes and accelerate wealth building.',
      category: 'Tax Strategy',
      color: 'cyber-blue',
    },
    {
      title: 'Geographic Arbitrage',
      description: 'Reduce living expenses by relocating to lower cost of living areas.',
      category: 'Lifestyle',
      color: 'cyber-pink',
    },
    {
      title: 'Dividend Growth Investing',
      description: 'Build a portfolio of dividend-paying stocks for reliable passive income.',
      category: 'Investment',
      color: 'cyber-yellow',
    },
    {
      title: 'Side Hustles',
      description: 'Increase your income and savings rate through strategic side projects.',
      category: 'Income',
      color: 'cyber-green',
    },
  ]

  return (
    <div className="min-h-screen">
      <nav className="container mx-auto px-6 py-6">
        <Link href="/" className="text-3xl font-cyber font-bold cyber-glow text-cyber-purple">
          FIRE_ENGINE
        </Link>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-cyber font-black mb-6 text-center bg-gradient-to-r from-cyber-pink via-cyber-purple to-cyber-blue bg-clip-text text-transparent">
          FIRE STRATEGIES
        </h1>
        <p className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          Data-driven strategies to accelerate your path to Financial Independence
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {strategies.map((strategy, index) => (
            <div 
              key={index}
              className="card-cyber group cursor-pointer"
            >
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                {strategy.category}
              </div>
              <h2 className={`text-2xl font-cyber font-bold text-${strategy.color} mb-4 group-hover:cyber-glow transition-all`}>
                {strategy.title}
              </h2>
              <p className="text-gray-400">
                {strategy.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Principles */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-cyber font-bold text-center mb-12 text-cyber-blue">
            Core FIRE Principles
          </h2>
          <div className="space-y-6">
            <div className="card-cyber">
              <h3 className="text-xl font-cyber font-bold text-cyber-purple mb-2">
                High Savings Rate
              </h3>
              <p className="text-gray-400">
                The single most important factor. Aim for 50%+ of your income. Every 1% increase in savings rate 
                can reduce your time to FIRE by months or years.
              </p>
            </div>
            <div className="card-cyber">
              <h3 className="text-xl font-cyber font-bold text-cyber-green mb-2">
                Low-Cost Investing
              </h3>
              <p className="text-gray-400">
                Minimize fees and taxes. Every 1% in fees can cost you hundreds of thousands over decades. 
                Index funds typically charge 0.03-0.20% vs 1-2% for actively managed funds.
              </p>
            </div>
            <div className="card-cyber">
              <h3 className="text-xl font-cyber font-bold text-cyber-blue mb-2">
                Optimize Your Big Three
              </h3>
              <p className="text-gray-400">
                Housing, transportation, and food typically account for 60-70% of expenses. 
                Optimize these for maximum impact on your savings rate.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
