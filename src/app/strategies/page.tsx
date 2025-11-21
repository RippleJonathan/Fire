import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getAllStrategies } from '@/lib/strategies'

export const metadata: Metadata = {
  title: 'FIRE Strategies - Path to Financial Independence',
  description: 'Proven strategies for achieving Financial Independence: investment approaches, passive income, tax optimization, and more.',
}

export default function StrategiesPage() {
  const strategies = getAllStrategies()

  return (
    <div className="min-h-screen">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <Image 
            src="/logo.jpg" 
            alt="Fire Driven Media" 
            width={80} 
            height={80}
            className="rounded-full ring-2 ring-cyber-purple/50 group-hover:ring-cyber-pink transition-all"
          />
        </Link>
        <div className="flex gap-4 md:gap-6 text-sm md:text-base">
          <Link href="/about" className="text-cyber-blue hover:text-cyber-green transition-colors font-semibold">
            About
          </Link>
          <Link href="/calculators" className="text-cyber-blue hover:text-cyber-green transition-colors">
            Calculators
          </Link>
          <Link href="/strategies" className="text-cyber-blue hover:text-cyber-green transition-colors">
            Strategies
          </Link>
          <Link href="/blog" className="text-cyber-blue hover:text-cyber-green transition-colors">
            Blog
          </Link>
        </div>
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
            <Link
              key={index}
              href={`/strategies/${strategy.slug}`}
              className="card-cyber group cursor-pointer hover:scale-105 transition-transform block"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{strategy.icon}</span>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  {strategy.category}
                </div>
              </div>
              <h2 className={`text-2xl font-cyber font-bold text-${strategy.color} mb-3 group-hover:cyber-glow transition-all`}>
                {strategy.title.replace(' for FIRE', '').replace(' Strategy', '')}
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                {strategy.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{strategy.difficulty}</span>
                <span className={`text-${strategy.color} font-bold`}>
                  {strategy.potentialImpact} Impact
                </span>
              </div>
            </Link>
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
