---
title: "SiegeEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeEvent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeEvent

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEvent`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeEvent.cs`

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

**Purpose:** Handles logic related to `hold`.

### Reload
`public void Reload()`

**Purpose:** Handles logic related to `reload`.

### OnFireDecisionTaken
`public void OnFireDecisionTaken(SiegeEvent siegeEvent, BattleSideEnum battleSide, int targetSlotIndex, SiegeBombardTargets targetType)`

**Purpose:** Called when the `fire decision taken` event is raised.

### SetRedeploymentProgress
`public void SetRedeploymentProgress(float redeploymentProgress)`

**Purpose:** Sets the value or state of `redeployment progress`.

### SetHitpoints
`public void SetHitpoints(float hitPoints)`

**Purpose:** Sets the value or state of `hitpoints`.

### SetProgress
`public void SetProgress(float progress)`

**Purpose:** Sets the value or state of `progress`.

### SetRangedSiegeEngine
`public void SetRangedSiegeEngine(RangedSiegeEngine rangedSiegeEngine)`

**Purpose:** Sets the value or state of `ranged siege engine`.

### AllSiegeEngines
`public IEnumerable<SiegeEngineConstructionProgress> AllSiegeEngines()`

**Purpose:** Handles logic related to `all siege engines`.

### AddPrebuiltEngineToReserve
`public void AddPrebuiltEngineToReserve(SiegeEngineConstructionProgress siegeEngine)`

**Purpose:** Adds `prebuilt engine to reserve` to the current collection or state.

### DeploySiegeEngineAtIndex
`public void DeploySiegeEngineAtIndex(SiegeEngineConstructionProgress siegeEngine, int index)`

**Purpose:** Handles logic related to `deploy siege engine at index`.

### RemoveDeployedSiegeEngine
`public void RemoveDeployedSiegeEngine(int index, bool isRanged, bool moveToReserve)`

**Purpose:** Removes `deployed siege engine` from the current collection or state.

### RemovedSiegeEngineFromReservedSiegeEngines
`public bool RemovedSiegeEngineFromReservedSiegeEngines(SiegeEngineConstructionProgress siegeEngine)`

**Purpose:** Removes `d siege engine from reserved siege engines` from the current collection or state.

### FindDeploymentIndexOfDeployedEngine
`public int FindDeploymentIndexOfDeployedEngine(SiegeEngineConstructionProgress deployedEngine)`

**Purpose:** Handles logic related to `find deployment index of deployed engine`.

### ClearRemovedEnginesIfNecessary
`public bool ClearRemovedEnginesIfNecessary()`

**Purpose:** Handles logic related to `clear removed engines if necessary`.

### ActivateBlockade
`public void ActivateBlockade()`

**Purpose:** Handles logic related to `activate blockade`.

### DeactivateBlockade
`public void DeactivateBlockade()`

**Purpose:** Handles logic related to `deactivate blockade`.

### GetInvolvedPartiesForEventType
`public List<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes battleType)`

**Purpose:** Gets the current value of `involved parties for event type`.

### GetCurrentBattleType
`public MapEvent.BattleTypes GetCurrentBattleType()`

**Purpose:** Gets the current value of `current battle type`.

### GetSiegeEventSide
`public ISiegeEventSide GetSiegeEventSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `siege event side`.

### CanPartyJoinSide
`public bool CanPartyJoinSide(PartyBase party, BattleSideEnum side)`

**Purpose:** Checks whether the current object can `party join side`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnAfterLoad
`public void OnAfterLoad()`

**Purpose:** Called when the `after load` event is raised.

### OnBeforeSiegeEventEnd
`public void OnBeforeSiegeEventEnd(BattleState winnerSide, MapEvent.BattleTypes battleType)`

**Purpose:** Called when the `before siege event end` event is raised.

### FinalizeSiegeEvent
`public void FinalizeSiegeEvent()`

**Purpose:** Handles logic related to `finalize siege event`.

### IsPartyInvolved
`public bool IsPartyInvolved(PartyBase party)`

**Purpose:** Handles logic related to `is party involved`.

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**Purpose:** Sets the value or state of `position after map change`.

### DoSiegeAction
`public void DoSiegeAction(ISiegeEventSide siegeEventSide, SiegeStrategyActionModel.SiegeAction siegeAction, SiegeEngineType siegeEngineType, int deploymentIndex, int reserveIndex)`

**Purpose:** Handles logic related to `do siege action`.

### AdvanceStrategy
`public void AdvanceStrategy(ISiegeEventSide siegeEventSide)`

**Purpose:** Handles logic related to `advance strategy`.

### BreakSiegeEngine
`public void BreakSiegeEngine(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngineType)`

**Purpose:** Handles logic related to `break siege engine`.

### GetPreparedSiegeEnginesAsDictionary
`public Dictionary<SiegeEngineType, int> GetPreparedSiegeEnginesAsDictionary(ISiegeEventSide siegeEventSide)`

**Purpose:** Gets the current value of `prepared siege engines as dictionary`.

### GetPreparedAndActiveSiegeEngines
`public List<MissionSiegeWeapon> GetPreparedAndActiveSiegeEngines(ISiegeEventSide siegeEventSide)`

**Purpose:** Gets the current value of `prepared and active siege engines`.

### SetSiegeEngineStatesAfterSiegeMission
`public void SetSiegeEngineStatesAfterSiegeMission(IEnumerable<IMissionSiegeWeapon> attackerMissionSiegeEngineData, IEnumerable<IMissionSiegeWeapon> defenderMissionSiegeEngineData)`

**Purpose:** Sets the value or state of `siege engine states after siege mission`.

### CreateSiegeObject
`public void CreateSiegeObject(SiegeEngineConstructionProgress siegeEngineConstructionProgress, ISiegeEventSide siegeSide)`

**Purpose:** Creates a new `siege object` instance or object.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### ConstructionTick
`public void ConstructionTick(ISiegeEventSide siegeEventSide)`

**Purpose:** Handles logic related to `construction tick`.

### BombardTick
`public void BombardTick(ISiegeEventSide siegeEventSide)`

**Purpose:** Handles logic related to `bombard tick`.

### FindAttackableRangedEngineWithHighestPriority
`public void FindAttackableRangedEngineWithHighestPriority(ISiegeEventSide siegeEventSide, int attackerSlotIndex, out int targetIndex, out float targetPriority)`

**Purpose:** Handles logic related to `find attackable ranged engine with highest priority`.

## Usage Example

```csharp
var value = new SiegeEvent();
value.Hold();
```

## See Also

- [Complete Class Catalog](../catalog)