import React from 'react'
import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate.js'
import { CoreContent } from 'pliny/utils/contentlayer.js'
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
              <h1 className="text-5xl font-serif font-medium text-foreground mb-2">{title}</h1>
              <time dateTime={date} className="text-base font-sans text-muted-foreground">
                {formatDate(date, siteMetadata.locale)}
              </time>
            </div>
          </header>
          {/* MDX Typography */}
          <div
            className="prose max-w-none text-lg font-inter font-light dark:prose-invert
                       prose-headings:font-medium prose-h1:text-xl prose-h2:text-xl prose-h3:text-xl
                       prose-h2:font-medium prose-h3:font-medium
                       prose-p:leading-relaxed prose-p:mb-6
                       prose-a:underline prose-a:decoration-1 prose-a:text-inherit prose-a:font-light
                       prose-strong:font-medium
                       prose-li:font-light prose-li:my-2 prose-li:leading-relaxed
                       prose-ul:font-light prose-ul:mt-4 prose-ul:mb-6
                       prose-ol:font-light prose-ol:mt-4 prose-ol:mb-6
                       prose-headings:mt-12 prose-headings:mb-6"
            style={{
              '--tw-prose-body': 'var(--slate-11)',
              '--tw-prose-headings': 'var(--slate-12)',
              '--tw-prose-links': 'var(--slate-11)',
              '--tw-prose-bullets': 'var(--slate-11)',
              '--tw-prose-counters': 'var(--slate-11)',
              '--tw-prose-bold': 'var(--slate-12)',
              '--tw-prose-invert-body': 'var(--slate-11)',
              '--tw-prose-invert-headings': 'var(--slate-12)',
              '--tw-prose-invert-links': 'var(--slate-11)',
              '--tw-prose-invert-bullets': 'var(--slate-11)',
              '--tw-prose-invert-counters': 'var(--slate-11)',
              '--tw-prose-invert-bold': 'var(--slate-12)',
            } as React.CSSProperties}
          >
            {children}
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
