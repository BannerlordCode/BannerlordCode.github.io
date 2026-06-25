---
title: "StonePileAI"
description: "StonePileAI 的自动生成类参考。"
---
# StonePileAI

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StonePileAI : UsableMachineAIBase`
**Base:** `UsableMachineAIBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StonePileAI.cs`

## 概述

`StonePileAI` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetSuitableAgentForStandingPoint
`public static Agent GetSuitableAgentForStandingPoint(StonePile usableMachine, StandingPoint standingPoint, List<Agent> agents, List<Agent> usedAgents)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 suitable agent for standing point 的结果。

```csharp
// 静态调用，不需要实例
StonePileAI.GetSuitableAgentForStandingPoint(usableMachine, standingPoint, agents, usedAgents);
```

### GetSuitableAgentForStandingPoint
`public static Agent GetSuitableAgentForStandingPoint(StonePile stonePile, StandingPoint standingPoint, List<(Agent, float)> agents, List<Agent> usedAgents, float weight)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 suitable agent for standing point 的结果。

```csharp
// 静态调用，不需要实例
StonePileAI.GetSuitableAgentForStandingPoint(stonePile, standingPoint, list<(Agent, 0, usedAgents, 0);
```

### IsAgentAssignable
`public static bool IsAgentAssignable(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 agent assignable 状态或条件。

```csharp
// 静态调用，不需要实例
StonePileAI.IsAgentAssignable(agent);
```

## 使用示例

```csharp
StonePileAI.GetSuitableAgentForStandingPoint(usableMachine, standingPoint, agents, usedAgents);
```

## 参见

- [本区域目录](../)