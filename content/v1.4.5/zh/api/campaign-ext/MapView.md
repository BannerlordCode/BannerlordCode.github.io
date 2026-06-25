---
title: "MapView"
description: "MapView 的自动生成类参考。"
---
# MapView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public abstract class MapView : SandboxView`
**Base:** `SandboxView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapView.cs`

## 概述

`MapView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MapView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapScreen` | `public MapScreen MapScreen { get; set; }` |
| `MapState` | `public MapState MapState { get; set; }` |

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MapView instance = ...;
```

## 参见

- [本区域目录](../)