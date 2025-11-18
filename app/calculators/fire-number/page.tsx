'use client';

import { useState } from 'react';
import { calculateFIRENumber, calculateYearsToFIRE, formatCurrency } from '@/lib/financial';
import Link from 'next/link';

export default function FIRENumberCalculator() {
  const [annualExpenses, setAnnualExpenses] = useState(40000);
  const [withdrawalRate, setWithdrawalRate] = useState(4);
  const [currentNetWorth, setCurrentNetWorth] = useState(50000);
  const [annualSavings, setAnnualSavings] = useState(20000);
  const [returnRate, setReturnRate] = useState(7);

  const fireNumber = calculateFIRENumber(annualExpenses, withdrawalRate / 100);
  const yearsToFIRE = calculateYearsToFIRE(
    currentNetWorth,
    fireNumber,
    annualSavings,
    returnRate / 100
  );

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/calculators" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Calculators
        </Link>

        <div className="bg-slate-800 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-white mb-6">
            🔥 FIRE Number Calculator
          </h1>
          
          <div className="space-y-6">
            <div>
              <label className="block text-white mb-2">
                Annual Expenses: {formatCurrency(annualExpenses)}
              </label>
              <input
                type="range"
                min="0"
                max="150000"
                step="5000"
                value={annualExpenses}
                onChange={(e) => setAnnualExpenses(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-sm text-gray-400 mt-1">
                Your estimated annual living expenses in retirement
              </p>
            </div>

            <div>
              <label className="block text-white mb-2">
                Safe Withdrawal Rate: {withdrawalRate}%
              </label>
              <input
                type="range"
                min="2"
                max="6"
                step="0.25"
                value={withdrawalRate}
                onChange={(e) => setWithdrawalRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-sm text-gray-400 mt-1">
                The 4% rule is traditional, but adjust based on your risk tolerance
              </p>
            </div>

            <div>
              <label className="block text-white mb-2">
                Current Net Worth: {formatCurrency(currentNetWorth)}
              </label>
              <input
                type="range"
                min="0"
                max="500000"
                step="10000"
                value={currentNetWorth}
                onChange={(e) => setCurrentNetWorth(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Annual Savings: {formatCurrency(annualSavings)}
              </label>
              <input
                type="range"
                min="0"
                max="100000"
                step="5000"
                value={annualSavings}
                onChange={(e) => setAnnualSavings(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Expected Annual Return: {returnRate}%
              </label>
              <input
                type="range"
                min="0"
                max="15"
                step="0.5"
                value={returnRate}
                onChange={(e) => setReturnRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-sm text-gray-400 mt-1">
                Historical stock market average is ~10%, but be conservative
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-br from-orange-900/30 to-purple-900/30 rounded-lg border border-orange-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Your FIRE Number</p>
                <p className="text-4xl font-bold text-orange-400">{formatCurrency(fireNumber)}</p>
                <p className="text-sm text-gray-400 mt-2">
                  Amount needed to retire at {withdrawalRate}% withdrawal rate
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Years to FIRE</p>
                <p className="text-4xl font-bold text-cyan-400">
                  {yearsToFIRE > 0 ? yearsToFIRE.toFixed(1) : 'Achieved! 🎉'}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  {yearsToFIRE > 0 
                    ? `At current savings rate and returns` 
                    : `You've already reached financial independence!`}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-700 rounded-lg">
              <p className="text-gray-400 text-xs mb-1">Monthly Expenses</p>
              <p className="text-lg font-semibold text-white">
                {formatCurrency(annualExpenses / 12)}
              </p>
            </div>
            <div className="p-4 bg-slate-700 rounded-lg">
              <p className="text-gray-400 text-xs mb-1">Monthly Income Needed</p>
              <p className="text-lg font-semibold text-white">
                {formatCurrency((fireNumber * (withdrawalRate / 100)) / 12)}
              </p>
            </div>
            <div className="p-4 bg-slate-700 rounded-lg">
              <p className="text-gray-400 text-xs mb-1">Amount to Save</p>
              <p className="text-lg font-semibold text-white">
                {formatCurrency(fireNumber - currentNetWorth)}
              </p>
            </div>
            <div className="p-4 bg-slate-700 rounded-lg">
              <p className="text-gray-400 text-xs mb-1">Savings Rate</p>
              <p className="text-lg font-semibold text-white">
                {((annualSavings / (annualExpenses + annualSavings)) * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-slate-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Understanding FIRE</h2>
          <div className="text-gray-300 space-y-3">
            <p>
              <strong className="text-white">FIRE</strong> stands for Financial Independence, Retire Early. 
              The core principle is that you can retire when your investment portfolio can sustainably 
              cover your living expenses.
            </p>
            <p>
              <strong className="text-white">The 4% Rule:</strong> This rule suggests you can safely 
              withdraw 4% of your portfolio annually in retirement without running out of money. 
              Therefore, your FIRE number = Annual Expenses ÷ 0.04
            </p>
            <p>
              <strong className="text-white">Example:</strong> If you spend $40,000 per year, your 
              FIRE number is $1,000,000. With a 4% withdrawal rate, that portfolio generates $40,000 
              annually.
            </p>
            <p>
              <strong className="text-white">Variations:</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Lean FIRE:</strong> Minimalist lifestyle, lower expenses</li>
              <li><strong>Fat FIRE:</strong> Comfortable lifestyle, higher expenses</li>
              <li><strong>Barista FIRE:</strong> Part-time work covers expenses, investments grow</li>
              <li><strong>Coast FIRE:</strong> Enough saved to coast to traditional retirement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
