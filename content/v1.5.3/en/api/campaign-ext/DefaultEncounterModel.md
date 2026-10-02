---
title: "DefaultEncounterModel"
description: "Auto-generated class reference for DefaultEncounterModel."
---
# DefaultEncounterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterModel : EncounterModel `
**Base:** EncounterModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs

## Overview

Auto-generated stub for `DefaultEncounterModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### IsEncounterExemptFromHostileActions
`public override bool IsEncounterExemptFromHostileActions(PartyBase side1,PartyBase side2)`

### GetLeaderOfSiegeEvent
`public override Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent,BattleSideEnum side)`

### CanMainHeroDoParleyWithParty
`public override bool CanMainHeroDoParleyWithParty(PartyBase partyBase,out TextObject explanation)`

### GetLeaderOfMapEvent
`public override Hero GetLeaderOfMapEvent(MapEvent mapEvent,BattleSideEnum side)`

### GetCharacterSergeantScore
`public override int GetCharacterSergeantScore(Hero hero)`

### GetDefenderPartiesOfSettlement
`public override IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement,MapEvent.BattleTypes mapEventType)`

### GetNextDefenderPartyOfSettlement
`public override PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement,ref int partyIndex,MapEvent.BattleTypes mapEventType)`

### CreateMapEventComponentForEncounter
`public override MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty,PartyBase defenderParty,MapEvent.BattleTypes battleType)`

### GetSurrenderChance
`public override float GetSurrenderChance(MobileParty defenderParty,MobileParty attackerParty)`

### GetBribeChance
`public override ExplainedNumber GetBribeChance(MobileParty defenderParty,MobileParty attackerParty)`

### GetMapEventSideRunAwayChance
`public override float GetMapEventSideRunAwayChance(MapEventSide mapEventSide)`

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
`public override void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide,List<MobileParty> partiesToJoinEnemySide)`

### CanPlayerForceBanditsToJoin
`public override bool CanPlayerForceBanditsToJoin(out TextObject explanation)`

### IsPartyUnderPlayerCommand
`public override bool IsPartyUnderPlayerCommand(PartyBase party)`

### GetPartiesToTeleportOnMapEventFinalize
`public override MBReadOnlyList<MobileParty> GetPartiesToTeleportOnMapEventFinalize(MapEvent mapEvent)`

## See Also

- [Section index](../)
