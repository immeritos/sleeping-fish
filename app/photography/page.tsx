import Link from 'next/link'
import Image from 'next/image'
import { getAllPhotoSeries } from '@/lib/photography'

export default async function PhotographyPage() {
  const photoSeries = await getAllPhotoSeries()

  return (
    <div className="mx-auto px-4 pt-20 pb-16">
      {/* Main Gallery Grid - 2 photos per row on mobile, 3 on larger screens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-w-4xl mx-auto">
        {photoSeries.map((series) => (
          <Link key={series.id} href={`/photography/${series.id}`}>
            <div className="aspect-square relative overflow-hidden hover:opacity-80 transition-opacity duration-200">
              <Image
                src={series.coverImage}
                alt={series.title}
                fill
                className="object-cover"
                quality={100}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
