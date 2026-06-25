---
title: "SiegeEngineMissile"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeEngineMissile`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEngineMissile

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEngineMissile`
**Area:** campaign-ext

## Overview

`SiegeEngineMissile` lives in `TaleWorlds.CampaignSystem.Siege`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SiegeWallSeed` | `public int SiegeWallSeed { get; }` |
| `SiegePeopleSeed` | `public int SiegePeopleSeed { get; }` |
| `SiegeStartTime` | `public CampaignTime SiegeStartTime { get; }` |
| `IsPlayerSiegeEvent` | `public bool IsPlayerSiegeEvent { get; }` |
| `BlockadeShouldBeActivated` | `public bool BlockadeShouldBeActivated { get; }` |
| `IsBlockadeActive` | `public bool IsBlockadeActive { get; }` |
| `ReadyToBeRemoved` | `public bool ReadyToBeRemoved { get; }` |
| `NextTimeEngineCanBombard` | `public CampaignTime NextTimeEngineCanBombard { get; }` |
| `AlreadyFired` | `public bool AlreadyFired { get; }` |
| `CurrentTargetType` | `public SiegeBombardTargets CurrentTargetType { get; }` |
| `CurrentTargetIndex` | `public int CurrentTargetIndex { get; }` |
| `PreviousDamagedTargetType` | `public SiegeBombardTargets PreviousDamagedTargetType { get; }` |
| `PreviousTargetIndex` | `public int PreviousTargetIndex { get; }` |
| `LastBombardTime` | `public CampaignTime LastBombardTime { get; }` |
| `NextProjectileCollisionTime` | `public CampaignTime NextProjectileCollisionTime { get; }` |
| `IsReadyToFire` | `public bool IsReadyToFire { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Hitpoints` | `public float Hitpoints { get; }` |
| `Progress` | `public float Progress { get; }` |
| `RangedSiegeEngine` | `public SiegeEvent.RangedSiegeEngine RangedSiegeEngine { get; }` |

## Key Methods

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
`public void CreateSiegeObject(SiegeEvent.SiegeEngineConstructionProgress siegeEngineConstructionProgress, ISiegeEventSide siegeSide)`

**Purpose:** Creates a new `siege object` instance or object.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
// First obtain a SiegeEngineMissile instance from game state, then call one of its public methods
var value = new SiegeEngineMissile();
value.ActivateBlockade();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
