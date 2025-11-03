const { withContentlayer } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the experimental.appDir option as it's now stable in Next.js 14
  // Exclude large photography images from file tracing (they're served statically)
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'public/photography/**/*.jpg',
        'public/photography/**/*.jpeg',
        'public/photography/**/*.png',
      ],
    },
  },
}

module.exports = withContentlayer(nextConfig)