---
title: "DefaultTeamDeploymentPlan"
description: "DefaultTeamDeploymentPlan 的自动生成类参考。"
---
# DefaultTeamDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultTeamDeploymentPlan`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs`

## 概述

`DefaultTeamDeploymentPlan` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SpawnWithHorses` | `public bool SpawnWithHorses { get; }` |
| `DeploymentBoundaries` | `public MBReadOnlyList<ValueTuple<string, MBList<Vec2>>> DeploymentBoundaries { get; }` |

## 主要方法

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 spawn with horses 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
defaultTeamDeploymentPlan.SetSpawnWithHorses(false);
```

### MakeDeploymentPlan
`public void MakeDeploymentPlan(FormationSceneSpawnEntry formationSceneSpawnEntries, bool isReinforcement = false, float spawnPathOffset = 0f, float targetOffset = 0f)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MakeDeploymentPlan 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
defaultTeamDeploymentPlan.MakeDeploymentPlan(formationSceneSpawnEntries, false, 0, 0);
```

### UpdateReinforcementPlans
`public void UpdateReinforcementPlans()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 reinforcement plans 的最新表示。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
defaultTeamDeploymentPlan.UpdateReinforcementPlans();
```

### ClearPlan
`public void ClearPlan(bool isReinforcement = false)`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的plan。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
defaultTeamDeploymentPlan.ClearPlan(false);
```

### ClearAddedTroops
`public void ClearAddedTroops(bool isReinforcement = false)`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的added troops。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
defaultTeamDeploymentPlan.ClearAddedTroops(false);
```

### AddTroops
`public void AddTroops(FormationClass formationClass, int footTroopCount, int mountedTroopCount, bool isReinforcement = false)`

**用途 / Purpose:** **用途 / Purpose:** 将 troops 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
defaultTeamDeploymentPlan.AddTroops(formationClass, 0, 0, false);
```

### IsFirstPlan
`public bool IsFirstPlan(bool isReinforcement = false)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 first plan 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.IsFirstPlan(false);
```

### IsPlanMade
`public bool IsPlanMade(bool isReinforcement = false)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 plan made 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.IsPlanMade(false);
```

### GetSpawnPathOffset
`public float GetSpawnPathOffset(bool isReinforcement = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 spawn path offset 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetSpawnPathOffset(false);
```

### GetTargetOffset
`public float GetTargetOffset(bool isReinforcement = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 target offset 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetTargetOffset(false);
```

### GetTroopCount
`public int GetTroopCount(bool isReinforcement = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 troop count 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetTroopCount(false);
```

### GetDeploymentFrame
`public MatrixFrame GetDeploymentFrame()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 deployment frame 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetDeploymentFrame();
```

### HasDeploymentBoundaries
`public bool HasDeploymentBoundaries()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 deployment boundaries。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.HasDeploymentBoundaries();
```

### GetFormationPlan
`public IFormationDeploymentPlan GetFormationPlan(FormationClass fClass, bool isReinforcement = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 formation plan 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetFormationPlan(fClass, false);
```

### GetMeanPosition
`public Vec3 GetMeanPosition(bool isReinforcement = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mean position 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetMeanPosition(false);
```

### IsInitialPlanSuitableForFormations
`public bool IsInitialPlanSuitableForFormations(ValueTuple<int, int> troopDataPerFormationClass)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 initial plan suitable for formations 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.IsInitialPlanSuitableForFormations(valueTuple<int, 0);
```

### IsPositionInsideDeploymentBoundaries
`public bool IsPositionInsideDeploymentBoundaries(in Vec2 position, { "id", "points" })`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 position inside deployment boundaries 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.IsPositionInsideDeploymentBoundaries(position, "id", });
```

### GetClosestDeploymentBoundaryPosition
`public Vec2 GetClosestDeploymentBoundaryPosition(in Vec2 position)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 closest deployment boundary position 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetClosestDeploymentBoundaryPosition(position);
```

### GetPathDeploymentBoundaryIntersection
`public bool GetPathDeploymentBoundaryIntersection(in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 path deployment boundary intersection 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTeamDeploymentPlan 实例
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetPathDeploymentBoundaryIntersection(startPosition, endPosition, intersection);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
defaultTeamDeploymentPlan.SetSpawnWithHorses(false);
```

## 参见

- [本区域目录](../)