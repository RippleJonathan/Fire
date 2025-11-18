'use client';

import { use } from 'react';
import Link from 'next/link';

interface Params {
  comparison: string;
}

// This is a simplified version. In production, you'd fetch real data from a finance API
const getTickerData = (ticker: string) => {
  const mockData: Record<string, any> = {
    'VTSAX': {
      name: 'Vanguard Total Stock Market Index Fund',
      type: 'Mutual Fund',
      expenseRatio: '0.04%',
      minimumInvestment: '$3,000',
      assetClass: 'US Total Market',
      ytdReturn: '22.5%',
    },
    'VTI': {
      name: 'Vanguard Total Stock Market ETF',
      type: 'ETF',
      expenseRatio: '0.03%',
      minimumInvestment: '1 share (~$250)',
      assetClass: 'US Total Market',
      ytdReturn: '22.5%',
    },
    'VOO': {
      name: 'Vanguard S&P 500 ETF',
      type: 'ETF',
      expenseRatio: '0.03%',
      minimumInvestment: '1 share (~$450)',
      assetClass: 'S&P 500',
      ytdReturn: '24.1%',
    },
    'SPY': {
      name: 'SPDR S&P 500 ETF Trust',
      type: 'ETF',
      expenseRatio: '0.09%',
      minimumInvestment: '1 share (~$480)',
      assetClass: 'S&P 500',
      ytdReturn: '24.1%',
    },
    'SCHD': {
      name: 'Schwab U.S. Dividend Equity ETF',
      type: 'ETF',
      expenseRatio: '0.06%',
      minimumInvestment: '1 share (~$80)',
      assetClass: 'US Dividend',
      ytdReturn: '15.2%',
    },
  };

  return mockData[ticker.toUpperCase()] || null;
};

