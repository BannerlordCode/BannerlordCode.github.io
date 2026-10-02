---
title: "DefaultSettlementLoyaltyModel"
description: "DefaultSettlementLoyaltyModel：TaleWorlds.CampaignSystem 的 public 类，继承 SettlementLoyaltyModel；公开成员 26 个（方法 3、属性 23、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs。"
---
# DefaultSettlementLoyaltyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs`

## 概述

DefaultSettlementLoyaltyModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs。它是一个 public 类，实现/继承 SettlementLoyaltyModel，继承链为 DefaultSettlementLoyaltyModel → SettlementLoyaltyModel → MBGameModel。public/protected 成员共 26 个：3 方法、23 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultSettlementLoyaltyModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultSettlementLoyaltyModel → SettlementLoyaltyModel → MBGameModel。成员构成以属性为主（属性 23/26，方法 3/26），对外主要以状态读取接口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HighLoyaltyProsperityEffect` | `public override float HighLoyaltyProsperityEffect` | 属性 |
| `LowLoyaltyProsperityEffect` | `public override int LowLoyaltyProsperityEffect` | 属性 |
| `ThresholdForTaxBoost` | `public override int ThresholdForTaxBoost` | 属性 |
| `ThresholdForTaxCorruption` | `public override int ThresholdForTaxCorruption` | 属性 |
| `ThresholdForHigherTaxCorruption` | `public override int ThresholdForHigherTaxCorruption` | 属性 |
| `ThresholdForProsperityBoost` | `public override int ThresholdForProsperityBoost` | 属性 |
| `ThresholdForProsperityPenalty` | `public override int ThresholdForProsperityPenalty` | 属性 |
| `AdditionalStarvationPenaltyStartDay` | `public override int AdditionalStarvationPenaltyStartDay` | 属性 |
| `AdditionalStarvationLoyaltyEffect` | `public override int AdditionalStarvationLoyaltyEffect` | 属性 |
| `RebellionStartLoyaltyThreshold` | `public override int RebellionStartLoyaltyThreshold` | 属性 |
| `RebelliousStateStartLoyaltyThreshold` | `public override int RebelliousStateStartLoyaltyThreshold` | 属性 |
| `LoyaltyBoostAfterRebellionStartValue` | `public override int LoyaltyBoostAfterRebellionStartValue` | 属性 |
| `MilitiaBoostPercentage` | `public override int MilitiaBoostPercentage` | 属性 |
| `ThresholdForNotableRelationBonus` | `public override float ThresholdForNotableRelationBonus` | 属性 |
| `DailyNotableRelationBonus` | `public override int DailyNotableRelationBonus` | 属性 |
| `SettlementLoyaltyChangeDueToSecurityThreshold` | `public override int SettlementLoyaltyChangeDueToSecurityThreshold` | 属性 |
| `MaximumLoyaltyInSettlement` | `public override int MaximumLoyaltyInSettlement` | 属性 |
| `LoyaltyDriftMedium` | `public override int LoyaltyDriftMedium` | 属性 |
| `HighSecurityLoyaltyEffect` | `public override float HighSecurityLoyaltyEffect` | 属性 |
| `LowSecurityLoyaltyEffect` | `public override float LowSecurityLoyaltyEffect` | 属性 |
| `GovernorSameCultureLoyaltyEffect` | `public override float GovernorSameCultureLoyaltyEffect` | 属性 |
| `GovernorDifferentCultureLoyaltyEffect` | `public override float GovernorDifferentCultureLoyaltyEffect` | 属性 |
| `SettlementOwnerDifferentCultureLoyaltyEffect` | `public override float SettlementOwnerDifferentCultureLoyaltyEffect` | 属性 |
| `CalculateLoyaltyChange` | `public override ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)` | 方法 |
| `CalculateGoldGainDueToHighLoyalty` | `public override void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)` | 方法 |
| `CalculateGoldCutDueToLowLoyalty` | `public override void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
