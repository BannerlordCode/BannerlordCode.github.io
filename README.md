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
| **v1.3.15** | 最新 / Latest | SaveSystem 重构，47 个 TaleWorlds 模块 |
| **v1.3.0** | 早期 / Earlier | 基础文档，23 个 TaleWorlds 模块 |

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

### 架构文档 / Architecture
- 模块系统 (Module System)
- 存档系统 (Save System)

### XML 参考 / XML Reference
- Bug 分析 (Bug Analysis)

## 本地开发 / Local Development

### 前置要求 / Prerequisites

- Node.js >= 20.0.0
- npm

### 安装依赖 / Install Dependencies

```bash
npm install
```

### 开发模式 / Development Mode

```bash
npm run docs:dev
```

访问 http://localhost:5173 查看文档。

### 构建 / Build

```bash
npm run docs:build
```

构建产物位于 `docs/.vitepress/dist/`。

### 预览 / Preview

```bash
npm run docs:preview
```

## 项目结构 / Project Structure

```
BannerlordCode.github.io/
├── docs/                      # 文档源文件
│   ├── index.md              # 首页
│   ├── v1.3.15/             # v1.3.15 文档
│   │   ├── zh/              # 中文
│   │   └── en/              # 英文
│   └── v1.3.0/              # v1.3.0 文档
│       ├── zh/
│       └── en/
├── tmp/                       # 游戏源代码 (不包含在仓库中)
│   ├── bannerlord-1.3.15/
│   └── bannerlord-1.3.0/
└── docs/.vitepress/          # VitePress 配置
    └── config.js             # 导航、侧边栏配置
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

- [游戏源代码 / Source Code](https://github.com/BannerlordCode)
- [GitHub Wiki](https://github.com/BannerlordCode/bannerlord-1.3.15.wiki)
- [Bannerlord Modding Discord](https://discord.gg/bannerloard)
- [Official Modding Forum](https://forums.taleworlds.com/)

## 许可证 / License

MIT License
