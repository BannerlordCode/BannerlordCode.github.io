---
title: "DefaultWorkshopModel"
description: "DefaultWorkshopModel 的自动生成类参考。"
---
# DefaultWorkshopModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultWorkshopModel : WorkshopModel`
**Base:** `WorkshopModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultWorkshopModel.cs`

## 概述

`DefaultWorkshopModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultWorkshopModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEffectiveConversionSpeedOfProduction
`public override ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescription)`

**用途 / Purpose:** 读取并返回当前对象中 effective conversion speed of production 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultWorkshopModel 实例
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.GetEffectiveConversionSpeedOfProduction(workshop, 0, false);
```

### GetMaxWorkshopCountForClanTier
`public override int GetMaxWorkshopCountForClanTier(int tier)`

**用途 / Purpose:** 读取并返回当前对象中 max workshop count for clan tier 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultWorkshopModel 实例
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.GetMaxWorkshopCountForClanTier(0);
```

### GetCostForPlayer
`public override int GetCostForPlayer(Workshop workshop)`

**用途 / Purpose:** 读取并返回当前对象中 cost for player 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultWorkshopModel 实例
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.GetCostForPlayer(workshop);
```

### GetCostForNotable
`public override int GetCostForNotable(Workshop workshop)`

**用途 / Purpose:** 读取并返回当前对象中 cost for notable 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultWorkshopModel 实例
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.GetCostForNotable(workshop);
```

### GetNotableOwnerForWorkshop
`public override Hero GetNotableOwnerForWorkshop(Workshop workshop)`

**用途 / Purpose:** 读取并返回当前对象中 notable owner for workshop 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultWorkshopModel 实例
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.GetNotableOwnerForWorkshop(workshop);
```

### GetConvertProductionCost
`public override int GetConvertProductionCost(WorkshopType workshopType)`

**用途 / Purpose:** 读取并返回当前对象中 convert production cost 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultWorkshopModel 实例
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.GetConvertProductionCost(workshopType);
```

### CanPlayerSellWorkshop
`public override bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)`

**用途 / Purpose:** 检查当前对象是否满足 player sell workshop 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultWorkshopModel 实例
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.CanPlayerSellWorkshop(workshop, explanation);
```

### GetTradeXpPerWarehouseProduction
`public override float GetTradeXpPerWarehouseProduction(EquipmentElement production)`

**用途 / Purpose:** 读取并返回当前对象中 trade xp per warehouse production 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultWorkshopModel 实例
DefaultWorkshopModel defaultWorkshopModel = ...;
var result = defaultWorkshopModel.GetTradeXpPerWarehouseProduction(production);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultWorkshopModel>(new MyDefaultWorkshopModel());
```

## 参见

- [本区域目录](../)