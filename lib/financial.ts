/**
 * Calculate compound interest
 * @param principal - Initial investment amount
 * @param rate - Annual interest rate (as decimal, e.g., 0.07 for 7%)
 * @param time - Time in years
 * @param frequency - Number of times interest is compounded per year
 * @returns Final amount after compound interest
 */
export function calculateCompoundInterest(
  principal: number,
  rate: number,
  time: number,
  frequency: number = 12
): number {
  return principal * Math.pow(1 + rate / frequency, frequency * time);
}

/**
 * Calculate future value with regular contributions
 * @param principal - Initial investment
 * @param monthlyContribution - Regular monthly contribution
 * @param rate - Annual interest rate (as decimal)
 * @param years - Number of years
 * @returns Future value
 */
export function calculateFutureValue(
  principal: number,
  monthlyContribution: number,
  rate: number,
  years: number
): number {
  const monthlyRate = rate / 12;
  const months = years * 12;
  
  // Future value of initial principal
  const fvPrincipal = principal * Math.pow(1 + monthlyRate, months);
  
  // Future value of monthly contributions (annuity)
  const fvContributions = monthlyContribution * 
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  
  return fvPrincipal + fvContributions;
}

/**
 * Calculate FIRE number (Financial Independence number)
 * @param annualExpenses - Annual expenses
 * @param withdrawalRate - Safe withdrawal rate (default 0.04 for 4%)
 * @returns Amount needed to retire
 */
export function calculateFIRENumber(
  annualExpenses: number,
  withdrawalRate: number = 0.04
): number {
  return annualExpenses / withdrawalRate;
}

/**
 * Calculate years to FIRE
 * @param currentNetWorth - Current net worth
 * @param fireNumber - Target FIRE number
 * @param annualSavings - Annual savings amount
 * @param returnRate - Expected annual return rate (as decimal)
 * @returns Years until FIRE
 */
export function calculateYearsToFIRE(
  currentNetWorth: number,
  fireNumber: number,
  annualSavings: number,
  returnRate: number
): number {
  if (currentNetWorth >= fireNumber) return 0;
  
  // Using logarithms to solve for time
  const monthlyRate = returnRate / 12;
  const monthlySavings = annualSavings / 12;
  
  const numerator = Math.log(
    (fireNumber * monthlyRate + monthlySavings) /
    (currentNetWorth * monthlyRate + monthlySavings)
  );
  const denominator = 12 * Math.log(1 + monthlyRate);
  
  return numerator / denominator;
}

/**
 * Format currency
 * @param amount - Amount to format
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
