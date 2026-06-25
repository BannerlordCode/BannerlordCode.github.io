---
title: "LordsHallFightMissionController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LordsHallFightMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LordsHallFightMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LordsHallFightMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs`

## 概述

`LordsHallFightMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `LordsHallFightMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopSpawningActive` | `public bool TroopSpawningActive { get; }` |
| `NumberOfActiveTroops` | `public int NumberOfActiveTroops { get; }` |
| `AreaList` | `public IEnumerable<FightAreaMarker> AreaList { get; }` |
| `ArcherUsablePoints` | `public IEnumerable<LordsHallFightMissionController.AreaEntityData> ArcherUsablePoints { get; }` |
| `InfantryUsablePoints` | `public IEnumerable<LordsHallFightMissionController.AreaEntityData> InfantryUsablePoints { get; }` |
| `UserAgent` | `public Agent UserAgent { get; }` |
| `InUse` | `public bool InUse { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

**用途 / Purpose:** 当 `mission state finalized` 事件触发时调用此方法。

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 当 `created` 事件触发时调用此方法。

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
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 处理 `is side depleted` 相关逻辑。

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 获取 `number of player controllable troops` 的当前值。

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `all troops for side` 的当前值。

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**用途 / Purpose:** 获取 `spawn horses` 的当前值。

### SpawnTroops
`public void SpawnTroops(Dictionary<int, Dictionary<int, LordsHallFightMissionController.AreaData>> areaMarkerDictionary, int spawnCount)`

**用途 / Purpose:** 处理 `spawn troops` 相关逻辑。

### SpawnTroops
`public void SpawnTroops(int spawnCount, bool isReinforcement)`

**用途 / Purpose:** 处理 `spawn troops` 相关逻辑。

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**用途 / Purpose:** 设置 `spawn troops` 的值或状态。

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**用途 / Purpose:** 获取 `all troops` 的当前值。

### GetAvailableMachines
`public IEnumerable<LordsHallFightMissionController.AreaEntityData> GetAvailableMachines(bool isArcher)`

**用途 / Purpose:** 获取 `available machines` 的当前值。

### AddAreaMarker
`public void AddAreaMarker(FightAreaMarker marker)`

**用途 / Purpose:** 向当前集合/状态中添加 `area marker`。

### FindAgentMachine
`public LordsHallFightMissionController.AreaEntityData FindAgentMachine(Agent agent)`

**用途 / Purpose:** 处理 `find agent machine` 相关逻辑。

### AssignAgent
`public void AssignAgent(Agent agent)`

**用途 / Purpose:** 处理 `assign agent` 相关逻辑。

### StopUse
`public void StopUse()`

**用途 / Purpose:** 处理 `stop use` 相关逻辑。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<LordsHallFightMissionController>();
```

## 参见

- [完整类目录](../catalog)