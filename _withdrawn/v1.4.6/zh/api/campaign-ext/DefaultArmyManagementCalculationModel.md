---
title: "DefaultArmyManagementCalculationModel"
description: "DefaultArmyManagementCalculationModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 ArmyManagementCalculationModel；公开成员 19 个（方法 11、属性 8、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultArmyManagementCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultArmyManagementCalculationModel : ArmyManagementCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultArmyManagementCalculationModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs。它是一个 public 类，实现/继承 ArmyManagementCalculationModel，继承链为 DefaultArmyManagementCalculationModel → ArmyManagementCalculationModel → MBGameModel → GameModel。public/protected 成员共 19 个：11 方法、8 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultArmyManagementCalculationModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultArmyManagementCalculationModel → ArmyManagementCalculationModel → MBGameModel → GameModel。成员构成以方法为主（方法 11/19，属性 8/19），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AIMobilePartySizeRatioToCallToArmy` | `public override float AIMobilePartySizeRatioToCallToArmy` | 属性 |
| `PlayerMobilePartySizeRatioToCallToArmy` | `public override float PlayerMobilePartySizeRatioToCallToArmy` | 属性 |
| `MinimumNeededFoodInDaysToCallToArmy` | `public override float MinimumNeededFoodInDaysToCallToArmy` | 属性 |
| `MaximumDistanceToCallToArmy` | `public override float MaximumDistanceToCallToArmy` | 属性 |
| `InfluenceValuePerGold` | `public override int InfluenceValuePerGold` | 属性 |
| `AverageCallToArmyCost` | `public override int AverageCallToArmyCost` | 属性 |
| `CohesionThresholdForDispersion` | `public override int CohesionThresholdForDispersion` | 属性 |
| `MaximumWaitTime` | `public override float MaximumWaitTime` | 属性 |
| `DailyBeingAtArmyInfluenceAward` | `public override float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)` | 方法 |
| `CalculatePartyInfluenceCost` | `public override int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)` | 方法 |
| `CanLordCreateArmy` | `public override bool CanLordCreateArmy(MobileParty mobileParty, out MBList<MobileParty>possibleArmyMembers)` | 方法 |
| `CalculateTotalInfluenceCost` | `public override int CalculateTotalInfluenceCost(Army army, float percentage)` | 方法 |
| `GetPartySizeScore` | `public override float GetPartySizeScore(MobileParty party)` | 方法 |
| `CalculateDailyCohesionChange` | `public override ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)` | 方法 |
| `CalculateNewCohesion` | `public override int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)` | 方法 |
| `GetCohesionBoostInfluenceCost` | `public override int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)` | 方法 |
| `GetPartyRelation` | `public override int GetPartyRelation(Hero hero)` | 方法 |
| `CanPlayerCreateArmy` | `public override bool CanPlayerCreateArmy(out TextObject disabledReason)` | 方法 |
| `CheckPartyEligibility` | `public override bool CheckPartyEligibility(MobileParty party, out TextObject explanation)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultBanditDensityModel](../DefaultBanditDensityModel/)
