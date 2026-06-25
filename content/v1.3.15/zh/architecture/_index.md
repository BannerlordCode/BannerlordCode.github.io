---
title: 架构总览 / Architecture
description: Bannerlord SDK 架构入口 — 模块地图、加载流程、存档原理、版本差异
---
# 架构总览

## 心智模型

先把 `架构总览` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

从这里出发，理解 Bannerlord SDK 的整体结构与关键子系统。

---

## ↑ 上级导航 / Parent Navigation

- [🏠 首页 / Home](../../) — 版本选择
- [📚 API 参考 / API Reference](../api/) — 4819 类型完整目录

## 🌳 树状导航 / Tree Navigation

```
Bannerlord SDK v1.3.15
├── 🏗️ 架构总览 (本页)
│   ├── ⭐ SDK 总览 — 54 模块分层地图
│   ├── 📦 模块系统 — MBSubModuleBase 生命周期
│   ├── 💾 存档系统 — SaveManager 原理
│   └── 📊 版本差异 — 1.3.0→1.3.15→1.4.5 对照
├── 📖 开发指南 / Guide
│   └── UI/Mission/Campaign/Save 实战教程
├── 📚 API 参考 / API
│   └── 4819 类型，12 个领域子目录
└── 🔀 跨版本对比 / Versions
    └── 逐类 API 差异页面
```

## 🔀 同级导航 / Sibling Navigation

| 同级页面 | 内容 |
|---------|------|
| [📖 开发指南](../guide/) | UI/Mission/Campaign/Save 实战教程 |
| [📚 API 参考](../api/) | 4819 类型完整参考目录 |
| [🔀 跨版本对比](../../../versions/) | 1.3.0 → 1.3.15 → 1.4.5 逐类 API 差异 |

## ↓ 子级导航 / Child Navigation — 架构文档

| 文档 | 内容 | 关键类 |
|------|------|--------|
| [⭐ SDK 总览](./sdk-overview) | 全部 54 个模块的分层地图、职责、mod 入口速查 | `MBSubModuleBase`, `Module` |
| [📦 模块系统](./module-system) | `MBSubModuleBase` 生命周期、模块加载流程、SubModule.xml | `MBSubModuleBase`, `SubModule` |
| [💾 存档系统](./save-system) | `SaveManager` / `SaveContext` / `LoadContext` 原理与 `[SaveableField]` 用法 | `SaveManager`, `SaveContext` |
| [📊 版本差异](./version-delta) | v1.3.0 / v1.3.15 / v1.4.5 模块对照与迁移建议 | — |

## 层次速记 / Layer Cheat Sheet

```
基础库 Library → 系统基座 System → 核心数据 Core → 引擎 Engine →
UI Gauntlet → 存档 SaveSystem → 战斗 MountAndBlade → 战役 Campaign → 平台服务
```

详见 [SDK 总览](./sdk-overview)。
