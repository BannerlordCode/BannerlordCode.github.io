---
title: "EncounterModel"
description: "Auto-generated class reference for EncounterModel."
---
# EncounterModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncounterModel : MBGameModel<EncounterModel>`
**Base:** `MBGameModel<EncounterModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/EncounterModel.cs`

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

**Purpose:** Determines whether the current object is in the `encounter exempt from hostile actions` state or condition.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
var result = encounterModel.IsEncounterExemptFromHostileActions(side1, side2);
```

### CanMainHeroDoParleyWithParty
`public abstract bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation)`

**Purpose:** Checks whether the current object meets the preconditions for `main hero do parley with party`.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
var result = encounterModel.CanMainHeroDoParleyWithParty(partyBase, explanation);
```

### GetLeaderOfSiegeEvent
`public abstract Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side)`

**Purpose:** Reads and returns the `leader of siege event` value held by the current object.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
var result = encounterModel.GetLeaderOfSiegeEvent(siegeEvent, side);
```

### GetLeaderOfMapEvent
`public abstract Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side)`

**Purpose:** Reads and returns the `leader of map event` value held by the current object.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
var result = encounterModel.GetLeaderOfMapEvent(mapEvent, side);
```

### GetCharacterSergeantScore
`public abstract int GetCharacterSergeantScore(Hero hero)`

**Purpose:** Reads and returns the `character sergeant score` value held by the current object.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
var result = encounterModel.GetCharacterSergeantScore(hero);
```

### GetDefenderPartiesOfSettlement
`public abstract IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType)`

**Purpose:** Reads and returns the `defender parties of settlement` value held by the current object.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
var result = encounterModel.GetDefenderPartiesOfSettlement(settlement, mapEventType);
```

### GetNextDefenderPartyOfSettlement
`public abstract PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType)`

**Purpose:** Reads and returns the `next defender party of settlement` value held by the current object.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
var result = encounterModel.GetNextDefenderPartyOfSettlement(settlement, partyIndex, mapEventType);
```

### CreateMapEventComponentForEncounter
`public abstract MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType)`

**Purpose:** Constructs a new `map event component for encounter` entity and returns it to the caller.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
var result = encounterModel.CreateMapEventComponentForEncounter(attackerParty, defenderParty, battleType);
```

### GetBribeChance
`public abstract ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty)`

**Purpose:** Reads and returns the `bribe chance` value held by the current object.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
var result = encounterModel.GetBribeChance(defenderParty, attackerParty);
```

### GetSurrenderChance
`public abstract float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty)`

**Purpose:** Reads and returns the `surrender chance` value held by the current object.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
var result = encounterModel.GetSurrenderChance(defenderParty, attackerParty);
```

### GetMapEventSideRunAwayChance
`public abstract float GetMapEventSideRunAwayChance(MapEventSide mapEventside)`

**Purpose:** Reads and returns the `map event side run away chance` value held by the current object.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
var result = encounterModel.GetMapEventSideRunAwayChance(mapEventside);
```

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
`public abstract void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**Purpose:** Looks up the matching `non attached npc parties who will join player encounter` in the current collection or scope.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
encounterModel.FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(partiesToJoinPlayerSide, partiesToJoinEnemySide);
```

### CanPlayerForceBanditsToJoin
`public abstract bool CanPlayerForceBanditsToJoin(out TextObject explanation)`

**Purpose:** Checks whether the current object meets the preconditions for `player force bandits to join`.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
var result = encounterModel.CanPlayerForceBanditsToJoin(explanation);
```

### IsPartyUnderPlayerCommand
`public abstract bool IsPartyUnderPlayerCommand(PartyBase party)`

**Purpose:** Determines whether the current object is in the `party under player command` state or condition.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
var result = encounterModel.IsPartyUnderPlayerCommand(party);
```

### GetPartiesToTeleportOnMapEventFinalize
`public abstract MBReadOnlyList<MobileParty> GetPartiesToTeleportOnMapEventFinalize(MapEvent mapEvent)`

**Purpose:** Reads and returns the `parties to teleport on map event finalize` value held by the current object.

```csharp
// Obtain an instance of EncounterModel from the subsystem API first
EncounterModel encounterModel = ...;
var result = encounterModel.GetPartiesToTeleportOnMapEventFinalize(mapEvent);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EncounterModel instance = ...;
```

## See Also

- [Area Index](../)