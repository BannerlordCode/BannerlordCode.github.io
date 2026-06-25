---
title: "MapEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEvent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapEvent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class MapEvent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEvent.cs`

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

**Purpose:** Gets the current value of `map event side`.

### PartiesOnSide
`public MBReadOnlyList<MapEventParty> PartiesOnSide(BattleSideEnum side)`

**Purpose:** Handles logic related to `parties on side`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### BeginWait
`public void BeginWait()`

**Purpose:** Handles logic related to `begin wait`.

### FinishBattleAndKeepSiegeEvent
`public void FinishBattleAndKeepSiegeEvent()`

**Purpose:** Handles logic related to `finish battle and keep siege event`.

### SetOverrideWinner
`public void SetOverrideWinner(BattleSideEnum winner)`

**Purpose:** Sets the value or state of `override winner`.

### SetDefenderPulledBack
`public void SetDefenderPulledBack()`

**Purpose:** Sets the value or state of `defender pulled back`.

### SimulateBattleSetup
`public void SimulateBattleSetup(FlattenedTroopRoster priorTroops)`

**Purpose:** Handles logic related to `simulate battle setup`.

### SimulateBattleRound
`public void SimulateBattleRound(int simulationTicksDefender, int simulationTicksAttacker)`

**Purpose:** Handles logic related to `simulate battle round`.

### ResetBattleState
`public void ResetBattleState()`

**Purpose:** Resets `battle state` to its initial state.

### IsPlayerSergeant
`public bool IsPlayerSergeant()`

**Purpose:** Handles logic related to `is player sergeant`.

### EndByRunAway
`public void EndByRunAway()`

**Purpose:** Handles logic related to `end by run away`.

### RecalculateStrengthOfSides
`public void RecalculateStrengthOfSides()`

**Purpose:** Handles logic related to `recalculate strength of sides`.

### GetNumberOfInvolvedMen
`public int GetNumberOfInvolvedMen()`

**Purpose:** Gets the current value of `number of involved men`.

### GetNumberOfInvolvedMen
`public int GetNumberOfInvolvedMen(BattleSideEnum side)`

**Purpose:** Gets the current value of `number of involved men`.

### GetOtherSide
`public BattleSideEnum GetOtherSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `other side`.

### HasTroopsOnBothSides
`public bool HasTroopsOnBothSides()`

**Purpose:** Checks whether the current object has/contains `troops on both sides`.

### GetLeaderParty
`public PartyBase GetLeaderParty(BattleSideEnum side)`

**Purpose:** Gets the current value of `leader party`.

### CanPartyJoinBattle
`public bool CanPartyJoinBattle(PartyBase party, BattleSideEnum side)`

**Purpose:** Checks whether the current object can `party join battle`.

### GetStrengthsRelativeToParty
`public void GetStrengthsRelativeToParty(BattleSideEnum partySide, out float partySideStrength, out float opposingSideStrength)`

**Purpose:** Gets the current value of `strengths relative to party`.

### GetPlayerBattleContributionRate
`public float GetPlayerBattleContributionRate()`

**Purpose:** Gets the current value of `player battle contribution rate`.

### FinalizeEvent
`public void FinalizeEvent()`

**Purpose:** Handles logic related to `finalize event`.

### RecalculateRenownAndInfluenceValuesOnPartyInvolved
`public void RecalculateRenownAndInfluenceValuesOnPartyInvolved(PartyBase party)`

**Purpose:** Handles logic related to `recalculate renown and influence values on party involved`.

### DoSurrender
`public void DoSurrender(BattleSideEnum side)`

**Purpose:** Handles logic related to `do surrender`.

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**Purpose:** Sets the value or state of `position after map change`.

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**Purpose:** Handles logic related to `check positions for map change and update if needed`.

### OverrideMapEventSettlementForRaidToFieldBattleSwitch
`public void OverrideMapEventSettlementForRaidToFieldBattleSwitch(Settlement settlement)`

**Purpose:** Handles logic related to `override map event settlement for raid to field battle switch`.

## Usage Example

```csharp
var value = new MapEvent();
value.GetMapEventSide(side);
```

## See Also

- [Complete Class Catalog](../catalog)