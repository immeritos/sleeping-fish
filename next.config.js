const { withContentlayer } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the experimental.appDir option as it's now stable in Next.js 14
}

module.exports = withContentlayer(nextConfig)