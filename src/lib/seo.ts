// SEO Configuration and Site-wide Constants
export const siteConfig = {
  name: 'Fire Driven Media',
  title: 'Fire Driven Media - Financial Independence Retire Early',
  description: 'Achieve Financial Independence and Retire Early with data-driven calculators, expert strategies, and actionable insights. Calculate your FIRE number, optimize taxes, and accelerate your path to financial freedom.',
  url: 'https://firedrivenmedia.com',
  ogImage: 'https://firedrivenmedia.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/firedrivenmedia',
    github: 'https://github.com/RippleJonathan/fire',
  },
  creator: 'Jonathan',
  author: {
    name: 'Jonathan',
    bio: 'A 40-year-old roofing business owner who discovered FIRE in 2025 and is documenting his late-start journey to financial independence.',
    credentials: 'Business owner, self-taught investor, FIRE enthusiast',
    disclaimer: 'Not a financial advisor, CPA, or investment professional. Content is for educational purposes only.',
    url: '/about',
  },
  keywords: [
    'FIRE',
    'financial independence',
    'early retirement',
    'retire early',
    'FIRE calculator',
    'financial freedom',
    'passive income',
    'investment strategies',
    'tax optimization',
    'wealth building',
    'coast FIRE',
    'lean FIRE',
    'fat FIRE',
    '4% rule',
    'index funds',
    'late start FIRE',
    'business owner FIRE',
  ],
}

// Internal linking system - map of content types to their URLs and related topics
export const internalLinks = {
  pages: {
    about: {
      url: '/about',
      title: 'About Fire Driven Media',
      description: 'Meet Jonathan, a 40-year-old entrepreneur on a late-start FIRE journey',
      keywords: ['about', 'author', 'late start FIRE', 'business owner FIRE'],
    },
    disclaimer: {
      url: '/disclaimer',
      title: 'Legal Disclaimer',
      description: 'Important legal information about Fire Driven Media content',
      keywords: ['disclaimer', 'legal', 'terms'],
    },
  },
  calculators: {
    fire: {
      url: '/',
      title: 'FIRE Calculator',
      description: 'Calculate your path to Financial Independence',
      keywords: ['FIRE calculator', 'retirement calculator', 'financial independence calculator'],
    },
    coastFire: {
      url: '/calculators/coast-fire',
      title: 'Coast FIRE Calculator',
      description: 'Determine when you can stop saving and coast to retirement',
      keywords: ['coast FIRE', 'coast FIRE calculator', 'financial flexibility'],
    },
    compoundInterest: {
      url: '/calculators/compound-interest',
      title: 'Compound Interest Calculator',
      description: 'Visualize the power of compound growth',
      keywords: ['compound interest', 'investment growth', 'wealth building'],
    },
    withdrawalRate: {
      url: '/calculators/withdrawal-rate',
      title: 'Safe Withdrawal Rate Calculator',
      description: 'Optimize your retirement withdrawal strategy',
      keywords: ['withdrawal rate', '4% rule', 'retirement income'],
    },
  },
  strategies: {
    indexFunds: {
      url: '/strategies/index-fund-investing',
      title: 'Index Fund Investing Strategy',
      description: 'Build wealth through low-cost passive investing',
      keywords: ['index funds', 'passive investing', 'ETFs'],
    },
    taxOptimization: {
      url: '/strategies/tax-optimization',
      title: 'Tax Optimization for FIRE',
      description: 'Minimize taxes and maximize wealth',
      keywords: ['tax optimization', 'Roth conversion', 'tax-advantaged accounts'],
    },
    realEstate: {
      url: '/strategies/real-estate-income',
      title: 'Real Estate Income Strategy',
      description: 'Generate passive income through real estate',
      keywords: ['real estate investing', 'rental income', 'REITs'],
    },
    dividendInvesting: {
      url: '/strategies/dividend-investing',
      title: 'Dividend Growth Investing',
      description: 'Build reliable passive income streams',
      keywords: ['dividend investing', 'dividend stocks', 'passive income'],
    },
    geoArbitrage: {
      url: '/strategies/geographic-arbitrage',
      title: 'Geographic Arbitrage Strategy',
      description: 'Reduce expenses through strategic location',
      keywords: ['geographic arbitrage', 'cost of living', 'expat living'],
    },
    sideHustles: {
      url: '/strategies/side-hustles',
      title: 'Side Hustle Strategies for FIRE',
      description: 'Increase income to accelerate FIRE timeline',
      keywords: ['side hustles', 'extra income', 'multiple income streams'],
    },
  },
  blog: {
    fourPercentRule: {
      url: '/blog/4-percent-rule',
      title: 'The Math Behind the 4% Rule',
      description: 'Understanding the Trinity Study and safe withdrawal rates',
      keywords: ['4% rule', 'safe withdrawal rate', 'Trinity study'],
    },
    coastFire: {
      url: '/blog/coast-fire-guide',
      title: 'Coast FIRE: The Middle Path',
      description: 'How to achieve financial flexibility without waiting for full FIRE',
      keywords: ['coast FIRE', 'financial flexibility', 'career freedom'],
    },
    taxOptimization: {
      url: '/blog/tax-optimization-fire',
      title: 'Tax Optimization Strategies for FIRE',
      description: 'Minimize taxes and maximize wealth',
      keywords: ['tax optimization', 'Roth ladder', 'tax-advantaged accounts'],
    },
    indexFunds: {
      url: '/blog/index-funds-vs-stocks',
      title: 'Index Funds vs Individual Stocks',
      description: 'Why passive investing wins for most FIRE seekers',
      keywords: ['index funds', 'passive investing', 'stock picking'],
    },
  },
}

// Get related content based on current page keywords
export function getRelatedContent(currentKeywords: string[], limit = 3) {
  const allContent = [
    ...Object.values(internalLinks.pages),
    ...Object.values(internalLinks.calculators),
    ...Object.values(internalLinks.strategies),
    ...Object.values(internalLinks.blog),
  ]

  // Score each piece of content based on keyword overlap
  const scored = allContent.map((content) => {
    const overlap = content.keywords.filter((keyword) =>
      currentKeywords.some((ck) => keyword.toLowerCase().includes(ck.toLowerCase()) || ck.toLowerCase().includes(keyword.toLowerCase()))
    ).length
    return { 
      url: content.url,
      title: content.title,
      description: content.description || '',
      keywords: content.keywords,
      score: overlap,
    }
  })

  // Sort by score and return top results
  return scored
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

// Generate canonical URL
export function getCanonicalUrl(path: string): string {
  return `${siteConfig.url}${path}`
}

// Generate Open Graph metadata
export function generateOpenGraph(params: {
  title: string
  description: string
  url: string
  type?: 'website' | 'article'
  publishedTime?: string
  authors?: string[]
  tags?: string[]
}) {
  return {
    title: params.title,
    description: params.description,
    url: params.url,
    siteName: siteConfig.name,
    type: params.type || 'website',
    ...(params.type === 'article' && {
      publishedTime: params.publishedTime,
      authors: params.authors,
      tags: params.tags,
    }),
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: params.title,
      },
    ],
  }
}

// Generate Twitter Card metadata
export function generateTwitterCard(params: {
  title: string
  description: string
}) {
  return {
    card: 'summary_large_image',
    title: params.title,
    description: params.description,
    creator: '@fireengine', // Update with your Twitter handle
    images: [siteConfig.ogImage],
  }
}

// SEO-friendly URL slug generator
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
