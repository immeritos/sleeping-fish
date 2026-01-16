/**
 * Blog Types
 * Type definitions for blog-related features
 */

// Core blog post type (from Contentlayer)
export interface BlogPost {
  slug: string
  title: string
  date: string
  lastmod?: string
  draft?: boolean
  summary?: string
  images?: string[]
  layout?: string
  bibliography?: string
  canonicalUrl?: string
  body: {
    code: string
    raw: string
  }
  toc?: any[]
  readingTime?: {
    text: string
    minutes: number
    time: number
    words: number
  }
  structuredData?: any
}

// Core content (simplified blog post)
export interface BlogCoreContent {
  slug: string
  title: string
  date: string
  lastmod?: string
  summary?: string
  images?: string[]
  tags?: string[]
  draft?: boolean
  path?: string
  filePath?: string
}

// Blog list layout props
export interface BlogListLayoutProps {
  posts: BlogCoreContent[]
  title: string
  initialDisplayPosts?: BlogCoreContent[]
  pagination?: {
    currentPage: number
    totalPages: number
  }
}

// Blog post layout props
export interface BlogPostLayoutProps {
  content: BlogCoreContent
  children: React.ReactNode
  next?: BlogCoreContent
  prev?: BlogCoreContent
}

// Comment configuration
export interface CommentConfig {
  provider: 'giscus' | 'utterances' | 'disqus'
  giscusConfig?: {
    repo: string
    repositoryId: string
    category: string
    categoryId: string
    mapping: string
    reactions: string
    metadata: string
    theme: string
    darkTheme: string
    themeURL: string
    lang: string
  }
}
