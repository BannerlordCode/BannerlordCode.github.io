---
title: "CheckpointArea"
description: "CheckpointArea：SandBox.Objects 的 public 类，继承 VolumeBox；公开成员 5 个（方法 3、属性 1、字段 1）。canonical 桶 sandbox。源文件 SandBox/Objects/CheckpointArea.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CheckpointArea

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class CheckpointArea : VolumeBox`
**File:** `SandBox/Objects/CheckpointArea.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

CheckpointArea 位于 SandBox 模块，源文件 SandBox/Objects/CheckpointArea.cs。它是一个 public 类，实现/继承 VolumeBox，继承链为 CheckpointArea → VolumeBox → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 5 个：3 方法、1 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CheckpointArea 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Objects`，继承链 CheckpointArea → VolumeBox → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 3/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/CheckpointArea.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SpawnPoint` | `public GameEntity SpawnPoint` | 属性 |
| `AfterMissionStart` | `public override void AfterMissionStart()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `CheckpointSpawnPointTag` | `public const string CheckpointSpawnPointTag` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 VolumeBox](../../mission-ext/VolumeBox/)
- [同命名空间 DefaultMusicInstrumentData](../DefaultMusicInstrumentData/)
- [同命名空间 DynamicPatrolAreaParent](../DynamicPatrolAreaParent/)
- [同命名空间 GenericMissionEventBox](../GenericMissionEventBox/)
- [同命名空间 GroupSpawnPoint](../GroupSpawnPoint/)
