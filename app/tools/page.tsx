import CompoundInterestSlider from '@/components/CompoundInterestSlider';
import TimeToFICalculator from '@/components/TimeToFICalculator';
import TaxDragCalculator from '@/components/TaxDragCalculator';

export const metadata = {
  title: 'Interactive Financial Independence Tools | Velocity FI',
  description: 'Free calculators for FIRE planning. Calculate compound interest, time to FI, tax drag, and more with interactive tools.',
};

export default function Tools() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-6 text-[var(--neon-cyan)] neon-text">
        Interactive Tools
      </h1>

      <p className="text-xl text-[var(--foreground)] mb-12">
        <strong>Data-driven planning requires the right tools.</strong> All calculators are free, 
        interactive, and embedded directly in your workflow. No spreadsheets, no signups, no BS.
      </p>

      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-bold mb-4 text-[var(--neon-cyan)]">
            Compound Interest Calculator
          </h2>
          <p className="text-[var(--foreground)] mb-6">
            Visualize the power of compound interest with monthly contributions. 
            Adjust parameters to see how time, contributions, and returns interact.
          </p>
          <CompoundInterestSlider initial={500} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-[var(--neon-magenta)]">
            Time to Financial Independence
          </h2>
          <p className="text-[var(--foreground)] mb-6">
            Calculate exactly when you'll reach FI based on your income, expenses, and savings rate. 
            The most important calculator for FIRE planning.
          </p>
          <TimeToFICalculator />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-[var(--terminal-green)]">
            Tax Drag Calculator
          </h2>
          <p className="text-[var(--foreground)] mb-6">
            Compare tax-deferred, taxable, and Roth accounts to understand the impact of tax drag on your portfolio. 
            See how account choice affects your final wealth.
          </p>
          <TaxDragCalculator />
        </section>

        <section className="p-8 rounded-lg border-2 border-[var(--neon-cyan)] bg-[var(--card-bg)]">
          <h2 className="text-2xl font-bold mb-4 text-[var(--neon-cyan)]">
            Coming Soon
          </h2>
          <ul className="space-y-3 text-[var(--foreground)]">
            <li>
              <strong className="text-[var(--neon-yellow)]">Asset Allocation Optimizer:</strong> Find your optimal 
              stock/bond split based on age and risk tolerance
            </li>
            <li>
              <strong className="text-[var(--neon-yellow)]">Withdrawal Strategy Simulator:</strong> Model different 
              withdrawal strategies (fixed %, variable, guardrails) with historical backtesting
            </li>
            <li>
              <strong className="text-[var(--neon-yellow)]">Roth Conversion Ladder Planner:</strong> Calculate optimal 
              conversion amounts to minimize taxes while accessing retirement funds early
            </li>
            <li>
              <strong className="text-[var(--neon-yellow)]">Coast FIRE Calculator:</strong> Determine when you can stop 
              contributing and let compound interest carry you to FI
            </li>
          </ul>
        </section>

        <section className="text-center py-8">
          <p className="text-lg text-[var(--foreground)] mb-6">
            Want to see a specific calculator? Have suggestions for improvements?
          </p>
          <a 
            href="mailto:feedback@velocityfi.com" 
            className="inline-block px-8 py-4 rounded-lg bg-[var(--neon-cyan)] text-[var(--background)] font-bold hover:bg-[var(--neon-magenta)] transition-all shadow-lg hover:shadow-[0_0_20px_var(--neon-cyan)]"
          >
            Send Feedback
          </a>
        </section>
      </div>
    </div>
  );
}
