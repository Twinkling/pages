import { defineConfig, loadEnv } from 'vitepress'

const env = loadEnv('.env', process.cwd());

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hu XiaoTian's Blog",
  description: "记录日常开发过程，以及技术学习的探索过程",
  lang: 'zh-CN',
  head: [
    [
      'script',
      { async: 'true', src: `https://www.googletagmanager.com/gtag/js?id=${env.VITE_GA_ID}` }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${env.VITE_GA_ID}');`
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Twinkling/pages' }
    ],
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium',
        hourCycle: 'h24',
      }
    },
    footer: {
      copyright: '版权所有 &copy; 2024 <a href="https://github.com/Twinkling" rel="nofollow">胡晓添</a>'
    },
    docFooter: {
      prev: "&larr;&#20;上一篇",
      next: "下一篇&#20;&rarr;"
    },

    outline: {
      label: '页面导航'
    },
    externalLinkIcon: true,
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
  srcDir: 'docs',
  outDir: 'dist',
  lastUpdated: true,
})
