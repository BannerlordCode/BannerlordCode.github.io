---
title: "EscortAgentBehavior"
description: "EscortAgentBehavior：SandBox 的 public 类，继承 AgentBehavior；公开成员 16 个（方法 12、属性 2、字段 0）。源文件 SandBox/Missions/AgentBehaviors/EscortAgentBehavior.cs。"
---
# EscortAgentBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class EscortAgentBehavior : AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/EscortAgentBehavior.cs`

## 概述

EscortAgentBehavior 位于 SandBox 模块，源文件 SandBox/Missions/AgentBehaviors/EscortAgentBehavior.cs。它是一个 public 类，实现/继承 AgentBehavior，继承链为 EscortAgentBehavior → AgentBehavior。public/protected 成员共 16 个：12 方法、2 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EscortAgentBehavior 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.AgentBehaviors），继承链 EscortAgentBehavior → AgentBehavior。成员构成以方法为主（方法 12/16，属性 2/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/AgentBehaviors/EscortAgentBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EscortedAgent` | `public Agent EscortedAgent` | 属性 |
| `TargetAgent` | `public Agent TargetAgent` | 属性 |
| `EscortAgentBehavior` | `public EscortAgentBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | 构造函数 |
| `Initialize` | `public void Initialize(Agent escortedAgent, Agent targetAgent, EscortAgentBehavior.OnTargetReachedDelegate onTargetReached = null)` | 方法 |
| `Initialize` | `public void Initialize(Agent escortedAgent, UsableMachine targetMachine, EscortAgentBehavior.OnTargetReachedDelegate onTargetReached = null)` | 方法 |
| `Initialize` | `public void Initialize(Agent escortedAgent, Vec3? targetPosition, EscortAgentBehavior.OnTargetReachedDelegate onTargetReached = null)` | 方法 |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | 方法 |
| `IsEscortFinished` | `public bool IsEscortFinished()` | 方法 |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `GetDebugInfo` | `public override string GetDebugInfo()` | 方法 |
| `AddEscortAgentBehavior` | `public static void AddEscortAgentBehavior(Agent ownerAgent, Agent targetAgent, EscortAgentBehavior.OnTargetReachedDelegate onTargetReached)` | 方法 |
| `RemoveEscortBehaviorOfAgent` | `public static void RemoveEscortBehaviorOfAgent(Agent ownerAgent)` | 方法 |
| `CheckIfAgentIsEscortedBy` | `public static bool CheckIfAgentIsEscortedBy(Agent ownerAgent, Agent escortedAgent)` | 方法 |
| `OnTargetReachedDelegate` | `public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent escortedAgent, ref Agent targetAgent, ref UsableMachine targetMachine, ref Vec3? targetPosition);` | 方法 |
| `OnTargetReachedDelegate` | `public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent escortedAgent, ref Agent targetAgent, ref UsableMachine targetMachine, ref Vec3? targetPosition)` | 嵌套类型 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 AgentBehavior](../AgentBehavior)
- [同命名空间 AgentBehavior](../AgentBehavior)
- [同命名空间 AgentBehaviorGroup](../AgentBehaviorGroup)
- [同命名空间 AlarmedBehaviorGroup](../AlarmedBehaviorGroup)
- [同命名空间 BehaviorSets](../BehaviorSets)
