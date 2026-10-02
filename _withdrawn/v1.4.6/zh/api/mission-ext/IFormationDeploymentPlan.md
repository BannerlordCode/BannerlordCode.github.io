---
title: "IFormationDeploymentPlan"
description: "IFormationDeploymentPlan：TaleWorlds.MountAndBlade 的 public 接口；公开成员 11 个（方法 5、属性 6、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/IFormationDeploymentPlan.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IFormationDeploymentPlan

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IFormationDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/IFormationDeploymentPlan.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

IFormationDeploymentPlan 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/IFormationDeploymentPlan.cs。它是一个 public 接口，继承链为 IFormationDeploymentPlan。public/protected 成员共 11 个：5 方法、6 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IFormationDeploymentPlan 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 IFormationDeploymentPlan。成员构成以属性为主（属性 6/11，方法 5/11），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/IFormationDeploymentPlan.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Class` | `FormationClass Class` | 属性 |
| `SpawnClass` | `FormationClass SpawnClass` | 属性 |
| `PlannedWidth` | `float PlannedWidth` | 属性 |
| `PlannedDepth` | `float PlannedDepth` | 属性 |
| `PlannedTroopCount` | `int PlannedTroopCount` | 属性 |
| `HasDimensions` | `bool HasDimensions` | 属性 |
| `HasFrame` | `bool HasFrame();` | 方法 |
| `GetFrame` | `MatrixFrame GetFrame();` | 方法 |
| `GetPosition` | `Vec3 GetPosition();` | 方法 |
| `GetDirection` | `Vec2 GetDirection();` | 方法 |
| `CreateNewDeploymentWorldPosition` | `WorldPosition CreateNewDeploymentWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
