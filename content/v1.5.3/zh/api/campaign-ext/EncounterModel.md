---
title: "EncounterModel"
description: "EncounterModel 的自动生成类参考。"
---
# EncounterModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncounterModel : MBGameModel<EncounterModel> `
**Base:** MBGameModel<EncounterModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs

## 概述

`EncounterModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### IsEncounterExemptFromHostileActions
`public abstract bool IsEncounterExemptFromHostileActions(PartyBase side1,PartyBase side2)`

### CanMainHeroDoParleyWithParty
`public abstract bool CanMainHeroDoParleyWithParty(PartyBase partyBase,out TextObject explanation)`

### GetLeaderOfSiegeEvent
`public abstract Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent,BattleSideEnum side)`

### GetLeaderOfMapEvent
`public abstract Hero GetLeaderOfMapEvent(MapEvent mapEvent,BattleSideEnum side)`

### GetCharacterSergeantScore
`public abstract int GetCharacterSergeantScore(Hero hero)`

### GetDefenderPartiesOfSettlement
`public abstract IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement,MapEvent.BattleTypes mapEventType)`

### GetNextDefenderPartyOfSettlement
`public abstract PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement,ref int partyIndex,MapEvent.BattleTypes mapEventType)`

### CreateMapEventComponentForEncounter
`public abstract MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty,PartyBase defenderParty,MapEvent.BattleTypes battleType)`

### GetBribeChance
`public abstract ExplainedNumber GetBribeChance(MobileParty defenderParty,MobileParty attackerParty)`

### GetSurrenderChance
`public abstract float GetSurrenderChance(MobileParty defenderParty,MobileParty attackerParty)`

### GetMapEventSideRunAwayChance
`public abstract float GetMapEventSideRunAwayChance(MapEventSide mapEventside)`

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
`public abstract void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide,List<MobileParty> partiesToJoinEnemySide)`

### CanPlayerForceBanditsToJoin
`public abstract bool CanPlayerForceBanditsToJoin(out TextObject explanation)`

### IsPartyUnderPlayerCommand
`public abstract bool IsPartyUnderPlayerCommand(PartyBase party)`

### GetPartiesToTeleportOnMapEventFinalize
`public abstract MBReadOnlyList<MobileParty> GetPartiesToTeleportOnMapEventFinalize(MapEvent mapEvent)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
