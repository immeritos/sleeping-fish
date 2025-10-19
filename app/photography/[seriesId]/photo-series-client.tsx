'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { PhotoSeries } from '@/lib/photography'

interface PhotoSeriesClientProps {
  series: PhotoSeries
}

export function PhotoSeriesClient({ series }: PhotoSeriesClientProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  
  const currentPhoto = series.photos[currentPhotoIndex]
  const totalPhotos = series.photos.length

  const goToPrevious = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos)
  }

  const goToNext = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % totalPhotos)
  }

  const goToPhoto = (index: number) => {
    setCurrentPhotoIndex(index)
  }

  return (
    <div className="h-screen flex flex-col pt-20">
      {/* Main Photo Display - Fixed spacing, responsive photo size */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="flex items-center justify-center gap-8 w-full">
          {/* Left Arrow - Fixed size */}
          <button
            onClick={goToPrevious}
            className="w-24 h-24 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
            aria-label="Previous photo"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          {/* Square Container - Centered and responsive to window height */}
          <div className="aspect-square max-h-[60vh] max-w-[60vh] min-w-[300px] min-h-[300px] flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={currentPhoto.imageUrl}
                alt={currentPhoto.alt}
                width={800}
                height={800}
                className="max-w-full max-h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Arrow - Fixed size */}
          <button
            onClick={goToNext}
            className="w-24 h-24 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
            aria-label="Next photo"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Thumbnail Gallery - No scroll on small heights */}
      <div className="flex gap-1 overflow-x-auto pb-8 pt-4 justify-center px-4 flex-shrink-0 max-h-[20vh] scrollbar-hide">
        {series.photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => goToPhoto(index)}
            className={`flex-shrink-0 w-16 h-16 overflow-hidden border-2 transition-all ${
              index === currentPhotoIndex
                ? 'border-primary'
                : 'border-border hover:border-muted-foreground'
            }`}
          >
            <Image
              src={photo.imageUrl}
              alt={photo.alt}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
