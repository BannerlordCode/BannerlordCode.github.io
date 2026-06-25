---
title: "WorkshopModel"
description: "WorkshopModel 的自动生成类参考。"
---
# WorkshopModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WorkshopModel : MBGameModel<WorkshopModel>`
**Base:** `MBGameModel<WorkshopModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 max workshop count for clan tier 的结果。

```csharp
// 先通过子系统 API 拿到 WorkshopModel 实例
WorkshopModel workshopModel = ...;
var result = workshopModel.GetMaxWorkshopCountForClanTier(0);
```

### GetCostForPlayer
`public abstract int GetCostForPlayer(Workshop workshop)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cost for player 的结果。

```csharp
// 先通过子系统 API 拿到 WorkshopModel 实例
WorkshopModel workshopModel = ...;
var result = workshopModel.GetCostForPlayer(workshop);
```

### GetCostForNotable
`public abstract int GetCostForNotable(Workshop workshop)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cost for notable 的结果。

```csharp
// 先通过子系统 API 拿到 WorkshopModel 实例
WorkshopModel workshopModel = ...;
var result = workshopModel.GetCostForNotable(workshop);
```

### GetNotableOwnerForWorkshop
`public abstract Hero GetNotableOwnerForWorkshop(Workshop workshop)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 notable owner for workshop 的结果。

```csharp
// 先通过子系统 API 拿到 WorkshopModel 实例
WorkshopModel workshopModel = ...;
var result = workshopModel.GetNotableOwnerForWorkshop(workshop);
```

### GetEffectiveConversionSpeedOfProduction
`public abstract ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescriptions)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 effective conversion speed of production 的结果。

```csharp
// 先通过子系统 API 拿到 WorkshopModel 实例
WorkshopModel workshopModel = ...;
var result = workshopModel.GetEffectiveConversionSpeedOfProduction(workshop, 0, false);
```

### GetConvertProductionCost
`public abstract int GetConvertProductionCost(WorkshopType workshopType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 convert production cost 的结果。

```csharp
// 先通过子系统 API 拿到 WorkshopModel 实例
WorkshopModel workshopModel = ...;
var result = workshopModel.GetConvertProductionCost(workshopType);
```

### CanPlayerSellWorkshop
`public abstract bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 player sell workshop 的前置条件。

```csharp
// 先通过子系统 API 拿到 WorkshopModel 实例
WorkshopModel workshopModel = ...;
var result = workshopModel.CanPlayerSellWorkshop(workshop, explanation);
```

### GetTradeXpPerWarehouseProduction
`public abstract float GetTradeXpPerWarehouseProduction(EquipmentElement production)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trade xp per warehouse production 的结果。

```csharp
// 先通过子系统 API 拿到 WorkshopModel 实例
WorkshopModel workshopModel = ...;
var result = workshopModel.GetTradeXpPerWarehouseProduction(production);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
WorkshopModel instance = ...;
```

## 参见

- [本区域目录](../)