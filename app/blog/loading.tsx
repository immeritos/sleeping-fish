import { CardSkeleton } from '@/components/skeleton/CardSkeleton'
import SectionContainer from '@/components/blog/SectionContainer'

export default function BlogLoading() {
  return (
    <SectionContainer>
      <div className="animate-in fade-in duration-300">
        <CardSkeleton count={5} layout="list" />
      </div>
    </SectionContainer>
  )
}