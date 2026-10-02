---
title: "DefaultFormationDeploymentPlan"
description: "DefaultFormationDeploymentPlan：TaleWorlds.MountAndBlade 的 public 类，继承 IFormationDeploymentPlan；公开成员 23 个（方法 13、属性 9、字段 0）。源文件 TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs。"
---
# DefaultFormationDeploymentPlan

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultFormationDeploymentPlan : IFormationDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs`

## 概述

DefaultFormationDeploymentPlan 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs。它是一个 public 类，实现/继承 IFormationDeploymentPlan，继承链为 DefaultFormationDeploymentPlan → IFormationDeploymentPlan。public/protected 成员共 23 个：13 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultFormationDeploymentPlan 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 DefaultFormationDeploymentPlan → IFormationDeploymentPlan。成员构成以方法为主（方法 13/23，属性 9/23），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Class` | `public FormationClass Class` | 属性 |
| `SpawnClass` | `public FormationClass SpawnClass` | 属性 |
| `PlannedWidth` | `public float PlannedWidth` | 属性 |
| `PlannedDepth` | `public float PlannedDepth` | 属性 |
| `PlannedTroopCount` | `public int PlannedTroopCount` | 属性 |
| `PlannedFootTroopCount` | `public int PlannedFootTroopCount` | 属性 |
| `PlannedMountedTroopCount` | `public int PlannedMountedTroopCount` | 属性 |
| `HasDimensions` | `public bool HasDimensions` | 属性 |
| `HasSignificantMountedTroops` | `public bool HasSignificantMountedTroops` | 属性 |
| `DefaultFormationDeploymentPlan` | `public DefaultFormationDeploymentPlan(FormationClass fClass)` | 构造函数 |
| `HasFrame` | `public bool HasFrame()` | 方法 |
| `GetDefaultFlank` | `public FormationDeploymentFlank GetDefaultFlank(int formationTroopCount, bool teamPlanHasAnyFootTroops, bool spawnWithHorses = false)` | 方法 |
| `GetFlankDeploymentOrder` | `public FormationDeploymentOrder GetFlankDeploymentOrder(int offset = 0)` | 方法 |
| `GetFrame` | `public MatrixFrame GetFrame()` | 方法 |
| `GetPosition` | `public Vec3 GetPosition()` | 方法 |
| `GetDirection` | `public Vec2 GetDirection()` | 方法 |
| `CreateNewDeploymentWorldPosition` | `public WorldPosition CreateNewDeploymentWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)` | 方法 |
| `Clear` | `public void Clear()` | 方法 |
| `SetPlannedTroopCount` | `public void SetPlannedTroopCount(int footTroopCount, int mountedTroopCount)` | 方法 |
| `SetPlannedDimensions` | `public void SetPlannedDimensions(float width, float depth)` | 方法 |
| `SetFrame` | `public void SetFrame(in WorldFrame frame)` | 方法 |
| `SetSpawnClass` | `public void SetSpawnClass(FormationClass spawnClass)` | 方法 |
| `GetFormationDefaultFlankAux` | `public static FormationDeploymentFlank GetFormationDefaultFlankAux(FormationClass formationClass, int formationTroopCount, bool teamPlanHasAnyFootTroops, bool hasSignificantMountedTroops, bool canSpawnWithHorses)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IFormationDeploymentPlan](../IFormationDeploymentPlan)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
