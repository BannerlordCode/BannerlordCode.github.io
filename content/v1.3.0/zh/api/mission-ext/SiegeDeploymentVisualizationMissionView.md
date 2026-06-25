---
title: "SiegeDeploymentVisualizationMissionView"
description: "SiegeDeploymentVisualizationMissionView 的自动生成类参考。"
---
# SiegeDeploymentVisualizationMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeDeploymentVisualizationMissionView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/SiegeDeploymentVisualizationMissionView.cs`

## 概述

`SiegeDeploymentVisualizationMissionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `SiegeDeploymentVisualizationMissionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentVisualizationMissionView 实例
SiegeDeploymentVisualizationMissionView siegeDeploymentVisualizationMissionView = ...;
siegeDeploymentVisualizationMissionView.AfterStart();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** 在 「deployment finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentVisualizationMissionView 实例
SiegeDeploymentVisualizationMissionView siegeDeploymentVisualizationMissionView = ...;
siegeDeploymentVisualizationMissionView.OnDeploymentFinished();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentVisualizationMissionView 实例
SiegeDeploymentVisualizationMissionView siegeDeploymentVisualizationMissionView = ...;
siegeDeploymentVisualizationMissionView.OnRemoveBehavior();
```

### SetDeploymentVisualizationSelector
`public static string SetDeploymentVisualizationSelector(List<string> strings)`

**用途 / Purpose:** 为 「deployment visualization selector」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
SiegeDeploymentVisualizationMissionView.SetDeploymentVisualizationSelector(strings);
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentVisualizationMissionView 实例
SiegeDeploymentVisualizationMissionView siegeDeploymentVisualizationMissionView = ...;
siegeDeploymentVisualizationMissionView.OnMissionScreenTick(0);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
SiegeDeploymentVisualizationMissionView view = ...;
```

## 参见

- [本区域目录](../)