"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { HamburgerMenuIcon, Cross1Icon, SunIcon, MoonIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-background">
      <div className="container flex h-14 items-center">
        {/* Logo/Brand - Desktop */}
        <div className="hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 64 64" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-foreground"
            >
              {/* Thin Outer Circle */}
              <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" fill="none"/>
              
              {/* Mountain */}
              <polygon points="12,44 32,18 52,44" fill="currentColor"/>
              
              {/* Moon */}
              <circle cx="45" cy="18" r="4" fill="currentColor"/>
            </svg>
            <div className="font-normal flex flex-col leading-tight text-center" style={{ fontSize: '10px' }}>
              <span>Day</span>
              <span>Moon</span>
            </div>
          </Link>
        </div>

        {/* Logo/Brand - Mobile */}
        <div className="flex md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 64 64" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-foreground"
            >
              {/* Thin Outer Circle */}
              <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" fill="none"/>
              
              {/* Mountain */}
              <polygon points="12,44 32,18 52,44" fill="currentColor"/>
              
              {/* Moon */}
              <circle cx="45" cy="18" r="4" fill="currentColor"/>
            </svg>
            <div className="font-normal flex flex-col leading-tight text-center" style={{ fontSize: '10px' }}>
              <span>Day</span>
              <span>Moon</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{ fontSize: '12px' }}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{ fontSize: '12px' }}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/photography" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{ fontSize: '12px' }}>
                    Photography
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{ fontSize: '12px' }}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:flex w-[100px] justify-end">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button and Theme Toggle - Right aligned */}
        <div className="flex md:hidden ml-auto items-center space-x-2">
          <ThemeToggle />
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <Cross1Icon className="h-4 w-4" />
            ) : (
              <HamburgerMenuIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4">
            <nav className="flex flex-col space-y-3">
              <MobileNavLink
                href="/projects"
                pathname={pathname}
                onClick={closeMobileMenu}
              >
                Projects
              </MobileNavLink>
              <MobileNavLink
                href="/blog"
                pathname={pathname}
                onClick={closeMobileMenu}
              >
                Blog
              </MobileNavLink>
              <MobileNavLink
                href="/photography"
                pathname={pathname}
                onClick={closeMobileMenu}
              >
                Photography
              </MobileNavLink>
              <MobileNavLink
                href="/about"
                pathname={pathname}
                onClick={closeMobileMenu}
              >
                About
              </MobileNavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

interface MobileNavLinkProps {
  href: string
  pathname: string
  children: React.ReactNode
  onClick: () => void
}

function MobileNavLink({ href, pathname, children, onClick }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group inline-flex w-max items-center justify-center rounded-full bg-background px-4 py-1 text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
        pathname === href ? "bg-accent/50" : ""
      )}
    >
      {children}
    </Link>
  )
}