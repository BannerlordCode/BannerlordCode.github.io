import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Bannerlord Modding Wiki',
  description: 'Bannerlord Modding SDK Documentation - 模块架构指南与 API 参考',

  base: '/',

  // Dead links are treated as errors. Run `node _audit.mjs` to verify 0 broken.
  ignoreDeadLinks: false,

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
      {
        text: '指南 Guide',
        items: [
          { text: 'v1.3.15 中文', link: '/v1.3.15/zh/guide/' },
          { text: 'v1.3.15 English', link: '/v1.3.15/en/guide/' },
          { text: 'v1.3.0 中文', link: '/v1.3.0/zh/guide/' },
          { text: 'v1.3.0 English', link: '/v1.3.0/en/guide/' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'v1.4.5 中文', link: '/v1.4.5/zh/api/' },
          { text: 'v1.4.5 English', link: '/v1.4.5/en/api/' },
          { text: 'v1.3.15 中文', link: '/v1.3.15/zh/api/' },
          { text: 'v1.3.15 English', link: '/v1.3.15/en/api/' },
          { text: 'v1.3.0 中文', link: '/v1.3.0/zh/api/' },
          { text: 'v1.3.0 English', link: '/v1.3.0/en/api/' }
        ]
      },
      {
        text: '架构 Architecture',
        items: [
          { text: 'v1.4.5 架构总览', link: '/v1.4.5/zh/architecture/' },
          { text: 'v1.4.5 Architecture Overview', link: '/v1.4.5/en/architecture/' },
          { text: 'SDK 总览 (中文)', link: '/v1.3.15/zh/architecture/sdk-overview' },
          { text: 'SDK Overview (EN)', link: '/v1.3.15/en/architecture/sdk-overview' },
          { text: '版本差异 / Version Delta (中文)', link: '/v1.3.15/zh/architecture/version-delta' },
          { text: '🔀 跨版本类对比 / Class Compare', link: '/versions/' }
        ]
      },
      { text: 'XML', link: '/v1.3.15/zh/xml-reference/' },
      { text: '原生 Native', link: '/v1.3.15/zh/native/' },
      { text: 'Native 源码', link: '/v1.3.15/zh/native-1.3.15-src/' },
      {
        text: '🔽 版本 Version',
        items: [
          { text: 'v1.4.5 (源码可用) 中文', link: '/v1.4.5/zh/' },
          { text: 'v1.4.5 (source available) English', link: '/v1.4.5/en/' },
          { text: 'v1.3.15 (最新 / Latest) 中文', link: '/v1.3.15/zh/' },
          { text: 'v1.3.15 (Latest) English', link: '/v1.3.15/en/' },
          { text: 'v1.3.0 中文', link: '/v1.3.0/zh/' },
          { text: 'v1.3.0 English', link: '/v1.3.0/en/' }
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

    outline: {
      level: [2, 3],
      label: '本页内容 / On this page'
    },

    docFooter: {
      prev: '上一页 / Previous',
      next: '下一页 / Next'
    },

    sidebar: {
      // ───────────────────────── v1.3.15 中文 ─────────────────────────
      '/v1.3.15/zh/': [
        {
          text: '开始 Start',
          items: [{ text: '概述 Index', link: '/v1.3.15/zh/' }]
        },
        {
          text: '指南 Guide',
          collapsed: false,
          items: [
            { text: '概述 Index', link: '/v1.3.15/zh/guide/' },
            { text: '游戏系统概述 Systems', link: '/v1.3.15/zh/guide/game-systems-overview' },
            { text: 'Gauntlet UI 系统', link: '/v1.3.15/zh/guide/gauntlet-ui' },
            { text: '任务系统 Mission', link: '/v1.3.15/zh/guide/mission-system' },
            { text: '战役系统 Campaign', link: '/v1.3.15/zh/guide/campaign-system' },
            { text: '存档系统 Save', link: '/v1.3.15/zh/guide/save-system-guide' },
            { text: '资源管线 Asset', link: '/v1.3.15/zh/guide/asset-pipeline' },
            { text: '本地化 Localization', link: '/v1.3.15/zh/guide/localization' },
            { text: '常见模式 Patterns', link: '/v1.3.15/zh/guide/common-patterns' },
            { text: '故障排除 Troubleshooting', link: '/v1.3.15/zh/guide/troubleshooting' }
          ]
        },
        {
          text: '架构 Architecture',
          collapsed: false,
          items: [
            { text: '架构总览', link: '/v1.3.15/zh/architecture/' },
            { text: '⭐ SDK 总览（模块地图）', link: '/v1.3.15/zh/architecture/sdk-overview' },
            { text: '模块系统 Module System', link: '/v1.3.15/zh/architecture/module-system' },
            { text: '存档系统 Save System', link: '/v1.3.15/zh/architecture/save-system' },
            { text: '版本差异 Version Delta', link: '/v1.3.15/zh/architecture/version-delta' }
          ]
        },
        {
          text: 'API 参考',
          collapsed: false,
          items: [
            { text: '概述 Index', link: '/v1.3.15/zh/api/' },
            { text: '🗂️ 完整类目录 (4819 类型)', link: '/v1.3.15/zh/api/catalog' },
            {
              text: '目录分领域 Catalog by Area',
              collapsed: true,
              items: [
                { text: '战役系统 Campaign', link: '/v1.3.15/zh/api/catalog-campaign' },
                { text: '战斗 Mount&Blade', link: '/v1.3.15/zh/api/catalog-mountandblade' },
                { text: '核心 Core', link: '/v1.3.15/zh/api/catalog-core' },
                { text: '引擎 Engine', link: '/v1.3.15/zh/api/catalog-engine' },
                { text: '基础库 Library', link: '/v1.3.15/zh/api/catalog-library' },
                { text: 'Gauntlet UI', link: '/v1.3.15/zh/api/catalog-ui' },
                { text: '存档 Save', link: '/v1.3.15/zh/api/catalog-save' },
                { text: '网络/平台 System', link: '/v1.3.15/zh/api/catalog-system' },
                { text: '本地化 Localization', link: '/v1.3.15/zh/api/catalog-localization' },
                { text: '输入 Input', link: '/v1.3.15/zh/api/catalog-input' },
                { text: '其它 Other', link: '/v1.3.15/zh/api/catalog-other' }
              ]
            },
            { text: 'Core 核心', link: '/v1.3.15/zh/api/core/' },
            { text: 'Core-Extra 核心扩展', link: '/v1.3.15/zh/api/core-extra/' },
            { text: 'Mission 任务', link: '/v1.3.15/zh/api/mission/' },
            { text: 'Mission-Ext 任务扩展', link: '/v1.3.15/zh/api/mission-ext/' },
            { text: 'Items 物品', link: '/v1.3.15/zh/api/items/' },
            { text: 'Campaign 战役', link: '/v1.3.15/zh/api/campaign/' },
            { text: 'Campaign-Ext 战役扩展', link: '/v1.3.15/zh/api/campaign-ext/' },
            { text: '⚡ Actions 速查 (61)', link: '/v1.3.15/zh/api/campaign-ext/actions-index' },
            { text: 'GUI 界面', link: '/v1.3.15/zh/api/gui/' },
            { text: 'Save-System 存档', link: '/v1.3.15/zh/api/save-system/' },
            { text: 'ViewModel', link: '/v1.3.15/zh/api/viewmodel/' },
            { text: 'Localization 本地化', link: '/v1.3.15/zh/api/localization/' },
            { text: 'Engine 引擎', link: '/v1.3.15/zh/api/engine/' }
          ]
        },
        {
          text: '原生 Native',
          collapsed: true,
          items: [
            { text: 'P/Invoke 接口', link: '/v1.3.15/zh/native/' },
            { text: 'Native 1.3.15 源码', link: '/v1.3.15/zh/native-1.3.15-src/' }
          ]
        },
        {
          text: 'XML 参考',
          collapsed: true,
          items: [
            { text: '概述 Index', link: '/v1.3.15/zh/xml-reference/' },
            { text: 'Bug 分析 Bugs', link: '/v1.3.15/zh/xml-reference/bugs' }
          ]
        },
        {
          text: '🔀 跨版本导航',
          collapsed: false,
          items: [
            { text: '跨版本类对比总览', link: '/versions/' },
            { text: 'Hero', link: '/versions/Hero' },
            { text: 'MobileParty', link: '/versions/MobileParty' },
            { text: 'Clan', link: '/versions/Clan' },
            { text: 'Kingdom', link: '/versions/Kingdom' },
            { text: 'Mission', link: '/versions/Mission' },
            { text: 'Agent', link: '/versions/Agent' },
            { text: 'Formation', link: '/versions/Formation' },
            { text: 'Settlement', link: '/versions/Settlement' },
            { text: 'ItemObject', link: '/versions/ItemObject' },
            { text: 'v1.3.0 文档', link: '/v1.3.0/zh/' },
            { text: 'v1.4.5 文档', link: '/v1.4.5/zh/' }
          ]
        }
      ],

      // ───────────────────────── v1.3.15 English ─────────────────────────
      '/v1.3.15/en/': [
        {
          text: 'Start',
          items: [{ text: 'Index', link: '/v1.3.15/en/' }]
        },
        {
          text: 'Guide',
          collapsed: false,
          items: [
            { text: 'Index', link: '/v1.3.15/en/guide/' },
            { text: 'Game Systems Overview', link: '/v1.3.15/en/guide/game-systems-overview' },
            { text: 'Gauntlet UI System', link: '/v1.3.15/en/guide/gauntlet-ui' },
            { text: 'Mission System', link: '/v1.3.15/en/guide/mission-system' },
            { text: 'Campaign System', link: '/v1.3.15/en/guide/campaign-system' },
            { text: 'Save System', link: '/v1.3.15/en/guide/save-system-guide' },
            { text: 'Asset Pipeline', link: '/v1.3.15/en/guide/asset-pipeline' },
            { text: 'Localization', link: '/v1.3.15/en/guide/localization' },
            { text: 'Common Patterns', link: '/v1.3.15/en/guide/common-patterns' },
            { text: 'Troubleshooting', link: '/v1.3.15/en/guide/troubleshooting' }
          ]
        },
        {
          text: 'Architecture',
          collapsed: false,
          items: [
            { text: 'Architecture Hub', link: '/v1.3.15/en/architecture/' },
            { text: '⭐ SDK Overview (module map)', link: '/v1.3.15/en/architecture/sdk-overview' },
            { text: 'Module System', link: '/v1.3.15/en/architecture/module-system' },
            { text: 'Save System', link: '/v1.3.15/en/architecture/save-system' },
            { text: 'Version Delta', link: '/v1.3.15/en/architecture/version-delta' }
          ]
        },
        {
          text: 'API Reference',
          collapsed: false,
          items: [
            { text: 'Index', link: '/v1.3.15/en/api/' },
            { text: '🗂️ Complete Class Catalog (4819 types)', link: '/v1.3.15/en/api/catalog' },
            {
              text: 'Catalog by Area',
              collapsed: true,
              items: [
                { text: 'Campaign System', link: '/v1.3.15/en/api/catalog-campaign' },
                { text: 'Mount & Blade', link: '/v1.3.15/en/api/catalog-mountandblade' },
                { text: 'Core', link: '/v1.3.15/en/api/catalog-core' },
                { text: 'Engine', link: '/v1.3.15/en/api/catalog-engine' },
                { text: 'Library', link: '/v1.3.15/en/api/catalog-library' },
                { text: 'Gauntlet UI', link: '/v1.3.15/en/api/catalog-ui' },
                { text: 'Save System', link: '/v1.3.15/en/api/catalog-save' },
                { text: 'Network & Platform', link: '/v1.3.15/en/api/catalog-system' },
                { text: 'Localization', link: '/v1.3.15/en/api/catalog-localization' },
                { text: 'Input', link: '/v1.3.15/en/api/catalog-input' },
                { text: 'Other', link: '/v1.3.15/en/api/catalog-other' }
              ]
            },
            { text: 'Core', link: '/v1.3.15/en/api/core/' },
            { text: 'Core-Extra', link: '/v1.3.15/en/api/core-extra/' },
            { text: 'Mission', link: '/v1.3.15/en/api/mission/' },
            { text: 'Mission-Ext', link: '/v1.3.15/en/api/mission-ext/' },
            { text: 'Items', link: '/v1.3.15/en/api/items/' },
            { text: 'Campaign', link: '/v1.3.15/en/api/campaign/' },
            { text: 'Campaign-Ext', link: '/v1.3.15/en/api/campaign-ext/' },
            { text: '⚡ Actions Reference (61)', link: '/v1.3.15/en/api/campaign-ext/actions-index' },
            { text: 'GUI', link: '/v1.3.15/en/api/gui/' },
            { text: 'Save-System', link: '/v1.3.15/en/api/save-system/' },
            { text: 'ViewModel', link: '/v1.3.15/en/api/viewmodel/' },
            { text: 'Localization', link: '/v1.3.15/en/api/localization/' },
            { text: 'Engine', link: '/v1.3.15/en/api/engine/' }
          ]
        },
        {
          text: 'Native',
          collapsed: true,
          items: [
            { text: 'P/Invoke Interface', link: '/v1.3.15/en/native/' },
            { text: 'Native 1.3.15 Source', link: '/v1.3.15/en/native-1.3.15-src/' }
          ]
        },
        {
          text: 'XML Reference',
          collapsed: true,
          items: [
            { text: 'Index', link: '/v1.3.15/en/xml-reference/' },
            { text: 'Bug Analysis', link: '/v1.3.15/en/xml-reference/bugs' }
          ]
        },
        {
          text: '🔀 Cross-Version',
          collapsed: false,
          items: [
            { text: 'Cross-Version Class Compare', link: '/versions/' },
            { text: 'Hero', link: '/versions/Hero' },
            { text: 'MobileParty', link: '/versions/MobileParty' },
            { text: 'Clan', link: '/versions/Clan' },
            { text: 'Kingdom', link: '/versions/Kingdom' },
            { text: 'Mission', link: '/versions/Mission' },
            { text: 'Agent', link: '/versions/Agent' },
            { text: 'Formation', link: '/versions/Formation' },
            { text: 'Settlement', link: '/versions/Settlement' },
            { text: 'ItemObject', link: '/versions/ItemObject' },
            { text: 'v1.3.0 Docs', link: '/v1.3.0/en/' },
            { text: 'v1.4.5 Docs', link: '/v1.4.5/en/' }
          ]
        }
      ],

      // ───────────────────────── v1.3.0 中文 ─────────────────────────
      '/v1.3.0/zh/': [
        {
          text: '开始 Start',
          items: [{ text: '概述 Index', link: '/v1.3.0/zh/' }]
        },
        {
          text: '指南 Guide',
          collapsed: false,
          items: [
            { text: '概述 Index', link: '/v1.3.0/zh/guide/' },
            { text: 'Mission 系统基础', link: '/v1.3.0/zh/guide/mission-basics' },
            { text: 'Campaign 系统基础', link: '/v1.3.0/zh/guide/campaign-basics' },
            { text: 'UI 系统基础', link: '/v1.3.0/zh/guide/ui-basics' },
            { text: '存档系统', link: '/v1.3.0/zh/guide/save-system' },
            { text: '常见问题', link: '/v1.3.0/zh/guide/common-issues' }
          ]
        },
        {
          text: 'API 参考',
          collapsed: false,
          items: [
            { text: '概述 Index', link: '/v1.3.0/zh/api/' },
            { text: 'Core 核心', link: '/v1.3.0/zh/api/core/' },
            { text: 'Mission 任务', link: '/v1.3.0/zh/api/mission/' },
            { text: 'Campaign 战役', link: '/v1.3.0/zh/api/campaign/' },
            { text: 'TaleWorlds.MountAndBlade', link: '/v1.3.0/zh/api/TaleWorlds.MountAndBlade/' }
          ]
        },
        {
          text: '架构 / 原生 / XML',
          collapsed: true,
          items: [
            { text: '架构 Architecture', link: '/v1.3.0/zh/architecture/' },
            { text: '原生 Native', link: '/v1.3.0/zh/native/' },
            { text: 'XML 参考', link: '/v1.3.0/zh/xml-reference/' }
          ]
        },
        {
          text: '🔀 跨版本导航',
          collapsed: false,
          items: [
            { text: '⭐ v1.3.15 完整文档 (推荐)', link: '/v1.3.15/zh/' },
            { text: 'v1.4.5 文档', link: '/v1.4.5/zh/' },
            { text: '跨版本类对比', link: '/versions/' }
          ]
        }
      ],

      // ───────────────────────── v1.3.0 English ─────────────────────────
      '/v1.3.0/en/': [
        {
          text: 'Start',
          items: [{ text: 'Index', link: '/v1.3.0/en/' }]
        },
        {
          text: 'Guide',
          collapsed: false,
          items: [
            { text: 'Index', link: '/v1.3.0/en/guide/' },
            { text: 'Mission Basics', link: '/v1.3.0/en/guide/mission-basics' },
            { text: 'Campaign Basics', link: '/v1.3.0/en/guide/campaign-basics' },
            { text: 'UI Basics', link: '/v1.3.0/en/guide/ui-basics' },
            { text: 'Save System', link: '/v1.3.0/en/guide/save-system' },
            { text: 'Common Issues', link: '/v1.3.0/en/guide/common-issues' }
          ]
        },
        {
          text: 'API Reference',
          collapsed: false,
          items: [
            { text: 'Index', link: '/v1.3.0/en/api/' },
            { text: 'Core', link: '/v1.3.0/en/api/core/' },
            { text: 'Mission', link: '/v1.3.0/en/api/mission/' },
            { text: 'Campaign', link: '/v1.3.0/en/api/campaign/' },
            { text: 'TaleWorlds.MountAndBlade', link: '/v1.3.0/en/api/TaleWorlds.MountAndBlade/' }
          ]
        },
        {
          text: 'Architecture / Native / XML',
          collapsed: true,
          items: [
            { text: 'Architecture', link: '/v1.3.0/en/architecture/' },
            { text: 'Native', link: '/v1.3.0/en/native/' },
            { text: 'XML Reference', link: '/v1.3.0/en/xml-reference/' }
          ]
        },
        {
          text: '🔀 Cross-Version',
          collapsed: false,
          items: [
            { text: '⭐ v1.3.15 Full Docs (recommended)', link: '/v1.3.15/en/' },
            { text: 'v1.4.5 Docs', link: '/v1.4.5/en/' },
            { text: 'Cross-Version Class Compare', link: '/versions/' }
          ]
        }
      ],

      // ───────────────────────── v1.4.5 ─────────────────────────
      '/v1.4.5/zh/': [
        {
          text: '开始 Start',
          items: [{ text: '概述 Index', link: '/v1.4.5/zh/' }]
        },
        {
          text: '架构 Architecture',
          collapsed: false,
          items: [
            { text: 'v1.4.5 架构总览', link: '/v1.4.5/zh/architecture/' },
            { text: 'v1.3.15 规范版总览', link: '/v1.3.15/zh/architecture/sdk-overview' }
          ]
        },
        {
          text: 'API 目录',
          collapsed: false,
          items: [
            { text: '🗂️ 完整类目录', link: '/v1.4.5/zh/api/catalog' },
            { text: '战役系统 Campaign', link: '/v1.4.5/zh/api/catalog-campaign' },
            { text: '战斗 Mount&Blade', link: '/v1.4.5/zh/api/catalog-mountandblade' },
            { text: '核心 Core', link: '/v1.4.5/zh/api/catalog-core' },
            { text: '引擎 Engine', link: '/v1.4.5/zh/api/catalog-engine' },
            { text: '基础库 Library', link: '/v1.4.5/zh/api/catalog-library' },
            { text: 'Gauntlet UI', link: '/v1.4.5/zh/api/catalog-ui' },
            { text: '存档 Save', link: '/v1.4.5/zh/api/catalog-save' },
            { text: '网络/平台 System', link: '/v1.4.5/zh/api/catalog-system' },
            { text: '本地化 Localization', link: '/v1.4.5/zh/api/catalog-localization' },
            { text: '输入 Input', link: '/v1.4.5/zh/api/catalog-input' },
            { text: '玩法 Gameplay', link: '/v1.4.5/zh/api/catalog-gameplay' },
            { text: '其它 Other', link: '/v1.4.5/zh/api/catalog-other' }
          ]
        },
        {
          text: '跨版本导航',
          collapsed: false,
          items: [
            { text: '⭐ v1.3.15 完整文档 (推荐)', link: '/v1.3.15/zh/' },
            { text: '🔀 跨版本类对比', link: '/versions/' },
            { text: 'v1.3.0 文档', link: '/v1.3.0/zh/' }
          ]
        }
      ],
      '/v1.4.5/en/': [
        {
          text: 'Start',
          items: [{ text: 'Index', link: '/v1.4.5/en/' }]
        },
        {
          text: 'Architecture',
          collapsed: false,
          items: [
            { text: 'v1.4.5 Architecture', link: '/v1.4.5/en/architecture/' },
            { text: 'Canonical v1.3.15 Overview', link: '/v1.3.15/en/architecture/sdk-overview' }
          ]
        },
        {
          text: 'API Catalog',
          collapsed: false,
          items: [
            { text: '🗂️ Complete Class Catalog', link: '/v1.4.5/en/api/catalog' },
            { text: 'Campaign System', link: '/v1.4.5/en/api/catalog-campaign' },
            { text: 'Mount & Blade', link: '/v1.4.5/en/api/catalog-mountandblade' },
            { text: 'Core', link: '/v1.4.5/en/api/catalog-core' },
            { text: 'Engine', link: '/v1.4.5/en/api/catalog-engine' },
            { text: 'Library', link: '/v1.4.5/en/api/catalog-library' },
            { text: 'Gauntlet UI', link: '/v1.4.5/en/api/catalog-ui' },
            { text: 'Save System', link: '/v1.4.5/en/api/catalog-save' },
            { text: 'Network & Platform', link: '/v1.4.5/en/api/catalog-system' },
            { text: 'Localization', link: '/v1.4.5/en/api/catalog-localization' },
            { text: 'Input', link: '/v1.4.5/en/api/catalog-input' },
            { text: 'Gameplay', link: '/v1.4.5/en/api/catalog-gameplay' },
            { text: 'Other', link: '/v1.4.5/en/api/catalog-other' }
          ]
        },
        {
          text: 'Cross-Version',
          collapsed: false,
          items: [
            { text: '⭐ v1.3.15 Full Docs (recommended)', link: '/v1.3.15/en/' },
            { text: '🔀 Cross-Version Class Compare', link: '/versions/' },
            { text: 'v1.3.0 Docs', link: '/v1.3.0/en/' }
          ]
        }
      ],

      // ───────────────────────── 跨版本类对比 / Cross-Version ─────────────────────────
      '/versions/': [
        {
          text: '🔀 跨版本类对比 / Cross-Version Compare',
          items: [
            { text: '总览 Index', link: '/versions/' },
            {
              text: '战役核心 Campaign Core',
              collapsed: false,
              items: [
                { text: 'Hero', link: '/versions/Hero' },
                { text: 'MobileParty', link: '/versions/MobileParty' },
                { text: 'Clan', link: '/versions/Clan' },
                { text: 'Kingdom', link: '/versions/Kingdom' },
                { text: 'Settlement', link: '/versions/Settlement' },
                { text: 'Town', link: '/versions/Town' },
                { text: 'Village', link: '/versions/Village' }
              ]
            },
            {
              text: '战役系统 Campaign Systems',
              collapsed: false,
              items: [
                { text: 'ItemObject', link: '/versions/ItemObject' },
                { text: 'IssueBase', link: '/versions/IssueBase' },
                { text: 'QuestBase', link: '/versions/QuestBase' },
                { text: 'DiplomacyModel', link: '/versions/DiplomacyModel' },
                { text: 'KingdomManager', link: '/versions/KingdomManager' },
                { text: 'HeroDeveloper', link: '/versions/HeroDeveloper' },
                { text: 'CampaignBehaviorBase', link: '/versions/CampaignBehaviorBase' }
              ]
            },
            {
              text: '战斗 Mount&Blade',
              collapsed: false,
              items: [
                { text: 'Agent', link: '/versions/Agent' },
                { text: 'Mission', link: '/versions/Mission' },
                { text: 'Formation', link: '/versions/Formation' },
                { text: 'MissionBehavior', link: '/versions/MissionBehavior' }
              ]
            }
          ]
        }
      ],

      // Root home
      '/': [
        {
          text: '开始 Start',
          items: [{ text: '首页 Home', link: '/' }]
        }
      ]
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 BannerlordCode'
    },

    notFound: [
      { text: 'Page Not Found', link: '/' }
    ]
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => false
      }
    }
  }
})
