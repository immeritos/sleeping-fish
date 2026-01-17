interface CardSkeletonProps {
  count?: number
  layout?: "list" | "grid" | "photo"
}

export function CardSkeleton({ count = 5, layout = "list" }: CardSkeletonProps) {
  const skeletons = Array.from({ length: count }, (_, i) => i)
  
  // Photo grid layout (for photography page)
  if (layout === "photo") {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-w-4xl mx-auto animate-pulse animate-in fade-in duration-300">
        {skeletons.map((i) => (
          <div
            key={i}
            className="aspect-square bg-muted rounded"
          />
        ))}
      </div>
    )
  }
  
  // Project grid layout
  if (layout === "grid") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-pulse animate-in fade-in duration-300">
        {skeletons.map((i) => (
          <div
            key={i}
            className="space-y-4"
          >
            {/* Image placeholder - 16:9 aspect ratio */}
            <div className="relative aspect-video w-full bg-muted rounded-lg" />
            
            {/* Title */}
            <div className="h-8 w-3/4 bg-muted rounded" />
            
            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted/70 rounded" />
              <div className="h-4 w-5/6 bg-muted/70 rounded" />
            </div>
            
            {/* Tags */}
            <div className="flex gap-2 pt-1">
              <div className="h-[14px] w-16 bg-muted/50 rounded" />
              <div className="h-[14px] w-20 bg-muted/50 rounded" />
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  // List layout (for blog)
  return (
    <ul className="animate-pulse animate-in fade-in duration-300">
      {skeletons.map((i) => (
        <li
          key={i}
          className="py-6"
        >
          <article className="space-y-3 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 xl:gap-4">
            {/* Date placeholder */}
            <div className="h-[14px] w-24 bg-muted/50 rounded" />
            
            <div className="space-y-3 xl:col-span-3">
              {/* Title */}
              <div className="h-8 w-3/4 bg-muted rounded" />
              
              {/* Summary */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-muted/70 rounded" />
                <div className="h-4 w-5/6 bg-muted/70 rounded" />
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}