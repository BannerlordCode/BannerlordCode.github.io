---
title: "EscortAgentBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EscortAgentBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EscortAgentBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class EscortAgentBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/EscortAgentBehavior.cs`

## 概述

`EscortAgentBehavior` 位于 `SandBox.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnTargetReachedDelegate
`public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent escortedAgent, ref Agent targetAgent, ref UsableMachine targetMachine, ref Vec3? targetPosition)`

**用途 / Purpose:** 当 `target reached delegate` 事件触发时调用此方法。

### Initialize
`public void Initialize(Agent escortedAgent, Agent targetAgent, OnTargetReachedDelegate onTargetReached = null)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Initialize
`public void Initialize(Agent escortedAgent, UsableMachine targetMachine, OnTargetReachedDelegate onTargetReached = null)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Initialize
`public void Initialize(Agent escortedAgent, Vec3? targetPosition, OnTargetReachedDelegate onTargetReached = null)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Tick
`public override void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### IsEscortFinished
`public bool IsEscortFinished()`

**用途 / Purpose:** 处理 `is escort finished` 相关逻辑。

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**用途 / Purpose:** 获取 `availability` 的当前值。

### GetDebugInfo
`public override string GetDebugInfo()`

**用途 / Purpose:** 获取 `debug info` 的当前值。

### AddEscortAgentBehavior
`public static void AddEscortAgentBehavior(Agent ownerAgent, Agent targetAgent, OnTargetReachedDelegate onTargetReached)`

**用途 / Purpose:** 向当前集合/状态中添加 `escort agent behavior`。

### RemoveEscortBehaviorOfAgent
`public static void RemoveEscortBehaviorOfAgent(Agent ownerAgent)`

**用途 / Purpose:** 从当前集合/状态中移除 `escort behavior of agent`。

### CheckIfAgentIsEscortedBy
`public static bool CheckIfAgentIsEscortedBy(Agent ownerAgent, Agent escortedAgent)`

**用途 / Purpose:** 处理 `check if agent is escorted by` 相关逻辑。

## 使用示例

```csharp
var value = new EscortAgentBehavior();
value.OnTargetReachedDelegate(agent, escortedAgent, targetAgent, targetMachine, targetPosition);
```

## 参见

- [完整类目录](../catalog)