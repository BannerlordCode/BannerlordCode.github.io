---
title: "StealthZone"
description: "StealthZone：SandBox.Objects 的 public 类；公开成员 18 个（方法 8、属性 5、字段 1）。canonical 桶 sandbox。源文件 SandBox/Objects/StealthZone.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StealthZone

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class StealthZone`
**File:** `SandBox/Objects/StealthZone.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

StealthZone 位于 SandBox 模块，源文件 SandBox/Objects/StealthZone.cs。它是一个 public 类，继承链为 StealthZone。public/protected 成员共 18 个：8 方法、5 属性、1 字段、2 事件、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StealthZone 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Objects`，继承链 StealthZone。成员构成以方法为主（方法 8/18，属性 5/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/StealthZone.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AreAgentsActive` | `public bool AreAgentsActive` | 属性 |
| `UseVolumeBox` | `public bool UseVolumeBox` | 属性 |
| `EliminatedAgents` | `public int EliminatedAgents` | 属性 |
| `List` | `public List<Agent>Agents` | 属性 |
| `OnActivated;` | `public event Action OnActivated;` | 事件 |
| `OnDisactivated;` | `public event Action OnDisactivated;` | 事件 |
| `VolumeBox` | `public VolumeBox VolumeBox` | 属性 |
| `StealthZone` | `public StealthZone(Agent targetAgent, bool useVolumeBox)` | 构造函数 |
| `SetStealthAgents` | `public void SetStealthAgents(List<Agent>agents)` | 方法 |
| `Tick` | `public void Tick()` | 方法 |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent)` | 方法 |
| `IsAgentInside` | `public bool IsAgentInside(Agent agent)` | 方法 |
| `OnPlayerFlees` | `public void OnPlayerFlees()` | 方法 |
| `ResetEvents` | `public void ResetEvents()` | 方法 |
| `DisableAll` | `public void DisableAll()` | 方法 |
| `VolumeBoxId` | `public const string VolumeBoxId` | 字段 |
| `StealthZoneEvent` | `public delegate void StealthZoneEvent();` | 方法 |
| `StealthZoneEvent` | `public delegate void StealthZoneEvent()` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CheckpointArea](../CheckpointArea/)
- [同命名空间 DefaultMusicInstrumentData](../DefaultMusicInstrumentData/)
- [同命名空间 DynamicPatrolAreaParent](../DynamicPatrolAreaParent/)
- [同命名空间 GenericMissionEventBox](../GenericMissionEventBox/)
