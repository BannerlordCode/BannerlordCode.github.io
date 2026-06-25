---
title: "DefaultEncounterModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultEncounterModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultEncounterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterModel : EncounterModel`
**Base:** `EncounterModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs`

## Overview

`DefaultEncounterModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultEncounterModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NeededMaximumDistanceForEncounteringMobileParty` | `public override float NeededMaximumDistanceForEncounteringMobileParty { get; }` |
| `MaximumAllowedDistanceForEncounteringMobilePartyInArmy` | `public override float MaximumAllowedDistanceForEncounteringMobilePartyInArmy { get; }` |
| `NeededMaximumDistanceForEncounteringTown` | `public override float NeededMaximumDistanceForEncounteringTown { get; }` |
| `NeededMaximumDistanceForEncounteringBlockade` | `public override float NeededMaximumDistanceForEncounteringBlockade { get; }` |
| `NeededMaximumDistanceForEncounteringVillage` | `public override float NeededMaximumDistanceForEncounteringVillage { get; }` |
| `GetEncounterJoiningRadius` | `public override float GetEncounterJoiningRadius { get; }` |
| `PlayerParleyDistance` | `public override float PlayerParleyDistance { get; }` |
| `GetSettlementBeingNearFieldBattleRadius` | `public override float GetSettlementBeingNearFieldBattleRadius { get; }` |

## Key Methods

### IsEncounterExemptFromHostileActions
`public override bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2)`

**Purpose:** Handles logic related to `is encounter exempt from hostile actions`.

### GetLeaderOfSiegeEvent
`public override Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side)`

**Purpose:** Gets the current value of `leader of siege event`.

### CanMainHeroDoParleyWithParty
`public override bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation)`

**Purpose:** Checks whether the current object can `main hero do parley with party`.

### GetLeaderOfMapEvent
`public override Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side)`

**Purpose:** Gets the current value of `leader of map event`.

### GetCharacterSergeantScore
`public override int GetCharacterSergeantScore(Hero hero)`

**Purpose:** Gets the current value of `character sergeant score`.

### GetDefenderPartiesOfSettlement
`public override IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType)`

**Purpose:** Gets the current value of `defender parties of settlement`.

### GetNextDefenderPartyOfSettlement
`public override PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType)`

**Purpose:** Gets the current value of `next defender party of settlement`.

### CreateMapEventComponentForEncounter
`public override MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType)`

**Purpose:** Creates a new `map event component for encounter` instance or object.

### GetSurrenderChance
`public override float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty)`

**Purpose:** Gets the current value of `surrender chance`.

### GetBribeChance
`public override ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty)`

**Purpose:** Gets the current value of `bribe chance`.

### GetMapEventSideRunAwayChance
`public override float GetMapEventSideRunAwayChance(MapEventSide mapEventSide)`

**Purpose:** Gets the current value of `map event side run away chance`.

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
`public override void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**Purpose:** Handles logic related to `find non attached npc parties who will join player encounter`.

### CanPlayerForceBanditsToJoin
`public override bool CanPlayerForceBanditsToJoin(out TextObject explanation)`

**Purpose:** Checks whether the current object can `player force bandits to join`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultEncounterModel>(new MyDefaultEncounterModel());
```

## See Also

- [Complete Class Catalog](../catalog)