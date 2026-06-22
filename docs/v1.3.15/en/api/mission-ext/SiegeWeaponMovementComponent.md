<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeWeaponMovementComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeWeaponMovementComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeWeaponMovementComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/SiegeWeaponMovementComponent.cs`

## Overview

`SiegeWeaponMovementComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<SiegeWeaponMovementComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasApproachedTarget` | `public bool HasApproachedTarget { get { return !this._pathTracker.PathExists() || this._pathTracker.PathTraveledPercentage > 0.7f; }` |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get { return !this._pathTracker.PathExists() || this._pathTracker.HasReachedEnd; }` |
| `MovementSoundCodeID` | `public int MovementSoundCodeID { get; set; }` |
| `MinSpeed` | `public float MinSpeed { get; set; }` |
| `MaxSpeed` | `public float MaxSpeed { get; set; }` |
| `PathEntityName` | `public string PathEntityName { get; set; }` |
| `GhostEntitySpeedMultiplier` | `public float GhostEntitySpeedMultiplier { get; set; }` |
| `WheelDiameter` | `public float WheelDiameter { set { this._wheelDiameter = value; this._wheelCircumference = this._wheelDiameter * 3.1415927f; }` |
| `MainObject` | `public SynchedMissionObject MainObject { get; set; }` |

## Key Methods

### HighlightPath
```csharp
public void HighlightPath()
```

### SetupGhostEntity
```csharp
public void SetupGhostEntity()
```

### SetGhostVisibility
```csharp
public void SetGhostVisibility(bool isVisible)
```

### OnEditorInit
```csharp
public void OnEditorInit()
```

### SetDistanceTraveledAsClient
```csharp
public void SetDistanceTraveledAsClient(float distance)
```

### IsOnTickRequired
```csharp
public override bool IsOnTickRequired()
```

### TickParallelManually
```csharp
public void TickParallelManually(float dt)
```

### GetInitialFrame
```csharp
public MatrixFrame GetInitialFrame()
```

### GetTargetFrame
```csharp
public MatrixFrame GetTargetFrame()
```

### SetDestinationNavMeshIdState
```csharp
public void SetDestinationNavMeshIdState(bool enabled)
```

### MoveToTargetAsClient
```csharp
public void MoveToTargetAsClient()
```

### GetTotalDistanceTraveledForPathTracker
```csharp
public float GetTotalDistanceTraveledForPathTracker()
```

### SetTotalDistanceTraveledForPathTracker
```csharp
public void SetTotalDistanceTraveledForPathTracker(float distanceTraveled)
```

### SetTargetFrameForPathTracker
```csharp
public void SetTargetFrameForPathTracker()
```

### FindGroundFrameForWheelsStatic
```csharp
public static MatrixFrame FindGroundFrameForWheelsStatic(ref MatrixFrame frame, float axleLength, float wheelDiameter, WeakGameEntity gameEntity, List<GameEntity> wheels, Scene scene)
```

## Usage Example

```csharp
// Typical usage of SiegeWeaponMovementComponent (Component)
agent.GetComponent<SiegeWeaponMovementComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)