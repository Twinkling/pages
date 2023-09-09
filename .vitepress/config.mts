import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Twinkling",
  description: "Note and Blog",
  head: [
    [
      'script',
      {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-WGHEYP8Q2L',
      }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-WGHEYP8Q2L');"
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '学习', link: '/learning/' },
      { text: '书籍', link: '/books/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'About', link: '/about' },
    ],

    sidebar: {
      "/books": [{
        text: '书山有路勤为径',
        items: [
          { text: 'Markdown Examples', link: '/books/' },
        ]
      }],
      "/learning": [{
        text: '学海无涯苦作舟',
        items: [
          { text: 'Markdown Examples', link: '/learning/' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }],
      "/": [{
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }],
  },
    // 版权需要自己处理，不重要
    // footer: {
    //   message: 'footer',
    //   copyright: 'ccc',
    // },
    // 底部上下文章，不重要
    // docFooter: {
    //   prev: 'Prev',
    //   next: 'Next'
    // },
    // 更新时间，不重要
    // lastUpdated: {
    //   text: '更新于'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  sitemap: {
    hostname: 'https://blog.19940101.com',
  },
  srcDir: 'docs',
  outDir: 'dist'
});
