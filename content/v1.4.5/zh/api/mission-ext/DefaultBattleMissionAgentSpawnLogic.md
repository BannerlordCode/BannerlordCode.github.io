---
title: "DefaultBattleMissionAgentSpawnLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBattleMissionAgentSpawnLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultBattleMissionAgentSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultBattleMissionAgentSpawnLogic : MissionLogic, IBattleMissionAgentSpawnLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs`

## 概述

`DefaultBattleMissionAgentSpawnLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `DefaultBattleMissionAgentSpawnLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxNumberOfAgentsForMission` | `public static int MaxNumberOfAgentsForMission { get; }` |
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |
| `IsDeploymentOver` | `public bool IsDeploymentOver { get; }` |

## 主要方法

### OnPhaseChangedDelegate
`public delegate void OnPhaseChangedDelegate()`

**用途 / Purpose:** 当 `phase changed delegate` 事件触发时调用此方法。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### InitWithSinglePhase
`public void InitWithSinglePhase(int defenderTotalSpawn, int attackerTotalSpawn, int defenderInitialSpawn, int attackerInitialSpawn, bool spawnDefenders, bool spawnAttackers, in MissionSpawnSettings spawnSettings)`

**用途 / Purpose:** 初始化 `with single phase` 的状态、资源或绑定。

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `all troops for side` 的当前值。

### SetCustomReinforcementSpawnTimer
`public void SetCustomReinforcementSpawnTimer(ICustomReinforcementSpawnTimer timer)`

**用途 / Purpose:** 设置 `custom reinforcement spawn timer` 的值或状态。

### SetSpawnTroops
`public void SetSpawnTroops(BattleSideEnum side, bool spawnTroops, bool enforceSpawning = false)`

**用途 / Purpose:** 设置 `spawn troops` 的值或状态。

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

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 获取 `number of player controllable troops` 的当前值。

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)`

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
`public void AddPhaseChangeAction(BattleSideEnum side, OnPhaseChangedDelegate onPhaseChanged)`

**用途 / Purpose:** 向当前集合/状态中添加 `phase change action`。

### ComputeDeploymentBaseOffsets
`public static void ComputeDeploymentBaseOffsets(SpawnPathData sideSpawnPathData, float baseDeploymentOffset, out float deployingSideBaseOffset, out float opposingSideBaseOffset)`

**用途 / Purpose:** 处理 `compute deployment base offsets` 相关逻辑。

### ComputeTeamDeploymentOffsets
`public static void ComputeTeamDeploymentOffsets(SpawnPathData spawnPathData, float deploymentBaseOffset, float interTeamGapOffset, float teamOffsetRanges, out float teamDeployOffsets)`

**用途 / Purpose:** 处理 `compute team deployment offsets` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new DefaultBattleMissionAgentSpawnLogic());
```

## 参见

- [完整类目录](../catalog)