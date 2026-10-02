---
title: "Chair"
description: "Chair：SandBox.Objects.Usables 的 public 类，继承 UsableMachine；公开成员 9 个（方法 7、属性 1、字段 0）。canonical 桶 sandbox。源文件 SandBox/Objects/Usables/Chair.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Chair

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class Chair : UsableMachine`
**File:** `SandBox/Objects/Usables/Chair.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

Chair 位于 SandBox 模块，源文件 SandBox/Objects/Usables/Chair.cs。它是一个 public 类，实现/继承 UsableMachine，继承链为 Chair → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 9 个：7 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Chair 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Objects.Usables`，继承链 Chair → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 7/9，属性 1/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/Usables/Chair.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `IsAgentFullySitting` | `public bool IsAgentFullySitting(Agent usingAgent)` | 方法 |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | 方法 |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | 方法 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `GetBestPointAlternativeTo` | `public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)` | 方法 |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | 方法 |
| `SittableType` | `public enum SittableType` | 属性 |
| `SittableType` | `public enum SittableType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 UsableMachine](../../mission-ext/UsableMachine/)
- [同命名空间 CheckpointUsePoint](../CheckpointUsePoint/)
- [同命名空间 DisguiseMissionUsePoint](../DisguiseMissionUsePoint/)
- [同命名空间 MusicianGroup](../MusicianGroup/)
- [同命名空间 Passage](../Passage/)
