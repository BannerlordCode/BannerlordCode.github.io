---
title: "DefaultTargetScoreCalculatingModel"
description: "DefaultTargetScoreCalculatingModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 TargetScoreCalculatingModel；公开成员 11 个（方法 6、属性 5、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultTargetScoreCalculatingModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultTargetScoreCalculatingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultTargetScoreCalculatingModel : TargetScoreCalculatingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTargetScoreCalculatingModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultTargetScoreCalculatingModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultTargetScoreCalculatingModel.cs。它是一个 public 类，实现/继承 TargetScoreCalculatingModel，继承链为 DefaultTargetScoreCalculatingModel → TargetScoreCalculatingModel → MBGameModel → GameModel。public/protected 成员共 11 个：6 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultTargetScoreCalculatingModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultTargetScoreCalculatingModel → TargetScoreCalculatingModel → MBGameModel → GameModel。成员构成以方法为主（方法 6/11，属性 5/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultTargetScoreCalculatingModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TravelingToAssignmentFactor` | `public override float TravelingToAssignmentFactor` | 属性 |
| `BesiegingFactor` | `public override float BesiegingFactor` | 属性 |
| `AssaultingTownFactor` | `public override float AssaultingTownFactor` | 属性 |
| `RaidingFactor` | `public override float RaidingFactor` | 属性 |
| `DefendingFactor` | `public override float DefendingFactor` | 属性 |
| `GetDefensivePatrollingFactor` | `public override float GetDefensivePatrollingFactor(bool isNavalPatrolling)` | 方法 |
| `GetOffensivePatrollingFactor` | `public override float GetOffensivePatrollingFactor(bool isNavalPatrolling)` | 方法 |
| `CalculateOffensivePatrollingScoreForSettlement` | `public override float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)` | 方法 |
| `CurrentObjectiveValue` | `public override float CurrentObjectiveValue(MobileParty mobileParty)` | 方法 |
| `CalculateDefensivePatrollingScoreForSettlement` | `public override float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)` | 方法 |
| `GetTargetScoreForFaction` | `public override float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TargetScoreCalculatingModel](../TargetScoreCalculatingModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
