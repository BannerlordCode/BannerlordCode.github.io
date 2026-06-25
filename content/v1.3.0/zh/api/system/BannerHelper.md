---
title: "BannerHelper"
description: "BannerHelper 的自动生成类参考。"
---
# BannerHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class BannerHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/BannerHelper.cs`

## 概述

`BannerHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `BannerHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetRandomBannerItemForHero
`public static ItemObject GetRandomBannerItemForHero(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「random banner item for hero」 的结果。

```csharp
// 静态调用，不需要实例
BannerHelper.GetRandomBannerItemForHero(hero);
```

### AddBannerBonusForBanner
`public static void AddBannerBonusForBanner(BannerEffect bannerEffect, BannerComponent bannerComponent, ref ExplainedNumber bonuses)`

**用途 / Purpose:** 将 「banner bonus for banner」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
BannerHelper.AddBannerBonusForBanner(bannerEffect, bannerComponent, bonuses);
```

## 使用示例

```csharp
BannerHelper.Initialize();
```

## 参见

- [本区域目录](../)