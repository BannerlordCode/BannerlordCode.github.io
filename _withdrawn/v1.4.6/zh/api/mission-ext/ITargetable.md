---
title: "ITargetable"
description: "ITargetable：TaleWorlds.MountAndBlade 的 public 接口；公开成员 9 个（方法 9、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/ITargetable.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ITargetable

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface ITargetable`
**File:** `TaleWorlds.MountAndBlade/ITargetable.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ITargetable 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ITargetable.cs。它是一个 public 接口，继承链为 ITargetable。public/protected 成员共 9 个：9 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ITargetable 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 ITargetable。成员构成以方法为主（方法 9/9，属性 0/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ITargetable.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetTargetFlags` | `TargetFlags GetTargetFlags();` | 方法 |
| `GetTargetValue` | `float GetTargetValue(List<Vec3>referencePositions);` | 方法 |
| `GetTargetEntity` | `WeakGameEntity GetTargetEntity();` | 方法 |
| `GetTargetingOffset` | `Vec3 GetTargetingOffset();` | 方法 |
| `GetSide` | `BattleSideEnum GetSide();` | 方法 |
| `GetTargetGlobalVelocity` | `Vec3 GetTargetGlobalVelocity();` | 方法 |
| `IsDestructable` | `bool IsDestructable();` | 方法 |
| `Entity` | `WeakGameEntity Entity();` | 方法 |
| `Vec3>ComputeGlobalPhysicsBoundingBoxMinMax` | `ValueTuple<Vec3, Vec3>ComputeGlobalPhysicsBoundingBoxMinMax();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
