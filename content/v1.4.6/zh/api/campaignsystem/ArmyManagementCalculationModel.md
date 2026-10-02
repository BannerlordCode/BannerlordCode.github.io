---
title: "ArmyManagementCalculationModel"
description: "ArmyManagementCalculationModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<ArmyManagementCalculationModel>；公开成员 19 个（方法 11、属性 8、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs。"
---
# ArmyManagementCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ArmyManagementCalculationModel : MBGameModel<ArmyManagementCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs`

## 概述

ArmyManagementCalculationModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<ArmyManagementCalculationModel>，继承链为 ArmyManagementCalculationModel → MBGameModel。public/protected 成员共 19 个：11 方法、8 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArmyManagementCalculationModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 ArmyManagementCalculationModel → MBGameModel。成员构成以方法为主（方法 11/19，属性 8/19），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AIMobilePartySizeRatioToCallToArmy` | `public abstract float AIMobilePartySizeRatioToCallToArmy` | 属性 |
| `PlayerMobilePartySizeRatioToCallToArmy` | `public abstract float PlayerMobilePartySizeRatioToCallToArmy` | 属性 |
| `MinimumNeededFoodInDaysToCallToArmy` | `public abstract float MinimumNeededFoodInDaysToCallToArmy` | 属性 |
| `MaximumDistanceToCallToArmy` | `public abstract float MaximumDistanceToCallToArmy` | 属性 |
| `InfluenceValuePerGold` | `public abstract int InfluenceValuePerGold` | 属性 |
| `AverageCallToArmyCost` | `public abstract int AverageCallToArmyCost` | 属性 |
| `CohesionThresholdForDispersion` | `public abstract int CohesionThresholdForDispersion` | 属性 |
| `MaximumWaitTime` | `public abstract float MaximumWaitTime` | 属性 |
| `CanPlayerCreateArmy` | `public abstract bool CanPlayerCreateArmy(out TextObject disabledReason);` | 方法 |
| `CalculatePartyInfluenceCost` | `public abstract int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party);` | 方法 |
| `DailyBeingAtArmyInfluenceAward` | `public abstract float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty);` | 方法 |
| `CanLordCreateArmy` | `public abstract bool CanLordCreateArmy(MobileParty leaderParty, out MBList<MobileParty>possibleArmyMembers);` | 方法 |
| `CalculateTotalInfluenceCost` | `public abstract int CalculateTotalInfluenceCost(Army army, float percentage);` | 方法 |
| `GetPartySizeScore` | `public abstract float GetPartySizeScore(MobileParty party);` | 方法 |
| `CheckPartyEligibility` | `public abstract bool CheckPartyEligibility(MobileParty party, out TextObject explanation);` | 方法 |
| `GetPartyRelation` | `public abstract int GetPartyRelation(Hero hero);` | 方法 |
| `CalculateDailyCohesionChange` | `public abstract ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false);` | 方法 |
| `CalculateNewCohesion` | `public abstract int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign);` | 方法 |
| `GetCohesionBoostInfluenceCost` | `public abstract int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 BanditDensityModel](../BanditDensityModel)
