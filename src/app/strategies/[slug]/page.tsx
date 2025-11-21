import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getAllStrategies, getStrategyBySlug } from '@/lib/strategies'
import { generateArticleSchema, generateBreadcrumbSchema, generateHowToSchema, generateFAQSchema, renderJsonLd } from '@/lib/structured-data'
import { siteConfig, getCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import type { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const strategies = getAllStrategies()
  return strategies.map((strategy) => ({
    slug: strategy.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const strategy = getStrategyBySlug(params.slug)
  
  if (!strategy) {
    return {
      title: 'Strategy Not Found',
    }
  }

  const url = getCanonicalUrl(`/strategies/${strategy.slug}`)

  return {
    title: `${strategy.title} | ${siteConfig.name}`,
    description: strategy.description,
    keywords: strategy.keywords,
    authors: [{ name: siteConfig.creator }],
    openGraph: generateOpenGraph({
      title: strategy.title,
      description: strategy.description,
      url,
      type: 'article',
      tags: strategy.keywords,
    }),
    twitter: generateTwitterCard({
      title: strategy.title,
      description: strategy.description,
    }),
    alternates: {
      canonical: url,
    },
  }
}

export default function StrategyPage({ params }: PageProps) {
  const strategy = getStrategyBySlug(params.slug)

  if (!strategy) {
    notFound()
  }

  const url = getCanonicalUrl(`/strategies/${params.slug}`)

  // Generate structured data
  const articleSchema = generateArticleSchema({
    title: strategy.title,
    description: strategy.description,
    datePublished: new Date().toISOString(),
    author: siteConfig.creator,
    url,
    keywords: strategy.keywords,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Strategies', url: `${siteConfig.url}/strategies` },
    { name: strategy.title, url },
  ])

  const howToSchema = generateHowToSchema({
    name: strategy.title,
    description: strategy.description,
    totalTime: strategy.timeToImplement,
    steps: strategy.content.steps.map((step) => ({
      name: step.title,
      text: step.description,
    })),
  })

  const faqSchema = generateFAQSchema(strategy.content.faqs)

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJsonLd(howToSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJsonLd(faqSchema)}
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

        <article className="container mx-auto px-6 py-12 max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-cyber-blue">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/strategies" className="hover:text-cyber-blue">Strategies</Link>
            <span className="mx-2">/</span>
            <span className="text-cyber-purple">{strategy.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{strategy.icon}</span>
              <div className="text-sm text-cyber-blue uppercase tracking-wider">
                {strategy.category}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-cyber font-black mb-6 bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-blue bg-clip-text text-transparent">
              {strategy.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {strategy.description}
            </p>

            {/* Meta Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="card-cyber py-3 px-4 text-center">
                <div className="text-xs text-gray-500 mb-1">Difficulty</div>
                <div className={`text-sm font-bold text-${strategy.color}`}>{strategy.difficulty}</div>
              </div>
              <div className="card-cyber py-3 px-4 text-center">
                <div className="text-xs text-gray-500 mb-1">Time</div>
                <div className={`text-sm font-bold text-${strategy.color}`}>{strategy.timeToImplement}</div>
              </div>
              <div className="card-cyber py-3 px-4 text-center">
                <div className="text-xs text-gray-500 mb-1">Impact</div>
                <div className={`text-sm font-bold text-${strategy.color}`}>{strategy.potentialImpact}</div>
              </div>
              <div className="card-cyber py-3 px-4 text-center">
                <div className="text-xs text-gray-500 mb-1">Category</div>
                <div className={`text-sm font-bold text-${strategy.color}`}>{strategy.category}</div>
              </div>
            </div>
          </header>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-cyber font-bold text-cyber-blue mb-4">Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{strategy.content.overview}</p>
          </section>

          {/* Benefits & Drawbacks */}
          <section className="mb-12 grid md:grid-cols-2 gap-8">
            <div className="card-cyber bg-cyber-green/5 border-cyber-green/30">
              <h3 className="text-2xl font-cyber font-bold text-cyber-green mb-4">✅ Benefits</h3>
              <ul className="space-y-2">
                {strategy.content.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-cyber-green mr-2">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-cyber bg-cyber-pink/5 border-cyber-pink/30">
              <h3 className="text-2xl font-cyber font-bold text-cyber-pink mb-4">⚠️ Drawbacks</h3>
              <ul className="space-y-2">
                {strategy.content.drawbacks.map((drawback, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-cyber-pink mr-2">•</span>
                    <span>{drawback}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Implementation Steps */}
          <section className="mb-12">
            <h2 className="text-3xl font-cyber font-bold text-cyber-purple mb-6">Implementation Steps</h2>
            <div className="space-y-6">
              {strategy.content.steps.map((step, index) => (
                <div key={index} className="card-cyber">
                  <div className="flex items-start gap-4">
                    <div className={`text-3xl font-cyber font-bold text-${strategy.color}`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-cyber font-bold text-${strategy.color} mb-2`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-300 mb-3">{step.description}</p>
                      {step.actionItems && (
                        <ul className="space-y-1">
                          {step.actionItems.map((item, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start">
                              <span className="text-cyber-blue mr-2">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-cyber font-bold text-cyber-yellow mb-6">🚫 Common Mistakes to Avoid</h2>
            <div className="card-cyber bg-cyber-yellow/5 border-cyber-yellow/30">
              <ul className="space-y-3">
                {strategy.content.commonMistakes.map((mistake, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-cyber-yellow mr-2 text-xl">×</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Real Examples */}
          {strategy.content.realExamples && strategy.content.realExamples.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-cyber font-bold text-cyber-green mb-6">💡 Real Success Stories</h2>
              <div className="space-y-4">
                {strategy.content.realExamples.map((example, index) => (
                  <div key={index} className="card-cyber bg-cyber-green/5 border-cyber-green/30">
                    <h3 className="text-lg font-cyber font-bold text-cyber-green mb-2">{example.name}</h3>
                    <p className="text-gray-400 text-sm mb-2"><strong>Situation:</strong> {example.situation}</p>
                    <p className="text-gray-300 text-sm"><strong>Outcome:</strong> {example.outcome}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-cyber font-bold text-cyber-blue mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-4">
              {strategy.content.faqs.map((faq, index) => (
                <div key={index} className="card-cyber">
                  <h3 className="text-lg font-cyber font-bold text-cyber-purple mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="mb-12">
            <h2 className="text-3xl font-cyber font-bold text-cyber-purple mb-6">🎯 Key Takeaways</h2>
            <div className="card-cyber bg-cyber-purple/5 border-cyber-purple/30">
              <ul className="space-y-2">
                {strategy.content.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-cyber-purple mr-2">✓</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Resources */}
          {strategy.content.resources && strategy.content.resources.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-cyber font-bold text-cyber-blue mb-6">📚 Additional Resources</h2>
              <div className="space-y-3">
                {strategy.content.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-cyber block hover:border-cyber-blue/60 transition-all"
                  >
                    <h3 className="text-lg font-bold text-cyber-blue mb-1">{resource.title}</h3>
                    <p className="text-sm text-gray-400">{resource.description}</p>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Related Tools CTA */}
          <section className="card-cyber bg-gradient-to-br from-cyber-purple/10 to-cyber-blue/10">
            <h3 className="text-2xl font-cyber font-bold text-cyber-purple mb-4">
              Ready to Put This Strategy Into Action?
            </h3>
            <p className="text-gray-400 mb-6">
              Use our interactive calculators to model your FIRE journey with this strategy.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/" className="btn-cyber">
                FIRE Calculator
              </Link>
              <Link href="/calculators/coast-fire" className="btn-cyber">
                Coast FIRE Calculator
              </Link>
              <Link href="/strategies" className="text-cyber-blue hover:text-cyber-green transition-colors">
                ← Back to All Strategies
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  )
}
