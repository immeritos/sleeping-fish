/**
 * Project Types
 * Type definitions for project-related features
 */

// Core project type (from Contentlayer)
export interface Project {
  slug: string
  title: string
  description: string
  date: string
  coverImage: string
  href?: string
  tags?: string[]
  draft?: boolean
  body: {
    code: string
    raw: string
  }
}

// Project card props
export interface ProjectCardProps {
  slug: string
  title: string
  description: string
  coverImage: string
  tags?: string[]
}

// Project list
export interface ProjectList {
  projects: Project[]
  totalCount: number
}

// Project metadata
export interface ProjectMetadata {
  title: string
  description: string
  coverImage: string
  technologies?: string[]
  repository?: string
  liveUrl?: string
}
