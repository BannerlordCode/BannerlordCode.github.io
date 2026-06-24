<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HideoutMissionController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutMissionController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutMissionController.cs`

## 概述

`HideoutMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `HideoutMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopSpawningActive` | `public bool TroopSpawningActive { get; }` |
| `NumberOfActiveTroops` | `public int NumberOfActiveTroops { get; }` |
| `NumberOfTroopsNotSupplied` | `public int NumberOfTroopsNotSupplied { get; }` |

## 主要方法

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 当 `created` 事件触发时调用此方法。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnObjectStoppedBeingUsed
`public override void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 当 `object stopped being used` 事件触发时调用此方法。

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)`

**用途 / Purpose:** 当 `agent alarmed state changed` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**用途 / Purpose:** 处理 `start spawner` 相关逻辑。

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**用途 / Purpose:** 处理 `stop spawner` 相关逻辑。

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**用途 / Purpose:** 处理 `is side spawn enabled` 相关逻辑。

### GetReinforcementInterval
`public float GetReinforcementInterval()`

**用途 / Purpose:** 获取 `reinforcement interval` 的当前值。

### IsSideDepleted
`public unsafe bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 处理 `is side depleted` 相关逻辑。

### StartBossFightDuelMode
`public static void StartBossFightDuelMode()`

**用途 / Purpose:** 处理 `start boss fight duel mode` 相关逻辑。

### StartBossFightBattleMode
`public static void StartBossFightBattleMode()`

**用途 / Purpose:** 处理 `start boss fight battle mode` 相关逻辑。

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `all troops for side` 的当前值。

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 获取 `number of player controllable troops` 的当前值。

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**用途 / Purpose:** 获取 `spawn horses` 的当前值。

### SpawnTroops
`public void SpawnTroops(List<CommonAreaMarker> areaMarkers, List<PatrolArea> patrolAreas, Dictionary<Agent, HideoutMissionController.UsedObject> defenderAgentObjects, int spawnCount)`

**用途 / Purpose:** 处理 `spawn troops` 相关逻辑。

### SpawnRemainingTroopsForBossFight
`public void SpawnRemainingTroopsForBossFight(List<MatrixFrame> spawnFrames, int spawnCount)`

**用途 / Purpose:** 处理 `spawn remaining troops for boss fight` 相关逻辑。

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**用途 / Purpose:** 设置 `spawn troops` 的值或状态。

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**用途 / Purpose:** 获取 `all troops` 的当前值。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutMissionController>();
```

## 参见

- [完整类目录](../catalog)