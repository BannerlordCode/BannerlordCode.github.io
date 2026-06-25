---
title: "AttackEntityOrderDetachment"
description: "AttackEntityOrderDetachment 的自动生成类参考。"
---
# AttackEntityOrderDetachment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AttackEntityOrderDetachment : IDetachment`
**Base:** `IDetachment`
**File:** `TaleWorlds.MountAndBlade/AttackEntityOrderDetachment.cs`

## 概述

`AttackEntityOrderDetachment` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `UserFormations` | `public MBReadOnlyList<Formation> UserFormations { get; }` |
| `IsLoose` | `public bool IsLoose { get; }` |
| `IsActive` | `public bool IsActive { get; }` |

## 主要方法

### GetPosition
`public Vec3 GetPosition()`

**用途 / Purpose:** 读取并返回当前对象中 position 的结果。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetPosition();
```

### AddAgent
`public void AddAgent(Agent agent, int slotIndex, Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None)`

**用途 / Purpose:** 将 agent 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
attackEntityOrderDetachment.AddAgent(agent, 0, agent.AIScriptedFrameFlags.None);
```

### AddAgentAtSlotIndex
`public void AddAgentAtSlotIndex(Agent agent, int slotIndex)`

**用途 / Purpose:** 将 agent at slot index 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
attackEntityOrderDetachment.AddAgentAtSlotIndex(agent, 0);
```

### IsUsedByFormation
`public bool IsUsedByFormation(Formation formation)`

**用途 / Purpose:** 判断当前对象是否处于 used by formation 状态或条件。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.IsUsedByFormation(formation);
```

### IsStandingPointAvailableForAgent
`public bool IsStandingPointAvailableForAgent(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 standing point available for agent 状态或条件。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.IsStandingPointAvailableForAgent(agent);
```

### GetTemplateCostsOfAgent
`public List<float> GetTemplateCostsOfAgent(Agent candidate, List<float> oldValue)`

**用途 / Purpose:** 读取并返回当前对象中 template costs of agent 的结果。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetTemplateCostsOfAgent(candidate, oldValue);
```

### GetTemplateWeightOfAgent
`public float GetTemplateWeightOfAgent(Agent candidate)`

**用途 / Purpose:** 读取并返回当前对象中 template weight of agent 的结果。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetTemplateWeightOfAgent(candidate);
```

### GetWeightOfAgentAtNextSlot
`public float? GetWeightOfAgentAtNextSlot(List<Agent> newAgents, out Agent match)`

**用途 / Purpose:** 读取并返回当前对象中 weight of agent at next slot 的结果。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetWeightOfAgentAtNextSlot(newAgents, match);
```

### GetWeightOfAgentAtNextSlot
`public float? GetWeightOfAgentAtNextSlot(List<ValueTuple<Agent, float>> agentTemplateScores, out Agent match)`

**用途 / Purpose:** 读取并返回当前对象中 weight of agent at next slot 的结果。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetWeightOfAgentAtNextSlot(list<ValueTuple<Agent, 0, match);
```

### GetWeightOfAgentAtOccupiedSlot
`public float? GetWeightOfAgentAtOccupiedSlot(Agent detachedAgent, List<Agent> newAgents, out Agent match)`

**用途 / Purpose:** 读取并返回当前对象中 weight of agent at occupied slot 的结果。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetWeightOfAgentAtOccupiedSlot(detachedAgent, newAgents, match);
```

### RemoveAgent
`public void RemoveAgent(Agent agent)`

**用途 / Purpose:** 从当前容器或状态中移除 agent。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
attackEntityOrderDetachment.RemoveAgent(agent);
```

### GetNumberOfUsableSlots
`public int GetNumberOfUsableSlots()`

**用途 / Purpose:** 读取并返回当前对象中 number of usable slots 的结果。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetNumberOfUsableSlots();
```

### GetAgentFrame
`public WorldFrame? GetAgentFrame(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 agent frame 的结果。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetAgentFrame(agent);
```

### GetWeightOfNextSlot
`public float? GetWeightOfNextSlot(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 weight of next slot 的结果。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetWeightOfNextSlot(side);
```

### GetWeightOfOccupiedSlot
`public float GetWeightOfOccupiedSlot(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 weight of occupied slot 的结果。

```csharp
// 先通过子系统 API 拿到 AttackEntityOrderDetachment 实例
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetWeightOfOccupiedSlot(agent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
attackEntityOrderDetachment.GetPosition();
```

## 参见

- [本区域目录](../)