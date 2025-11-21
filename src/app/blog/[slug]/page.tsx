import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { generateArticleSchema, generateBreadcrumbSchema, renderJsonLd } from '@/lib/structured-data'
import { siteConfig, getCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import RelatedContent from '@/components/RelatedContent'
import type { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const url = getCanonicalUrl(`/blog/${params.slug}`)

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
    keywords: ['FIRE', 'financial independence', post.category.toLowerCase(), 'early retirement'],
    authors: [{ name: post.author || siteConfig.creator }],
    openGraph: generateOpenGraph({
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.date,
      tags: [post.category, 'FIRE', 'financial independence'],
    }),
    twitter: generateTwitterCard({
      title: post.title,
      description: post.excerpt,
    }),
    alternates: {
      canonical: url,
    },
  }
}

export default async function BlogPost({ params }: PageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Dynamically import the MDX file
  let MDXContent
  try {
    MDXContent = (await import(`@/../../content/blog/${params.slug}.mdx`)).default
  } catch (error) {
    notFound()
  }

  const url = getCanonicalUrl(`/blog/${params.slug}`)

  // Generate structured data
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: post.author || siteConfig.creator,
    url,
    keywords: [post.category, 'FIRE', 'financial independence'],
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
    { name: post.title, url },
  ])

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJsonLd(articleSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJsonLd(breadcrumbSchema)}
      />

      <div className="min-h-screen">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <Image 
            src="/logo.jpg" 
            alt="Fire Driven Media" 
            width={80} 
            height={80}
            className="rounded-full ring-2 ring-cyber-purple/50 group-hover:ring-cyber-pink transition-all"
          />
        </Link>
        <div className="flex gap-4 md:gap-6 text-sm md:text-base">
          <Link href="/about" className="text-cyber-blue hover:text-cyber-green transition-colors font-semibold">
            About
          </Link>
          <Link href="/calculators" className="text-cyber-blue hover:text-cyber-green transition-colors">
            Calculators
          </Link>
          <Link href="/strategies" className="text-cyber-blue hover:text-cyber-green transition-colors">
            Strategies
          </Link>
          <Link href="/blog" className="text-cyber-blue hover:text-cyber-green transition-colors">
            Blog
          </Link>
        </div>
      </nav>

      <article className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-cyber-blue">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-cyber-blue">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-cyber-purple">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="text-sm text-cyber-blue uppercase tracking-wider mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-cyber font-black mb-6 bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-blue bg-clip-text text-transparent">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.readTime && <span>{post.readTime}</span>}
            {post.author && <span>By {post.author}</span>}
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:font-cyber
          prose-h1:text-cyber-purple
          prose-h2:text-cyber-blue
          prose-h3:text-cyber-green
          prose-a:text-cyber-blue
          prose-strong:text-cyber-purple
          prose-code:text-cyber-green
          prose-code:bg-cyber-dark
          prose-pre:bg-cyber-dark
          prose-pre:border
          prose-pre:border-cyber-purple/30
        ">
          <MDXContent />
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-cyber-purple/30">
          <div className="flex justify-between items-center">
            <Link href="/blog" className="btn-cyber">
              ← Back to Blog
            </Link>
            <div className="flex gap-4">
              <Link href="/calculators" className="text-cyber-blue hover:text-cyber-green transition-colors">
                Try Calculators →
              </Link>
            </div>
          </div>
        </footer>

        {/* Related Content */}
        <RelatedContent 
          keywords={[post.category, 'FIRE', post.slug]}
          currentUrl={`/blog/${params.slug}`}
          title="Continue Learning"
        />

        {/* Related Tools CTA */}
        <section className="mt-12 card-cyber bg-gradient-to-br from-cyber-purple/10 to-cyber-blue/10">
          <h3 className="text-2xl font-cyber font-bold text-cyber-purple mb-4">
            Ready to Calculate Your FIRE Journey?
          </h3>
          <p className="text-gray-400 mb-6">
            Use our interactive calculators to determine your path to financial independence.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/#calculator" className="btn-cyber">
              FIRE Calculator
            </Link>
            <Link href="/calculators/coast-fire" className="btn-cyber">
              Coast FIRE Calculator
            </Link>
          </div>
        </section>
      </article>
      </div>
    </>
  )
}
