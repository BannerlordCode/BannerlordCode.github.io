---
title: "SettlementSecurityModel"
description: "SettlementSecurityModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<SettlementSecurityModel>；公开成员 21 个（方法 5、属性 16、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs。"
---
# SettlementSecurityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs`

## 概述

SettlementSecurityModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<SettlementSecurityModel>，继承链为 SettlementSecurityModel → MBGameModel。public/protected 成员共 21 个：5 方法、16 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementSecurityModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 SettlementSecurityModel → MBGameModel。成员构成以属性为主（属性 16/21，方法 5/21），对外主要以状态读取接口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumSecurityInSettlement` | `public abstract int MaximumSecurityInSettlement` | 属性 |
| `SecurityDriftMedium` | `public abstract int SecurityDriftMedium` | 属性 |
| `MapEventSecurityEffectRadius` | `public abstract float MapEventSecurityEffectRadius` | 属性 |
| `HideoutClearedSecurityEffectRadius` | `public abstract float HideoutClearedSecurityEffectRadius` | 属性 |
| `HideoutClearedSecurityGain` | `public abstract int HideoutClearedSecurityGain` | 属性 |
| `ThresholdForTaxCorruption` | `public abstract int ThresholdForTaxCorruption` | 属性 |
| `ThresholdForHigherTaxCorruption` | `public abstract int ThresholdForHigherTaxCorruption` | 属性 |
| `ThresholdForTaxBoost` | `public abstract int ThresholdForTaxBoost` | 属性 |
| `SettlementTaxBoostPercentage` | `public abstract int SettlementTaxBoostPercentage` | 属性 |
| `SettlementTaxPenaltyPercentage` | `public abstract int SettlementTaxPenaltyPercentage` | 属性 |
| `GetLootedNearbyPartySecurityEffect` | `public abstract float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths);` | 方法 |
| `ThresholdForNotableRelationBonus` | `public abstract int ThresholdForNotableRelationBonus` | 属性 |
| `ThresholdForNotableRelationPenalty` | `public abstract int ThresholdForNotableRelationPenalty` | 属性 |
| `DailyNotableRelationBonus` | `public abstract int DailyNotableRelationBonus` | 属性 |
| `DailyNotableRelationPenalty` | `public abstract int DailyNotableRelationPenalty` | 属性 |
| `DailyNotablePowerBonus` | `public abstract int DailyNotablePowerBonus` | 属性 |
| `DailyNotablePowerPenalty` | `public abstract int DailyNotablePowerPenalty` | 属性 |
| `CalculateSecurityChange` | `public abstract ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false);` | 方法 |
| `GetNearbyBanditPartyDefeatedSecurityEffect` | `public abstract float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths);` | 方法 |
| `CalculateGoldGainDueToHighSecurity` | `public abstract void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber);` | 方法 |
| `CalculateGoldCutDueToLowSecurity` | `public abstract void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
