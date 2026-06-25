---
title: "SkeletonHorse"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SkeletonHorse`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkeletonHorse

## 心智模型

先把 `SkeletonHorse` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

## 类概述

\| 项目 \| 说明 \|
\|------\|------\|
\| **命名空间** \| TaleWorlds.MountAndBlade (原生引擎) \|
\| **文件路径** \| 原生引擎类，无 C# 源代码 \|

## 说明

`SkeletonHorse` 是原生引擎类，用于管理马匹骨骼实体。该类在 Bannerlord 的原生 C++ 引擎中实现，未在解密的 C# 源代码中暴露。

如需使用马匹骨骼功能，建议通过以下方式：
- 使用 `HorseComponent` 管理马匹数据
- 通过 `Agent.Mount` 相关方法操作骑乘
- 参考 `SkeletonScale` 了解骨骼缩放系统

## 相关类

- `HorseComponent` - 马匹数据组件
- `Agent` - 代理/单位基类
- `SkeletonScale` - 骨骼缩放

## 使用示例

```csharp
var example = new SkeletonHorse();
```
