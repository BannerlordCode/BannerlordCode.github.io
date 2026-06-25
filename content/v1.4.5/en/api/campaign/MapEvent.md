---
title: "MapEvent"
description: "Auto-generated class reference for MapEvent."
---
# MapEvent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class MapEvent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEvent.cs`

## Overview

`MapEvent` lives in `TaleWorlds.CampaignSystem.MapEvents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapEvents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopUpgradeTracker` | `public TroopUpgradeTracker TroopUpgradeTracker { get; }` |
| `Component` | `public MapEventComponent Component { get; }` |
| `State` | `public MapEventState State { get; }` |
| `InvolvedParties` | `public IEnumerable<PartyBase> InvolvedParties { get; }` |
| `MapEventSettlement` | `public Settlement MapEventSettlement { get; }` |
| `RetreatingSide` | `public BattleSideEnum RetreatingSide { get; }` |
| `EndedByRetreat` | `public bool EndedByRetreat { get; }` |
| `PursuitRoundNumber` | `public int PursuitRoundNumber { get; }` |
| `SimulationContext` | `public PowerCalculationContext SimulationContext { get; }` |
| `Position` | `public CampaignVec2 Position { get; }` |
| `IsInvulnerable` | `public bool IsInvulnerable { get; set; }` |
| `HasWinner` | `public bool HasWinner { get; set; }` |
| `IsPlayerSimulation` | `public bool IsPlayerSimulation { get; }` |
| `WonRounds` | `public MBList<BattleSideEnum> WonRounds { get; }` |
| `WasEverInLootingPhase` | `public bool WasEverInLootingPhase { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; }` |
| `BattleState` | `public BattleState BattleState { get; set; }` |
| `WinningSide` | `public BattleSideEnum WinningSide { get; }` |
| `Winner` | `public MapEventSide Winner { get; }` |
| `DefeatedSide` | `public BattleSideEnum DefeatedSide { get; }` |

## Key Methods

### GetMapEventSide
`public MapEventSide GetMapEventSide(BattleSideEnum side)`

**Purpose:** Reads and returns the `map event side` value held by the current object.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.GetMapEventSide(side);
```

### PartiesOnSide
`public MBReadOnlyList<MapEventParty> PartiesOnSide(BattleSideEnum side)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.PartiesOnSide(side);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.ToString();
```

### BeginWait
`public void BeginWait()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.BeginWait();
```

### FinishBattleAndKeepSiegeEvent
`public void FinishBattleAndKeepSiegeEvent()`

**Purpose:** Concludes the `battle and keep siege event` flow and performs any cleanup.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.FinishBattleAndKeepSiegeEvent();
```

### SetOverrideWinner
`public void SetOverrideWinner(BattleSideEnum winner)`

**Purpose:** Assigns a new value to `override winner` and updates the object's internal state.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.SetOverrideWinner(winner);
```

### SetDefenderPulledBack
`public void SetDefenderPulledBack()`

**Purpose:** Assigns a new value to `defender pulled back` and updates the object's internal state.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.SetDefenderPulledBack();
```

### SimulateBattleSetup
`public void SimulateBattleSetup(FlattenedTroopRoster priorTroops)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.SimulateBattleSetup(priorTroops);
```

### SimulateBattleRound
`public void SimulateBattleRound(int simulationTicksDefender, int simulationTicksAttacker)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.SimulateBattleRound(0, 0);
```

### ResetBattleState
`public void ResetBattleState()`

**Purpose:** Returns `battle state` to its default or initial condition.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.ResetBattleState();
```

### IsPlayerSergeant
`public bool IsPlayerSergeant()`

**Purpose:** Determines whether the current object is in the `player sergeant` state or condition.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.IsPlayerSergeant();
```

### EndByRunAway
`public void EndByRunAway()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.EndByRunAway();
```

### RecalculateStrengthOfSides
`public void RecalculateStrengthOfSides()`

**Purpose:** Recalculates `strength of sides` to reflect the latest state.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.RecalculateStrengthOfSides();
```

### GetNumberOfInvolvedMen
`public int GetNumberOfInvolvedMen()`

**Purpose:** Reads and returns the `number of involved men` value held by the current object.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.GetNumberOfInvolvedMen();
```

### GetNumberOfInvolvedMen
`public int GetNumberOfInvolvedMen(BattleSideEnum side)`

**Purpose:** Reads and returns the `number of involved men` value held by the current object.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.GetNumberOfInvolvedMen(side);
```

### GetOtherSide
`public BattleSideEnum GetOtherSide(BattleSideEnum side)`

**Purpose:** Reads and returns the `other side` value held by the current object.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.GetOtherSide(side);
```

### HasTroopsOnBothSides
`public bool HasTroopsOnBothSides()`

**Purpose:** Determines whether the current object already holds `troops on both sides`.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.HasTroopsOnBothSides();
```

### GetLeaderParty
`public PartyBase GetLeaderParty(BattleSideEnum side)`

**Purpose:** Reads and returns the `leader party` value held by the current object.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.GetLeaderParty(side);
```

### CanPartyJoinBattle
`public bool CanPartyJoinBattle(PartyBase party, BattleSideEnum side)`

**Purpose:** Checks whether the current object meets the preconditions for `party join battle`.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.CanPartyJoinBattle(party, side);
```

### GetStrengthsRelativeToParty
`public void GetStrengthsRelativeToParty(BattleSideEnum partySide, out float partySideStrength, out float opposingSideStrength)`

**Purpose:** Reads and returns the `strengths relative to party` value held by the current object.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.GetStrengthsRelativeToParty(partySide, partySideStrength, opposingSideStrength);
```

### GetPlayerBattleContributionRate
`public float GetPlayerBattleContributionRate()`

**Purpose:** Reads and returns the `player battle contribution rate` value held by the current object.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.GetPlayerBattleContributionRate();
```

### FinalizeEvent
`public void FinalizeEvent()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.FinalizeEvent();
```

### RecalculateRenownAndInfluenceValuesOnPartyInvolved
`public void RecalculateRenownAndInfluenceValuesOnPartyInvolved(PartyBase party)`

**Purpose:** Recalculates `renown and influence values on party involved` to reflect the latest state.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.RecalculateRenownAndInfluenceValuesOnPartyInvolved(party);
```

### DoSurrender
`public void DoSurrender(BattleSideEnum side)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.DoSurrender(side);
```

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**Purpose:** Assigns a new value to `position after map change` and updates the object's internal state.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.SetPositionAfterMapChange(newPosition);
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**Purpose:** Verifies whether `positions for map change and update if needed` holds true for the current object.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.CheckPositionsForMapChangeAndUpdateIfNeeded();
```

### OverrideMapEventSettlementForRaidToFieldBattleSwitch
`public void OverrideMapEventSettlementForRaidToFieldBattleSwitch(Settlement settlement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.OverrideMapEventSettlementForRaidToFieldBattleSwitch(settlement);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapEvent mapEvent = ...;
mapEvent.GetMapEventSide(side);
```

## See Also

- [Area Index](../)