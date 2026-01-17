export default function ProjectDetailLoading() {
  return (
    <div className="mx-auto px-4 pt-24 md:pt-32 pb-16 max-w-4xl animate-pulse animate-in fade-in duration-300">
      <article className="space-y-8">
        {/* Cover Image */}
        <div className="relative w-full aspect-video bg-muted rounded-lg" />
        
        {/* Title */}
        <div className="space-y-3">
          <div className="h-10 w-3/4 bg-muted rounded" />
          <div className="h-10 w-1/2 bg-muted rounded" />
        </div>
        
        {/* Date and Tags */}
        <div className="flex items-center gap-4">
          <div className="h-[14px] w-32 bg-muted/50 rounded" />
          <div className="flex gap-2">
            <div className="h-[14px] w-16 bg-muted/50 rounded" />
            <div className="h-[14px] w-20 bg-muted/50 rounded" />
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-4 pt-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-full bg-muted/70 rounded" />
              <div className="h-4 w-full bg-muted/70 rounded" />
              <div className="h-4 w-4/5 bg-muted/70 rounded" />
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}