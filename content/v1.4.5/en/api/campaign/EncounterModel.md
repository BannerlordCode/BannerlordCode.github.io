---
title: "EncounterModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncounterModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncounterModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncounterModel : MBGameModel<EncounterModel>`
**Base:** `MBGameModel<EncounterModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/EncounterModel.cs`

## Overview

`EncounterModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `EncounterModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NeededMaximumLandDistanceForEncounteringMobileParty` | `public abstract float NeededMaximumLandDistanceForEncounteringMobileParty { get; }` |
| `NeededMaximumNavalDistanceForEncounteringMobileParty` | `public abstract float NeededMaximumNavalDistanceForEncounteringMobileParty { get; }` |
| `MaximumAllowedLandDistanceForEncounteringMobilePartyInArmy` | `public abstract float MaximumAllowedLandDistanceForEncounteringMobilePartyInArmy { get; }` |
| `MaximumAllowedNavalDistanceForEncounteringMobilePartyInArmy` | `public abstract float MaximumAllowedNavalDistanceForEncounteringMobilePartyInArmy { get; }` |
| `NeededMaximumDistanceForEncounteringTown` | `public abstract float NeededMaximumDistanceForEncounteringTown { get; }` |
| `NeededMaximumDistanceForEncounteringBlockade` | `public abstract float NeededMaximumDistanceForEncounteringBlockade { get; }` |
| `NeededMaximumDistanceForEncounteringVillage` | `public abstract float NeededMaximumDistanceForEncounteringVillage { get; }` |
| `GetEncounterJoiningRadius` | `public abstract float GetEncounterJoiningRadius { get; }` |
| `GetSettlementBeingNearFieldBattleRadius` | `public abstract float GetSettlementBeingNearFieldBattleRadius { get; }` |
| `PlayerParleyDistance` | `public abstract float PlayerParleyDistance { get; }` |
| `MinimumNumberOfMenForAttackingVillageViaScene` | `public abstract int MinimumNumberOfMenForAttackingVillageViaScene { get; }` |

## Key Methods

### IsEncounterExemptFromHostileActions
`public abstract bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2)`

**Purpose:** Handles logic related to `is encounter exempt from hostile actions`.

### CanMainHeroDoParleyWithParty
`public abstract bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation)`

**Purpose:** Checks whether the current object can `main hero do parley with party`.

### GetLeaderOfSiegeEvent
`public abstract Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side)`

**Purpose:** Gets the current value of `leader of siege event`.

### GetLeaderOfMapEvent
`public abstract Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side)`

**Purpose:** Gets the current value of `leader of map event`.

### GetCharacterSergeantScore
`public abstract int GetCharacterSergeantScore(Hero hero)`

**Purpose:** Gets the current value of `character sergeant score`.

### GetDefenderPartiesOfSettlement
`public abstract IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType)`

**Purpose:** Gets the current value of `defender parties of settlement`.

### GetNextDefenderPartyOfSettlement
`public abstract PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType)`

**Purpose:** Gets the current value of `next defender party of settlement`.

### CreateMapEventComponentForEncounter
`public abstract MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType)`

**Purpose:** Creates a new `map event component for encounter` instance or object.

### GetBribeChance
`public abstract ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty)`

**Purpose:** Gets the current value of `bribe chance`.

### GetSurrenderChance
`public abstract float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty)`

**Purpose:** Gets the current value of `surrender chance`.

### GetMapEventSideRunAwayChance
`public abstract float GetMapEventSideRunAwayChance(MapEventSide mapEventside)`

**Purpose:** Gets the current value of `map event side run away chance`.

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
`public abstract void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**Purpose:** Handles logic related to `find non attached npc parties who will join player encounter`.

### CanPlayerForceBanditsToJoin
`public abstract bool CanPlayerForceBanditsToJoin(out TextObject explanation)`

**Purpose:** Checks whether the current object can `player force bandits to join`.

### IsPartyUnderPlayerCommand
`public abstract bool IsPartyUnderPlayerCommand(PartyBase party)`

**Purpose:** Handles logic related to `is party under player command`.

### GetPartiesToTeleportOnMapEventFinalize
`public abstract MBReadOnlyList<MobileParty> GetPartiesToTeleportOnMapEventFinalize(MapEvent mapEvent)`

**Purpose:** Gets the current value of `parties to teleport on map event finalize`.

## Usage Example

```csharp
var implementation = new CustomEncounterModel();
```

## See Also

- [Complete Class Catalog](../catalog)