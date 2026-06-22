<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LadderQueueManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LadderQueueManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LadderQueueManager : MissionObject`
**Base:** `MissionObject`
**File:** `TaleWorlds.MountAndBlade/LadderQueueManager.cs`

## Overview

`LadderQueueManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### DeactivateImmediate
```csharp
public void DeactivateImmediate()
```

### Deactivate
```csharp
public void Deactivate()
```

### Activate
```csharp
public void Activate()
```

### Initialize
```csharp
public void Initialize(int managedNavigationFaceId, MatrixFrame managedFrame, Vec3 managedDirection, BattleSideEnum managedSide, int maxUserCount, float arcAngle, float queueBeginDistance, float queueRowSize, float costPerRow, float baseCost, bool blockUsage, float agentSpacing, float zDifferenceToStopUsing, float distanceToStopUsing2d, bool doesManageMultipleIDs, int managedNavigationFaceAlternateID1, int managedNavigationFaceAlternateID2, int maxClimberCount, int maxRunnerCount)
```

### GetTickRequirement
```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### FlushQueueManager
```csharp
public void FlushQueueManager()
```

### AssignNeighborQueueManager
```csharp
public void AssignNeighborQueueManager(LadderQueueManager neighborLadderQueueManager)
```

### OnFormationFrameChanged
```csharp
public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition frame)
```

## Usage Example

```csharp
// Typical usage of LadderQueueManager (Manager)
LadderQueueManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)