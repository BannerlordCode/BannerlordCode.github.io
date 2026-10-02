---
title: "BatteringRamSpawner"
description: "BatteringRamSpawner：TaleWorlds.MountAndBlade.Objects.Siege 的 public 类，继承 SpawnerBase；公开成员 18 个（方法 6、属性 0、字段 12）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Objects/Siege/BatteringRamSpawner.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BatteringRamSpawner

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BatteringRamSpawner : SpawnerBase`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/BatteringRamSpawner.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BatteringRamSpawner 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Objects/Siege/BatteringRamSpawner.cs。它是一个 public 类，实现/继承 SpawnerBase，继承链为 BatteringRamSpawner → SpawnerBase → ScriptComponentBehavior → DotNetObject。public/protected 成员共 18 个：6 方法、12 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BatteringRamSpawner 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Objects.Siege`，继承链 BatteringRamSpawner → SpawnerBase → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 6/18，属性 0/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Objects/Siege/BatteringRamSpawner.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | 方法 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | 方法 |
| `OnCheckForProblems` | `protected internal override bool OnCheckForProblems()` | 方法 |
| `OnPreInit` | `protected internal override void OnPreInit()` | 方法 |
| `AssignParameters` | `public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)` | 方法 |
| `wait_pos_ground` | `public MatrixFrame wait_pos_ground` | 字段 |
| `GateTag` | `public string GateTag` | 字段 |
| `PathEntityName` | `public string PathEntityName` | 字段 |
| `BridgeNavMeshID_1` | `public int BridgeNavMeshID_1` | 字段 |
| `BridgeNavMeshID_2` | `public int BridgeNavMeshID_2` | 字段 |
| `DitchNavMeshID_1` | `public int DitchNavMeshID_1` | 字段 |
| `DitchNavMeshID_2` | `public int DitchNavMeshID_2` | 字段 |
| `GroundToBridgeNavMeshID_1` | `public int GroundToBridgeNavMeshID_1` | 字段 |
| `GroundToBridgeNavMeshID_2` | `public int GroundToBridgeNavMeshID_2` | 字段 |
| `AddOnDeployTag` | `public string AddOnDeployTag` | 字段 |
| `RemoveOnDeployTag` | `public string RemoveOnDeployTag` | 字段 |
| `SpeedModifierFactor` | `public float SpeedModifierFactor` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SpawnerBase](../SpawnerBase/)
- [同命名空间 BallistaSpawner](../BallistaSpawner/)
- [同命名空间 FireTrebuchet](../FireTrebuchet/)
- [同命名空间 ISpawnable](../ISpawnable/)
- [同命名空间 MangonelSpawner](../MangonelSpawner/)
