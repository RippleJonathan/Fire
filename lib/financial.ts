/**
 * Calculate compound interest with regular contributions
 * @param principal - Initial investment amount
 * @param rate - Annual interest rate (as decimal, e.g., 0.07 for 7%)
 * @param years - Number of years
 * @param monthlyContribution - Monthly contribution amount
 * @param compoundingFrequency - Number of times interest is compounded per year (default: 12)
 */
export function calculateCompoundInterest(
  principal: number,
  rate: number,
  years: number,
  monthlyContribution: number = 0,
  compoundingFrequency: number = 12
): {
  total: number;
  totalContributed: number;
  interestEarned: number;
} {
  const n = compoundingFrequency;
  const t = years;
  
  // Future value of initial principal
  const fv1 = principal * Math.pow(1 + rate / n, n * t);
  
  // Future value of monthly contributions
  const fv2 = monthlyContribution * ((Math.pow(1 + rate / n, n * t) - 1) / (rate / n));
  
  const total = fv1 + fv2;
  const totalContributed = principal + (monthlyContribution * 12 * years);
  const interestEarned = total - totalContributed;
  
  return {
    total,
    totalContributed,
    interestEarned,
  };
}

/**
 * Calculate the years to reach FIRE (Financial Independence Retire Early)
 * @param currentSavings - Current savings amount
 * @param annualExpenses - Annual expenses in retirement
 * @param annualSavings - Annual savings amount
 * @param annualReturn - Expected annual return rate (as decimal)
 * @param withdrawalRate - Safe withdrawal rate (default: 0.04 for 4%)
 */
export function calculateYearsToFIRE(
  currentSavings: number,
  annualExpenses: number,
  annualSavings: number,
  annualReturn: number,
  withdrawalRate: number = 0.04
): number {
  const targetAmount = annualExpenses / withdrawalRate;
  
  if (annualSavings <= 0) return Infinity;
  if (currentSavings >= targetAmount) return 0;
  
  let balance = currentSavings;
  let years = 0;
  
  while (balance < targetAmount && years < 100) {
    balance = balance * (1 + annualReturn) + annualSavings;
    years++;
  }
  
  return years;
}

/**
 * Calculate the Rule of 72 - approximate years to double investment
 * @param rate - Annual interest rate (as percentage, e.g., 7 for 7%)
 */
export function ruleOf72(rate: number): number {
  return 72 / rate;
}

/**
 * Calculate savings rate
 * @param income - Annual income
 * @param expenses - Annual expenses
 */
export function calculateSavingsRate(income: number, expenses: number): number {
  if (income <= 0) return 0;
  return ((income - expenses) / income) * 100;
}

/**
 * Format currency
 * @param amount - Amount to format
 * @param locale - Locale (default: en-US)
 * @param currency - Currency code (default: USD)
 */
export function formatCurrency(
  amount: number,
  locale: string = 'en-US',
  currency: string = 'USD'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
