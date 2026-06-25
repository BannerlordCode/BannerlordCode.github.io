---
title: "WhileEnteringSettlementBattleMissionController"
description: "WhileEnteringSettlementBattleMissionController 的自动生成类参考。"
---
# WhileEnteringSettlementBattleMissionController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class WhileEnteringSettlementBattleMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/WhileEnteringSettlementBattleMissionController.cs`

## 概述

`WhileEnteringSettlementBattleMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `WhileEnteringSettlementBattleMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WhileEnteringSettlementBattleMissionController 实例
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
whileEnteringSettlementBattleMissionController.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WhileEnteringSettlementBattleMissionController 实例
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
whileEnteringSettlementBattleMissionController.OnMissionTick(0);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**用途 / Purpose:** 启动spawner流程或状态机。

```csharp
// 先通过子系统 API 拿到 WhileEnteringSettlementBattleMissionController 实例
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
whileEnteringSettlementBattleMissionController.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**用途 / Purpose:** 停止spawner流程或状态机。

```csharp
// 先通过子系统 API 拿到 WhileEnteringSettlementBattleMissionController 实例
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
whileEnteringSettlementBattleMissionController.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 side spawn enabled 状态或条件。

```csharp
// 先通过子系统 API 拿到 WhileEnteringSettlementBattleMissionController 实例
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
var result = whileEnteringSettlementBattleMissionController.IsSideSpawnEnabled(side);
```

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = (BattleSideEnum)(-1))`

**用途 / Purpose:** 读取并返回当前对象中 reinforcement interval 的结果。

```csharp
// 先通过子系统 API 拿到 WhileEnteringSettlementBattleMissionController 实例
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
var result = whileEnteringSettlementBattleMissionController.GetReinforcementInterval((BattleSideEnum)(-1));
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 side depleted 状态或条件。

```csharp
// 先通过子系统 API 拿到 WhileEnteringSettlementBattleMissionController 实例
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
var result = whileEnteringSettlementBattleMissionController.IsSideDepleted(side);
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 all troops for side 的结果。

```csharp
// 先通过子系统 API 拿到 WhileEnteringSettlementBattleMissionController 实例
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
var result = whileEnteringSettlementBattleMissionController.GetAllTroopsForSide(side);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 读取并返回当前对象中 number of player controllable troops 的结果。

```csharp
// 先通过子系统 API 拿到 WhileEnteringSettlementBattleMissionController 实例
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
var result = whileEnteringSettlementBattleMissionController.GetNumberOfPlayerControllableTroops();
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 spawn horses 的结果。

```csharp
// 先通过子系统 API 拿到 WhileEnteringSettlementBattleMissionController 实例
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
var result = whileEnteringSettlementBattleMissionController.GetSpawnHorses(side);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<WhileEnteringSettlementBattleMissionController>();
```

## 参见

- [本区域目录](../)