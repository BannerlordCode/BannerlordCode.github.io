---
title: "RandomOwnerExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RandomOwnerExtensions`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RandomOwnerExtensions

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** `public static class RandomOwnerExtensions`
**领域:** campaign-ext

## 概述

`RandomOwnerExtensions` 位于 `TaleWorlds.CampaignSystem`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RandomIntWithSeed
`public static int RandomIntWithSeed(this IRandomOwner obj, uint seed)`

**用途 / Purpose:** 处理 `random int with seed` 相关逻辑。

### RandomIntWithSeed
`public static int RandomIntWithSeed(this IRandomOwner obj, uint seed, int max)`

**用途 / Purpose:** 处理 `random int with seed` 相关逻辑。

### RandomIntWithSeed
`public static int RandomIntWithSeed(this IRandomOwner obj, uint seed, int min, int max)`

**用途 / Purpose:** 处理 `random int with seed` 相关逻辑。

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(this IRandomOwner obj, uint seed)`

**用途 / Purpose:** 处理 `random float with seed` 相关逻辑。

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(this IRandomOwner obj, uint seed, float max)`

**用途 / Purpose:** 处理 `random float with seed` 相关逻辑。

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(this IRandomOwner obj, uint seed, float min, float max)`

**用途 / Purpose:** 处理 `random float with seed` 相关逻辑。

### RandomInt
`public static int RandomInt(this IRandomOwner obj)`

**用途 / Purpose:** 处理 `random int` 相关逻辑。

### RandomInt
`public static int RandomInt(this IRandomOwner obj, int max)`

**用途 / Purpose:** 处理 `random int` 相关逻辑。

### RandomInt
`public static int RandomInt(this IRandomOwner obj, int min, int max)`

**用途 / Purpose:** 处理 `random int` 相关逻辑。

### RandomFloat
`public static float RandomFloat(this IRandomOwner obj)`

**用途 / Purpose:** 处理 `random float` 相关逻辑。

### RandomFloat
`public static float RandomFloat(this IRandomOwner obj, float max)`

**用途 / Purpose:** 处理 `random float` 相关逻辑。

### RandomFloat
`public static float RandomFloat(this IRandomOwner obj, float min, float max)`

**用途 / Purpose:** 处理 `random float` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
RandomOwnerExtensions.RandomIntWithSeed(obj, 0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
