import { cn } from "@/lib/utils/utils"

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div 
      className={cn(
        "animate-pulse bg-muted rounded",
        className
      )} 
    />
  )
}
