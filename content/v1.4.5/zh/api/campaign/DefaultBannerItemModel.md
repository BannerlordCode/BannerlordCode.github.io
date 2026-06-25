---
title: "DefaultBannerItemModel"
description: "DefaultBannerItemModel 的自动生成类参考。"
---
# DefaultBannerItemModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBannerItemModel : BannerItemModel`
**Base:** `BannerItemModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBannerItemModel.cs`

## 概述

`DefaultBannerItemModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultBannerItemModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPossibleRewardBannerItems
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItems()`

**用途 / Purpose:** 读取并返回当前对象中 「possible reward banner items」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBannerItemModel 实例
DefaultBannerItemModel defaultBannerItemModel = ...;
var result = defaultBannerItemModel.GetPossibleRewardBannerItems();
```

### GetPossibleRewardBannerItemsForHero
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「possible reward banner items for hero」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBannerItemModel 实例
DefaultBannerItemModel defaultBannerItemModel = ...;
var result = defaultBannerItemModel.GetPossibleRewardBannerItemsForHero(hero);
```

### GetBannerItemLevelForHero
`public override int GetBannerItemLevelForHero(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「banner item level for hero」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBannerItemModel 实例
DefaultBannerItemModel defaultBannerItemModel = ...;
var result = defaultBannerItemModel.GetBannerItemLevelForHero(hero);
```

### CanBannerBeUpdated
`public override bool CanBannerBeUpdated(ItemObject item)`

**用途 / Purpose:** 检查当前对象是否满足 「banner be updated」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultBannerItemModel 实例
DefaultBannerItemModel defaultBannerItemModel = ...;
var result = defaultBannerItemModel.CanBannerBeUpdated(item);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultBannerItemModel>(new MyDefaultBannerItemModel());
```

## 参见

- [本区域目录](../)