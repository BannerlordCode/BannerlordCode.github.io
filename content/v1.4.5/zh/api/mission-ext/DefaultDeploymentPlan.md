---
title: "DefaultDeploymentPlan"
description: "DefaultDeploymentPlan 的自动生成类参考。"
---
# DefaultDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultDeploymentPlan`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/DefaultDeploymentPlan.cs`

## 概述

`DefaultDeploymentPlan` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SpawnWithHorses` | `public bool SpawnWithHorses { get; }` |
| `PlanCount` | `public int PlanCount { get; }` |
| `IsPlanMade` | `public bool IsPlanMade { get; }` |
| `SpawnPathOffset` | `public float SpawnPathOffset { get; }` |
| `TargetOffset` | `public float TargetOffset { get; }` |
| `IsSafeToDeploy` | `public bool IsSafeToDeploy { get; }` |
| `SafetyScore` | `public float SafetyScore { get; }` |
| `FootTroopCount` | `public int FootTroopCount { get; }` |
| `MountedTroopCount` | `public int MountedTroopCount { get; }` |
| `TroopCount` | `public int TroopCount { get; }` |
| `MeanPosition` | `public Vec3 MeanPosition { get; }` |

## 主要方法

### CreateInitialPlan
`public static DefaultDeploymentPlan CreateInitialPlan(Mission mission, Team team)`

**用途 / Purpose:** 构建一个新的 initial plan 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
DefaultDeploymentPlan.CreateInitialPlan(mission, team);
```

### CreateReinforcementPlan
`public static DefaultDeploymentPlan CreateReinforcementPlan(Mission mission, Team team)`

**用途 / Purpose:** 构建一个新的 reinforcement plan 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
DefaultDeploymentPlan.CreateReinforcementPlan(mission, team);
```

### CreateReinforcementPlanWithSpawnPath
`public static DefaultDeploymentPlan CreateReinforcementPlanWithSpawnPath(Mission mission, Team team, SpawnPathData spawnPathData)`

**用途 / Purpose:** 构建一个新的 reinforcement plan with spawn path 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
DefaultDeploymentPlan.CreateReinforcementPlanWithSpawnPath(mission, team, spawnPathData);
```

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool value)`

**用途 / Purpose:** 为 spawn with horses 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DefaultDeploymentPlan 实例
DefaultDeploymentPlan defaultDeploymentPlan = ...;
defaultDeploymentPlan.SetSpawnWithHorses(false);
```

### ClearAddedTroops
`public void ClearAddedTroops()`

**用途 / Purpose:** 清空当前对象中的added troops。

```csharp
// 先通过子系统 API 拿到 DefaultDeploymentPlan 实例
DefaultDeploymentPlan defaultDeploymentPlan = ...;
defaultDeploymentPlan.ClearAddedTroops();
```

### ClearPlan
`public void ClearPlan()`

**用途 / Purpose:** 清空当前对象中的plan。

```csharp
// 先通过子系统 API 拿到 DefaultDeploymentPlan 实例
DefaultDeploymentPlan defaultDeploymentPlan = ...;
defaultDeploymentPlan.ClearPlan();
```

### AddTroops
`public void AddTroops(FormationClass formationClass, int footTroopCount, int mountedTroopCount)`

**用途 / Purpose:** 将 troops 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 DefaultDeploymentPlan 实例
DefaultDeploymentPlan defaultDeploymentPlan = ...;
defaultDeploymentPlan.AddTroops(formationClass, 0, 0);
```

### PlanBattleDeployment
`public void PlanBattleDeployment(FormationSceneSpawnEntry formationSceneSpawnEntries, float spawnPathOffset = 0f, float targetOffset = 0f)`

**用途 / Purpose:** 调用 PlanBattleDeployment 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultDeploymentPlan 实例
DefaultDeploymentPlan defaultDeploymentPlan = ...;
defaultDeploymentPlan.PlanBattleDeployment(formationSceneSpawnEntries, 0, 0);
```

### GetFormationPlan
`public DefaultFormationDeploymentPlan GetFormationPlan(FormationClass fClass)`

**用途 / Purpose:** 读取并返回当前对象中 formation plan 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDeploymentPlan 实例
DefaultDeploymentPlan defaultDeploymentPlan = ...;
var result = defaultDeploymentPlan.GetFormationPlan(fClass);
```

### GetFormationDeploymentFrame
`public bool GetFormationDeploymentFrame(FormationClass fClass, out MatrixFrame frame)`

**用途 / Purpose:** 读取并返回当前对象中 formation deployment frame 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDeploymentPlan 实例
DefaultDeploymentPlan defaultDeploymentPlan = ...;
var result = defaultDeploymentPlan.GetFormationDeploymentFrame(fClass, frame);
```

### IsPlanSuitableForFormations
`public bool IsPlanSuitableForFormations(ValueTuple<int, int> troopDataPerFormationClass)`

**用途 / Purpose:** 判断当前对象是否处于 plan suitable for formations 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultDeploymentPlan 实例
DefaultDeploymentPlan defaultDeploymentPlan = ...;
var result = defaultDeploymentPlan.IsPlanSuitableForFormations(valueTuple<int, 0);
```

### UpdateSafetyScore
`public void UpdateSafetyScore()`

**用途 / Purpose:** 重新计算并更新 safety score 的最新表示。

```csharp
// 先通过子系统 API 拿到 DefaultDeploymentPlan 实例
DefaultDeploymentPlan defaultDeploymentPlan = ...;
defaultDeploymentPlan.UpdateSafetyScore();
```

### GetFrameFromFormationSpawnEntity
`public WorldFrame GetFrameFromFormationSpawnEntity(GameEntity formationSpawnEntity, float depthOffset = 0f)`

**用途 / Purpose:** 读取并返回当前对象中 frame from formation spawn entity 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDeploymentPlan 实例
DefaultDeploymentPlan defaultDeploymentPlan = ...;
var result = defaultDeploymentPlan.GetFrameFromFormationSpawnEntity(formationSpawnEntity, 0);
```

### GetFormationSpawnWidthAndDepth
`public ValueTuple<float, float> GetFormationSpawnWidthAndDepth(FormationClass formationNo, int troopCount, bool hasMountedTroops, bool considerCavalryAsInfantry = false)`

**用途 / Purpose:** 读取并返回当前对象中 formation spawn width and depth 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDeploymentPlan 实例
DefaultDeploymentPlan defaultDeploymentPlan = ...;
var result = defaultDeploymentPlan.GetFormationSpawnWidthAndDepth(formationNo, 0, false, false);
```

## 使用示例

```csharp
DefaultDeploymentPlan.CreateInitialPlan(mission, team);
```

## 参见

- [本区域目录](../)