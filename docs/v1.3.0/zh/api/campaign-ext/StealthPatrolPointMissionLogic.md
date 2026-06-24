<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StealthPatrolPointMissionLogic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StealthPatrolPointMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class StealthPatrolPointMissionLogic : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/StealthPatrolPointMissionLogic.cs`

## 概述

`StealthPatrolPointMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `StealthPatrolPointMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnLocationCharacterAgentSpawned
`public void OnLocationCharacterAgentSpawned(LocationCharacterAgentSpawnedMissionEvent locationCharacterAgentSpawnedEvent)`

**用途 / Purpose:** 当 `location character agent spawned` 事件触发时调用此方法。

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `agent interaction` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** 处理 `is there agent action` 相关逻辑。

### OnCheckpointLoadedEvent
`public void OnCheckpointLoadedEvent(CheckpointLoadedMissionEvent checkpointLoadedMissionEvent)`

**用途 / Purpose:** 当 `checkpoint loaded event` 事件触发时调用此方法。

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**用途 / Purpose:** 处理 `start spawner` 相关逻辑。

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**用途 / Purpose:** 处理 `stop spawner` 相关逻辑。

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**用途 / Purpose:** 处理 `is side spawn enabled` 相关逻辑。

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 处理 `is side depleted` 相关逻辑。

### GetReinforcementInterval
`public float GetReinforcementInterval()`

**用途 / Purpose:** 获取 `reinforcement interval` 的当前值。

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `all troops for side` 的当前值。

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 获取 `number of player controllable troops` 的当前值。

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**用途 / Purpose:** 获取 `spawn horses` 的当前值。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new StealthPatrolPointMissionLogic());
```

## 参见

- [完整类目录](../catalog)