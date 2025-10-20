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

  return (
    <div className="h-screen flex flex-col pt-20">
      {/* Main Photo Display - Centered between navigation and thumbnails */}
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
          <div className="aspect-square max-h-[70vh] max-w-[70vh] min-w-[350px] min-h-[350px] flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={currentPhoto.imageUrl}
                alt={currentPhoto.alt}
                width={800}
                height={800}
                className="max-w-full max-h-full object-contain"
                quality={100}
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

      {/* Thumbnail Gallery - Fixed at bottom with consistent spacing */}
      <div className="flex gap-1 overflow-x-auto pb-8 pt-8 justify-center px-4 flex-shrink-0 max-h-[20vh] scrollbar-hide">
        {series.photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => setCurrentPhotoIndex(index)}
            className={`flex-shrink-0 w-16 h-16 overflow-hidden transition-all ${
              index === currentPhotoIndex ? 'opacity-100' : 'opacity-50 hover:opacity-75'
            }`}
          >
            <Image
              src={photo.imageUrl}
              alt={photo.alt}
              width={64}
              height={64}
              className="w-full h-full object-cover"
              quality={75}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
