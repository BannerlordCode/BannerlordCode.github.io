---
title: "MissionGauntletBoardGameView"
description: "MissionGauntletBoardGameView 的自动生成类参考。"
---
# MissionGauntletBoardGameView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletBoardGameView : MissionView, IBoardGameHandler`
**Base:** `MissionView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs`

## 概述

`MissionGauntletBoardGameView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletBoardGameView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `_missionBoardGameHandler` | `public MissionBoardGameLogic _missionBoardGameHandler { get; }` |
| `Camera` | `public Camera Camera { get; }` |

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBoardGameView 实例
MissionGauntletBoardGameView missionGauntletBoardGameView = ...;
missionGauntletBoardGameView.OnMissionScreenInitialize();
```

### OnMissionScreenActivate
`public override void OnMissionScreenActivate()`

**用途 / Purpose:** 在 mission screen activate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBoardGameView 实例
MissionGauntletBoardGameView missionGauntletBoardGameView = ...;
missionGauntletBoardGameView.OnMissionScreenActivate();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBoardGameView 实例
MissionGauntletBoardGameView missionGauntletBoardGameView = ...;
missionGauntletBoardGameView.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBoardGameView 实例
MissionGauntletBoardGameView missionGauntletBoardGameView = ...;
missionGauntletBoardGameView.OnMissionScreenFinalize();
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** 在 photo mode activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBoardGameView 实例
MissionGauntletBoardGameView missionGauntletBoardGameView = ...;
missionGauntletBoardGameView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** 在 photo mode deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBoardGameView 实例
MissionGauntletBoardGameView missionGauntletBoardGameView = ...;
missionGauntletBoardGameView.OnPhotoModeDeactivated();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionGauntletBoardGameView view = ...;
```

## 参见

- [本区域目录](../)