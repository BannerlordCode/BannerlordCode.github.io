---
title: "IMissionDeploymentPlan"
description: "IMissionDeploymentPlan：TaleWorlds.MountAndBlade 的 public 接口；公开成员 25 个（方法 25、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/IMissionDeploymentPlan.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IMissionDeploymentPlan

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IMissionDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/IMissionDeploymentPlan.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

IMissionDeploymentPlan 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/IMissionDeploymentPlan.cs。它是一个 public 接口，继承链为 IMissionDeploymentPlan。public/protected 成员共 25 个：25 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IMissionDeploymentPlan 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 IMissionDeploymentPlan。成员构成以方法为主（方法 25/25，属性 0/25），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/IMissionDeploymentPlan.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `void Initialize();` | 方法 |
| `ClearAll` | `void ClearAll();` | 方法 |
| `MakeDefaultDeploymentPlans` | `void MakeDefaultDeploymentPlans();` | 方法 |
| `MakeDeploymentPlan` | `void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetOffset = 0f);` | 方法 |
| `RemakeDeploymentPlan` | `bool RemakeDeploymentPlan(Team team);` | 方法 |
| `ClearDeploymentPlan` | `void ClearDeploymentPlan(Team team);` | 方法 |
| `IsPlanMade` | `bool IsPlanMade(Team team);` | 方法 |
| `IsPlanMade` | `bool IsPlanMade(Team team, out bool isFirstPlan);` | 方法 |
| `IsPositionInsideDeploymentBoundaries` | `bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position);` | 方法 |
| `HasDeploymentBoundaries` | `bool HasDeploymentBoundaries(Team team);` | 方法 |
| `TupleElementNames` | `[return: TupleElementNames(new string[]` | 方法 |
| `MBList` | `MBReadOnlyList<ValueTuple<string, MBList<Vec2>>>GetDeploymentBoundaries(Team team);` | 方法 |
| `SupportsReinforcements` | `bool SupportsReinforcements();` | 方法 |
| `UpdateReinforcementPlan` | `void UpdateReinforcementPlan(Team team);` | 方法 |
| `SupportsNavmesh` | `bool SupportsNavmesh(Team team);` | 方法 |
| `HasPlayerSpawnFrame` | `bool HasPlayerSpawnFrame(BattleSideEnum battleSide);` | 方法 |
| `GetPlayerSpawnFrame` | `bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction);` | 方法 |
| `GetClosestDeploymentBoundaryPosition` | `Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position);` | 方法 |
| `ProjectPositionToDeploymentBoundaries` | `void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition position);` | 方法 |
| `GetPathDeploymentBoundaryIntersection` | `bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection);` | 方法 |
| `GetDeploymentFrame` | `MatrixFrame GetDeploymentFrame(Team team);` | 方法 |
| `GetFormationPlan` | `IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement = false);` | 方法 |
| `GetSpawnPathOffset` | `float GetSpawnPathOffset(Team team);` | 方法 |
| `GetZoomFocusFrame` | `MatrixFrame GetZoomFocusFrame(Team team);` | 方法 |
| `GetZoomOffset` | `float GetZoomOffset(Team team, float fovAngle);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
