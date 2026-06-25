---
title: "SettlementLoyaltyModel"
description: "SettlementLoyaltyModel 的自动生成类参考。"
---
# SettlementLoyaltyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`
**Base:** `MBGameModel<SettlementLoyaltyModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementLoyaltyModel.cs`

## 概述

`SettlementLoyaltyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementLoyaltyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SettlementLoyaltyChangeDueToSecurityThreshold` | `public abstract int SettlementLoyaltyChangeDueToSecurityThreshold { get; }` |
| `MaximumLoyaltyInSettlement` | `public abstract int MaximumLoyaltyInSettlement { get; }` |
| `LoyaltyDriftMedium` | `public abstract int LoyaltyDriftMedium { get; }` |
| `HighLoyaltyProsperityEffect` | `public abstract float HighLoyaltyProsperityEffect { get; }` |
| `LowLoyaltyProsperityEffect` | `public abstract int LowLoyaltyProsperityEffect { get; }` |
| `MilitiaBoostPercentage` | `public abstract int MilitiaBoostPercentage { get; }` |
| `HighSecurityLoyaltyEffect` | `public abstract float HighSecurityLoyaltyEffect { get; }` |
| `LowSecurityLoyaltyEffect` | `public abstract float LowSecurityLoyaltyEffect { get; }` |
| `GovernorSameCultureLoyaltyEffect` | `public abstract float GovernorSameCultureLoyaltyEffect { get; }` |
| `GovernorDifferentCultureLoyaltyEffect` | `public abstract float GovernorDifferentCultureLoyaltyEffect { get; }` |
| `SettlementOwnerDifferentCultureLoyaltyEffect` | `public abstract float SettlementOwnerDifferentCultureLoyaltyEffect { get; }` |
| `ThresholdForTaxBoost` | `public abstract int ThresholdForTaxBoost { get; }` |
| `RebellionStartLoyaltyThreshold` | `public abstract int RebellionStartLoyaltyThreshold { get; }` |
| `ThresholdForTaxCorruption` | `public abstract int ThresholdForTaxCorruption { get; }` |
| `ThresholdForHigherTaxCorruption` | `public abstract int ThresholdForHigherTaxCorruption { get; }` |
| `ThresholdForProsperityBoost` | `public abstract int ThresholdForProsperityBoost { get; }` |
| `ThresholdForProsperityPenalty` | `public abstract int ThresholdForProsperityPenalty { get; }` |
| `AdditionalStarvationPenaltyStartDay` | `public abstract int AdditionalStarvationPenaltyStartDay { get; }` |
| `AdditionalStarvationLoyaltyEffect` | `public abstract int AdditionalStarvationLoyaltyEffect { get; }` |
| `RebelliousStateStartLoyaltyThreshold` | `public abstract int RebelliousStateStartLoyaltyThreshold { get; }` |
| `LoyaltyBoostAfterRebellionStartValue` | `public abstract int LoyaltyBoostAfterRebellionStartValue { get; }` |
| `ThresholdForNotableRelationBonus` | `public abstract float ThresholdForNotableRelationBonus { get; }` |
| `DailyNotableRelationBonus` | `public abstract int DailyNotableRelationBonus { get; }` |

## 主要方法

### CalculateLoyaltyChange
`public abstract ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)`

**用途 / Purpose:** 计算loyalty change的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementLoyaltyModel 实例
SettlementLoyaltyModel settlementLoyaltyModel = ...;
var result = settlementLoyaltyModel.CalculateLoyaltyChange(town, false);
```

### CalculateGoldGainDueToHighLoyalty
`public abstract void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 计算gold gain due to high loyalty的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementLoyaltyModel 实例
SettlementLoyaltyModel settlementLoyaltyModel = ...;
settlementLoyaltyModel.CalculateGoldGainDueToHighLoyalty(town, explainedNumber);
```

### CalculateGoldCutDueToLowLoyalty
`public abstract void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 计算gold cut due to low loyalty的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementLoyaltyModel 实例
SettlementLoyaltyModel settlementLoyaltyModel = ...;
settlementLoyaltyModel.CalculateGoldCutDueToLowLoyalty(town, explainedNumber);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SettlementLoyaltyModel instance = ...;
```

## 参见

- [本区域目录](../)