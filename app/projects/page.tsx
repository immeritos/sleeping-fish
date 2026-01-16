import { allProjects } from 'contentlayer/generated'
import ProjectCard from '@/components/project/ProjectCard'

export const metadata = {
  title: 'Projects Archives - Sleeping Fish',
  description: 'A collection of projects I have worked on',
}

export default function Projects() {
  // Filter out drafts and sort by date
  const projects = allProjects
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="mx-auto px-4 pt-24 md:pt-32 pb-16">
      {/* Grid: 1 col on mobile, 2 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            description={project.description}
            coverImage={project.coverImage}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  )
}

