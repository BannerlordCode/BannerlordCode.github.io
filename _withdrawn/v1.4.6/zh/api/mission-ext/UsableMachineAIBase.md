---
title: "UsableMachineAIBase"
description: "UsableMachineAIBase：TaleWorlds.MountAndBlade 的 public 类；公开成员 12 个（方法 9、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/UsableMachineAIBase.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# UsableMachineAIBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class UsableMachineAIBase`
**File:** `TaleWorlds.MountAndBlade/UsableMachineAIBase.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

UsableMachineAIBase 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/UsableMachineAIBase.cs。它是一个 public 类（abstract），继承链为 UsableMachineAIBase。public/protected 成员共 12 个：9 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：UsableMachineAIBase 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 UsableMachineAIBase。成员构成以方法为主（方法 9/12，属性 2/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/UsableMachineAIBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UsableMachineAIBase` | `protected UsableMachineAIBase(UsableMachine usableMachine)` | 构造函数 |
| `HasActionCompleted` | `public virtual bool HasActionCompleted` | 属性 |
| `GetScriptedFrameFlags` | `protected internal virtual Agent.AIScriptedFrameFlags GetScriptedFrameFlags(Agent agent)` | 方法 |
| `Tick` | `public void Tick(Agent agentToCompareTo, Formation formationToCompareTo, Team potentialUsersTeam, float dt)` | 方法 |
| `OnTick` | `protected virtual void OnTick(Agent agentToCompareTo, Formation formationToCompareTo, Team potentialUsersTeam, float dt)` | 方法 |
| `GetSuitableAgentForStandingPoint` | `public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine, StandingPoint standingPoint, IEnumerable<Agent>agents, List<Agent>usedAgents)` | 方法 |
| `GetSuitableAgentForStandingPoint` | `public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine, StandingPoint standingPoint, List<ValueTuple<Agent, float>>agents, List<Agent>usedAgents, float weight)` | 方法 |
| `NextOrder` | `protected virtual MovementOrder NextOrder` | 属性 |
| `TeleportUserAgentsToMachine` | `public virtual void TeleportUserAgentsToMachine(List<Agent>agentList)` | 方法 |
| `StopUsingStandingPoint` | `public void StopUsingStandingPoint(StandingPoint standingPoint)` | 方法 |
| `GetStopUsingStandingPointFlags` | `protected Agent.StopUsingGameObjectFlags GetStopUsingStandingPointFlags(Agent agent, StandingPoint standingPoint)` | 方法 |
| `HandleAgentStopUsingStandingPoint` | `protected virtual void HandleAgentStopUsingStandingPoint(Agent agent, StandingPoint standingPoint)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
