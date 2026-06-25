---
title: "SiegeEvent"
description: "Auto-generated class reference for SiegeEvent."
---
# SiegeEvent

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEvent`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeEvent.cs`

## Overview

`SiegeEvent` lives in `TaleWorlds.CampaignSystem.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NextTimeEngineCanBombard` | `public CampaignTime NextTimeEngineCanBombard { get; }` |
| `AlreadyFired` | `public bool AlreadyFired { get; }` |
| `CurrentTargetType` | `public SiegeBombardTargets CurrentTargetType { get; }` |
| `CurrentTargetIndex` | `public int CurrentTargetIndex { get; }` |
| `PreviousDamagedTargetType` | `public SiegeBombardTargets PreviousDamagedTargetType { get; }` |
| `PreviousTargetIndex` | `public int PreviousTargetIndex { get; }` |
| `LastBombardTime` | `public CampaignTime LastBombardTime { get; }` |
| `NextProjectileCollisionTime` | `public CampaignTime NextProjectileCollisionTime { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Hitpoints` | `public float Hitpoints { get; }` |
| `Progress` | `public float Progress { get; }` |
| `RangedSiegeEngine` | `public RangedSiegeEngine RangedSiegeEngine { get; }` |
| `RedeploymentProgress` | `public float RedeploymentProgress { get; }` |
| `MaxHitPoints` | `public float MaxHitPoints { get; }` |
| `DeployedSiegeEngineTypesCount` | `public MBReadOnlyDictionary<SiegeEngineType, int> DeployedSiegeEngineTypesCount { get; }` |
| `ReservedSiegeEngineTypesCount` | `public MBReadOnlyDictionary<SiegeEngineType, int> ReservedSiegeEngineTypesCount { get; }` |
| `SiegeStartTime` | `public CampaignTime SiegeStartTime { get; }` |
| `IsPlayerSiegeEvent` | `public bool IsPlayerSiegeEvent { get; }` |
| `BlockadeShouldBeActivated` | `public bool BlockadeShouldBeActivated { get; }` |

## Key Methods

### Hold
`public void Hold()`

**Purpose:** Executes the Hold logic.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.Hold();
```

### Reload
`public void Reload()`

**Purpose:** Executes the Reload logic.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.Reload();
```

### OnFireDecisionTaken
`public void OnFireDecisionTaken(SiegeEvent siegeEvent, BattleSideEnum battleSide, int targetSlotIndex, SiegeBombardTargets targetType)`

**Purpose:** Invoked when the fire decision taken event is raised.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.OnFireDecisionTaken(siegeEvent, battleSide, 0, targetType);
```

### SetRedeploymentProgress
`public void SetRedeploymentProgress(float redeploymentProgress)`

**Purpose:** Assigns a new value to redeployment progress and updates the object's internal state.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.SetRedeploymentProgress(0);
```

### SetHitpoints
`public void SetHitpoints(float hitPoints)`

**Purpose:** Assigns a new value to hitpoints and updates the object's internal state.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.SetHitpoints(0);
```

### SetProgress
`public void SetProgress(float progress)`

**Purpose:** Assigns a new value to progress and updates the object's internal state.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.SetProgress(0);
```

### SetRangedSiegeEngine
`public void SetRangedSiegeEngine(RangedSiegeEngine rangedSiegeEngine)`

**Purpose:** Assigns a new value to ranged siege engine and updates the object's internal state.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.SetRangedSiegeEngine(rangedSiegeEngine);
```

### AllSiegeEngines
`public IEnumerable<SiegeEngineConstructionProgress> AllSiegeEngines()`

**Purpose:** Executes the AllSiegeEngines logic.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
var result = siegeEvent.AllSiegeEngines();
```

### AddPrebuiltEngineToReserve
`public void AddPrebuiltEngineToReserve(SiegeEngineConstructionProgress siegeEngine)`

**Purpose:** Adds prebuilt engine to reserve to the current collection or state.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.AddPrebuiltEngineToReserve(siegeEngine);
```

### DeploySiegeEngineAtIndex
`public void DeploySiegeEngineAtIndex(SiegeEngineConstructionProgress siegeEngine, int index)`

**Purpose:** Executes the DeploySiegeEngineAtIndex logic.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.DeploySiegeEngineAtIndex(siegeEngine, 0);
```

### RemoveDeployedSiegeEngine
`public void RemoveDeployedSiegeEngine(int index, bool isRanged, bool moveToReserve)`

**Purpose:** Removes deployed siege engine from the current collection or state.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.RemoveDeployedSiegeEngine(0, false, false);
```

### RemovedSiegeEngineFromReservedSiegeEngines
`public bool RemovedSiegeEngineFromReservedSiegeEngines(SiegeEngineConstructionProgress siegeEngine)`

**Purpose:** Removes d siege engine from reserved siege engines from the current collection or state.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
var result = siegeEvent.RemovedSiegeEngineFromReservedSiegeEngines(siegeEngine);
```

### FindDeploymentIndexOfDeployedEngine
`public int FindDeploymentIndexOfDeployedEngine(SiegeEngineConstructionProgress deployedEngine)`

**Purpose:** Looks up the matching deployment index of deployed engine in the current collection or scope.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
var result = siegeEvent.FindDeploymentIndexOfDeployedEngine(deployedEngine);
```

### ClearRemovedEnginesIfNecessary
`public bool ClearRemovedEnginesIfNecessary()`

**Purpose:** Removes all removed engines if necessary from the this instance.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
var result = siegeEvent.ClearRemovedEnginesIfNecessary();
```

### ActivateBlockade
`public void ActivateBlockade()`

