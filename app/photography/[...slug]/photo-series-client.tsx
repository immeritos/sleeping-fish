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
    <div className="h-screen flex flex-col pt-20 overflow-hidden">
      {/* Main Photo Display - Centered between navigation and thumbnails */}
      <div className="flex-1 flex items-center justify-center px-4 min-h-0">
        <div className="flex items-center justify-center gap-1 md:gap-8 w-full h-full">
          {/* Left Arrow - Fixed size */}
          <button
            onClick={goToPrevious}
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
            aria-label="Previous photo"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          {/* Square Container - Centered and responsive to available space */}
          <div className="aspect-square max-h-full max-w-full flex items-center justify-center overflow-hidden">
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
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
            aria-label="Next photo"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Thumbnail Gallery - Fixed at bottom with consistent spacing */}
      <div className="flex gap-1 overflow-x-auto pb-6 pt-6 justify-center px-4 flex-shrink-0 scrollbar-hide" style={{ 
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none', 
        WebkitOverflowScrolling: 'touch',
        overflowX: 'auto',
        overflowY: 'hidden'
      }}>
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
