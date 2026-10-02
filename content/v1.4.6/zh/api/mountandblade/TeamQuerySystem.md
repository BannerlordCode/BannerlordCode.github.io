---
title: "TeamQuerySystem"
description: "TeamQuerySystem：TaleWorlds.MountAndBlade 的 public 类；公开成员 41 个（方法 6、属性 34、字段 0）。源文件 TaleWorlds.MountAndBlade/TeamQuerySystem.cs。"
---
# TeamQuerySystem

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TeamQuerySystem`
**File:** `TaleWorlds.MountAndBlade/TeamQuerySystem.cs`

## 概述

TeamQuerySystem 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/TeamQuerySystem.cs。它是一个 public 类，继承链为 TeamQuerySystem。public/protected 成员共 41 个：6 方法、34 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TeamQuerySystem 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 TeamQuerySystem。成员构成以属性为主（属性 34/41，方法 6/41），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/TeamQuerySystem.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MemberCount` | `public int MemberCount` | 属性 |
| `MedianPosition` | `public WorldPosition MedianPosition` | 属性 |
| `AveragePosition` | `public Vec2 AveragePosition` | 属性 |
| `AverageEnemyPosition` | `public Vec2 AverageEnemyPosition` | 属性 |
| `MedianTargetFormation` | `public FormationQuerySystem MedianTargetFormation` | 属性 |
| `MedianTargetFormationPosition` | `public WorldPosition MedianTargetFormationPosition` | 属性 |
| `LeftFlankEdgePosition` | `public WorldPosition LeftFlankEdgePosition` | 属性 |
| `RightFlankEdgePosition` | `public WorldPosition RightFlankEdgePosition` | 属性 |
| `InfantryRatio` | `public float InfantryRatio` | 属性 |
| `RangedRatio` | `public float RangedRatio` | 属性 |
| `CavalryRatio` | `public float CavalryRatio` | 属性 |
| `RangedCavalryRatio` | `public float RangedCavalryRatio` | 属性 |
| `AllyUnitCount` | `public int AllyUnitCount` | 属性 |
| `EnemyUnitCount` | `public int EnemyUnitCount` | 属性 |
| `AllyInfantryRatio` | `public float AllyInfantryRatio` | 属性 |
| `AllyRangedRatio` | `public float AllyRangedRatio` | 属性 |
| `AllyCavalryRatio` | `public float AllyCavalryRatio` | 属性 |
| `AllyRangedCavalryRatio` | `public float AllyRangedCavalryRatio` | 属性 |
| `EnemyInfantryRatio` | `public float EnemyInfantryRatio` | 属性 |
| `EnemyRangedRatio` | `public float EnemyRangedRatio` | 属性 |
| `EnemyCavalryRatio` | `public float EnemyCavalryRatio` | 属性 |
| `EnemyRangedCavalryRatio` | `public float EnemyRangedCavalryRatio` | 属性 |
| `RemainingPowerRatio` | `public float RemainingPowerRatio` | 属性 |
| `TeamPower` | `public float TeamPower` | 属性 |
| `TotalPowerRatio` | `public float TotalPowerRatio` | 属性 |
| `InsideWallsRatio` | `public float InsideWallsRatio` | 属性 |
| `BattlePowerLogic` | `public IBattlePowerCalculationLogic BattlePowerLogic` | 属性 |
| `CasualtyHandler` | `public CasualtyHandler CasualtyHandler` | 属性 |
| `MaxUnderRangedAttackRatio` | `public float MaxUnderRangedAttackRatio` | 属性 |
| `DeathCount` | `public int DeathCount` | 属性 |
| `DeathByRangedCount` | `public int DeathByRangedCount` | 属性 |
| `AllyRangedUnitCount` | `public int AllyRangedUnitCount` | 属性 |
| `AllCavalryUnitCount` | `public int AllCavalryUnitCount` | 属性 |
| `EnemyRangedUnitCount` | `public int EnemyRangedUnitCount` | 属性 |
| `Expire` | `public void Expire()` | 方法 |
| `ExpireAfterUnitAddRemove` | `public void ExpireAfterUnitAddRemove()` | 方法 |
| `TeamQuerySystem` | `public TeamQuerySystem(Team team)` | 构造函数 |
| `RegisterDeath` | `public void RegisterDeath()` | 方法 |
| `RegisterDeathByRanged` | `public void RegisterDeathByRanged()` | 方法 |
| `GetLocalAllyPower` | `public float GetLocalAllyPower(Vec2 target)` | 方法 |
| `GetLocalEnemyPower` | `public float GetLocalEnemyPower(Vec2 target)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
