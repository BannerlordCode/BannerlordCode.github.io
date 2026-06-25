---
title: "DefaultWorkshopModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultWorkshopModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultWorkshopModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultWorkshopModel : WorkshopModel`
**Base:** `WorkshopModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs`

## 概述

`DefaultWorkshopModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultWorkshopModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `WarehouseCapacity` | `public override int WarehouseCapacity { get; }` |
| `DaysForPlayerSaveWorkshopFromBankruptcy` | `public override int DaysForPlayerSaveWorkshopFromBankruptcy { get; }` |
| `CapitalLowLimit` | `public override int CapitalLowLimit { get; }` |
| `InitialCapital` | `public override int InitialCapital { get; }` |
| `DailyExpense` | `public override int DailyExpense { get; }` |
| `DefaultWorkshopCountInSettlement` | `public override int DefaultWorkshopCountInSettlement { get; }` |
| `MaximumWorkshopsPlayerCanHave` | `public override int MaximumWorkshopsPlayerCanHave { get; }` |

## 主要方法

### GetEffectiveConversionSpeedOfProduction
`public override ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescription)`

**用途 / Purpose:** 获取 `effective conversion speed of production` 的当前值。

### GetMaxWorkshopCountForClanTier
`public override int GetMaxWorkshopCountForClanTier(int tier)`

**用途 / Purpose:** 获取 `max workshop count for clan tier` 的当前值。

### GetCostForPlayer
`public override int GetCostForPlayer(Workshop workshop)`

**用途 / Purpose:** 获取 `cost for player` 的当前值。

### GetCostForNotable
`public override int GetCostForNotable(Workshop workshop)`

**用途 / Purpose:** 获取 `cost for notable` 的当前值。

### GetNotableOwnerForWorkshop
`public override Hero GetNotableOwnerForWorkshop(Workshop workshop)`

**用途 / Purpose:** 获取 `notable owner for workshop` 的当前值。

### GetConvertProductionCost
`public override int GetConvertProductionCost(WorkshopType workshopType)`

**用途 / Purpose:** 获取 `convert production cost` 的当前值。

### CanPlayerSellWorkshop
`public override bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player sell workshop`。

### GetTradeXpPerWarehouseProduction
`public override float GetTradeXpPerWarehouseProduction(EquipmentElement production)`

**用途 / Purpose:** 获取 `trade xp per warehouse production` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultWorkshopModel>(new MyDefaultWorkshopModel());
```

## 参见

- [完整类目录](../catalog)