import type { MDXComponents } from 'mdx/types'
import CompoundInterestCalculator from '@/components/CompoundInterestCalculator'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    CompoundInterestCalculator,
    ...components,
  }
}
