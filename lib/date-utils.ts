/**
 * Format date to readable string
 * @param date - Date string or Date object
 * @param format - Format style (default: 'long')
 */
export function formatDate(
  date: string | Date,
  format: 'short' | 'medium' | 'long' | 'full' = 'long'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const optionsMap: Record<string, Intl.DateTimeFormatOptions> = {
    short: { year: 'numeric', month: 'numeric', day: 'numeric' },
    medium: { year: 'numeric', month: 'short', day: 'numeric' },
    long: { year: 'numeric', month: 'long', day: 'numeric' },
    full: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
  };

  const options = optionsMap[format];

  return dateObj.toLocaleDateString('en-US', options);
}

/**
 * Get relative time string (e.g., "2 days ago")
 * @param date - Date string or Date object
 */
export function getRelativeTime(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };
  
  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      return interval === 1 ? `1 ${unit} ago` : `${interval} ${unit}s ago`;
    }
  }
  
  return 'just now';
}

/**
 * Parse ISO date string
 * @param dateString - ISO date string
 */
export function parseISODate(dateString: string): Date {
  return new Date(dateString);
}

/**
 * Get reading time estimate
 * @param content - Article content
 * @param wordsPerMinute - Average reading speed (default: 200)
 */
export function getReadingTime(content: string, wordsPerMinute: number = 200): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
