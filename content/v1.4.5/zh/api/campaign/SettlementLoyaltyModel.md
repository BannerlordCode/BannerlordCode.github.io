---
title: "SettlementLoyaltyModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementLoyaltyModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementLoyaltyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`
**Base:** `MBGameModel<SettlementLoyaltyModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementLoyaltyModel.cs`

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

**用途 / Purpose:** 处理 `calculate loyalty change` 相关逻辑。

### CalculateGoldGainDueToHighLoyalty
`public abstract void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 处理 `calculate gold gain due to high loyalty` 相关逻辑。

### CalculateGoldCutDueToLowLoyalty
`public abstract void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 处理 `calculate gold cut due to low loyalty` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomSettlementLoyaltyModel();
```

## 参见

- [完整类目录](../catalog)