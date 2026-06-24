<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LadderQueueManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LadderQueueManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LadderQueueManager : MissionObject`
**Base:** `MissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/LadderQueueManager.cs`

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

**用途 / Purpose:** 处理 `deactivate immediate` 相关逻辑。

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** 处理 `deactivate` 相关逻辑。

### Activate
`public void Activate()`

**用途 / Purpose:** 处理 `activate` 相关逻辑。

### Initialize
`public void Initialize(int managedNavigationFaceId, MatrixFrame managedFrame, Vec3 managedDirection, BattleSideEnum managedSide, int maxUserCount, float arcAngle, float queueBeginDistance, float queueRowSize, float costPerRow, float baseCost, bool blockUsage, float agentSpacing, float zDifferenceToStopUsing, float distanceToStopUsing2d, bool doesManageMultipleIDs, int managedNavigationFaceAlternateID1, int managedNavigationFaceAlternateID2, int maxClimberCount, int maxRunnerCount)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### FlushQueueManager
`public void FlushQueueManager()`

**用途 / Purpose:** 处理 `flush queue manager` 相关逻辑。

### AssignNeighborQueueManager
`public void AssignNeighborQueueManager(LadderQueueManager neighborLadderQueueManager)`

**用途 / Purpose:** 处理 `assign neighbor queue manager` 相关逻辑。

### OnFormationFrameChanged
`public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition frame)`

**用途 / Purpose:** 当 `formation frame changed` 事件触发时调用此方法。

## 使用示例

```csharp
var manager = LadderQueueManager.Current;
```

## 参见

- [完整类目录](../catalog)