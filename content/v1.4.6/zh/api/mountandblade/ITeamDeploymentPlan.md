---
title: "ITeamDeploymentPlan"
description: "ITeamDeploymentPlan：TaleWorlds.MountAndBlade 的 public 接口；公开成员 15 个（方法 14、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/ITeamDeploymentPlan.cs。"
---
# ITeamDeploymentPlan

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface ITeamDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/ITeamDeploymentPlan.cs`

## 概述

ITeamDeploymentPlan 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ITeamDeploymentPlan.cs。它是一个 public 接口，继承链为 ITeamDeploymentPlan。public/protected 成员共 15 个：14 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ITeamDeploymentPlan 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 ITeamDeploymentPlan。成员构成以方法为主（方法 14/15，属性 1/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ITeamDeploymentPlan.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Team` | `Team Team` | 属性 |
| `MakeDeploymentPlan` | `void MakeDeploymentPlan(float spawnPathOffset = 0f, float targetOffset = 0f, FormationSceneSpawnEntry[, ]formationSceneSpawnEntries = null, bool isReinforcement = false);` | 方法 |
| `ClearPlan` | `void ClearPlan(bool isReinforcement = false);` | 方法 |
| `IsFirstPlan` | `bool IsFirstPlan(bool isReinforcement = false);` | 方法 |
| `IsPlanMade` | `bool IsPlanMade(bool isReinforcement = false);` | 方法 |
| `TupleElementNames` | `[return: TupleElementNames(new string[]` | 方法 |
| `MBList` | `MBReadOnlyList<ValueTuple<string, MBList<Vec2>>>GetDeploymentBoundaries();` | 方法 |
| `GetSpawnPathOffset` | `float GetSpawnPathOffset(bool isReinforcement = false);` | 方法 |
| `GetTargetOffset` | `float GetTargetOffset(bool isReinforcement = false);` | 方法 |
| `GetDeploymentFrame` | `MatrixFrame GetDeploymentFrame();` | 方法 |
| `HasDeploymentBoundaries` | `bool HasDeploymentBoundaries();` | 方法 |
| `GetFormationPlan` | `IFormationDeploymentPlan GetFormationPlan(FormationClass formationIndex, bool isReinforcement = false);` | 方法 |
| `GetMeanPosition` | `Vec3 GetMeanPosition(bool isReinforcement = false);` | 方法 |
| `IsPositionInsideDeploymentBoundaries` | `bool IsPositionInsideDeploymentBoundaries(in Vec2 position, [TupleElementNames(new string[]` | 方法 |
| `GetClosestDeploymentBoundaryPosition` | `Vec2 GetClosestDeploymentBoundaryPosition(in Vec2 position);` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
