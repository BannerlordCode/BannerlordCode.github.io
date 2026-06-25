---
title: "MissionGauntletHideoutAmbushCinematicView"
description: "MissionGauntletHideoutAmbushCinematicView 的自动生成类参考。"
---
# MissionGauntletHideoutAmbushCinematicView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletHideoutAmbushCinematicView : MissionHideoutAmbushCinematicView`
**Base:** `MissionHideoutAmbushCinematicView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletHideoutAmbushCinematicView.cs`

## 概述

`MissionGauntletHideoutAmbushCinematicView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletHideoutAmbushCinematicView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletHideoutAmbushCinematicView 实例
MissionGauntletHideoutAmbushCinematicView missionGauntletHideoutAmbushCinematicView = ...;
missionGauntletHideoutAmbushCinematicView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletHideoutAmbushCinematicView 实例
MissionGauntletHideoutAmbushCinematicView missionGauntletHideoutAmbushCinematicView = ...;
missionGauntletHideoutAmbushCinematicView.OnMissionScreenFinalize();
```

### HitTest
`public override bool HitTest()`

**用途 / Purpose:** **用途 / Purpose:** 调用 HitTest 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionGauntletHideoutAmbushCinematicView 实例
MissionGauntletHideoutAmbushCinematicView missionGauntletHideoutAmbushCinematicView = ...;
var result = missionGauntletHideoutAmbushCinematicView.HitTest();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionGauntletHideoutAmbushCinematicView view = ...;
```

## 参见

- [本区域目录](../)