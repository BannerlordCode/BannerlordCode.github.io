---
title: "SettlementSecurityModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementSecurityModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementSecurityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`
**Base:** `MBGameModel<SettlementSecurityModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementSecurityModel.cs`

## 概述

`SettlementSecurityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementSecurityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaximumSecurityInSettlement` | `public abstract int MaximumSecurityInSettlement { get; }` |
| `SecurityDriftMedium` | `public abstract int SecurityDriftMedium { get; }` |
| `MapEventSecurityEffectRadius` | `public abstract float MapEventSecurityEffectRadius { get; }` |
| `HideoutClearedSecurityEffectRadius` | `public abstract float HideoutClearedSecurityEffectRadius { get; }` |
| `HideoutClearedSecurityGain` | `public abstract int HideoutClearedSecurityGain { get; }` |
| `ThresholdForTaxCorruption` | `public abstract int ThresholdForTaxCorruption { get; }` |
| `ThresholdForHigherTaxCorruption` | `public abstract int ThresholdForHigherTaxCorruption { get; }` |
| `ThresholdForTaxBoost` | `public abstract int ThresholdForTaxBoost { get; }` |
| `SettlementTaxBoostPercentage` | `public abstract int SettlementTaxBoostPercentage { get; }` |
| `SettlementTaxPenaltyPercentage` | `public abstract int SettlementTaxPenaltyPercentage { get; }` |
| `ThresholdForNotableRelationBonus` | `public abstract int ThresholdForNotableRelationBonus { get; }` |
| `ThresholdForNotableRelationPenalty` | `public abstract int ThresholdForNotableRelationPenalty { get; }` |
| `DailyNotableRelationBonus` | `public abstract int DailyNotableRelationBonus { get; }` |
| `DailyNotableRelationPenalty` | `public abstract int DailyNotableRelationPenalty { get; }` |
| `DailyNotablePowerBonus` | `public abstract int DailyNotablePowerBonus { get; }` |
| `DailyNotablePowerPenalty` | `public abstract int DailyNotablePowerPenalty { get; }` |

## 主要方法

### GetLootedNearbyPartySecurityEffect
`public abstract float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**用途 / Purpose:** 获取 `looted nearby party security effect` 的当前值。

### CalculateSecurityChange
`public abstract ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate security change` 相关逻辑。

### GetNearbyBanditPartyDefeatedSecurityEffect
`public abstract float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**用途 / Purpose:** 获取 `nearby bandit party defeated security effect` 的当前值。

### CalculateGoldGainDueToHighSecurity
`public abstract void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 处理 `calculate gold gain due to high security` 相关逻辑。

### CalculateGoldCutDueToLowSecurity
`public abstract void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 处理 `calculate gold cut due to low security` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomSettlementSecurityModel();
```

## 参见

- [完整类目录](../catalog)