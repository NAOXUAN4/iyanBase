

export default({
  // 站点基本路径，应与你的 GitHub 仓库名称一致
  base: '/iyanBase/',
  // 站点标题
  title: 'Yian\'s note Library',
  // description: 

  // 主题配置
  themeConfig: {
    // 网站 logo
    logo: '/logoYian.png',
    siteTitle: false,

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '全部文章', link: '/articles/' },
      {
        text: '笔记分类',
        items: [
          { text: '编程语言', link:'/articles/programlang'},
          { text: '学习', link: '/articles/learning/' },
          { text: '技术', link: '/articles/technology'}
        ]
      },
      { text: '返回导航页', link: 'https://yianaux.top/' },
    ],

    sidebar: {
      '/articles/': [
        {
          text: '全部文章',
          
          items: [
            {
              text: 'Artificial Intelligence',
              collapsible: true,
              collapsed: true,
              link: '/articles/artificial-intelligence/',
              items: [
                { text: 'KAN', 
                  link: '/articles/artificial-intelligence/AN',
                  items: [
                    { text: 'KAN', link: '/articles/artificial-intelligence/KAN/kAN' },
                  ]
                },
                { text: 'Transformer', 
                  link: '/articles/artificial-intelligence/transformer',
                  items: [
                    { text: 'QKV注意力', link: '/articles/artificial-intelligence/transformer/QKV' },
                    { text: 'Transformer结构', link: '/articles/artificial-intelligence/transformer/transformers' },
                    { text: 'Vit', link: '/articles/artificial-intelligence/transformer/vit' },
                  ]
               }
              ]
            },
            { text: 'Front End', link: '/articles/front-end/' },
            { text: 'Pyqt5', link: '/articles/pyqt5/' }
          ]
        }
      ],
      '/articles/programlang/': [
        {
          text: 'Programming Language',
          base: '/articles/programlang/',
          items: [
            { text: 'C&C++', 
              collapsible: true,
              collapsed: true,
              base: '/articles/programlang/C&C++/',
              items: [
                { text: '4.4虚类', link: '4.4虚类' },
                { text: '4.5基类与公有派生类对象的赋值兼容', link: '4.5基类与公有派生类对象的赋值兼容' },
              ]},
            { text: 'Python', base: '/articles/programlang/python' },
            { text: 'Java', base: '/articles/programlang/java' },
            { text: 'JavaScript', base: '/articles/programlang/Javascript' },
            { text: 'vue', base: '/articles/programlang/vue' },
          ]
        }
      ],
      '/articles/learning/': [
        {
          text: 'Learning',
          base: '/articles/learning/',
          items: [
            {
              text: 'Artificial Intelligence',
              base: '/articles/learning/artificial-intelligence',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'KAN', 
                  base: '/articles/learning/artificial-intelligence/KAN',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'KAN', link: '/kAN' },
                  ]
                },
                { text: 'Transformer', 
                  base: '/articles/learning/artificial-intelligence/transformer',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'QKV注意力', link: '/QKV' },
                    { text: 'Transformer结构', link: '/transformer' },
                    { text: 'Vit', link: '/vit' },
                  ]
                }
              ]
            }

          ]
          
        }
        
      ],
      '/articles/technology/': [
        {
          text: 'Technology',
          base: '/articles/technology',
          items: [
            { text: '4_19面向对象_工厂模式与单例模式', link: '/4_19面向对象_工厂模式与单例模式' },
          ]
        }
        
      ]

    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NAOXUAN4' }
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

    // // 编辑链接
    // editLink: {
    //   pattern: 'https://github.com/yourusername/my-blog/edit/main/docs/:path',
    //   text: '在 GitHub 上编辑此页'
    // }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
  },

  // 头部标签配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
})