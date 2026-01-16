"use client"

import { motion } from "framer-motion"

export default function ProjectDetailLoading() {
  return (
    <div className="mx-auto px-4 pt-24 md:pt-32 pb-16 max-w-4xl">
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        {/* Cover Image */}
        <div className="relative w-full h-96 bg-muted rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent animate-shimmer" />
        </div>
        
        {/* Title */}
        <div className="space-y-3">
          <div className="h-10 w-3/4 bg-muted rounded" />
          <div className="h-10 w-1/2 bg-muted rounded" />
        </div>
        
        {/* Date and Tags */}
        <div className="flex items-center gap-4">
          <div className="h-4 w-32 bg-muted rounded" />
          <div className="flex gap-2">
            <div className="h-6 w-16 bg-muted rounded-full" />
            <div className="h-6 w-20 bg-muted rounded-full" />
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-4 pt-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-4 w-4/5 bg-muted rounded" />
            </div>
          ))}
        </div>
      </motion.article>
    </div>
  )
}
