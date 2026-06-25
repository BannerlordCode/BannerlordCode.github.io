---
title: "UsableMachineAIBase"
description: "UsableMachineAIBase 的自动生成类参考。"
---
# UsableMachineAIBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMachineAIBase`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMachineAIBase.cs`

## 概述

`UsableMachineAIBase` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Tick
`public void Tick(Agent agentToCompareTo, Formation formationToCompareTo, Team potentialUsersTeam, float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 UsableMachineAIBase 实例
UsableMachineAIBase usableMachineAIBase = ...;
usableMachineAIBase.Tick(agentToCompareTo, formationToCompareTo, potentialUsersTeam, 0);
```

### GetSuitableAgentForStandingPoint
`public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine, StandingPoint standingPoint, IEnumerable<Agent> agents, List<Agent> usedAgents)`

**用途 / Purpose:** 读取并返回当前对象中 「suitable agent for standing point」 的结果。

```csharp
// 静态调用，不需要实例
UsableMachineAIBase.GetSuitableAgentForStandingPoint(usableMachine, standingPoint, agents, usedAgents);
```

### GetSuitableAgentForStandingPoint
`public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine, StandingPoint standingPoint, List<(Agent, float)> agents, List<Agent> usedAgents, float weight)`

**用途 / Purpose:** 读取并返回当前对象中 「suitable agent for standing point」 的结果。

```csharp
// 静态调用，不需要实例
UsableMachineAIBase.GetSuitableAgentForStandingPoint(usableMachine, standingPoint, list<(Agent, 0, usedAgents, 0);
```

### TeleportUserAgentsToMachine
`public virtual void TeleportUserAgentsToMachine(List<Agent> agentList)`

**用途 / Purpose:** 处理与 「teleport user agents to machine」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 UsableMachineAIBase 实例
UsableMachineAIBase usableMachineAIBase = ...;
usableMachineAIBase.TeleportUserAgentsToMachine(agentList);
```

### StopUsingStandingPoint
`public void StopUsingStandingPoint(StandingPoint standingPoint)`

**用途 / Purpose:** 停止「using standing point」流程或状态机。

```csharp
// 先通过子系统 API 拿到 UsableMachineAIBase 实例
UsableMachineAIBase usableMachineAIBase = ...;
usableMachineAIBase.StopUsingStandingPoint(standingPoint);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
UsableMachineAIBase instance = ...;
```

## 参见

- [本区域目录](../)