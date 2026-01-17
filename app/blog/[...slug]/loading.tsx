import SectionContainer from '@/components/blog/SectionContainer'

export default function BlogDetailLoading() {
  return (
    <SectionContainer>
      <article className="xl:divide-y xl:divide-border animate-pulse animate-in fade-in duration-300">
        {/* Title Section */}
        <header className="pt-6 xl:pb-6 space-y-4">
          <div className="space-y-3">
            <div className="h-12 w-3/4 bg-muted rounded" />
            <div className="h-12 w-1/2 bg-muted rounded" />
          </div>
          <div className="flex items-center gap-4 pt-2">
            <div className="h-[14px] w-32 bg-muted/50 rounded" />
          </div>
        </header>

        {/* Content Section */}
        <div className="divide-y divide-border xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pt-10 pb-8 space-y-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-full bg-muted/70 rounded" />
                <div className="h-4 w-full bg-muted/70 rounded" />
                <div className="h-4 w-4/5 bg-muted/70 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Section */}
        <footer className="pt-6 xl:pt-8">
          <div className="flex justify-between gap-8">
            <div className="w-1/2 space-y-2">
              <div className="h-4 w-20 bg-muted/50 rounded" />
              <div className="h-6 w-full bg-muted rounded" />
            </div>
            <div className="w-1/2 space-y-2">
              <div className="h-4 w-16 bg-muted/50 rounded" />
              <div className="h-6 w-full bg-muted rounded" />
            </div>
          </div>
        </footer>
      </article>
    </SectionContainer>
  )
}
