'use client'

import { legalDisclaimer } from '@/lib/legal'

interface DisclaimerProps {
  variant?: 'short' | 'calculator' | 'educational'
  className?: string
}

export default function Disclaimer({ variant = 'short', className = '' }: DisclaimerProps) {
  const getMessage = () => {
    switch (variant) {
      case 'calculator':
        return legalDisclaimer.calculator
      case 'educational':
        return legalDisclaimer.educational
      default:
        return legalDisclaimer.short
    }
  }

  return (
    <div className={`text-xs text-gray-500 p-3 bg-cyber-dark/30 border border-cyber-purple/20 rounded ${className}`}>
      <span className="text-cyber-yellow">⚠️ Disclaimer:</span> {getMessage()}
    </div>
  )
}
