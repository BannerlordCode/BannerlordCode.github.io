<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementSecurityModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementSecurityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`
**Base:** `MBGameModel<SettlementSecurityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs`

## 概述

`SettlementSecurityModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SettlementSecurityModel>(new MySettlementSecurityModel())` 注册，以改变其计算逻辑。

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
```csharp
public abstract float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)
```

### CalculateSecurityChange
```csharp
public abstract ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)
```

### GetNearbyBanditPartyDefeatedSecurityEffect
```csharp
public abstract float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)
```

### CalculateGoldGainDueToHighSecurity
```csharp
public abstract void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)
```

### CalculateGoldCutDueToLowSecurity
```csharp
public abstract void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)
```

## 使用示例

```csharp
// SettlementSecurityModel (Model) 的典型用法
Game.Current.ReplaceModel<SettlementSecurityModel>(new MySettlementSecurityModel());
```

## 参见

- [完整类目录](../catalog)