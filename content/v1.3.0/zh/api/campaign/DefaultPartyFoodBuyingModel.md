---
title: "DefaultPartyFoodBuyingModel"
description: "DefaultPartyFoodBuyingModel 的自动生成类参考。"
---
# DefaultPartyFoodBuyingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyFoodBuyingModel : PartyFoodBuyingModel`
**Base:** `PartyFoodBuyingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs`

## 概述

`DefaultPartyFoodBuyingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyFoodBuyingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | `public override float MinimumDaysFoodToLastWhileBuyingFoodFromTown { get; }` |
| `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | `public override float MinimumDaysFoodToLastWhileBuyingFoodFromVillage { get; }` |
| `LowCostFoodPriceAverage` | `public override float LowCostFoodPriceAverage { get; }` |

## 主要方法

### FindItemToBuy
`public override void FindItemToBuy(MobileParty mobileParty, Settlement settlement, out ItemRosterElement itemElement, out float itemElementsPrice)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的item to buy。

```csharp
// 先通过子系统 API 拿到 DefaultPartyFoodBuyingModel 实例
DefaultPartyFoodBuyingModel defaultPartyFoodBuyingModel = ...;
defaultPartyFoodBuyingModel.FindItemToBuy(mobileParty, settlement, itemElement, itemElementsPrice);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyFoodBuyingModel>(new MyDefaultPartyFoodBuyingModel());
```

## 参见

- [本区域目录](../)