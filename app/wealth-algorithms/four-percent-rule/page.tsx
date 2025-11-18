import CompoundInterestSlider from '@/components/CompoundInterestSlider';
import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

export const metadata = {
  title: 'The 4% Rule is Deprecated: Why You Need 3.5% in 2025 | Velocity FI',
  description: 'The classic 4% safe withdrawal rate is outdated. Learn why modern retirees should use 3.5% and how this impacts your FI number.',
};

export default function FourPercentRule() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 mdx-content">
      <div className="mb-8">
        <Link href="/wealth-algorithms" className="text-[var(--neon-cyan)] hover:underline">
          ← Back to Wealth Algorithms
        </Link>
      </div>

      <h1>The 4% Rule is Deprecated: Why You Need 3.5% in 2025</h1>

      <p className="text-xl text-[var(--foreground)] mb-8">
        <strong>The 4% safe withdrawal rate—the bedrock of FIRE planning—is no longer safe.</strong> 
        Updated research and current market conditions point to 3.5% as the new standard for early retirees.
      </p>

      <h2>What is the 4% Rule?</h2>

      <p>
        <strong>The 4% rule states: Withdraw 4% of your portfolio in year one of retirement, then adjust for inflation annually.</strong> 
        Based on the Trinity Study (1998), this withdrawal rate had a 95% success rate over 30-year periods using historical data from 1926-1995.
      </p>

      <p>
        For example: With a $1M portfolio, you'd withdraw $40,000 in year one. If inflation is 3%, you'd withdraw $41,200 in year two, and so on.
      </p>

      <AdSlot slot="intro" />

      <h2>Why It's Broken in 2025</h2>

      <p>
        <strong>The original study has four critical flaws when applied to modern early retirees:</strong>
      </p>

      <h3>1. Bond Yields Have Collapsed</h3>

      <p>
        The Trinity Study period (1926-1995) included bond yields averaging 5-7%. 
        <strong>Today's yields: 3-4%.</strong> A 60/40 portfolio historically returned ~9-10% annually. 
        Today's realistic expectation: 6-7%.
      </p>

      <h3>2. Stock Valuations Are Higher</h3>

      <p>
        The Shiller CAPE ratio (Cyclically Adjusted Price-to-Earnings) averaged 15-18 during the study period. 
        <strong>Current CAPE: 30+.</strong> Higher valuations typically predict lower future returns.
      </p>

      <h3>3. Retirement Periods Are Longer</h3>

      <p>
        The Trinity Study tested 30-year retirements (age 65-95). <strong>Early retirees need 40-60 year horizons.</strong> 
        A 35-year-old retiring needs their money to last until 95+. Each additional decade dramatically increases failure risk.
      </p>

      <h3>4. Sequence of Returns Risk</h3>

      <p>
        <strong>The order of returns matters more than the average.</strong> If you retire into a bear market and start withdrawing, 
        you lock in losses and reduce your portfolio's ability to recover. The 2000-2009 "lost decade" would have devastated 4% withdrawals.
      </p>

      <table className="w-full my-8 border border-[var(--border-color)]">
        <thead className="bg-[var(--card-bg)]">
          <tr>
            <th className="border border-[var(--border-color)] p-3 text-left">Factor</th>
            <th className="border border-[var(--border-color)] p-3 text-left">1926-1995 Average</th>
            <th className="border border-[var(--border-color)] p-3 text-left">2025 Reality</th>
            <th className="border border-[var(--border-color)] p-3 text-left">Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[var(--border-color)] p-3">Bond Yields</td>
            <td className="border border-[var(--border-color)] p-3">5-7%</td>
            <td className="border border-[var(--border-color)] p-3">3-4%</td>
            <td className="border border-[var(--border-color)] p-3 text-[var(--neon-magenta)]">Negative</td>
          </tr>
          <tr className="bg-[var(--card-bg)]">
            <td className="border border-[var(--border-color)] p-3">Stock CAPE</td>
            <td className="border border-[var(--border-color)] p-3">15-18</td>
            <td className="border border-[var(--border-color)] p-3">30+</td>
            <td className="border border-[var(--border-color)] p-3 text-[var(--neon-magenta)]">Negative</td>
          </tr>
          <tr>
            <td className="border border-[var(--border-color)] p-3">Retirement Length</td>
            <td className="border border-[var(--border-color)] p-3">30 years</td>
            <td className="border border-[var(--border-color)] p-3">40-60 years</td>
            <td className="border border-[var(--border-color)] p-3 text-[var(--neon-magenta)]">Negative</td>
          </tr>
          <tr className="bg-[var(--card-bg)]">
            <td className="border border-[var(--border-color)] p-3">Recommended SWR</td>
            <td className="border border-[var(--border-color)] p-3">4.0%</td>
            <td className="border border-[var(--border-color)] p-3">3.5%</td>
            <td className="border border-[var(--border-color)] p-3 text-[var(--terminal-green)]">Safer</td>
          </tr>
        </tbody>
      </table>

      <AdSlot slot="mid-article" />

      <h2>The Math: 3.5% vs 4%</h2>

      <p>
        <strong>Dropping from 4% to 3.5% increases your required capital by 14.3%.</strong>
      </p>

      <ul>
        <li>4% rule: $40k expenses = $1,000,000 needed</li>
        <li>3.5% rule: $40k expenses = $1,143,000 needed</li>
      </ul>

      <p>
        That's an extra <strong>$143,000</strong> for the same lifestyle. Painful? Yes. Necessary? Also yes.
      </p>

      <h2>Modern Safe Withdrawal Research</h2>

      <p>
        <strong>Multiple studies support 3.5% or lower:</strong>
      </p>

      <ul>
        <li><strong>Morningstar (2021):</strong> Recommended 3.3% for 30-year retirements, 2.8% for 40-year</li>
        <li><strong>ERN (Early Retirement Now):</strong> Deep analysis suggests 3.25-3.5% depending on allocation</li>
        <li><strong>Vanguard Research:</strong> 3.3-3.7% range for current market conditions</li>
      </ul>

      <CompoundInterestSlider initial={500} />

      <h2>Flexibility: The Hidden Safety Margin</h2>

      <p>
        <strong>Static withdrawal rates are overly conservative.</strong> Real retirees adjust spending based on market performance. 
        Strategies that improve success rates:
      </p>

      <ul>
        <li><strong>Variable withdrawals:</strong> Reduce spending 10% in down years</li>
        <li><strong>Guardrails:</strong> If portfolio drops 20%, cut spending until recovery</li>
        <li><strong>Part-time work:</strong> Earn $10-20k/year in early retirement reduces pressure</li>
      </ul>

      <p>
        A flexible 4% withdrawal beats a rigid 3.5% withdrawal, but <strong>most people overestimate their willingness to cut spending.</strong>
      </p>

      <h2>The Verdict: Use 3.5%</h2>

      <p>
        <strong>For early retirees planning 40+ year retirements: 3.5% is the new safe withdrawal rate.</strong>
      </p>

      <p>
        Yes, it means working longer or saving more. But it also means sleeping well at night during the next 2008-style crash. 
        <strong>FIRE is about freedom, not anxiety.</strong>
      </p>

      <div className="my-8 p-6 rounded-lg border-2 border-[var(--neon-cyan)] bg-[var(--card-bg)]">
        <h3 className="text-xl font-bold mb-4 text-[var(--neon-cyan)]">Quick Reference Guide</h3>
        <ul className="space-y-2">
          <li><strong>Age 65+ traditional retirement:</strong> 4% is probably fine</li>
          <li><strong>Age 50-65 early retirement:</strong> 3.5-4% depending on risk tolerance</li>
          <li><strong>Age 35-50 FIRE:</strong> 3.5% or lower</li>
          <li><strong>Under 35:</strong> 3.25% to be conservative</li>
        </ul>
      </div>

      <h2>Related Deep Dives</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <Link href="/wealth-algorithms/savings-rate" className="p-6 rounded-lg border-2 border-[var(--neon-magenta)] hover:bg-[var(--card-bg)] transition-all">
          <h3 className="text-xl font-bold mb-2 text-[var(--neon-magenta)]">Savings Rate vs Returns →</h3>
          <p className="text-[var(--foreground)]">
            Why savings rate matters more than chasing high returns.
          </p>
        </Link>

        <Link href="/tax-optimization" className="p-6 rounded-lg border-2 border-[var(--terminal-green)] hover:bg-[var(--card-bg)] transition-all">
          <h3 className="text-xl font-bold mb-2 text-[var(--terminal-green)]">Tax Optimization →</h3>
          <p className="text-[var(--foreground)]">
            Minimize tax drag to maximize your withdrawal rate's effectiveness.
          </p>
        </Link>
      </div>
    </article>
  );
}
