---
title: "MissionGauntletTrainingFieldObjectiveView"
description: "MissionGauntletTrainingFieldObjectiveView 的自动生成类参考。"
---
# MissionGauntletTrainingFieldObjectiveView

**Namespace:** StoryMode.GauntletUI.Missions
**Module:** StoryMode.GauntletUI
**Type:** `public class MissionGauntletTrainingFieldObjectiveView : MissionView`
**Base:** `MissionView`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Missions/MissionGauntletTrainingFieldObjectiveView.cs`

## 概述

`MissionGauntletTrainingFieldObjectiveView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletTrainingFieldObjectiveView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletTrainingFieldObjectiveView 实例
MissionGauntletTrainingFieldObjectiveView missionGauntletTrainingFieldObjectiveView = ...;
missionGauntletTrainingFieldObjectiveView.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletTrainingFieldObjectiveView 实例
MissionGauntletTrainingFieldObjectiveView missionGauntletTrainingFieldObjectiveView = ...;
missionGauntletTrainingFieldObjectiveView.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletTrainingFieldObjectiveView 实例
MissionGauntletTrainingFieldObjectiveView missionGauntletTrainingFieldObjectiveView = ...;
missionGauntletTrainingFieldObjectiveView.OnMissionScreenFinalize();
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** 在 photo mode activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletTrainingFieldObjectiveView 实例
MissionGauntletTrainingFieldObjectiveView missionGauntletTrainingFieldObjectiveView = ...;
missionGauntletTrainingFieldObjectiveView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** 在 photo mode deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletTrainingFieldObjectiveView 实例
MissionGauntletTrainingFieldObjectiveView missionGauntletTrainingFieldObjectiveView = ...;
missionGauntletTrainingFieldObjectiveView.OnPhotoModeDeactivated();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionGauntletTrainingFieldObjectiveView view = ...;
```

## 参见

- [本区域目录](../)