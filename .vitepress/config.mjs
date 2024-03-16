import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "高中统考 电脑与资讯工艺",
  description: "高中统考电脑与资讯工艺笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '笔记', link: '/notes/chapter-1' }
    ],

    sidebar: [
      {
        text: '上册',
        items: [
          { text: '第一章 认识电脑', link: '/notes/chapter-1' },
          { text: '第二章 互联网', link: '/notes/chapter-2' },
          { text: '第三章 系统单元', link: '/notes/chapter-3' },
          { text: '第四章 输入装置', link: '/notes/chapter-4' },
          { text: '第五章 输出装置', link: '/notes/chapter-5' },
          { text: '第六章 储存单元', link: '/notes/chapter-6' },
          { text: '第七章 应用软体', link: '/notes/chapter-7' },
          { text: '第八章 系统软体', link: '/notes/chapter-8' },
        ]
      }, {
        text: '下册',
        items: [
          { text: '第九章 电子商务', link: '/notes/chapter-9' },
          { text: '第十章 网络与通讯', link: '/notes/chapter-10' },
          { text: '第十一章 电脑与网络安全', link: '/notes/chapter-11' },
          { text: '第十二章 资讯系统', link: '/notes/chapter-12' },
          { text: '第十三章 程式语言与程式设计', link: '/notes/chapter-13' },
          { text: '第十四章 电脑职涯', link: '/notes/chapter-14' },
          { text: '第十五章 资讯社会伦理', link: '/notes/chapter-15' },
          { text: '第十六章 资讯工艺发展趋势', link: '/notes/chapter-16' },
        ]
      }, {
        text:'附录',
        items: [
          { text: '软件维护', link: '/notes/extra-1' },
          { text: '组装电脑', link: '/notes/extra-2' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
