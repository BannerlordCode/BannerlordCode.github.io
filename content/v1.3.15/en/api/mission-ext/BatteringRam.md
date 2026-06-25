---
title: "BatteringRam"
description: "Auto-generated class reference for BatteringRam."
---
# BatteringRam

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BatteringRam : SiegeWeapon, IPathHolder, IPrimarySiegeWeapon, IMoveableSiegeWeapon, ISpawnable`
**Base:** `SiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/BatteringRam.cs`

## Overview

`BatteringRam` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MovementComponent` | `public SiegeWeaponMovementComponent MovementComponent { get; }` |
| `WeaponSide` | `public FormationAI.BehaviorSide WeaponSide { get; }` |
| `PathEntity` | `public string PathEntity { get; }` |
| `EditorGhostEntityMove` | `public bool EditorGhostEntityMove { get; set; }` |
| `State` | `public BatteringRam.RamState State { get; set; }` |
| `TargetCastlePosition` | `public MissionObject TargetCastlePosition { get; }` |
| `SiegeWeaponPriority` | `public float SiegeWeaponPriority { get; }` |
| `OverTheWallNavMeshID` | `public int OverTheWallNavMeshID { get; }` |
| `HoldLadders` | `public bool HoldLadders { get; }` |
| `SendLadders` | `public bool SendLadders { get; set; }` |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get; set; }` |
| `IsDeactivated` | `public override bool IsDeactivated { get; }` |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get; }` |
| `State` | `public int State { get; }` |
| `TotalDistanceTraveled` | `public float TotalDistanceTraveled { get; }` |

## Key Methods

### HasCompletedAction
`public bool HasCompletedAction()`

**Purpose:** Determines whether the current object already holds `completed action`.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
var result = batteringRam.HasCompletedAction();
```

### Disable
`public override void Disable()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
batteringRam.Disable();
```

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**Purpose:** Reads and returns the `siege engine type` value held by the current object.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
var result = batteringRam.GetSiegeEngineType();
```

### GetInitialFrame
`public MatrixFrame GetInitialFrame()`

**Purpose:** Reads and returns the `initial frame` value held by the current object.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
var result = batteringRam.GetInitialFrame();
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
var result = batteringRam.GetTickRequirement();
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Constructs a new `a i behavior object` entity and returns it to the caller.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
var result = batteringRam.CreateAIBehaviorObject();
```

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** Writes `to network` to the target location.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
batteringRam.WriteToNetwork();
```

### HighlightPath
`public void HighlightPath()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
batteringRam.HighlightPath();
```

### SwitchGhostEntityMovementMode
`public void SwitchGhostEntityMovementMode(bool isGhostEnabled)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
batteringRam.SwitchGhostEntityMovementMode(false);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `description text` value held by the current object.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
var result = batteringRam.GetDescriptionText(gameEntity);
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Reads and returns the `action text for standing point` value held by the current object.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
var result = batteringRam.GetActionTextForStandingPoint(usableGameObject);
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**Purpose:** Reads and returns the `order` value held by the current object.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
var result = batteringRam.GetOrder(side);
```

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**Purpose:** Reads and returns the `target flags` value held by the current object.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
var result = batteringRam.GetTargetFlags();
```

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**Purpose:** Reads and returns the `target value` value held by the current object.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
var result = batteringRam.GetTargetValue(weaponPos);
```

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**Purpose:** Assigns a new value to `spawned from spawner` and updates the object's internal state.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
batteringRam.SetSpawnedFromSpawner();
```

### AssignParametersFromSpawner
`public void AssignParametersFromSpawner(string gateTag, string sideTag, int bridgeNavMeshID1, int bridgeNavMeshID2, int ditchNavMeshID1, int ditchNavMeshID2, int groundToBridgeNavMeshID1, int groundToBridgeNavMeshID2, string pathEntityName)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
batteringRam.AssignParametersFromSpawner("example", "example", 0, 0, 0, 0, 0, 0, "example");
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**Purpose:** Invoked when the `after read from network` event is raised.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
batteringRam.OnAfterReadFromNetwork(valueTuple<BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord, false);
```

### GetNavmeshFaceIds
`public bool GetNavmeshFaceIds(out List<int> navmeshFaceIds)`

**Purpose:** Reads and returns the `navmesh face ids` value held by the current object.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
var result = batteringRam.GetNavmeshFaceIds(navmeshFaceIds);
```

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of `from network`.

```csharp
// Obtain an instance of BatteringRam from the subsystem API first
BatteringRam batteringRam = ...;
var result = batteringRam.ReadFromNetwork(bufferReadValid);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BatteringRam batteringRam = ...;
batteringRam.HasCompletedAction();
```

## See Also

- [Area Index](../)