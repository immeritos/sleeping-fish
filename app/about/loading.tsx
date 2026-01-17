export default function AboutLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 mx-auto px-4 pt-24 md:pt-32 max-w-2xl animate-pulse animate-in fade-in duration-300">
        <div className="flex flex-col items-center space-y-8">
          {/* Portrait skeleton - circular */}
          <div className="h-48 w-48 rounded-full bg-muted" />
          
          {/* Social Icons skeleton */}
          <div className="flex space-x-3">
            <div className="h-5 w-5 rounded-full bg-muted/70" />
            <div className="h-5 w-5 rounded-full bg-muted/70" />
            <div className="h-5 w-5 rounded-full bg-muted/70" />
          </div>

          {/* Bio text skeleton */}
          <div className="w-full space-y-2">
            <div className="h-4 w-full bg-muted/70 rounded" />
            <div className="h-4 w-full bg-muted/70 rounded" />
            <div className="h-4 w-3/4 bg-muted/70 rounded" />
          </div>
        </div>
      </div>
      
      {/* Footer placeholder */}
      <div className="h-16 bg-muted/30" />
    </div>
  )
}
