---
title: "SiegeLadderSpawner"
description: "SiegeLadderSpawner：TaleWorlds.MountAndBlade.Objects.Siege 的 public 类，继承 SpawnerBase；公开成员 22 个（方法 6、属性 2、字段 14）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Objects/Siege/SiegeLadderSpawner.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeLadderSpawner

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeLadderSpawner : SpawnerBase`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/SiegeLadderSpawner.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SiegeLadderSpawner 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Objects/Siege/SiegeLadderSpawner.cs。它是一个 public 类，实现/继承 SpawnerBase，继承链为 SiegeLadderSpawner → SpawnerBase → ScriptComponentBehavior → DotNetObject。public/protected 成员共 22 个：6 方法、2 属性、14 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeLadderSpawner 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Objects.Siege`，继承链 SiegeLadderSpawner → SpawnerBase → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 6/22，属性 2/22），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Objects/Siege/SiegeLadderSpawner.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UpperStateRotationRadian` | `public float UpperStateRotationRadian` | 属性 |
| `DownStateRotationRadian` | `public float DownStateRotationRadian` | 属性 |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | 方法 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | 方法 |
| `OnCheckForProblems` | `protected internal override bool OnCheckForProblems()` | 方法 |
| `OnPreInit` | `protected internal override void OnPreInit()` | 方法 |
| `AssignParameters` | `public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)` | 方法 |
| `fork_holder` | `public MatrixFrame fork_holder` | 字段 |
| `initial_wait_pos` | `public MatrixFrame initial_wait_pos` | 字段 |
| `use_push` | `public MatrixFrame use_push` | 字段 |
| `stand_position_wall_push` | `public MatrixFrame stand_position_wall_push` | 字段 |
| `distance_holder` | `public MatrixFrame distance_holder` | 字段 |
| `stand_position_ground_wait` | `public MatrixFrame stand_position_ground_wait` | 字段 |
| `TargetWallSegmentTag` | `public string TargetWallSegmentTag` | 字段 |
| `OnWallNavMeshId` | `public int OnWallNavMeshId` | 字段 |
| `AddOnDeployTag` | `public string AddOnDeployTag` | 字段 |
| `RemoveOnDeployTag` | `public string RemoveOnDeployTag` | 字段 |
| `DownStateRotationDegree` | `public float DownStateRotationDegree` | 字段 |
| `TacticalPositionWidth` | `public float TacticalPositionWidth` | 字段 |
| `BarrierTagToRemove` | `public string BarrierTagToRemove` | 字段 |
| `IndestructibleMerlonsTag` | `public string IndestructibleMerlonsTag` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SpawnerBase](../SpawnerBase/)
- [同命名空间 BallistaSpawner](../BallistaSpawner/)
- [同命名空间 BatteringRamSpawner](../BatteringRamSpawner/)
- [同命名空间 FireTrebuchet](../FireTrebuchet/)
- [同命名空间 ISpawnable](../ISpawnable/)
