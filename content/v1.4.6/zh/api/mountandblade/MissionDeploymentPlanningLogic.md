---
title: "MissionDeploymentPlanningLogic"
description: "MissionDeploymentPlanningLogic：TaleWorlds.MountAndBlade 的 public 类，继承 MissionLogic、IMissionDeploymentPlan；公开成员 24 个（方法 24、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/MissionDeploymentPlanningLogic.cs。"
---
# MissionDeploymentPlanningLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionDeploymentPlanningLogic : MissionLogic, IMissionDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/MissionDeploymentPlanningLogic.cs`

## 概述

MissionDeploymentPlanningLogic 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionDeploymentPlanningLogic.cs。它是一个 public 类（abstract），实现/继承 MissionLogic、IMissionDeploymentPlan，继承链为 MissionDeploymentPlanningLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 24 个：24 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionDeploymentPlanningLogic 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionDeploymentPlanningLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 24/24，属性 0/24），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionDeploymentPlanningLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public virtual void Initialize()` | 方法 |
| `ClearAll` | `public virtual void ClearAll()` | 方法 |
| `MakeDefaultDeploymentPlans` | `public virtual void MakeDefaultDeploymentPlans()` | 方法 |
| `MakeDeploymentPlan` | `public virtual void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetPathOffset = 0f)` | 方法 |
| `RemakeDeploymentPlan` | `public virtual bool RemakeDeploymentPlan(Team team)` | 方法 |
| `ClearDeploymentPlan` | `public virtual void ClearDeploymentPlan(Team team)` | 方法 |
| `IsPlanMade` | `public virtual bool IsPlanMade(Team team)` | 方法 |
| `IsPlanMade` | `public virtual bool IsPlanMade(Team team, out bool isFirstPlan)` | 方法 |
| `IsPositionInsideDeploymentBoundaries` | `public virtual bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position)` | 方法 |
| `HasDeploymentBoundaries` | `public virtual bool HasDeploymentBoundaries(Team team)` | 方法 |
| `MBList` | `public virtual MBReadOnlyList<ValueTuple<string, MBList<Vec2>>>GetDeploymentBoundaries(Team team)` | 方法 |
| `SupportsReinforcements` | `public virtual bool SupportsReinforcements()` | 方法 |
| `UpdateReinforcementPlan` | `public virtual void UpdateReinforcementPlan(Team team)` | 方法 |
| `SupportsNavmesh` | `public virtual bool SupportsNavmesh(Team team)` | 方法 |
| `HasPlayerSpawnFrame` | `public virtual bool HasPlayerSpawnFrame(BattleSideEnum battleSide)` | 方法 |
| `GetPlayerSpawnFrame` | `public virtual bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction)` | 方法 |
| `GetClosestDeploymentBoundaryPosition` | `public virtual Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position)` | 方法 |
| `ProjectPositionToDeploymentBoundaries` | `public virtual void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition position)` | 方法 |
| `GetPathDeploymentBoundaryIntersection` | `public virtual bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition foundPosition)` | 方法 |
| `GetDeploymentFrame` | `public virtual MatrixFrame GetDeploymentFrame(Team team)` | 方法 |
| `GetFormationPlan` | `public virtual IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement = false)` | 方法 |
| `GetSpawnPathOffset` | `public virtual float GetSpawnPathOffset(Team team)` | 方法 |
| `GetZoomFocusFrame` | `public virtual MatrixFrame GetZoomFocusFrame(Team team)` | 方法 |
| `GetZoomOffset` | `public virtual float GetZoomOffset(Team team, float fovAngle)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionLogic](../MissionLogic)
- [基类/接口 IMissionDeploymentPlan](../IMissionDeploymentPlan)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
