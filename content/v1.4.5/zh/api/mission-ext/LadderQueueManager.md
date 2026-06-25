---
title: "LadderQueueManager"
description: "LadderQueueManager 的自动生成类参考。"
---
# LadderQueueManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LadderQueueManager : MissionObject`
**Base:** `MissionObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/LadderQueueManager.cs`

## 概述

`LadderQueueManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `LadderQueueManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDeactivated` | `public bool IsDeactivated { get; }` |

## 主要方法

### DeactivateImmediate
`public void DeactivateImmediate()`

**用途 / Purpose:** 停用「immediate」对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 LadderQueueManager 实例
LadderQueueManager ladderQueueManager = ...;
ladderQueueManager.DeactivateImmediate();
```

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** 停用当前对象对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 LadderQueueManager 实例
LadderQueueManager ladderQueueManager = ...;
ladderQueueManager.Deactivate();
```

### Activate
`public void Activate()`

**用途 / Purpose:** 激活当前对象对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 LadderQueueManager 实例
LadderQueueManager ladderQueueManager = ...;
ladderQueueManager.Activate();
```

### Initialize
`public void Initialize(int managedNavigationFaceId, MatrixFrame managedFrame, Vec3 managedDirection, BattleSideEnum managedSide, int maxUserCount, float arcAngle, float queueBeginDistance, float queueRowSize, float costPerRow, float baseCost, bool blockUsage, float agentSpacing, float zDifferenceToStopUsing, float distanceToStopUsing2d, bool doesManageMultipleIDs, int managedNavigationFaceAlternateID1, int managedNavigationFaceAlternateID2, int maxClimberCount, int maxRunnerCount)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 LadderQueueManager 实例
LadderQueueManager ladderQueueManager = ...;
ladderQueueManager.Initialize(0, managedFrame, managedDirection, managedSide, 0, 0, 0, 0, 0, 0, false, 0, 0, 0, false, 0, 0, 0, 0);
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 LadderQueueManager 实例
LadderQueueManager ladderQueueManager = ...;
var result = ladderQueueManager.GetTickRequirement();
```

### FlushQueueManager
`public void FlushQueueManager()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LadderQueueManager 实例
LadderQueueManager ladderQueueManager = ...;
ladderQueueManager.FlushQueueManager();
```

### AssignNeighborQueueManager
`public void AssignNeighborQueueManager(LadderQueueManager neighborLadderQueueManager)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LadderQueueManager 实例
LadderQueueManager ladderQueueManager = ...;
ladderQueueManager.AssignNeighborQueueManager(neighborLadderQueueManager);
```

### OnFormationFrameChanged
`public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition frame)`

**用途 / Purpose:** 在 「formation frame changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LadderQueueManager 实例
LadderQueueManager ladderQueueManager = ...;
ladderQueueManager.OnFormationFrameChanged(agent, false, frame);
```

## 使用示例

```csharp
var manager = LadderQueueManager.Current;
```

## 参见

- [本区域目录](../)