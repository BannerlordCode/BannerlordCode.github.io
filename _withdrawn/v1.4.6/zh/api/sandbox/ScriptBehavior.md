---
title: "ScriptBehavior"
description: "ScriptBehavior：SandBox.Missions.AgentBehaviors 的 public 类，继承 AgentBehavior；公开成员 16 个（方法 12、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/Missions/AgentBehaviors/ScriptBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScriptBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class ScriptBehavior : AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/ScriptBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

ScriptBehavior 位于 SandBox 模块，源文件 SandBox/Missions/AgentBehaviors/ScriptBehavior.cs。它是一个 public 类，实现/继承 AgentBehavior，继承链为 ScriptBehavior → AgentBehavior。public/protected 成员共 16 个：12 方法、1 构造函数、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ScriptBehavior 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Missions.AgentBehaviors`，继承链 ScriptBehavior → AgentBehavior。成员构成以方法为主（方法 12/16，属性 0/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/AgentBehaviors/ScriptBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ScriptBehavior` | `public ScriptBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | 构造函数 |
| `AddUsableMachineTarget` | `public static void AddUsableMachineTarget(Agent ownerAgent, UsableMachine targetUsableMachine)` | 方法 |
| `AddAgentTarget` | `public static void AddAgentTarget(Agent ownerAgent, Agent targetAgent)` | 方法 |
| `AddWorldFrameTarget` | `public static void AddWorldFrameTarget(Agent ownerAgent, WorldFrame targetWorldFrame)` | 方法 |
| `AddTargetWithDelegate` | `public static void AddTargetWithDelegate(Agent ownerAgent, ScriptBehavior.SelectTargetDelegate selectTargetDelegate, ScriptBehavior.OnTargetReachedWaitDelegate onTargetReachWaitDelegate, ScriptBehavior.OnTargetReachedDelegate onTargetReachedDelegate, float initialWaitInSeconds = 0f)` | 方法 |
| `IsNearTarget` | `public bool IsNearTarget(Agent targetAgent)` | 方法 |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | 方法 |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `GetDebugInfo` | `public override string GetDebugInfo()` | 方法 |
| `SelectTargetDelegate` | `public delegate bool SelectTargetDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame, ref float customTargetReachedRangeThreshold, ref float customTargetReachedRotationThreshold);` | 方法 |
| `OnTargetReachedDelegate` | `public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame);` | 方法 |
| `OnTargetReachedWaitDelegate` | `public delegate void OnTargetReachedWaitDelegate(Agent agent, ref float waitTimeInSeconds);` | 方法 |
| `SelectTargetDelegate` | `public delegate bool SelectTargetDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame, ref float customTargetReachedRangeThreshold, ref float customTargetReachedRotationThreshold)` | 嵌套类型 |
| `OnTargetReachedDelegate` | `public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame)` | 嵌套类型 |
| `OnTargetReachedWaitDelegate` | `public delegate void OnTargetReachedWaitDelegate(Agent agent, ref float waitTimeInSeconds)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AgentBehavior](../AgentBehavior/)
- [同命名空间 AgentBehavior](../AgentBehavior/)
- [同命名空间 AgentBehaviorGroup](../AgentBehaviorGroup/)
- [同命名空间 AlarmedBehaviorGroup](../AlarmedBehaviorGroup/)
- [同命名空间 BehaviorSets](../BehaviorSets/)
