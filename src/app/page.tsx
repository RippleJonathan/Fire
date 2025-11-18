import Link from 'next/link'
import Calculator from '@/components/Calculator'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 via-cyber-dark to-cyber-blue/20 blur-3xl"></div>
        <nav className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-cyber font-bold cyber-glow text-cyber-purple">
            FIRE_ENGINE
          </h1>
          <div className="flex gap-6">
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

        <section className="relative z-10 container mx-auto px-6 py-20 text-center">
          <h2 className="text-6xl md:text-8xl font-cyber font-black mb-6 bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-blue bg-clip-text text-transparent animate-pulse-slow">
            ACHIEVE FIRE
          </h2>
          <p className="text-xl md:text-2xl text-cyber-blue mb-8 max-w-3xl mx-auto">
            Financial Independence, Retire Early
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            High-performance tools and data-driven insights to accelerate your path to financial freedom.
            Calculate, strategize, and dominate your financial future.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/calculators" className="btn-cyber">
              Launch Calculator
            </Link>
            <Link 
              href="/strategies" 
              className="px-6 py-3 bg-cyber-blue text-cyber-darker font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.6)]"
            >
              Explore Strategies
            </Link>
          </div>
        </section>
      </header>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-cyber text-center">
            <div className="text-5xl font-cyber font-bold text-cyber-green mb-2">4%</div>
            <div className="text-gray-400">Safe Withdrawal Rate</div>
          </div>
          <div className="card-cyber text-center">
            <div className="text-5xl font-cyber font-bold text-cyber-pink mb-2">25x</div>
            <div className="text-gray-400">Annual Expenses to FIRE</div>
          </div>
          <div className="card-cyber text-center">
            <div className="text-5xl font-cyber font-bold text-cyber-blue mb-2">7%</div>
            <div className="text-gray-400">Average Market Returns</div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-cyber font-bold text-center mb-12 text-cyber-purple">
          FIRE Calculator
        </h2>
        <Calculator />
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-cyber font-bold text-center mb-12 text-cyber-blue">
          Master Your Financial Future
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card-cyber group cursor-pointer">
            <div className="text-2xl font-cyber font-bold text-cyber-purple mb-4 group-hover:cyber-glow transition-all">
              Investment Strategies
            </div>
            <p className="text-gray-400">
              Discover proven investment strategies to maximize returns and minimize risk on your path to FIRE.
            </p>
          </div>
          <div className="card-cyber group cursor-pointer">
            <div className="text-2xl font-cyber font-bold text-cyber-pink mb-4 group-hover:cyber-glow transition-all">
              Passive Income
            </div>
            <p className="text-gray-400">
              Build multiple streams of passive income to accelerate your journey to financial independence.
            </p>
          </div>
          <div className="card-cyber group cursor-pointer">
            <div className="text-2xl font-cyber font-bold text-cyber-blue mb-4 group-hover:cyber-glow transition-all">
              Tax Optimization
            </div>
            <p className="text-gray-400">
              Leverage tax-advantaged accounts and strategies to keep more of your wealth working for you.
            </p>
          </div>
          <div className="card-cyber group cursor-pointer">
            <div className="text-2xl font-cyber font-bold text-cyber-green mb-4 group-hover:cyber-glow transition-all">
              Coast FIRE
            </div>
            <p className="text-gray-400">
              Calculate when you can coast to retirement without additional savings.
            </p>
          </div>
          <div className="card-cyber group cursor-pointer">
            <div className="text-2xl font-cyber font-bold text-cyber-yellow mb-4 group-hover:cyber-glow transition-all">
              Lean FIRE
            </div>
            <p className="text-gray-400">
              Achieve early retirement with minimalist living and frugal strategies.
            </p>
          </div>
          <div className="card-cyber group cursor-pointer">
            <div className="text-2xl font-cyber font-bold text-cyber-purple mb-4 group-hover:cyber-glow transition-all">
              Fat FIRE
            </div>
            <p className="text-gray-400">
              Build substantial wealth for a luxurious early retirement lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyber-purple/30 mt-20">
        <div className="container mx-auto px-6 py-8 text-center text-gray-500">
          <p className="font-cyber">FIRE_ENGINE © 2024 - Accelerate Your Financial Independence</p>
        </div>
      </footer>
    </div>
  )
}
