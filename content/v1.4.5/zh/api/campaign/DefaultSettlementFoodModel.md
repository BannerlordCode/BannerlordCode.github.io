---
title: "DefaultSettlementFoodModel"
description: "DefaultSettlementFoodModel 的自动生成类参考。"
---
# DefaultSettlementFoodModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementFoodModel : SettlementFoodModel`
**Base:** `SettlementFoodModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementFoodModel.cs`

## 概述

`DefaultSettlementFoodModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementFoodModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateTownFoodStocksChange
`public override ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)`

**用途 / Purpose:** 计算「town food stocks change」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementFoodModel 实例
DefaultSettlementFoodModel defaultSettlementFoodModel = ...;
var result = defaultSettlementFoodModel.CalculateTownFoodStocksChange(town, false, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementFoodModel>(new MyDefaultSettlementFoodModel());
```

## 参见

- [本区域目录](../)