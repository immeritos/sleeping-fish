import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import { HeroContent } from "@/components/home/home-hero";

export default function Home() {
  const posts = allCoreContent(sortPosts(allBlogs));
  const latestPost = posts.length > 0 ? posts[0] : null;

  return (
    <section className="container mx-auto px-4 min-h-[calc(100vh-3.5rem)] mt-16 pt-4 md:pt-8 pb-20">
      {latestPost ? (
        <HeroContent
          category="Latest Post"
          title={latestPost.title}
          summary={latestPost.summary}
          date={latestPost.date}
          titleHref={`/blog/${latestPost.slug}`}
          imageSrc="/landingpage.jpg"
          imageAlt="Featured"
        />
      ) : (
        <HeroContent
          category="Welcome"
          title="Sleeping Fish"
          summary="This is where I put the things I'm working on, the thoughts I'm exploring, and the moments I would like to remember."
          imageSrc="/landingpage.jpg"
          imageAlt="Featured"
        />
      )}
    </section>
  );
}
