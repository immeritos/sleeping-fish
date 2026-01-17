import { HeroSkeleton } from '@/components/skeleton/HeroSkeleton'

export default function HomeLoading() {
  return (
    <section className="container mx-auto px-4 min-h-[calc(100vh-3.5rem)] mt-16 pt-4 md:pt-8 pb-20 animate-in fade-in duration-300">
      <HeroSkeleton />
    </section>
  )
}
