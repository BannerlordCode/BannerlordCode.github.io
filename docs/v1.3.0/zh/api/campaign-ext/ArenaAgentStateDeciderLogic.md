<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArenaAgentStateDeciderLogic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `agent state` 的当前值。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new ArenaAgentStateDeciderLogic());
```

## 参见

- [完整类目录](../catalog)