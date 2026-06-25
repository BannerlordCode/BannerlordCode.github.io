---
title: "BannerItemModel"
description: "BannerItemModel 的自动生成类参考。"
---
# BannerItemModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BannerItemModel : MBGameModel<BannerItemModel>`
**Base:** `MBGameModel<BannerItemModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BannerItemModel.cs`

## 概述

`BannerItemModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BannerItemModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPossibleRewardBannerItems
`public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItems()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 possible reward banner items 的结果。

```csharp
// 先通过子系统 API 拿到 BannerItemModel 实例
BannerItemModel bannerItemModel = ...;
var result = bannerItemModel.GetPossibleRewardBannerItems();
```

### GetPossibleRewardBannerItemsForHero
`public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 possible reward banner items for hero 的结果。

```csharp
// 先通过子系统 API 拿到 BannerItemModel 实例
BannerItemModel bannerItemModel = ...;
var result = bannerItemModel.GetPossibleRewardBannerItemsForHero(hero);
```

### GetBannerItemLevelForHero
`public abstract int GetBannerItemLevelForHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 banner item level for hero 的结果。

```csharp
// 先通过子系统 API 拿到 BannerItemModel 实例
BannerItemModel bannerItemModel = ...;
var result = bannerItemModel.GetBannerItemLevelForHero(hero);
```

### CanBannerBeUpdated
`public abstract bool CanBannerBeUpdated(ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 banner be updated 的前置条件。

```csharp
// 先通过子系统 API 拿到 BannerItemModel 实例
BannerItemModel bannerItemModel = ...;
var result = bannerItemModel.CanBannerBeUpdated(item);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BannerItemModel instance = ...;
```

## 参见

- [本区域目录](../)