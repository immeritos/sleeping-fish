import { GallerySkeleton } from '@/components/skeleton/GallerySkeleton'

export default function PhotographyLoading() {
  return (
    <div className="mx-auto px-4 pt-24 md:pt-32 pb-16">
      <GallerySkeleton columns={3} count={12} />
    </div>
  )
}
