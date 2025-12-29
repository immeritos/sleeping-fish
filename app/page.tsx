"use client";

import Image from "next/image";
import Link from "next/link";
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import { useEffect, useState } from "react";

export default function Home() {
  const [latestPost, setLatestPost] = useState<any>(null);

  useEffect(() => {
    const posts = allCoreContent(sortPosts(allBlogs));
    if (posts.length > 0) {
      setLatestPost(posts[0]);
    }
  }, []);

  return (
    <div className="min-h-[calc(100vh-3.5rem)] mt-14">
      <section className="container mx-auto px-4 lg:pl-0 lg:pr-0 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center">
          {/* Left: Article Info */}
          <div className="w-full lg:w-[40%] space-y-6 lg:pl-10 lg:pr-10 relative z-20 lg:pointer-events-none">
            {latestPost ? (
              <>
                {/* Category Tag */}
                <div className="inline-block pointer-events-auto">
                  <span className="text-xs uppercase tracking-wider font-medium text-foreground/60 border-b-2 border-foreground/20 pb-1">
                    Latest Post
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 pointer-events-auto relative z-10 lg:-mr-32 lg:whitespace-nowrap">
                  <Link 
                    href={`/blog/${latestPost.slug}`}
                    className="hover:text-foreground/80 transition-colors inline-block lg:bg-background lg:pr-8 lg:pb-2"
                  >
                    {latestPost.title}
                  </Link>
                </h1>

                {/* Summary */}
                {latestPost.summary && (
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed pointer-events-auto">
                    {latestPost.summary}
                  </p>
                )}
                
              </>
            ) : (
              <>
                <div className="inline-block pointer-events-auto">
                  <span className="text-xs uppercase tracking-wider font-medium text-foreground/60 border-b-2 border-foreground/20 pb-1">
                    Welcome
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 pointer-events-auto">
                  Sleeping Fish
                </h1>
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed pointer-events-auto">
                  This is where I put the things I'm working on, the thoughts I'm exploring, and the moments I would like to remember.
                </p>
              </>
            )}
          </div>

          {/* Right: Featured Image */}
          <div className="relative w-full lg:w-[60%] aspect-[4/3] lg:aspect-square overflow-hidden rounded-lg lg:-ml-2">
            <Image
              src="/landingpage.png"
              alt="Featured"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
