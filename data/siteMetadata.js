/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  // 基本网站信息
  title: 'Sleeping Fish',
  author: 'Sleeping Fish',
  headerTitle: 'Sleeping Fish',
  description: 'A personal website with blog and photography',
  language: 'en-us',
  theme: 'system', // system, dark or light
  
  // 网站链接
  siteUrl: 'https://sleepingfish.blog/',
  siteRepo: 'https://github.com/immeritos/sleeping-fish',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  
  // 社交媒体链接
  email: 'immeritos@gmail.com',
  github: 'https://github.com/immeritos',
  x: 'https://x.com/fuyuu1227',
  linkedin: 'https://www.linkedin.com/in/immeritos/',
  locale: 'en-US',
  
  // 导航栏配置
  stickyNav: false,
  
  // 搜索功能
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
