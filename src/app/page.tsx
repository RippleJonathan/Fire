import Link from 'next/link'
import Image from 'next/image'
import Calculator from '@/components/Calculator'
import RelatedContent from '@/components/RelatedContent'
import AuthorBio from '@/components/AuthorBio'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 via-cyber-dark to-cyber-blue/20 blur-3xl"></div>
        <nav className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.jpg" 
              alt="Fire Driven Media" 
              width={60} 
              height={60}
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

        <section className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-cyber-purple/20 border border-cyber-purple/50 rounded-full">
            <span className="text-cyber-purple text-sm font-bold uppercase tracking-wider">Started at 40 • Building Freedom</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-cyber font-black mb-6 bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-blue bg-clip-text text-transparent">
            FIRE for Late Starters
          </h2>
          <p className="text-xl md:text-2xl text-cyber-blue mb-8 max-w-3xl mx-auto font-semibold">
            I discovered FIRE at 40. You're not too late.
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm a roofing business owner who spent 20 years being frugal without a target. 
            Now I'm building my path to financial independence—and sharing everything I learn along the way.
          </p>
          <p className="text-base text-cyber-green mb-12 max-w-2xl mx-auto">
            Real strategies. Honest math. No BS. Built for people like me who wish they'd started at 25 but are starting today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/blog/is-40-too-late-for-fire" className="btn-cyber">
              Read My Story
            </Link>
            <Link 
              href="/#calculator" 
              className="px-6 py-3 bg-cyber-blue text-cyber-darker font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.6)]"
            >
              Calculate Your Timeline
            </Link>
          </div>
        </section>
      </header>

      {/* Quick Facts Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-cyber text-center border-cyber-green/30">
            <div className="text-5xl font-cyber font-bold text-cyber-green mb-2">10-15</div>
            <div className="text-gray-400 mb-2">Years to FIRE</div>
            <div className="text-xs text-gray-500">Starting at 40 with 40-60% savings rate</div>
          </div>
          <div className="card-cyber text-center border-cyber-pink/30">
            <div className="text-5xl font-cyber font-bold text-cyber-pink mb-2">$69k</div>
            <div className="text-gray-400 mb-2">Solo 401(k) Limit</div>
            <div className="text-xs text-gray-500">Max contribution for self-employed (2025)</div>
          </div>
          <div className="card-cyber text-center border-cyber-blue/30">
            <div className="text-5xl font-cyber font-bold text-cyber-blue mb-2">8%</div>
            <div className="text-gray-400 mb-2">Historical Stock Returns</div>
            <div className="text-xs text-gray-500">S&P 500 average (inflation-adjusted)</div>
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto card-cyber border-2 border-cyber-purple/50">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-cyber-pink/20 text-cyber-pink text-xs font-bold uppercase tracking-wider rounded-full">New Post</span>
            <span className="text-gray-400 text-sm">November 20, 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4 text-cyber-purple">
            Is 40 Too Late to Start FIRE?
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I discovered FIRE at 40. Here's the math, the reality, and why it's not too late (but it does look different). 
            Real calculations, honest timelines, and a step-by-step plan for late starters.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/blog/is-40-too-late-for-fire" className="btn-cyber">
              Read Full Article
            </Link>
            <span className="text-gray-400 text-sm">9 min read • Strategy</span>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section id="calculator" className="container mx-auto px-6 py-16 scroll-mt-20">
        <h2 className="text-4xl font-cyber font-bold text-center mb-4 text-cyber-purple">
          Calculate Your FIRE Timeline
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          See exactly when you can achieve financial independence based on your income, expenses, and savings rate.
        </p>
        <Calculator />
      </section>

      {/* Author Credibility Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-cyber font-bold text-center mb-8 text-cyber-blue">
            Who's Behind This?
          </h2>
          <AuthorBio variant="long" />
        </div>
      </section>

      {/* Popular Content */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-cyber font-bold text-center mb-4 text-cyber-blue">
          Start Here
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Whether you're just discovering FIRE or optimizing your strategy, here's where to begin.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/blog/index-funds-vs-stocks" className="card-cyber group hover:border-cyber-purple/50 transition-all">
            <div className="text-2xl font-cyber font-bold text-cyber-purple mb-4 group-hover:cyber-glow transition-all">
              Index Funds vs Stocks
            </div>
            <p className="text-gray-400 mb-4">
              Why passive investing wins for 95% of FIRE seekers (and why I'm switching my strategy).
            </p>
            <span className="text-cyber-blue text-sm font-semibold group-hover:text-cyber-pink transition-colors">Read Article →</span>
          </Link>
          
          <Link href="/blog/tax-optimization-fire" className="card-cyber group hover:border-cyber-pink/50 transition-all">
            <div className="text-2xl font-cyber font-bold text-cyber-pink mb-4 group-hover:cyber-glow transition-all">
              Tax Optimization
            </div>
            <p className="text-gray-400 mb-4">
              Save $100k+ over your lifetime with Roth ladders, tax-loss harvesting, and smart account strategies.
            </p>
            <span className="text-cyber-blue text-sm font-semibold group-hover:text-cyber-pink transition-colors">Read Article →</span>
          </Link>
          
          <Link href="/blog/coast-fire-guide" className="card-cyber group hover:border-cyber-green/50 transition-all">
            <div className="text-2xl font-cyber font-bold text-cyber-green mb-4 group-hover:cyber-glow transition-all">
              Coast FIRE Strategy
            </div>
            <p className="text-gray-400 mb-4">
              Calculate when you can stop saving and let your investments coast to retirement.
            </p>
            <span className="text-cyber-blue text-sm font-semibold group-hover:text-cyber-pink transition-colors">Read Article →</span>
          </Link>
          
          <Link href="/#calculator" className="card-cyber group hover:border-cyber-blue/50 transition-all">
            <div className="text-2xl font-cyber font-bold text-cyber-blue mb-4 group-hover:cyber-glow transition-all">
              FIRE Calculator
            </div>
            <p className="text-gray-400 mb-4">
              Calculate your exact timeline to financial independence based on your numbers.
            </p>
            <span className="text-cyber-blue text-sm font-semibold group-hover:text-cyber-pink transition-colors">Try Calculator →</span>
          </Link>
          
          <Link href="/blog/4-percent-rule" className="card-cyber group hover:border-cyber-yellow/50 transition-all">
            <div className="text-2xl font-cyber font-bold text-cyber-yellow mb-4 group-hover:cyber-glow transition-all">
              The 4% Rule Explained
            </div>
            <p className="text-gray-400 mb-4">
              How much you need to retire early and why the 4% rule might be too aggressive (or too conservative).
            </p>
            <span className="text-cyber-blue text-sm font-semibold group-hover:text-cyber-pink transition-colors">Read Article →</span>
          </Link>
          
          <Link href="/strategies/traditional-fire" className="card-cyber group hover:border-cyber-purple/50 transition-all">
            <div className="text-2xl font-cyber font-bold text-cyber-purple mb-4 group-hover:cyber-glow transition-all">
              Traditional FIRE Path
            </div>
            <p className="text-gray-400 mb-4">
              The complete step-by-step strategy to achieve full financial independence and early retirement.
            </p>
            <span className="text-cyber-blue text-sm font-semibold group-hover:text-cyber-pink transition-colors">View Strategy →</span>
          </Link>
        </div>
      </section>

      {/* Related Resources */}
      <section className="container mx-auto px-6 py-16">
        <RelatedContent 
          keywords={['FIRE', 'financial independence', 'retirement calculator', '4% rule']}
          currentUrl="/"
          title="Explore More FIRE Resources"
          limit={6}
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-cyber-purple/30 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-500 mb-4">
            <p className="font-cyber text-sm mb-2">Fire Driven Media © {new Date().getFullYear()} - Your Path to Financial Independence</p>
            <p className="text-xs text-cyber-yellow mb-3">⚠️ Not financial advice. For educational purposes only.</p>
            <div className="flex justify-center gap-6 text-xs flex-wrap">
              <Link href="/about" className="hover:text-cyber-blue transition-colors">
                About
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="/disclaimer" className="hover:text-cyber-blue transition-colors">
                Legal Disclaimer
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="/blog" className="hover:text-cyber-blue transition-colors">
                Blog
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="/strategies" className="hover:text-cyber-blue transition-colors">
                Strategies
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="/calculators" className="hover:text-cyber-blue transition-colors">
                Calculators
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
