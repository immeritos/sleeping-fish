"use client"

import { motion } from "framer-motion"

interface GallerySkeletonProps {
  columns?: number
  count?: number
}

export function GallerySkeleton({ columns = 3, count = 12 }: GallerySkeletonProps) {
  const skeletons = Array.from({ length: count }, (_, i) => i)
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-w-4xl mx-auto">
      {skeletons.map((i) => (
        <motion.div
          key={i}
          className="aspect-square bg-muted rounded overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent animate-shimmer" />
        </motion.div>
      ))}
    </div>
  )
}
