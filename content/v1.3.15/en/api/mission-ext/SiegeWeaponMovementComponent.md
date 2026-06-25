---
title: "SiegeWeaponMovementComponent"
description: "Auto-generated class reference for SiegeWeaponMovementComponent."
---
# SiegeWeaponMovementComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeWeaponMovementComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/SiegeWeaponMovementComponent.cs`

## Overview

`SiegeWeaponMovementComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `SiegeWeaponMovementComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasApproachedTarget` | `public bool HasApproachedTarget { get; }` |
| `Velocity` | `public Vec3 Velocity { get; }` |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get; }` |
| `CurrentSpeed` | `public float CurrentSpeed { get; }` |
| `MovementSoundCodeID` | `public int MovementSoundCodeID { get; set; }` |
| `MinSpeed` | `public float MinSpeed { get; set; }` |
| `MaxSpeed` | `public float MaxSpeed { get; set; }` |
| `PathEntityName` | `public string PathEntityName { get; set; }` |
| `GhostEntitySpeedMultiplier` | `public float GhostEntitySpeedMultiplier { get; set; }` |
| `WheelDiameter` | `public float WheelDiameter { get; set; }` |
| `MainObject` | `public SynchedMissionObject MainObject { get; set; }` |

## Key Methods

### HighlightPath
`public void HighlightPath()`

**Purpose:** Executes the HighlightPath logic.

```csharp
// Obtain an instance of SiegeWeaponMovementComponent from the subsystem API first
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.HighlightPath();
```

### SetupGhostEntity
`public void SetupGhostEntity()`

**Purpose:** Assigns a new value to up ghost entity and updates the object's internal state.

```csharp
// Obtain an instance of SiegeWeaponMovementComponent from the subsystem API first
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.SetupGhostEntity();
```

### SetGhostVisibility
`public void SetGhostVisibility(bool isVisible)`

**Purpose:** Assigns a new value to ghost visibility and updates the object's internal state.

```csharp
// Obtain an instance of SiegeWeaponMovementComponent from the subsystem API first
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.SetGhostVisibility(false);
```

### OnEditorInit
`public void OnEditorInit()`

**Purpose:** Invoked when the editor init event is raised.

```csharp
// Obtain an instance of SiegeWeaponMovementComponent from the subsystem API first
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.OnEditorInit();
```

### SetDistanceTraveledAsClient
`public void SetDistanceTraveledAsClient(float distance)`

**Purpose:** Assigns a new value to distance traveled as client and updates the object's internal state.

```csharp
// Obtain an instance of SiegeWeaponMovementComponent from the subsystem API first
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.SetDistanceTraveledAsClient(0);
```

### IsOnTickRequired
`public override bool IsOnTickRequired()`

**Purpose:** Determines whether the this instance is in the on tick required state or condition.

```csharp
// Obtain an instance of SiegeWeaponMovementComponent from the subsystem API first
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
var result = siegeWeaponMovementComponent.IsOnTickRequired();
```

### TickParallelManually
`public void TickParallelManually(float dt)`

**Purpose:** Advances the parallel manually state each frame or update cycle.

```csharp
// Obtain an instance of SiegeWeaponMovementComponent from the subsystem API first
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.TickParallelManually(0);
```

### GetInitialFrame
`public MatrixFrame GetInitialFrame()`

**Purpose:** Reads and returns the initial frame value held by the this instance.

```csharp
// Obtain an instance of SiegeWeaponMovementComponent from the subsystem API first
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
var result = siegeWeaponMovementComponent.GetInitialFrame();
```

### GetTargetFrame
`public MatrixFrame GetTargetFrame()`

**Purpose:** Reads and returns the target frame value held by the this instance.

```csharp
// Obtain an instance of SiegeWeaponMovementComponent from the subsystem API first
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
var result = siegeWeaponMovementComponent.GetTargetFrame();
```

### SetDestinationNavMeshIdState
`public void SetDestinationNavMeshIdState(bool enabled)`

**Purpose:** Assigns a new value to destination nav mesh id state and updates the object's internal state.

```csharp
// Obtain an instance of SiegeWeaponMovementComponent from the subsystem API first
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.SetDestinationNavMeshIdState(false);
```

### MoveToTargetAsClient
`public void MoveToTargetAsClient()`

**Purpose:** Moves to target as client to a new position or state.

```csharp
// Obtain an instance of SiegeWeaponMovementComponent from the subsystem API first
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.MoveToTargetAsClient();
```

### GetTotalDistanceTraveledForPathTracker
`public float GetTotalDistanceTraveledForPathTracker()`

**Purpose:** Reads and returns the total distance traveled for path tracker value held by the this instance.

```csharp
// Obtain an instance of SiegeWeaponMovementComponent from the subsystem API first
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
var result = siegeWeaponMovementComponent.GetTotalDistanceTraveledForPathTracker();
```

### SetTotalDistanceTraveledForPathTracker
`public void SetTotalDistanceTraveledForPathTracker(float distanceTraveled)`

**Purpose:** Assigns a new value to total distance traveled for path tracker and updates the object's internal state.

```csharp
// Obtain an instance of SiegeWeaponMovementComponent from the subsystem API first
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.SetTotalDistanceTraveledForPathTracker(0);
```

### SetTargetFrameForPathTracker
`public void SetTargetFrameForPathTracker()`

**Purpose:** Assigns a new value to target frame for path tracker and updates the object's internal state.

```csharp
// Obtain an instance of SiegeWeaponMovementComponent from the subsystem API first
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.SetTargetFrameForPathTracker();
```

### FindGroundFrameForWheelsStatic
`public static MatrixFrame FindGroundFrameForWheelsStatic(ref MatrixFrame frame, float axleLength, float wheelDiameter, WeakGameEntity gameEntity, List<GameEntity> wheels, Scene scene)`

**Purpose:** Looks up the matching ground frame for wheels static in the current collection or scope.

```csharp
// Static call; no instance required
SiegeWeaponMovementComponent.FindGroundFrameForWheelsStatic(frame, 0, 0, gameEntity, wheels, scene);
```

## Usage Example

```csharp
var component = agent.GetComponent<SiegeWeaponMovementComponent>();
```

## See Also

- [Area Index](../)