import { CardSkeleton } from '@/components/skeleton/CardSkeleton'

export default function PhotographyLoading() {
  return (
    <div className="mx-auto px-6 md:px-12 lg:px-16 pt-24 md:pt-32 pb-16 animate-in fade-in duration-300">
      <CardSkeleton count={10} layout="photo" />
    </div>
  )
}
