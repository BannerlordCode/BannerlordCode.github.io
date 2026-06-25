---
title: "SettlementFoodModel"
description: "SettlementFoodModel 的自动生成类参考。"
---
# SettlementFoodModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementFoodModel : MBGameModel<SettlementFoodModel>`
**Base:** `MBGameModel<SettlementFoodModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementFoodModel.cs`

## 概述

`SettlementFoodModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementFoodModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FoodStocksUpperLimit` | `public abstract int FoodStocksUpperLimit { get; }` |
| `NumberOfProsperityToEatOneFood` | `public abstract int NumberOfProsperityToEatOneFood { get; }` |
| `NumberOfMenOnGarrisonToEatOneFood` | `public abstract int NumberOfMenOnGarrisonToEatOneFood { get; }` |
| `CastleFoodStockUpperLimitBonus` | `public abstract int CastleFoodStockUpperLimitBonus { get; }` |

## 主要方法

### CalculateTownFoodStocksChange
`public abstract ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)`

**用途 / Purpose:** 计算town food stocks change的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementFoodModel 实例
SettlementFoodModel settlementFoodModel = ...;
var result = settlementFoodModel.CalculateTownFoodStocksChange(town, false, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SettlementFoodModel instance = ...;
```

## 参见

- [本区域目录](../)