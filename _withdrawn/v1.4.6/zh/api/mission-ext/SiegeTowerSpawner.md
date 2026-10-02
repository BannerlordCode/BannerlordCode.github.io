---
title: "SiegeTowerSpawner"
description: "SiegeTowerSpawner：TaleWorlds.MountAndBlade.Objects.Siege 的 public 类，继承 SpawnerBase；公开成员 24 个（方法 5、属性 1、字段 18）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Objects/Siege/SiegeTowerSpawner.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeTowerSpawner

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeTowerSpawner : SpawnerBase`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/SiegeTowerSpawner.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SiegeTowerSpawner 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Objects/Siege/SiegeTowerSpawner.cs。它是一个 public 类，实现/继承 SpawnerBase，继承链为 SiegeTowerSpawner → SpawnerBase → ScriptComponentBehavior → DotNetObject。public/protected 成员共 24 个：5 方法、1 属性、18 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeTowerSpawner 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Objects.Siege`，继承链 SiegeTowerSpawner → SpawnerBase → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 5/24，属性 1/24），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Objects/Siege/SiegeTowerSpawner.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RampRotationRadian` | `public float RampRotationRadian` | 属性 |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | 方法 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | 方法 |
| `OnPreInit` | `protected internal override void OnPreInit()` | 方法 |
| `AssignParameters` | `public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)` | 方法 |
| `wait_pos_ground` | `public MatrixFrame wait_pos_ground` | 字段 |
| `TargetWallSegmentTag` | `public string TargetWallSegmentTag` | 字段 |
| `PathEntityName` | `public string PathEntityName` | 字段 |
| `SoilNavMeshID1` | `public int SoilNavMeshID1` | 字段 |
| `SoilNavMeshID2` | `public int SoilNavMeshID2` | 字段 |
| `DitchNavMeshID1` | `public int DitchNavMeshID1` | 字段 |
| `DitchNavMeshID2` | `public int DitchNavMeshID2` | 字段 |
| `GroundToSoilNavMeshID1` | `public int GroundToSoilNavMeshID1` | 字段 |
| `GroundToSoilNavMeshID2` | `public int GroundToSoilNavMeshID2` | 字段 |
| `SoilGenericNavMeshID` | `public int SoilGenericNavMeshID` | 字段 |
| `GroundGenericNavMeshID` | `public int GroundGenericNavMeshID` | 字段 |
| `AddOnDeployTag` | `public string AddOnDeployTag` | 字段 |
| `RemoveOnDeployTag` | `public string RemoveOnDeployTag` | 字段 |
| `BarrierLength` | `public float BarrierLength` | 字段 |
| `SpeedModifierFactor` | `public float SpeedModifierFactor` | 字段 |
| `ai_barrier_l` | `public MatrixFrame ai_barrier_l` | 字段 |
| `ai_barrier_r` | `public MatrixFrame ai_barrier_r` | 字段 |
| `BarrierTagToRemove` | `public string BarrierTagToRemove` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SpawnerBase](../SpawnerBase/)
- [同命名空间 BallistaSpawner](../BallistaSpawner/)
- [同命名空间 BatteringRamSpawner](../BatteringRamSpawner/)
- [同命名空间 FireTrebuchet](../FireTrebuchet/)
- [同命名空间 ISpawnable](../ISpawnable/)
