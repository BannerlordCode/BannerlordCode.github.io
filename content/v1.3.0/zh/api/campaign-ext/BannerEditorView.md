---
title: "BannerEditorView"
description: "BannerEditorView 的自动生成类参考。"
---
# BannerEditorView

**Namespace:** SandBox.GauntletUI.BannerEditor
**Module:** SandBox.GauntletUI
**Type:** `public class BannerEditorView`
**Base:** 无
**File:** `SandBox.GauntletUI/BannerEditor/BannerEditorView.cs`

## 概述

`BannerEditorView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `BannerEditorView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `GauntletLayer` | `public GauntletLayer GauntletLayer { get; }` |
| `DataSource` | `public BannerEditorVM DataSource { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |

## 主要方法

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerEditorView 实例
BannerEditorView bannerEditorView = ...;
bannerEditorView.OnTick(0);
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerEditorView 实例
BannerEditorView bannerEditorView = ...;
bannerEditorView.OnFinalize();
```

### Exit
`public void Exit(bool isCancel)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Exit 对应的操作。

```csharp
// 先通过子系统 API 拿到 BannerEditorView 实例
BannerEditorView bannerEditorView = ...;
bannerEditorView.Exit(false);
```

### OnDeactivate
`public void OnDeactivate()`

**用途 / Purpose:** **用途 / Purpose:** 在 deactivate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerEditorView 实例
BannerEditorView bannerEditorView = ...;
bannerEditorView.OnDeactivate();
```

### GoToIndex
`public void GoToIndex(int index)`

**用途 / Purpose:** **用途 / Purpose:** 调用 GoToIndex 对应的操作。

```csharp
// 先通过子系统 API 拿到 BannerEditorView 实例
BannerEditorView bannerEditorView = ...;
bannerEditorView.GoToIndex(0);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
BannerEditorView view = ...;
```

## 参见

- [本区域目录](../)