---
title: "DefaultDeploymentPlan"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultDeploymentPlan`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 创建一个 `initial plan` 实例或对象。

### CreateReinforcementPlan
`public static DefaultDeploymentPlan CreateReinforcementPlan(Mission mission, Team team)`

**用途 / Purpose:** 创建一个 `reinforcement plan` 实例或对象。

### CreateReinforcementPlanWithSpawnPath
`public static DefaultDeploymentPlan CreateReinforcementPlanWithSpawnPath(Mission mission, Team team, SpawnPathData spawnPathData)`

**用途 / Purpose:** 创建一个 `reinforcement plan with spawn path` 实例或对象。

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool value)`

**用途 / Purpose:** 设置 `spawn with horses` 的值或状态。

### ClearAddedTroops
`public void ClearAddedTroops()`

**用途 / Purpose:** 处理 `clear added troops` 相关逻辑。

### ClearPlan
`public void ClearPlan()`

**用途 / Purpose:** 处理 `clear plan` 相关逻辑。

### AddTroops
`public void AddTroops(FormationClass formationClass, int footTroopCount, int mountedTroopCount)`

**用途 / Purpose:** 向当前集合/状态中添加 `troops`。

### PlanBattleDeployment
`public void PlanBattleDeployment(FormationSceneSpawnEntry formationSceneSpawnEntries, float spawnPathOffset = 0f, float targetOffset = 0f)`

**用途 / Purpose:** 处理 `plan battle deployment` 相关逻辑。

### GetFormationPlan
`public DefaultFormationDeploymentPlan GetFormationPlan(FormationClass fClass)`

**用途 / Purpose:** 获取 `formation plan` 的当前值。

### GetFormationDeploymentFrame
`public bool GetFormationDeploymentFrame(FormationClass fClass, out MatrixFrame frame)`

**用途 / Purpose:** 获取 `formation deployment frame` 的当前值。

### IsPlanSuitableForFormations
`public bool IsPlanSuitableForFormations(ValueTuple<int, int> troopDataPerFormationClass)`

**用途 / Purpose:** 处理 `is plan suitable for formations` 相关逻辑。

### UpdateSafetyScore
`public void UpdateSafetyScore()`

**用途 / Purpose:** 更新 `safety score` 的状态或数据。

### GetFrameFromFormationSpawnEntity
`public WorldFrame GetFrameFromFormationSpawnEntity(GameEntity formationSpawnEntity, float depthOffset = 0f)`

**用途 / Purpose:** 获取 `frame from formation spawn entity` 的当前值。

### GetFormationSpawnWidthAndDepth
`public ValueTuple<float, float> GetFormationSpawnWidthAndDepth(FormationClass formationNo, int troopCount, bool hasMountedTroops, bool considerCavalryAsInfantry = false)`

**用途 / Purpose:** 获取 `formation spawn width and depth` 的当前值。

## 使用示例

```csharp
DefaultDeploymentPlan.CreateInitialPlan(mission, team);
```

## 参见

- [完整类目录](../catalog)