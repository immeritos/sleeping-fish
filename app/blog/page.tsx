import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import { allBlogs } from 'contentlayer/generated'
import ListLayout from '@/components/layouts/ListLayout'

const POSTS_PER_PAGE = 5

// 启用 ISR，每60秒重新验证一次
export const revalidate = 60

export const metadata = {
  title: 'Blog Archives - Sleeping Fish',
  description: 'Thoughts, ideas, and writings',
}

export default async function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title=""
    />
  )
}
