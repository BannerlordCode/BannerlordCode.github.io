---
title: "DefaultTeamDeploymentPlan"
description: "DefaultTeamDeploymentPlan：TaleWorlds.MountAndBlade 的 public 类，继承 ITeamDeploymentPlan；公开成员 28 个（方法 20、属性 2、字段 5）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultTeamDeploymentPlan

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultTeamDeploymentPlan : ITeamDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

DefaultTeamDeploymentPlan 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs。它是一个 public 类，实现/继承 ITeamDeploymentPlan，继承链为 DefaultTeamDeploymentPlan → ITeamDeploymentPlan。public/protected 成员共 28 个：20 方法、2 属性、5 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultTeamDeploymentPlan 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 DefaultTeamDeploymentPlan → ITeamDeploymentPlan。成员构成以方法为主（方法 20/28，属性 2/28），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Team` | `public Team Team` | 属性 |
| `SpawnWithHorses` | `public bool SpawnWithHorses` | 属性 |
| `DefaultTeamDeploymentPlan` | `public DefaultTeamDeploymentPlan(Mission mission, Team team)` | 构造函数 |
| `SetSpawnWithHorses` | `public void SetSpawnWithHorses(bool value)` | 方法 |
| `MakeDeploymentPlan` | `public void MakeDeploymentPlan(float spawnPathOffset = 0f, float targetOffset = 0f, FormationSceneSpawnEntry[, ]formationSceneSpawnEntries = null, bool isReinforcement = false)` | 方法 |
| `UpdateReinforcementPlans` | `public void UpdateReinforcementPlans()` | 方法 |
| `ClearPlan` | `public void ClearPlan(bool isReinforcement = false)` | 方法 |
| `ClearAddedTroops` | `public void ClearAddedTroops(bool isReinforcement = false)` | 方法 |
| `AddTroops` | `public void AddTroops(FormationClass formationClass, int footTroopCount, int mountedTroopCount, bool isReinforcement = false)` | 方法 |
| `GetTroopCount` | `public int GetTroopCount(bool isReinforcement = false)` | 方法 |
| `IsFirstPlan` | `public bool IsFirstPlan(bool isReinforcement = false)` | 方法 |
| `IsPlanMade` | `public bool IsPlanMade(bool isReinforcement = false)` | 方法 |
| `MBList` | `public MBReadOnlyList<ValueTuple<string, MBList<Vec2>>>GetDeploymentBoundaries()` | 方法 |
| `GetSpawnPathOffset` | `public float GetSpawnPathOffset(bool isReinforcement = false)` | 方法 |
| `GetTargetOffset` | `public float GetTargetOffset(bool isReinforcement = false)` | 方法 |
| `GetDeploymentFrame` | `public MatrixFrame GetDeploymentFrame()` | 方法 |
| `HasDeploymentBoundaries` | `public bool HasDeploymentBoundaries()` | 方法 |
| `GetFormationPlan` | `public IFormationDeploymentPlan GetFormationPlan(FormationClass fClass, bool isReinforcement = false)` | 方法 |
| `GetMeanPosition` | `public Vec3 GetMeanPosition(bool isReinforcement = false)` | 方法 |
| `IsInitialPlanSuitableForFormations` | `public bool IsInitialPlanSuitableForFormations(ValueTuple<int, int>[]troopDataPerFormationClass)` | 方法 |
| `IsPositionInsideDeploymentBoundaries` | `public bool IsPositionInsideDeploymentBoundaries(in Vec2 position, [TupleElementNames(new string[]` | 方法 |
| `GetClosestDeploymentBoundaryPosition` | `public Vec2 GetClosestDeploymentBoundaryPosition(in Vec2 position)` | 方法 |
| `GetPathDeploymentBoundaryIntersection` | `public bool GetPathDeploymentBoundaryIntersection(in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection)` | 方法 |
| `DeployZoneMinimumWidth` | `public const float DeployZoneMinimumWidth` | 字段 |
| `DeployZoneForwardMargin` | `public const float DeployZoneForwardMargin` | 字段 |
| `DeployZoneExtraWidthPerTroop` | `public const float DeployZoneExtraWidthPerTroop` | 字段 |
| `DefenderDeploymentFrameEntityTag` | `public const string DefenderDeploymentFrameEntityTag` | 字段 |
| `AttackerDeploymentFrameEntityTag` | `public const string AttackerDeploymentFrameEntityTag` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ITeamDeploymentPlan](../ITeamDeploymentPlan/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
