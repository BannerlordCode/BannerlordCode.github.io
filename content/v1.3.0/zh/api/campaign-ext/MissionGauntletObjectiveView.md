---
title: "MissionGauntletObjectiveView"
description: "MissionGauntletObjectiveView 的自动生成类参考。"
---
# MissionGauntletObjectiveView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletObjectiveView : MissionObjectiveView`
**Base:** `MissionObjectiveView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/SandBox/GauntletUI/Missions/MissionGauntletObjectiveView.cs`

## 概述

`MissionGauntletObjectiveView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletObjectiveView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletObjectiveView 实例
MissionGauntletObjectiveView missionGauntletObjectiveView = ...;
missionGauntletObjectiveView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletObjectiveView 实例
MissionGauntletObjectiveView missionGauntletObjectiveView = ...;
missionGauntletObjectiveView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletObjectiveView 实例
MissionGauntletObjectiveView missionGauntletObjectiveView = ...;
missionGauntletObjectiveView.OnMissionScreenTick(0);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** **用途 / Purpose:** 在 photo mode activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletObjectiveView 实例
MissionGauntletObjectiveView missionGauntletObjectiveView = ...;
missionGauntletObjectiveView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** **用途 / Purpose:** 在 photo mode deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletObjectiveView 实例
MissionGauntletObjectiveView missionGauntletObjectiveView = ...;
missionGauntletObjectiveView.OnPhotoModeDeactivated();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionGauntletObjectiveView view = ...;
```

## 参见

- [本区域目录](../)