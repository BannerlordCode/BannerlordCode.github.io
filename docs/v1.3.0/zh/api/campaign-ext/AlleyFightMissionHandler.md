<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AlleyFightMissionHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AlleyFightMissionHandler

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox.Missions
**Type:** `public class AlleyFightMissionHandler : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs`

## 概述

`AlleyFightMissionHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `AlleyFightMissionHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**用途 / Purpose:** 当 `end mission request` 事件触发时调用此方法。

### OnRetreatMission
`public override void OnRetreatMission()`

**用途 / Purpose:** 当 `retreat mission` 事件触发时调用此方法。

### OnRenderingStarted
`public override void OnRenderingStarted()`

**用途 / Purpose:** 当 `rendering started` 事件触发时调用此方法。

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
Mission.Current.AddMissionBehavior(new AlleyFightMissionHandler());
```

## 参见

- [完整类目录](../catalog)