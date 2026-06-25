---
title: "DefaultMissionDeploymentPlan"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMissionDeploymentPlan`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMissionDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultMissionDeploymentPlan : IMissionDeploymentPlan`
**Base:** `IMissionDeploymentPlan`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultMissionDeploymentPlan.cs`

## 概述

`DefaultMissionDeploymentPlan` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### ClearDeploymentPlan
`public void ClearDeploymentPlan(Team team)`

**用途 / Purpose:** 处理 `clear deployment plan` 相关逻辑。

### ClearReinforcementPlan
`public void ClearReinforcementPlan(Team team)`

**用途 / Purpose:** 处理 `clear reinforcement plan` 相关逻辑。

### HasPlayerSpawnFrame
`public bool HasPlayerSpawnFrame(BattleSideEnum battleSide)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `player spawn frame`。

### GetPlayerSpawnFrame
`public bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction)`

**用途 / Purpose:** 获取 `player spawn frame` 的当前值。

### HasSignificantMountedTroops
`public static bool HasSignificantMountedTroops(int footTroopCount, int mountedTroopCount)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `significant mounted troops`。

### ClearAddedTroops
`public void ClearAddedTroops(Team team, bool isReinforcement = false)`

**用途 / Purpose:** 处理 `clear added troops` 相关逻辑。

### ClearAll
`public void ClearAll()`

**用途 / Purpose:** 处理 `clear all` 相关逻辑。

### AddTroops
`public void AddTroops(Team team, FormationClass formationClass, int footTroopCount, int mountedTroopCount = 0, bool isReinforcement = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `troops`。

### SetSpawnWithHorses
`public void SetSpawnWithHorses(Team team, bool spawnWithHorses)`

**用途 / Purpose:** 设置 `spawn with horses` 的值或状态。

### MakeDefaultDeploymentPlans
`public void MakeDefaultDeploymentPlans()`

**用途 / Purpose:** 处理 `make default deployment plans` 相关逻辑。

### MakeDeploymentPlan
`public void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetOffset = 0f)`

**用途 / Purpose:** 处理 `make deployment plan` 相关逻辑。

### MakeReinforcementDeploymentPlan
`public void MakeReinforcementDeploymentPlan(Team team)`

**用途 / Purpose:** 处理 `make reinforcement deployment plan` 相关逻辑。

### RemakeDeploymentPlan
`public bool RemakeDeploymentPlan(Team team)`

**用途 / Purpose:** 处理 `remake deployment plan` 相关逻辑。

### IsPositionInsideDeploymentBoundaries
`public bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position)`

**用途 / Purpose:** 处理 `is position inside deployment boundaries` 相关逻辑。

### GetClosestDeploymentBoundaryPosition
`public Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position)`

**用途 / Purpose:** 获取 `closest deployment boundary position` 的当前值。

### SupportsReinforcements
`public bool SupportsReinforcements()`

**用途 / Purpose:** 处理 `supports reinforcements` 相关逻辑。

### SupportsNavmesh
`public bool SupportsNavmesh(Team team)`

**用途 / Purpose:** 处理 `supports navmesh` 相关逻辑。

### GetPathDeploymentBoundaryIntersection
`public bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection)`

**用途 / Purpose:** 获取 `path deployment boundary intersection` 的当前值。

### IsPositionInsideSiegeDeploymentBoundaries
`public bool IsPositionInsideSiegeDeploymentBoundaries(in Vec2 position)`

**用途 / Purpose:** 处理 `is position inside siege deployment boundaries` 相关逻辑。

### GetSpawnPathOffset
`public float GetSpawnPathOffset(Team team)`

**用途 / Purpose:** 获取 `spawn path offset` 的当前值。

### GetTargetOffset
`public float GetTargetOffset(Team team)`

**用途 / Purpose:** 获取 `target offset` 的当前值。

### GetTroopCount
`public int GetTroopCount(Team team, bool isReinforcement = false)`

**用途 / Purpose:** 获取 `troop count` 的当前值。

### GetFormationPlan
`public IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement)`

**用途 / Purpose:** 获取 `formation plan` 的当前值。

### IsPlanMade
`public bool IsPlanMade(Team team)`

**用途 / Purpose:** 处理 `is plan made` 相关逻辑。

### IsPlanMade
`public bool IsPlanMade(Team team, out bool isFirstPlan)`

**用途 / Purpose:** 处理 `is plan made` 相关逻辑。

### IsReinforcementPlanMade
`public bool IsReinforcementPlanMade(Team team)`

**用途 / Purpose:** 处理 `is reinforcement plan made` 相关逻辑。

### IsInitialPlanSuitableForFormations
`public bool IsInitialPlanSuitableForFormations(Team team, (int footTroopCount, int mountedTroopCount) troopDataPerFormationClass)`

**用途 / Purpose:** 处理 `is initial plan suitable for formations` 相关逻辑。

### HasDeploymentBoundaries
`public bool HasDeploymentBoundaries(Team team)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `deployment boundaries`。

### GetDeploymentFrame
`public MatrixFrame GetDeploymentFrame(Team team)`

**用途 / Purpose:** 获取 `deployment frame` 的当前值。

### ProjectPositionToDeploymentBoundaries
`public void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition endPosition)`

**用途 / Purpose:** 处理 `project position to deployment boundaries` 相关逻辑。

### GetMeanPosition
`public Vec3 GetMeanPosition(Team team, bool isReinforcement = false)`

**用途 / Purpose:** 获取 `mean position` 的当前值。

### UpdateReinforcementPlan
`public void UpdateReinforcementPlan(Team team)`

**用途 / Purpose:** 更新 `reinforcement plan` 的状态或数据。

### GetZoomFocusFrame
`public MatrixFrame GetZoomFocusFrame(Team team)`

**用途 / Purpose:** 获取 `zoom focus frame` 的当前值。

### GetZoomOffset
`public float GetZoomOffset(Team team, float fovAngle)`

**用途 / Purpose:** 获取 `zoom offset` 的当前值。

## 使用示例

```csharp
var value = new DefaultMissionDeploymentPlan();
value.Initialize();
```

## 参见

- [完整类目录](../catalog)