---
title: "SpectatorCameraView"
description: "SpectatorCameraView 的自动生成类参考。"
---
# SpectatorCameraView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpectatorCameraView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SpectatorCameraView.cs`

## 概述

`SpectatorCameraView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `SpectatorCameraView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SpectatorCameraView 实例
SpectatorCameraView spectatorCameraView = ...;
spectatorCameraView.OnMissionScreenInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 SpectatorCameraView 实例
SpectatorCameraView spectatorCameraView = ...;
spectatorCameraView.AfterStart();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
SpectatorCameraView view = ...;
```

## 参见

- [本区域目录](../)