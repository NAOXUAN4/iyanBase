

export default({
  // 站点基本路径，应与你的 GitHub 仓库名称一致
  base: '/iyanBase/',

  // 站点标题
  title: '我的博客',
  description: '个人技术博客',

  // 主题配置
  themeConfig: {
    // 网站 logo
    logo: '/logo.png',

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/articles/' },
      { text: '关于', link: '/about' },
      {
        text: '下拉菜单',
        items: [
          { text: '子项1', link: '/submenu/item1' },
          { text: '子项2', link: '/submenu/item2' },
        ]
      }
    ],

    // 侧边栏
    sidebar: {
        '/': [
          {
            text: '首页',
          }
        ],
        '/articles/': [
          {
            text: '文章',
            items: [
              { text: 'KAN', link: '/articles/kAN' },
              { text: '1', link: '/articles/1' },
            ]
          }
        ]
      },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NAOXUAN4' },
       { icon: 'bilibili', link: 'https://twitter.com/yourusername' },
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-Yian🥰'
    },

    // 搜索配置（如果你想添加搜索功能）
    search: {
      provider: 'local'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/yourusername/my-blog/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
  },

  // 多语言支持（如果需要）
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/'
    }
  },

  // 头部标签配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
})