<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LadderQueueManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LadderQueueManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LadderQueueManager : MissionObject`
**Base:** `MissionObject`
**File:** `TaleWorlds.MountAndBlade/LadderQueueManager.cs`

## 概述

`LadderQueueManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

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

## 使用示例

```csharp
// LadderQueueManager (Manager) 的典型用法
LadderQueueManager.Current;
```

## 参见

- [完整类目录](../catalog)