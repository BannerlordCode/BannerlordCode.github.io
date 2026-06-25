---
title: "MapParleyAnimationView"
description: "MapParleyAnimationView 的自动生成类参考。"
---
# MapParleyAnimationView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapParleyAnimationView : MapView`
**Base:** `MapView`
**File:** `SandBox.View/Map/MapParleyAnimationView.cs`

## 概述

`MapParleyAnimationView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MapParleyAnimationView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MapParleyAnimationView view = ...;
```

## 参见

- [本区域目录](../)