**Purpose:** Activates the resource, state, or feature associated with blockade.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.ActivateBlockade();
```

### DeactivateBlockade
`public void DeactivateBlockade()`

**Purpose:** Deactivates the resource, state, or feature associated with blockade.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.DeactivateBlockade();
```

### GetInvolvedPartiesForEventType
`public List<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes battleType)`

**Purpose:** Reads and returns the involved parties for event type value held by the this instance.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
var result = siegeEvent.GetInvolvedPartiesForEventType(battleType);
```

### GetCurrentBattleType
`public MapEvent.BattleTypes GetCurrentBattleType()`

**Purpose:** Reads and returns the current battle type value held by the this instance.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
var result = siegeEvent.GetCurrentBattleType();
```

### GetSiegeEventSide
`public ISiegeEventSide GetSiegeEventSide(BattleSideEnum side)`

**Purpose:** Reads and returns the siege event side value held by the this instance.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
var result = siegeEvent.GetSiegeEventSide(side);
```

### CanPartyJoinSide
`public bool CanPartyJoinSide(PartyBase party, BattleSideEnum side)`

**Purpose:** Checks whether the this instance meets the preconditions for party join side.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
var result = siegeEvent.CanPartyJoinSide(party, side);
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.Tick(0);
```

### OnAfterLoad
`public void OnAfterLoad()`

**Purpose:** Invoked when the after load event is raised.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.OnAfterLoad();
```

### OnBeforeSiegeEventEnd
`public void OnBeforeSiegeEventEnd(BattleState winnerSide, MapEvent.BattleTypes battleType)`

**Purpose:** Invoked when the before siege event end event is raised.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.OnBeforeSiegeEventEnd(winnerSide, battleType);
```

### FinalizeSiegeEvent
`public void FinalizeSiegeEvent()`

**Purpose:** Executes the FinalizeSiegeEvent logic.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.FinalizeSiegeEvent();
```

### IsPartyInvolved
`public bool IsPartyInvolved(PartyBase party)`

**Purpose:** Determines whether the this instance is in the party involved state or condition.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
var result = siegeEvent.IsPartyInvolved(party);
```

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**Purpose:** Assigns a new value to position after map change and updates the object's internal state.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.SetPositionAfterMapChange(newPosition);
```

### DoSiegeAction
`public void DoSiegeAction(ISiegeEventSide siegeEventSide, SiegeStrategyActionModel.SiegeAction siegeAction, SiegeEngineType siegeEngineType, int deploymentIndex, int reserveIndex)`

**Purpose:** Executes the DoSiegeAction logic.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.DoSiegeAction(siegeEventSide, siegeAction, siegeEngineType, 0, 0);
```

### AdvanceStrategy
`public void AdvanceStrategy(ISiegeEventSide siegeEventSide)`

**Purpose:** Executes the AdvanceStrategy logic.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.AdvanceStrategy(siegeEventSide);
```

### BreakSiegeEngine
`public void BreakSiegeEngine(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngineType)`

**Purpose:** Executes the BreakSiegeEngine logic.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.BreakSiegeEngine(siegeEventSide, siegeEngineType);
```

### GetPreparedSiegeEnginesAsDictionary
`public Dictionary<SiegeEngineType, int> GetPreparedSiegeEnginesAsDictionary(ISiegeEventSide siegeEventSide)`

**Purpose:** Reads and returns the prepared siege engines as dictionary value held by the this instance.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
var result = siegeEvent.GetPreparedSiegeEnginesAsDictionary(siegeEventSide);
```

### GetPreparedAndActiveSiegeEngines
`public List<MissionSiegeWeapon> GetPreparedAndActiveSiegeEngines(ISiegeEventSide siegeEventSide)`

**Purpose:** Reads and returns the prepared and active siege engines value held by the this instance.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
var result = siegeEvent.GetPreparedAndActiveSiegeEngines(siegeEventSide);
```

### SetSiegeEngineStatesAfterSiegeMission
`public void SetSiegeEngineStatesAfterSiegeMission(IEnumerable<IMissionSiegeWeapon> attackerMissionSiegeEngineData, IEnumerable<IMissionSiegeWeapon> defenderMissionSiegeEngineData)`

**Purpose:** Assigns a new value to siege engine states after siege mission and updates the object's internal state.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.SetSiegeEngineStatesAfterSiegeMission(attackerMissionSiegeEngineData, defenderMissionSiegeEngineData);
```

### CreateSiegeObject
`public void CreateSiegeObject(SiegeEngineConstructionProgress siegeEngineConstructionProgress, ISiegeEventSide siegeSide)`

**Purpose:** Constructs a new siege object entity and returns it to the caller.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.CreateSiegeObject(siegeEngineConstructionProgress, siegeSide);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
var result = siegeEvent.ToString();
```

### ConstructionTick
`public void ConstructionTick(ISiegeEventSide siegeEventSide)`

**Purpose:** Executes the ConstructionTick logic.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.ConstructionTick(siegeEventSide);
```

### BombardTick
`public void BombardTick(ISiegeEventSide siegeEventSide)`

**Purpose:** Executes the BombardTick logic.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.BombardTick(siegeEventSide);
```

### FindAttackableRangedEngineWithHighestPriority
`public void FindAttackableRangedEngineWithHighestPriority(ISiegeEventSide siegeEventSide, int attackerSlotIndex, out int targetIndex, out float targetPriority)`

**Purpose:** Looks up the matching attackable ranged engine with highest priority in the current collection or scope.

```csharp
// Obtain an instance of SiegeEvent from the subsystem API first
SiegeEvent siegeEvent = ...;
siegeEvent.FindAttackableRangedEngineWithHighestPriority(siegeEventSide, 0, targetIndex, targetPriority);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeEvent siegeEvent = ...;
siegeEvent.Hold();
```

## See Also

- [Area Index](../)