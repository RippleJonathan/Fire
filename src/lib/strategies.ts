// Strategy Guide Data Structure
export interface Strategy {
  slug: string
  title: string
  description: string
  excerpt: string
  category: 'Investment' | 'Tax Strategy' | 'Lifestyle' | 'Income' | 'Passive Income'
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  timeToImplement: string
  potentialImpact: 'Low' | 'Medium' | 'High' | 'Very High'
  keywords: string[]
  relatedCalculators?: string[]
  relatedStrategies?: string[]
  icon: string
  color: string
  content: {
    overview: string
    benefits: string[]
    drawbacks: string[]
    steps: Array<{
      title: string
      description: string
      actionItems?: string[]
    }>
    commonMistakes: string[]
    realExamples?: Array<{
      name: string
      situation: string
      outcome: string
    }>
    faqs: Array<{
      question: string
      answer: string
    }>
    keyTakeaways: string[]
    resources?: Array<{
      title: string
      url: string
      description: string
    }>
  }
}

export const strategies: Strategy[] = [
  {
    slug: 'index-fund-investing',
    title: 'Index Fund Investing for FIRE',
    description: 'Build wealth through low-cost, diversified index funds - the foundation of passive investing and the most reliable path to FIRE.',
    excerpt: 'Low-cost passive investing that beats 89% of active managers',
    category: 'Investment',
    difficulty: 'Beginner',
    timeToImplement: '1-2 hours',
    potentialImpact: 'Very High',
    keywords: ['index funds', 'passive investing', 'ETFs', 'VTSAX', 'VTI', 'diversification', 'low-cost investing'],
    relatedCalculators: ['fire', 'compoundInterest'],
    relatedStrategies: ['dividend-investing', 'tax-optimization'],
    icon: '📈',
    color: 'cyber-purple',
    content: {
      overview: 'Index fund investing is the cornerstone strategy for FIRE seekers. By holding broad market index funds like VTI or VTSAX, you capture the entire market\'s growth at minimal cost. Historical data shows that 89% of actively managed funds underperform index funds over 15+ years, making this the optimal strategy for building wealth.',
      benefits: [
        'Extremely low fees (0.03-0.10% vs 1-2% for active funds)',
        'Instant diversification across thousands of stocks',
        'Historically reliable 7-10% annual returns',
        'Tax efficient with low turnover',
        'Requires minimal time and expertise',
        'Proven track record over decades',
        'Eliminates individual stock risk',
      ],
      drawbacks: [
        'Returns limited to market average (can\'t beat the market)',
        'No downside protection in bear markets',
        'Requires patience and long-term commitment',
        'Boring compared to individual stock picking',
      ],
      steps: [
        {
          title: 'Open a brokerage account',
          description: 'Choose a low-cost broker like Vanguard, Fidelity, or Schwab',
          actionItems: [
            'Compare expense ratios and account minimums',
            'Open a taxable brokerage account and/or IRA',
            'Set up automatic transfers from your bank',
            'Enable two-factor authentication for security',
          ],
        },
        {
          title: 'Choose your index funds',
          description: 'Select 2-4 index funds for a diversified portfolio',
          actionItems: [
            'US Total Stock Market: VTI, VTSAX, FSKAX, or SWTSX',
            'International Stocks: VXUS, VTIAX, FTIHX, or SWISX',
            'Bonds (optional): BND, VBTLX, FXNAX, or SWAGX',
            'Allocate based on your age and risk tolerance',
          ],
        },
        {
          title: 'Determine your asset allocation',
          description: 'Decide your stock/bond split based on timeline',
          actionItems: [
            'Common allocation: 80-100% stocks when young',
            'Example: 70% US stocks, 30% International',
            'Or use a target-date fund for automatic allocation',
            'Document your allocation strategy',
          ],
        },
        {
          title: 'Automate your investments',
          description: 'Set up automatic monthly contributions',
          actionItems: [
            'Schedule automatic transfers on payday',
            'Start with whatever you can afford',
            'Increase contributions when you get raises',
            'Max out tax-advantaged accounts first',
          ],
        },
        {
          title: 'Rebalance annually',
          description: 'Maintain your target allocation once per year',
          actionItems: [
            'Pick a calendar date (e.g., January 1st)',
            'Check if allocations have drifted >5%',
            'Sell overweight positions, buy underweight',
            'Or direct new contributions to rebalance',
          ],
        },
        {
          title: 'Stay the course',
          description: 'Ignore market noise and stick to your plan',
          actionItems: [
            'Don\'t check your portfolio daily',
            'Resist urge to sell during crashes',
            'Continue buying during bear markets',
            'Trust the long-term historical data',
          ],
        },
      ],
      commonMistakes: [
        'Paying high fees for actively managed funds (costs hundreds of thousands over time)',
        'Panic selling during market downturns (locks in losses)',
        'Trying to time the market (nearly impossible to do successfully)',
        'Over-diversifying with too many funds (10+ funds is overkill)',
        'Checking portfolio too frequently (leads to emotional decisions)',
        'Chasing last year\'s winners (past performance doesn\'t predict future)',
        'Not maxing out tax-advantaged accounts first',
      ],
      realExamples: [
        {
          name: 'Sarah, Software Engineer',
          situation: 'Started at 25 with $10k, invested $2k/month in VTSAX for 15 years',
          outcome: 'Reached $850k by age 40, hit Coast FIRE and switched to part-time work',
        },
        {
          name: 'Mike & Jennifer, Teachers',
          situation: 'Invested $1,500/month combined in 3-fund portfolio starting at 30',
          outcome: 'Accumulated $1.2M by 50, retired early to travel',
        },
        {
          name: 'Alex, Former Stock Picker',
          situation: 'Spent 5 years picking stocks (6% returns), switched to index funds',
          outcome: 'Over next 10 years averaged 9.5% returns, accelerated FIRE by 3 years',
        },
      ],
      faqs: [
        {
          question: 'Which is better: VTI or VTSAX?',
          answer: 'They\'re essentially identical - same holdings, same returns. VTI is an ETF (trades like a stock), VTSAX is a mutual fund. VTI has no minimum investment, VTSAX requires $3,000 minimum. Choose based on your preference.',
        },
        {
          question: 'Should I invest in international stocks?',
          answer: 'Yes, most experts recommend 20-40% international exposure for diversification. The US has outperformed recently, but historical data shows periods where international stocks lead. VT (Total World) gives you automatic global diversification.',
        },
        {
          question: 'What about bonds for FIRE?',
          answer: 'Bonds reduce volatility but lower returns. Many FIRE seekers stay 100% stocks until 5-10 years before FIRE, then gradually add bonds. If you\'re young and have a high risk tolerance, 100% stocks is reasonable.',
        },
        {
          question: 'How often should I check my portfolio?',
          answer: 'Once per quarter at most, or just once per year. Frequent checking leads to emotional decision-making. Set up your automatic investments and let compound interest work.',
        },
        {
          question: 'What if the market crashes right before I retire?',
          answer: 'This is "sequence of returns risk." Mitigate by: (1) Building a 1-2 year cash cushion before FIRE, (2) Adding bonds as you approach FIRE, (3) Being flexible with withdrawal rates, (4) Having backup income options.',
        },
      ],
      keyTakeaways: [
        'Index funds are the optimal investment for 95%+ of FIRE seekers',
        'Low fees compound to hundreds of thousands in savings',
        '89% of professional fund managers can\'t beat index funds over 15 years',
        'Simple 3-fund portfolio: US stocks, International stocks, Bonds',
        'Automate investments and rebalance annually',
        'Time in the market beats timing the market',
        'Stay the course during volatility - bear markets are buying opportunities',
      ],
      resources: [
        {
          title: 'The Simple Path to Wealth by JL Collins',
          url: 'https://jlcollinsnh.com/',
          description: 'The bible of index fund investing for FIRE',
        },
        {
          title: 'Bogleheads Investment Philosophy',
          url: 'https://www.bogleheads.org/wiki/Bogleheads®_investment_philosophy',
          description: 'Comprehensive guide to passive index investing',
        },
        {
          title: 'Vanguard Research on Active vs Passive',
          url: 'https://investor.vanguard.com/investor-resources-education/research',
          description: 'Data showing index fund outperformance',
        },
      ],
    },
  },
  {
    slug: 'tax-optimization',
    title: 'Tax Optimization for FIRE',
    description: 'Minimize your lifetime tax burden through strategic use of tax-advantaged accounts, Roth conversions, and withdrawal strategies.',
    excerpt: 'Save hundreds of thousands through strategic tax planning',
    category: 'Tax Strategy',
    difficulty: 'Intermediate',
    timeToImplement: '2-4 hours',
    potentialImpact: 'Very High',
    keywords: ['tax optimization', 'Roth conversion ladder', '401k', 'IRA', 'HSA', 'tax-advantaged accounts', 'FIRE taxes'],
    relatedCalculators: ['fire'],
    relatedStrategies: ['index-fund-investing'],
    icon: '💰',
    color: 'cyber-blue',
    content: {
      overview: 'Tax optimization can save $100,000+ over your lifetime and accelerate your FIRE timeline by 3-5 years. By strategically using tax-advantaged accounts and planning withdrawals, you can legally minimize taxes both during accumulation and in retirement.',
      benefits: [
        'Save $100,000+ in lifetime taxes',
        'Accelerate FIRE timeline by 3-5 years',
        'Reduce current taxable income',
        'Access retirement funds before 59½ penalty-free',
        'Qualify for ACA health insurance subsidies',
        'Lower Medicare premiums (avoid IRMAA)',
        'Maximize wealth compounding',
      ],
      drawbacks: [
        'Complex rules and regulations',
        'Requires careful planning and tracking',
        'Some strategies lock up money short-term',
        'Tax laws can change',
        'May need professional help (CPA cost)',
      ],
      steps: [
        {
          title: 'Max out tax-advantaged accounts',
          description: 'Prioritize accounts in optimal order',
          actionItems: [
            '401(k) up to employer match (free money)',
            'HSA to maximum ($4,150 single / $8,300 family for 2024)',
            '401(k) to maximum ($23,000 for 2024)',
            'Roth IRA via backdoor if over income limits ($7,000 for 2024)',
            'Mega backdoor Roth if available (up to $69,000 total)',
            'Taxable brokerage for remaining funds',
          ],
        },
        {
          title: 'Set up Roth conversion ladder',
          description: 'Plan to access retirement funds before 59½',
          actionItems: [
            'Understand the 5-year seasoning rule',
            'Calculate optimal conversion amounts',
            'Convert in low-income years (first 5 years of FIRE)',
            'Stay within 12% tax bracket when converting',
            'Track each conversion and its 5-year date',
          ],
        },
        {
          title: 'Optimize HSA as stealth IRA',
          description: 'Use HSA for retirement savings, not current medical',
          actionItems: [
            'Max out HSA contributions every year',
            'Pay medical expenses out-of-pocket',
            'Save and organize all medical receipts',
            'Invest HSA funds in index funds (don\'t leave in cash)',
            'Reimburse yourself in retirement (tax-free!)',
          ],
        },
        {
          title: 'Plan withdrawal strategy',
          description: 'Minimize taxes in retirement',
          actionItems: [
            'Years 1-5 of FIRE: Live on taxable brokerage',
            'Simultaneously: Convert Traditional to Roth',
            'Years 6+: Live on Roth conversions (after 5-year seasoning)',
            'Keep income low for ACA subsidies',
            'Harvest capital gains at 0% rate when possible',
          ],
        },
        {
          title: 'Consider geographic arbitrage',
          description: 'Move to low/no state income tax state',
          actionItems: [
            'Research states: FL, TX, NV, WA, WY, SD, TN, AK, NH',
            'Establish legal domicile before FIRE',
            'Save 5-13% in state taxes annually',
            'Consider property taxes and sales taxes too',
          ],
        },
      ],
      commonMistakes: [
        'Not maxing out HSA (missing the triple tax advantage)',
        'Ignoring the Roth conversion ladder opportunity',
        'Converting too much in a single year (jumping tax brackets)',
        'Not tracking Roth conversion dates (5-year rule)',
        'Forgetting about ACA subsidy income limits',
        'Withdrawing from wrong accounts first',
        'Not considering state tax implications',
        'Paying penalties for early withdrawal (when avoidable)',
      ],
      realExamples: [
        {
          name: 'David & Emma',
          situation: 'Maxed 401k, HSA, backdoor Roth for 10 years; moved from CA to NV',
          outcome: 'Saved $280k in taxes over working years, $15k/year in retirement (state taxes)',
        },
        {
          name: 'Marcus, 42',
          situation: 'Retired with $800k in Traditional IRA, did Roth conversions at 12% bracket',
          outcome: 'Converted entire balance over 10 years, paid ~$70k vs $200k if withdrawn at 24%+',
        },
      ],
      faqs: [
        {
          question: 'What\'s the Roth conversion ladder?',
          answer: 'Convert money from Traditional IRA to Roth IRA each year. After 5 years of seasoning, withdraw the converted amount penalty-free and tax-free. This allows access to retirement funds before 59½.',
        },
        {
          question: 'Should I do Traditional or Roth 401k contributions?',
          answer: 'Generally Traditional during high-earning years (tax deduction at 24%+), then convert to Roth in early retirement at 12% bracket. This "tax arbitrage" saves significantly.',
        },
        {
          question: 'How do I access retirement funds before 59½?',
          answer: 'Multiple ways: (1) Roth conversion ladder, (2) Roth contributions (withdraw anytime), (3) 72(t) SEPP, (4) Taxable brokerage, (5) HSA for medical expenses.',
        },
      ],
      keyTakeaways: [
        'Tax optimization can save $100,000+ over lifetime',
        'Max HSA first - it\'s the best retirement account',
        'Use Roth conversion ladder to access funds before 59½',
        'Convert Traditional to Roth in low-income years',
        'Keep income low in early FIRE for ACA subsidies',
        'Consider moving to no-income-tax state',
        'Plan your entire withdrawal strategy before retiring',
      ],
    },
  },
  // Add more strategies here...
]

export function getStrategyBySlug(slug: string): Strategy | undefined {
  return strategies.find((s) => s.slug === slug)
}

export function getAllStrategies(): Strategy[] {
  return strategies
}

export function getStrategiesByCategory(category: string): Strategy[] {
  return strategies.filter((s) => s.category === category)
}
