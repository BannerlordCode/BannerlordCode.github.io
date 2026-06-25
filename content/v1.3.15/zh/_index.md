---
title: Bannerlord v1.3.15 文档 / Bannerlord v1.3.15 Documentation
description: Bannerlord 模块编辑器 v1.3.15 完整中文文档 / Complete Chinese documentation for Bannerlord modding SDK v1.3.15
---
# Bannerlord v1.3.15 / 骑砍2 v1.3.15

## 心智模型

先把 `Bannerlord v1.3.15` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

欢迎来到 Bannerlord v1.3.15 中文模块编辑文档。

Welcome to the Bannerlord v1.3.15 modding documentation (Chinese).

## 内容导航 / Navigation

> **推荐起点**
> 第一次接触？先读 [SDK 总览 — 模块地图与分层架构](./architecture/sdk-overview) 建立大局观。

- [指南 / Guide](./guide/)
- [API 参考 / API Reference](./api/)
- [XML 参考 / XML Reference](./xml-reference/)
- [原生接口 / Native Reference](./native/)
- [Native 1.3.15 源码参考 / Native 1.3.15 Source Reference](./native-1.3.15-src/)
- [架构 / Architecture](./architecture/)

## 版本信息 / Version Info

- **游戏版本**: 1.3.15
- **发布日期**: 2024
- **主要更新**: SaveSystem 重构, 新增更多 [Obsolete] 标记

## 快速链接 / Quick Links

| 类别 | 描述 |
|------|------|
| [Core 核心](./api/core/) | MBSubModuleBase, Module, MBObjectManager |
| [Mission 任务](./api/mission/) | Mission, Agent, Formation, Team |
| [Campaign 战役](./api/campaign/) | PartyBase, MobileParty, Kingdom, Clan |
| [Native 原生](./native/) | NativeObject, INativeArray, EngineMethod |
| [Native 1.3.15 源码](./native-1.3.15-src/) | TaleWorlds.Native.dll 导出函数、类型表、反编译源码索引 |

## 使用示例

```csharp
// 从下方导航进入指南、API 参考或架构总览开始阅读。
```

<!-- BEGIN SECTION INDEX -->

## ↑ 上级导航

- [版本首页](../)

## ↓ 内容导航

- [API 参考](./api/) — Bannerlord SDK API 完整参考目录
- [架构总览 / Architecture](./architecture/) — Bannerlord SDK 架构入口 — 模块地图、加载流程、存档原理、版本差异
- [入门指南 / Getting Started Guide](./guide/) — 快速上手 Bannerlord 模块开发 / Quick start guide for Bannerlord modding
- [原生接口 / Native Reference](./native/) — 与原生 C++ 引擎交互的接口文档 / Documentation for interacting with native C++ engine via P/Invoke
- [Native 1.3.15 源码参考 / Native 1.3.15 Source Reference](./native-1.3.15-src/) — TaleWorlds.Native.dll v1.3.15 反编译源码参考文档
- [XML 参考 / XML Reference](./xml-reference/) — Bannerlord XML 配置文件完整参考 / Complete XML configuration reference

<!-- END SECTION INDEX -->
