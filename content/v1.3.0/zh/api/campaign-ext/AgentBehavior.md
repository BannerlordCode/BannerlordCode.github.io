---
title: "AgentBehavior"
description: "AgentBehavior 的自动生成类参考。"
---
# AgentBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public abstract class AgentBehavior`
**Base:** 无
**File:** `SandBox/Missions/AgentBehaviors/AgentBehavior.cs`

## 概述

`AgentBehavior` 位于 `SandBox.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Navigator` | `public AgentNavigator Navigator { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `OwnerAgent` | `public Agent OwnerAgent { get; }` |
| `Mission` | `public Mission Mission { get; }` |

## 主要方法

### GetAvailability
`public virtual float GetAvailability(bool isSimulation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 availability 的结果。

```csharp
// 先通过子系统 API 拿到 AgentBehavior 实例
AgentBehavior agentBehavior = ...;
var result = agentBehavior.GetAvailability(false);
```

### Tick
`public virtual void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 AgentBehavior 实例
AgentBehavior agentBehavior = ...;
agentBehavior.Tick(0, false);
```

### ConversationTick
`public virtual void ConversationTick()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ConversationTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentBehavior 实例
AgentBehavior agentBehavior = ...;
agentBehavior.ConversationTick();
```

### CheckStartWithBehavior
`public virtual bool CheckStartWithBehavior()`

**用途 / Purpose:** **用途 / Purpose:** 检查start with behavior在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 AgentBehavior 实例
AgentBehavior agentBehavior = ...;
var result = agentBehavior.CheckStartWithBehavior();
```

### OnSpecialTargetChanged
`public virtual void OnSpecialTargetChanged()`

**用途 / Purpose:** **用途 / Purpose:** 在 special target changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentBehavior 实例
AgentBehavior agentBehavior = ...;
agentBehavior.OnSpecialTargetChanged();
```

### SetCustomWanderTarget
`public virtual void SetCustomWanderTarget(UsableMachine customUsableMachine)`

**用途 / Purpose:** **用途 / Purpose:** 为 custom wander target 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentBehavior 实例
AgentBehavior agentBehavior = ...;
agentBehavior.SetCustomWanderTarget(customUsableMachine);
```

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentBehavior 实例
AgentBehavior agentBehavior = ...;
agentBehavior.OnAgentRemoved(agent);
```

### GetDebugInfo
`public abstract string GetDebugInfo()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 debug info 的结果。

```csharp
// 先通过子系统 API 拿到 AgentBehavior 实例
AgentBehavior agentBehavior = ...;
var result = agentBehavior.GetDebugInfo();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
AgentBehavior instance = ...;
```

## 参见

- [本区域目录](../)