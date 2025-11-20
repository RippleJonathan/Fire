'use client'

import Link from 'next/link'
import { getRelatedContent } from '@/lib/seo'

interface RelatedContentProps {
  keywords: string[]
  currentUrl?: string
  title?: string
  limit?: number
}

export default function RelatedContent({ 
  keywords, 
  currentUrl,
  title = 'Related Resources',
  limit = 3 
}: RelatedContentProps) {
  const related = getRelatedContent(keywords, limit + 3)
    .filter(item => item.url !== currentUrl) // Exclude current page
    .slice(0, limit)

  if (related.length === 0) {
    return null
  }

  return (
    <section className="mt-12 card-cyber bg-cyber-dark/30">
      <h3 className="text-2xl font-cyber font-bold text-cyber-blue mb-6">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {related.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="card-cyber hover:border-cyber-purple/60 transition-all group block"
          >
            <h4 className="font-cyber font-bold text-cyber-purple mb-2 group-hover:cyber-glow transition-all">
              {item.title}
            </h4>
            <p className="text-sm text-gray-400">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
