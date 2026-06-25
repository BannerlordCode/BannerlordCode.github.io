---
title: "GauntletCameraFadeView"
description: "GauntletCameraFadeView 的自动生成类参考。"
---
# GauntletCameraFadeView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletCameraFadeView : GlobalLayer, IScreenFadeHandler`
**Base:** `GlobalLayer`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletCameraFadeView.cs`

## 概述

`GauntletCameraFadeView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletCameraFadeView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 静态调用，不需要实例
GauntletCameraFadeView.Initialize();
```

### BeginFadeOutAndIn
`public void BeginFadeOutAndIn(float fadeOutDuration = 0.5f, float blackOutDuration = 0.5f, float fadeInDuration = 0.5f)`

**用途 / Purpose:** 调用 BeginFadeOutAndIn 对应的操作。

```csharp
// 先通过子系统 API 拿到 GauntletCameraFadeView 实例
GauntletCameraFadeView gauntletCameraFadeView = ...;
gauntletCameraFadeView.BeginFadeOutAndIn(0, 0, 0);
```

### BeginFadeOut
`public void BeginFadeOut(float fadeOutDuration = 0.5f)`

**用途 / Purpose:** 调用 BeginFadeOut 对应的操作。

```csharp
// 先通过子系统 API 拿到 GauntletCameraFadeView 实例
GauntletCameraFadeView gauntletCameraFadeView = ...;
gauntletCameraFadeView.BeginFadeOut(0);
```

### BeginFadeIn
`public void BeginFadeIn(float fadeInDuration = 0.5f)`

**用途 / Purpose:** 调用 BeginFadeIn 对应的操作。

```csharp
// 先通过子系统 API 拿到 GauntletCameraFadeView 实例
GauntletCameraFadeView gauntletCameraFadeView = ...;
gauntletCameraFadeView.BeginFadeIn(0);
```

### GetScreenFadeState
`public ScreenFadeState GetScreenFadeState()`

**用途 / Purpose:** 读取并返回当前对象中 screen fade state 的结果。

```csharp
// 先通过子系统 API 拿到 GauntletCameraFadeView 实例
GauntletCameraFadeView gauntletCameraFadeView = ...;
var result = gauntletCameraFadeView.GetScreenFadeState();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
GauntletCameraFadeView view = ...;
```

## 参见

- [本区域目录](../)