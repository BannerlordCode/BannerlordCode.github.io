---
title: "EscortAgentBehavior"
description: "EscortAgentBehavior 的自动生成类参考。"
---
# EscortAgentBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class EscortAgentBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/EscortAgentBehavior.cs`

## 概述

`EscortAgentBehavior` 位于 `SandBox.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnTargetReachedDelegate
`public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent escortedAgent, ref Agent targetAgent, ref UsableMachine targetMachine, ref Vec3? targetPosition)`

**用途 / Purpose:** 在 「target reached delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EscortAgentBehavior 实例
EscortAgentBehavior escortAgentBehavior = ...;
var result = escortAgentBehavior.OnTargetReachedDelegate(agent, escortedAgent, targetAgent, targetMachine, targetPosition);
```

### Initialize
`public void Initialize(Agent escortedAgent, Agent targetAgent, OnTargetReachedDelegate onTargetReached = null)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 EscortAgentBehavior 实例
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.Initialize(escortedAgent, targetAgent, null);
```

### Initialize
`public void Initialize(Agent escortedAgent, UsableMachine targetMachine, OnTargetReachedDelegate onTargetReached = null)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 EscortAgentBehavior 实例
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.Initialize(escortedAgent, targetMachine, null);
```

### Initialize
`public void Initialize(Agent escortedAgent, Vec3? targetPosition, OnTargetReachedDelegate onTargetReached = null)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 EscortAgentBehavior 实例
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.Initialize(escortedAgent, targetPosition, null);
```

### Tick
`public override void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 EscortAgentBehavior 实例
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.Tick(0, false);
```

### IsEscortFinished
`public bool IsEscortFinished()`

**用途 / Purpose:** 判断当前对象是否处于 「escort finished」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EscortAgentBehavior 实例
EscortAgentBehavior escortAgentBehavior = ...;
var result = escortAgentBehavior.IsEscortFinished();
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**用途 / Purpose:** 读取并返回当前对象中 「availability」 的结果。

```csharp
// 先通过子系统 API 拿到 EscortAgentBehavior 实例
EscortAgentBehavior escortAgentBehavior = ...;
var result = escortAgentBehavior.GetAvailability(false);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**用途 / Purpose:** 读取并返回当前对象中 「debug info」 的结果。

```csharp
// 先通过子系统 API 拿到 EscortAgentBehavior 实例
EscortAgentBehavior escortAgentBehavior = ...;
var result = escortAgentBehavior.GetDebugInfo();
```

### AddEscortAgentBehavior
`public static void AddEscortAgentBehavior(Agent ownerAgent, Agent targetAgent, OnTargetReachedDelegate onTargetReached)`

**用途 / Purpose:** 将 「escort agent behavior」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
EscortAgentBehavior.AddEscortAgentBehavior(ownerAgent, targetAgent, onTargetReached);
```

### RemoveEscortBehaviorOfAgent
`public static void RemoveEscortBehaviorOfAgent(Agent ownerAgent)`

**用途 / Purpose:** 从当前容器或状态中移除 「escort behavior of agent」。

```csharp
// 静态调用，不需要实例
EscortAgentBehavior.RemoveEscortBehaviorOfAgent(ownerAgent);
```

### CheckIfAgentIsEscortedBy
`public static bool CheckIfAgentIsEscortedBy(Agent ownerAgent, Agent escortedAgent)`

**用途 / Purpose:** 检查「if agent is escorted by」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
EscortAgentBehavior.CheckIfAgentIsEscortedBy(ownerAgent, escortedAgent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.OnTargetReachedDelegate(agent, escortedAgent, targetAgent, targetMachine, targetPosition);
```

## 参见

- [本区域目录](../)