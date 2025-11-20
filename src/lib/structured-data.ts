import { siteConfig } from './seo'

// JSON-LD Structured Data Generators for rich snippets

// Organization Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
    ],
  }
}

// Website Schema
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

// Article Schema for blog posts
export function generateArticleSchema(params: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author: string
  url: string
  imageUrl?: string
  keywords?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: {
      '@type': 'Person',
      name: params.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    url: params.url,
    image: params.imageUrl || siteConfig.ogImage,
    keywords: params.keywords?.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.url,
    },
  }
}

// HowTo Schema for guides and tutorials
export function generateHowToSchema(params: {
  name: string
  description: string
  totalTime?: string
  steps: Array<{
    name: string
    text: string
    url?: string
  }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: params.name,
    description: params.description,
    totalTime: params.totalTime,
    step: params.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url,
    })),
  }
}

// WebApplication Schema for calculators
export function generateWebApplicationSchema(params: {
  name: string
  description: string
  url: string
  applicationCategory: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: params.name,
    description: params.description,
    url: params.url,
    applicationCategory: params.applicationCategory,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    browserRequirements: 'Requires JavaScript',
  }
}

// BreadcrumbList Schema for navigation
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// FAQPage Schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Helper to render JSON-LD script tag
export function renderJsonLd(data: any) {
  return {
    __html: JSON.stringify(data),
  }
}
