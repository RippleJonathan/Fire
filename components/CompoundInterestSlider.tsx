'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CompoundInterestSliderProps {
  initial?: number;
}

export default function CompoundInterestSlider({ initial = 500 }: CompoundInterestSliderProps) {
  const [monthlyContribution, setMonthlyContribution] = useState(initial);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [years, setYears] = useState(30);

  const calculateCompoundInterest = () => {
    const data = [];
    const monthlyRate = annualReturn / 100 / 12;
    
    for (let year = 0; year <= years; year++) {
      const months = year * 12;
      let total = 0;
      
      if (monthlyRate === 0) {
        total = monthlyContribution * months;
      } else {
        total = monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
      }
      
      const contributions = monthlyContribution * months;
      const earnings = total - contributions;
      
      data.push({
        year,
        total: Math.round(total),
        contributions: Math.round(contributions),
        earnings: Math.round(earnings),
      });
    }
    
    return data;
  };

  const data = calculateCompoundInterest();
  const finalValue = data[data.length - 1].total;

  return (
    <div className="my-8 p-6 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)]">
      <h3 className="text-2xl font-bold mb-6 text-[var(--neon-cyan)]">
        🚀 Compound Interest Calculator
      </h3>
      
      <div className="space-y-6 mb-8">
        <div>
          <label className="flex justify-between items-center mb-2">
            <span className="text-[var(--foreground)]">Monthly Contribution</span>
            <span className="text-[var(--neon-yellow)] font-bold">${monthlyContribution.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            className="w-full h-2 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex justify-between items-center mb-2">
            <span className="text-[var(--foreground)]">Annual Return</span>
            <span className="text-[var(--neon-yellow)] font-bold">{annualReturn}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="15"
            step="0.5"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(Number(e.target.value))}
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
            min="1"
            max="50"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-2 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded border border-[var(--border-color)] bg-[var(--background)]">
          <div className="text-sm text-[var(--foreground)] mb-1">Final Value</div>
          <div className="text-2xl font-bold text-[var(--neon-cyan)]">
            ${finalValue.toLocaleString()}
          </div>
        </div>
        <div className="p-4 rounded border border-[var(--border-color)] bg-[var(--background)]">
          <div className="text-sm text-[var(--foreground)] mb-1">Total Contributed</div>
          <div className="text-2xl font-bold text-[var(--neon-magenta)]">
            ${data[data.length - 1].contributions.toLocaleString()}
          </div>
        </div>
        <div className="p-4 rounded border border-[var(--border-color)] bg-[var(--background)]">
          <div className="text-sm text-[var(--foreground)] mb-1">Earnings</div>
          <div className="text-2xl font-bold text-[var(--terminal-green)]">
            ${data[data.length - 1].earnings.toLocaleString()}
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis 
            dataKey="year" 
            stroke="var(--foreground)"
            label={{ value: 'Years', position: 'insideBottom', offset: -5, fill: 'var(--foreground)' }}
          />
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
          <Line 
            type="monotone" 
            dataKey="total" 
            stroke="var(--neon-cyan)" 
            strokeWidth={3}
            name="Total Value"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="contributions" 
            stroke="var(--neon-magenta)" 
            strokeWidth={2}
            name="Contributions"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
