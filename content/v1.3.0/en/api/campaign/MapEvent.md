---
title: "MapEvent"
description: "Auto-generated class reference for MapEvent."
---
# MapEvent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class MapEvent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEvent.cs`

## Overview

`MapEvent` lives in `TaleWorlds.CampaignSystem.MapEvents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapEvents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopUpgradeTracker` | `public TroopUpgradeTracker TroopUpgradeTracker { get; }` |
| `PlayerMapEvent` | `public static MapEvent PlayerMapEvent { get; }` |
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |
| `Component` | `public MapEventComponent Component { get; }` |
| `State` | `public MapEventState State { get; }` |
| `AttackerSide` | `public MapEventSide AttackerSide { get; }` |
| `DefenderSide` | `public MapEventSide DefenderSide { get; }` |
| `InvolvedParties` | `public IEnumerable<PartyBase> InvolvedParties { get; }` |
| `MapEventSettlement` | `public Settlement MapEventSettlement { get; }` |
| `RetreatingSide` | `public BattleSideEnum RetreatingSide { get; }` |
| `EndedByRetreat` | `public bool EndedByRetreat { get; }` |
| `PursuitRoundNumber` | `public int PursuitRoundNumber { get; }` |
| `UpdateCount` | `public int UpdateCount { get; }` |
| `Position` | `public CampaignVec2 Position { get; }` |
| `EventType` | `public MapEvent.BattleTypes EventType { get; set; }` |
| `EventTerrainType` | `public TerrainType EventTerrainType { get; set; }` |
| `IsInvulnerable` | `public bool IsInvulnerable { get; set; }` |
| `IsFieldBattle` | `public bool IsFieldBattle { get; }` |
| `IsRaid` | `public bool IsRaid { get; }` |
| `IsForcingVolunteers` | `public bool IsForcingVolunteers { get; }` |
| `IsForcingSupplies` | `public bool IsForcingSupplies { get; }` |
| `IsSiegeAssault` | `public bool IsSiegeAssault { get; }` |
| `IsHideoutBattle` | `public bool IsHideoutBattle { get; }` |
| `IsSallyOut` | `public bool IsSallyOut { get; }` |
| `IsSiegeOutside` | `public bool IsSiegeOutside { get; }` |
| `IsBlockade` | `public bool IsBlockade { get; }` |
| `IsBlockadeSallyOut` | `public bool IsBlockadeSallyOut { get; }` |
| `IsSiegeAmbush` | `public bool IsSiegeAmbush { get; }` |
| `IsVisible` | `public bool IsVisible { get; }` |
| `IsPlayerMapEvent` | `public bool IsPlayerMapEvent { get; set; }` |
| `BattleState` | `public BattleState BattleState { get; set; }` |
| `Winner` | `public MapEventSide Winner { get; }` |
| `WinningSide` | `public BattleSideEnum WinningSide { get; }` |
| `DefeatedSide` | `public BattleSideEnum DefeatedSide { get; }` |
| `BattleResultExplainers` | `public MapEventResultExplainer BattleResultExplainers { get; }` |
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `BattleStartTime` | `public CampaignTime BattleStartTime { get; }` |
| `HasWinner` | `public bool HasWinner { get; set; }` |
| `IsPlayerSimulation` | `public bool IsPlayerSimulation { get; set; }` |
| `IsNavalMapEvent` | `public bool IsNavalMapEvent { get; }` |
| `WonRounds` | `public MBList<BattleSideEnum> WonRounds { get; }` |

## Key Methods

### BeginWait
`public void BeginWait()`

