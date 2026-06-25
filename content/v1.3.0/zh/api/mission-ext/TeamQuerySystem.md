---
title: "TeamQuerySystem"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TeamQuerySystem`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TeamQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamQuerySystem`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/TeamQuerySystem.cs`

## 概述

`TeamQuerySystem` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MemberCount` | `public int MemberCount { get; }` |
| `MedianPosition` | `public WorldPosition MedianPosition { get; }` |
| `AveragePosition` | `public Vec2 AveragePosition { get; }` |
| `AverageEnemyPosition` | `public Vec2 AverageEnemyPosition { get; }` |
| `MedianTargetFormation` | `public FormationQuerySystem MedianTargetFormation { get; }` |
| `MedianTargetFormationPosition` | `public WorldPosition MedianTargetFormationPosition { get; }` |
| `LeftFlankEdgePosition` | `public WorldPosition LeftFlankEdgePosition { get; }` |
| `RightFlankEdgePosition` | `public WorldPosition RightFlankEdgePosition { get; }` |
| `InfantryRatio` | `public float InfantryRatio { get; }` |
| `RangedRatio` | `public float RangedRatio { get; }` |
| `CavalryRatio` | `public float CavalryRatio { get; }` |
| `RangedCavalryRatio` | `public float RangedCavalryRatio { get; }` |
| `AllyUnitCount` | `public int AllyUnitCount { get; }` |
| `EnemyUnitCount` | `public int EnemyUnitCount { get; }` |
| `AllyInfantryRatio` | `public float AllyInfantryRatio { get; }` |
| `AllyRangedRatio` | `public float AllyRangedRatio { get; }` |
| `AllyCavalryRatio` | `public float AllyCavalryRatio { get; }` |
| `AllyRangedCavalryRatio` | `public float AllyRangedCavalryRatio { get; }` |
| `EnemyInfantryRatio` | `public float EnemyInfantryRatio { get; }` |
| `EnemyRangedRatio` | `public float EnemyRangedRatio { get; }` |
| `EnemyCavalryRatio` | `public float EnemyCavalryRatio { get; }` |
| `EnemyRangedCavalryRatio` | `public float EnemyRangedCavalryRatio { get; }` |
| `RemainingPowerRatio` | `public float RemainingPowerRatio { get; }` |
| `TeamPower` | `public float TeamPower { get; }` |
| `TotalPowerRatio` | `public float TotalPowerRatio { get; }` |
| `InsideWallsRatio` | `public float InsideWallsRatio { get; }` |
| `BattlePowerLogic` | `public IBattlePowerCalculationLogic BattlePowerLogic { get; }` |
| `CasualtyHandler` | `public CasualtyHandler CasualtyHandler { get; }` |
| `MaxUnderRangedAttackRatio` | `public float MaxUnderRangedAttackRatio { get; }` |
| `DeathCount` | `public int DeathCount { get; }` |
| `DeathByRangedCount` | `public int DeathByRangedCount { get; }` |
| `AllyRangedUnitCount` | `public int AllyRangedUnitCount { get; }` |
| `AllCavalryUnitCount` | `public int AllCavalryUnitCount { get; }` |
| `EnemyRangedUnitCount` | `public int EnemyRangedUnitCount { get; }` |

## 主要方法

### Expire
`public void Expire()`

**用途 / Purpose:** 处理 `expire` 相关逻辑。

### ExpireAfterUnitAddRemove
`public void ExpireAfterUnitAddRemove()`

**用途 / Purpose:** 处理 `expire after unit add remove` 相关逻辑。

### RegisterDeath
`public void RegisterDeath()`

**用途 / Purpose:** 处理 `register death` 相关逻辑。

### RegisterDeathByRanged
`public void RegisterDeathByRanged()`

**用途 / Purpose:** 处理 `register death by ranged` 相关逻辑。

### GetLocalAllyPower
`public float GetLocalAllyPower(Vec2 target)`

**用途 / Purpose:** 获取 `local ally power` 的当前值。

### GetLocalEnemyPower
`public float GetLocalEnemyPower(Vec2 target)`

**用途 / Purpose:** 获取 `local enemy power` 的当前值。

## 使用示例

```csharp
var value = new TeamQuerySystem();
value.Expire();
```

## 参见

- [完整类目录](../catalog)