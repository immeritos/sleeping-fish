"use client"

import { motion } from "framer-motion"
import SectionContainer from '@/components/blog/SectionContainer'

export default function BlogDetailLoading() {
  return (
    <SectionContainer>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="xl:divide-y xl:divide-border xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-4 text-center">
              {/* Date */}
              <div className="flex justify-center">
                <div className="h-4 w-32 bg-muted rounded" />
              </div>
              
              {/* Title */}
              <div className="flex flex-col items-center space-y-3">
                <div className="h-10 w-3/4 bg-muted rounded" />
                <div className="h-10 w-2/3 bg-muted rounded" />
              </div>
            </div>
          </header>
          
          {/* Content */}
          <div className="divide-y divide-border xl:divide-y-0 xl:grid xl:grid-cols-4 xl:gap-x-6 pb-16 xl:pb-20">
            <div className="divide-y divide-border xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 space-y-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 w-full bg-muted rounded" />
                    <div className="h-4 w-full bg-muted rounded" />
                    <div className="h-4 w-4/5 bg-muted rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </SectionContainer>
  )
}
