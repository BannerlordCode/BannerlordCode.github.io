---
title: "MissionBoundaryCrossingHandler"
description: "MissionBoundaryCrossingHandler 的自动生成类参考。"
---
# MissionBoundaryCrossingHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBoundaryCrossingHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBoundaryCrossingHandler.cs`

## 概述

`MissionBoundaryCrossingHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionBoundaryCrossingHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBoundaryCrossingHandler 实例
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBoundaryCrossingHandler 实例
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnRemoveBehavior();
```

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 在 clear scene 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBoundaryCrossingHandler 实例
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnClearScene();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBoundaryCrossingHandler 实例
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBoundaryCrossingHandler 实例
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnMissionTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionBoundaryCrossingHandler>();
```

## 参见

- [本区域目录](../)