---
title: "ItemDiscardModel"
description: "ItemDiscardModel 的自动生成类参考。"
---
# ItemDiscardModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ItemDiscardModel : MBGameModel<ItemDiscardModel>`
**Base:** `MBGameModel<ItemDiscardModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ItemDiscardModel.cs`

## 概述

`ItemDiscardModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ItemDiscardModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetXpBonusForDiscardingItems
`public abstract int GetXpBonusForDiscardingItems(ItemRoster itemRoster)`

**用途 / Purpose:** 读取并返回当前对象中 「xp bonus for discarding items」 的结果。

```csharp
// 先通过子系统 API 拿到 ItemDiscardModel 实例
ItemDiscardModel itemDiscardModel = ...;
var result = itemDiscardModel.GetXpBonusForDiscardingItems(itemRoster);
```

### GetXpBonusForDiscardingItem
`public abstract int GetXpBonusForDiscardingItem(ItemObject item, int amount = 1)`

**用途 / Purpose:** 读取并返回当前对象中 「xp bonus for discarding item」 的结果。

```csharp
// 先通过子系统 API 拿到 ItemDiscardModel 实例
ItemDiscardModel itemDiscardModel = ...;
var result = itemDiscardModel.GetXpBonusForDiscardingItem(item, 0);
```

### PlayerCanDonateItem
`public abstract bool PlayerCanDonateItem(ItemObject item)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ItemDiscardModel 实例
ItemDiscardModel itemDiscardModel = ...;
var result = itemDiscardModel.PlayerCanDonateItem(item);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ItemDiscardModel instance = ...;
```

## 参见

- [本区域目录](../)