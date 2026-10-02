---
title: "TargetScoreCalculatingModel"
description: "TargetScoreCalculatingModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<TargetScoreCalculatingModel>；公开成员 11 个（方法 6、属性 5、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TargetScoreCalculatingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class TargetScoreCalculatingModel : MBGameModel<TargetScoreCalculatingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

TargetScoreCalculatingModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<TargetScoreCalculatingModel>，继承链为 TargetScoreCalculatingModel → MBGameModel → GameModel。public/protected 成员共 11 个：6 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TargetScoreCalculatingModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 TargetScoreCalculatingModel → MBGameModel → GameModel。成员构成以方法为主（方法 6/11，属性 5/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TravelingToAssignmentFactor` | `public abstract float TravelingToAssignmentFactor` | 属性 |
| `BesiegingFactor` | `public abstract float BesiegingFactor` | 属性 |
| `AssaultingTownFactor` | `public abstract float AssaultingTownFactor` | 属性 |
| `RaidingFactor` | `public abstract float RaidingFactor` | 属性 |
| `DefendingFactor` | `public abstract float DefendingFactor` | 属性 |
| `GetDefensivePatrollingFactor` | `public abstract float GetDefensivePatrollingFactor(bool isNavalPatrolling);` | 方法 |
| `GetOffensivePatrollingFactor` | `public abstract float GetOffensivePatrollingFactor(bool isNavalPatrolling);` | 方法 |
| `GetTargetScoreForFaction` | `public abstract float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength);` | 方法 |
| `CalculateDefensivePatrollingScoreForSettlement` | `public abstract float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty);` | 方法 |
| `CalculateOffensivePatrollingScoreForSettlement` | `public abstract float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty);` | 方法 |
| `CurrentObjectiveValue` | `public abstract float CurrentObjectiveValue(MobileParty mobileParty);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
