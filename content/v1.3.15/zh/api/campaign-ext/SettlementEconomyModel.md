---
title: "SettlementEconomyModel"
description: "SettlementEconomyModel 的自动生成类参考。"
---
# SettlementEconomyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel>`
**Base:** `MBGameModel<SettlementEconomyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs`

## 概述

`SettlementEconomyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementEconomyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEstimatedDemandForCategory
`public abstract float GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category)`

**用途 / Purpose:** 读取并返回当前对象中 「estimated demand for category」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementEconomyModel 实例
SettlementEconomyModel settlementEconomyModel = ...;
var result = settlementEconomyModel.GetEstimatedDemandForCategory(town, itemData, category);
```

### GetDailyDemandForCategory
`public abstract float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity = 0)`

**用途 / Purpose:** 读取并返回当前对象中 「daily demand for category」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementEconomyModel 实例
SettlementEconomyModel settlementEconomyModel = ...;
var result = settlementEconomyModel.GetDailyDemandForCategory(town, category, 0);
```

### GetDemandChangeFromValue
`public abstract float GetDemandChangeFromValue(float purchaseValue)`

**用途 / Purpose:** 读取并返回当前对象中 「demand change from value」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementEconomyModel 实例
SettlementEconomyModel settlementEconomyModel = ...;
var result = settlementEconomyModel.GetDemandChangeFromValue(0);
```

### GetSupplyDemandForCategory
`public abstract ValueTuple<float, float> GetSupplyDemandForCategory(Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand)`

**用途 / Purpose:** 读取并返回当前对象中 「supply demand for category」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementEconomyModel 实例
SettlementEconomyModel settlementEconomyModel = ...;
var result = settlementEconomyModel.GetSupplyDemandForCategory(town, category, 0, 0, 0, 0);
```

### GetTownGoldChange
`public abstract int GetTownGoldChange(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 「town gold change」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementEconomyModel 实例
SettlementEconomyModel settlementEconomyModel = ...;
var result = settlementEconomyModel.GetTownGoldChange(town);
```

### CalculateDailySettlementBudgetForItemCategory
`public abstract float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)`

**用途 / Purpose:** 计算「daily settlement budget for item category」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementEconomyModel 实例
SettlementEconomyModel settlementEconomyModel = ...;
var result = settlementEconomyModel.CalculateDailySettlementBudgetForItemCategory(town, 0, category);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SettlementEconomyModel instance = ...;
```

## 参见

- [本区域目录](../)