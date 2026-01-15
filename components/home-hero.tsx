import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

interface CategoryTagProps {
  label: string
  className?: string
}

function CategoryTag({ label, className }: CategoryTagProps) {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      <span className="font-sans uppercase tracking-[0.2em] text-[14px] font-medium text-foreground/50 lg:order-2">
        {label}
      </span>
      <span className="flex-1 lg:flex-initial lg:w-5 h-0.5 bg-current text-foreground/40"></span>
    </div>
  )
}

interface HeroTitleProps {
  href?: string
  children: React.ReactNode
  className?: string
}

function HeroTitle({ href, children, className }: HeroTitleProps) {
  const baseClasses = "text-4xl lg:text-6xl font-serif font-bold leading-tight"
  
  if (href) {
    return (
      <h1 className={cn(baseClasses, className)}>
        <Link
          href={href}
          className="hero-title-with-underline hover:text-foreground/80 transition-colors inline-block lg:bg-hero-container lg:px-10 lg:py-4 lg:whitespace-nowrap"
        >
          {children}
        </Link>
      </h1>
    )
  }
  
  return (
    <h1 className={cn(baseClasses, className)}>
      {children}
    </h1>
  )
}

interface HeroSummaryProps {
  children: React.ReactNode
  className?: string
}

function HeroSummary({ children, className }: HeroSummaryProps) {
  return (
    <p className={cn(
      "text-base lg:text-lg font-serif text-muted-foreground leading-relaxed tracking-wide lg:pl-10 lg:pr-5",
      className
    )}>
      {children}
    </p>
  )
}

interface HeroDateProps {
  date: string
  className?: string
}

function HeroDate({ date, className }: HeroDateProps) {
  return (
    <time 
      dateTime={date} 
      className={cn(
        "block text-xs lg:text-sm font-serif text-muted-foreground/70 tracking-wider lg:pl-10 lg:pr-5",
        className
      )}
    >
      {formatDate(date, siteMetadata.locale)}
    </time>
  )
}

interface HeroContentProps {
  category: string
  title: string
  summary?: string
  date?: string
  titleHref?: string
  imageSrc: string
  imageAlt: string
}

export function HeroContent({ category, title, summary, date, titleHref, imageSrc, imageAlt }: HeroContentProps) {
  return (
    <>
      {/* Mobile Layout - Vertical */}
      <div className="flex lg:hidden flex-col w-full space-y-8">
        {/* Hero Image - First on mobile */}
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        
        {/* Content below image */}
        <div className="space-y-6">
          <CategoryTag label={category} />
          <HeroTitle href={titleHref}>
            {title}
          </HeroTitle>
          {summary && (
            <HeroSummary>
              {summary}
            </HeroSummary>
          )}
          {date && (
            <HeroDate date={date} />
          )}
        </div>
      </div>

      {/* Desktop Layout - Horizontal */}
      <div className="hidden lg:flex flex-row gap-0 items-center w-full">
        <div className="w-[40%] space-y-12 -mt-72 relative z-20 pointer-events-none">
          <CategoryTag label={category} className="pointer-events-auto" />
          <HeroTitle href={titleHref} className="pointer-events-auto relative z-10">
            {title}
          </HeroTitle>
          {summary && (
            <HeroSummary className="pointer-events-auto">
              {summary}
            </HeroSummary>
          )}
          {date && (
            <HeroDate date={date} className="pointer-events-auto" />
          )}
        </div>
        
        <div className="relative w-[60%] aspect-square overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </>
  )
}
