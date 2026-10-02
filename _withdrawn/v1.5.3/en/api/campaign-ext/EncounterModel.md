---
title: "EncounterModel"
description: "Auto-generated class reference for EncounterModel."
---
# EncounterModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncounterModel : MBGameModel<EncounterModel> `
**Base:** MBGameModel<EncounterModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs

## Overview

Auto-generated stub for `EncounterModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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

## See Also

- [Section index](../)
