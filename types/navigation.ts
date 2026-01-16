/**
 * Navigation Types
 * Type definitions for navigation-related components
 */

// Navigation link
export interface NavLink {
  href: string
  label: string
  external?: boolean
}

// Navigation menu item
export interface NavMenuItem {
  href: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
  badge?: string
}

// Navigation props
export interface NavigationProps {
  links?: NavLink[]
  className?: string
}

// Mobile navigation props
export interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  links: NavLink[]
}

// Nav link component props
export interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
}

// Breadcrumb item
export interface BreadcrumbItem {
  label: string
  href?: string
}

// Breadcrumb props
export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: string
}
