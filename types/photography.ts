/**
 * Photography Types
 * Type definitions for photography-related features
 */

// Single photo
export interface Photo {
  id: string
  title: string
  date: string
  imageUrl: string
  alt: string
}

// Photo series/album
export interface PhotoSeries {
  id: string
  title: string
  coverImage: string
  photos: Photo[]
  date: string
  description?: string
}

// Photo series client props
export interface PhotoSeriesClientProps {
  series: PhotoSeries
}

// Photo gallery props
export interface PhotoGalleryProps {
  photos: Photo[]
  columns?: number
}

// Photo metadata
export interface PhotoMetadata {
  camera?: string
  lens?: string
  aperture?: string
  shutterSpeed?: string
  iso?: string
  focalLength?: string
  location?: string
  date?: string
}
