---
title: "SpawningBehaviorBase"
description: "SpawningBehaviorBase：TaleWorlds.MountAndBlade 的 public 类；公开成员 26 个（方法 20、属性 1、字段 1）。源文件 TaleWorlds.MountAndBlade/SpawningBehaviorBase.cs。"
---
# SpawningBehaviorBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class SpawningBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/SpawningBehaviorBase.cs`

## 概述

SpawningBehaviorBase 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SpawningBehaviorBase.cs。它是一个 public 类（abstract），继承链为 SpawningBehaviorBase。public/protected 成员共 26 个：20 方法、1 属性、1 字段、3 事件、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SpawningBehaviorBase 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 SpawningBehaviorBase。成员构成以方法为主（方法 20/26，属性 1/26），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SpawningBehaviorBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Mission` | `protected Mission Mission` | 属性 |
| `Action` | `protected event Action<MissionPeer>OnAllAgentsFromPeerSpawnedFromVisuals;` | 事件 |
| `Action` | `protected event Action<MissionPeer>OnPeerSpawnedFromVisuals;` | 事件 |
| `OnSpawningEnded;` | `public event SpawningBehaviorBase.OnSpawningEndedEventDelegate OnSpawningEnded;` | 事件 |
| `Initialize` | `public virtual void Initialize(SpawnComponent spawnComponent)` | 方法 |
| `Clear` | `public virtual void Clear()` | 方法 |
| `OnTick` | `public virtual void OnTick(float dt)` | 方法 |
| `AreAgentsSpawning` | `public bool AreAgentsSpawning()` | 方法 |
| `ResetSpawnCounts` | `protected void ResetSpawnCounts()` | 方法 |
| `ResetSpawnTimers` | `protected void ResetSpawnTimers()` | 方法 |
| `RequestStartSpawnSession` | `public virtual void RequestStartSpawnSession()` | 方法 |
| `RequestStopSpawnSession` | `public void RequestStopSpawnSession()` | 方法 |
| `SetRemainingAgentsInvulnerable` | `public void SetRemainingAgentsInvulnerable()` | 方法 |
| `SpawnAgents` | `protected abstract void SpawnAgents();` | 方法 |
| `GetBodyProperties` | `protected BodyProperties GetBodyProperties(MissionPeer missionPeer, BasicCultureObject cultureLimit)` | 方法 |
| `SpawnBot` | `protected void SpawnBot(Team agentTeam, BasicCultureObject cultureLimit)` | 方法 |
| `CanUpdateSpawnEquipment` | `public virtual bool CanUpdateSpawnEquipment(MissionPeer missionPeer)` | 方法 |
| `ToggleUpdatingSpawnEquipment` | `public void ToggleUpdatingSpawnEquipment(bool canUpdate)` | 方法 |
| `AllowEarlyAgentVisualsDespawning` | `public abstract bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer);` | 方法 |
| `GetMaximumReSpawnPeriodForPeer` | `public virtual int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)` | 方法 |
| `IsRoundInProgress` | `protected abstract bool IsRoundInProgress();` | 方法 |
| `OnClearScene` | `public virtual void OnClearScene()` | 方法 |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `SpawningEndDelay` | `protected float SpawningEndDelay` | 字段 |
| `OnSpawningEndedEventDelegate` | `public delegate void OnSpawningEndedEventDelegate();` | 方法 |
| `OnSpawningEndedEventDelegate` | `public delegate void OnSpawningEndedEventDelegate()` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
