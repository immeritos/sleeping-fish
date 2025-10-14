"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Logo/Brand - Desktop */}
        <div className="hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg"
              alt="Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <div className="font-bold flex flex-col leading-tight text-center">
              <span>Day</span>
              <span>Moon</span>
            </div>
          </Link>
        </div>

        {/* Logo/Brand - Mobile */}
        <div className="flex md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg"
              alt="Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <div className="font-bold flex flex-col leading-tight text-center">
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
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/writings" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Writings
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/photography" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Photography
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop spacer to balance the layout */}
        <div className="hidden md:flex w-[100px]">
        </div>

        {/* Mobile Menu Button - Right aligned */}
        <div className="flex md:hidden ml-auto">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
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
        <div className="border-t md:hidden">
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
                href="/writings"
                pathname={pathname}
                onClick={closeMobileMenu}
              >
                Writings
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
        "block px-2 py-1 text-lg font-medium transition-colors hover:text-foreground/80",
        pathname === href ? "text-foreground" : "text-foreground/60"
      )}
    >
      {children}
    </Link>
  )
}