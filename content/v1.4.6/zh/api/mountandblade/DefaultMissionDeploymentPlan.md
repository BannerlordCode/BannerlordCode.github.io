---
title: "DefaultMissionDeploymentPlan"
description: "DefaultMissionDeploymentPlan：TaleWorlds.MountAndBlade 的 public 类，继承 IMissionDeploymentPlan；公开成员 37 个（方法 36、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/DefaultMissionDeploymentPlan.cs。"
---
# DefaultMissionDeploymentPlan

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultMissionDeploymentPlan : IMissionDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/DefaultMissionDeploymentPlan.cs`

## 概述

DefaultMissionDeploymentPlan 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/DefaultMissionDeploymentPlan.cs。它是一个 public 类，实现/继承 IMissionDeploymentPlan，继承链为 DefaultMissionDeploymentPlan → IMissionDeploymentPlan。public/protected 成员共 37 个：36 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultMissionDeploymentPlan 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 DefaultMissionDeploymentPlan → IMissionDeploymentPlan。成员构成以方法为主（方法 36/37，属性 0/37），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/DefaultMissionDeploymentPlan.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultMissionDeploymentPlan` | `public DefaultMissionDeploymentPlan(Mission mission)` | 构造函数 |
| `Initialize` | `public void Initialize()` | 方法 |
| `ClearDeploymentPlan` | `public void ClearDeploymentPlan(Team team)` | 方法 |
| `ClearReinforcementPlan` | `public void ClearReinforcementPlan(Team team)` | 方法 |
| `HasPlayerSpawnFrame` | `public bool HasPlayerSpawnFrame(BattleSideEnum battleSide)` | 方法 |
| `GetPlayerSpawnFrame` | `public bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction)` | 方法 |
| `HasSignificantMountedTroops` | `public static bool HasSignificantMountedTroops(int footTroopCount, int mountedTroopCount)` | 方法 |
| `ClearAddedTroops` | `public void ClearAddedTroops(Team team, bool isReinforcement = false)` | 方法 |
| `ClearAll` | `public void ClearAll()` | 方法 |
| `AddTroops` | `public void AddTroops(Team team, FormationClass formationClass, int footTroopCount, int mountedTroopCount = 0, bool isReinforcement = false)` | 方法 |
| `SetSpawnWithHorses` | `public void SetSpawnWithHorses(Team team, bool spawnWithHorses)` | 方法 |
| `MakeDefaultDeploymentPlans` | `public void MakeDefaultDeploymentPlans()` | 方法 |
| `MakeDeploymentPlan` | `public void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetOffset = 0f)` | 方法 |
| `MakeReinforcementDeploymentPlan` | `public void MakeReinforcementDeploymentPlan(Team team)` | 方法 |
| `RemakeDeploymentPlan` | `public bool RemakeDeploymentPlan(Team team)` | 方法 |
| `IsPositionInsideDeploymentBoundaries` | `public bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position)` | 方法 |
| `GetClosestDeploymentBoundaryPosition` | `public Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position)` | 方法 |
| `SupportsReinforcements` | `public bool SupportsReinforcements()` | 方法 |
| `SupportsNavmesh` | `public bool SupportsNavmesh(Team team)` | 方法 |
| `GetPathDeploymentBoundaryIntersection` | `public bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection)` | 方法 |
| `IsPositionInsideSiegeDeploymentBoundaries` | `public bool IsPositionInsideSiegeDeploymentBoundaries(in Vec2 position)` | 方法 |
| `GetSpawnPathOffset` | `public float GetSpawnPathOffset(Team team)` | 方法 |
| `GetTargetOffset` | `public float GetTargetOffset(Team team)` | 方法 |
| `GetTroopCount` | `public int GetTroopCount(Team team, bool isReinforcement = false)` | 方法 |
| `GetFormationPlan` | `public IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement)` | 方法 |
| `IsPlanMade` | `public bool IsPlanMade(Team team)` | 方法 |
| `IsPlanMade` | `public bool IsPlanMade(Team team, out bool isFirstPlan)` | 方法 |
| `IsReinforcementPlanMade` | `public bool IsReinforcementPlanMade(Team team)` | 方法 |
| `IsInitialPlanSuitableForFormations` | `public bool IsInitialPlanSuitableForFormations(Team team, [TupleElementNames(new string[]` | 方法 |
| `HasDeploymentBoundaries` | `public bool HasDeploymentBoundaries(Team team)` | 方法 |
| `GetDeploymentFrame` | `public MatrixFrame GetDeploymentFrame(Team team)` | 方法 |
| `ProjectPositionToDeploymentBoundaries` | `public void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition endPosition)` | 方法 |
| `MBList` | `public MBReadOnlyList<ValueTuple<string, MBList<Vec2>>>GetDeploymentBoundaries(Team team)` | 方法 |
| `GetMeanPosition` | `public Vec3 GetMeanPosition(Team team, bool isReinforcement = false)` | 方法 |
| `UpdateReinforcementPlan` | `public void UpdateReinforcementPlan(Team team)` | 方法 |
| `GetZoomFocusFrame` | `public MatrixFrame GetZoomFocusFrame(Team team)` | 方法 |
| `GetZoomOffset` | `public float GetZoomOffset(Team team, float fovAngle)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IMissionDeploymentPlan](../IMissionDeploymentPlan)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
