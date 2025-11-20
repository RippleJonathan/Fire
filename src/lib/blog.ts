import fs from 'fs'
import path from 'path'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  author?: string
  readTime?: string
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        
        // Extract frontmatter
        const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/
        const match = frontmatterRegex.exec(fileContents)
        
        if (match) {
          const frontmatter = match[1]
          const metadata: any = {}
          
          frontmatter.split('\n').forEach((line) => {
            const [key, ...valueParts] = line.split(':')
            if (key && valueParts.length > 0) {
              const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '')
              metadata[key.trim()] = value
            }
          })
          
          return {
            slug,
            title: metadata.title || 'Untitled',
            excerpt: metadata.excerpt || '',
            date: metadata.date || new Date().toISOString().split('T')[0],
            category: metadata.category || 'General',
            author: metadata.author,
            readTime: metadata.readTime,
          }
        }
        
        return {
          slug,
          title: 'Untitled',
          excerpt: '',
          date: new Date().toISOString().split('T')[0],
          category: 'General',
        }
      })
      .sort((a, b) => (a.date > b.date ? -1 : 1))

    return posts
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts()
  return posts.find((post) => post.slug === slug) || null
}
