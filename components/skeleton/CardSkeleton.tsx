"use client"

import { motion } from "framer-motion"

interface CardSkeletonProps {
  count?: number
  layout?: "list" | "grid"
}

export function CardSkeleton({ count = 5, layout = "list" }: CardSkeletonProps) {
  const skeletons = Array.from({ length: count }, (_, i) => i)
  
  if (layout === "grid") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skeletons.map((i) => (
          <motion.div
            key={i}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            {/* Image placeholder */}
            <div className="relative w-full h-48 bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent animate-shimmer" />
            </div>
            
            {/* Title */}
            <div className="h-6 w-3/4 bg-muted rounded" />
            
            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-4 w-5/6 bg-muted rounded" />
            </div>
            
            {/* Tags */}
            <div className="flex gap-2">
              <div className="h-5 w-16 bg-muted rounded-full" />
              <div className="h-5 w-20 bg-muted rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
    )
  }
  
  // List layout (for blog)
  return (
    <ul>
      {skeletons.map((i) => (
        <motion.li
          key={i}
          className="py-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <article className="space-y-3 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 xl:gap-4">
            {/* Date placeholder */}
            <div className="h-4 w-24 bg-muted rounded" />
            
            <div className="space-y-3 xl:col-span-3">
              {/* Title */}
              <div className="h-7 w-3/4 bg-muted rounded" />
              
              {/* Summary */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-muted rounded" />
                <div className="h-4 w-5/6 bg-muted rounded" />
              </div>
            </div>
          </article>
        </motion.li>
      ))}
    </ul>
  )
}
