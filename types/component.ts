/**
 * Component Types
 * Shared component prop type definitions
 */

import { ReactNode } from 'react'

// Common component props
export interface BaseComponentProps {
  className?: string
  children?: ReactNode
}

// Hero component props
export interface HeroContentProps {
  category: string
  title: string
  summary?: string
  date?: string
  titleHref?: string
  imageSrc: string
  imageAlt: string
}

export interface HeroTitleProps {
  href?: string
  children: ReactNode
  className?: string
}

export interface HeroSummaryProps {
  children: ReactNode
  className?: string
}

export interface HeroDateProps {
  date: string
  className?: string
}

export interface CategoryTagProps {
  label: string
  className?: string
}

// Layout components
export interface PageTitleProps {
  children: ReactNode
}

export interface SectionContainerProps {
  children: ReactNode
  className?: string
}

// Footer props
export interface FooterProps {
  className?: string
}

// Image props (custom Next Image wrapper)
export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

// Table wrapper props
export interface TableWrapperProps {
  children: ReactNode
}

// Theme toggle props
export interface ThemeToggleProps {
  className?: string
}

// Card props
export interface CardProps {
  title: string
  description?: string
  image?: string
  href?: string
  children?: ReactNode
  className?: string
}

// Button variant types
export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

// Pagination props
export interface PaginationProps {
  totalPages: number
  currentPage: number
  basePath?: string
}
