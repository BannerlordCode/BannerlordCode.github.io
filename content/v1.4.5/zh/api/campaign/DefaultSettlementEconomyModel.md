---
title: "DefaultSettlementEconomyModel"
description: "DefaultSettlementEconomyModel 的自动生成类参考。"
---
# DefaultSettlementEconomyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementEconomyModel : SettlementEconomyModel`
**Base:** `SettlementEconomyModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementEconomyModel.cs`

## 概述

`DefaultSettlementEconomyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementEconomyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetValueOfCategory
`public int GetValueOfCategory(ItemCategory category)`

**用途 / Purpose:** 读取并返回当前对象中 value of category 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementEconomyModel 实例
DefaultSettlementEconomyModel defaultSettlementEconomyModel = ...;
var result = defaultSettlementEconomyModel.GetValueOfCategory(category);
```

### GetDailyDemandForCategory
`public override float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity)`

**用途 / Purpose:** 读取并返回当前对象中 daily demand for category 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementEconomyModel 实例
DefaultSettlementEconomyModel defaultSettlementEconomyModel = ...;
var result = defaultSettlementEconomyModel.GetDailyDemandForCategory(town, category, 0);
```

### GetTownGoldChange
`public override int GetTownGoldChange(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 town gold change 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementEconomyModel 实例
DefaultSettlementEconomyModel defaultSettlementEconomyModel = ...;
var result = defaultSettlementEconomyModel.GetTownGoldChange(town);
```

### CalculateDailySettlementBudgetForItemCategory
`public override float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)`

**用途 / Purpose:** 计算daily settlement budget for item category的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementEconomyModel 实例
DefaultSettlementEconomyModel defaultSettlementEconomyModel = ...;
var result = defaultSettlementEconomyModel.CalculateDailySettlementBudgetForItemCategory(town, 0, category);
```

### GetDemandChangeFromValue
`public override float GetDemandChangeFromValue(float purchaseValue)`

**用途 / Purpose:** 读取并返回当前对象中 demand change from value 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementEconomyModel 实例
DefaultSettlementEconomyModel defaultSettlementEconomyModel = ...;
var result = defaultSettlementEconomyModel.GetDemandChangeFromValue(0);
```

### GetEstimatedDemandForCategory
`public override float GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category)`

**用途 / Purpose:** 读取并返回当前对象中 estimated demand for category 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementEconomyModel 实例
DefaultSettlementEconomyModel defaultSettlementEconomyModel = ...;
var result = defaultSettlementEconomyModel.GetEstimatedDemandForCategory(town, itemData, category);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementEconomyModel>(new MyDefaultSettlementEconomyModel());
```

## 参见

- [本区域目录](../)