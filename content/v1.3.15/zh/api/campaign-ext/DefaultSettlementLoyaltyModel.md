---
title: "DefaultSettlementLoyaltyModel"
description: "DefaultSettlementLoyaltyModel 的自动生成类参考。"
---
# DefaultSettlementLoyaltyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel`
**Base:** `SettlementLoyaltyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs`

## 概述

`DefaultSettlementLoyaltyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementLoyaltyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `HighLoyaltyProsperityEffect` | `public override float HighLoyaltyProsperityEffect { get; }` |
| `LowLoyaltyProsperityEffect` | `public override int LowLoyaltyProsperityEffect { get; }` |
| `ThresholdForTaxBoost` | `public override int ThresholdForTaxBoost { get; }` |
| `ThresholdForTaxCorruption` | `public override int ThresholdForTaxCorruption { get; }` |
| `ThresholdForHigherTaxCorruption` | `public override int ThresholdForHigherTaxCorruption { get; }` |
| `ThresholdForProsperityBoost` | `public override int ThresholdForProsperityBoost { get; }` |
| `ThresholdForProsperityPenalty` | `public override int ThresholdForProsperityPenalty { get; }` |
| `AdditionalStarvationPenaltyStartDay` | `public override int AdditionalStarvationPenaltyStartDay { get; }` |
| `AdditionalStarvationLoyaltyEffect` | `public override int AdditionalStarvationLoyaltyEffect { get; }` |
| `RebellionStartLoyaltyThreshold` | `public override int RebellionStartLoyaltyThreshold { get; }` |
| `RebelliousStateStartLoyaltyThreshold` | `public override int RebelliousStateStartLoyaltyThreshold { get; }` |
| `LoyaltyBoostAfterRebellionStartValue` | `public override int LoyaltyBoostAfterRebellionStartValue { get; }` |
| `MilitiaBoostPercentage` | `public override int MilitiaBoostPercentage { get; }` |
| `ThresholdForNotableRelationBonus` | `public override float ThresholdForNotableRelationBonus { get; }` |
| `DailyNotableRelationBonus` | `public override int DailyNotableRelationBonus { get; }` |
| `SettlementLoyaltyChangeDueToSecurityThreshold` | `public override int SettlementLoyaltyChangeDueToSecurityThreshold { get; }` |
| `MaximumLoyaltyInSettlement` | `public override int MaximumLoyaltyInSettlement { get; }` |
| `LoyaltyDriftMedium` | `public override int LoyaltyDriftMedium { get; }` |
| `HighSecurityLoyaltyEffect` | `public override float HighSecurityLoyaltyEffect { get; }` |
| `LowSecurityLoyaltyEffect` | `public override float LowSecurityLoyaltyEffect { get; }` |
| `GovernorSameCultureLoyaltyEffect` | `public override float GovernorSameCultureLoyaltyEffect { get; }` |
| `GovernorDifferentCultureLoyaltyEffect` | `public override float GovernorDifferentCultureLoyaltyEffect { get; }` |
| `SettlementOwnerDifferentCultureLoyaltyEffect` | `public override float SettlementOwnerDifferentCultureLoyaltyEffect { get; }` |

## 主要方法

### CalculateLoyaltyChange
`public override ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)`

**用途 / Purpose:** 计算「loyalty change」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementLoyaltyModel 实例
DefaultSettlementLoyaltyModel defaultSettlementLoyaltyModel = ...;
var result = defaultSettlementLoyaltyModel.CalculateLoyaltyChange(town, false);
```

### CalculateGoldGainDueToHighLoyalty
`public override void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 计算「gold gain due to high loyalty」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementLoyaltyModel 实例
DefaultSettlementLoyaltyModel defaultSettlementLoyaltyModel = ...;
defaultSettlementLoyaltyModel.CalculateGoldGainDueToHighLoyalty(town, explainedNumber);
```

### CalculateGoldCutDueToLowLoyalty
`public override void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 计算「gold cut due to low loyalty」的当前值或结果。

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