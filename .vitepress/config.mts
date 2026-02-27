import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "66聊天协议",
  lang: 'zh-CN',
  base: '/66chat-bot',
  srcDir: 'docs',
  description: "66 聊天软件 — WebSocket 协议、消息回调与 API 示例",
  head: [
    ['link', { rel: 'icon', href: '/assets/66.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '66 聊天协议文档',
    nav: [
      { text: '首页', link: '/' },
      { text: '开发文档', link: '/guide' },
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '使用说明', link: '/guide' },
          { text: 'WebSocket 协议', link: '/websocket' },
          { text: '收发送消息说明', link: '/msg' },
          { text: '群组事件', link: '/group' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yee338024/66chat-bot' },
      { icon: 'telegram', link: 'https://t.me/jenkins_pro' }
    ],

    footer: {
      message: '文档基于 66 助手整理',
      copyright: 'Copyright © 66 助手'
    }
  }
})
