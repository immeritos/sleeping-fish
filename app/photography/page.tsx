import Link from 'next/link'
import Image from 'next/image'
import { getAllPhotoSeries } from '@/lib/photography'

// 启用 ISR，每60秒重新验证一次
export const revalidate = 60

export const metadata = {
  title: 'Photography Archives - Sleeping Fish',
  description: 'Photo series and collections',
}

export default async function PhotographyPage() {
  const photoSeries = await getAllPhotoSeries()

  return (
    <div className="mx-auto px-6 md:px-12 lg:px-16 pt-24 md:pt-32 pb-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
        {photoSeries.map((series) => (
          <Link 
            key={series.id} 
            href={`/photography/${series.id}`}
            className="block group"
          >
            <div className="relative w-full overflow-hidden bg-muted rounded-lg">
              <Image
                src={series.coverImage}
                alt={series.title}
                width={400}
                height={400}
                className="w-full h-auto transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-90"
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
            </div>
            <div className="mt-2 md:mt-3">
              <h3 className="text-sm md:text-base font-light text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                {series.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}