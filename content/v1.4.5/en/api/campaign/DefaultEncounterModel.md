---
title: "DefaultEncounterModel"
description: "Auto-generated class reference for DefaultEncounterModel."
---
# DefaultEncounterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterModel : EncounterModel`
**Base:** `EncounterModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultEncounterModel.cs`

## Overview

`DefaultEncounterModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultEncounterModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsEncounterExemptFromHostileActions
`public override bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2)`

**Purpose:** Determines whether the current object is in the `encounter exempt from hostile actions` state or condition.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.IsEncounterExemptFromHostileActions(side1, side2);
```

### GetLeaderOfSiegeEvent
`public override Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side)`

**Purpose:** Reads and returns the `leader of siege event` value held by the current object.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetLeaderOfSiegeEvent(siegeEvent, side);
```

### CanMainHeroDoParleyWithParty
`public override bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation)`

**Purpose:** Checks whether the current object meets the preconditions for `main hero do parley with party`.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.CanMainHeroDoParleyWithParty(partyBase, explanation);
```

### GetLeaderOfMapEvent
`public override Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side)`

**Purpose:** Reads and returns the `leader of map event` value held by the current object.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetLeaderOfMapEvent(mapEvent, side);
```

### GetCharacterSergeantScore
`public override int GetCharacterSergeantScore(Hero hero)`

**Purpose:** Reads and returns the `character sergeant score` value held by the current object.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetCharacterSergeantScore(hero);
```

### GetDefenderPartiesOfSettlement
`public override IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType)`

**Purpose:** Reads and returns the `defender parties of settlement` value held by the current object.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetDefenderPartiesOfSettlement(settlement, mapEventType);
```

### GetNextDefenderPartyOfSettlement
`public override PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType)`

**Purpose:** Reads and returns the `next defender party of settlement` value held by the current object.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetNextDefenderPartyOfSettlement(settlement, partyIndex, mapEventType);
```

### CreateMapEventComponentForEncounter
`public override MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType)`

**Purpose:** Constructs a new `map event component for encounter` entity and returns it to the caller.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.CreateMapEventComponentForEncounter(attackerParty, defenderParty, battleType);
```

### GetSurrenderChance
`public override float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty)`

**Purpose:** Reads and returns the `surrender chance` value held by the current object.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetSurrenderChance(defenderParty, attackerParty);
```

### GetBribeChance
`public override ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty)`

**Purpose:** Reads and returns the `bribe chance` value held by the current object.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetBribeChance(defenderParty, attackerParty);
```

### GetMapEventSideRunAwayChance
`public override float GetMapEventSideRunAwayChance(MapEventSide mapEventSide)`

**Purpose:** Reads and returns the `map event side run away chance` value held by the current object.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetMapEventSideRunAwayChance(mapEventSide);
```

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
`public override void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**Purpose:** Looks up the matching `non attached npc parties who will join player encounter` in the current collection or scope.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
defaultEncounterModel.FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(partiesToJoinPlayerSide, partiesToJoinEnemySide);
```

### CanPlayerForceBanditsToJoin
`public override bool CanPlayerForceBanditsToJoin(out TextObject explanation)`

**Purpose:** Checks whether the current object meets the preconditions for `player force bandits to join`.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.CanPlayerForceBanditsToJoin(explanation);
```

### IsPartyUnderPlayerCommand
`public override bool IsPartyUnderPlayerCommand(PartyBase party)`

**Purpose:** Determines whether the current object is in the `party under player command` state or condition.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.IsPartyUnderPlayerCommand(party);
```

### GetPartiesToTeleportOnMapEventFinalize
`public override MBReadOnlyList<MobileParty> GetPartiesToTeleportOnMapEventFinalize(MapEvent mapEvent)`

**Purpose:** Reads and returns the `parties to teleport on map event finalize` value held by the current object.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetPartiesToTeleportOnMapEventFinalize(mapEvent);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultEncounterModel>(new MyDefaultEncounterModel());
```

## See Also

- [Area Index](../)