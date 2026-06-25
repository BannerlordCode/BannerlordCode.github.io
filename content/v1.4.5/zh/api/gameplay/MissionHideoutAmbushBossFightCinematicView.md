---
title: "MissionHideoutAmbushBossFightCinematicView"
description: "MissionHideoutAmbushBossFightCinematicView 的自动生成类参考。"
---
# MissionHideoutAmbushBossFightCinematicView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `internal class MissionHideoutAmbushBossFightCinematicView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionHideoutAmbushBossFightCinematicView.cs`

## 概述

`MissionHideoutAmbushBossFightCinematicView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionHideoutAmbushBossFightCinematicView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionHideoutAmbushBossFightCinematicView 实例
MissionHideoutAmbushBossFightCinematicView missionHideoutAmbushBossFightCinematicView = ...;
missionHideoutAmbushBossFightCinematicView.OnMissionScreenTick(0);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionHideoutAmbushBossFightCinematicView view = ...;
```

## 参见

- [本区域目录](../../)