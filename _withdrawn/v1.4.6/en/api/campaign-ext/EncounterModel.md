---
title: "EncounterModel"
description: "EncounterModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<EncounterModel>; 26 exposed members (15 methods, 11 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncounterModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class EncounterModel : MBGameModel<EncounterModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

EncounterModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<EncounterModel>; the inheritance chain is EncounterModel → MBGameModel → GameModel. It exposes 26 public/protected members: 15 methods, 11 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncounterModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain EncounterModel → MBGameModel → GameModel. The surface is method-led (methods 15/26, properties 11/26), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NeededMaximumLandDistanceForEncounteringMobileParty` | `public abstract float NeededMaximumLandDistanceForEncounteringMobileParty` | property |
| `NeededMaximumNavalDistanceForEncounteringMobileParty` | `public abstract float NeededMaximumNavalDistanceForEncounteringMobileParty` | property |
| `MaximumAllowedLandDistanceForEncounteringMobilePartyInArmy` | `public abstract float MaximumAllowedLandDistanceForEncounteringMobilePartyInArmy` | property |
| `MaximumAllowedNavalDistanceForEncounteringMobilePartyInArmy` | `public abstract float MaximumAllowedNavalDistanceForEncounteringMobilePartyInArmy` | property |
| `NeededMaximumDistanceForEncounteringTown` | `public abstract float NeededMaximumDistanceForEncounteringTown` | property |
| `NeededMaximumDistanceForEncounteringBlockade` | `public abstract float NeededMaximumDistanceForEncounteringBlockade` | property |
| `NeededMaximumDistanceForEncounteringVillage` | `public abstract float NeededMaximumDistanceForEncounteringVillage` | property |
| `GetEncounterJoiningRadius` | `public abstract float GetEncounterJoiningRadius` | property |
| `GetSettlementBeingNearFieldBattleRadius` | `public abstract float GetSettlementBeingNearFieldBattleRadius` | property |
| `PlayerParleyDistance` | `public abstract float PlayerParleyDistance` | property |
| `MinimumNumberOfMenForAttackingVillageViaScene` | `public abstract int MinimumNumberOfMenForAttackingVillageViaScene` | property |
| `IsEncounterExemptFromHostileActions` | `public abstract bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2);` | method |
| `CanMainHeroDoParleyWithParty` | `public abstract bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation);` | method |
| `GetLeaderOfSiegeEvent` | `public abstract Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side);` | method |
| `GetLeaderOfMapEvent` | `public abstract Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side);` | method |
| `GetCharacterSergeantScore` | `public abstract int GetCharacterSergeantScore(Hero hero);` | method |
| `IEnumerable` | `public abstract IEnumerable<PartyBase>GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType);` | method |
| `GetNextDefenderPartyOfSettlement` | `public abstract PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType);` | method |
| `CreateMapEventComponentForEncounter` | `public abstract MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType);` | method |
| `GetBribeChance` | `public abstract ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty);` | method |
| `GetSurrenderChance` | `public abstract float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty);` | method |
| `GetMapEventSideRunAwayChance` | `public abstract float GetMapEventSideRunAwayChance(MapEventSide mapEventside);` | method |
| `FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter` | `public abstract void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty>partiesToJoinPlayerSide, List<MobileParty>partiesToJoinEnemySide);` | method |
| `CanPlayerForceBanditsToJoin` | `public abstract bool CanPlayerForceBanditsToJoin(out TextObject explanation);` | method |
| `IsPartyUnderPlayerCommand` | `public abstract bool IsPartyUnderPlayerCommand(PartyBase party);` | method |
| `MBReadOnlyList` | `public abstract MBReadOnlyList<MobileParty>GetPartiesToTeleportOnMapEventFinalize(MapEvent mapEvent);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
