<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CheckpointMissionLogic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CheckpointMissionLogic

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class CheckpointMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions/CheckpointMissionLogic.cs`

## 概述

`CheckpointMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `CheckpointMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### OnRenderingStarted
`public override void OnRenderingStarted()`

**用途 / Purpose:** 当 `rendering started` 事件触发时调用此方法。

### OnEarlyAgentRemoved
`public override void OnEarlyAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `early agent removed` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnCheckpointUsed
`public void OnCheckpointUsed(int checkpointUniqueId)`

**用途 / Purpose:** 当 `checkpoint used` 事件触发时调用此方法。

### RegisterAgent
`public void RegisterAgent(Agent agent)`

**用途 / Purpose:** 处理 `register agent` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new CheckpointMissionLogic());
```

## 参见

- [完整类目录](../catalog)