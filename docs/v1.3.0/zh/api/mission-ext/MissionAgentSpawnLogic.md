<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionAgentSpawnLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentSpawnLogic : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionAgentSpawnLogic.cs`

## 概述

`MissionAgentSpawnLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionAgentSpawnLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxNumberOfAgentsForMission` | `public static int MaxNumberOfAgentsForMission { get; }` |
| `NumberOfAgents` | `public int NumberOfAgents { get; }` |
| `NumberOfRemainingTroops` | `public int NumberOfRemainingTroops { get; }` |
| `NumberOfActiveDefenderTroops` | `public int NumberOfActiveDefenderTroops { get; }` |
| `NumberOfActiveAttackerTroops` | `public int NumberOfActiveAttackerTroops { get; }` |
| `NumberOfRemainingDefenderTroops` | `public int NumberOfRemainingDefenderTroops { get; }` |
| `NumberOfRemainingAttackerTroops` | `public int NumberOfRemainingAttackerTroops { get; }` |
| `BattleSize` | `public int BattleSize { get; }` |
| `IsInitialSpawnOver` | `public bool IsInitialSpawnOver { get; }` |
| `IsDeploymentOver` | `public bool IsDeploymentOver { get; }` |
| `ReinforcementSpawnSettings` | `public ref readonly MissionSpawnSettings ReinforcementSpawnSettings { get; }` |
| `NumTroops` | `public int NumTroops { get; }` |
| `TroopSpawnActive` | `public bool TroopSpawnActive { get; }` |
| `IsPlayerSide` | `public bool IsPlayerSide { get; }` |
| `ReinforcementSpawnActive` | `public bool ReinforcementSpawnActive { get; }` |
| `SpawnWithHorses` | `public bool SpawnWithHorses { get; }` |
| `ReinforcementsNotifiedOnLastBatch` | `public bool ReinforcementsNotifiedOnLastBatch { get; }` |
| `NumberOfActiveTroops` | `public int NumberOfActiveTroops { get; }` |
| `ReinforcementQuotaRequirement` | `public int ReinforcementQuotaRequirement { get; }` |
| `ReinforcementsSpawnedInLastBatch` | `public int ReinforcementsSpawnedInLastBatch { get; }` |
| `ReinforcementBatchSize` | `public float ReinforcementBatchSize { get; }` |
| `HasReservedTroops` | `public bool HasReservedTroops { get; }` |
| `ReinforcementBatchPriority` | `public float ReinforcementBatchPriority { get; }` |
| `ReservedTroopsCount` | `public int ReservedTroopsCount { get; }` |
| `HasSpawnableReinforcements` | `public bool HasSpawnableReinforcements { get; }` |

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 获取 `number of player controllable troops` 的当前值。

### InitWithSinglePhase
`public void InitWithSinglePhase(int defenderTotalSpawn, int attackerTotalSpawn, int defenderInitialSpawn, int attackerInitialSpawn, bool spawnDefenders, bool spawnAttackers, in MissionSpawnSettings spawnSettings)`

**用途 / Purpose:** 初始化 `with single phase` 的状态、资源或绑定。

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `all troops for side` 的当前值。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### SetCustomReinforcementSpawnTimer
`public void SetCustomReinforcementSpawnTimer(ICustomReinforcementSpawnTimer timer)`

**用途 / Purpose:** 设置 `custom reinforcement spawn timer` 的值或状态。

### SetSpawnTroops
`public void SetSpawnTroops(BattleSideEnum side, bool spawnTroops, bool enforceSpawning = false)`

**用途 / Purpose:** 设置 `spawn troops` 的值或状态。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### SetSpawnHorses
`public void SetSpawnHorses(BattleSideEnum side, bool spawnHorses)`

**用途 / Purpose:** 设置 `spawn horses` 的值或状态。

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**用途 / Purpose:** 处理 `start spawner` 相关逻辑。

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**用途 / Purpose:** 处理 `stop spawner` 相关逻辑。

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**用途 / Purpose:** 处理 `is side spawn enabled` 相关逻辑。

### OnSideDeploymentOver
`public void OnSideDeploymentOver(BattleSideEnum battleSide)`

**用途 / Purpose:** 当 `side deployment over` 事件触发时调用此方法。

### GetReinforcementInterval
`public float GetReinforcementInterval()`

**用途 / Purpose:** 获取 `reinforcement interval` 的当前值。

### SetReinforcementsSpawnEnabled
`public void SetReinforcementsSpawnEnabled(bool value, bool resetTimers = true)`

**用途 / Purpose:** 设置 `reinforcements spawn enabled` 的值或状态。

### GetTotalNumberOfTroopsForSide
`public int GetTotalNumberOfTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `total number of troops for side` 的当前值。

### GetGeneralCharacterOfSide
`public BasicCharacterObject GetGeneralCharacterOfSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `general character of side` 的当前值。

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**用途 / Purpose:** 获取 `spawn horses` 的当前值。

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 处理 `is side depleted` 相关逻辑。

### AddPhaseChangeAction
`public void AddPhaseChangeAction(BattleSideEnum side, MissionAgentSpawnLogic.OnPhaseChangedDelegate onPhaseChanged)`

**用途 / Purpose:** 向当前集合/状态中添加 `phase change action`。

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 获取 `number of player controllable troops` 的当前值。

### TryReinforcementSpawn
`public int TryReinforcementSpawn()`

**用途 / Purpose:** 尝试获取 `reinforcement spawn`，通常以 out 参数返回结果。

### GetTeamFormationsSpawnData
`public void GetTeamFormationsSpawnData( { "team", "formationSpawnData" })`

**用途 / Purpose:** 获取 `team formations spawn data` 的当前值。

### ReserveTroops
`public void ReserveTroops(int number)`

**用途 / Purpose:** 处理 `reserve troops` 相关逻辑。

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**用途 / Purpose:** 获取 `general character` 的当前值。

### CheckReinforcementBatch
`public unsafe bool CheckReinforcementBatch()`

**用途 / Purpose:** 处理 `check reinforcement batch` 相关逻辑。

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**用途 / Purpose:** 获取 `all troops` 的当前值。

### SpawnTroops
`public int SpawnTroops(int number, bool isReinforcement)`

**用途 / Purpose:** 处理 `spawn troops` 相关逻辑。

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool spawnWithHorses)`

**用途 / Purpose:** 设置 `spawn with horses` 的值或状态。

### SetBannerBearerLogic
`public void SetBannerBearerLogic(BannerBearerLogic bannerBearerLogic)`

**用途 / Purpose:** 设置 `banner bearer logic` 的值或状态。

### SetReinforcementsNotifiedOnLastBatch
`public void SetReinforcementsNotifiedOnLastBatch(bool value)`

**用途 / Purpose:** 设置 `reinforcements notified on last batch` 的值或状态。

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**用途 / Purpose:** 设置 `spawn troops` 的值或状态。

### OnInitialSpawnOver
`public void OnInitialSpawnOver()`

**用途 / Purpose:** 当 `initial spawn over` 事件触发时调用此方法。

### OnInitialTroopsSpawned
`public void OnInitialTroopsSpawned()`

**用途 / Purpose:** 当 `initial troops spawned` 事件触发时调用此方法。

### OnPhaseChangedDelegate
`public delegate void OnPhaseChangedDelegate()`

**用途 / Purpose:** 当 `phase changed delegate` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionAgentSpawnLogic());
```

## 参见

- [完整类目录](../catalog)