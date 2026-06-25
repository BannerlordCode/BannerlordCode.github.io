---
title: "WorkshopModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WorkshopModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WorkshopModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WorkshopModel : MBGameModel<WorkshopModel>`
**Base:** `MBGameModel<WorkshopModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/WorkshopModel.cs`

## 概述

`WorkshopModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `WorkshopModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `DaysForPlayerSaveWorkshopFromBankruptcy` | `public abstract int DaysForPlayerSaveWorkshopFromBankruptcy { get; }` |
| `CapitalLowLimit` | `public abstract int CapitalLowLimit { get; }` |
| `InitialCapital` | `public abstract int InitialCapital { get; }` |
| `DailyExpense` | `public abstract int DailyExpense { get; }` |
| `WarehouseCapacity` | `public abstract int WarehouseCapacity { get; }` |
| `DefaultWorkshopCountInSettlement` | `public abstract int DefaultWorkshopCountInSettlement { get; }` |
| `MaximumWorkshopsPlayerCanHave` | `public abstract int MaximumWorkshopsPlayerCanHave { get; }` |

## 主要方法

### GetMaxWorkshopCountForClanTier
`public abstract int GetMaxWorkshopCountForClanTier(int tier)`

**用途 / Purpose:** 获取 `max workshop count for clan tier` 的当前值。

### GetCostForPlayer
`public abstract int GetCostForPlayer(Workshop workshop)`

**用途 / Purpose:** 获取 `cost for player` 的当前值。

### GetCostForNotable
`public abstract int GetCostForNotable(Workshop workshop)`

**用途 / Purpose:** 获取 `cost for notable` 的当前值。

### GetNotableOwnerForWorkshop
`public abstract Hero GetNotableOwnerForWorkshop(Workshop workshop)`

**用途 / Purpose:** 获取 `notable owner for workshop` 的当前值。

### GetEffectiveConversionSpeedOfProduction
`public abstract ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescriptions)`

**用途 / Purpose:** 获取 `effective conversion speed of production` 的当前值。

### GetConvertProductionCost
`public abstract int GetConvertProductionCost(WorkshopType workshopType)`

**用途 / Purpose:** 获取 `convert production cost` 的当前值。

### CanPlayerSellWorkshop
`public abstract bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player sell workshop`。

### GetTradeXpPerWarehouseProduction
`public abstract float GetTradeXpPerWarehouseProduction(EquipmentElement production)`

**用途 / Purpose:** 获取 `trade xp per warehouse production` 的当前值。

## 使用示例

```csharp
var implementation = new CustomWorkshopModel();
```

## 参见

- [完整类目录](../catalog)