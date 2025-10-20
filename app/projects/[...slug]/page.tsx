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

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const project = allProjects.find((p) => p.slug === slug)
  if (!project) {
    return
  }

  const publishedAt = new Date(project.date).toISOString()

  return {
    title: project.title,
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

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const project = allProjects.find((p) => p.slug === slug) as Project

  if (!project || project.draft) {
    return notFound()
  }

  return (
    <div className="mx-auto px-4 pt-20 pb-16">
      <div className="max-w-3xl mx-auto">
        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-medium mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">{project.description}</p>
          
          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="text-sm text-muted-foreground/60">
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
              className="inline-block text-sm text-foreground hover:text-muted-foreground transition-colors"
            >
              View Project →
            </a>
          )}
        </div>

        {/* MDX Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <MDXLayoutRenderer code={project.body.code} components={components} />
        </article>
      </div>
    </div>
  )
}

