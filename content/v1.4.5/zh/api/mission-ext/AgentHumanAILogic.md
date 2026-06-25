---
title: "AgentHumanAILogic"
description: "AgentHumanAILogic 的自动生成类参考。"
---
# AgentHumanAILogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentHumanAILogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentHumanAILogic.cs`

## 概述

`AgentHumanAILogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `AgentHumanAILogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentHumanAILogic 实例
AgentHumanAILogic agentHumanAILogic = ...;
agentHumanAILogic.OnAgentCreated(agent);
```

### OnAgentMount
`public override void OnAgentMount(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent mount 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentHumanAILogic 实例
AgentHumanAILogic agentHumanAILogic = ...;
agentHumanAILogic.OnAgentMount(agent);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<AgentHumanAILogic>();
```

## 参见

- [本区域目录](../)