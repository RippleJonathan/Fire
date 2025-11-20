import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/seo';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Jonathan, a 40-year-old entrepreneur who discovered FIRE in 2025 and is documenting his late-start journey to financial independence while building tools to help others.',
  openGraph: {
    title: 'About Fire Driven Media',
    description: 'Meet Jonathan, a 40-year-old entrepreneur who discovered FIRE in 2025 and is documenting his late-start journey to financial independence.',
    url: `${siteConfig.url}/about`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Fire Driven Media',
    description: 'Meet Jonathan, a 40-year-old entrepreneur on a late-start FIRE journey.',
  },
};

export default function AboutPage() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 cyber-glow">
              About Fire Driven Media
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A late-start FIRE journey, documented in real-time
            </p>
          </div>

          {/* Main Content */}
          <div className="card-cyber p-8 md:p-12 mb-12">
            <div className="prose prose-invert prose-lg max-w-none">
              
              {/* The Story */}
              <h2 className="text-3xl font-bold mb-6 text-cyber-purple">Hey, I'm Jonathan 👋</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a 40-year-old roofing business owner who discovered FIRE (Financial Independence, Retire Early) 
                in 2025 and had a lightbulb moment: <span className="text-cyber-green font-semibold">I'd been doing it halfway 
                for years without even knowing what "it" was.</span>
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                I've always been decent with money—frugal when it counts, saving when I can, making investments in stocks 
                and crypto on Robinhood. I built a successful roofing company from the ground up. But I never had a 
                <span className="text-cyber-pink font-semibold"> clear target, a timeline, or a strategy</span>. 
                I was just working hard and hoping it would all work out by the time I hit 65.
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                Then I stumbled across FIRE, and everything clicked. The math, the framework, the goal of 
                <span className="text-cyber-blue font-semibold"> not working until you're too old to enjoy it</span>—it 
                all made perfect sense. But most FIRE content assumes you're 25, making six figures in tech, and saving 
                70% of your income. <span className="text-cyber-yellow font-semibold">That's not me. And I'm guessing 
                it's not you either.</span>
              </p>

              {/* Why This Site Exists */}
              <h2 className="text-3xl font-bold mb-6 text-cyber-purple">Why I Built Fire Driven Media</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I built Fire Driven Media for three reasons:
              </p>

              <ol className="list-decimal list-inside text-gray-300 space-y-4 mb-8 ml-4">
                <li>
                  <span className="font-semibold text-cyber-green">To document what I'm learning</span> — 
                  I'm figuring this out in real-time, and writing helps me understand the concepts deeply. 
                  If it helps someone else, that's a bonus.
                </li>
                <li>
                  <span className="font-semibold text-cyber-pink">To build better tools</span> — 
                  Most FIRE calculators assume W-2 income and ignore business owners, variable income, and late starters. 
                  I'm building calculators that reflect real-world complexity.
                </li>
                <li>
                  <span className="font-semibold text-cyber-blue">To prove it's not too late</span> — 
                  If you're 35, 40, 45+ and wondering if you missed the boat, you didn't. The math still works. 
                  You just need to run the numbers honestly and adjust your strategy.
                </li>
              </ol>

              {/* What Makes This Different */}
              <h2 className="text-3xl font-bold mb-6 text-cyber-purple">What Makes This Site Different</h2>

              <div className="bg-cyber-darker/50 border-l-4 border-cyber-green p-6 mb-8 rounded-r-lg">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <span className="font-bold text-cyber-green">Transparency:</span> I'm not a financial advisor, 
                  and I'm not pretending to be. I'm a business owner who discovered FIRE and is learning the 
                  strategies, running the calculations, and sharing what works.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <span className="font-bold text-cyber-pink">Real-World Focus:</span> Most FIRE blogs are written 
                  by people who already reached FI. This is a real-time journey. I'm documenting the process, 
                  including the mistakes and course corrections.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold text-cyber-blue">Late-Start Angle:</span> If you're starting FIRE 
                  in your 30s or 40s, you need different strategies than the 25-year-old engineer. I'm building 
                  content specifically for people who found FIRE "late" and are making up for lost time.
                </p>
              </div>

              {/* Current Situation */}
              <h2 className="text-3xl font-bold mb-6 text-cyber-purple">Where I Am Now</h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                I'm currently:
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8 ml-4">
                <li>Running my roofing company while exploring ways to make it less hands-on</li>
                <li>Building a CRM for contractors (another income stream in the works)</li>
                <li>Investing in stocks and crypto, now with a FIRE-focused strategy</li>
                <li>Calculating my FIRE number and figuring out my timeline</li>
                <li>Learning about tax optimization, asset allocation, and withdrawal strategies</li>
                <li>Creating this site to share what I'm learning and build tools that help others</li>
              </ul>

              <p className="text-gray-300 leading-relaxed mb-8">
                I'm growing my net worth, saving what I can, and adjusting my investments based on what I'm 
                learning about FIRE. I don't have all the answers yet—<span className="text-cyber-yellow font-semibold">but 
                I'm asking the right questions and doing the math.</span>
              </p>

              {/* My Approach */}
              <h2 className="text-3xl font-bold mb-6 text-cyber-purple">My Approach to Content</h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Every article on this site is:
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8 ml-4">
                <li><span className="text-cyber-green font-semibold">Researched</span> — I fact-check everything against reputable sources</li>
                <li><span className="text-cyber-pink font-semibold">Practical</span> — I focus on actionable strategies, not theory</li>
                <li><span className="text-cyber-blue font-semibold">Honest</span> — I share what I'm learning, including what I don't know yet</li>
                <li><span className="text-cyber-yellow font-semibold">Realistic</span> — No clickbait, no "retire in 5 years" nonsense</li>
              </ul>

              <div className="bg-cyber-darker/50 border border-cyber-pink/30 p-6 mb-8 rounded-lg">
                <p className="text-sm text-gray-400 italic mb-2">
                  <span className="font-bold text-cyber-pink">Disclaimer:</span>
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I'm not a financial advisor, CPA, or investment professional. Everything on this site is for 
                  educational purposes only. I'm sharing my learning journey and the tools I'm building for myself. 
                  Always consult with licensed professionals before making financial decisions. 
                  See our <Link href="/disclaimer" className="text-cyber-blue hover:text-cyber-green transition-colors">full disclaimer</Link> for details.
                </p>
              </div>

              {/* Connect */}
              <h2 className="text-3xl font-bold mb-6 text-cyber-purple">Let's Connect</h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                If you're on a similar journey—especially if you're starting "late" or you're a business owner 
                trying to figure out FIRE—I'd love to hear from you. I'm learning as I go, and I'm sure you have 
                insights that would help me (and others reading this).
              </p>

              <p className="text-gray-300 leading-relaxed">
                This site is a work in progress, just like my FIRE journey. More calculators, more content, 
                and more real-world examples coming soon. Let's figure this out together.
              </p>

            </div>
          </div>

          {/* CTA Section */}
          <div className="card-cyber p-8 text-center bg-gradient-to-r from-cyber-purple/10 to-cyber-pink/10 border-cyber-purple">
            <h3 className="text-2xl font-bold mb-4 text-cyber-purple">Ready to Calculate Your FIRE Number?</h3>
            <p className="text-gray-300 mb-6">
              Use the tools I've built to run your own numbers and see where you stand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="btn-cyber bg-cyber-purple hover:bg-cyber-pink text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                FIRE Calculator
              </Link>
              <Link 
                href="/calculators/coast-fire"
                className="btn-cyber bg-cyber-blue hover:bg-cyber-green text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Coast FIRE Calculator
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
