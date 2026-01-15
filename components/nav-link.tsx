import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        // Base styles
        "relative inline-block",
        "font-sans uppercase tracking-[0.15em] text-[14px] font-medium",
        "py-6 px-4",
        "text-foreground",
        "transition-colors",
        className
      )}
    >
      <span className="nav-link-with-underline">
        {children}
      </span>
    </Link>
  )
}
