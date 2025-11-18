/**
 * Format a date string to readable format
 * @param dateString - ISO date string or Date object
 * @returns Formatted date string
 */
export function formatDate(dateString: string | Date): string {
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Parse frontmatter from MDX content
 * @param content - MDX content with frontmatter
 * @returns Parsed frontmatter object
 */
export function parseFrontmatter(content: string): Record<string, string> {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return {};
  
  const frontmatter = match[1];
  const lines = frontmatter.split('\n');
  const result: Record<string, string> = {};
  
  lines.forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim();
      result[key.trim()] = value.replace(/^["']|["']$/g, '');
    }
  });
  
  return result;
}

/**
 * Calculate reading time
 * @param text - Text content
 * @returns Reading time in minutes
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
