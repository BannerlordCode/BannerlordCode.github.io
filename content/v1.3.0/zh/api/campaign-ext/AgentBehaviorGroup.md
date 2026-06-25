---
title: "AgentBehaviorGroup"
description: "AgentBehaviorGroup 的自动生成类参考。"
---
# AgentBehaviorGroup

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public abstract class AgentBehaviorGroup`
**Base:** 无
**File:** `SandBox/Missions/AgentBehaviors/AgentBehaviorGroup.cs`

## 概述

`AgentBehaviorGroup` 位于 `SandBox.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OwnerAgent` | `public Agent OwnerAgent { get; }` |
| `ScriptedBehavior` | `public AgentBehavior ScriptedBehavior { get; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `Mission` | `public Mission Mission { get; }` |

## 主要方法

### DisableScriptedBehavior
`public void DisableScriptedBehavior()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableScriptedBehavior 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentBehaviorGroup 实例
AgentBehaviorGroup agentBehaviorGroup = ...;
agentBehaviorGroup.DisableScriptedBehavior();
```

### DisableAllBehaviors
`public void DisableAllBehaviors()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableAllBehaviors 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentBehaviorGroup 实例
AgentBehaviorGroup agentBehaviorGroup = ...;
agentBehaviorGroup.DisableAllBehaviors();
```

### GetActiveBehavior
`public AgentBehavior GetActiveBehavior()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 active behavior 的结果。

```csharp
// 先通过子系统 API 拿到 AgentBehaviorGroup 实例
AgentBehaviorGroup agentBehaviorGroup = ...;
var result = agentBehaviorGroup.GetActiveBehavior();
```

### Tick
`public virtual void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 AgentBehaviorGroup 实例
AgentBehaviorGroup agentBehaviorGroup = ...;
agentBehaviorGroup.Tick(0, false);
```

### ConversationTick
`public virtual void ConversationTick()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ConversationTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentBehaviorGroup 实例
AgentBehaviorGroup agentBehaviorGroup = ...;
agentBehaviorGroup.ConversationTick();
```

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentBehaviorGroup 实例
AgentBehaviorGroup agentBehaviorGroup = ...;
agentBehaviorGroup.OnAgentRemoved(agent);
```

### GetScore
`public virtual float GetScore(bool isSimulation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 score 的结果。

```csharp
// 先通过子系统 API 拿到 AgentBehaviorGroup 实例
AgentBehaviorGroup agentBehaviorGroup = ...;
var result = agentBehaviorGroup.GetScore(false);
```

### ForceThink
`public virtual void ForceThink(float inSeconds)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ForceThink 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentBehaviorGroup 实例
AgentBehaviorGroup agentBehaviorGroup = ...;
agentBehaviorGroup.ForceThink(0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
AgentBehaviorGroup instance = ...;
```

## 参见

- [本区域目录](../)