'use client'

import Image from 'next/image'
import { PhotoSeriesClientProps } from '@/types'

export function PhotoSeriesClient({ series }: PhotoSeriesClientProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Sidebar - Fixed Info */}
      <div className="md:w-2/5 lg:w-2/5 md:fixed md:h-screen pt-24 md:pt-32 pb-12 px-6 md:px-12 flex flex-col">
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-2xl md:text-3xl font-light tracking-tight">
            {series.title}
          </h1>
          
          <div className="space-y-1 text-sm md:text-base text-muted-foreground">
            <div>Photography</div>
            <div>{series.date}</div>
          </div>
        </div>
        
        {series.description && (
          <p className="mt-8 md:mt-12 text-sm md:text-base text-foreground/70 leading-relaxed">
            {series.description}
          </p>
        )}
      </div>

      {/* Right Side - Scrollable Photos */}
      <div className="md:ml-[45%] lg:ml-[45%] md:w-[55%] lg:w-[55%]">
        <div className="pt-6 md:pt-32 pb-16 px-3 md:px-6 space-y-8 md:space-y-12">
          {series.photos.map((photo) => (
            <div key={photo.id} className="w-full">
              <div className="relative w-full max-w-3xl bg-gray-100 dark:bg-gray-900">
                <Image
                  src={photo.imageUrl}
                  alt={photo.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
