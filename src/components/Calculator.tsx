'use client'

import { useState, useEffect } from 'react'

export default function Calculator() {
  const [currentAge, setCurrentAge] = useState(30)
  const [retirementAge, setRetirementAge] = useState(50)
  const [currentSavings, setCurrentSavings] = useState(50000)
  const [monthlyContribution, setMonthlyContribution] = useState(2000)
  const [annualReturn, setAnnualReturn] = useState(7)
  const [annualExpenses, setAnnualExpenses] = useState(40000)
  
  const [results, setResults] = useState({
    fireNumber: 0,
    projectedSavings: 0,
    shortfall: 0,
    canRetire: false,
    yearsToFire: 0,
    monthlyIncomeAt4Percent: 0,
  })

  useEffect(() => {
    calculateFIRE()
  }, [currentAge, retirementAge, currentSavings, monthlyContribution, annualReturn, annualExpenses])

  const calculateFIRE = () => {
    // FIRE number is 25x annual expenses (4% rule)
    const fireNumber = annualExpenses * 25
    
    // Years until retirement
    const yearsToRetire = retirementAge - currentAge
    
    // Calculate future value with compound interest
    const monthlyRate = annualReturn / 100 / 12
    const months = yearsToRetire * 12
    
    // FV = PV(1+r)^n + PMT * [((1+r)^n - 1) / r]
    const futureValueOfCurrentSavings = currentSavings * Math.pow(1 + monthlyRate, months)
    const futureValueOfContributions = monthlyContribution * 
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
    
    const projectedSavings = futureValueOfCurrentSavings + futureValueOfContributions
    const shortfall = fireNumber - projectedSavings
    const canRetire = projectedSavings >= fireNumber
    
    // Calculate when they can actually retire
    let yearsToFire = 0
    let balance = currentSavings
    while (balance < fireNumber && yearsToFire < 100) {
      for (let month = 0; month < 12; month++) {
        balance = balance * (1 + monthlyRate) + monthlyContribution
      }
      yearsToFire++
    }
    
    const monthlyIncomeAt4Percent = projectedSavings * 0.04 / 12

    setResults({
      fireNumber,
      projectedSavings,
      shortfall,
      canRetire,
      yearsToFire: yearsToFire > 100 ? 100 : yearsToFire,
      monthlyIncomeAt4Percent,
    })
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="card-cyber max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-cyber font-bold text-cyber-blue mb-6">
            Your Financial Data
          </h3>
          
          <div>
            <label className="block text-sm text-gray-400 mb-2">Current Age</label>
            <input
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
              className="input-cyber w-full"
              min="18"
              max="100"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Target Retirement Age</label>
            <input
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(Number(e.target.value))}
              className="input-cyber w-full"
              min={currentAge + 1}
              max="100"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Current Savings</label>
            <input
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(Number(e.target.value))}
              className="input-cyber w-full"
              min="0"
              step="1000"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Monthly Contribution</label>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="input-cyber w-full"
              min="0"
              step="100"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Expected Annual Return (%)</label>
            <input
              type="number"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(Number(e.target.value))}
              className="input-cyber w-full"
              min="0"
              max="20"
              step="0.5"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Annual Expenses in Retirement</label>
            <input
              type="number"
              value={annualExpenses}
              onChange={(e) => setAnnualExpenses(Number(e.target.value))}
              className="input-cyber w-full"
              min="0"
              step="1000"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-cyber font-bold text-cyber-green mb-6">
            Your FIRE Projection
          </h3>

          <div className="bg-cyber-darker/50 border border-cyber-purple/50 rounded-lg p-6 space-y-4">
            <div>
              <div className="text-sm text-gray-400">FIRE Number (25x Expenses)</div>
              <div className="text-3xl font-cyber font-bold text-cyber-purple">
                {formatCurrency(results.fireNumber)}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-400">Projected Savings at {retirementAge}</div>
              <div className="text-3xl font-cyber font-bold text-cyber-blue">
                {formatCurrency(results.projectedSavings)}
              </div>
            </div>

            {results.canRetire ? (
              <div className="bg-cyber-green/10 border border-cyber-green/30 rounded p-4">
                <div className="text-cyber-green font-bold text-lg mb-2">
                  ✓ ON TRACK FOR FIRE!
                </div>
                <div className="text-sm text-gray-300">
                  You will exceed your FIRE number by {formatCurrency(Math.abs(results.shortfall))}
                </div>
              </div>
            ) : (
              <div className="bg-cyber-pink/10 border border-cyber-pink/30 rounded p-4">
                <div className="text-cyber-pink font-bold text-lg mb-2">
                  ⚠ SHORTFALL DETECTED
                </div>
                <div className="text-sm text-gray-300">
                  You need an additional {formatCurrency(Math.abs(results.shortfall))}
                </div>
              </div>
            )}

            <div>
              <div className="text-sm text-gray-400">Years to FIRE</div>
              <div className="text-3xl font-cyber font-bold text-cyber-yellow">
                {results.yearsToFire} {results.yearsToFire === 1 ? 'year' : 'years'}
              </div>
              <div className="text-sm text-gray-400 mt-1">
                FIRE Age: {currentAge + results.yearsToFire}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-400">Monthly Income (4% Rule)</div>
              <div className="text-2xl font-cyber font-bold text-cyber-green">
                {formatCurrency(results.monthlyIncomeAt4Percent)}
              </div>
            </div>
          </div>

          <div className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg p-4">
            <div className="text-xs text-gray-400 space-y-1">
              <p>💡 The 4% rule: Withdraw 4% of your portfolio annually</p>
              <p>💡 FIRE Number = Annual Expenses × 25</p>
              <p>💡 Average market returns: 7-10% historically</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
