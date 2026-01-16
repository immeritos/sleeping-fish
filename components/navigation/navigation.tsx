"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils/utils"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { NavLink } from "@/components/navigation/nav-link"

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Disable scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Close mobile menu when resizing to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen])

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className={cn(
        "w-full transition-colors duration-300",
        isMobileMenuOpen ? "bg-nav-mobile" : "bg-background"
      )}>
        <div className="container flex h-16 md:h-24 items-center relative z-50">
          {/* Logo/Brand - Desktop - Icon + Text */}
          <div className="hidden md:flex">
            <Link href="/" className="flex items-center group">
              <div className="relative transition-all duration-300 group-hover:scale-110">
                <Image 
                  src="/images/logo.png" 
                  alt="Sleeping Fish Logo" 
                  width={48}
                  height={48}
                  className="w-16 h-16 object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Mobile Layout - Three columns */}
          <div className="flex md:hidden w-full items-center">
            {/* Left: Menu Button */}
            <div className="flex-1 flex justify-start">
              <button
                className="inline-flex items-center justify-center rounded-md p-1.5 text-sm font-normal transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <div className="relative w-5 h-5">
                  <HamburgerMenuIcon 
                    className={cn(
                      "absolute inset-0 h-5 w-5 transition-all duration-300",
                      isMobileMenuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                    )} 
                  />
                  <Cross1Icon 
                    className={cn(
                      "absolute inset-0 h-5 w-5 transition-all duration-300",
                      isMobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                    )} 
                  />
                </div>
              </button>
            </div>

            {/* Center: Logo */}
            <div className="flex-1 flex justify-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/logo.png" 
                  alt="Sleeping Fish Logo" 
                  width={48} 
                  height={48}
                  className="w-10 h-10 object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Right: Theme Toggle - Hidden when menu is open */}
            <div className={cn(
              "flex-1 flex justify-end transition-opacity duration-300",
              isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            )}>
              <ThemeToggle />
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-6 lg:space-x-10">
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/photography">Photography</NavLink>
              <NavLink href="/about" className="tracking-[0.2em]">About</NavLink>
            </div>
          </nav>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex w-[100px] justify-end">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden fixed inset-0 bg-nav-mobile overflow-hidden transition-transform duration-500 ease-in-out z-40",
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="container px-4 pt-20 h-full">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink
                href="/projects"
                pathname={pathname}
                onClick={closeMobileMenu}
                isMenuOpen={isMobileMenuOpen}
                index={0}
              >
                Projects
              </MobileNavLink>
              <MobileNavLink
                href="/blog"
                pathname={pathname}
                onClick={closeMobileMenu}
                isMenuOpen={isMobileMenuOpen}
                index={1}
              >
                Blog
              </MobileNavLink>
              <MobileNavLink
                href="/photography"
                pathname={pathname}
                onClick={closeMobileMenu}
                isMenuOpen={isMobileMenuOpen}
                index={2}
              >
                Photography
              </MobileNavLink>
              <MobileNavLink
                href="/about"
                pathname={pathname}
                onClick={closeMobileMenu}
                isMenuOpen={isMobileMenuOpen}
                index={3}
              >
                About
              </MobileNavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

interface MobileNavLinkProps {
  href: string
  pathname: string
  children: React.ReactNode
  onClick: () => void
  isMenuOpen: boolean
  index: number
}

function MobileNavLink({ href, pathname, children, onClick, isMenuOpen, index }: MobileNavLinkProps) {
  const isActive = pathname === href
  
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        // Base styles - consistent with desktop
        "w-full text-center px-4 py-3 rounded-md",
        "font-sans uppercase tracking-[0.15em] text-[14px] font-medium",
        "transition-all duration-200",
        // Default state
        "text-foreground",
        // Hover state - amber text color
        "hover:text-[var(--amber-11)]",
        // Focus state
        "focus:outline-none",
        // Active state
        isActive && "text-[var(--amber-11)]",
        // Fade-in animation
        "transition-all duration-500",
        isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4"
      )}
      style={{
        transitionDelay: isMenuOpen ? `${100 + index * 80}ms` : '0ms'
      }}
    >
      {children}
    </Link>
  )
}
