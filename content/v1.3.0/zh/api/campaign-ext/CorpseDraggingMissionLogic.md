---
title: "CorpseDraggingMissionLogic"
description: "CorpseDraggingMissionLogic 的自动生成类参考。"
---
# CorpseDraggingMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CorpseDraggingMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/CorpseDraggingMissionLogic.cs`

## 概述

`CorpseDraggingMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `CorpseDraggingMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 CorpseDraggingMissionLogic 实例
CorpseDraggingMissionLogic corpseDraggingMissionLogic = ...;
corpseDraggingMissionLogic.AfterStart();
```

### OnFixedMissionTick
`public override void OnFixedMissionTick(float fixedDt)`

**用途 / Purpose:** 在 fixed mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CorpseDraggingMissionLogic 实例
CorpseDraggingMissionLogic corpseDraggingMissionLogic = ...;
corpseDraggingMissionLogic.OnFixedMissionTick(0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CorpseDraggingMissionLogic 实例
CorpseDraggingMissionLogic corpseDraggingMissionLogic = ...;
corpseDraggingMissionLogic.OnMissionTick(0);
```

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** 判断当前对象是否处于 there agent action 状态或条件。

```csharp
// 先通过子系统 API 拿到 CorpseDraggingMissionLogic 实例
CorpseDraggingMissionLogic corpseDraggingMissionLogic = ...;
var result = corpseDraggingMissionLogic.IsThereAgentAction(userAgent, otherAgent);
```

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 agent interaction 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CorpseDraggingMissionLogic 实例
CorpseDraggingMissionLogic corpseDraggingMissionLogic = ...;
corpseDraggingMissionLogic.OnAgentInteraction(userAgent, agent, 0);
```

### OnCollectPlayerEventControlFlags
`public Agent.EventControlFlag OnCollectPlayerEventControlFlags()`

**用途 / Purpose:** 在 collect player event control flags 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CorpseDraggingMissionLogic 实例
CorpseDraggingMissionLogic corpseDraggingMissionLogic = ...;
var result = corpseDraggingMissionLogic.OnCollectPlayerEventControlFlags();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<CorpseDraggingMissionLogic>();
```

## 参见

- [本区域目录](../)