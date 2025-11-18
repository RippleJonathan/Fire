'use client';

interface ProductCardProps {
  name: string;
  description: string;
  stats: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  link: string;
  linkText?: string;
}

export default function ProductCard({ 
  name, 
  description, 
  stats, 
  pros, 
  cons, 
  link,
  linkText = 'Deploy →'
}: ProductCardProps) {
  return (
    <div className="my-8 p-6 rounded-lg border-2 border-[var(--neon-cyan)] bg-[var(--card-bg)] shadow-lg hover:shadow-[0_0_20px_var(--neon-cyan)] transition-all duration-300">
      <h3 className="text-2xl font-bold mb-2 text-[var(--neon-cyan)]">{name}</h3>
      <p className="text-[var(--foreground)] mb-6">{description}</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-3 rounded border border-[var(--border-color)] bg-[var(--background)]">
            <div className="text-xs text-[var(--foreground)] mb-1">{stat.label}</div>
            <div className="text-lg font-bold text-[var(--neon-yellow)]">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-sm font-bold text-[var(--terminal-green)] mb-2">✓ Pros</h4>
          <ul className="space-y-1 text-sm">
            {pros.map((pro, index) => (
              <li key={index} className="text-[var(--foreground)]">• {pro}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-[var(--neon-magenta)] mb-2">✗ Cons</h4>
          <ul className="space-y-1 text-sm">
            {cons.map((con, index) => (
              <li key={index} className="text-[var(--foreground)]">• {con}</li>
            ))}
          </ul>
        </div>
      </div>

      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-3 px-6 rounded-lg bg-[var(--neon-cyan)] text-[var(--background)] font-bold hover:bg-[var(--neon-magenta)] transition-colors duration-300"
      >
        {linkText}
      </a>
    </div>
  );
}
