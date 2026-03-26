import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Bannerlord Modding Wiki',
  description: 'Bannerlord Modding SDK Documentation - XML反序列化文档和模块架构指南',

  base: '/',
  
  ignoreDeadLinks: true,

  lang: 'en',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],

  themeConfig: {
    siteTitle: 'Bannerlord Modding Wiki',

    logo: '/logo.png',
    repo: 'BannerlordCode/BannerlordCode.github.io',
    repoLabel: 'GitHub',

    nav: [
      { text: '首页 Home', link: '/' },
      { text: '指南 Guide', link: '/v1.3.15/zh/guide/' },
      { text: 'API', link: '/v1.3.15/zh/api/' },
      { text: 'XML', link: '/v1.3.15/zh/xml-reference/' },
      { text: '原生 Native', link: '/v1.3.15/zh/native/' },
      { text: '架构 Architecture', link: '/v1.3.15/zh/architecture/' },
      {
        text: '🔽 v1.3.15',
        items: [
          { text: 'v1.3.15 (当前)', link: '/v1.3.15/zh/' },
          { text: 'v1.3.0', link: '/v1.3.0/zh/' }
        ]
      },
      {
        text: '🌐 中文',
        items: [
          { text: '🇨🇳 中文', link: '/v1.3.15/zh/' },
          { text: '🇬🇧 English', link: '/v1.3.15/en/' }
        ]
      }
    ],

    sidebar: {
      // Root home
      '/': [
        {
          text: '开始 Start',
          items: [
            { text: '首页 Home', link: '/' }
          ]
        }
      ],

      // v1.3.15 Chinese
      '/v1.3.15/zh/': [
        {
          text: '文档目录',
          items: [
            { text: '概述 Index', link: '/v1.3.15/zh/' }
          ]
        }
      ],
      '/v1.3.15/zh/guide/': [
        {
          text: '指南 Guide',
          items: [
            { text: '概述 Index', link: '/v1.3.15/zh/guide/' }
          ]
        }
      ],
      '/v1.3.15/zh/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '概述 Index', link: '/v1.3.15/zh/api/' },
            { text: 'Core 核心', link: '/v1.3.15/zh/api/core/' },
            { text: 'Mission 任务', link: '/v1.3.15/zh/api/mission/' },
            { text: 'Mission-Ext 任务扩展', link: '/v1.3.15/zh/api/mission-ext/' },
            { text: 'Items 物品', link: '/v1.3.15/zh/api/items/' },
            { text: 'Campaign 战役', link: '/v1.3.15/zh/api/campaign/' },
            { text: 'Campaign-Ext 战役扩展', link: '/v1.3.15/zh/api/campaign-ext/' },
            { text: 'GUI 界面', link: '/v1.3.15/zh/api/gui/' },
            { text: 'Save-System 存档', link: '/v1.3.15/zh/api/save-system/' }
          ]
        }
      ],
      '/v1.3.15/zh/xml-reference/': [
        {
          text: 'XML 参考',
          items: [
            { text: '概述 Index', link: '/v1.3.15/zh/xml-reference/' },
            { text: 'Bug 分析 Bugs', link: '/v1.3.15/zh/xml-reference/bugs/' }
          ]
        }
      ],
      '/v1.3.15/zh/native/': [
        {
          text: '原生接口',
          items: [
            { text: '概述 Index', link: '/v1.3.15/zh/native/' },
            { text: 'NativeObject', link: '/v1.3.15/zh/native/NativeObject/' },
            { text: 'INativeArray', link: '/v1.3.15/zh/native/INativeArray/' },
            { text: 'INativeObjectArray', link: '/v1.3.15/zh/native/INativeObjectArray/' },
            { text: 'INativeString', link: '/v1.3.15/zh/native/INativeString/' },
            { text: 'IManaged', link: '/v1.3.15/zh/native/IManaged/' },
            { text: 'EngineMethod', link: '/v1.3.15/zh/native/EngineMethod/' },
            { text: 'LibraryApplicationInterface', link: '/v1.3.15/zh/native/LibraryApplicationInterface/' }
          ]
        }
      ],
      '/v1.3.15/zh/architecture/': [
        {
          text: '架构文档',
          items: [
            { text: '概述 Index', link: '/v1.3.15/zh/architecture/' },
            { text: '模块系统 Module System', link: '/v1.3.15/zh/architecture/module-system/' },
            { text: '存档系统 Save System', link: '/v1.3.15/zh/architecture/save-system/' }
          ]
        }
      ],

      // v1.3.15 English
      '/v1.3.15/en/': [
        {
          text: 'Documentation',
          items: [
            { text: 'Index', link: '/v1.3.15/en/' }
          ]
        }
      ],
      '/v1.3.15/en/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/v1.3.15/en/guide/' }
          ]
        }
      ],
      '/v1.3.15/en/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Index', link: '/v1.3.15/en/api/' },
            { text: 'Core', link: '/v1.3.15/en/api/core/' },
            { text: 'Mission', link: '/v1.3.15/en/api/mission/' },
            { text: 'Mission-Ext', link: '/v1.3.15/en/api/mission-ext/' },
            { text: 'Items', link: '/v1.3.15/en/api/items/' },
            { text: 'Campaign', link: '/v1.3.15/en/api/campaign/' },
            { text: 'Campaign-Ext', link: '/v1.3.15/en/api/campaign-ext/' },
            { text: 'GUI', link: '/v1.3.15/en/api/gui/' },
            { text: 'Save-System', link: '/v1.3.15/en/api/save-system/' }
          ]
        }
      ],
      '/v1.3.15/en/xml-reference/': [
        {
          text: 'XML Reference',
          items: [
            { text: 'Index', link: '/v1.3.15/en/xml-reference/' },
            { text: 'Bug Analysis', link: '/v1.3.15/en/xml-reference/bugs/' }
          ]
        }
      ],
      '/v1.3.15/en/native/': [
        {
          text: 'Native Interface',
          items: [
            { text: 'Index', link: '/v1.3.15/en/native/' },
            { text: 'NativeObject', link: '/v1.3.15/en/native/NativeObject/' },
            { text: 'INativeArray', link: '/v1.3.15/en/native/INativeArray/' },
            { text: 'INativeObjectArray', link: '/v1.3.15/en/native/INativeObjectArray/' },
            { text: 'INativeString', link: '/v1.3.15/en/native/INativeString/' },
            { text: 'IManaged', link: '/v1.3.15/en/native/IManaged/' },
            { text: 'EngineMethod', link: '/v1.3.15/en/native/EngineMethod/' },
            { text: 'LibraryApplicationInterface', link: '/v1.3.15/en/native/LibraryApplicationInterface/' }
          ]
        }
      ],
      '/v1.3.15/en/architecture/': [
        {
          text: 'Architecture',
          items: [
            { text: 'Index', link: '/v1.3.15/en/architecture/' },
            { text: 'Module System', link: '/v1.3.15/en/architecture/module-system/' },
            { text: 'Save System', link: '/v1.3.15/en/architecture/save-system/' }
          ]
        }
      ],

      // v1.3.0 Chinese
      '/v1.3.0/zh/': [
        {
          text: '文档目录',
          items: [
            { text: '概述 Index', link: '/v1.3.0/zh/' }
          ]
        }
      ],
      '/v1.3.0/zh/guide/': [
        {
          text: '指南 Guide',
          items: [
            { text: '概述 Index', link: '/v1.3.0/zh/guide/' }
          ]
        }
      ],
      '/v1.3.0/zh/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '概述 Index', link: '/v1.3.0/zh/api/' },
            { text: 'TaleWorlds.MountAndBlade', link: '/v1.3.0/zh/api/TaleWorlds.MountAndBlade/' }
          ]
        }
      ],
      '/v1.3.0/zh/xml-reference/': [
        {
          text: 'XML 参考',
          items: [
            { text: '概述 Index', link: '/v1.3.0/zh/xml-reference/' }
          ]
        }
      ],
      '/v1.3.0/zh/native/': [
        {
          text: '原生接口',
          items: [
            { text: '概述 Index', link: '/v1.3.0/zh/native/' }
          ]
        }
      ],
      '/v1.3.0/zh/architecture/': [
        {
          text: '架构文档',
          items: [
            { text: '概述 Index', link: '/v1.3.0/zh/architecture/' }
          ]
        }
      ],

      // v1.3.0 English
      '/v1.3.0/en/': [
        {
          text: 'Documentation',
          items: [
            { text: 'Index', link: '/v1.3.0/en/' }
          ]
        }
      ],
      '/v1.3.0/en/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/v1.3.0/en/guide/' }
          ]
        }
      ],
      '/v1.3.0/en/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Index', link: '/v1.3.0/en/api/' },
            { text: 'TaleWorlds.MountAndBlade', link: '/v1.3.0/en/api/TaleWorlds.MountAndBlade/' }
          ]
        }
      ],
      '/v1.3.0/en/xml-reference/': [
        {
          text: 'XML Reference',
          items: [
            { text: 'Index', link: '/v1.3.0/en/xml-reference/' }
          ]
        }
      ],
      '/v1.3.0/en/native/': [
        {
          text: 'Native Interface',
          items: [
            { text: 'Index', link: '/v1.3.0/en/native/' }
          ]
        }
      ],
      '/v1.3.0/en/architecture/': [
        {
          text: 'Architecture',
          items: [
            { text: 'Index', link: '/v1.3.0/en/architecture/' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      lang: 'en'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 BannerlordCode'
    },

    notFound: [
      { text: 'Page Not Found', link: '/' }
    ]
  },

  markdown: {
    lineNumbers: true
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => false
      }
    }
  }
})
