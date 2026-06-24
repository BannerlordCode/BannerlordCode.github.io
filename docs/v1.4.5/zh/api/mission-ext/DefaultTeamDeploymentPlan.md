<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultTeamDeploymentPlan`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultTeamDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultTeamDeploymentPlan : ITeamDeploymentPlan`
**Base:** `ITeamDeploymentPlan`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs`

## 概述

`DefaultTeamDeploymentPlan` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Team` | `public Team Team { get; }` |
| `SpawnWithHorses` | `public bool SpawnWithHorses { get; }` |

## 主要方法

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool value)`

**用途 / Purpose:** 设置 `spawn with horses` 的值或状态。

### MakeDeploymentPlan
`public void MakeDeploymentPlan(float spawnPathOffset = 0f, float targetOffset = 0f, FormationSceneSpawnEntry formationSceneSpawnEntries = null, bool isReinforcement = false)`

**用途 / Purpose:** 处理 `make deployment plan` 相关逻辑。

### UpdateReinforcementPlans
`public void UpdateReinforcementPlans()`

**用途 / Purpose:** 更新 `reinforcement plans` 的状态或数据。

### ClearPlan
`public void ClearPlan(bool isReinforcement = false)`

**用途 / Purpose:** 处理 `clear plan` 相关逻辑。

### ClearAddedTroops
`public void ClearAddedTroops(bool isReinforcement = false)`

**用途 / Purpose:** 处理 `clear added troops` 相关逻辑。

### AddTroops
`public void AddTroops(FormationClass formationClass, int footTroopCount, int mountedTroopCount, bool isReinforcement = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `troops`。

### GetTroopCount
`public int GetTroopCount(bool isReinforcement = false)`

**用途 / Purpose:** 获取 `troop count` 的当前值。

### IsFirstPlan
`public bool IsFirstPlan(bool isReinforcement = false)`

**用途 / Purpose:** 处理 `is first plan` 相关逻辑。

### IsPlanMade
`public bool IsPlanMade(bool isReinforcement = false)`

**用途 / Purpose:** 处理 `is plan made` 相关逻辑。

### GetSpawnPathOffset
`public float GetSpawnPathOffset(bool isReinforcement = false)`

**用途 / Purpose:** 获取 `spawn path offset` 的当前值。

### GetTargetOffset
`public float GetTargetOffset(bool isReinforcement = false)`

**用途 / Purpose:** 获取 `target offset` 的当前值。

### GetDeploymentFrame
`public MatrixFrame GetDeploymentFrame()`

**用途 / Purpose:** 获取 `deployment frame` 的当前值。

### HasDeploymentBoundaries
`public bool HasDeploymentBoundaries()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `deployment boundaries`。

### GetFormationPlan
`public IFormationDeploymentPlan GetFormationPlan(FormationClass fClass, bool isReinforcement = false)`

**用途 / Purpose:** 获取 `formation plan` 的当前值。

### GetMeanPosition
`public Vec3 GetMeanPosition(bool isReinforcement = false)`

**用途 / Purpose:** 获取 `mean position` 的当前值。

### IsInitialPlanSuitableForFormations
`public bool IsInitialPlanSuitableForFormations((int, int) troopDataPerFormationClass)`

**用途 / Purpose:** 处理 `is initial plan suitable for formations` 相关逻辑。

### IsPositionInsideDeploymentBoundaries
`public bool IsPositionInsideDeploymentBoundaries(in Vec2 position, out (string id, MBList<Vec2> points) containingBoundaryTuple)`

**用途 / Purpose:** 处理 `is position inside deployment boundaries` 相关逻辑。

### GetClosestDeploymentBoundaryPosition
`public Vec2 GetClosestDeploymentBoundaryPosition(in Vec2 position)`

**用途 / Purpose:** 获取 `closest deployment boundary position` 的当前值。

### GetPathDeploymentBoundaryIntersection
`public bool GetPathDeploymentBoundaryIntersection(in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection)`

**用途 / Purpose:** 获取 `path deployment boundary intersection` 的当前值。

## 使用示例

```csharp
var value = new DefaultTeamDeploymentPlan();
value.SetSpawnWithHorses(false);
```

## 参见

- [完整类目录](../catalog)