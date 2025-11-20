import Link from 'next/link';
import Image from 'next/image';

interface AuthorBioProps {
  variant?: 'short' | 'long' | 'inline';
  className?: string;
}

export default function AuthorBio({ variant = 'short', className = '' }: AuthorBioProps) {
  
  if (variant === 'inline') {
    return (
      <span className={`text-gray-400 text-sm ${className}`}>
        by <Link href="/about" className="text-cyber-blue hover:text-cyber-green transition-colors font-semibold">Jonathan</Link>
        , a 40-year-old entrepreneur on a late-start FIRE journey
      </span>
    );
  }

  if (variant === 'short') {
    return (
      <div className={`border-l-4 border-cyber-purple bg-cyber-darker/50 p-6 rounded-r-lg ${className}`}>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-cyber-purple/50">
            <Image 
              src="/jonathan.jpg" 
              alt="Jonathan - Fire Driven Media founder" 
              width={64} 
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-cyber-purple mb-2">About the Author</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              <Link href="/about" className="text-cyber-blue hover:text-cyber-green transition-colors font-semibold">Jonathan</Link> is 
              a 40-year-old roofing business owner who discovered FIRE in 2025 and is documenting his late-start journey 
              to financial independence. He builds tools and shares what he's learning along the way.
            </p>
            <p className="text-gray-400 text-xs italic">
              Not a financial advisor—just a business owner figuring out FIRE and sharing the journey. 
              See our <Link href="/disclaimer" className="text-cyber-blue hover:text-cyber-green transition-colors">disclaimer</Link>.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Long variant
  return (
    <div className={`border border-cyber-purple/30 bg-gradient-to-br from-cyber-darker to-cyber-dark p-8 rounded-lg ${className}`}>
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-cyber-purple/50 shadow-lg shadow-cyber-purple/50">
          <Image 
            src="/jonathan.jpg" 
            alt="Jonathan - Fire Driven Media founder" 
            width={96} 
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-cyber-purple mb-3">About Jonathan</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm a 40-year-old roofing business owner who discovered FIRE in 2025 and realized I'd been doing 
            it halfway for years without knowing it. I've always been decent with money—frugal, saving when I can, 
            making investments—but I never had a clear target or timeline.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            I built Fire Driven Media to document what I'm learning, create better calculators for people like me 
            (business owners, late starters, variable income), and prove it's not too late to pursue financial independence.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm not a financial advisor, CPA, or investment professional. I'm a business owner learning FIRE strategies 
            and sharing the journey. Every article is researched, fact-checked, and focused on practical, actionable advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link 
              href="/about" 
              className="btn-cyber bg-cyber-purple hover:bg-cyber-pink text-white px-6 py-2 rounded-lg font-semibold transition-all text-sm text-center"
            >
              Read My Full Story
            </Link>
            <Link 
              href="/disclaimer" 
              className="btn-cyber bg-cyber-dark hover:bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/50 px-6 py-2 rounded-lg font-semibold transition-all text-sm text-center"
            >
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

