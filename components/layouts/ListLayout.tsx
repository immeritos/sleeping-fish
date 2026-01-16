'use client'

import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/blog/Link'
import SectionContainer from '@/components/blog/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import { PaginationProps } from '@/types'

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const lastSegment = segments[segments.length - 1]
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+\/?$/, '') // Remove any trailing /page
    .replace(/\/$/, '') // Remove trailing slash
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  // Display initial posts if provided, otherwise show all posts
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <SectionContainer>
      <div>
        {title && (
          <div className="space-y-2 pb-8 md:space-y-5 border-b border-border">
            <h1
              className="text-5xl leading-tight font-medium tracking-tight text-foreground font-serif"
            >
              {title}
            </h1>
          </div>
        )}
        <ul>
          {!displayPosts.length && 'No posts found.'}
          {displayPosts.map((post) => {
            const { path, date, title, summary } = post
            return (
              <li key={path} className="py-6">
                <article className="space-y-3 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 xl:gap-4">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-xs font-medium uppercase tracking-extra-wide text-muted-foreground/60">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-serif font-medium tracking-tight">
                        <Link href={`/${path}`} className="text-foreground hover:opacity-60 transition-opacity">
                          {title}
                        </Link>
                      </h3>
                    </div>
                    <p className="text-base font-inter text-muted-foreground leading-loose line-clamp-2">
                      {summary}
                    </p>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </SectionContainer>
  )
}