---
title: "AgentBehavior"
description: "AgentBehavior：SandBox.Missions.AgentBehaviors 的 public 类；公开成员 16 个（方法 10、属性 4、字段 1）。canonical 桶 sandbox。源文件 SandBox/Missions/AgentBehaviors/AgentBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public abstract class AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/AgentBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

AgentBehavior 位于 SandBox 模块，源文件 SandBox/Missions/AgentBehaviors/AgentBehavior.cs。它是一个 public 类（abstract），继承链为 AgentBehavior。public/protected 成员共 16 个：10 方法、4 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentBehavior 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Missions.AgentBehaviors`，继承链 AgentBehavior。成员构成以方法为主（方法 10/16，属性 4/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/AgentBehaviors/AgentBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Navigator` | `public AgentNavigator Navigator` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `OwnerAgent` | `public Agent OwnerAgent` | 属性 |
| `Mission` | `public Mission Mission` | 属性 |
| `AgentBehavior` | `protected AgentBehavior(AgentBehaviorGroup behaviorGroup)` | 构造函数 |
| `GetAvailability` | `public virtual float GetAvailability(bool isSimulation)` | 方法 |
| `Tick` | `public virtual void Tick(float dt, bool isSimulation)` | 方法 |
| `ConversationTick` | `public virtual void ConversationTick()` | 方法 |
| `OnActivate` | `protected virtual void OnActivate()` | 方法 |
| `OnDeactivate` | `protected virtual void OnDeactivate()` | 方法 |
| `CheckStartWithBehavior` | `public virtual bool CheckStartWithBehavior()` | 方法 |
| `OnSpecialTargetChanged` | `public virtual void OnSpecialTargetChanged()` | 方法 |
| `SetCustomWanderTarget` | `public virtual void SetCustomWanderTarget(UsableMachine customUsableMachine)` | 方法 |
| `OnAgentRemoved` | `public virtual void OnAgentRemoved(Agent agent)` | 方法 |
| `GetDebugInfo` | `public abstract string GetDebugInfo();` | 方法 |
| `CheckTime` | `public float CheckTime` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AgentBehaviorGroup](../AgentBehaviorGroup/)
- [同命名空间 AlarmedBehaviorGroup](../AlarmedBehaviorGroup/)
- [同命名空间 BehaviorSets](../BehaviorSets/)
- [同命名空间 CautiousBehavior](../CautiousBehavior/)
