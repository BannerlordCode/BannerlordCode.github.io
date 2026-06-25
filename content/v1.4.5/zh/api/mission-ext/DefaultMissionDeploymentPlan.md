---
title: "DefaultMissionDeploymentPlan"
description: "DefaultMissionDeploymentPlan 的自动生成类参考。"
---
# DefaultMissionDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultMissionDeploymentPlan : IMissionDeploymentPlan`
**Base:** `IMissionDeploymentPlan`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultMissionDeploymentPlan.cs`

## 概述

`DefaultMissionDeploymentPlan` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.Initialize();
```

### ClearDeploymentPlan
`public void ClearDeploymentPlan(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的deployment plan。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.ClearDeploymentPlan(team);
```

### ClearReinforcementPlan
`public void ClearReinforcementPlan(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的reinforcement plan。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.ClearReinforcementPlan(team);
```

### HasPlayerSpawnFrame
`public bool HasPlayerSpawnFrame(BattleSideEnum battleSide)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 player spawn frame。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.HasPlayerSpawnFrame(battleSide);
```

### GetPlayerSpawnFrame
`public bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 player spawn frame 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetPlayerSpawnFrame(battleSide, position, direction);
```

### HasSignificantMountedTroops
`public static bool HasSignificantMountedTroops(int footTroopCount, int mountedTroopCount)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 significant mounted troops。

```csharp
// 静态调用，不需要实例
DefaultMissionDeploymentPlan.HasSignificantMountedTroops(0, 0);
```

### ClearAddedTroops
`public void ClearAddedTroops(Team team, bool isReinforcement = false)`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的added troops。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.ClearAddedTroops(team, false);
```

### ClearAll
`public void ClearAll()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的all。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.ClearAll();
```

### AddTroops
`public void AddTroops(Team team, FormationClass formationClass, int footTroopCount, int mountedTroopCount = 0, bool isReinforcement = false)`

**用途 / Purpose:** **用途 / Purpose:** 将 troops 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.AddTroops(team, formationClass, 0, 0, false);
```

### SetSpawnWithHorses
`public void SetSpawnWithHorses(Team team, bool spawnWithHorses)`

**用途 / Purpose:** **用途 / Purpose:** 为 spawn with horses 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.SetSpawnWithHorses(team, false);
```

### MakeDefaultDeploymentPlans
`public void MakeDefaultDeploymentPlans()`

**用途 / Purpose:** **用途 / Purpose:** 调用 MakeDefaultDeploymentPlans 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.MakeDefaultDeploymentPlans();
```

### MakeDeploymentPlan
`public void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetOffset = 0f)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MakeDeploymentPlan 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.MakeDeploymentPlan(team, 0, 0);
```

### MakeReinforcementDeploymentPlan
`public void MakeReinforcementDeploymentPlan(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MakeReinforcementDeploymentPlan 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.MakeReinforcementDeploymentPlan(team);
```

### RemakeDeploymentPlan
`public bool RemakeDeploymentPlan(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RemakeDeploymentPlan 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.RemakeDeploymentPlan(team);
```

### IsPositionInsideDeploymentBoundaries
`public bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 position inside deployment boundaries 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.IsPositionInsideDeploymentBoundaries(team, position);
```

### GetClosestDeploymentBoundaryPosition
`public Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 closest deployment boundary position 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetClosestDeploymentBoundaryPosition(team, position);
```

### SupportsReinforcements
`public bool SupportsReinforcements()`

**用途 / Purpose:** **用途 / Purpose:** 调用 SupportsReinforcements 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.SupportsReinforcements();
```

### SupportsNavmesh
`public bool SupportsNavmesh(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SupportsNavmesh 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.SupportsNavmesh(team);
```

### GetPathDeploymentBoundaryIntersection
`public bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 path deployment boundary intersection 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetPathDeploymentBoundaryIntersection(team, startPosition, endPosition, intersection);
```

### IsPositionInsideSiegeDeploymentBoundaries
`public bool IsPositionInsideSiegeDeploymentBoundaries(in Vec2 position)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 position inside siege deployment boundaries 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.IsPositionInsideSiegeDeploymentBoundaries(position);
```

### GetSpawnPathOffset
`public float GetSpawnPathOffset(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 spawn path offset 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetSpawnPathOffset(team);
```

### GetTargetOffset
`public float GetTargetOffset(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 target offset 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetTargetOffset(team);
```

### GetTroopCount
`public int GetTroopCount(Team team, bool isReinforcement = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 troop count 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetTroopCount(team, false);
```

### GetFormationPlan
`public IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 formation plan 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetFormationPlan(team, fClass, false);
```

### IsPlanMade
`public bool IsPlanMade(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 plan made 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.IsPlanMade(team);
```

### IsPlanMade
`public bool IsPlanMade(Team team, out bool isFirstPlan)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 plan made 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.IsPlanMade(team, isFirstPlan);
```

### IsReinforcementPlanMade
`public bool IsReinforcementPlanMade(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 reinforcement plan made 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.IsReinforcementPlanMade(team);
```

### IsInitialPlanSuitableForFormations
`public bool IsInitialPlanSuitableForFormations(Team team, (int footTroopCount, int mountedTroopCount) troopDataPerFormationClass)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 initial plan suitable for formations 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.IsInitialPlanSuitableForFormations(team, footTroopCount, 0);
```

### HasDeploymentBoundaries
`public bool HasDeploymentBoundaries(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 deployment boundaries。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.HasDeploymentBoundaries(team);
```

### GetDeploymentFrame
`public MatrixFrame GetDeploymentFrame(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 deployment frame 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetDeploymentFrame(team);
```

### ProjectPositionToDeploymentBoundaries
`public void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition endPosition)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ProjectPositionToDeploymentBoundaries 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.ProjectPositionToDeploymentBoundaries(team, endPosition);
```

### GetMeanPosition
`public Vec3 GetMeanPosition(Team team, bool isReinforcement = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mean position 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetMeanPosition(team, false);
```

### UpdateReinforcementPlan
`public void UpdateReinforcementPlan(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 reinforcement plan 的最新表示。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.UpdateReinforcementPlan(team);
```

### GetZoomFocusFrame
`public MatrixFrame GetZoomFocusFrame(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 zoom focus frame 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetZoomFocusFrame(team);
```

### GetZoomOffset
`public float GetZoomOffset(Team team, float fovAngle)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 zoom offset 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDeploymentPlan 实例
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetZoomOffset(team, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.Initialize();
```

## 参见

- [本区域目录](../)