---
title: "DefaultTroopSacrificeModel"
description: "DefaultTroopSacrificeModel：TaleWorlds.CampaignSystem 的 public 类，继承 TroopSacrificeModel；公开成员 8 个（方法 5、属性 2、字段 1）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs。"
---
# DefaultTroopSacrificeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultTroopSacrificeModel : TroopSacrificeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs`

## 概述

DefaultTroopSacrificeModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs。它是一个 public 类，实现/继承 TroopSacrificeModel，继承链为 DefaultTroopSacrificeModel → TroopSacrificeModel → MBGameModel。public/protected 成员共 8 个：5 方法、2 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultTroopSacrificeModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultTroopSacrificeModel → TroopSacrificeModel → MBGameModel。成员构成以方法为主（方法 5/8，属性 2/8），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BreakOutArmyLeaderRelationPenalty` | `public override int BreakOutArmyLeaderRelationPenalty` | 属性 |
| `BreakOutArmyMemberRelationPenalty` | `public override int BreakOutArmyMemberRelationPenalty` | 属性 |
| `GetLostTroopCountForBreakingInBesiegedSettlement` | `public override ExplainedNumber GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent)` | 方法 |
| `GetLostTroopCountForBreakingOutOfBesiegedSettlement` | `public override ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent, bool isBreakingOutFromPort)` | 方法 |
| `GetNumberOfTroopsSacrificedForTryingToGetAway` | `public override int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent)` | 方法 |
| `CanPlayerGetAwayFromEncounter` | `public override bool CanPlayerGetAwayFromEncounter(out TextObject explanation)` | 方法 |
| `GetShipsToSacrificeForTryingToGetAway` | `public override void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent, out MBList<Ship>shipsToCapture, out Ship shipToTakeDamage, out float damageToApplyForLastShip)` | 方法 |
| `MinimumNumberOfTroopsRequiredForGetAway` | `public const int MinimumNumberOfTroopsRequiredForGetAway` | 字段 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 TroopSacrificeModel](../TroopSacrificeModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
