import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-20 pb-16 sm:px-6 xl:px-0">{children}</section>
  )
}
