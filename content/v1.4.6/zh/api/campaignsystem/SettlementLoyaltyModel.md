---
title: "SettlementLoyaltyModel"
description: "SettlementLoyaltyModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<SettlementLoyaltyModel>；公开成员 26 个（方法 3、属性 23、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs。"
---
# SettlementLoyaltyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs`

## 概述

SettlementLoyaltyModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<SettlementLoyaltyModel>，继承链为 SettlementLoyaltyModel → MBGameModel。public/protected 成员共 26 个：3 方法、23 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementLoyaltyModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 SettlementLoyaltyModel → MBGameModel。成员构成以属性为主（属性 23/26，方法 3/26），对外主要以状态读取接口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementLoyaltyChangeDueToSecurityThreshold` | `public abstract int SettlementLoyaltyChangeDueToSecurityThreshold` | 属性 |
| `MaximumLoyaltyInSettlement` | `public abstract int MaximumLoyaltyInSettlement` | 属性 |
| `LoyaltyDriftMedium` | `public abstract int LoyaltyDriftMedium` | 属性 |
| `HighLoyaltyProsperityEffect` | `public abstract float HighLoyaltyProsperityEffect` | 属性 |
| `LowLoyaltyProsperityEffect` | `public abstract int LowLoyaltyProsperityEffect` | 属性 |
| `MilitiaBoostPercentage` | `public abstract int MilitiaBoostPercentage` | 属性 |
| `HighSecurityLoyaltyEffect` | `public abstract float HighSecurityLoyaltyEffect` | 属性 |
| `LowSecurityLoyaltyEffect` | `public abstract float LowSecurityLoyaltyEffect` | 属性 |
| `GovernorSameCultureLoyaltyEffect` | `public abstract float GovernorSameCultureLoyaltyEffect` | 属性 |
| `GovernorDifferentCultureLoyaltyEffect` | `public abstract float GovernorDifferentCultureLoyaltyEffect` | 属性 |
| `SettlementOwnerDifferentCultureLoyaltyEffect` | `public abstract float SettlementOwnerDifferentCultureLoyaltyEffect` | 属性 |
| `ThresholdForTaxBoost` | `public abstract int ThresholdForTaxBoost` | 属性 |
| `RebellionStartLoyaltyThreshold` | `public abstract int RebellionStartLoyaltyThreshold` | 属性 |
| `ThresholdForTaxCorruption` | `public abstract int ThresholdForTaxCorruption` | 属性 |
| `ThresholdForHigherTaxCorruption` | `public abstract int ThresholdForHigherTaxCorruption` | 属性 |
| `ThresholdForProsperityBoost` | `public abstract int ThresholdForProsperityBoost` | 属性 |
| `ThresholdForProsperityPenalty` | `public abstract int ThresholdForProsperityPenalty` | 属性 |
| `AdditionalStarvationPenaltyStartDay` | `public abstract int AdditionalStarvationPenaltyStartDay` | 属性 |
| `AdditionalStarvationLoyaltyEffect` | `public abstract int AdditionalStarvationLoyaltyEffect` | 属性 |
| `RebelliousStateStartLoyaltyThreshold` | `public abstract int RebelliousStateStartLoyaltyThreshold` | 属性 |
| `LoyaltyBoostAfterRebellionStartValue` | `public abstract int LoyaltyBoostAfterRebellionStartValue` | 属性 |
| `ThresholdForNotableRelationBonus` | `public abstract float ThresholdForNotableRelationBonus` | 属性 |
| `DailyNotableRelationBonus` | `public abstract int DailyNotableRelationBonus` | 属性 |
| `CalculateLoyaltyChange` | `public abstract ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false);` | 方法 |
| `CalculateGoldGainDueToHighLoyalty` | `public abstract void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber);` | 方法 |
| `CalculateGoldCutDueToLowLoyalty` | `public abstract void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
