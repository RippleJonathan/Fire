'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TaxDragCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(100000);
  const [years, setYears] = useState(30);
  const [returnRate, setReturnRate] = useState(8);
  const [taxRate, setTaxRate] = useState(24);
  const [turnoverRate, setTurnoverRate] = useState(20);

  const calculateTaxDrag = () => {
    // Tax-deferred (like 401k/IRA)
    const taxDeferred = initialInvestment * Math.pow(1 + returnRate / 100, years);
    
    // Taxable account with annual tax drag
    let taxableBalance = initialInvestment;
    for (let i = 0; i < years; i++) {
      const gains = taxableBalance * (returnRate / 100);
      const realizedGains = gains * (turnoverRate / 100);
      const taxes = realizedGains * (taxRate / 100);
      taxableBalance = taxableBalance + gains - taxes;
    }
    
    // Roth (tax-free)
    const roth = taxDeferred;
    
    const taxDrag = taxDeferred - taxableBalance;
    const dragPercentage = (taxDrag / taxDeferred) * 100;

    return {
      taxDeferred: Math.round(taxDeferred),
      taxable: Math.round(taxableBalance),
      roth: Math.round(roth),
      taxDrag: Math.round(taxDrag),
      dragPercentage: dragPercentage.toFixed(1),
    };
  };

  const results = calculateTaxDrag();

  const chartData = [
    {
      name: 'Tax-Deferred',
      value: results.taxDeferred,
      fill: 'var(--neon-cyan)',
    },
    {
      name: 'Taxable',
      value: results.taxable,
      fill: 'var(--neon-magenta)',
    },
    {
      name: 'Roth',
      value: results.roth,
      fill: 'var(--terminal-green)',
    },
  ];

  return (
    <div className="my-8 p-6 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)]">
      <h3 className="text-2xl font-bold mb-6 text-[var(--neon-cyan)]">
        📊 Tax Drag Calculator
      </h3>

      <div className="space-y-6 mb-8">
        <div>
          <label className="flex justify-between items-center mb-2">
            <span className="text-[var(--foreground)]">Initial Investment</span>
            <span className="text-[var(--neon-yellow)] font-bold">${initialInvestment.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="10000"
            max="500000"
            step="10000"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(Number(e.target.value))}
            className="w-full h-2 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex justify-between items-center mb-2">
            <span className="text-[var(--foreground)]">Time Horizon</span>
            <span className="text-[var(--neon-yellow)] font-bold">{years} years</span>
          </label>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-2 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex justify-between items-center mb-2">
            <span className="text-[var(--foreground)]">Annual Return</span>
            <span className="text-[var(--neon-yellow)] font-bold">{returnRate}%</span>
          </label>
          <input
            type="range"
            min="3"
            max="15"
            step="0.5"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="w-full h-2 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex justify-between items-center mb-2">
            <span className="text-[var(--foreground)]">Tax Rate</span>
            <span className="text-[var(--neon-yellow)] font-bold">{taxRate}%</span>
          </label>
          <input
            type="range"
            min="10"
            max="40"
            step="1"
            value={taxRate}
            onChange={(e) => setTaxRate(Number(e.target.value))}
            className="w-full h-2 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex justify-between items-center mb-2">
            <span className="text-[var(--foreground)]">Portfolio Turnover</span>
            <span className="text-[var(--neon-yellow)] font-bold">{turnoverRate}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={turnoverRate}
            onChange={(e) => setTurnoverRate(Number(e.target.value))}
            className="w-full h-2 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded border border-[var(--border-color)] bg-[var(--background)]">
          <div className="text-sm text-[var(--foreground)] mb-1">Tax-Deferred</div>
          <div className="text-xl font-bold text-[var(--neon-cyan)]">
            ${results.taxDeferred.toLocaleString()}
          </div>
        </div>
        <div className="p-4 rounded border border-[var(--border-color)] bg-[var(--background)]">
          <div className="text-sm text-[var(--foreground)] mb-1">Taxable</div>
          <div className="text-xl font-bold text-[var(--neon-magenta)]">
            ${results.taxable.toLocaleString()}
          </div>
        </div>
        <div className="p-4 rounded border border-[var(--border-color)] bg-[var(--background)]">
          <div className="text-sm text-[var(--foreground)] mb-1">Roth (Tax-Free)</div>
          <div className="text-xl font-bold text-[var(--terminal-green)]">
            ${results.roth.toLocaleString()}
          </div>
        </div>
        <div className="p-4 rounded border-2 border-[var(--neon-magenta)] bg-[var(--background)]">
          <div className="text-sm text-[var(--foreground)] mb-1">Tax Drag</div>
          <div className="text-xl font-bold text-[var(--neon-magenta)]">
            {results.dragPercentage}%
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="name" stroke="var(--foreground)" />
          <YAxis 
            stroke="var(--foreground)"
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--card-bg)', 
              border: '1px solid var(--border-color)',
              borderRadius: '0.5rem',
              color: 'var(--foreground)'
            }}
            formatter={(value: number) => `$${value.toLocaleString()}`}
          />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 p-4 rounded border border-[var(--border-color)] bg-[var(--background)]">
        <p className="text-sm text-[var(--foreground)]">
          <strong className="text-[var(--neon-yellow)]">Tax Drag Impact:</strong> By holding investments in a taxable account, 
          you would lose <strong className="text-[var(--neon-magenta)]">${results.taxDrag.toLocaleString()}</strong> ({results.dragPercentage}%) 
          to taxes over {years} years compared to a tax-advantaged account.
        </p>
      </div>
    </div>
  );
}
