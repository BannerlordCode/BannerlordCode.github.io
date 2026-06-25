---
title: "DefaultItemDiscardModel"
description: "DefaultItemDiscardModel 的自动生成类参考。"
---
# DefaultItemDiscardModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultItemDiscardModel : ItemDiscardModel`
**Base:** `ItemDiscardModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultItemDiscardModel.cs`

## 概述

`DefaultItemDiscardModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultItemDiscardModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### PlayerCanDonateItem
`public override bool PlayerCanDonateItem(ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PlayerCanDonateItem 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultItemDiscardModel 实例
DefaultItemDiscardModel defaultItemDiscardModel = ...;
var result = defaultItemDiscardModel.PlayerCanDonateItem(item);
```

### GetXpBonusForDiscardingItem
`public override int GetXpBonusForDiscardingItem(ItemObject item, int amount = 1)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 xp bonus for discarding item 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultItemDiscardModel 实例
DefaultItemDiscardModel defaultItemDiscardModel = ...;
var result = defaultItemDiscardModel.GetXpBonusForDiscardingItem(item, 0);
```

### GetXpBonusForDiscardingItems
`public override int GetXpBonusForDiscardingItems(ItemRoster itemRoster)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 xp bonus for discarding items 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultItemDiscardModel 实例
DefaultItemDiscardModel defaultItemDiscardModel = ...;
var result = defaultItemDiscardModel.GetXpBonusForDiscardingItems(itemRoster);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultItemDiscardModel>(new MyDefaultItemDiscardModel());
```

## 参见

- [本区域目录](../)