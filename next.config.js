const { withContentlayer } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 图片优化配置
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
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