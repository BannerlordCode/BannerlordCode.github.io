<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LadderQueueManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LadderQueueManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LadderQueueManager : MissionObject`
**Base:** `MissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/LadderQueueManager.cs`

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

**Purpose:** Handles logic related to `deactivate immediate`.

### Deactivate
`public void Deactivate()`

**Purpose:** Handles logic related to `deactivate`.

### Activate
`public void Activate()`

**Purpose:** Handles logic related to `activate`.

### Initialize
`public void Initialize(int managedNavigationFaceId, MatrixFrame managedFrame, Vec3 managedDirection, BattleSideEnum managedSide, int maxUserCount, float arcAngle, float queueBeginDistance, float queueRowSize, float costPerRow, float baseCost, bool blockUsage, float agentSpacing, float zDifferenceToStopUsing, float distanceToStopUsing2d, bool doesManageMultipleIDs, int managedNavigationFaceAlternateID1, int managedNavigationFaceAlternateID2, int maxClimberCount, int maxRunnerCount)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### FlushQueueManager
`public void FlushQueueManager()`

**Purpose:** Handles logic related to `flush queue manager`.

### AssignNeighborQueueManager
`public void AssignNeighborQueueManager(LadderQueueManager neighborLadderQueueManager)`

**Purpose:** Handles logic related to `assign neighbor queue manager`.

### OnFormationFrameChanged
`public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition frame)`

**Purpose:** Called when the `formation frame changed` event is raised.

## Usage Example

```csharp
var manager = LadderQueueManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)