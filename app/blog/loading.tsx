import { CardSkeleton } from '@/components/skeleton/CardSkeleton'
import SectionContainer from '@/components/blog/SectionContainer'

export default function BlogLoading() {
  return (
    <SectionContainer>
      <CardSkeleton count={5} layout="list" />
    </SectionContainer>
  )
}
