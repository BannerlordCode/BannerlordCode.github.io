---
title: "StealthPatrolPointMissionLogic"
description: "StealthPatrolPointMissionLogic 的自动生成类参考。"
---
# StealthPatrolPointMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class StealthPatrolPointMissionLogic : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/StealthPatrolPointMissionLogic.cs`

## 概述

`StealthPatrolPointMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `StealthPatrolPointMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 StealthPatrolPointMissionLogic 实例
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
stealthPatrolPointMissionLogic.AfterStart();
```

### OnLocationCharacterAgentSpawned
`public void OnLocationCharacterAgentSpawned(LocationCharacterAgentSpawnedMissionEvent locationCharacterAgentSpawnedEvent)`

**用途 / Purpose:** 在 「location character agent spawned」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthPatrolPointMissionLogic 实例
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
stealthPatrolPointMissionLogic.OnLocationCharacterAgentSpawned(locationCharacterAgentSpawnedEvent);
```

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 「agent interaction」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthPatrolPointMissionLogic 实例
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
stealthPatrolPointMissionLogic.OnAgentInteraction(userAgent, agent, 0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthPatrolPointMissionLogic 实例
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
stealthPatrolPointMissionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** 判断当前对象是否处于 「there agent action」 状态或条件。

```csharp
// 先通过子系统 API 拿到 StealthPatrolPointMissionLogic 实例
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
var result = stealthPatrolPointMissionLogic.IsThereAgentAction(userAgent, otherAgent);
```

### OnCheckpointLoadedEvent
`public void OnCheckpointLoadedEvent(CheckpointLoadedMissionEvent checkpointLoadedMissionEvent)`

**用途 / Purpose:** 在 「checkpoint loaded event」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthPatrolPointMissionLogic 实例
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
stealthPatrolPointMissionLogic.OnCheckpointLoadedEvent(checkpointLoadedMissionEvent);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**用途 / Purpose:** 启动「spawner」流程或状态机。

```csharp
// 先通过子系统 API 拿到 StealthPatrolPointMissionLogic 实例
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
stealthPatrolPointMissionLogic.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**用途 / Purpose:** 停止「spawner」流程或状态机。

```csharp
// 先通过子系统 API 拿到 StealthPatrolPointMissionLogic 实例
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
stealthPatrolPointMissionLogic.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 「side spawn enabled」 状态或条件。

```csharp
// 先通过子系统 API 拿到 StealthPatrolPointMissionLogic 实例
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
var result = stealthPatrolPointMissionLogic.IsSideSpawnEnabled(side);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 「side depleted」 状态或条件。

```csharp
// 先通过子系统 API 拿到 StealthPatrolPointMissionLogic 实例
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
var result = stealthPatrolPointMissionLogic.IsSideDepleted(side);
```

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum battleSide = (BattleSideEnum)(-1))`

**用途 / Purpose:** 读取并返回当前对象中 「reinforcement interval」 的结果。

```csharp
// 先通过子系统 API 拿到 StealthPatrolPointMissionLogic 实例
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
var result = stealthPatrolPointMissionLogic.GetReinforcementInterval((BattleSideEnum)(-1));
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「all troops for side」 的结果。

```csharp
// 先通过子系统 API 拿到 StealthPatrolPointMissionLogic 实例
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
var result = stealthPatrolPointMissionLogic.GetAllTroopsForSide(side);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 读取并返回当前对象中 「number of player controllable troops」 的结果。

```csharp
// 先通过子系统 API 拿到 StealthPatrolPointMissionLogic 实例
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
var result = stealthPatrolPointMissionLogic.GetNumberOfPlayerControllableTroops();
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「spawn horses」 的结果。

```csharp
// 先通过子系统 API 拿到 StealthPatrolPointMissionLogic 实例
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
var result = stealthPatrolPointMissionLogic.GetSpawnHorses(side);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<StealthPatrolPointMissionLogic>();
```

## 参见

- [本区域目录](../)