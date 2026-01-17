export default function PhotoSeriesLoading() {
  return (
    <div className="h-screen flex flex-col pt-24 md:pt-32 overflow-hidden animate-in fade-in duration-300">
      {/* Main Photo Display Area */}
      <div className="flex-1 flex items-center justify-center px-4 min-h-0 animate-pulse">
        <div className="flex items-center justify-center gap-1 md:gap-8 w-full h-full">
          {/* Left Arrow placeholder */}
          <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-muted/30 rounded-full" />

          {/* Square Image Container */}
          <div className="aspect-square max-h-full max-w-full bg-muted rounded-lg" />

          {/* Right Arrow placeholder */}
          <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-muted/30 rounded-full" />
        </div>
      </div>

      {/* Thumbnail Gallery at bottom */}
      <div className="flex gap-1 pb-6 pt-6 justify-center px-4 flex-shrink-0 animate-pulse">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-16 h-16 bg-muted rounded"
          />
        ))}
      </div>
    </div>
  )
}
