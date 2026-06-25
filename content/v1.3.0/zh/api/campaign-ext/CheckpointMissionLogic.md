---
title: "CheckpointMissionLogic"
description: "CheckpointMissionLogic 的自动生成类参考。"
---
# CheckpointMissionLogic

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class CheckpointMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/CheckpointMissionLogic.cs`

## 概述

`CheckpointMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `CheckpointMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CheckpointMissionLogic 实例
CheckpointMissionLogic checkpointMissionLogic = ...;
checkpointMissionLogic.EarlyStart();
```

### OnRenderingStarted
`public override void OnRenderingStarted()`

**用途 / Purpose:** 在 「rendering started」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CheckpointMissionLogic 实例
CheckpointMissionLogic checkpointMissionLogic = ...;
checkpointMissionLogic.OnRenderingStarted();
```

### OnEarlyAgentRemoved
`public override void OnEarlyAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「early agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CheckpointMissionLogic 实例
CheckpointMissionLogic checkpointMissionLogic = ...;
checkpointMissionLogic.OnEarlyAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CheckpointMissionLogic 实例
CheckpointMissionLogic checkpointMissionLogic = ...;
checkpointMissionLogic.OnMissionTick(0);
```

### OnCheckpointUsed
`public void OnCheckpointUsed(int checkpointUniqueId)`

**用途 / Purpose:** 在 「checkpoint used」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CheckpointMissionLogic 实例
CheckpointMissionLogic checkpointMissionLogic = ...;
checkpointMissionLogic.OnCheckpointUsed(0);
```

### RegisterAgent
`public void RegisterAgent(Agent agent)`

**用途 / Purpose:** 将「agent」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 CheckpointMissionLogic 实例
CheckpointMissionLogic checkpointMissionLogic = ...;
checkpointMissionLogic.RegisterAgent(agent);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<CheckpointMissionLogic>();
```

## 参见

- [本区域目录](../)