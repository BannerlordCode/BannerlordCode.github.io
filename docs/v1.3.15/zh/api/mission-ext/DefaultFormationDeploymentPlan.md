<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultFormationDeploymentPlan`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultFormationDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultFormationDeploymentPlan : IFormationDeploymentPlan`
**Base:** `IFormationDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs`

## 概述

`DefaultFormationDeploymentPlan` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Class` | `public FormationClass Class { get; }` |
| `SpawnClass` | `public FormationClass SpawnClass { get; }` |
| `PlannedWidth` | `public float PlannedWidth { get; }` |
| `PlannedDepth` | `public float PlannedDepth { get; }` |
| `PlannedTroopCount` | `public int PlannedTroopCount { get; }` |
| `PlannedFootTroopCount` | `public int PlannedFootTroopCount { get; }` |
| `PlannedMountedTroopCount` | `public int PlannedMountedTroopCount { get; }` |
| `HasDimensions` | `public bool HasDimensions { get; }` |
| `HasSignificantMountedTroops` | `public bool HasSignificantMountedTroops { get; }` |

## 主要方法

### HasFrame
`public bool HasFrame()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `frame`。

### GetDefaultFlank
`public FormationDeploymentFlank GetDefaultFlank(int formationTroopCount, int infantryCount, bool spawnWithHorses = false)`

**用途 / Purpose:** 获取 `default flank` 的当前值。

### GetFlankDeploymentOrder
`public FormationDeploymentOrder GetFlankDeploymentOrder(int offset = 0)`

**用途 / Purpose:** 获取 `flank deployment order` 的当前值。

### GetFrame
`public MatrixFrame GetFrame()`

**用途 / Purpose:** 获取 `frame` 的当前值。

### GetPosition
`public Vec3 GetPosition()`

**用途 / Purpose:** 获取 `position` 的当前值。

### GetDirection
`public Vec2 GetDirection()`

**用途 / Purpose:** 获取 `direction` 的当前值。

### CreateNewDeploymentWorldPosition
`public WorldPosition CreateNewDeploymentWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

**用途 / Purpose:** 创建一个 `new deployment world position` 实例或对象。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### SetPlannedTroopCount
`public void SetPlannedTroopCount(int footTroopCount, int mountedTroopCount)`

**用途 / Purpose:** 设置 `planned troop count` 的值或状态。

### SetPlannedDimensions
`public void SetPlannedDimensions(float width, float depth)`

**用途 / Purpose:** 设置 `planned dimensions` 的值或状态。

### SetFrame
`public void SetFrame(in WorldFrame frame)`

**用途 / Purpose:** 设置 `frame` 的值或状态。

### SetSpawnClass
`public void SetSpawnClass(FormationClass spawnClass)`

**用途 / Purpose:** 设置 `spawn class` 的值或状态。

## 使用示例

```csharp
var value = new DefaultFormationDeploymentPlan();
value.HasFrame();
```

## 参见

- [完整类目录](../catalog)