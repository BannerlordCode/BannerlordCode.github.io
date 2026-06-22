# Bannerlord Modding Wiki

> 骑砍2模组编辑器完整文档 / Complete documentation for Mount & Blade II: Bannerlord modding SDK

[![Deploy Documentation](https://github.com/BannerlordCode/BannerlordCode.github.io/actions/workflows/docs.yml/badge.svg)](https://github.com/BannerlordCode/BannerlordCode.github.io/actions/workflows/docs.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://bannerlordcode.github.io/)

## 在线文档 / Live Documentation

**https://bannerlordcode.github.io/**

支持中文和英文文档，支持 v1.3.15 和 v1.3.0 两个版本。

Supports Chinese and English documentation, with v1.3.15 and v1.3.0 versions.

## 版本信息 / Version Info

| 版本 | 状态 | 说明 |
|------|------|------|
| **v1.3.15** | 最新 / Latest | SaveSystem 重构，54 个 TaleWorlds 模块，完整文档 |
| **v1.4.5** | 整理中 / In prep | 65 个 DLL，多人/自定义战斗拆分（源码反编译中）|
| **v1.3.0** | 早期 / Earlier | 基础文档，31 个模块，含 SandBox/StoryMode |

## 文档内容 / Documentation Contents

### 指南 / Guide
- 环境搭建 (Environment Setup)
- Gauntlet UI 系统 (Gauntlet UI System)
- 任务系统 (Mission System)
- 战役系统 (Campaign System)
- 存档系统 (Save System)
- 资源管线 (Asset Pipeline)
- 本地化 (Localization)
- 常见模式 (Common Patterns)
- 故障排除 (Troubleshooting)

### API 参考 / API Reference
- Core 核心 (MBSubModuleBase, Module, MBObjectManager)
- Mission 任务 (Agent, Formation, Team, Mission)
- Campaign 战役 (MobileParty, Kingdom, Clan)
- GUI 界面 (GauntletMovie, GauntletSystem)
- Native 原生 (NativeObject, INativeArray)
- Save-System 存档 (SaveManager, SaveAttributes)

### Native 1.3.15 源码参考 / Native 1.3.15 Source Reference
- TaleWorlds.Native.dll 导出函数与托管桥接 (Exports and managed bridge)
- 完整函数目录与地址列表 (Complete function catalog and address list)
- 完整类型定义参考 (Complete type reference)
- 引擎核心、渲染、动画、物理、音频、网络、任务和场景分类索引

### 架构文档 / Architecture
- ⭐ SDK 总览（模块地图）/ SDK Overview (module map) — 分层架构与 mod 入口
- 模块系统 (Module System)
- 存档系统 (Save System)
- 版本差异 (Version Delta) — v1.3.0 / v1.3.15 / v1.4.5 模块级对照
- 🔀 跨版本类对比 (Cross-Version Class Compare) — 同一类在三个版本的 API 变化，源码自动提取 + modder 影响标注

### XML 参考 / XML Reference
- Bug 分析 (Bug Analysis)

## 本地开发 / Local Development

### 前置要求 / Prerequisites

- Bun >= 1.0.0

### 安装依赖 / Install Dependencies

```bash
bun install
```

### 开发模式 / Development Mode

```bash
bun run docs:dev
```

访问 http://localhost:5173 查看文档。

### 构建 / Build

```bash
bun run docs:build
```

构建产物位于 `docs/.vitepress/dist/`。

### 预览 / Preview

```bash
bun run docs:preview
```

## 项目结构 / Project Structure

```
BannerlordCode.github.io/
├── docs/                      # 文档源文件
│   ├── index.md              # 首页
│   ├── public/               # VitePress 静态资源
│   ├── v1.3.15/             # v1.3.15 文档
│   │   ├── zh/              # 中文
│   │   │   └── native-1.3.15-src/  # Native DLL 反编译源码参考
│   │   └── en/              # 英文
│   │       └── native-1.3.15-src/  # Native DLL decompiled source reference
│   ├── v1.3.0/              # v1.3.0 文档
│   │   ├── zh/
│   │   └── en/
│   ├── v1.4.5/              # v1.4.5 文档（模块清单 + 源码布局）
│   ├── versions/            # 🔀 跨版本类对比（源码自动生成）
│   └── .vitepress/          # VitePress 配置
│       └── config.js        # 导航、侧边栏配置
└── tools/                    # 审计/构建辅助
    ├── audit-links.mjs             # 断链检查
    ├── class-version-diff.mjs      # 跨版本类 API 差异提取
    └── gen-version-pages.mjs       # 重新生成 versions/ 页面
```

## 部署 / Deployment

文档通过 GitHub Actions 自动部署：

1. 推送到 `main` 分支
2. GitHub Actions 自动构建
3. 部署到 GitHub Pages

详细流程见 [`.github/workflows/docs.yml`](.github/workflows/docs.yml)。

## 参与贡献 / Contributing

### 添加文档

1. 在对应版本目录下创建 `.md` 文件
2. 在 `docs/.vitepress/config.js` 中添加侧边栏链接
3. 提交 PR

### 规范 / Guidelines

- 中英文双语文档
- 使用 VitePress frontmatter (title, description)
- 链接使用相对路径，不带尾随斜杠
- 代码示例使用 ```csharp

## 相关链接 / Links

- [GitHub Organization](https://github.com/BannerlordCode)
- [Official Modding Forum](https://forums.taleworlds.com/)

## 许可证 / License

MIT License
