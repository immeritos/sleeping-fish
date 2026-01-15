import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  slug: string
  title: string
  description: string
  coverImage: string
  tags?: string[]
}

export default function ProjectCard({ slug, title, description, coverImage, tags }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block group">
      {/* Cover Image - 16:9 aspect ratio */}
      <div className="relative aspect-video w-full overflow-hidden mb-4">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-opacity group-hover:opacity-80"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h2 className="text-2xl font-serif font-medium text-foreground group-hover:opacity-60 transition-opacity">
          {title}
        </h2>
        <p className="text-base font-inter text-muted-foreground leading-loose line-clamp-2">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-sans font-medium uppercase tracking-extra-wide text-muted-foreground/60">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}

