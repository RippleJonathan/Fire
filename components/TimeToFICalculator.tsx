'use client';

import { useState } from 'react';

export default function TimeToFICalculator() {
  const [annualIncome, setAnnualIncome] = useState(100000);
  const [annualExpenses, setAnnualExpenses] = useState(40000);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [returnRate, setReturnRate] = useState(7);
  const [withdrawalRate, setWithdrawalRate] = useState(3.5);

  const savingsRate = ((annualIncome - annualExpenses) / annualIncome) * 100;
  const annualSavings = annualIncome - annualExpenses;
  const targetNetWorth = annualExpenses / (withdrawalRate / 100);
  
  // Calculate years to FI using compound interest formula
  const calculateYearsToFI = () => {
    if (annualSavings <= 0) return Infinity;
    if (currentSavings >= targetNetWorth) return 0;
    
    const monthlyRate = returnRate / 100 / 12;
    const monthlySavings = annualSavings / 12;
    
    let months = 0;
    let balance = currentSavings;
    
    while (balance < targetNetWorth && months < 600) { // Max 50 years
      balance = balance * (1 + monthlyRate) + monthlySavings;
      months++;
    }
    
    return months / 12;
  };

  const yearsToFI = calculateYearsToFI();
  const fiDate = new Date();
  fiDate.setFullYear(fiDate.getFullYear() + Math.floor(yearsToFI));

  return (
    <div className="my-8 p-6 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)]">
      <h3 className="text-2xl font-bold mb-6 text-[var(--neon-cyan)]">
        ⏱️ Time to Financial Independence
      </h3>

      <div className="space-y-6 mb-8">
        <div>
          <label className="flex justify-between items-center mb-2">
            <span className="text-[var(--foreground)]">Annual Income</span>
            <span className="text-[var(--neon-yellow)] font-bold">${annualIncome.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="30000"
            max="500000"
            step="5000"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(Number(e.target.value))}
            className="w-full h-2 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex justify-between items-center mb-2">
            <span className="text-[var(--foreground)]">Annual Expenses</span>
            <span className="text-[var(--neon-yellow)] font-bold">${annualExpenses.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="20000"
            max="200000"
            step="5000"
            value={annualExpenses}
            onChange={(e) => setAnnualExpenses(Number(e.target.value))}
            className="w-full h-2 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex justify-between items-center mb-2">
            <span className="text-[var(--foreground)]">Current Savings</span>
            <span className="text-[var(--neon-yellow)] font-bold">${currentSavings.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="0"
            max="1000000"
            step="10000"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(Number(e.target.value))}
            className="w-full h-2 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex justify-between items-center mb-2">
            <span className="text-[var(--foreground)]">Expected Return</span>
            <span className="text-[var(--neon-yellow)] font-bold">{returnRate}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="12"
            step="0.5"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="w-full h-2 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex justify-between items-center mb-2">
            <span className="text-[var(--foreground)]">Safe Withdrawal Rate</span>
            <span className="text-[var(--neon-yellow)] font-bold">{withdrawalRate}%</span>
          </label>
          <input
            type="range"
            min="2.5"
            max="5"
            step="0.1"
            value={withdrawalRate}
            onChange={(e) => setWithdrawalRate(Number(e.target.value))}
            className="w-full h-2 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded border border-[var(--border-color)] bg-[var(--background)]">
          <div className="text-sm text-[var(--foreground)] mb-1">Savings Rate</div>
          <div className="text-3xl font-bold text-[var(--terminal-green)]">
            {savingsRate.toFixed(1)}%
          </div>
        </div>
        <div className="p-4 rounded border border-[var(--border-color)] bg-[var(--background)]">
          <div className="text-sm text-[var(--foreground)] mb-1">Annual Savings</div>
          <div className="text-3xl font-bold text-[var(--neon-cyan)]">
            ${annualSavings.toLocaleString()}
          </div>
        </div>
        <div className="p-4 rounded border border-[var(--border-color)] bg-[var(--background)]">
          <div className="text-sm text-[var(--foreground)] mb-1">Target Net Worth</div>
          <div className="text-3xl font-bold text-[var(--neon-magenta)]">
            ${Math.round(targetNetWorth).toLocaleString()}
          </div>
        </div>
        <div className="p-4 rounded border border-[var(--border-color)] bg-[var(--background)]">
          <div className="text-sm text-[var(--foreground)] mb-1">Years to FI</div>
          <div className="text-3xl font-bold text-[var(--neon-yellow)]">
            {yearsToFI === Infinity ? '∞' : yearsToFI.toFixed(1)}
          </div>
        </div>
      </div>

      {yearsToFI !== Infinity && yearsToFI < 100 && (
        <div className="p-4 rounded border-2 border-[var(--neon-cyan)] bg-[var(--background)] text-center">
          <div className="text-sm text-[var(--foreground)] mb-1">Estimated FI Date</div>
          <div className="text-2xl font-bold text-[var(--neon-cyan)]">
            {fiDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
        </div>
      )}

      {savingsRate < 10 && (
        <div className="mt-4 p-4 rounded border border-[var(--neon-magenta)] bg-[var(--background)] text-[var(--neon-magenta)]">
          ⚠️ Warning: Your savings rate is very low. Consider increasing income or reducing expenses.
        </div>
      )}
    </div>
  );
}
