'use client'

import { useState, useEffect } from 'react'
import Disclaimer from './Disclaimer'

export default function CoastFireCalculator() {
  const [currentAge, setCurrentAge] = useState(30)
  const [currentSavings, setCurrentSavings] = useState(50000)
  const [retirementAge, setRetirementAge] = useState(65)
  const [annualExpenses, setAnnualExpenses] = useState(40000)
  const [annualReturn, setAnnualReturn] = useState(7)
  
  const [results, setResults] = useState({
    fireNumber: 0,
    coastFireAge: 0,
    yearsUntilCoast: 0,
    isAlreadyCoasting: false,
    projectedValueAtRetirement: 0,
    requiredSavingsForCoast: 0,
    additionalSavingsNeeded: 0,
  })

  useEffect(() => {
    calculateCoastFIRE()
  }, [currentAge, currentSavings, retirementAge, annualExpenses, annualReturn])

  const calculateCoastFIRE = () => {
    // FIRE number is 25x annual expenses (4% rule)
    const fireNumber = annualExpenses * 25
    
    // Years until retirement
    const yearsToRetire = retirementAge - currentAge
    
    // Calculate what current savings will grow to by retirement
    const annualRate = annualReturn / 100
    const projectedValueAtRetirement = currentSavings * Math.pow(1 + annualRate, yearsToRetire)
    
    // Calculate the minimum savings needed NOW to reach FIRE number by retirement
    // Present Value = Future Value / (1 + r)^n
    const requiredSavingsForCoast = fireNumber / Math.pow(1 + annualRate, yearsToRetire)
    
    // Check if already coasting
    const isAlreadyCoasting = currentSavings >= requiredSavingsForCoast
    
    // Calculate how much more is needed
    const additionalSavingsNeeded = Math.max(0, requiredSavingsForCoast - currentSavings)
    
    // Calculate coast FIRE age - when they'll reach the required savings
    // If they need to save more, we assume a reasonable monthly contribution
    let coastFireAge = currentAge
    let yearsUntilCoast = 0
    
    if (!isAlreadyCoasting) {
      // This is simplified - in reality would need monthly contribution input
      // For now, calculate how many years of 7% growth needed
      if (currentSavings > 0) {
        yearsUntilCoast = Math.log(requiredSavingsForCoast / currentSavings) / Math.log(1 + annualRate)
        coastFireAge = currentAge + Math.ceil(yearsUntilCoast)
      } else {
        yearsUntilCoast = 0
        coastFireAge = currentAge
      }
    }

    setResults({
      fireNumber,
      coastFireAge: isAlreadyCoasting ? currentAge : coastFireAge,
      yearsUntilCoast: isAlreadyCoasting ? 0 : yearsUntilCoast,
      isAlreadyCoasting,
      projectedValueAtRetirement,
      requiredSavingsForCoast,
      additionalSavingsNeeded,
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
            Your Coast FIRE Data
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
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-cyber font-bold text-cyber-green mb-6">
            Your Coast FIRE Status
          </h3>

          <div className="bg-cyber-darker/50 border border-cyber-purple/50 rounded-lg p-6 space-y-4">
            <div>
              <div className="text-sm text-gray-400">FIRE Number (25x Expenses)</div>
              <div className="text-3xl font-cyber font-bold text-cyber-purple">
                {formatCurrency(results.fireNumber)}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-400">Required Savings for Coast FIRE NOW</div>
              <div className="text-3xl font-cyber font-bold text-cyber-blue">
                {formatCurrency(results.requiredSavingsForCoast)}
              </div>
            </div>

            {results.isAlreadyCoasting ? (
              <div className="bg-cyber-green/10 border border-cyber-green/30 rounded p-4">
                <div className="text-cyber-green font-bold text-lg mb-2">
                  🎉 YOU'RE COASTING!
                </div>
                <div className="text-sm text-gray-300">
                  You can stop saving now! Your current savings will grow to {formatCurrency(results.projectedValueAtRetirement)} by age {retirementAge}.
                </div>
              </div>
            ) : (
              <div className="bg-cyber-yellow/10 border border-cyber-yellow/30 rounded p-4">
                <div className="text-cyber-yellow font-bold text-lg mb-2">
                  📊 KEEP SAVING
                </div>
                <div className="text-sm text-gray-300 space-y-2">
                  <p>Additional savings needed: {formatCurrency(results.additionalSavingsNeeded)}</p>
                  <p>Estimated coast age: {Math.ceil(results.coastFireAge)} years old</p>
                  <p>Years until coast: {Math.ceil(results.yearsUntilCoast)} years</p>
                </div>
              </div>
            )}

            <div>
              <div className="text-sm text-gray-400">Your Savings Will Grow To</div>
              <div className="text-2xl font-cyber font-bold text-cyber-green">
                {formatCurrency(results.projectedValueAtRetirement)}
              </div>
              <div className="text-sm text-gray-400 mt-1">
                by age {retirementAge} (without additional contributions)
              </div>
            </div>

            {!results.isAlreadyCoasting && results.projectedValueAtRetirement < results.fireNumber && (
              <div className="bg-cyber-pink/10 border border-cyber-pink/30 rounded p-4">
                <div className="text-cyber-pink font-bold text-sm mb-1">
                  ⚠️ SHORTFALL WARNING
                </div>
                <div className="text-xs text-gray-300">
                  Even with growth, your current savings will fall short by {formatCurrency(results.fireNumber - results.projectedValueAtRetirement)}. You need to save {formatCurrency(results.additionalSavingsNeeded)} more to reach Coast FIRE.
                </div>
              </div>
            )}
          </div>

          <div className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg p-4">
            <div className="text-xs text-gray-400 space-y-1">
              <p>💡 <strong>Coast FIRE</strong>: Save enough now so your money grows to your FIRE number by retirement age - no more contributions needed!</p>
              <p>💡 The earlier you start, the less you need to save due to compound growth</p>
              <p>💡 This assumes you cover living expenses from income but don't save more</p>
            </div>
          </div>
        </div>
      </div>

      <Disclaimer variant="calculator" className="mt-6" />
    </div>
  )
}
