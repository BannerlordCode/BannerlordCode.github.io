---
title: "MissionAgentSpawnLogic"
description: "MissionAgentSpawnLogic 的自动生成类参考。"
---
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

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.AfterStart();
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 读取并返回当前对象中 number of player controllable troops 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetNumberOfPlayerControllableTroops();
```

### InitWithSinglePhase
`public void InitWithSinglePhase(int defenderTotalSpawn, int attackerTotalSpawn, int defenderInitialSpawn, int attackerInitialSpawn, bool spawnDefenders, bool spawnAttackers, in MissionSpawnSettings spawnSettings)`

**用途 / Purpose:** 为 with single phase 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.InitWithSinglePhase(0, 0, 0, 0, false, false, spawnSettings);
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 all troops for side 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetAllTroopsForSide(side);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnMissionTick(0);
```

### SetCustomReinforcementSpawnTimer
`public void SetCustomReinforcementSpawnTimer(ICustomReinforcementSpawnTimer timer)`

**用途 / Purpose:** 为 custom reinforcement spawn timer 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetCustomReinforcementSpawnTimer(timer);
```

### SetSpawnTroops
`public void SetSpawnTroops(BattleSideEnum side, bool spawnTroops, bool enforceSpawning = false)`

**用途 / Purpose:** 为 spawn troops 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetSpawnTroops(side, false, false);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnBehaviorInitialize();
```

### SetSpawnHorses
`public void SetSpawnHorses(BattleSideEnum side, bool spawnHorses)`

**用途 / Purpose:** 为 spawn horses 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetSpawnHorses(side, false);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**用途 / Purpose:** 启动spawner流程或状态机。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**用途 / Purpose:** 停止spawner流程或状态机。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 side spawn enabled 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.IsSideSpawnEnabled(side);
```

### OnSideDeploymentOver
`public void OnSideDeploymentOver(BattleSideEnum battleSide)`

**用途 / Purpose:** 在 side deployment over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnSideDeploymentOver(battleSide);
```

### GetReinforcementInterval
`public float GetReinforcementInterval()`

**用途 / Purpose:** 读取并返回当前对象中 reinforcement interval 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetReinforcementInterval();
```

### SetReinforcementsSpawnEnabled
`public void SetReinforcementsSpawnEnabled(bool value, bool resetTimers = true)`

**用途 / Purpose:** 为 reinforcements spawn enabled 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetReinforcementsSpawnEnabled(false, false);
```

### GetTotalNumberOfTroopsForSide
`public int GetTotalNumberOfTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 total number of troops for side 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetTotalNumberOfTroopsForSide(side);
```

### GetGeneralCharacterOfSide
`public BasicCharacterObject GetGeneralCharacterOfSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 general character of side 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetGeneralCharacterOfSide(side);
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 spawn horses 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetSpawnHorses(side);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 side depleted 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.IsSideDepleted(side);
```

### AddPhaseChangeAction
`public void AddPhaseChangeAction(BattleSideEnum side, MissionAgentSpawnLogic.OnPhaseChangedDelegate onPhaseChanged)`

**用途 / Purpose:** 将 phase change action 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.AddPhaseChangeAction(side, onPhaseChanged);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 读取并返回当前对象中 number of player controllable troops 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetNumberOfPlayerControllableTroops();
```

### TryReinforcementSpawn
`public int TryReinforcementSpawn()`

**用途 / Purpose:** 尝试获取 reinforcement spawn 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.TryReinforcementSpawn();
```

### GetTeamFormationsSpawnData
`public void GetTeamFormationsSpawnData( { "team", "formationSpawnData" })`

**用途 / Purpose:** 读取并返回当前对象中 team formations spawn data 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.GetTeamFormationsSpawnData("team", });
```

### ReserveTroops
`public void ReserveTroops(int number)`

**用途 / Purpose:** 调用 ReserveTroops 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.ReserveTroops(0);
```

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**用途 / Purpose:** 读取并返回当前对象中 general character 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetGeneralCharacter();
```

### CheckReinforcementBatch
`public unsafe bool CheckReinforcementBatch()`

**用途 / Purpose:** 检查reinforcement batch在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.CheckReinforcementBatch();
```

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**用途 / Purpose:** 读取并返回当前对象中 all troops 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetAllTroops();
```

### SpawnTroops
`public int SpawnTroops(int number, bool isReinforcement)`

**用途 / Purpose:** 调用 SpawnTroops 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.SpawnTroops(0, false);
```

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool spawnWithHorses)`

**用途 / Purpose:** 为 spawn with horses 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetSpawnWithHorses(false);
```

### SetBannerBearerLogic
`public void SetBannerBearerLogic(BannerBearerLogic bannerBearerLogic)`

**用途 / Purpose:** 为 banner bearer logic 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetBannerBearerLogic(bannerBearerLogic);
```

### SetReinforcementsNotifiedOnLastBatch
`public void SetReinforcementsNotifiedOnLastBatch(bool value)`

**用途 / Purpose:** 为 reinforcements notified on last batch 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetReinforcementsNotifiedOnLastBatch(false);
```

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**用途 / Purpose:** 为 spawn troops 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetSpawnTroops(false);
```

### OnInitialSpawnOver
`public void OnInitialSpawnOver()`

**用途 / Purpose:** 在 initial spawn over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnInitialSpawnOver();
```

### OnInitialTroopsSpawned
`public void OnInitialTroopsSpawned()`

**用途 / Purpose:** 在 initial troops spawned 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnInitialTroopsSpawned();
```

### OnPhaseChangedDelegate
`public delegate void OnPhaseChangedDelegate()`

**用途 / Purpose:** 在 phase changed delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnPhaseChangedDelegate();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAgentSpawnLogic>();
```

## 参见

- [本区域目录](../)