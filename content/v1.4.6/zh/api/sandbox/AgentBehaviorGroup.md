---
title: "AgentBehaviorGroup"
description: "AgentBehaviorGroup：SandBox 的 public 类；公开成员 21 个（方法 15、属性 4、字段 1）。源文件 SandBox/Missions/AgentBehaviors/AgentBehaviorGroup.cs。"
---
# AgentBehaviorGroup

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public abstract class AgentBehaviorGroup`
**File:** `SandBox/Missions/AgentBehaviors/AgentBehaviorGroup.cs`

## 概述

AgentBehaviorGroup 位于 SandBox 模块，源文件 SandBox/Missions/AgentBehaviors/AgentBehaviorGroup.cs。它是一个 public 类（abstract），继承链为 AgentBehaviorGroup。public/protected 成员共 21 个：15 方法、4 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentBehaviorGroup 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.AgentBehaviors），继承链 AgentBehaviorGroup。成员构成以方法为主（方法 15/21，属性 4/21），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/AgentBehaviors/AgentBehaviorGroup.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OwnerAgent` | `public Agent OwnerAgent` | 属性 |
| `ScriptedBehavior` | `public AgentBehavior ScriptedBehavior` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `Mission` | `public Mission Mission` | 属性 |
| `AgentBehaviorGroup` | `protected AgentBehaviorGroup(AgentNavigator navigator, Mission mission)` | 构造函数 |
| `AddBehavior` | `public T AddBehavior<T>() where T : AgentBehavior` | 方法 |
| `GetBehavior` | `public T GetBehavior<T>() where T : AgentBehavior` | 方法 |
| `HasBehavior` | `public bool HasBehavior<T>() where T : AgentBehavior` | 方法 |
| `RemoveBehavior` | `public void RemoveBehavior<T>() where T : AgentBehavior` | 方法 |
| `SetScriptedBehavior` | `public void SetScriptedBehavior<T>() where T : AgentBehavior` | 方法 |
| `DisableScriptedBehavior` | `public void DisableScriptedBehavior()` | 方法 |
| `DisableAllBehaviors` | `public void DisableAllBehaviors()` | 方法 |
| `GetActiveBehavior` | `public AgentBehavior GetActiveBehavior()` | 方法 |
| `Tick` | `public virtual void Tick(float dt, bool isSimulation)` | 方法 |
| `ConversationTick` | `public virtual void ConversationTick()` | 方法 |
| `OnAgentRemoved` | `public virtual void OnAgentRemoved(Agent agent)` | 方法 |
| `OnActivate` | `protected virtual void OnActivate()` | 方法 |
| `OnDeactivate` | `protected virtual void OnDeactivate()` | 方法 |
| `GetScore` | `public virtual float GetScore(bool isSimulation)` | 方法 |
| `ForceThink` | `public virtual void ForceThink(float inSeconds)` | 方法 |
| `CheckBehaviorTime` | `protected float CheckBehaviorTime` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgentBehavior](../AgentBehavior)
- [同命名空间 AlarmedBehaviorGroup](../AlarmedBehaviorGroup)
- [同命名空间 BehaviorSets](../BehaviorSets)
- [同命名空间 CautiousBehavior](../CautiousBehavior)
