'use client'

import * as React from 'react'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils/utils'

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<'light' | 'dark' | null>(null)

  React.useEffect(() => {
    // Get initial theme from localStorage or system preference
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (stored) {
      setTheme(stored)
      document.documentElement.classList.toggle('dark', stored === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  // Don't render until theme is determined (avoid hydration mismatch)
  if (theme === null) {
    return (
      <div className="inline-flex items-center justify-center rounded-md p-1.5 md:p-2 w-8 h-8" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center rounded-md",
        "text-sm font-normal transition-colors",
        "p-1.5 md:p-2",
        "focus:outline-none",
        "disabled:pointer-events-none disabled:opacity-50",
        "opacity-70"
      )}
      aria-label="Toggle theme"
    >
      <SunIcon 
        className={cn(
          "h-4 w-4 transition-all",
          theme === 'dark' ? "rotate-90 scale-0" : "rotate-0 scale-100"
        )}
      />
      <MoonIcon 
        className={cn(
          "absolute h-4 w-4 transition-all",
          theme === 'dark' ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
