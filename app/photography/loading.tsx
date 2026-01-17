import { CardSkeleton } from '@/components/skeleton/CardSkeleton'

export default function PhotographyLoading() {
  return (
    <div className="mx-auto px-4 pt-24 md:pt-32 pb-16 animate-in fade-in duration-300">
      <CardSkeleton count={9} layout="photo" />
    </div>
  )
}
