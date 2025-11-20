import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-cyber font-bold text-cyber-purple mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-cyber font-bold text-cyber-blue mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-cyber font-bold text-cyber-green mb-3 mt-6">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-300 mb-4 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-300">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-gray-300">
        {children}
      </li>
    ),
    strong: ({ children }) => (
      <strong className="text-cyber-purple font-bold">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="text-cyber-blue italic">
        {children}
      </em>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-cyber-purple pl-4 py-2 my-4 bg-cyber-dark/50 italic text-gray-400">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-cyber-dark text-cyber-green px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-cyber-dark border border-cyber-purple/30 p-4 rounded-lg overflow-x-auto my-4">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-cyber-blue hover:text-cyber-green underline transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ...components,
  }
}
