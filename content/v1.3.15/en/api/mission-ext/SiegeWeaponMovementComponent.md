---
title: "SiegeWeaponMovementComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeWeaponMovementComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `highlight path`.

### SetupGhostEntity
`public void SetupGhostEntity()`

**Purpose:** Sets the value or state of `up ghost entity`.

### SetGhostVisibility
`public void SetGhostVisibility(bool isVisible)`

**Purpose:** Sets the value or state of `ghost visibility`.

### OnEditorInit
`public void OnEditorInit()`

**Purpose:** Called when the `editor init` event is raised.

### SetDistanceTraveledAsClient
`public void SetDistanceTraveledAsClient(float distance)`

**Purpose:** Sets the value or state of `distance traveled as client`.

### IsOnTickRequired
`public override bool IsOnTickRequired()`

**Purpose:** Handles logic related to `is on tick required`.

### TickParallelManually
`public void TickParallelManually(float dt)`

**Purpose:** Handles logic related to `tick parallel manually`.

### GetInitialFrame
`public MatrixFrame GetInitialFrame()`

**Purpose:** Gets the current value of `initial frame`.

### GetTargetFrame
`public MatrixFrame GetTargetFrame()`

**Purpose:** Gets the current value of `target frame`.

### SetDestinationNavMeshIdState
`public void SetDestinationNavMeshIdState(bool enabled)`

**Purpose:** Sets the value or state of `destination nav mesh id state`.

### MoveToTargetAsClient
`public void MoveToTargetAsClient()`

**Purpose:** Handles logic related to `move to target as client`.

### GetTotalDistanceTraveledForPathTracker
`public float GetTotalDistanceTraveledForPathTracker()`

**Purpose:** Gets the current value of `total distance traveled for path tracker`.

### SetTotalDistanceTraveledForPathTracker
`public void SetTotalDistanceTraveledForPathTracker(float distanceTraveled)`

**Purpose:** Sets the value or state of `total distance traveled for path tracker`.

### SetTargetFrameForPathTracker
`public void SetTargetFrameForPathTracker()`

**Purpose:** Sets the value or state of `target frame for path tracker`.

### FindGroundFrameForWheelsStatic
`public static MatrixFrame FindGroundFrameForWheelsStatic(ref MatrixFrame frame, float axleLength, float wheelDiameter, WeakGameEntity gameEntity, List<GameEntity> wheels, Scene scene)`

**Purpose:** Handles logic related to `find ground frame for wheels static`.

## Usage Example

```csharp
var component = agent.GetComponent<SiegeWeaponMovementComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)