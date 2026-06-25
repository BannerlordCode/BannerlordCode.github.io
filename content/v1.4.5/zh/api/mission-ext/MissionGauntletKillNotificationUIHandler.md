---
title: "MissionGauntletKillNotificationUIHandler"
description: "MissionGauntletKillNotificationUIHandler 的自动生成类参考。"
---
# MissionGauntletKillNotificationUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletKillNotificationUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletKillNotificationUIHandler.cs`

## 概述

`MissionGauntletKillNotificationUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionGauntletKillNotificationUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletKillNotificationUIHandler 实例
MissionGauntletKillNotificationUIHandler missionGauntletKillNotificationUIHandler = ...;
missionGauntletKillNotificationUIHandler.OnMissionScreenInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionGauntletKillNotificationUIHandler 实例
MissionGauntletKillNotificationUIHandler missionGauntletKillNotificationUIHandler = ...;
missionGauntletKillNotificationUIHandler.AfterStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletKillNotificationUIHandler 实例
MissionGauntletKillNotificationUIHandler missionGauntletKillNotificationUIHandler = ...;
missionGauntletKillNotificationUIHandler.OnMissionScreenFinalize();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletKillNotificationUIHandler 实例
MissionGauntletKillNotificationUIHandler missionGauntletKillNotificationUIHandler = ...;
missionGauntletKillNotificationUIHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletKillNotificationUIHandler>();
```

## 参见

- [本区域目录](../)