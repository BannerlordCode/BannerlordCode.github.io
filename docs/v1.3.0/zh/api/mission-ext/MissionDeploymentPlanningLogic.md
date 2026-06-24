<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionDeploymentPlanningLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionDeploymentPlanningLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionDeploymentPlanningLogic : MissionLogic, IMissionDeploymentPlan`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionDeploymentPlanningLogic.cs`

## 概述

`MissionDeploymentPlanningLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionDeploymentPlanningLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public virtual void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### ClearAll
`public virtual void ClearAll()`

**用途 / Purpose:** 处理 `clear all` 相关逻辑。

### MakeDefaultDeploymentPlans
`public virtual void MakeDefaultDeploymentPlans()`

**用途 / Purpose:** 处理 `make default deployment plans` 相关逻辑。

### MakeDeploymentPlan
`public virtual void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetPathOffset = 0f)`

**用途 / Purpose:** 处理 `make deployment plan` 相关逻辑。

### RemakeDeploymentPlan
`public virtual bool RemakeDeploymentPlan(Team team)`

**用途 / Purpose:** 处理 `remake deployment plan` 相关逻辑。

### ClearDeploymentPlan
`public virtual void ClearDeploymentPlan(Team team)`

**用途 / Purpose:** 处理 `clear deployment plan` 相关逻辑。

### IsPlanMade
`public virtual bool IsPlanMade(Team team)`

**用途 / Purpose:** 处理 `is plan made` 相关逻辑。

### IsPlanMade
`public virtual bool IsPlanMade(Team team, out bool isFirstPlan)`

**用途 / Purpose:** 处理 `is plan made` 相关逻辑。

### IsPositionInsideDeploymentBoundaries
`public virtual bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position)`

**用途 / Purpose:** 处理 `is position inside deployment boundaries` 相关逻辑。

### HasDeploymentBoundaries
`public virtual bool HasDeploymentBoundaries(Team team)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `deployment boundaries`。

### GetDeploymentBoundaries
`public virtual MBReadOnlyList<ValueTuple<string, List<Vec2>>> GetDeploymentBoundaries(Team team)`

**用途 / Purpose:** 获取 `deployment boundaries` 的当前值。

### SupportsReinforcements
`public virtual bool SupportsReinforcements()`

**用途 / Purpose:** 处理 `supports reinforcements` 相关逻辑。

### SupportsNavmesh
`public virtual bool SupportsNavmesh()`

**用途 / Purpose:** 处理 `supports navmesh` 相关逻辑。

### HasPlayerSpawnFrame
`public virtual bool HasPlayerSpawnFrame(BattleSideEnum battleSide)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `player spawn frame`。

### GetPlayerSpawnFrame
`public virtual bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction)`

**用途 / Purpose:** 获取 `player spawn frame` 的当前值。

### GetClosestDeploymentBoundaryPosition
`public virtual Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position)`

**用途 / Purpose:** 获取 `closest deployment boundary position` 的当前值。

### ProjectPositionToDeploymentBoundaries
`public virtual void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition position)`

**用途 / Purpose:** 处理 `project position to deployment boundaries` 相关逻辑。

### GetPathDeploymentBoundaryIntersection
`public virtual bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition foundPosition)`

**用途 / Purpose:** 获取 `path deployment boundary intersection` 的当前值。

### GetDeploymentFrame
`public virtual MatrixFrame GetDeploymentFrame(Team team)`

**用途 / Purpose:** 获取 `deployment frame` 的当前值。

### GetFormationPlan
`public virtual IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement = false)`

**用途 / Purpose:** 获取 `formation plan` 的当前值。

### GetSpawnPathOffset
`public virtual float GetSpawnPathOffset(Team team)`

**用途 / Purpose:** 获取 `spawn path offset` 的当前值。

### GetZoomFocusFrame
`public virtual MatrixFrame GetZoomFocusFrame(Team team)`

**用途 / Purpose:** 获取 `zoom focus frame` 的当前值。

### GetZoomOffset
`public virtual float GetZoomOffset(Team team, float fovAngle)`

**用途 / Purpose:** 获取 `zoom offset` 的当前值。

## 使用示例

```csharp
var implementation = new CustomMissionDeploymentPlanningLogic();
```

## 参见

- [完整类目录](../catalog)