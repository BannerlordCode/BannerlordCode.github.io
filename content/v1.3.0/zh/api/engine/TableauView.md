---
title: "TableauView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TableauView`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TableauView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TableauView : SceneView`
**Base:** `SceneView`
**File:** `TaleWorlds.Engine/TableauView.cs`

## 概述

`TableauView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `TableauView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateTableauView
`public static TableauView CreateTableauView()`

**用途 / Purpose:** 创建一个 `tableau view` 实例或对象。

### SetSortingEnabled
`public void SetSortingEnabled(bool value)`

**用途 / Purpose:** 设置 `sorting enabled` 的值或状态。

### SetContinuousRendering
`public void SetContinuousRendering(bool value)`

**用途 / Purpose:** 设置 `continuous rendering` 的值或状态。

### SetDoNotRenderThisFrame
`public void SetDoNotRenderThisFrame(bool value)`

**用途 / Purpose:** 设置 `do not render this frame` 的值或状态。

### SetDeleteAfterRendering
`public void SetDeleteAfterRendering(bool value)`

**用途 / Purpose:** 设置 `delete after rendering` 的值或状态。

### AddTableau
`public static Texture AddTableau(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)`

**用途 / Purpose:** 向当前集合/状态中添加 `tableau`。

## 使用示例

```csharp
var view = new TableauView();
```

## 参见

- [完整类目录](../catalog)