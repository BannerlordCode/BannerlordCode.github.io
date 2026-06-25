---
title: "MissionHideoutCinematicView"
description: "MissionHideoutCinematicView 的自动生成类参考。"
---
# MissionHideoutCinematicView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionHideoutCinematicView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionHideoutCinematicView.cs`

## 概述

`MissionHideoutCinematicView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionHideoutCinematicView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionHideoutCinematicView 实例
MissionHideoutCinematicView missionHideoutCinematicView = ...;
missionHideoutCinematicView.OnMissionScreenTick(0);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionHideoutCinematicView view = ...;
```

## 参见

- [本区域目录](../)