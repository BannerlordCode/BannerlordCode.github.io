---
title: "TwoDimensionView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TwoDimensionView`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TwoDimensionView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TwoDimensionView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/TwoDimensionView.cs`

## 概述

`TwoDimensionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `TwoDimensionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateTwoDimension
`public static TwoDimensionView CreateTwoDimension()`

**用途 / Purpose:** 创建一个 `two dimension` 实例或对象。

### BeginFrame
`public void BeginFrame()`

**用途 / Purpose:** 处理 `begin frame` 相关逻辑。

### EndFrame
`public void EndFrame()`

**用途 / Purpose:** 处理 `end frame` 相关逻辑。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### CreateMeshFromDescription
`public void CreateMeshFromDescription(Material material, TwoDimensionMeshDrawData meshDrawData)`

**用途 / Purpose:** 创建一个 `mesh from description` 实例或对象。

### CreateTextMeshFromCache
`public bool CreateTextMeshFromCache(Material material, TwoDimensionTextMeshDrawData meshDrawData)`

**用途 / Purpose:** 创建一个 `text mesh from cache` 实例或对象。

### CreateTextMeshFromDescription
`public void CreateTextMeshFromDescription(float vertices, float uvs, uint indices, int indexCount, Material material, TwoDimensionTextMeshDrawData meshDrawData)`

**用途 / Purpose:** 创建一个 `text mesh from description` 实例或对象。

## 使用示例

```csharp
var view = new TwoDimensionView();
```

## 参见

- [完整类目录](../catalog)