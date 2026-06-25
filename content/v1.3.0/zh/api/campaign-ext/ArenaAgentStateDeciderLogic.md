---
title: "ArenaAgentStateDeciderLogic"
description: "ArenaAgentStateDeciderLogic 的自动生成类参考。"
---
# ArenaAgentStateDeciderLogic

**Namespace:** SandBox.Missions.MissionLogics.Arena
**Module:** SandBox.Missions
**Type:** `public class ArenaAgentStateDeciderLogic : MissionLogic, IAgentStateDecider, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Arena/ArenaAgentStateDeciderLogic.cs`

## 概述

`ArenaAgentStateDeciderLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `ArenaAgentStateDeciderLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAgentState
`public AgentState GetAgentState(Agent effectedAgent, float deathProbability, out bool usedSurgery)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 agent state 的结果。

```csharp
// 先通过子系统 API 拿到 ArenaAgentStateDeciderLogic 实例
ArenaAgentStateDeciderLogic arenaAgentStateDeciderLogic = ...;
var result = arenaAgentStateDeciderLogic.GetAgentState(effectedAgent, 0, usedSurgery);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<ArenaAgentStateDeciderLogic>();
```

## 参见

- [本区域目录](../)