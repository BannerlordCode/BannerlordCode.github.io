---
title: "LordsHallFightMissionController"
description: "LordsHallFightMissionController 的自动生成类参考。"
---
# LordsHallFightMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LordsHallFightMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions.Handlers/LordsHallFightMissionController.cs`

## 概述

`LordsHallFightMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `LordsHallFightMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `UserAgent` | `public Agent UserAgent { get; }` |
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |

## 主要方法

### SpawnTroops
`public void SpawnTroops(Dictionary<int, Dictionary<int, AreaData>> areaMarkerDictionary, int spawnCount)`

**用途 / Purpose:** 处理与 「spawn troops」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.SpawnTroops(dictionary<int, dictionary<int, areaMarkerDictionary, 0);
```

### SpawnTroops
`public void SpawnTroops(int spawnCount, bool isReinforcement)`

**用途 / Purpose:** 处理与 「spawn troops」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.SpawnTroops(0, false);
```

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**用途 / Purpose:** 为 「spawn troops」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.SetSpawnTroops(false);
```

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**用途 / Purpose:** 读取并返回当前对象中 「all troops」 的结果。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.GetAllTroops();
```

### GetAvailableMachines
`public IEnumerable<AreaEntityData> GetAvailableMachines(bool isArcher)`

**用途 / Purpose:** 读取并返回当前对象中 「available machines」 的结果。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.GetAvailableMachines(false);
```

### AddAreaMarker
`public void AddAreaMarker(FightAreaMarker marker)`

**用途 / Purpose:** 将 「area marker」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.AddAreaMarker(marker);
```

### FindAgentMachine
`public AreaEntityData FindAgentMachine(Agent agent)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「agent machine」。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.FindAgentMachine(agent);
```

### AssignAgent
`public void AssignAgent(Agent agent)`

**用途 / Purpose:** 处理与 「assign agent」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.AssignAgent(agent);
```

### StopUse
`public void StopUse()`

**用途 / Purpose:** 停止「use」流程或状态机。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.StopUse();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.OnBehaviorInitialize();
```

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

**用途 / Purpose:** 在 「mission state finalized」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.OnMissionStateFinalized();
```

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 在 「created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.OnCreated();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**用途 / Purpose:** 启动「spawner」流程或状态机。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**用途 / Purpose:** 停止「spawner」流程或状态机。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 「side spawn enabled」 状态或条件。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.IsSideSpawnEnabled(side);
```

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)`

**用途 / Purpose:** 读取并返回当前对象中 「reinforcement interval」 的结果。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.GetReinforcementInterval(battleSideEnum.None);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 「side depleted」 状态或条件。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.IsSideDepleted(side);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 读取并返回当前对象中 「number of player controllable troops」 的结果。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.GetNumberOfPlayerControllableTroops();
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「all troops for side」 的结果。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.GetAllTroopsForSide(side);
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「spawn horses」 的结果。

```csharp
// 先通过子系统 API 拿到 LordsHallFightMissionController 实例
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.GetSpawnHorses(side);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<LordsHallFightMissionController>();
```

## 参见

- [本区域目录](../)