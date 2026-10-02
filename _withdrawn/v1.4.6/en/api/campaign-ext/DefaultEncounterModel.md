---
title: "DefaultEncounterModel"
description: "DefaultEncounterModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting EncounterModel; 26 exposed members (15 methods, 11 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultEncounterModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultEncounterModel : EncounterModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultEncounterModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs. It is a public class, implementing/inheriting EncounterModel; the inheritance chain is DefaultEncounterModel → EncounterModel → MBGameModel → GameModel. It exposes 26 public/protected members: 15 methods, 11 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultEncounterModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultEncounterModel → EncounterModel → MBGameModel → GameModel. The surface is method-led (methods 15/26, properties 11/26), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NeededMaximumLandDistanceForEncounteringMobileParty` | `public override float NeededMaximumLandDistanceForEncounteringMobileParty` | property |
| `NeededMaximumNavalDistanceForEncounteringMobileParty` | `public override float NeededMaximumNavalDistanceForEncounteringMobileParty` | property |
| `MaximumAllowedLandDistanceForEncounteringMobilePartyInArmy` | `public override float MaximumAllowedLandDistanceForEncounteringMobilePartyInArmy` | property |
| `MaximumAllowedNavalDistanceForEncounteringMobilePartyInArmy` | `public override float MaximumAllowedNavalDistanceForEncounteringMobilePartyInArmy` | property |
| `NeededMaximumDistanceForEncounteringTown` | `public override float NeededMaximumDistanceForEncounteringTown` | property |
| `NeededMaximumDistanceForEncounteringBlockade` | `public override float NeededMaximumDistanceForEncounteringBlockade` | property |
| `NeededMaximumDistanceForEncounteringVillage` | `public override float NeededMaximumDistanceForEncounteringVillage` | property |
| `GetEncounterJoiningRadius` | `public override float GetEncounterJoiningRadius` | property |
| `PlayerParleyDistance` | `public override float PlayerParleyDistance` | property |
| `GetSettlementBeingNearFieldBattleRadius` | `public override float GetSettlementBeingNearFieldBattleRadius` | property |
| `MinimumNumberOfMenForAttackingVillageViaScene` | `public override int MinimumNumberOfMenForAttackingVillageViaScene` | property |
| `IsEncounterExemptFromHostileActions` | `public override bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2)` | method |
| `GetLeaderOfSiegeEvent` | `public override Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side)` | method |
| `CanMainHeroDoParleyWithParty` | `public override bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation)` | method |
| `GetLeaderOfMapEvent` | `public override Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side)` | method |
| `GetCharacterSergeantScore` | `public override int GetCharacterSergeantScore(Hero hero)` | method |
| `IEnumerable` | `public override IEnumerable<PartyBase>GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType)` | method |
| `GetNextDefenderPartyOfSettlement` | `public override PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType)` | method |
| `CreateMapEventComponentForEncounter` | `public override MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType)` | method |
| `GetSurrenderChance` | `public override float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty)` | method |
| `GetBribeChance` | `public override ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty)` | method |
| `GetMapEventSideRunAwayChance` | `public override float GetMapEventSideRunAwayChance(MapEventSide mapEventSide)` | method |
| `FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter` | `public override void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty>partiesToJoinPlayerSide, List<MobileParty>partiesToJoinEnemySide)` | method |
| `CanPlayerForceBanditsToJoin` | `public override bool CanPlayerForceBanditsToJoin(out TextObject explanation)` | method |
| `IsPartyUnderPlayerCommand` | `public override bool IsPartyUnderPlayerCommand(PartyBase party)` | method |
| `MBReadOnlyList` | `public override MBReadOnlyList<MobileParty>GetPartiesToTeleportOnMapEventFinalize(MapEvent mapEvent)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EncounterModel](../EncounterModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
