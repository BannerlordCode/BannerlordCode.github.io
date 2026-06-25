---
title: "MissionDeploymentPlanningLogic"
description: "MissionDeploymentPlanningLogic 的自动生成类参考。"
---
# MissionDeploymentPlanningLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionDeploymentPlanningLogic : MissionLogic, IMissionDeploymentPlan`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionDeploymentPlanningLogic.cs`

## 概述

`MissionDeploymentPlanningLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionDeploymentPlanningLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public virtual void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
missionDeploymentPlanningLogic.Initialize();
```

### ClearAll
`public virtual void ClearAll()`

**用途 / Purpose:** 清空当前对象中的all。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
missionDeploymentPlanningLogic.ClearAll();
```

### MakeDefaultDeploymentPlans
`public virtual void MakeDefaultDeploymentPlans()`

**用途 / Purpose:** 调用 MakeDefaultDeploymentPlans 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
missionDeploymentPlanningLogic.MakeDefaultDeploymentPlans();
```

### MakeDeploymentPlan
`public virtual void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetPathOffset = 0f)`

**用途 / Purpose:** 调用 MakeDeploymentPlan 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
missionDeploymentPlanningLogic.MakeDeploymentPlan(team, 0, 0);
```

### RemakeDeploymentPlan
`public virtual bool RemakeDeploymentPlan(Team team)`

**用途 / Purpose:** 调用 RemakeDeploymentPlan 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.RemakeDeploymentPlan(team);
```

### ClearDeploymentPlan
`public virtual void ClearDeploymentPlan(Team team)`

**用途 / Purpose:** 清空当前对象中的deployment plan。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
missionDeploymentPlanningLogic.ClearDeploymentPlan(team);
```

### IsPlanMade
`public virtual bool IsPlanMade(Team team)`

**用途 / Purpose:** 判断当前对象是否处于 plan made 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.IsPlanMade(team);
```

### IsPlanMade
`public virtual bool IsPlanMade(Team team, out bool isFirstPlan)`

**用途 / Purpose:** 判断当前对象是否处于 plan made 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.IsPlanMade(team, isFirstPlan);
```

### IsPositionInsideDeploymentBoundaries
`public virtual bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position)`

**用途 / Purpose:** 判断当前对象是否处于 position inside deployment boundaries 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.IsPositionInsideDeploymentBoundaries(team, position);
```

### HasDeploymentBoundaries
`public virtual bool HasDeploymentBoundaries(Team team)`

**用途 / Purpose:** 判断当前对象是否已经持有 deployment boundaries。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.HasDeploymentBoundaries(team);
```

### SupportsReinforcements
`public virtual bool SupportsReinforcements()`

**用途 / Purpose:** 调用 SupportsReinforcements 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.SupportsReinforcements();
```

### UpdateReinforcementPlan
`public virtual void UpdateReinforcementPlan(Team team)`

**用途 / Purpose:** 重新计算并更新 reinforcement plan 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
missionDeploymentPlanningLogic.UpdateReinforcementPlan(team);
```

### SupportsNavmesh
`public virtual bool SupportsNavmesh(Team team)`

**用途 / Purpose:** 调用 SupportsNavmesh 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.SupportsNavmesh(team);
```

### HasPlayerSpawnFrame
`public virtual bool HasPlayerSpawnFrame(BattleSideEnum battleSide)`

**用途 / Purpose:** 判断当前对象是否已经持有 player spawn frame。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.HasPlayerSpawnFrame(battleSide);
```

### GetPlayerSpawnFrame
`public virtual bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction)`

**用途 / Purpose:** 读取并返回当前对象中 player spawn frame 的结果。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetPlayerSpawnFrame(battleSide, position, direction);
```

### GetClosestDeploymentBoundaryPosition
`public virtual Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position)`

**用途 / Purpose:** 读取并返回当前对象中 closest deployment boundary position 的结果。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetClosestDeploymentBoundaryPosition(team, position);
```

### ProjectPositionToDeploymentBoundaries
`public virtual void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition position)`

**用途 / Purpose:** 调用 ProjectPositionToDeploymentBoundaries 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
missionDeploymentPlanningLogic.ProjectPositionToDeploymentBoundaries(team, position);
```

### GetPathDeploymentBoundaryIntersection
`public virtual bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition foundPosition)`

**用途 / Purpose:** 读取并返回当前对象中 path deployment boundary intersection 的结果。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetPathDeploymentBoundaryIntersection(team, startPosition, endPosition, foundPosition);
```

### GetDeploymentFrame
`public virtual MatrixFrame GetDeploymentFrame(Team team)`

**用途 / Purpose:** 读取并返回当前对象中 deployment frame 的结果。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetDeploymentFrame(team);
```

### GetFormationPlan
`public virtual IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement = false)`

**用途 / Purpose:** 读取并返回当前对象中 formation plan 的结果。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetFormationPlan(team, fClass, false);
```

### GetSpawnPathOffset
`public virtual float GetSpawnPathOffset(Team team)`

**用途 / Purpose:** 读取并返回当前对象中 spawn path offset 的结果。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetSpawnPathOffset(team);
```

### GetZoomFocusFrame
`public virtual MatrixFrame GetZoomFocusFrame(Team team)`

**用途 / Purpose:** 读取并返回当前对象中 zoom focus frame 的结果。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetZoomFocusFrame(team);
```

### GetZoomOffset
`public virtual float GetZoomOffset(Team team, float fovAngle)`

**用途 / Purpose:** 读取并返回当前对象中 zoom offset 的结果。

```csharp
// 先通过子系统 API 拿到 MissionDeploymentPlanningLogic 实例
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetZoomOffset(team, 0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionDeploymentPlanningLogic instance = ...;
```

## 参见

- [本区域目录](../)