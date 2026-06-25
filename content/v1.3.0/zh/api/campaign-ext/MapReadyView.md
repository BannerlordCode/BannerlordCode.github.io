---
title: "MapReadyView"
description: "MapReadyView 的自动生成类参考。"
---
# MapReadyView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapReadyView : MapView`
**Base:** `MapView`
**File:** `SandBox.View/Map/MapReadyView.cs`

## 概述

`MapReadyView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MapReadyView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetIsMapSceneReady
`public virtual void SetIsMapSceneReady(bool isReady)`

**用途 / Purpose:** 为 is map scene ready 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapReadyView 实例
MapReadyView mapReadyView = ...;
mapReadyView.SetIsMapSceneReady(false);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MapReadyView view = ...;
```

## 参见

- [本区域目录](../)