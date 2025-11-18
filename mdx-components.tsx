import type { MDXComponents } from 'mdx/types';
import CompoundInterestSlider from './components/CompoundInterestSlider';
import TimeToFICalculator from './components/TimeToFICalculator';
import TaxDragCalculator from './components/TaxDragCalculator';
import ProductCard from './components/ProductCard';
import AdSlot from './components/AdSlot';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    CompoundInterestSlider,
    TimeToFICalculator,
    TaxDragCalculator,
    ProductCard,
    AdSlot,
    ...components,
  };
}
