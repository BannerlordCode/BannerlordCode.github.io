---
title: "TeleportUsePoint"
description: "TeleportUsePoint：SandBox.Objects 的 public 类，继承 StandingPoint；公开成员 13 个（方法 9、属性 2、字段 0）。canonical 桶 sandbox。源文件 SandBox/Objects/TeleportUsePoint.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TeleportUsePoint

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class TeleportUsePoint : StandingPoint`
**File:** `SandBox/Objects/TeleportUsePoint.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

TeleportUsePoint 位于 SandBox 模块，源文件 SandBox/Objects/TeleportUsePoint.cs。它是一个 public 类，实现/继承 StandingPoint，继承链为 TeleportUsePoint → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 13 个：9 方法、2 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TeleportUsePoint 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Objects`，继承链 TeleportUsePoint → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 9/13，属性 2/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/TeleportUsePoint.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HasAIMovingTo` | `public override bool HasAIMovingTo` | 属性 |
| `TeleportUsePoint` | `public TeleportUsePoint()` | 构造函数 |
| `IsAIMovingTo` | `public override bool IsAIMovingTo(Agent agent)` | 方法 |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `IsUsableByAgent` | `public override bool IsUsableByAgent(Agent userAgent)` | 方法 |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | 方法 |
| `Deactivate` | `public void Deactivate()` | 方法 |
| `Activate` | `public void Activate()` | 方法 |
| `OnFocusGain` | `public override void OnFocusGain(Agent userAgent)` | 方法 |
| `TeleportType` | `public enum TeleportType` | 属性 |
| `TeleportType` | `public enum TeleportType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 StandingPoint](../../mission-ext/StandingPoint/)
- [同命名空间 CheckpointArea](../CheckpointArea/)
- [同命名空间 DefaultMusicInstrumentData](../DefaultMusicInstrumentData/)
- [同命名空间 DynamicPatrolAreaParent](../DynamicPatrolAreaParent/)
- [同命名空间 GenericMissionEventBox](../GenericMissionEventBox/)
