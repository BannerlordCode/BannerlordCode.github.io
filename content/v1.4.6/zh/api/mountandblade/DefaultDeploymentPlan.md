---
title: "DefaultDeploymentPlan"
description: "DefaultDeploymentPlan：TaleWorlds.MountAndBlade 的 public 类；公开成员 29 个（方法 15、属性 11、字段 3）。源文件 TaleWorlds.MountAndBlade/DefaultDeploymentPlan.cs。"
---
# DefaultDeploymentPlan

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/DefaultDeploymentPlan.cs`

## 概述

DefaultDeploymentPlan 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/DefaultDeploymentPlan.cs。它是一个 public 类，继承链为 DefaultDeploymentPlan。public/protected 成员共 29 个：15 方法、11 属性、3 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultDeploymentPlan 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 DefaultDeploymentPlan。成员构成以方法为主（方法 15/29，属性 11/29），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/DefaultDeploymentPlan.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SpawnWithHorses` | `public bool SpawnWithHorses` | 属性 |
| `PlanCount` | `public int PlanCount` | 属性 |
| `IsPlanMade` | `public bool IsPlanMade` | 属性 |
| `SpawnPathOffset` | `public float SpawnPathOffset` | 属性 |
| `TargetOffset` | `public float TargetOffset` | 属性 |
| `IsSafeToDeploy` | `public bool IsSafeToDeploy` | 属性 |
| `SafetyScore` | `public float SafetyScore` | 属性 |
| `FootTroopCount` | `public int FootTroopCount` | 属性 |
| `MountedTroopCount` | `public int MountedTroopCount` | 属性 |
| `TroopCount` | `public int TroopCount` | 属性 |
| `MeanPosition` | `public Vec3 MeanPosition` | 属性 |
| `CreateInitialPlan` | `public static DefaultDeploymentPlan CreateInitialPlan(Mission mission, Team team)` | 方法 |
| `CreateReinforcementPlan` | `public static DefaultDeploymentPlan CreateReinforcementPlan(Mission mission, Team team)` | 方法 |
| `CreateReinforcementPlanWithSpawnPath` | `public static DefaultDeploymentPlan CreateReinforcementPlanWithSpawnPath(Mission mission, Team team, SpawnPathData spawnPathData)` | 方法 |
| `SetSpawnWithHorses` | `public void SetSpawnWithHorses(bool value)` | 方法 |
| `MakeDeploymentPlan` | `public void MakeDeploymentPlan(float spawnPathOffset = 0f, float targetOffset = 0f, FormationSceneSpawnEntry[, ]formationSceneSpawnEntries = null)` | 方法 |
| `ClearPlan` | `public void ClearPlan()` | 方法 |
| `ClearAddedTroops` | `public void ClearAddedTroops()` | 方法 |
| `AddTroops` | `public void AddTroops(FormationClass formationClass, int footTroopCount, int mountedTroopCount)` | 方法 |
| `GetFormationPlan` | `public DefaultFormationDeploymentPlan GetFormationPlan(FormationClass fClass)` | 方法 |
| `GetFormationDeploymentFrame` | `public bool GetFormationDeploymentFrame(FormationClass fClass, out MatrixFrame frame)` | 方法 |
| `GetFirstValidFormationDeploymentFrame` | `public bool GetFirstValidFormationDeploymentFrame(out MatrixFrame frame)` | 方法 |
| `IsPlanSuitableForFormations` | `public bool IsPlanSuitableForFormations(ValueTuple<int, int>[]troopDataPerFormationClass)` | 方法 |
| `UpdateSafetyScore` | `public void UpdateSafetyScore()` | 方法 |
| `GetFrameFromFormationSpawnEntity` | `public WorldFrame GetFrameFromFormationSpawnEntity(GameEntity formationSpawnEntity, float depthOffset = 0f)` | 方法 |
| `float>GetFormationSpawnWidthAndDepth` | `public static ValueTuple<float, float>GetFormationSpawnWidthAndDepth(FormationClass formationNo, int troopCount, bool hasMountedTroops, bool considerCavalryAsInfantry = false)` | 方法 |
| `VerticalFormationGap` | `public const float VerticalFormationGap` | 字段 |
| `HorizontalFormationGap` | `public const float HorizontalFormationGap` | 字段 |
| `MaxSafetyScore` | `public const float MaxSafetyScore` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
