import { notFound } from 'next/navigation'
import { PhotoSeriesClient } from './photo-series-client'
import { getAllPhotoSeriesIds, getPhotoSeriesById } from '@/lib/photography'

// Generate static params for all photo series
export async function generateStaticParams() {
  const seriesIds = await getAllPhotoSeriesIds()
  return seriesIds.map((seriesId) => ({
    slug: [seriesId],
  }))
}

// Main page component (server component)
export default async function PhotoSeriesPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const seriesId = slug[0]
  const series = await getPhotoSeriesById(seriesId)

  if (!series) {
    notFound()
  }

  return <PhotoSeriesClient series={series} />
}