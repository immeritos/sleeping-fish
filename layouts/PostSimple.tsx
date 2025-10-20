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
        <div className="pt-20">
          <header className="mb-8">
            <div className="text-center">
              <h1 className="text-2xl font-normal text-foreground mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>{title}</h1>
              <time dateTime={date} className="text-sm text-muted-foreground">
                {formatDate(date, siteMetadata.locale)}
              </time>
            </div>
          </header>
          <div className="prose dark:prose-invert max-w-none">
            {children}
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
