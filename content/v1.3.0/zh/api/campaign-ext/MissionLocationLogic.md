---
title: "MissionLocationLogic"
description: "MissionLocationLogic 的自动生成类参考。"
---
# MissionLocationLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionLocationLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionLocationLogic.cs`

## 概述

`MissionLocationLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionLocationLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EarlyStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionLocationLogic 实例
MissionLocationLogic missionLocationLogic = ...;
missionLocationLogic.EarlyStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLocationLogic 实例
MissionLocationLogic missionLocationLogic = ...;
missionLocationLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** **用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLocationLogic 实例
MissionLocationLogic missionLocationLogic = ...;
missionLocationLogic.OnRemoveBehavior();
```

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** **用途 / Purpose:** 在 created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLocationLogic 实例
MissionLocationLogic missionLocationLogic = ...;
missionLocationLogic.OnCreated();
```

### SpawnCharactersAccompanyingPlayer
`public void SpawnCharactersAccompanyingPlayer(bool noHorse)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SpawnCharactersAccompanyingPlayer 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionLocationLogic 实例
MissionLocationLogic missionLocationLogic = ...;
missionLocationLogic.SpawnCharactersAccompanyingPlayer(false);
```

### GetSpawnFrameOfPassage
`public MatrixFrame GetSpawnFrameOfPassage(Location location)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 spawn frame of passage 的结果。

```csharp
// 先通过子系统 API 拿到 MissionLocationLogic 实例
MissionLocationLogic missionLocationLogic = ...;
var result = missionLocationLogic.GetSpawnFrameOfPassage(location);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionLocationLogic>();
```

## 参见

- [本区域目录](../)