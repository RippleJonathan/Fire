import Link from 'next/link';

const calculators = [
  {
    slug: 'compound-interest',
    title: 'Compound Interest Calculator',
    description: 'Calculate the future value of your investments with compound interest.',
    icon: '💰',
  },
  {
    slug: 'fire-number',
    title: 'FIRE Number Calculator',
    description: 'Determine how much you need to achieve financial independence.',
    icon: '🔥',
  },
];

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Financial Calculators
          </h1>
          <p className="text-xl text-gray-300">
            Data-driven tools to plan your financial independence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {calculators.map((calc) => (
            <Link key={calc.slug} href={`/calculators/${calc.slug}`} className="block group">
              <div className="bg-gradient-to-br from-purple-900/50 to-slate-800 rounded-lg p-8 h-full hover:from-purple-800/50 hover:to-slate-700 transition-all border border-purple-500/20">
                <div className="text-6xl mb-4">{calc.icon}</div>
                <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {calc.title}
                </h2>
                <p className="text-gray-300">{calc.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
