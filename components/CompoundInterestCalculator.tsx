'use client';

import { useState } from 'react';

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(30);
  const [monthly, setMonthly] = useState(500);

  const calculateCompound = () => {
    const r = rate / 100;
    const n = 12; // monthly compounding
    const t = years;
    
    // Future value of initial principal
    const fv1 = principal * Math.pow(1 + r / n, n * t);
    
    // Future value of monthly contributions
    const fv2 = monthly * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));
    
    const total = fv1 + fv2;
    const totalContributed = principal + (monthly * 12 * years);
    const interestEarned = total - totalContributed;
    
    return {
      total: total.toFixed(2),
      contributed: totalContributed.toFixed(2),
      interest: interestEarned.toFixed(2),
    };
  };

  const result = calculateCompound();

  const formatCurrency = (value: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(parseFloat(value));
  };

  return (
    <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">⚡</span>
        Compound Interest Calculator
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Initial Investment
            </label>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">$</span>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={principal}
                onChange={(e) => setPrincipal(parseInt(e.target.value))}
                className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(parseInt(e.target.value) || 0)}
                className="w-24 px-3 py-2 bg-slate-700 border border-purple-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Annual Return Rate
            </label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="20"
                step="0.5"
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value))}
                className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
                className="w-24 px-3 py-2 bg-slate-700 border border-purple-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
              />
              <span className="text-gray-400">%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Time Period (Years)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={years}
                onChange={(e) => setYears(parseInt(e.target.value))}
                className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(parseInt(e.target.value) || 1)}
                className="w-24 px-3 py-2 bg-slate-700 border border-purple-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Monthly Contribution
            </label>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">$</span>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={monthly}
                onChange={(e) => setMonthly(parseInt(e.target.value))}
                className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <input
                type="number"
                value={monthly}
                onChange={(e) => setMonthly(parseInt(e.target.value) || 0)}
                className="w-24 px-3 py-2 bg-slate-700 border border-purple-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-lg">
            <div className="text-sm text-gray-400 mb-2">Final Balance</div>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              {formatCurrency(result.total)}
            </div>
          </div>

          <div className="p-4 bg-slate-800/50 border border-purple-500/20 rounded-lg">
            <div className="text-sm text-gray-400 mb-1">Total Contributed</div>
            <div className="text-2xl font-semibold text-white">
              {formatCurrency(result.contributed)}
            </div>
          </div>

          <div className="p-4 bg-slate-800/50 border border-purple-500/20 rounded-lg">
            <div className="text-sm text-gray-400 mb-1">Interest Earned</div>
            <div className="text-2xl font-semibold text-green-400">
              {formatCurrency(result.interest)}
            </div>
          </div>

          <div className="text-xs text-gray-500 mt-4">
            * Assumes monthly compounding. Results are estimates and should not be considered financial advice.
          </div>
        </div>
      </div>
    </div>
  );
}
