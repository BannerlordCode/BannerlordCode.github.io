---
title: "DefaultBattleMissionAgentSpawnLogic"
description: "DefaultBattleMissionAgentSpawnLogic 的自动生成类参考。"
---
# DefaultBattleMissionAgentSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultBattleMissionAgentSpawnLogic : MissionLogic, IBattleMissionAgentSpawnLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs`

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

**用途 / Purpose:** 在 「phase changed delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.OnPhaseChangedDelegate();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.OnMissionTick(0);
```

### InitWithSinglePhase
`public void InitWithSinglePhase(int defenderTotalSpawn, int attackerTotalSpawn, int defenderInitialSpawn, int attackerInitialSpawn, bool spawnDefenders, bool spawnAttackers, in MissionSpawnSettings spawnSettings)`

**用途 / Purpose:** 为 「with single phase」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.InitWithSinglePhase(0, 0, 0, 0, false, false, spawnSettings);
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「all troops for side」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.GetAllTroopsForSide(side);
```

### SetCustomReinforcementSpawnTimer
`public void SetCustomReinforcementSpawnTimer(ICustomReinforcementSpawnTimer timer)`

**用途 / Purpose:** 为 「custom reinforcement spawn timer」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.SetCustomReinforcementSpawnTimer(timer);
```

### SetSpawnTroops
`public void SetSpawnTroops(BattleSideEnum side, bool spawnTroops, bool enforceSpawning = false)`

**用途 / Purpose:** 为 「spawn troops」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.SetSpawnTroops(side, false, false);
```

### SetSpawnHorses
`public void SetSpawnHorses(BattleSideEnum side, bool spawnHorses)`

**用途 / Purpose:** 为 「spawn horses」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.SetSpawnHorses(side, false);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**用途 / Purpose:** 启动「spawner」流程或状态机。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**用途 / Purpose:** 停止「spawner」流程或状态机。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 「side spawn enabled」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.IsSideSpawnEnabled(side);
```

### OnSideDeploymentOver
`public void OnSideDeploymentOver(BattleSideEnum battleSide)`

**用途 / Purpose:** 在 「side deployment over」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.OnSideDeploymentOver(battleSide);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 读取并返回当前对象中 「number of player controllable troops」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.GetNumberOfPlayerControllableTroops();
```

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)`

**用途 / Purpose:** 读取并返回当前对象中 「reinforcement interval」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.GetReinforcementInterval(battleSideEnum.None);
```

### SetReinforcementsSpawnEnabled
`public void SetReinforcementsSpawnEnabled(bool value, bool resetTimers = true)`

**用途 / Purpose:** 为 「reinforcements spawn enabled」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.SetReinforcementsSpawnEnabled(false, false);
```

### GetTotalNumberOfTroopsForSide
`public int GetTotalNumberOfTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「total number of troops for side」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.GetTotalNumberOfTroopsForSide(side);
```

### GetGeneralCharacterOfSide
`public BasicCharacterObject GetGeneralCharacterOfSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「general character of side」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.GetGeneralCharacterOfSide(side);
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「spawn horses」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.GetSpawnHorses(side);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 「side depleted」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.IsSideDepleted(side);
```

### AddPhaseChangeAction
`public void AddPhaseChangeAction(BattleSideEnum side, OnPhaseChangedDelegate onPhaseChanged)`

**用途 / Purpose:** 将 「phase change action」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 DefaultBattleMissionAgentSpawnLogic 实例
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.AddPhaseChangeAction(side, onPhaseChanged);
```

### ComputeDeploymentBaseOffsets
`public static void ComputeDeploymentBaseOffsets(SpawnPathData sideSpawnPathData, float baseDeploymentOffset, out float deployingSideBaseOffset, out float opposingSideBaseOffset)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
DefaultBattleMissionAgentSpawnLogic.ComputeDeploymentBaseOffsets(sideSpawnPathData, 0, deployingSideBaseOffset, opposingSideBaseOffset);
```

### ComputeTeamDeploymentOffsets
`public static void ComputeTeamDeploymentOffsets(SpawnPathData spawnPathData, float deploymentBaseOffset, float interTeamGapOffset, float teamOffsetRanges, out float teamDeployOffsets)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
DefaultBattleMissionAgentSpawnLogic.ComputeTeamDeploymentOffsets(spawnPathData, 0, 0, 0, teamDeployOffsets);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<DefaultBattleMissionAgentSpawnLogic>();
```

## 参见

- [本区域目录](../)