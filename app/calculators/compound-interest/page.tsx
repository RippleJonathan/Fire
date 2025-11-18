'use client';

import { useState } from 'react';
import { calculateCompoundInterest, formatCurrency } from '@/lib/financial';
import Link from 'next/link';

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(7);
  const [time, setTime] = useState(10);
  const [frequency, setFrequency] = useState(12);

  const result = calculateCompoundInterest(principal, rate / 100, time, frequency);
  const totalInterest = result - principal;

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
            💰 Compound Interest Calculator
          </h1>
          
          <div className="space-y-6">
            <div>
              <label className="block text-white mb-2">
                Initial Investment: {formatCurrency(principal)}
              </label>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Annual Interest Rate: {rate}%
              </label>
              <input
                type="range"
                min="0"
                max="20"
                step="0.5"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Time Period: {time} years
              </label>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Compound Frequency
              </label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                className="w-full p-2 bg-slate-700 text-white rounded-lg"
              >
                <option value="1">Annually</option>
                <option value="4">Quarterly</option>
                <option value="12">Monthly</option>
                <option value="365">Daily</option>
              </select>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-lg border border-cyan-500/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Initial Investment</p>
                <p className="text-2xl font-bold text-white">{formatCurrency(principal)}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Interest</p>
                <p className="text-2xl font-bold text-green-400">{formatCurrency(totalInterest)}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Final Amount</p>
                <p className="text-2xl font-bold text-cyan-400">{formatCurrency(result)}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-slate-700 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Formula:</strong> A = P(1 + r/n)^(nt)
              <br />
              where P = principal, r = rate, n = frequency, t = time
            </p>
          </div>
        </div>

        <div className="mt-8 bg-slate-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Understanding Compound Interest</h2>
          <div className="text-gray-300 space-y-3">
            <p>
              Compound interest is the eighth wonder of the world. Unlike simple interest, 
              compound interest earns interest on both your initial principal and the accumulated interest 
              from previous periods.
            </p>
            <p>
              The key variables:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-white">Principal:</strong> Your initial investment</li>
              <li><strong className="text-white">Rate:</strong> Annual interest rate (as a percentage)</li>
              <li><strong className="text-white">Time:</strong> Number of years invested</li>
              <li><strong className="text-white">Frequency:</strong> How often interest compounds (monthly, quarterly, etc.)</li>
            </ul>
            <p>
              The more frequently interest compounds, the more you earn. Daily compounding 
              yields slightly more than monthly, which yields more than annual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
