import 'css/prism.css'
import 'katex/dist/katex.css'

import React from 'react'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { allProjects } from 'contentlayer/generated'
import type { Project } from 'contentlayer/generated'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const project = allProjects.find((p) => p.slug === slug)
  if (!project) {
    return
  }

  const publishedAt = new Date(project.date).toISOString()

  return {
    title: `${project.title} | Sleeping Fish`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      url: './',
      images: [
        {
          url: project.coverImage.includes('http')
            ? project.coverImage
            : siteMetadata.siteUrl + project.coverImage,
        },
      ],
      authors: [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.coverImage],
    },
  }
}

export const generateStaticParams = async () => {
  return allProjects.map((p) => ({ slug: [p.slug] }))
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  const project = allProjects.find((p) => p.slug === slug) as Project

  if (!project || project.draft) {
    return notFound()
  }

  return (
    <div className="mx-auto px-4 pt-24 md:pt-32 pb-16">
      <div className="max-w-3xl mx-auto">
        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-medium mb-4">
            {project.title}
          </h1>
          <p className="text-lg font-light text-muted-foreground mb-4">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="text-lg font-light text-foreground">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* External Link */}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg font-light text-foreground hover:text-muted-foreground transition-colors"
            >
              View Project →
            </a>
          )}
        </div>

        {/* MDX Content - matched to blog layout typography */}
        <article
          className="prose max-w-none text-lg font-light dark:prose-invert
                     prose-headings:font-medium prose-h1:text-xl prose-h2:text-xl prose-h3:text-[18px]
                     prose-h2:font-medium prose-h3:font-medium
                     prose-a:underline prose-a:decoration-1 prose-a:text-inherit prose-a:font-light
                     prose-strong:font-medium
                     prose-li:font-light prose-li:my-1 prose-li:leading-snug
                     prose-ul:font-light prose-ul:mt-2 prose-ul:mb-2
                     prose-ol:font-light prose-ol:mt-2 prose-ol:mb-2"
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
          <MDXLayoutRenderer code={project.body.code} components={components} />
        </article>
      </div>
    </div>
  )
}