**Purpose:** **Purpose:** Executes the BeginWait logic.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.BeginWait();
```

### GetMapEventSide
`public MapEventSide GetMapEventSide(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the map event side value held by the this instance.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.GetMapEventSide(side);
```

### PartiesOnSide
`public MBReadOnlyList<MapEventParty> PartiesOnSide(BattleSideEnum side)`

**Purpose:** **Purpose:** Executes the PartiesOnSide logic.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.PartiesOnSide(side);
```

### GetBattleRewards
`public void GetBattleRewards(PartyBase party, out float renownChange, out float influenceChange, out float moraleChange, out float goldChange, out float playerEarnedLootPercentage)`

**Purpose:** **Purpose:** Reads and returns the battle rewards value held by the this instance.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.GetBattleRewards(party, renownChange, influenceChange, moraleChange, goldChange, playerEarnedLootPercentage);
```

### GetNumberOfInvolvedMen
`public int GetNumberOfInvolvedMen()`

**Purpose:** **Purpose:** Reads and returns the number of involved men value held by the this instance.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.GetNumberOfInvolvedMen();
```

### GetNumberOfInvolvedMen
`public int GetNumberOfInvolvedMen(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the number of involved men value held by the this instance.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.GetNumberOfInvolvedMen(side);
```

### FinishBattleAndKeepSiegeEvent
`public void FinishBattleAndKeepSiegeEvent()`

**Purpose:** **Purpose:** Concludes the battle and keep siege event flow and performs any cleanup.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.FinishBattleAndKeepSiegeEvent();
```

### SimulateBattleSetup
`public void SimulateBattleSetup(FlattenedTroopRoster priorTroops)`

**Purpose:** **Purpose:** Executes the SimulateBattleSetup logic.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.SimulateBattleSetup(priorTroops);
```

### SimulateBattleRound
`public void SimulateBattleRound(int simulationTicksDefender, int simulationTicksAttacker)`

**Purpose:** **Purpose:** Executes the SimulateBattleRound logic.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.SimulateBattleRound(0, 0);
```

### SetOverrideWinner
`public void SetOverrideWinner(BattleSideEnum winner)`

**Purpose:** **Purpose:** Assigns a new value to override winner and updates the object's internal state.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.SetOverrideWinner(winner);
```

### SetDefenderPulledBack
`public void SetDefenderPulledBack()`

**Purpose:** **Purpose:** Assigns a new value to defender pulled back and updates the object's internal state.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.SetDefenderPulledBack();
```

### ResetBattleState
`public void ResetBattleState()`

**Purpose:** **Purpose:** Returns battle state to its default or initial condition.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.ResetBattleState();
```

### IsPlayerSergeant
`public bool IsPlayerSergeant()`

**Purpose:** **Purpose:** Determines whether the this instance is in the player sergeant state or condition.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.IsPlayerSergeant();
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.ToString();
```

### FinalizeEvent
`public void FinalizeEvent()`

**Purpose:** **Purpose:** Executes the FinalizeEvent logic.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.FinalizeEvent();
```

### HasTroopsOnBothSides
`public bool HasTroopsOnBothSides()`

**Purpose:** **Purpose:** Determines whether the this instance already holds troops on both sides.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.HasTroopsOnBothSides();
```

### GetLeaderParty
`public PartyBase GetLeaderParty(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the leader party value held by the this instance.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.GetLeaderParty(side);
```

### GetRenownValue
`public float GetRenownValue(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the renown value value held by the this instance.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.GetRenownValue(side);
```

### RecalculateRenownAndInfluenceValues
`public void RecalculateRenownAndInfluenceValues(PartyBase party)`

**Purpose:** **Purpose:** Recalculates renown and influence values to reflect the latest state.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.RecalculateRenownAndInfluenceValues(party);
```

### RecalculateStrengthOfSides
`public void RecalculateStrengthOfSides()`

**Purpose:** **Purpose:** Recalculates strength of sides to reflect the latest state.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.RecalculateStrengthOfSides();
```

### DoSurrender
`public void DoSurrender(BattleSideEnum side)`

**Purpose:** **Purpose:** Executes the DoSurrender logic.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.DoSurrender(side);
```

### EndByRunAway
`public void EndByRunAway()`

**Purpose:** **Purpose:** Executes the EndByRunAway logic.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.EndByRunAway();
```

### GetOtherSide
`public BattleSideEnum GetOtherSide(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the other side value held by the this instance.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.GetOtherSide(side);
```

### CanPartyJoinBattle
`public bool CanPartyJoinBattle(PartyBase party, BattleSideEnum side)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for party join battle.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.CanPartyJoinBattle(party, side);
```

### GetStrengthsRelativeToParty
`public void GetStrengthsRelativeToParty(BattleSideEnum partySide, out float partySideStrength, out float opposingSideStrength)`

**Purpose:** **Purpose:** Reads and returns the strengths relative to party value held by the this instance.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.GetStrengthsRelativeToParty(partySide, partySideStrength, opposingSideStrength);
```

### CheckIfBattleShouldContinueAfterBattleMission
`public bool CheckIfBattleShouldContinueAfterBattleMission(CampaignBattleResult campaignBattleResult)`

**Purpose:** **Purpose:** Verifies whether if battle should continue after battle mission holds true for the this instance.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
var result = mapEvent.CheckIfBattleShouldContinueAfterBattleMission(campaignBattleResult);
```

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**Purpose:** **Purpose:** Assigns a new value to position after map change and updates the object's internal state.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.SetPositionAfterMapChange(newPosition);
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**Purpose:** **Purpose:** Verifies whether positions for map change and update if needed holds true for the this instance.

```csharp
// Obtain an instance of MapEvent from the subsystem API first
MapEvent mapEvent = ...;
mapEvent.CheckPositionsForMapChangeAndUpdateIfNeeded();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapEvent mapEvent = ...;
mapEvent.BeginWait();
```

## See Also

- [Area Index](../)