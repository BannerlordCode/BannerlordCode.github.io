---
title: "VillageProductionCalculatorModel"
description: "VillageProductionCalculatorModel 的自动生成类参考。"
---
# VillageProductionCalculatorModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VillageProductionCalculatorModel : MBGameModel<VillageProductionCalculatorModel>`
**Base:** `MBGameModel<VillageProductionCalculatorModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/VillageProductionCalculatorModel.cs`

## 概述

`VillageProductionCalculatorModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `VillageProductionCalculatorModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateProductionSpeedOfItemCategory
`public abstract float CalculateProductionSpeedOfItemCategory(ItemCategory item)`

**用途 / Purpose:** 计算「production speed of item category」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 VillageProductionCalculatorModel 实例
VillageProductionCalculatorModel villageProductionCalculatorModel = ...;
var result = villageProductionCalculatorModel.CalculateProductionSpeedOfItemCategory(item);
```

### CalculateDailyProductionAmount
`public abstract ExplainedNumber CalculateDailyProductionAmount(Village village, ItemObject item)`

**用途 / Purpose:** 计算「daily production amount」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 VillageProductionCalculatorModel 实例
VillageProductionCalculatorModel villageProductionCalculatorModel = ...;
var result = villageProductionCalculatorModel.CalculateDailyProductionAmount(village, item);
```

### CalculateDailyFoodProductionAmount
`public abstract float CalculateDailyFoodProductionAmount(Village village)`

**用途 / Purpose:** 计算「daily food production amount」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 VillageProductionCalculatorModel 实例
VillageProductionCalculatorModel villageProductionCalculatorModel = ...;
var result = villageProductionCalculatorModel.CalculateDailyFoodProductionAmount(village);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
VillageProductionCalculatorModel instance = ...;
```

## 参见

- [本区域目录](../)