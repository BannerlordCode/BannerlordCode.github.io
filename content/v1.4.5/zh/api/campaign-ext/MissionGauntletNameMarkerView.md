---
title: "MissionGauntletNameMarkerView"
description: "MissionGauntletNameMarkerView 的自动生成类参考。"
---
# MissionGauntletNameMarkerView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletNameMarkerView : MissionNameMarkerUIHandler`
**Base:** `MissionNameMarkerUIHandler`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Missions/MissionGauntletNameMarkerView.cs`

## 概述

`MissionGauntletNameMarkerView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletNameMarkerView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletNameMarkerView 实例
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletNameMarkerView 实例
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletNameMarkerView 实例
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnMissionScreenTick(0);
```

### SetMarkersDirty
`public override void SetMarkersDirty()`

**用途 / Purpose:** 为 markers dirty 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionGauntletNameMarkerView 实例
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.SetMarkersDirty();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent affectedAgent, Banner banner)`

**用途 / Purpose:** 在 agent build 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletNameMarkerView 实例
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnAgentBuild(affectedAgent, banner);
```

### OnAgentDeleted
`public override void OnAgentDeleted(Agent affectedAgent)`

**用途 / Purpose:** 在 agent deleted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletNameMarkerView 实例
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnAgentDeleted(affectedAgent);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletNameMarkerView 实例
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** 在 photo mode activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletNameMarkerView 实例
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** 在 photo mode deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletNameMarkerView 实例
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnPhotoModeDeactivated();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionGauntletNameMarkerView view = ...;
```

## 参见

- [本区域目录](../)