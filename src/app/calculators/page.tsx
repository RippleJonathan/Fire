import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FIRE Calculators - Financial Independence Tools',
  description: 'Interactive calculators for FIRE planning: compound interest, retirement savings, coast FIRE, and more.',
}

export default function CalculatorsPage() {
  const calculators = [
    {
      title: 'FIRE Calculator',
      description: 'Calculate your path to Financial Independence and determine when you can retire early.',
      link: '/#calculator',
      color: 'cyber-purple',
    },
    {
      title: 'Coast FIRE',
      description: 'Find out when you can stop saving and coast to retirement.',
      link: '/calculators/coast-fire',
      color: 'cyber-green',
    },
  ]

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

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-cyber font-black mb-6 text-center bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-green bg-clip-text text-transparent">
          FIRE CALCULATORS
        </h1>
        <p className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          Powerful tools to plan, track, and optimize your journey to Financial Independence
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {calculators.map((calc, index) => (
            <Link 
              key={index}
              href={calc.link}
              className="card-cyber group cursor-pointer hover:scale-105 transition-transform"
            >
              <h2 className={`text-3xl font-cyber font-bold text-${calc.color} mb-4 group-hover:cyber-glow transition-all`}>
                {calc.title}
              </h2>
              <p className="text-gray-400">
                {calc.description}
              </p>
              <div className={`mt-4 inline-block text-${calc.color} font-bold`}>
                Launch Calculator →
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