export default function ComparisonPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = use(params);
  const parts = resolvedParams.comparison.split('-vs-');
  
  if (parts.length !== 2) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4 text-[var(--neon-magenta)]">Invalid Comparison</h1>
        <p className="text-[var(--foreground)] mb-8">
          Comparison URLs should be in format: /compare/TICKER1-vs-TICKER2
        </p>
        <Link href="/" className="text-[var(--neon-cyan)] hover:underline">
          Return Home
        </Link>
      </div>
    );
  }

  const [ticker1Raw, ticker2Raw] = parts;
  const ticker1 = ticker1Raw.toUpperCase();
  const ticker2 = ticker2Raw.toUpperCase();
  
  const data1 = getTickerData(ticker1);
  const data2 = getTickerData(ticker2);

  if (!data1 || !data2) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4 text-[var(--neon-magenta)]">Ticker Not Found</h1>
        <p className="text-[var(--foreground)] mb-8">
          One or both tickers ({ticker1}, {ticker2}) are not available yet.
        </p>
        <p className="text-sm text-[var(--foreground)] mb-8">
          Available: VTSAX, VTI, VOO, SPY, SCHD
        </p>
        <Link href="/" className="text-[var(--neon-cyan)] hover:underline">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-[var(--neon-cyan)] hover:underline">
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4 text-[var(--neon-cyan)]">
        {ticker1} vs {ticker2}: Complete Comparison
      </h1>

      <p className="text-xl text-[var(--foreground)] mb-8">
        <strong>Comparing {data1.name} and {data2.name}.</strong> Both are popular index funds, 
        but which one is right for your portfolio? Let's break down the differences.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-[var(--neon-magenta)]">Quick Comparison</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 rounded-lg border-2 border-[var(--neon-cyan)] bg-[var(--card-bg)]">
          <h3 className="text-2xl font-bold mb-4 text-[var(--neon-cyan)]">{ticker1}</h3>
          <div className="space-y-3 text-[var(--foreground)]">
            <div>
              <div className="text-sm opacity-70">Name</div>
              <div className="font-semibold">{data1.name}</div>
            </div>
            <div>
              <div className="text-sm opacity-70">Type</div>
              <div className="font-semibold">{data1.type}</div>
            </div>
            <div>
              <div className="text-sm opacity-70">Expense Ratio</div>
              <div className="font-semibold text-[var(--neon-yellow)]">{data1.expenseRatio}</div>
            </div>
            <div>
              <div className="text-sm opacity-70">Minimum Investment</div>
              <div className="font-semibold">{data1.minimumInvestment}</div>
            </div>
            <div>
              <div className="text-sm opacity-70">Asset Class</div>
              <div className="font-semibold">{data1.assetClass}</div>
            </div>
            <div>
              <div className="text-sm opacity-70">YTD Return (2024)</div>
              <div className="font-semibold text-[var(--terminal-green)]">{data1.ytdReturn}</div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border-2 border-[var(--neon-magenta)] bg-[var(--card-bg)]">
          <h3 className="text-2xl font-bold mb-4 text-[var(--neon-magenta)]">{ticker2}</h3>
          <div className="space-y-3 text-[var(--foreground)]">
            <div>
              <div className="text-sm opacity-70">Name</div>
              <div className="font-semibold">{data2.name}</div>
            </div>
            <div>
              <div className="text-sm opacity-70">Type</div>
              <div className="font-semibold">{data2.type}</div>
            </div>
            <div>
              <div className="text-sm opacity-70">Expense Ratio</div>
              <div className="font-semibold text-[var(--neon-yellow)]">{data2.expenseRatio}</div>
            </div>
            <div>
              <div className="text-sm opacity-70">Minimum Investment</div>
              <div className="font-semibold">{data2.minimumInvestment}</div>
            </div>
            <div>
              <div className="text-sm opacity-70">Asset Class</div>
              <div className="font-semibold">{data2.assetClass}</div>
            </div>
            <div>
              <div className="text-sm opacity-70">YTD Return (2024)</div>
              <div className="font-semibold text-[var(--terminal-green)]">{data2.ytdReturn}</div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-[var(--neon-cyan)]">Key Differences</h2>

      <table className="w-full mb-12 border border-[var(--border-color)]">
        <thead className="bg-[var(--card-bg)]">
          <tr>
            <th className="border border-[var(--border-color)] p-3 text-left">Feature</th>
            <th className="border border-[var(--border-color)] p-3 text-left">{ticker1}</th>
            <th className="border border-[var(--border-color)] p-3 text-left">{ticker2}</th>
          </tr>
        </thead>
        <tbody className="text-[var(--foreground)]">
          <tr>
            <td className="border border-[var(--border-color)] p-3 font-semibold">Type</td>
            <td className="border border-[var(--border-color)] p-3">{data1.type}</td>
            <td className="border border-[var(--border-color)] p-3">{data2.type}</td>
          </tr>
          <tr className="bg-[var(--card-bg)]">
            <td className="border border-[var(--border-color)] p-3 font-semibold">Expense Ratio</td>
            <td className="border border-[var(--border-color)] p-3">{data1.expenseRatio}</td>
            <td className="border border-[var(--border-color)] p-3">{data2.expenseRatio}</td>
          </tr>
          <tr>
            <td className="border border-[var(--border-color)] p-3 font-semibold">Min Investment</td>
            <td className="border border-[var(--border-color)] p-3">{data1.minimumInvestment}</td>
            <td className="border border-[var(--border-color)] p-3">{data2.minimumInvestment}</td>
          </tr>
          <tr className="bg-[var(--card-bg)]">
            <td className="border border-[var(--border-color)] p-3 font-semibold">Asset Class</td>
            <td className="border border-[var(--border-color)] p-3">{data1.assetClass}</td>
            <td className="border border-[var(--border-color)] p-3">{data2.assetClass}</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4 text-[var(--neon-magenta)]">Which Should You Choose?</h2>

      <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] mb-8">
        <p className="text-[var(--foreground)] mb-4">
          <strong className="text-[var(--neon-yellow)]">For most investors, the differences are minimal.</strong> Both are excellent 
          low-cost index funds. Your choice should depend on:
        </p>
        <ul className="space-y-2 text-[var(--foreground)] ml-6">
          <li>• <strong>Account type:</strong> Some platforms only support mutual funds or ETFs</li>
          <li>• <strong>Investment amount:</strong> ETFs allow smaller initial investments (1 share)</li>
          <li>• <strong>Trading style:</strong> ETFs trade like stocks, mutual funds execute once daily</li>
          <li>• <strong>Tax efficiency:</strong> ETFs are generally more tax-efficient in taxable accounts</li>
        </ul>
      </div>

      <div className="p-6 rounded-lg border-2 border-[var(--neon-cyan)] bg-[var(--card-bg)]">
        <p className="text-sm text-[var(--foreground)]">
          <strong className="text-[var(--neon-yellow)]">Bottom Line:</strong> Both {ticker1} and {ticker2} are 
          solid choices for long-term investors. The expense ratio difference of a few basis points won't make or break your 
          portfolio. Focus on staying invested and maximizing contributions instead.
        </p>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold mb-4 text-[var(--neon-cyan)]">More Comparisons</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/compare/VTSAX-vs-VTI" className="px-4 py-2 rounded border border-[var(--neon-cyan)] hover:bg-[var(--card-bg)] transition-all">
            VTSAX vs VTI
          </Link>
          <Link href="/compare/VOO-vs-SPY" className="px-4 py-2 rounded border border-[var(--neon-cyan)] hover:bg-[var(--card-bg)] transition-all">
            VOO vs SPY
          </Link>
          <Link href="/compare/VTI-vs-VOO" className="px-4 py-2 rounded border border-[var(--neon-cyan)] hover:bg-[var(--card-bg)] transition-all">
            VTI vs VOO
          </Link>
          <Link href="/compare/VTSAX-vs-VOO" className="px-4 py-2 rounded border border-[var(--neon-cyan)] hover:bg-[var(--card-bg)] transition-all">
            VTSAX vs VOO
          </Link>
        </div>
      </div>
    </article>
  );
}
