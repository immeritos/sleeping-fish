"use client"

import { motion } from "framer-motion"

export function HeroSkeleton() {
  return (
    <>
      {/* Mobile Layout */}
      <div className="flex lg:hidden flex-col w-full space-y-8">
        {/* Image skeleton */}
        <motion.div 
          className="relative w-full h-[300px] rounded-lg bg-muted overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent animate-shimmer" />
        </motion.div>
        
        {/* Content skeleton */}
        <div className="space-y-6">
          {/* Category tag */}
          <div className="flex items-center gap-5">
            <div className="h-4 w-24 bg-muted rounded" />
            <div className="flex-1 h-0.5 bg-muted" />
          </div>
          
          {/* Title */}
          <div className="space-y-3">
            <div className="h-10 w-full bg-muted rounded" />
            <div className="h-10 w-4/5 bg-muted rounded" />
          </div>
          
          {/* Summary */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-muted rounded" />
            <div className="h-4 w-full bg-muted rounded" />
            <div className="h-4 w-3/4 bg-muted rounded" />
          </div>
          
          {/* Date */}
          <div className="h-3 w-32 bg-muted rounded" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row gap-0 items-center w-full">
        <div className="w-[40%] space-y-12 -mt-72 relative z-20">
          {/* Category tag */}
          <div className="flex items-center gap-5">
            <div className="h-4 w-28 bg-muted rounded" />
            <div className="w-5 h-0.5 bg-muted" />
          </div>
          
          {/* Title */}
          <div className="space-y-4 pl-10">
            <div className="h-14 w-full bg-muted rounded" />
            <div className="h-14 w-4/5 bg-muted rounded" />
          </div>
          
          {/* Summary */}
          <div className="space-y-3 pl-10 pr-5">
            <div className="h-5 w-full bg-muted rounded" />
            <div className="h-5 w-full bg-muted rounded" />
            <div className="h-5 w-3/4 bg-muted rounded" />
          </div>
          
          {/* Date */}
          <div className="h-4 w-36 bg-muted rounded pl-10" />
        </div>
        
        {/* Image skeleton */}
        <motion.div 
          className="relative w-[60%] aspect-square rounded-lg bg-muted overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </>
  )
}
