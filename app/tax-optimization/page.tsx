import TaxDragCalculator from '@/components/TaxDragCalculator';
import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

export const metadata = {
  title: 'The Mega-Backdoor Roth: A Glitch in the Tax System | Velocity FI',
  description: 'Master tax optimization strategies for high earners. Learn the Mega-Backdoor Roth, HSA triple-tax advantage, and automated tax-loss harvesting.',
};

export default function TaxOptimization() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 mdx-content">
      <h1>The Mega-Backdoor Roth: A Glitch in the Tax System</h1>

      <p className="text-xl text-[var(--foreground)] mb-8">
        <strong>Tax optimization is the ultimate force multiplier for wealth building.</strong> High earners face a brutal reality: 
        losing 30-50% of gains to taxes can delay FI by a decade. The Mega-Backdoor Roth and other strategies 
        are legal loopholes that let you keep more of what you earn.
      </p>

      <h2>Understanding Tax Drag</h2>

      <p>
        <strong>Tax drag is the silent killer of wealth.</strong> It's the difference between what your investments could earn 
        and what you actually keep after taxes.
      </p>

      <p>
        Consider $100,000 invested for 30 years at 8% annual returns:
      </p>

      <ul>
        <li><strong>Tax-free (Roth):</strong> $1,006,266</li>
        <li><strong>Tax-deferred (401k):</strong> $1,006,266 (but taxed at withdrawal)</li>
        <li><strong>Taxable account (24% bracket):</strong> ~$670,000 after annual tax drag</li>
      </ul>

      <p>
        That's a <strong>$336,000 difference</strong> purely from tax inefficiency. This is why tax-advantaged accounts are your first priority.
      </p>

      <TaxDragCalculator />

      <AdSlot slot="intro" />

      <h2>The Mega-Backdoor Roth Explained</h2>

      <p>
        <strong>The Mega-Backdoor Roth lets high earners contribute up to $43,500 more to a Roth IRA annually (2025 limits).</strong> 
        It's a loophole created by the intersection of several IRS rules that Congress hasn't closed.
      </p>

      <h3>How It Works</h3>

      <p>
        Traditional contribution limits are restrictive:
      </p>

      <ul>
        <li>401(k) employee deferral: $23,000 (2025)</li>
        <li>Roth IRA direct contribution: $7,000 (but phased out for high earners)</li>
      </ul>

      <p>
        <strong>The Mega-Backdoor unlocks after-tax 401(k) contributions:</strong>
      </p>

      <ol>
        <li>Max out regular 401(k): $23,000</li>
        <li>Employer match: ~$5,000 (varies)</li>
        <li>Make after-tax 401(k) contributions: Up to $43,500</li>
        <li>Immediately convert to Roth 401(k) or Roth IRA</li>
        <li>All future growth is tax-free forever</li>
      </ol>

      <p>
        <strong>Total Roth space: $43,500 + $7,000 direct + $23,000 Roth 401(k) = $73,500/year tax-free growth.</strong>
      </p>

      <h3>Requirements</h3>

      <p>
        Your 401(k) plan must allow:
      </p>

      <ul>
        <li><strong>After-tax contributions</strong> (beyond the $23k limit)</li>
        <li><strong>In-service distributions</strong> or <strong>in-plan Roth conversions</strong></li>
      </ul>

      <p>
        Not all employers offer this. Check with your HR/benefits team. If your plan doesn't allow it, <strong>lobby for it.</strong> 
        It costs the company nothing to enable.
      </p>

      <table className="w-full my-8 border border-[var(--border-color)]">
        <thead className="bg-[var(--card-bg)]">
          <tr>
            <th className="border border-[var(--border-color)] p-3 text-left">Strategy</th>
            <th className="border border-[var(--border-color)] p-3 text-left">2025 Limit</th>
            <th className="border border-[var(--border-color)] p-3 text-left">Tax Treatment</th>
            <th className="border border-[var(--border-color)] p-3 text-left">Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[var(--border-color)] p-3">Traditional 401(k)</td>
            <td className="border border-[var(--border-color)] p-3">$23,000</td>
            <td className="border border-[var(--border-color)] p-3">Tax-deferred</td>
            <td className="border border-[var(--border-color)] p-3">Current tax savings</td>
          </tr>
          <tr className="bg-[var(--card-bg)]">
            <td className="border border-[var(--border-color)] p-3">Roth 401(k)</td>
            <td className="border border-[var(--border-color)] p-3">$23,000</td>
            <td className="border border-[var(--border-color)] p-3">Tax-free growth</td>
            <td className="border border-[var(--border-color)] p-3">Young high earners</td>
          </tr>
          <tr>
            <td className="border border-[var(--border-color)] p-3">Mega-Backdoor Roth</td>
            <td className="border border-[var(--border-color)] p-3">$43,500</td>
            <td className="border border-[var(--border-color)] p-3">Tax-free growth</td>
            <td className="border border-[var(--border-color)] p-3">Maxing everything else</td>
          </tr>
          <tr className="bg-[var(--card-bg)]">
            <td className="border border-[var(--border-color)] p-3">Roth IRA (direct)</td>
            <td className="border border-[var(--border-color)] p-3">$7,000</td>
            <td className="border border-[var(--border-color)] p-3">Tax-free growth</td>
            <td className="border border-[var(--border-color)] p-3">Everyone</td>
          </tr>
          <tr>
            <td className="border border-[var(--border-color)] p-3">HSA</td>
            <td className="border border-[var(--border-color)] p-3">$4,150</td>
            <td className="border border-[var(--border-color)] p-3">Triple tax-free</td>
            <td className="border border-[var(--border-color)] p-3">Anyone with HDHP</td>
          </tr>
        </tbody>
      </table>

      <AdSlot slot="mid-content" />

      <h2>HSA: The Only Triple-Tax Advantaged Account</h2>

      <p>
        <strong>Health Savings Accounts are superior to even Roth IRAs for one reason: triple-tax advantage.</strong>
      </p>

      <ol>
        <li><strong>Tax-deductible contributions:</strong> Lower your taxable income now</li>
        <li><strong>Tax-free growth:</strong> No capital gains or dividend taxes</li>
        <li><strong>Tax-free withdrawals:</strong> For qualified medical expenses (forever)</li>
      </ol>

      <p>
        The strategy: <strong>Max HSA ($4,150 individual / $8,300 family in 2025), invest it, don't touch it.</strong> 
        Pay medical expenses out-of-pocket, save receipts, and reimburse yourself decades later (there's no time limit on reimbursements).
      </p>

      <p>
        By age 65, HSA withdrawals are penalty-free for any purpose (though non-medical withdrawals are taxed like a traditional IRA). 
        <strong>Best case: you have medical expenses and withdraw tax-free. Worst case: it's a traditional IRA.</strong>
      </p>

      <h2>Tax-Loss Harvesting: Automating Deductions</h2>

      <p>
        <strong>Tax-loss harvesting (TLH) is selling losing investments to offset capital gains.</strong> 
        It sounds manual, but services like Wealthfront and Betterment automate it daily.
      </p>

      <p>
        How it works:
      </p>

      <ul>
        <li>Stock A is down 10% (-$5,000 loss)</li>
        <li>Sell Stock A, buy similar Stock B (avoid wash sale)</li>
        <li>Harvest $5,000 loss to offset gains or deduct $3,000/year from ordinary income</li>
        <li>Stock B recovers, you're back to original position but with tax deduction</li>
      </ul>

      <p>
        <strong>Estimated value: $500-2,000/year in tax savings on a $100k portfolio.</strong> Over decades, this compounds significantly.
      </p>

      <div className="my-8 p-6 rounded-lg border-2 border-[var(--neon-yellow)] bg-[var(--card-bg)]">
        <h3 className="text-xl font-bold mb-4 text-[var(--neon-yellow)]">Tax Optimization Priority Order</h3>
        <ol className="space-y-2">
          <li><strong>1. Max employer 401(k) match:</strong> Free money (100% return)</li>
          <li><strong>2. Max HSA:</strong> Triple tax advantage</li>
          <li><strong>3. Max 401(k)/403(b):</strong> $23,000 limit</li>
          <li><strong>4. Backdoor Roth IRA:</strong> $7,000 limit</li>
          <li><strong>5. Mega-Backdoor Roth:</strong> $43,500 if available</li>
          <li><strong>6. Taxable brokerage:</strong> Use tax-loss harvesting</li>
        </ol>
      </div>

      <h2>The Tax Torpedo: Early Retirement Pitfall</h2>

      <p>
        <strong>Early retirees face a unique problem: the "tax torpedo" of Roth conversions + ACA subsidies.</strong>
      </p>

      <p>
        Between retirement and age 59.5, you can't access 401(k) funds penalty-free (unless using SEPP/72(t)). 
        The strategy: <strong>Roth conversion ladder.</strong>
      </p>

      <ul>
        <li>Convert $50k from Traditional 401(k) to Roth IRA annually</li>
        <li>Pay taxes on the conversion (ideally in low tax years)</li>
        <li>Wait 5 years</li>
        <li>Withdraw the converted amount tax and penalty-free</li>
      </ul>

      <p>
        This requires planning 5+ years before you need the money, but it's the cleanest way to access 401(k) funds early.
      </p>

      <h2>Advanced Tactics</h2>

      <h3>Qualified Small Business Stock (QSBS)</h3>

      <p>
        If you work at a startup, <strong>QSBS lets you exclude up to $10M in gains from federal taxes.</strong> 
        Requirements: hold for 5+ years, company must be C-corp with &lt;$50M in assets at issuance.
      </p>

      <h3>Donor-Advised Funds (DAF)</h3>

      <p>
        <strong>Donate appreciated stock, get full deduction, avoid capital gains.</strong> Example: You bought $10k of stock, now worth $50k. 
        Donating to a DAF gives you a $50k deduction without paying $40k in capital gains taxes.
      </p>

      <h2>Related Deep Dives</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <Link href="/tax-optimization/hsa" className="p-6 rounded-lg border-2 border-[var(--neon-cyan)] hover:bg-[var(--card-bg)] transition-all">
          <h3 className="text-xl font-bold mb-2 text-[var(--neon-cyan)]">HSA Deep Dive →</h3>
          <p className="text-[var(--foreground)]">
            Complete guide to maximizing the triple-tax advantage.
          </p>
        </Link>

        <Link href="/tax-optimization/tax-loss-harvesting" className="p-6 rounded-lg border-2 border-[var(--neon-magenta)] hover:bg-[var(--card-bg)] transition-all">
          <h3 className="text-xl font-bold mb-2 text-[var(--neon-magenta)]">Tax-Loss Harvesting →</h3>
          <p className="text-[var(--foreground)]">
            Automate your deductions and optimize taxable accounts.
          </p>
        </Link>
      </div>

      <div className="mt-12 p-6 rounded-lg border-2 border-[var(--neon-cyan)] bg-[var(--card-bg)]">
        <p className="text-sm text-[var(--foreground)]">
          <strong className="text-[var(--neon-yellow)]">Remember:</strong> Tax optimization isn't about cheating—it's about 
          using the rules Congress wrote. Every dollar you save on taxes compounds into tens of thousands over decades. 
          Master these strategies or pay the IRS premium.
        </p>
      </div>
    </article>
  );
}
