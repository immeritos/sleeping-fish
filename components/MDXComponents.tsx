import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './blog/Link'
import TableWrapper from './TableWrapper'

const CustomHeading = ({ level, children, ...props }: any) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
  
  const getClassName = (level: number) => {
    switch (level) {
      case 1:
        return "text-2xl font-semibold text-foreground mt-12 mb-6"
      case 2:
        return "text-xl font-medium text-foreground mt-10 mb-4"
      case 3:
        return "text-lg font-medium text-foreground mt-8 mb-3"
      case 4:
        return "text-base font-medium text-foreground mt-6 mb-2"
      default:
        return "text-sm font-medium text-foreground mt-4 mb-2"
    }
  }

  return (
    <HeadingTag className={getClassName(level)} {...props}>
      {children}
    </HeadingTag>
  )
}

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink as any,
  pre: Pre as any,
  table: TableWrapper as any,
  h1: (props) => <CustomHeading level={1} {...props} />,
  h2: (props) => <CustomHeading level={2} {...props} />,
  h3: (props) => <CustomHeading level={3} {...props} />,
  h4: (props) => <CustomHeading level={4} {...props} />,
  h5: (props) => <CustomHeading level={5} {...props} />,
  h6: (props) => <CustomHeading level={6} {...props} />,
  BlogNewsletterForm,
}
