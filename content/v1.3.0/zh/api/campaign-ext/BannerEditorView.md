---
title: "BannerEditorView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerEditorView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Exit
`public void Exit(bool isCancel)`

**用途 / Purpose:** 处理 `exit` 相关逻辑。

### OnDeactivate
`public void OnDeactivate()`

**用途 / Purpose:** 当 `deactivate` 事件触发时调用此方法。

### GoToIndex
`public void GoToIndex(int index)`

**用途 / Purpose:** 处理 `go to index` 相关逻辑。

## 使用示例

```csharp
var view = new BannerEditorView();
```

## 参见

- [完整类目录](../catalog)