---
title: "DefaultEncounterModel"
description: "DefaultEncounterModel：TaleWorlds.CampaignSystem 的 public 类，继承 EncounterModel；公开成员 26 个（方法 15、属性 11、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs。"
---
# DefaultEncounterModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultEncounterModel : EncounterModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs`

## 概述

DefaultEncounterModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs。它是一个 public 类，实现/继承 EncounterModel，继承链为 DefaultEncounterModel → EncounterModel → MBGameModel。public/protected 成员共 26 个：15 方法、11 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultEncounterModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultEncounterModel → EncounterModel → MBGameModel。成员构成以方法为主（方法 15/26，属性 11/26），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NeededMaximumLandDistanceForEncounteringMobileParty` | `public override float NeededMaximumLandDistanceForEncounteringMobileParty` | 属性 |
| `NeededMaximumNavalDistanceForEncounteringMobileParty` | `public override float NeededMaximumNavalDistanceForEncounteringMobileParty` | 属性 |
| `MaximumAllowedLandDistanceForEncounteringMobilePartyInArmy` | `public override float MaximumAllowedLandDistanceForEncounteringMobilePartyInArmy` | 属性 |
| `MaximumAllowedNavalDistanceForEncounteringMobilePartyInArmy` | `public override float MaximumAllowedNavalDistanceForEncounteringMobilePartyInArmy` | 属性 |
| `NeededMaximumDistanceForEncounteringTown` | `public override float NeededMaximumDistanceForEncounteringTown` | 属性 |
| `NeededMaximumDistanceForEncounteringBlockade` | `public override float NeededMaximumDistanceForEncounteringBlockade` | 属性 |
| `NeededMaximumDistanceForEncounteringVillage` | `public override float NeededMaximumDistanceForEncounteringVillage` | 属性 |
| `GetEncounterJoiningRadius` | `public override float GetEncounterJoiningRadius` | 属性 |
| `PlayerParleyDistance` | `public override float PlayerParleyDistance` | 属性 |
| `GetSettlementBeingNearFieldBattleRadius` | `public override float GetSettlementBeingNearFieldBattleRadius` | 属性 |
| `MinimumNumberOfMenForAttackingVillageViaScene` | `public override int MinimumNumberOfMenForAttackingVillageViaScene` | 属性 |
| `IsEncounterExemptFromHostileActions` | `public override bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2)` | 方法 |
| `GetLeaderOfSiegeEvent` | `public override Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side)` | 方法 |
| `CanMainHeroDoParleyWithParty` | `public override bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation)` | 方法 |
| `GetLeaderOfMapEvent` | `public override Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side)` | 方法 |
| `GetCharacterSergeantScore` | `public override int GetCharacterSergeantScore(Hero hero)` | 方法 |
| `IEnumerable` | `public override IEnumerable<PartyBase>GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType)` | 方法 |
| `GetNextDefenderPartyOfSettlement` | `public override PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType)` | 方法 |
| `CreateMapEventComponentForEncounter` | `public override MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType)` | 方法 |
| `GetSurrenderChance` | `public override float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty)` | 方法 |
| `GetBribeChance` | `public override ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty)` | 方法 |
| `GetMapEventSideRunAwayChance` | `public override float GetMapEventSideRunAwayChance(MapEventSide mapEventSide)` | 方法 |
| `FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter` | `public override void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty>partiesToJoinPlayerSide, List<MobileParty>partiesToJoinEnemySide)` | 方法 |
| `CanPlayerForceBanditsToJoin` | `public override bool CanPlayerForceBanditsToJoin(out TextObject explanation)` | 方法 |
| `IsPartyUnderPlayerCommand` | `public override bool IsPartyUnderPlayerCommand(PartyBase party)` | 方法 |
| `MBReadOnlyList` | `public override MBReadOnlyList<MobileParty>GetPartiesToTeleportOnMapEventFinalize(MapEvent mapEvent)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 EncounterModel](../EncounterModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
