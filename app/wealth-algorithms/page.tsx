import CompoundInterestSlider from '@/components/CompoundInterestSlider';
import TimeToFICalculator from '@/components/TimeToFICalculator';
import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

export const metadata = {
  title: 'The Mathematical Path to Financial Independence (FIRE) | Velocity FI',
  description: 'Master the wealth algorithms behind FIRE. Understand the 4% rule, optimize your savings rate, and calculate your path to financial independence with interactive tools.',
};

export default function WealthAlgorithms() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 mdx-content">
      <h1>The Mathematical Path to Financial Independence (FIRE)</h1>
      
      <p className="text-xl text-[var(--foreground)] mb-8">
        <strong>Financial Independence isn't luck—it's mathematics.</strong> The FIRE movement (Financial Independence, Retire Early) 
        is built on a simple equation: accumulate enough capital that your investment returns cover your living expenses forever.
      </p>

      <h2>The Core Equation</h2>
      
      <p>
        <strong>The FIRE formula is elegant:</strong> <code>FI Number = Annual Expenses / Safe Withdrawal Rate</code>
      </p>

      <p>
        If you spend $40,000 per year and use a 4% withdrawal rate, your FI number is <strong>$1,000,000</strong>. 
        Once your portfolio hits this number, you can theoretically live off your investments indefinitely.
      </p>

      <p>
        But there's a problem: <strong>the 4% rule is deprecated in 2025.</strong> Here's why:
      </p>

      <ul>
        <li>The original Trinity Study used historical data from 1926-1995</li>
        <li>Bond yields were significantly higher (5-7% vs today's 3-4%)</li>
        <li>Stock valuations (P/E ratios) were lower</li>
        <li>Life expectancy has increased</li>
      </ul>

      <p>
        <strong>Modern consensus: Use 3.5% for safety,</strong> especially if you're retiring before 65. 
        This means you need about 14% more capital than the traditional 4% rule suggests.
      </p>

      <AdSlot slot="post-intro" format="horizontal" />

      <h2>Calculate Your Path to FI</h2>
      
      <p>
        <strong>The Time to FI Calculator below shows exactly when you'll reach financial independence.</strong> 
        Adjust the sliders to see how changes in income, expenses, and savings rate impact your timeline.
      </p>

      <TimeToFICalculator />

      <h2>The Savings Rate Dominance Principle</h2>

      <p>
        <strong>Your savings rate matters more than your investment returns.</strong> This is counterintuitive but mathematically provable.
      </p>

      <p>
        Here's why: Savings rate affects <em>both</em> sides of the equation:
      </p>

      <ul>
        <li><strong>Higher savings = Faster accumulation:</strong> More money going into investments</li>
        <li><strong>Lower expenses = Lower FI number:</strong> You need less to retire on</li>
      </ul>

      <p>
        A person earning $100k with 50% savings rate will reach FI faster than someone earning $200k with 25% savings rate, 
        even though they're saving the same absolute amount ($50k/year).
      </p>

      <CompoundInterestSlider initial={1000} />

      <h2>LeanFIRE vs FatFIRE: A Data-Driven Comparison</h2>

      <p>
        <strong>LeanFIRE: $25,000-40,000/year in expenses.</strong> Minimalist lifestyle, geographic arbitrage, 
        potentially living abroad. FI number: $714k - $1.14M (at 3.5% SWR).
      </p>

      <p>
        <strong>FatFIRE: $100,000+/year in expenses.</strong> Maintains upper-middle-class lifestyle. 
        FI number: $2.86M+ (at 3.5% SWR).
      </p>

      <table className="w-full my-8 border border-[var(--border-color)]">
        <thead className="bg-[var(--card-bg)]">
          <tr>
            <th className="border border-[var(--border-color)] p-3 text-left">Strategy</th>
            <th className="border border-[var(--border-color)] p-3 text-left">Annual Expenses</th>
            <th className="border border-[var(--border-color)] p-3 text-left">FI Number (3.5%)</th>
            <th className="border border-[var(--border-color)] p-3 text-left">Time to FI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[var(--border-color)] p-3">LeanFIRE</td>
            <td className="border border-[var(--border-color)] p-3">$30,000</td>
            <td className="border border-[var(--border-color)] p-3">$857,000</td>
            <td className="border border-[var(--border-color)] p-3">10-15 years</td>
          </tr>
          <tr className="bg-[var(--card-bg)]">
            <td className="border border-[var(--border-color)] p-3">RegularFIRE</td>
            <td className="border border-[var(--border-color)] p-3">$50,000</td>
            <td className="border border-[var(--border-color)] p-3">$1,429,000</td>
            <td className="border border-[var(--border-color)] p-3">15-20 years</td>
          </tr>
          <tr>
            <td className="border border-[var(--border-color)] p-3">FatFIRE</td>
            <td className="border border-[var(--border-color)] p-3">$100,000</td>
            <td className="border border-[var(--border-color)] p-3">$2,857,000</td>
            <td className="border border-[var(--border-color)] p-3">20-30 years</td>
          </tr>
        </tbody>
      </table>

      <AdSlot slot="mid-content" />

      <h2>The Three Levers of FIRE</h2>

      <p>
        <strong>You have exactly three ways to accelerate your FI timeline:</strong>
      </p>

      <ol>
        <li><strong className="text-[var(--neon-cyan)]">Increase Income:</strong> Side hustles, career advancement, job hopping</li>
        <li><strong className="text-[var(--neon-magenta)]">Decrease Expenses:</strong> Optimize big three (housing, transportation, food)</li>
        <li><strong className="text-[var(--terminal-green)]">Optimize Returns:</strong> Asset allocation, tax efficiency, minimize fees</li>
      </ol>

      <p>
        Most people focus on #3 (returns), but <strong>levers #1 and #2 have far more impact</strong> in the first decade.
      </p>

      <h2>Next Steps: Deep Dives</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <Link href="/wealth-algorithms/four-percent-rule" className="p-6 rounded-lg border-2 border-[var(--neon-cyan)] hover:bg-[var(--card-bg)] transition-all">
          <h3 className="text-xl font-bold mb-2 text-[var(--neon-cyan)]">The 4% Rule is Deprecated →</h3>
          <p className="text-[var(--foreground)]">
            Why you need 3.5% in 2025 and the math behind safe withdrawal rates.
          </p>
        </Link>

        <Link href="/wealth-algorithms/savings-rate" className="p-6 rounded-lg border-2 border-[var(--neon-magenta)] hover:bg-[var(--card-bg)] transition-all">
          <h3 className="text-xl font-bold mb-2 text-[var(--neon-magenta)]">Savings Rate vs Returns →</h3>
          <p className="text-[var(--foreground)]">
            The mathematical proof that savings rate dominates investment returns.
          </p>
        </Link>

        <Link href="/wealth-algorithms/lean-vs-fat-fire" className="p-6 rounded-lg border-2 border-[var(--terminal-green)] hover:bg-[var(--card-bg)] transition-all">
          <h3 className="text-xl font-bold mb-2 text-[var(--terminal-green)]">LeanFIRE vs FatFIRE →</h3>
          <p className="text-[var(--foreground)]">
            A data-driven comparison of lifestyle strategies and their tradeoffs.
          </p>
        </Link>

        <Link href="/tools" className="p-6 rounded-lg border-2 border-[var(--neon-yellow)] hover:bg-[var(--card-bg)] transition-all">
          <h3 className="text-xl font-bold mb-2 text-[var(--neon-yellow)]">Interactive Tools →</h3>
          <p className="text-[var(--foreground)]">
            Access all calculators and planning tools in one place.
          </p>
        </Link>
      </div>

      <div className="mt-12 p-6 rounded-lg border-2 border-[var(--neon-cyan)] bg-[var(--card-bg)]">
        <p className="text-sm text-[var(--foreground)]">
          <strong className="text-[var(--neon-yellow)]">Remember:</strong> FIRE isn't about deprivation—it's about 
          intentional resource allocation. The math doesn't lie: save more, spend less, invest wisely. 
          The rest is just noise.
        </p>
      </div>
    </article>
  );
}
