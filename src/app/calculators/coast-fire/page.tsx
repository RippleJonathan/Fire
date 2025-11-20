import Link from 'next/link'
import type { Metadata } from 'next'
import CoastFireCalculator from '@/components/CoastFireCalculator'
import RelatedContent from '@/components/RelatedContent'
import { generateWebApplicationSchema, generateBreadcrumbSchema, generateFAQSchema, renderJsonLd } from '@/lib/structured-data'
import { siteConfig, getCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const pageUrl = getCanonicalUrl('/calculators/coast-fire')

export const metadata: Metadata = {
  title: 'Coast FIRE Calculator - When Can You Stop Saving?',
  description: 'Calculate when you can stop contributing to retirement and let your current savings coast to your FIRE number through compound growth.',
  keywords: ['coast FIRE', 'coast fire calculator', 'financial independence calculator', 'retirement calculator', 'compound interest'],
  openGraph: generateOpenGraph({
    title: 'Coast FIRE Calculator',
    description: 'Calculate when you can stop saving and coast to financial independence',
    url: pageUrl,
  }),
  twitter: generateTwitterCard({
    title: 'Coast FIRE Calculator',
    description: 'Calculate when you can stop saving and coast to financial independence',
  }),
  alternates: {
    canonical: pageUrl,
  },
}

export default function CoastFirePage() {
  // Generate structured data
  const appSchema = generateWebApplicationSchema({
    name: 'Coast FIRE Calculator',
    description: 'Calculate when you can stop saving and let your investments coast to your FIRE number',
    url: pageUrl,
    applicationCategory: 'FinanceApplication',
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Calculators', url: `${siteConfig.url}/calculators` },
    { name: 'Coast FIRE Calculator', url: pageUrl },
  ])

  const faqSchema = generateFAQSchema([
    {
      question: 'What is Coast FIRE?',
      answer: 'Coast FIRE means you\'ve invested enough that your current portfolio will grow to support full FIRE by traditional retirement age, even if you never contribute another dollar.',
    },
    {
      question: 'How is Coast FIRE different from regular FIRE?',
      answer: 'Coast FIRE is a milestone where you can stop saving for retirement. Regular FIRE means you can retire immediately. Coast FIRE lets you work less stressful jobs or part-time while your investments grow.',
    },
    {
      question: 'What\'s the Coast FIRE formula?',
      answer: 'Coast FIRE Number = FIRE Number ÷ (1 + return rate)^years until retirement. For example, if you need $1M at 65 and you\'re 30 with 7% returns, you need about $131k now.',
    },
  ])

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJsonLd(appSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJsonLd(breadcrumbSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJsonLd(faqSchema)}
      />

      <div className="min-h-screen">
      <nav className="container mx-auto px-6 py-6">
        <Link href="/" className="text-3xl font-cyber font-bold cyber-glow text-cyber-purple">
          FIRE_ENGINE
        </Link>
      </nav>

      <main className="container mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-cyber-blue">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/calculators" className="hover:text-cyber-blue">Calculators</Link>
          <span className="mx-2">/</span>
          <span className="text-cyber-purple">Coast FIRE Calculator</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-cyber font-black mb-6 bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple bg-clip-text text-transparent">
            COAST FIRE
          </h1>
          <p className="text-xl text-gray-400 mb-4 max-w-3xl mx-auto">
            Calculate when you can stop saving and let compound interest do the rest
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Coast FIRE is a milestone where you've saved enough that your current balance will grow to your FIRE number by retirement age—without additional contributions.
          </p>
        </div>

        <CoastFireCalculator />

        {/* Educational Content */}
        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-cyber font-bold text-center mb-8 text-cyber-blue">
            Understanding Coast FIRE
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-cyber">
              <h3 className="text-xl font-cyber font-bold text-cyber-green mb-3">
                What is Coast FIRE?
              </h3>
              <p className="text-gray-400 text-sm">
                Coast FIRE means you've invested enough that your current portfolio will grow to support full FIRE by traditional retirement age (typically 65), even if you never contribute another dollar. You can "coast" from here on out.
              </p>
            </div>

            <div className="card-cyber">
              <h3 className="text-xl font-cyber font-bold text-cyber-purple mb-3">
                Why Coast FIRE?
              </h3>
              <p className="text-gray-400 text-sm">
                Coast FIRE offers financial flexibility. Once you hit your coast number, you can take lower-paying but more fulfilling jobs, work part-time, or take career risks without worrying about retirement savings.
              </p>
            </div>

            <div className="card-cyber">
              <h3 className="text-xl font-cyber font-bold text-cyber-blue mb-3">
                The Math Behind It
              </h3>
              <p className="text-gray-400 text-sm">
                Coast FIRE Number = FIRE Number ÷ (1 + return rate)^years. For example, if you need $1M at 65 and you're 30 with 7% returns, you only need about $130,000 now to coast.
              </p>
            </div>

            <div className="card-cyber">
              <h3 className="text-xl font-cyber font-bold text-cyber-pink mb-3">
                Coast FIRE Strategies
              </h3>
              <p className="text-gray-400 text-sm">
                Save aggressively in your 20s and 30s to hit Coast FIRE early. Then pursue passion projects, part-time work, or entrepreneurship while your retirement funds grow on autopilot.
              </p>
            </div>
          </div>
        </section>

        {/* Key Milestones */}
        <section className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-cyber font-bold text-center mb-8 text-cyber-yellow">
            FIRE Milestones
          </h2>
          <div className="space-y-4">
            <div className="card-cyber border-cyber-green/50">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-cyber font-bold text-cyber-green">1.</div>
                <div>
                  <div className="font-cyber font-bold text-cyber-green">Coast FIRE</div>
                  <div className="text-sm text-gray-400">Enough to reach FIRE by traditional retirement age</div>
                </div>
              </div>
            </div>
            <div className="card-cyber border-cyber-blue/50">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-cyber font-bold text-cyber-blue">2.</div>
                <div>
                  <div className="font-cyber font-bold text-cyber-blue">Barista FIRE</div>
                  <div className="text-sm text-gray-400">Enough to cover most expenses; work part-time for the rest</div>
                </div>
              </div>
            </div>
            <div className="card-cyber border-cyber-purple/50">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-cyber font-bold text-cyber-purple">3.</div>
                <div>
                  <div className="font-cyber font-bold text-cyber-purple">Full FIRE</div>
                  <div className="text-sm text-gray-400">Complete financial independence; work is optional</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <RelatedContent 
          keywords={['coast FIRE', 'FIRE calculator', 'compound interest', 'financial independence']}
          currentUrl="/calculators/coast-fire"
          title="Related Tools & Guides"
        />

        <div className="mt-12 text-center">
          <Link href="/calculators" className="btn-cyber">
          ← Back to All Calculators
        </Link>
      </div>
    </main>
    </div>
    </>
  )
}