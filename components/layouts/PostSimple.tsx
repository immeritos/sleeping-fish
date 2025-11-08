import React from 'react'
import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import SectionContainer from '@/components/blog/SectionContainer'
import siteMetadata from '@/data/siteMetadata'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostSimple({ content, next, prev, children }: LayoutProps) {
  const { path, slug, date, title } = content

  return (
    <SectionContainer>
      <article>
        <div>
          <header className="mb-8">
            <div className="text-center">
              <h1 className="text-2xl font-serif font-medium text-foreground mb-2">{title}</h1>
              <time dateTime={date} className="text-lg font-light text-[hsl(var(--foreground)/0.85)]">
                {formatDate(date, siteMetadata.locale)}
              </time>
            </div>
          </header>
          {/* MDX Typography */}
          <div
            className="prose max-w-none text-lg font-light dark:prose-invert
                       prose-headings:font-medium prose-h1:text-xl prose-h2:text-xl prose-h3:text-xl
                       prose-h2:font-medium prose-h3:font-medium
                       prose-a:underline prose-a:decoration-1 prose-a:text-inherit prose-a:font-light
                       prose-strong:font-medium
                       prose-li:font-light prose-li:marker:text-[hsl(var(--foreground)/0.85)] prose-li:marker:font-light
                       prose-ol:marker:text-[hsl(var(--foreground)/0.85)] prose-ol:marker:font-light
                       prose-li:my-1 prose-li:leading-snug
                       prose-ul:font-light prose-ul:mt-2 prose-ul:mb-2
                       prose-ol:font-light prose-ol:mt-2 prose-ol:mb-2"
            style={{
              '--tw-prose-body': 'hsl(var(--foreground) / 0.85)',
              '--tw-prose-headings': 'hsl(var(--foreground))',
              '--tw-prose-links': 'hsl(var(--foreground) / 0.85)',
              '--tw-prose-bullets': 'hsl(var(--foreground) / 0.85)',
              '--tw-prose-counters': 'hsl(var(--foreground) / 0.85)',
              '--tw-prose-bold': 'hsl(var(--foreground) / 0.85)',
              '--tw-prose-invert-body': 'hsl(var(--foreground) / 0.85)',
              '--tw-prose-invert-headings': 'hsl(var(--foreground))',
              '--tw-prose-invert-links': 'hsl(var(--foreground) / 0.85)',
              '--tw-prose-invert-bullets': 'hsl(var(--foreground) / 0.85)',
              '--tw-prose-invert-counters': 'hsl(var(--foreground) / 0.85)',
              '--tw-prose-invert-bold': 'hsl(var(--foreground) / 0.85)',
            } as React.CSSProperties}
          >
            {children}
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
