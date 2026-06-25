---
title: "SiegeTowerRecord"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeTowerRecord`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeTowerRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct SiegeTowerRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**Area:** mission-ext

## Overview

`SiegeTowerRecord` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetCastlePosition` | `public MissionObject TargetCastlePosition { get; }` |
| `WeaponSide` | `public FormationAI.BehaviorSide WeaponSide { get; }` |
| `PathEntity` | `public string PathEntity { get; }` |
| `EditorGhostEntityMove` | `public bool EditorGhostEntityMove { get; }` |
| `SiegeWeaponPriority` | `public float SiegeWeaponPriority { get; }` |
| `OverTheWallNavMeshID` | `public int OverTheWallNavMeshID { get; }` |
| `MovementComponent` | `public SiegeWeaponMovementComponent MovementComponent { get; }` |
| `HoldLadders` | `public bool HoldLadders { get; }` |
| `SendLadders` | `public bool SendLadders { get; }` |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get; set; }` |
| `State` | `public SiegeTower.GateState State { get; set; }` |
| `IsDeactivated` | `public override bool IsDeactivated { get; }` |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get; }` |
| `State` | `public int State { get; }` |
| `FallAngularSpeed` | `public float FallAngularSpeed { get; }` |
| `TotalDistanceTraveled` | `public float TotalDistanceTraveled { get; }` |

## Key Methods

### HasCompletedAction
`public bool HasCompletedAction()`

**Purpose:** Checks whether the current object has/contains `completed action`.

### GetGateNavMeshId
`public int GetGateNavMeshId()`

**Purpose:** Gets the current value of `gate nav mesh id`.

### CollectGetDifficultNavmeshIDs
`public List<int> CollectGetDifficultNavmeshIDs()`

**Purpose:** Handles logic related to `collect get difficult navmesh i ds`.

### CollectGetDifficultNavmeshIDsForAttackers
`public List<int> CollectGetDifficultNavmeshIDsForAttackers()`

**Purpose:** Handles logic related to `collect get difficult navmesh i ds for attackers`.

### CollectGetDifficultNavmeshIDsForDefenders
`public List<int> CollectGetDifficultNavmeshIDsForDefenders()`

**Purpose:** Handles logic related to `collect get difficult navmesh i ds for defenders`.

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Gets the current value of `action text for standing point`.

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** Handles logic related to `write to network`.

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**Purpose:** Gets the current value of `order`.

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**Purpose:** Gets the current value of `target flags`.

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**Purpose:** Gets the current value of `target value`.

### Disable
`public override void Disable()`

**Purpose:** Handles logic related to `disable`.

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**Purpose:** Gets the current value of `siege engine type`.

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Creates a new `a i behavior object` instance or object.

### SetAbilityOfFaces
`public override void SetAbilityOfFaces(bool enabled)`

**Purpose:** Sets the value or state of `ability of faces`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### OnDestroyed
`public void OnDestroyed(DestructableComponent destroyedComponent, Agent destroyerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)`

**Purpose:** Called when the `destroyed` event is raised.

### HighlightPath
`public void HighlightPath()`

**Purpose:** Handles logic related to `highlight path`.

### SwitchGhostEntityMovementMode
`public void SwitchGhostEntityMovementMode(bool isGhostEnabled)`

**Purpose:** Handles logic related to `switch ghost entity movement mode`.

### GetInitialFrame
`public MatrixFrame GetInitialFrame()`

**Purpose:** Gets the current value of `initial frame`.

## Usage Example

```csharp
// First obtain a SiegeTowerRecord instance from game state, then call one of its public methods
var value = new SiegeTowerRecord();
value.HasCompletedAction();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
