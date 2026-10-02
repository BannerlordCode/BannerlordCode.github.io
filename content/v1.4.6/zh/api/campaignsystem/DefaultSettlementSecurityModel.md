---
title: "DefaultSettlementSecurityModel"
description: "DefaultSettlementSecurityModel：TaleWorlds.CampaignSystem 的 public 类，继承 SettlementSecurityModel；公开成员 21 个（方法 5、属性 16、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementSecurityModel.cs。"
---
# DefaultSettlementSecurityModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementSecurityModel : SettlementSecurityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementSecurityModel.cs`

## 概述

DefaultSettlementSecurityModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementSecurityModel.cs。它是一个 public 类，实现/继承 SettlementSecurityModel，继承链为 DefaultSettlementSecurityModel → SettlementSecurityModel → MBGameModel。public/protected 成员共 21 个：5 方法、16 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultSettlementSecurityModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultSettlementSecurityModel → SettlementSecurityModel → MBGameModel。成员构成以属性为主（属性 16/21，方法 5/21），对外主要以状态读取接口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementSecurityModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumSecurityInSettlement` | `public override int MaximumSecurityInSettlement` | 属性 |
| `SecurityDriftMedium` | `public override int SecurityDriftMedium` | 属性 |
| `MapEventSecurityEffectRadius` | `public override float MapEventSecurityEffectRadius` | 属性 |
| `HideoutClearedSecurityEffectRadius` | `public override float HideoutClearedSecurityEffectRadius` | 属性 |
| `HideoutClearedSecurityGain` | `public override int HideoutClearedSecurityGain` | 属性 |
| `ThresholdForTaxCorruption` | `public override int ThresholdForTaxCorruption` | 属性 |
| `ThresholdForHigherTaxCorruption` | `public override int ThresholdForHigherTaxCorruption` | 属性 |
| `ThresholdForTaxBoost` | `public override int ThresholdForTaxBoost` | 属性 |
| `SettlementTaxBoostPercentage` | `public override int SettlementTaxBoostPercentage` | 属性 |
| `SettlementTaxPenaltyPercentage` | `public override int SettlementTaxPenaltyPercentage` | 属性 |
| `ThresholdForNotableRelationBonus` | `public override int ThresholdForNotableRelationBonus` | 属性 |
| `ThresholdForNotableRelationPenalty` | `public override int ThresholdForNotableRelationPenalty` | 属性 |
| `DailyNotableRelationBonus` | `public override int DailyNotableRelationBonus` | 属性 |
| `DailyNotableRelationPenalty` | `public override int DailyNotableRelationPenalty` | 属性 |
| `DailyNotablePowerBonus` | `public override int DailyNotablePowerBonus` | 属性 |
| `DailyNotablePowerPenalty` | `public override int DailyNotablePowerPenalty` | 属性 |
| `CalculateSecurityChange` | `public override ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)` | 方法 |
| `GetLootedNearbyPartySecurityEffect` | `public override float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)` | 方法 |
| `GetNearbyBanditPartyDefeatedSecurityEffect` | `public override float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)` | 方法 |
| `CalculateGoldGainDueToHighSecurity` | `public override void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)` | 方法 |
| `CalculateGoldCutDueToLowSecurity` | `public override void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SettlementSecurityModel](../SettlementSecurityModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
