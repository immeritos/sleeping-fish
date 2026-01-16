/**
 * Common Types
 * Shared type definitions used across the application
 */

// Re-export all types for convenient importing
export * from './blog.js'
export * from './project.js'
export * from './photography.js'
export * from './navigation.js'
export * from './component.js'

/**
 * Utility Types
 */

// Generic pagination
export interface Pagination {
  currentPage: number
  totalPages: number
}

// Generic metadata
export interface Metadata {
  title: string
  description: string
  image?: string
  url?: string
}

// Site configuration
export interface SiteConfig {
  name: string
  description: string
  url: string
  locale: string
  author: string
  socialBanner: string
}

// Search result
export interface SearchResult {
  slug: string
  title: string
  summary?: string
  date: string
  tags?: string[]
}
