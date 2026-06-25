---
title: "SiegeTower"
description: "Auto-generated class reference for SiegeTower."
---
# SiegeTower

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeTower : SiegeWeapon, IPathHolder, IPrimarySiegeWeapon, IMoveableSiegeWeapon, ISpawnable`
**Base:** `SiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/SiegeTower.cs`

## Overview

`SiegeTower` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Determines whether the current object already holds `completed action`.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.HasCompletedAction();
```

### GetGateNavMeshId
`public int GetGateNavMeshId()`

**Purpose:** Reads and returns the `gate nav mesh id` value held by the current object.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.GetGateNavMeshId();
```

### CollectGetDifficultNavmeshIDs
`public List<int> CollectGetDifficultNavmeshIDs()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.CollectGetDifficultNavmeshIDs();
```

### CollectGetDifficultNavmeshIDsForAttackers
`public List<int> CollectGetDifficultNavmeshIDsForAttackers()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.CollectGetDifficultNavmeshIDsForAttackers();
```

### CollectGetDifficultNavmeshIDsForDefenders
`public List<int> CollectGetDifficultNavmeshIDsForDefenders()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.CollectGetDifficultNavmeshIDsForDefenders();
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `description text` value held by the current object.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.GetDescriptionText(gameEntity);
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Reads and returns the `action text for standing point` value held by the current object.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.GetActionTextForStandingPoint(usableGameObject);
```

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** Writes `to network` to the target location.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
siegeTower.WriteToNetwork();
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**Purpose:** Reads and returns the `order` value held by the current object.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.GetOrder(side);
```

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**Purpose:** Reads and returns the `target flags` value held by the current object.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.GetTargetFlags();
```

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**Purpose:** Reads and returns the `target value` value held by the current object.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.GetTargetValue(weaponPos);
```

### Disable
`public override void Disable()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
siegeTower.Disable();
```

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**Purpose:** Reads and returns the `siege engine type` value held by the current object.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.GetSiegeEngineType();
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Constructs a new `a i behavior object` entity and returns it to the caller.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.CreateAIBehaviorObject();
```

### SetAbilityOfFaces
`public override void SetAbilityOfFaces(bool enabled)`

**Purpose:** Assigns a new value to `ability of faces` and updates the object's internal state.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
siegeTower.SetAbilityOfFaces(false);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.GetTickRequirement();
```

### OnDestroyed
`public void OnDestroyed(DestructableComponent destroyedComponent, Agent destroyerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)`

**Purpose:** Invoked when the `destroyed` event is raised.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
siegeTower.OnDestroyed(destroyedComponent, destroyerAgent, weapon, attackerScriptComponentBehavior, 0);
```

### HighlightPath
`public void HighlightPath()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
siegeTower.HighlightPath();
```

### SwitchGhostEntityMovementMode
`public void SwitchGhostEntityMovementMode(bool isGhostEnabled)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
siegeTower.SwitchGhostEntityMovementMode(false);
```

### GetInitialFrame
`public MatrixFrame GetInitialFrame()`

**Purpose:** Reads and returns the `initial frame` value held by the current object.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.GetInitialFrame();
```

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**Purpose:** Assigns a new value to `spawned from spawner` and updates the object's internal state.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
siegeTower.SetSpawnedFromSpawner();
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord)`

**Purpose:** Invoked when the `after read from network` event is raised.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
siegeTower.OnAfterReadFromNetwork(valueTuple<BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord);
```

### AssignParametersFromSpawner
`public void AssignParametersFromSpawner(string pathEntityName, string targetWallSegment, string sideTag, int soilNavMeshID1, int soilNavMeshID2, int ditchNavMeshID1, int ditchNavMeshID2, int groundToSoilNavMeshID1, int groundToSoilNavMeshID2, int soilGenericNavMeshID, int groundGenericNavMeshID, Mat3 openStateRotation, string barrierTagToRemove)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
siegeTower.AssignParametersFromSpawner("example", "example", "example", 0, 0, 0, 0, 0, 0, 0, 0, openStateRotation, "example");
```

### GetNavmeshFaceIds
`public bool GetNavmeshFaceIds(out List<int> navmeshFaceIds)`

**Purpose:** Reads and returns the `navmesh face ids` value held by the current object.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.GetNavmeshFaceIds(navmeshFaceIds);
```

### OnFormationFrameChanged
`public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition frame)`

**Purpose:** Invoked when the `formation frame changed` event is raised.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
siegeTower.OnFormationFrameChanged(agent, false, frame);
```

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of `from network`.

```csharp
// Obtain an instance of SiegeTower from the subsystem API first
SiegeTower siegeTower = ...;
var result = siegeTower.ReadFromNetwork(bufferReadValid);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeTower siegeTower = ...;
siegeTower.HasCompletedAction();
```

## See Also

- [Area Index](../)