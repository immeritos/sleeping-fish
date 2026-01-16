import { ReactNode } from 'react'
import { SectionContainerProps } from '@/types'

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-24 md:pt-32 pb-16 sm:px-6 xl:px-0 font-inter">{children}</section>
  )
}
