---
title: "MissionPreloadView"
description: "MissionPreloadView 的自动生成类参考。"
---
# MissionPreloadView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionPreloadView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionPreloadView.cs`

## 概述

`MissionPreloadView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionPreloadView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** 在 pre mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPreloadView 实例
MissionPreloadView missionPreloadView = ...;
missionPreloadView.OnPreMissionTick(0);
```

### OnSceneRenderingStarted
`public override void OnSceneRenderingStarted()`

**用途 / Purpose:** 在 scene rendering started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPreloadView 实例
MissionPreloadView missionPreloadView = ...;
missionPreloadView.OnSceneRenderingStarted();
```

### OnMissionStateDeactivated
`public override void OnMissionStateDeactivated()`

**用途 / Purpose:** 在 mission state deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPreloadView 实例
MissionPreloadView missionPreloadView = ...;
missionPreloadView.OnMissionStateDeactivated();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPreloadView 实例
MissionPreloadView missionPreloadView = ...;
missionPreloadView.OnRemoveBehavior();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionPreloadView view = ...;
```

## 参见

- [本区域目录](../)