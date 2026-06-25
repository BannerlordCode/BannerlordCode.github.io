---
title: "MissionGauntletKillNotificationSingleplayerUIHandler"
description: "MissionGauntletKillNotificationSingleplayerUIHandler 的自动生成类参考。"
---
# MissionGauntletKillNotificationSingleplayerUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletKillNotificationSingleplayerUIHandler : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs`

## 概述

`MissionGauntletKillNotificationSingleplayerUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionGauntletKillNotificationSingleplayerUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletKillNotificationSingleplayerUIHandler 实例
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletKillNotificationSingleplayerUIHandler 实例
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnMissionScreenFinalize();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletKillNotificationSingleplayerUIHandler 实例
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** **用途 / Purpose:** 在 photo mode activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletKillNotificationSingleplayerUIHandler 实例
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** **用途 / Purpose:** 在 photo mode deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletKillNotificationSingleplayerUIHandler 实例
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnPhotoModeDeactivated();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletKillNotificationSingleplayerUIHandler>();
```

## 参见

- [本区域目录](../)