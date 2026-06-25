---
title: "AlleyFightMissionHandler"
description: "AlleyFightMissionHandler 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 调用 EarlyStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 AlleyFightMissionHandler 实例
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.EarlyStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AlleyFightMissionHandler 实例
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 AlleyFightMissionHandler 实例
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.AfterStart();
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**用途 / Purpose:** **用途 / Purpose:** 在 end mission request 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AlleyFightMissionHandler 实例
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.OnEndMissionRequest(canLeave);
```

### OnRetreatMission
`public override void OnRetreatMission()`

**用途 / Purpose:** **用途 / Purpose:** 在 retreat mission 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AlleyFightMissionHandler 实例
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.OnRetreatMission();
```

### OnRenderingStarted
`public override void OnRenderingStarted()`

**用途 / Purpose:** **用途 / Purpose:** 在 rendering started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AlleyFightMissionHandler 实例
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.OnRenderingStarted();
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 启动spawner流程或状态机。

```csharp
// 先通过子系统 API 拿到 AlleyFightMissionHandler 实例
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 停止spawner流程或状态机。

```csharp
// 先通过子系统 API 拿到 AlleyFightMissionHandler 实例
AlleyFightMissionHandler alleyFightMissionHandler = ...;
alleyFightMissionHandler.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 side spawn enabled 状态或条件。

```csharp
// 先通过子系统 API 拿到 AlleyFightMissionHandler 实例
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.IsSideSpawnEnabled(side);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 side depleted 状态或条件。

```csharp
// 先通过子系统 API 拿到 AlleyFightMissionHandler 实例
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.IsSideDepleted(side);
```

### GetReinforcementInterval
`public float GetReinforcementInterval()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 reinforcement interval 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyFightMissionHandler 实例
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.GetReinforcementInterval();
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 all troops for side 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyFightMissionHandler 实例
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.GetAllTroopsForSide(side);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 number of player controllable troops 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyFightMissionHandler 实例
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.GetNumberOfPlayerControllableTroops();
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 spawn horses 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyFightMissionHandler 实例
AlleyFightMissionHandler alleyFightMissionHandler = ...;
var result = alleyFightMissionHandler.GetSpawnHorses(side);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<AlleyFightMissionHandler>();
```

## 参见

- [本区域目录](../)