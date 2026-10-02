---
title: "EncounterModel"
description: "EncounterModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<EncounterModel>；公开成员 26 个（方法 15、属性 11、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncounterModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class EncounterModel : MBGameModel<EncounterModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

EncounterModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<EncounterModel>，继承链为 EncounterModel → MBGameModel → GameModel。public/protected 成员共 26 个：15 方法、11 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncounterModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 EncounterModel → MBGameModel → GameModel。成员构成以方法为主（方法 15/26，属性 11/26），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NeededMaximumLandDistanceForEncounteringMobileParty` | `public abstract float NeededMaximumLandDistanceForEncounteringMobileParty` | 属性 |
| `NeededMaximumNavalDistanceForEncounteringMobileParty` | `public abstract float NeededMaximumNavalDistanceForEncounteringMobileParty` | 属性 |
| `MaximumAllowedLandDistanceForEncounteringMobilePartyInArmy` | `public abstract float MaximumAllowedLandDistanceForEncounteringMobilePartyInArmy` | 属性 |
| `MaximumAllowedNavalDistanceForEncounteringMobilePartyInArmy` | `public abstract float MaximumAllowedNavalDistanceForEncounteringMobilePartyInArmy` | 属性 |
| `NeededMaximumDistanceForEncounteringTown` | `public abstract float NeededMaximumDistanceForEncounteringTown` | 属性 |
| `NeededMaximumDistanceForEncounteringBlockade` | `public abstract float NeededMaximumDistanceForEncounteringBlockade` | 属性 |
| `NeededMaximumDistanceForEncounteringVillage` | `public abstract float NeededMaximumDistanceForEncounteringVillage` | 属性 |
| `GetEncounterJoiningRadius` | `public abstract float GetEncounterJoiningRadius` | 属性 |
| `GetSettlementBeingNearFieldBattleRadius` | `public abstract float GetSettlementBeingNearFieldBattleRadius` | 属性 |
| `PlayerParleyDistance` | `public abstract float PlayerParleyDistance` | 属性 |
| `MinimumNumberOfMenForAttackingVillageViaScene` | `public abstract int MinimumNumberOfMenForAttackingVillageViaScene` | 属性 |
| `IsEncounterExemptFromHostileActions` | `public abstract bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2);` | 方法 |
| `CanMainHeroDoParleyWithParty` | `public abstract bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation);` | 方法 |
| `GetLeaderOfSiegeEvent` | `public abstract Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side);` | 方法 |
| `GetLeaderOfMapEvent` | `public abstract Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side);` | 方法 |
| `GetCharacterSergeantScore` | `public abstract int GetCharacterSergeantScore(Hero hero);` | 方法 |
| `IEnumerable` | `public abstract IEnumerable<PartyBase>GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType);` | 方法 |
| `GetNextDefenderPartyOfSettlement` | `public abstract PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType);` | 方法 |
| `CreateMapEventComponentForEncounter` | `public abstract MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType);` | 方法 |
| `GetBribeChance` | `public abstract ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty);` | 方法 |
| `GetSurrenderChance` | `public abstract float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty);` | 方法 |
| `GetMapEventSideRunAwayChance` | `public abstract float GetMapEventSideRunAwayChance(MapEventSide mapEventside);` | 方法 |
| `FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter` | `public abstract void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty>partiesToJoinPlayerSide, List<MobileParty>partiesToJoinEnemySide);` | 方法 |
| `CanPlayerForceBanditsToJoin` | `public abstract bool CanPlayerForceBanditsToJoin(out TextObject explanation);` | 方法 |
| `IsPartyUnderPlayerCommand` | `public abstract bool IsPartyUnderPlayerCommand(PartyBase party);` | 方法 |
| `MBReadOnlyList` | `public abstract MBReadOnlyList<MobileParty>GetPartiesToTeleportOnMapEventFinalize(MapEvent mapEvent);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
