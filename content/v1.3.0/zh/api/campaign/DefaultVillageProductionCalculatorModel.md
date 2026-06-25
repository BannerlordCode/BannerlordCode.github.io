---
title: "DefaultVillageProductionCalculatorModel"
description: "DefaultVillageProductionCalculatorModel 的自动生成类参考。"
---
# DefaultVillageProductionCalculatorModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageProductionCalculatorModel : VillageProductionCalculatorModel`
**Base:** `VillageProductionCalculatorModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVillageProductionCalculatorModel.cs`

## 概述

`DefaultVillageProductionCalculatorModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultVillageProductionCalculatorModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateDailyProductionAmount
`public override ExplainedNumber CalculateDailyProductionAmount(Village village, ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 计算daily production amount的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultVillageProductionCalculatorModel 实例
DefaultVillageProductionCalculatorModel defaultVillageProductionCalculatorModel = ...;
var result = defaultVillageProductionCalculatorModel.CalculateDailyProductionAmount(village, item);
```

### CalculateDailyFoodProductionAmount
`public override float CalculateDailyFoodProductionAmount(Village village)`

**用途 / Purpose:** **用途 / Purpose:** 计算daily food production amount的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultVillageProductionCalculatorModel 实例
DefaultVillageProductionCalculatorModel defaultVillageProductionCalculatorModel = ...;
var result = defaultVillageProductionCalculatorModel.CalculateDailyFoodProductionAmount(village);
```

### CalculateProductionSpeedOfItemCategory
`public override float CalculateProductionSpeedOfItemCategory(ItemCategory item)`

**用途 / Purpose:** **用途 / Purpose:** 计算production speed of item category的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultVillageProductionCalculatorModel 实例
DefaultVillageProductionCalculatorModel defaultVillageProductionCalculatorModel = ...;
var result = defaultVillageProductionCalculatorModel.CalculateProductionSpeedOfItemCategory(item);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultVillageProductionCalculatorModel>(new MyDefaultVillageProductionCalculatorModel());
```

## 参见

- [本区域目录](../)