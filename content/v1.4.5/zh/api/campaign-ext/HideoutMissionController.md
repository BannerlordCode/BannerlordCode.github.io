---
title: "HideoutMissionController"
description: "HideoutMissionController 的自动生成类参考。"
---
# HideoutMissionController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutMissionController.cs`

## 概述

`HideoutMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `HideoutMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopSpawningActive` | `public bool TroopSpawningActive { get; }` |
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |

## 主要方法

### SpawnTroops
`public void SpawnTroops(List<CommonAreaMarker> areaMarkers, List<PatrolArea> patrolAreas, Dictionary<Agent, UsedObject> defenderAgentObjects, int spawnCount)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.SpawnTroops(areaMarkers, patrolAreas, dictionary<Agent, defenderAgentObjects, 0);
```

### SpawnRemainingTroopsForBossFight
`public void SpawnRemainingTroopsForBossFight(List<MatrixFrame> spawnFrames, int spawnCount, CharacterObject overriddenHideoutBossCharacterObject)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.SpawnRemainingTroopsForBossFight(spawnFrames, 0, overriddenHideoutBossCharacterObject);
```

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**用途 / Purpose:** 为 「spawn troops」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.SetSpawnTroops(false);
```

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**用途 / Purpose:** 读取并返回当前对象中 「all troops」 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
var result = hideoutMissionController.GetAllTroops();
```

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 在 「created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.OnCreated();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.OnBehaviorInitialize();
```

### OnObjectStoppedBeingUsed
`public override void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 在 「object stopped being used」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.OnObjectStoppedBeingUsed(userAgent, usedObject);
```

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, AIStateFlag flag)`

**用途 / Purpose:** 在 「agent alarmed state changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.OnAgentAlarmedStateChanged(agent, flag);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

**用途 / Purpose:** 在 「mission state finalized」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.OnMissionStateFinalized();
```

### SetOverriddenHideoutBossCharacterObject
`public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)`

**用途 / Purpose:** 为 「overridden hideout boss character object」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.SetOverriddenHideoutBossCharacterObject(characterObject);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**用途 / Purpose:** 启动「spawner」流程或状态机。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**用途 / Purpose:** 停止「spawner」流程或状态机。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 「side spawn enabled」 状态或条件。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
var result = hideoutMissionController.IsSideSpawnEnabled(side);
```

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum battleSide = (BattleSideEnum)(-1))`

**用途 / Purpose:** 读取并返回当前对象中 「reinforcement interval」 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
var result = hideoutMissionController.GetReinforcementInterval((BattleSideEnum)(-1));
```

### IsSideDepleted
`public unsafe bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 「side depleted」 状态或条件。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
var result = hideoutMissionController.IsSideDepleted(side);
```

### StartBossFightDuelMode
`public static void StartBossFightDuelMode()`

**用途 / Purpose:** 启动「boss fight duel mode」流程或状态机。

```csharp
// 静态调用，不需要实例
HideoutMissionController.StartBossFightDuelMode();
```

### StartBossFightBattleMode
`public static void StartBossFightBattleMode()`

**用途 / Purpose:** 启动「boss fight battle mode」流程或状态机。

```csharp
// 静态调用，不需要实例
HideoutMissionController.StartBossFightBattleMode();
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「all troops for side」 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
var result = hideoutMissionController.GetAllTroopsForSide(side);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 读取并返回当前对象中 「number of player controllable troops」 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
var result = hideoutMissionController.GetNumberOfPlayerControllableTroops();
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「spawn horses」 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutMissionController 实例
HideoutMissionController hideoutMissionController = ...;
var result = hideoutMissionController.GetSpawnHorses(side);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutMissionController>();
```

## 参见

- [本区域目录](../)