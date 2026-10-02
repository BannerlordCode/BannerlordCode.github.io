---
title: "DefaultEncounterModel"
description: "DefaultEncounterModel 的自动生成类参考。"
---
# DefaultEncounterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterModel : EncounterModel `
**Base:** EncounterModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs

## 概述

`DefaultEncounterModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### IsEncounterExemptFromHostileActions
`public override bool IsEncounterExemptFromHostileActions(PartyBase side1,PartyBase side2) `

### GetLeaderOfSiegeEvent
`public override Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent,BattleSideEnum side) `

### CanMainHeroDoParleyWithParty
`public override bool CanMainHeroDoParleyWithParty(PartyBase partyBase,out TextObject explanation) `

### GetLeaderOfMapEvent
`public override Hero GetLeaderOfMapEvent(MapEvent mapEvent,BattleSideEnum side) `

### GetCharacterSergeantScore
`public override int GetCharacterSergeantScore(Hero hero) `

### GetDefenderPartiesOfSettlement
`public override IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement,MapEvent.BattleTypes mapEventType) `

### GetNextDefenderPartyOfSettlement
`public override PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement,ref int partyIndex,MapEvent.BattleTypes mapEventType) `

### CreateMapEventComponentForEncounter
`public override MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty,PartyBase defenderParty,MapEvent.BattleTypes battleType) `

### GetSurrenderChance
`public override float GetSurrenderChance(MobileParty defenderParty,MobileParty attackerParty) `

### GetBribeChance
`public override ExplainedNumber GetBribeChance(MobileParty defenderParty,MobileParty attackerParty) `

### GetMapEventSideRunAwayChance
`public override float GetMapEventSideRunAwayChance(MapEventSide mapEventSide) `

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
`public override void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide,List<MobileParty> partiesToJoinEnemySide) `

### CanPlayerForceBanditsToJoin
`public override bool CanPlayerForceBanditsToJoin(out TextObject explanation) `

### IsPartyUnderPlayerCommand
`public override bool IsPartyUnderPlayerCommand(PartyBase party) `

### GetPartiesToTeleportOnMapEventFinalize
`public override MBReadOnlyList<MobileParty> GetPartiesToTeleportOnMapEventFinalize(MapEvent mapEvent) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
