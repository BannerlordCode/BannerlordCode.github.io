---
title: "MissionGauntletTournamentView"
description: "MissionGauntletTournamentView 的自动生成类参考。"
---
# MissionGauntletTournamentView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletTournamentView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletTournamentView.cs`

## 概述

`MissionGauntletTournamentView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletTournamentView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletTournamentView 实例
MissionGauntletTournamentView missionGauntletTournamentView = ...;
missionGauntletTournamentView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletTournamentView 实例
MissionGauntletTournamentView missionGauntletTournamentView = ...;
missionGauntletTournamentView.OnMissionScreenFinalize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionGauntletTournamentView 实例
MissionGauntletTournamentView missionGauntletTournamentView = ...;
missionGauntletTournamentView.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletTournamentView 实例
MissionGauntletTournamentView missionGauntletTournamentView = ...;
missionGauntletTournamentView.OnMissionTick(0);
```

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 opening escape menu on focus change allowed 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionGauntletTournamentView 实例
MissionGauntletTournamentView missionGauntletTournamentView = ...;
var result = missionGauntletTournamentView.IsOpeningEscapeMenuOnFocusChangeAllowed();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletTournamentView 实例
MissionGauntletTournamentView missionGauntletTournamentView = ...;
missionGauntletTournamentView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** **用途 / Purpose:** 在 photo mode activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletTournamentView 实例
MissionGauntletTournamentView missionGauntletTournamentView = ...;
missionGauntletTournamentView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** **用途 / Purpose:** 在 photo mode deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletTournamentView 实例
MissionGauntletTournamentView missionGauntletTournamentView = ...;
missionGauntletTournamentView.OnPhotoModeDeactivated();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionGauntletTournamentView view = ...;
```

## 参见

- [本区域目录](../)