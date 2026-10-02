---
title: "DynamicPatrolAreaParent"
description: "DynamicPatrolAreaParent：SandBox.Objects 的 public 类，继承 MissionObject；公开成员 3 个（方法 1、属性 0、字段 2）。canonical 桶 sandbox。源文件 SandBox/Objects/DynamicPatrolAreaParent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DynamicPatrolAreaParent

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class DynamicPatrolAreaParent : MissionObject`
**File:** `SandBox/Objects/DynamicPatrolAreaParent.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

DynamicPatrolAreaParent 位于 SandBox 模块，源文件 SandBox/Objects/DynamicPatrolAreaParent.cs。它是一个 public 类，实现/继承 MissionObject，继承链为 DynamicPatrolAreaParent → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 3 个：1 方法、2 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DynamicPatrolAreaParent 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Objects`，继承链 DynamicPatrolAreaParent → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 1/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/DynamicPatrolAreaParent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | 方法 |
| `DrawPath` | `public bool DrawPath` | 字段 |
| `UniqueId` | `public int UniqueId` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionObject](../../mission-ext/MissionObject/)
- [同命名空间 CheckpointArea](../CheckpointArea/)
- [同命名空间 DefaultMusicInstrumentData](../DefaultMusicInstrumentData/)
- [同命名空间 GenericMissionEventBox](../GenericMissionEventBox/)
- [同命名空间 GroupSpawnPoint](../GroupSpawnPoint/)
