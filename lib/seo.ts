export interface ArticleSchema {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}

export interface FinanceSchema {
  name: string;
  description: string;
  url: string;
  category: string;
}

/**
 * Generate JSON-LD schema for Article
 */
export function generateArticleSchema(data: ArticleSchema): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    author: {
      '@type': 'Person',
      name: data.author,
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'Velocity FI',
      logo: {
        '@type': 'ImageObject',
        url: '/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url,
    },
  };

  if (data.image) {
    Object.assign(schema, {
      image: {
        '@type': 'ImageObject',
        url: data.image,
      },
    });
  }

  return JSON.stringify(schema);
}

/**
 * Generate JSON-LD schema for Financial Service/Product
 */
export function generateFinanceSchema(data: FinanceSchema): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: data.name,
    description: data.description,
    url: data.url,
    category: data.category,
    provider: {
      '@type': 'Organization',
      name: 'Velocity FI',
    },
  };

  return JSON.stringify(schema);
}

/**
 * Generate JSON-LD schema for Website
 */
export function generateWebsiteSchema(url: string): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Velocity FI',
    description: 'The Futuristic Financial Independence Engine - Data-driven wealth building for tech workers, engineers, and optimizers',
    url: url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return JSON.stringify(schema);
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return JSON.stringify(schema);
}
