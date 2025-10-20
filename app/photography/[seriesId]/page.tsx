import Link from 'next/link'
import { PhotoSeriesClient } from './photo-series-client'

// Generate static params for all photo series
export async function generateStaticParams() {
  const { getAllPhotoSeriesIds } = await import('@/lib/photography')
  const seriesIds = await getAllPhotoSeriesIds()
  return seriesIds.map((seriesId) => ({
    seriesId,
  }))
}

// Main page component (server component)
export default async function PhotoSeriesPage({ 
  params 
}: { 
  params: { seriesId: string } 
}) {
  const { getPhotoSeriesById } = await import('@/lib/photography')
  const series = await getPhotoSeriesById(params.seriesId)
  
  if (!series) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">
          Series not found
        </h1>
        <Link href="/photography">
          <button className="px-4 py-2 border rounded hover:bg-gray-50">
            ← Back to Photography
          </button>
        </Link>
      </div>
    )
  }
  
  return <PhotoSeriesClient series={series} />
}