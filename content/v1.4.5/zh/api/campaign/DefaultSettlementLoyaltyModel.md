---
title: "DefaultSettlementLoyaltyModel"
description: "DefaultSettlementLoyaltyModel 的自动生成类参考。"
---
# DefaultSettlementLoyaltyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel`
**Base:** `SettlementLoyaltyModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementLoyaltyModel.cs`

## 概述

`DefaultSettlementLoyaltyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementLoyaltyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateLoyaltyChange
`public override ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)`

**用途 / Purpose:** **用途 / Purpose:** 计算loyalty change的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementLoyaltyModel 实例
DefaultSettlementLoyaltyModel defaultSettlementLoyaltyModel = ...;
var result = defaultSettlementLoyaltyModel.CalculateLoyaltyChange(town, false);
```

### CalculateGoldGainDueToHighLoyalty
`public override void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** **用途 / Purpose:** 计算gold gain due to high loyalty的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementLoyaltyModel 实例
DefaultSettlementLoyaltyModel defaultSettlementLoyaltyModel = ...;
defaultSettlementLoyaltyModel.CalculateGoldGainDueToHighLoyalty(town, explainedNumber);
```

### CalculateGoldCutDueToLowLoyalty
`public override void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** **用途 / Purpose:** 计算gold cut due to low loyalty的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementLoyaltyModel 实例
DefaultSettlementLoyaltyModel defaultSettlementLoyaltyModel = ...;
defaultSettlementLoyaltyModel.CalculateGoldCutDueToLowLoyalty(town, explainedNumber);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementLoyaltyModel>(new MyDefaultSettlementLoyaltyModel());
```

## 参见

- [本区域目录](../)