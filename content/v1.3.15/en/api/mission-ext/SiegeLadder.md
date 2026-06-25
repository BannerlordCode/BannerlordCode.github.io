---
title: "SiegeLadder"
description: "Auto-generated class reference for SiegeLadder."
---
# SiegeLadder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeLadder : SiegeWeapon, IPrimarySiegeWeapon, IOrderableWithInteractionArea, IOrderable, ISpawnable`
**Base:** `SiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/SiegeLadder.cs`

## Overview

`SiegeLadder` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InitialWaitPosition` | `public GameEntity InitialWaitPosition { get; }` |
| `OnWallNavMeshId` | `public int OnWallNavMeshId { get; }` |
| `TargetCastlePosition` | `public MissionObject TargetCastlePosition { get; }` |
| `WeaponSide` | `public FormationAI.BehaviorSide WeaponSide { get; }` |
| `SiegeWeaponPriority` | `public float SiegeWeaponPriority { get; }` |
| `OverTheWallNavMeshID` | `public int OverTheWallNavMeshID { get; }` |
| `State` | `public SiegeLadder.LadderState State { get; set; }` |
| `HoldLadders` | `public bool HoldLadders { get; }` |
| `SendLadders` | `public bool SendLadders { get; }` |
| `IsStateLand` | `public bool IsStateLand { get; }` |
| `State` | `public int State { get; }` |
| `AnimationState` | `public int AnimationState { get; }` |
| `FallAngularSpeed` | `public float FallAngularSpeed { get; }` |
| `LadderFrame` | `public MatrixFrame LadderFrame { get; }` |
| `HasAnimation` | `public bool HasAnimation { get; }` |
| `LadderAnimationIndex` | `public int LadderAnimationIndex { get; }` |
| `LadderAnimationProgress` | `public float LadderAnimationProgress { get; }` |

## Key Methods

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**Purpose:** Reads and returns the siege engine type value held by the this instance.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetSiegeEngineType();
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**Purpose:** Reads and returns the order value held by the this instance.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetOrder(side);
```

### HasCompletedAction
`public bool HasCompletedAction()`

**Purpose:** Determines whether the this instance already holds completed action.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
var result = siegeLadder.HasCompletedAction();
```

### IsDisabledForBattleSide
`public override bool IsDisabledForBattleSide(BattleSideEnum sideEnum)`

**Purpose:** Determines whether the this instance is in the disabled for battle side state or condition.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
var result = siegeLadder.IsDisabledForBattleSide(sideEnum);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetTickRequirement();
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Constructs a new a i behavior object entity and returns it to the caller.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
var result = siegeLadder.CreateAIBehaviorObject();
```

### SetUpStateVisibility
`public void SetUpStateVisibility(bool isVisible)`

**Purpose:** Assigns a new value to up state visibility and updates the object's internal state.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
siegeLadder.SetUpStateVisibility(false);
```

### SetAbilityOfFaces
`public override void SetAbilityOfFaces(bool enabled)`

**Purpose:** Assigns a new value to ability of faces and updates the object's internal state.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
siegeLadder.SetAbilityOfFaces(false);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetDescriptionText(gameEntity);
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Reads and returns the action text for standing point value held by the this instance.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetActionTextForStandingPoint(usableGameObject);
```

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** Writes to network to the target location.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
siegeLadder.WriteToNetwork();
```

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**Purpose:** Reads and returns the target flags value held by the this instance.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetTargetFlags();
```

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**Purpose:** Reads and returns the target value value held by the this instance.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetTargetValue(weaponPos);
```

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**Purpose:** Assigns a new value to spawned from spawner and updates the object's internal state.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
siegeLadder.SetSpawnedFromSpawner();
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**Purpose:** Invoked when the after read from network event is raised.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
siegeLadder.OnAfterReadFromNetwork(valueTuple<BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord, false);
```

### AssignParametersFromSpawner
`public void AssignParametersFromSpawner(string sideTag, string targetWallSegment, int onWallNavMeshId, float downStateRotationRadian, float upperStateRotationRadian, string barrierTagToRemove, string indestructibleMerlonsTag)`

**Purpose:** Executes the AssignParametersFromSpawner logic.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
siegeLadder.AssignParametersFromSpawner("example", "example", 0, 0, 0, "example", "example");
```

### GetNavmeshFaceIds
`public bool GetNavmeshFaceIds(out List<int> navmeshFaceIds)`

**Purpose:** Reads and returns the navmesh face ids value held by the this instance.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetNavmeshFaceIds(navmeshFaceIds);
```

### OnFormationFrameChanged
`public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition position)`

**Purpose:** Invoked when the formation frame changed event is raised.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
siegeLadder.OnFormationFrameChanged(agent, false, position);
```

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of from network.

```csharp
// Obtain an instance of SiegeLadder from the subsystem API first
SiegeLadder siegeLadder = ...;
var result = siegeLadder.ReadFromNetwork(bufferReadValid);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeLadder siegeLadder = ...;
siegeLadder.GetSiegeEngineType();
```

## See Also

- [Area Index](../)