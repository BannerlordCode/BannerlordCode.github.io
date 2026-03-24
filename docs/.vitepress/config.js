import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Bannerlord Modding Wiki',
  description: 'XML反序列化文档和模块架构指南 for Bannerlord modding',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    siteTitle: 'Bannerlord Modding Wiki',
    
    nav: [
      { text: '首页', link: '/' }
    ],

    sidebar: []
  },

  markdown: {
    lineNumbers: false
  }
})
