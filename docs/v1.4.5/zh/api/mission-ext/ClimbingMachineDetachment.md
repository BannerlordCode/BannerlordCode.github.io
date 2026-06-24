<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClimbingMachineDetachment`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClimbingMachineDetachment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClimbingMachineDetachment : IDetachment`
**Base:** `IDetachment`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ClimbingMachineDetachment.cs`

## 概述

`ClimbingMachineDetachment` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |

## 主要方法

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** 处理 `deactivate` 相关逻辑。

### AddAgent
`public void AddAgent(Agent agent, int slotIndex, Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None)`

**用途 / Purpose:** 向当前集合/状态中添加 `agent`。

### AddAgentAtSlotIndex
`public void AddAgentAtSlotIndex(Agent agent, int slotIndex)`

**用途 / Purpose:** 向当前集合/状态中添加 `agent at slot index`。

### IsUsedByFormation
`public bool IsUsedByFormation(Formation formation)`

**用途 / Purpose:** 处理 `is used by formation` 相关逻辑。

### IsStandingPointAvailableForAgent
`public bool IsStandingPointAvailableForAgent(Agent agent)`

**用途 / Purpose:** 处理 `is standing point available for agent` 相关逻辑。

### GetTemplateCostsOfAgent
`public List<float> GetTemplateCostsOfAgent(Agent candidate, List<float> oldValue)`

**用途 / Purpose:** 获取 `template costs of agent` 的当前值。

### GetTemplateWeightOfAgent
`public float GetTemplateWeightOfAgent(Agent candidate)`

**用途 / Purpose:** 获取 `template weight of agent` 的当前值。

### GetWeightOfAgentAtNextSlot
`public float? GetWeightOfAgentAtNextSlot(List<Agent> newAgents, out Agent match)`

**用途 / Purpose:** 获取 `weight of agent at next slot` 的当前值。

### GetWeightOfAgentAtNextSlot
`public float? GetWeightOfAgentAtNextSlot(List<(Agent, float)> agentTemplateScores, out Agent match)`

**用途 / Purpose:** 获取 `weight of agent at next slot` 的当前值。

### GetWeightOfAgentAtOccupiedSlot
`public float? GetWeightOfAgentAtOccupiedSlot(Agent detachedAgent, List<Agent> newAgents, out Agent match)`

**用途 / Purpose:** 获取 `weight of agent at occupied slot` 的当前值。

### RemoveAgent
`public void RemoveAgent(Agent agent)`

**用途 / Purpose:** 从当前集合/状态中移除 `agent`。

### GetNumberOfUsableSlots
`public int GetNumberOfUsableSlots()`

**用途 / Purpose:** 获取 `number of usable slots` 的当前值。

### GetAgentFrame
`public WorldFrame? GetAgentFrame(Agent agent)`

**用途 / Purpose:** 获取 `agent frame` 的当前值。

### GetWeightOfNextSlot
`public float? GetWeightOfNextSlot(BattleSideEnum side)`

**用途 / Purpose:** 获取 `weight of next slot` 的当前值。

### GetWeightOfOccupiedSlot
`public float GetWeightOfOccupiedSlot(Agent agent)`

**用途 / Purpose:** 获取 `weight of occupied slot` 的当前值。

### TickClimbingMachines
`public void TickClimbingMachines()`

**用途 / Purpose:** 处理 `tick climbing machines` 相关逻辑。

## 使用示例

```csharp
var value = new ClimbingMachineDetachment();
value.Deactivate();
```

## 参见

- [完整类目录](../catalog)