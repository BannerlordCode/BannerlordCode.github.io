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
var example = new Bannerlord v1.3.15();
```
