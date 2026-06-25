---
title: "ReplayMissionView"
description: "ReplayMissionView 的自动生成类参考。"
---
# ReplayMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReplayMissionView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/ReplayMissionView.cs`

## 概述

`ReplayMissionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `ReplayMissionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ReplayMissionView 实例
ReplayMissionView replayMissionView = ...;
replayMissionView.OnBehaviorInitialize();
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** 在 pre mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ReplayMissionView 实例
ReplayMissionView replayMissionView = ...;
replayMissionView.OnPreMissionTick(0);
```

### OverrideInput
`public void OverrideInput(bool isOverridden)`

**用途 / Purpose:** 调用 OverrideInput 对应的操作。

```csharp
// 先通过子系统 API 拿到 ReplayMissionView 实例
ReplayMissionView replayMissionView = ...;
replayMissionView.OverrideInput(false);
```

### ResetReplay
`public void ResetReplay()`

**用途 / Purpose:** 将 replay 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 ReplayMissionView 实例
ReplayMissionView replayMissionView = ...;
replayMissionView.ResetReplay();
```

### Rewind
`public void Rewind(float time)`

**用途 / Purpose:** 调用 Rewind 对应的操作。

```csharp
// 先通过子系统 API 拿到 ReplayMissionView 实例
ReplayMissionView replayMissionView = ...;
replayMissionView.Rewind(0);
```

### FastForward
`public void FastForward(float time)`

**用途 / Purpose:** 调用 FastForward 对应的操作。

```csharp
// 先通过子系统 API 拿到 ReplayMissionView 实例
ReplayMissionView replayMissionView = ...;
replayMissionView.FastForward(0);
```

### Pause
`public void Pause()`

**用途 / Purpose:** 调用 Pause 对应的操作。

```csharp
// 先通过子系统 API 拿到 ReplayMissionView 实例
ReplayMissionView replayMissionView = ...;
replayMissionView.Pause();
```

### Resume
`public void Resume()`

**用途 / Purpose:** 调用 Resume 对应的操作。

```csharp
// 先通过子系统 API 拿到 ReplayMissionView 实例
ReplayMissionView replayMissionView = ...;
replayMissionView.Resume();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
ReplayMissionView view = ...;
```

## 参见

- [本区域目录](../)