---
title: "BannerDebugInfo"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerDebugInfo`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerDebugInfo

**命名空间:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct BannerDebugInfo`
**领域:** mission-ext

## 概述

`BannerDebugInfo` 位于 `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateManual
`public static BannerDebugInfo CreateManual(string sourceName)`

**用途 / Purpose:** 创建一个 `manual` 实例或对象。

### CreateWidget
`public static BannerDebugInfo CreateWidget(string sourceName)`

**用途 / Purpose:** 创建一个 `widget` 实例或对象。

### CreateName
`public string CreateName()`

**用途 / Purpose:** 创建一个 `name` 实例或对象。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
BannerDebugInfo.CreateManual("example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
