<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `begin wait`.

### GetMapEventSide
`public MapEventSide GetMapEventSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `map event side`.

### PartiesOnSide
`public MBReadOnlyList<MapEventParty> PartiesOnSide(BattleSideEnum side)`

**Purpose:** Handles logic related to `parties on side`.

### GetBattleRewards
`public void GetBattleRewards(PartyBase party, out float renownChange, out float influenceChange, out float moraleChange, out float goldChange, out float playerEarnedLootPercentage)`

**Purpose:** Gets the current value of `battle rewards`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetNumberOfInvolvedMen
`public int GetNumberOfInvolvedMen()`

**Purpose:** Gets the current value of `number of involved men`.

### GetNumberOfInvolvedMen
`public int GetNumberOfInvolvedMen(BattleSideEnum side)`

**Purpose:** Gets the current value of `number of involved men`.

### FinishBattleAndKeepSiegeEvent
`public void FinishBattleAndKeepSiegeEvent()`

**Purpose:** Handles logic related to `finish battle and keep siege event`.

### SimulateBattleSetup
`public void SimulateBattleSetup(FlattenedTroopRoster priorTroops)`

**Purpose:** Handles logic related to `simulate battle setup`.

### SimulateBattleRound
`public void SimulateBattleRound(int simulationTicksDefender, int simulationTicksAttacker)`

**Purpose:** Handles logic related to `simulate battle round`.

### SetOverrideWinner
`public void SetOverrideWinner(BattleSideEnum winner)`

**Purpose:** Sets the value or state of `override winner`.

### SetDefenderPulledBack
`public void SetDefenderPulledBack()`

**Purpose:** Sets the value or state of `defender pulled back`.

### ResetBattleState
`public void ResetBattleState()`

**Purpose:** Resets `battle state` to its initial state.

### IsPlayerSergeant
`public bool IsPlayerSergeant()`

**Purpose:** Handles logic related to `is player sergeant`.

### FinalizeEvent
`public void FinalizeEvent()`

**Purpose:** Handles logic related to `finalize event`.

### HasTroopsOnBothSides
`public bool HasTroopsOnBothSides()`

**Purpose:** Checks whether the current object has/contains `troops on both sides`.

### GetLeaderParty
`public PartyBase GetLeaderParty(BattleSideEnum side)`

**Purpose:** Gets the current value of `leader party`.

### GetRenownValue
`public float GetRenownValue(BattleSideEnum side)`

**Purpose:** Gets the current value of `renown value`.

### RecalculateRenownAndInfluenceValues
`public void RecalculateRenownAndInfluenceValues(PartyBase party)`

**Purpose:** Handles logic related to `recalculate renown and influence values`.

### RecalculateStrengthOfSides
`public void RecalculateStrengthOfSides()`

**Purpose:** Handles logic related to `recalculate strength of sides`.

### DoSurrender
`public void DoSurrender(BattleSideEnum side)`

**Purpose:** Handles logic related to `do surrender`.

### EndByRunAway
`public void EndByRunAway()`

**Purpose:** Handles logic related to `end by run away`.

### GetOtherSide
`public BattleSideEnum GetOtherSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `other side`.

### CanPartyJoinBattle
`public bool CanPartyJoinBattle(PartyBase party, BattleSideEnum side)`

**Purpose:** Checks whether the current object can `party join battle`.

### GetStrengthsRelativeToParty
`public void GetStrengthsRelativeToParty(BattleSideEnum partySide, out float partySideStrength, out float opposingSideStrength)`

**Purpose:** Gets the current value of `strengths relative to party`.

### CheckIfBattleShouldContinueAfterBattleMission
`public bool CheckIfBattleShouldContinueAfterBattleMission(CampaignBattleResult campaignBattleResult)`

**Purpose:** Handles logic related to `check if battle should continue after battle mission`.

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**Purpose:** Sets the value or state of `position after map change`.

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**Purpose:** Handles logic related to `check positions for map change and update if needed`.

## Usage Example

```csharp
var value = new MapEvent();
value.BeginWait();
```

## See Also

- [Complete Class Catalog](../catalog)