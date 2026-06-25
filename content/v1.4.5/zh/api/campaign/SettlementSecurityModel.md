---
title: "SettlementSecurityModel"
description: "SettlementSecurityModel 的自动生成类参考。"
---
# SettlementSecurityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`
**Base:** `MBGameModel<SettlementSecurityModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementSecurityModel.cs`

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

**用途 / Purpose:** 读取并返回当前对象中 「looted nearby party security effect」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementSecurityModel 实例
SettlementSecurityModel settlementSecurityModel = ...;
var result = settlementSecurityModel.GetLootedNearbyPartySecurityEffect(town, 0);
```

### CalculateSecurityChange
`public abstract ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)`

**用途 / Purpose:** 计算「security change」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementSecurityModel 实例
SettlementSecurityModel settlementSecurityModel = ...;
var result = settlementSecurityModel.CalculateSecurityChange(town, false);
```

### GetNearbyBanditPartyDefeatedSecurityEffect
`public abstract float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**用途 / Purpose:** 读取并返回当前对象中 「nearby bandit party defeated security effect」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementSecurityModel 实例
SettlementSecurityModel settlementSecurityModel = ...;
var result = settlementSecurityModel.GetNearbyBanditPartyDefeatedSecurityEffect(town, 0);
```

### CalculateGoldGainDueToHighSecurity
`public abstract void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 计算「gold gain due to high security」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementSecurityModel 实例
SettlementSecurityModel settlementSecurityModel = ...;
settlementSecurityModel.CalculateGoldGainDueToHighSecurity(town, explainedNumber);
```

### CalculateGoldCutDueToLowSecurity
`public abstract void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 计算「gold cut due to low security」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementSecurityModel 实例
SettlementSecurityModel settlementSecurityModel = ...;
settlementSecurityModel.CalculateGoldCutDueToLowSecurity(town, explainedNumber);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SettlementSecurityModel instance = ...;
```

## 参见

- [本区域目录](../)