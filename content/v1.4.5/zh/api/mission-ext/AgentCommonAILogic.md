---
title: "AgentCommonAILogic"
description: "AgentCommonAILogic 的自动生成类参考。"
---
# AgentCommonAILogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentCommonAILogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentCommonAILogic.cs`

## 概述

`AgentCommonAILogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `AgentCommonAILogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**用途 / Purpose:** 在 agent created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentCommonAILogic 实例
AgentCommonAILogic agentCommonAILogic = ...;
agentCommonAILogic.OnAgentCreated(agent);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<AgentCommonAILogic>();
```

## 参见

- [本区域目录](../)