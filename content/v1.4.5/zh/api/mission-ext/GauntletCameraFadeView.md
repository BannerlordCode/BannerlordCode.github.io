---
title: "GauntletCameraFadeView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletCameraFadeView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletCameraFadeView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletCameraFadeView : GlobalLayer, IScreenFadeHandler`
**Base:** `GlobalLayer`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletCameraFadeView.cs`

## 概述

`GauntletCameraFadeView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletCameraFadeView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### BeginFadeOutAndIn
`public void BeginFadeOutAndIn(float fadeOutDuration = 0.5f, float blackOutDuration = 0.5f, float fadeInDuration = 0.5f)`

**用途 / Purpose:** 处理 `begin fade out and in` 相关逻辑。

### BeginFadeOut
`public void BeginFadeOut(float fadeOutDuration = 0.5f)`

**用途 / Purpose:** 处理 `begin fade out` 相关逻辑。

### BeginFadeIn
`public void BeginFadeIn(float fadeInDuration = 0.5f)`

**用途 / Purpose:** 处理 `begin fade in` 相关逻辑。

### GetScreenFadeState
`public ScreenFadeState GetScreenFadeState()`

**用途 / Purpose:** 获取 `screen fade state` 的当前值。

## 使用示例

```csharp
var view = new GauntletCameraFadeView();
```

## 参见

- [完整类目录](../catalog)