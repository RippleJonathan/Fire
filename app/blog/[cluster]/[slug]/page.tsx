import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/date-utils';
import { generateArticleSchema } from '@/lib/seo';
import AdSlots from '@/components/AdSlots';

interface PostMetadata {
  title: string;
  description: string;
  author: string;
  date: string;
  mdxPath: string;
}

// This would normally come from a CMS or file system
// For now, we'll create a simple mapping
const posts: Record<string, PostMetadata> = {
  'cluster-1/maximizing-hysa-returns': {
    title: 'Maximizing HYSA Returns in 2024',
    description: 'A comprehensive analysis of the best high-yield savings accounts and optimization strategies',
    author: 'Velocity FI Team',
    date: '2024-01-15',
    mdxPath: 'cluster-1/maximizing-hysa-returns',
  },
  'cluster-1/compound-interest-mastery': {
    title: 'The Power of Compound Interest: A Mathematical Deep Dive',
    description: 'Understanding the exponential growth of wealth through compound interest with interactive calculators',
    author: 'Velocity FI Team',
    date: '2024-01-10',
    mdxPath: 'cluster-1/compound-interest-mastery',
  },
  'cluster-2/algo-trading-basics': {
    title: 'Algorithmic Trading for Beginners',
    description: 'Introduction to automated trading strategies and how tech workers can leverage their skills',
    author: 'Velocity FI Team',
    date: '2024-01-20',
    mdxPath: 'cluster-2/algo-trading-basics',
  },
};

export async function generateStaticParams() {
  return [
    { cluster: 'cluster-1', slug: 'maximizing-hysa-returns' },
    { cluster: 'cluster-1', slug: 'compound-interest-mastery' },
    { cluster: 'cluster-2', slug: 'algo-trading-basics' },
  ];
}

export default async function BlogPost({
  params,
}: {
  params: { cluster: string; slug: string };
}) {
  const postKey = `${params.cluster}/${params.slug}`;
  const post = posts[postKey];

  if (!post) {
    notFound();
  }

  // Dynamic import of MDX content
  let MDXContent;
  try {
    const mdxModule = await import(`@/content/${post.mdxPath}.mdx`);
    MDXContent = mdxModule.default;
  } catch {
    // Fallback content
    const FallbackContent = () => (
      <div className="prose prose-invert max-w-none">
        <p>Content for this article is being prepared. Check back soon!</p>
      </div>
    );
    FallbackContent.displayName = 'FallbackContent';
    MDXContent = FallbackContent;
  }

  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.description,
    author: post.author,
    datePublished: post.date,
    url: `https://velocityfi.com/blog/${params.cluster}/${params.slug}`,
  });

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleSchema }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-purple-400 mb-4">
            <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
              {params.cluster === 'cluster-1' ? '💰 High Yield Savings' : '📈 Algo-Trading'}
            </span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{formatDate(post.date, 'long')}</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:text-white prose-headings:font-bold
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-gray-300 prose-p:leading-relaxed
          prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
          prose-strong:text-white prose-strong:font-semibold
          prose-code:text-cyan-400 prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-slate-800 prose-pre:border prose-pre:border-purple-500/30
          prose-ul:text-gray-300 prose-ol:text-gray-300
          prose-li:marker:text-purple-400
          prose-table:text-gray-300
          prose-th:text-white prose-th:bg-slate-800
          prose-td:border-slate-700
          prose-blockquote:border-l-purple-500 prose-blockquote:text-gray-300
        ">
          <MDXContent />
        </div>

        {/* Ad Slot */}
        <div className="mt-12">
          <AdSlots position="inline" />
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium"
          >
            ← Back to all articles
          </a>
        </div>
      </article>

      {/* Sidebar would go here for desktop layouts */}
    </div>
  );
}
