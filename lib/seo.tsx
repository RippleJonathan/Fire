interface Article {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}

interface FinancialService {
  name: string;
  description: string;
  url: string;
}

/**
 * Generate Article JSON-LD schema
 */
export function generateArticleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image,
    url: article.url,
    publisher: {
      '@type': 'Organization',
      name: 'Velocity FI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://velocityfi.com/logo.png',
      },
    },
  };
}

/**
 * Generate Finance Service JSON-LD schema
 */
export function generateFinanceSchema(service: FinancialService) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: 'Velocity FI',
    },
  };
}

/**
 * Generate Website JSON-LD schema
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Velocity FI',
    description: 'The Futuristic Financial Independence Engine',
    url: 'https://velocityfi.com',
  };
}

/**
 * Inject JSON-LD script into page
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
