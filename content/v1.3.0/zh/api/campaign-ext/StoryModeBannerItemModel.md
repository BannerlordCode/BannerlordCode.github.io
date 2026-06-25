---
title: "StoryModeBannerItemModel"
description: "StoryModeBannerItemModel 的自动生成类参考。"
---
# StoryModeBannerItemModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeBannerItemModel : BannerItemModel`
**Base:** `BannerItemModel`
**File:** `StoryMode/GameComponents/StoryModeBannerItemModel.cs`

## 概述

`StoryModeBannerItemModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeBannerItemModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPossibleRewardBannerItems
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItems()`

**用途 / Purpose:** 读取并返回当前对象中 「possible reward banner items」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBannerItemModel 实例
StoryModeBannerItemModel storyModeBannerItemModel = ...;
var result = storyModeBannerItemModel.GetPossibleRewardBannerItems();
```

### CanBannerBeUpdated
`public override bool CanBannerBeUpdated(ItemObject item)`

**用途 / Purpose:** 检查当前对象是否满足 「banner be updated」 的前置条件。

```csharp
// 先通过子系统 API 拿到 StoryModeBannerItemModel 实例
StoryModeBannerItemModel storyModeBannerItemModel = ...;
var result = storyModeBannerItemModel.CanBannerBeUpdated(item);
```

### GetPossibleRewardBannerItemsForHero
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「possible reward banner items for hero」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBannerItemModel 实例
StoryModeBannerItemModel storyModeBannerItemModel = ...;
var result = storyModeBannerItemModel.GetPossibleRewardBannerItemsForHero(hero);
```

### GetBannerItemLevelForHero
`public override int GetBannerItemLevelForHero(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「banner item level for hero」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBannerItemModel 实例
StoryModeBannerItemModel storyModeBannerItemModel = ...;
var result = storyModeBannerItemModel.GetBannerItemLevelForHero(hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeBannerItemModel>(new MyStoryModeBannerItemModel());
```

## 参见

- [本区域目录](../)