
export function HeroSkeleton() {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Mobile Layout */}
      <div className="flex lg:hidden flex-col w-full space-y-8 animate-pulse">
        {/* Image skeleton */}
        <div className="relative w-full overflow-hidden rounded-lg">
          <div className="w-full h-auto aspect-[4/3] bg-muted rounded-lg" />
        </div>
        
        {/* Content skeleton */}
        <div className="space-y-6">
          {/* Category tag */}
          <div className="flex items-center gap-5">
            <div className="h-[14px] w-24 bg-muted/50 rounded" />
            <div className="flex-1 h-0.5 bg-muted/50" />
          </div>
          
          {/* Title */}
          <div className="space-y-3">
            <div className="h-10 w-full bg-muted rounded" />
            <div className="h-10 w-4/5 bg-muted rounded" />
          </div>
          
          {/* Summary */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-muted/70 rounded" />
            <div className="h-4 w-full bg-muted/70 rounded" />
            <div className="h-4 w-3/4 bg-muted/70 rounded" />
          </div>
          
          {/* Date */}
          <div className="h-3 w-32 bg-muted/50 rounded" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row gap-0 items-center w-full animate-pulse">
        <div className="w-[40%] space-y-12 -mt-72 relative z-20">
          {/* Category tag */}
          <div className="flex items-center gap-5">
            <div className="h-[14px] w-28 bg-muted/50 rounded" />
            <div className="w-5 h-0.5 bg-muted/50" />
          </div>
          
          {/* Title */}
          <div className="space-y-4 lg:pl-10">
            <div className="h-14 w-full bg-muted rounded" />
            <div className="h-14 w-4/5 bg-muted rounded" />
          </div>
          
          {/* Summary */}
          <div className="space-y-3 lg:pl-10 lg:pr-5">
            <div className="h-5 w-full bg-muted/70 rounded" />
            <div className="h-5 w-full bg-muted/70 rounded" />
            <div className="h-5 w-3/4 bg-muted/70 rounded" />
          </div>
          
          {/* Date */}
          <div className="h-4 w-36 bg-muted/50 rounded lg:pl-10" />
        </div>
        
        {/* Image skeleton */}
        <div className="relative w-[60%] aspect-square rounded-lg bg-muted overflow-hidden" />
      </div>
    </div>
  )
}