import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { legalDisclaimer, complianceNotices, certifications, regulatoryCompliance } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Legal Disclaimer & Terms of Use',
  description: 'Important legal information about using Fire Driven Media. Not financial advice - for educational purposes only.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function DisclaimerPage() {
  return (
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

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-cyber font-black mb-6 text-cyber-purple">
          Legal Disclaimer & Terms of Use
        </h1>
        
        <div className="mb-8 p-6 bg-cyber-yellow/10 border-2 border-cyber-yellow/50 rounded-lg">
          <p className="text-lg font-bold text-cyber-yellow mb-2">⚠️ Important Notice</p>
          <p className="text-gray-300">
            Please read this disclaimer carefully before using this website. By accessing and using Fire Driven Media, 
            you acknowledge that you have read, understood, and agree to be bound by these terms.
          </p>
        </div>

        <div className="space-y-8 text-gray-300">
          {/* Main Disclaimer */}
          <section className="card-cyber">
            <h2 className="text-2xl font-cyber font-bold text-cyber-blue mb-4">
              Not Financial Advice
            </h2>
            <div className="space-y-3 text-sm leading-relaxed">
              {legalDisclaimer.full.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.replace(/\*\*/g, '')}</p>
              ))}
            </div>
          </section>

          {/* Professional Certification */}
          <section className="card-cyber">
            <h2 className="text-2xl font-cyber font-bold text-cyber-blue mb-4">
              Professional Certification
            </h2>
            <div className="space-y-3 text-sm">
              <p className="text-cyber-yellow font-bold">{certifications.notCertified}</p>
              <p>{certifications.educational}</p>
            </div>
          </section>

          {/* SEC & Regulatory Compliance */}
          <section className="card-cyber">
            <h2 className="text-2xl font-cyber font-bold text-cyber-blue mb-4">
              SEC & Regulatory Compliance
            </h2>
            <div className="space-y-3 text-sm">
              <p>{regulatoryCompliance.noSecRegistration}</p>
              <p>{regulatoryCompliance.noInvestmentAdvice}</p>
              <p className="text-xs text-gray-500">{regulatoryCompliance.performanceDisclaimer}</p>
            </div>
          </section>

          {/* Calculator Disclaimer */}
          <section className="card-cyber">
            <h2 className="text-2xl font-cyber font-bold text-cyber-blue mb-4">
              Calculator & Tool Disclaimer
            </h2>
            <div className="space-y-3 text-sm">
              <p>{legalDisclaimer.calculator}</p>
              <p className="text-cyber-pink">
                <strong>Important:</strong> Calculators use simplified assumptions and historical averages. 
                Real-world results will differ. Market returns are not guaranteed and can be negative for extended periods.
              </p>
            </div>
          </section>

          {/* Privacy & Data */}
          <section className="card-cyber">
            <h2 className="text-2xl font-cyber font-bold text-cyber-blue mb-4">
              Privacy & Your Data
            </h2>
            <div className="space-y-3 text-sm">
              <p>{complianceNotices.dataPrivacy}</p>
              <p className="text-cyber-green">
                ✓ No personal information collected<br />
                ✓ Calculations performed in your browser<br />
                ✓ No data sent to our servers<br />
                ✓ No tracking of financial information
              </p>
            </div>
          </section>

          {/* Affiliate Links */}
          <section className="card-cyber">
            <h2 className="text-2xl font-cyber font-bold text-cyber-blue mb-4">
              Affiliate & Endorsement Disclosure
            </h2>
            <div className="space-y-3 text-sm">
              <p>{complianceNotices.affiliate}</p>
              <p>{complianceNotices.noEndorsement}</p>
            </div>
          </section>

          {/* Investment Risks */}
          <section className="card-cyber bg-cyber-pink/5 border-cyber-pink/30">
            <h2 className="text-2xl font-cyber font-bold text-cyber-pink mb-4">
              ⚠️ Investment Risks
            </h2>
            <div className="space-y-2 text-sm">
              <p className="font-bold">All investments involve risk, including:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Loss of principal investment</li>
                <li>Market volatility and downturns</li>
                <li>Inflation risk</li>
                <li>Interest rate risk</li>
                <li>Currency risk (international investments)</li>
                <li>Liquidity risk</li>
                <li>Concentration risk</li>
              </ul>
              <p className="text-cyber-yellow mt-3">
                Past performance does not guarantee future results. You may lose some or all of your invested capital.
              </p>
            </div>
          </section>

          {/* Who Should You Consult */}
          <section className="card-cyber bg-cyber-green/5 border-cyber-green/30">
            <h2 className="text-2xl font-cyber font-bold text-cyber-green mb-4">
              ✓ Consult Qualified Professionals
            </h2>
            <div className="space-y-3 text-sm">
              <p>Before making any financial decisions, consult with licensed professionals:</p>
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div className="bg-cyber-dark/50 p-3 rounded">
                  <p className="font-bold text-cyber-green">Certified Financial Planner (CFP®)</p>
                  <p className="text-xs text-gray-400">For comprehensive financial planning</p>
                </div>
                <div className="bg-cyber-dark/50 p-3 rounded">
                  <p className="font-bold text-cyber-green">Certified Public Accountant (CPA)</p>
                  <p className="text-xs text-gray-400">For tax planning and preparation</p>
                </div>
                <div className="bg-cyber-dark/50 p-3 rounded">
                  <p className="font-bold text-cyber-green">Registered Investment Advisor (RIA)</p>
                  <p className="text-xs text-gray-400">For investment advice and portfolio management</p>
                </div>
                <div className="bg-cyber-dark/50 p-3 rounded">
                  <p className="font-bold text-cyber-green">Estate Planning Attorney</p>
                  <p className="text-xs text-gray-400">For estate and legal matters</p>
                </div>
              </div>
            </div>
          </section>

          {/* Updates & Changes */}
          <section className="card-cyber">
            <h2 className="text-2xl font-cyber font-bold text-cyber-blue mb-4">
              Updates & Changes
            </h2>
            <div className="space-y-3 text-sm">
              <p>
                We may update this disclaimer from time to time. Your continued use of the website 
                constitutes acceptance of any changes. Please review this page periodically.
              </p>
              <p className="text-xs text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </section>

          {/* Copyright */}
          <section className="text-center text-sm text-gray-500 py-6">
            <p>{complianceNotices.copyright}</p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/" className="btn-cyber">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}
