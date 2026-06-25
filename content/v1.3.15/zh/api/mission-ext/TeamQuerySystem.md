---
title: "TeamQuerySystem"
description: "TeamQuerySystem 的自动生成类参考。"
---
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

**用途 / Purpose:** 调用 Expire 对应的操作。

```csharp
// 先通过子系统 API 拿到 TeamQuerySystem 实例
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.Expire();
```

### ExpireAfterUnitAddRemove
`public void ExpireAfterUnitAddRemove()`

**用途 / Purpose:** 调用 ExpireAfterUnitAddRemove 对应的操作。

```csharp
// 先通过子系统 API 拿到 TeamQuerySystem 实例
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.ExpireAfterUnitAddRemove();
```

### RegisterDeath
`public void RegisterDeath()`

**用途 / Purpose:** 将death注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 TeamQuerySystem 实例
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.RegisterDeath();
```

### RegisterDeathByRanged
`public void RegisterDeathByRanged()`

**用途 / Purpose:** 将death by ranged注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 TeamQuerySystem 实例
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.RegisterDeathByRanged();
```

### GetLocalAllyPower
`public float GetLocalAllyPower(Vec2 target)`

**用途 / Purpose:** 读取并返回当前对象中 local ally power 的结果。

```csharp
// 先通过子系统 API 拿到 TeamQuerySystem 实例
TeamQuerySystem teamQuerySystem = ...;
var result = teamQuerySystem.GetLocalAllyPower(target);
```

### GetLocalEnemyPower
`public float GetLocalEnemyPower(Vec2 target)`

**用途 / Purpose:** 读取并返回当前对象中 local enemy power 的结果。

```csharp
// 先通过子系统 API 拿到 TeamQuerySystem 实例
TeamQuerySystem teamQuerySystem = ...;
var result = teamQuerySystem.GetLocalEnemyPower(target);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.Expire();
```

## 参见

- [本区域目录](../)