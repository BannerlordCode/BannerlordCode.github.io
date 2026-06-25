---
title: "LadderQueueManager"
description: "Auto-generated class reference for LadderQueueManager."
---
# LadderQueueManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LadderQueueManager : MissionObject`
**Base:** `MissionObject`
**File:** `TaleWorlds.MountAndBlade/LadderQueueManager.cs`

## Overview

`LadderQueueManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `LadderQueueManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDeactivated` | `public bool IsDeactivated { get; }` |

## Key Methods

### DeactivateImmediate
`public void DeactivateImmediate()`

**Purpose:** Deactivates the resource, state, or feature associated with `immediate`.

```csharp
// Obtain an instance of LadderQueueManager from the subsystem API first
LadderQueueManager ladderQueueManager = ...;
ladderQueueManager.DeactivateImmediate();
```

### Deactivate
`public void Deactivate()`

**Purpose:** Deactivates the resource, state, or feature represented by the current object.

```csharp
// Obtain an instance of LadderQueueManager from the subsystem API first
LadderQueueManager ladderQueueManager = ...;
ladderQueueManager.Deactivate();
```

### Activate
`public void Activate()`

**Purpose:** Activates the resource, state, or feature represented by the current object.

```csharp
// Obtain an instance of LadderQueueManager from the subsystem API first
LadderQueueManager ladderQueueManager = ...;
ladderQueueManager.Activate();
```

### Initialize
`public void Initialize(int managedNavigationFaceId, MatrixFrame managedFrame, Vec3 managedDirection, BattleSideEnum managedSide, int maxUserCount, float arcAngle, float queueBeginDistance, float queueRowSize, float costPerRow, float baseCost, bool blockUsage, float agentSpacing, float zDifferenceToStopUsing, float distanceToStopUsing2d, bool doesManageMultipleIDs, int managedNavigationFaceAlternateID1, int managedNavigationFaceAlternateID2, int maxClimberCount, int maxRunnerCount)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of LadderQueueManager from the subsystem API first
LadderQueueManager ladderQueueManager = ...;
ladderQueueManager.Initialize(0, managedFrame, managedDirection, managedSide, 0, 0, 0, 0, 0, 0, false, 0, 0, 0, false, 0, 0, 0, 0);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of LadderQueueManager from the subsystem API first
LadderQueueManager ladderQueueManager = ...;
var result = ladderQueueManager.GetTickRequirement();
```

### FlushQueueManager
`public void FlushQueueManager()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LadderQueueManager from the subsystem API first
LadderQueueManager ladderQueueManager = ...;
ladderQueueManager.FlushQueueManager();
```

### AssignNeighborQueueManager
`public void AssignNeighborQueueManager(LadderQueueManager neighborLadderQueueManager)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LadderQueueManager from the subsystem API first
LadderQueueManager ladderQueueManager = ...;
ladderQueueManager.AssignNeighborQueueManager(neighborLadderQueueManager);
```

### OnFormationFrameChanged
`public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition frame)`

**Purpose:** Invoked when the `formation frame changed` event is raised.

```csharp
// Obtain an instance of LadderQueueManager from the subsystem API first
LadderQueueManager ladderQueueManager = ...;
ladderQueueManager.OnFormationFrameChanged(agent, false, frame);
```

## Usage Example

```csharp
var manager = LadderQueueManager.Current;
```

## See Also

- [Area Index](../)