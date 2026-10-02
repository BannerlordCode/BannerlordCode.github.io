---
title: "BattleSideSpawnPathSelector"
description: "BattleSideSpawnPathSelector：TaleWorlds.MountAndBlade 的 public 类；公开成员 5 个（方法 1、属性 2、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/BattleSideSpawnPathSelector.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleSideSpawnPathSelector

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleSideSpawnPathSelector`
**File:** `TaleWorlds.MountAndBlade/BattleSideSpawnPathSelector.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BattleSideSpawnPathSelector 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/BattleSideSpawnPathSelector.cs。它是一个 public 类，继承链为 BattleSideSpawnPathSelector。public/protected 成员共 5 个：1 方法、2 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleSideSpawnPathSelector 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 BattleSideSpawnPathSelector。成员构成以属性为主（属性 2/5，方法 1/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/BattleSideSpawnPathSelector.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitialSpawnPath` | `public SpawnPathData InitialSpawnPath` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<SpawnPathData>ReinforcementPaths` | 属性 |
| `BattleSideSpawnPathSelector` | `public BattleSideSpawnPathSelector(Mission mission, Path initialPath, float initialPivotOffset, bool initialPathIsInverted)` | 构造函数 |
| `HasReinforcementPath` | `public bool HasReinforcementPath(Path path)` | 方法 |
| `MaxNeighborCount` | `public const float MaxNeighborCount` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
