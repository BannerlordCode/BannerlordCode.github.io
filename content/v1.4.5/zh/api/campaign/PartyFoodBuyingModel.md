---
title: "PartyFoodBuyingModel"
description: "PartyFoodBuyingModel 的自动生成类参考。"
---
# PartyFoodBuyingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyFoodBuyingModel : MBGameModel<PartyFoodBuyingModel>`
**Base:** `MBGameModel<PartyFoodBuyingModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyFoodBuyingModel.cs`

## 概述

`PartyFoodBuyingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyFoodBuyingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | `public abstract float MinimumDaysFoodToLastWhileBuyingFoodFromTown { get; }` |
| `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | `public abstract float MinimumDaysFoodToLastWhileBuyingFoodFromVillage { get; }` |
| `LowCostFoodPriceAverage` | `public abstract float LowCostFoodPriceAverage { get; }` |

## 主要方法

### FindItemToBuy
`public abstract void FindItemToBuy(MobileParty mobileParty, Settlement settlement, out ItemRosterElement itemRosterElement, out float itemElementsPrice)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的item to buy。

```csharp
// 先通过子系统 API 拿到 PartyFoodBuyingModel 实例
PartyFoodBuyingModel partyFoodBuyingModel = ...;
partyFoodBuyingModel.FindItemToBuy(mobileParty, settlement, itemRosterElement, itemElementsPrice);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartyFoodBuyingModel instance = ...;
```

## 参见

- [本区域目录](../)