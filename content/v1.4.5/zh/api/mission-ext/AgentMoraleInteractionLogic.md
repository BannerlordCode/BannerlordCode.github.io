---
title: "AgentMoraleInteractionLogic"
description: "AgentMoraleInteractionLogic 的自动生成类参考。"
---
# AgentMoraleInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentMoraleInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AgentMoraleInteractionLogic.cs`

## 概述

`AgentMoraleInteractionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `AgentMoraleInteractionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentMoraleInteractionLogic 实例
AgentMoraleInteractionLogic agentMoraleInteractionLogic = ...;
agentMoraleInteractionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnAgentFleeing
`public override void OnAgentFleeing(Agent affectedAgent)`

**用途 / Purpose:** 在 agent fleeing 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentMoraleInteractionLogic 实例
AgentMoraleInteractionLogic agentMoraleInteractionLogic = ...;
agentMoraleInteractionLogic.OnAgentFleeing(affectedAgent);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<AgentMoraleInteractionLogic>();
```

## 参见

- [本区域目录](../)